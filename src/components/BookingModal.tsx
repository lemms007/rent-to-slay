import React, { useState } from 'react';
import { 
  X, CheckCircle2, ShieldCheck, QrCode, Upload, Copy, 
  Truck, ArrowRight, ArrowLeft, Calendar, AlertCircle, Sparkles, Download, Printer, FileText, ShoppingBag
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Dress, Booking, CartItem } from '../types';
import { calculateRentalWindow, formatPhilippineDate, formatPHP, calculateRentalFee } from '../utils/dateUtils';
import { TermsModal } from './TermsModal';

interface BookingModalProps {
  dress: Dress | null;
  cartItems?: CartItem[];
  initialEventDate: string;
  initialDuration: number;
  onClose: () => void;
  onBookingSuccess: (newBooking: Booking, bookedItems?: CartItem[]) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  dress,
  cartItems,
  initialEventDate,
  initialDuration,
  onClose,
  onBookingSuccess
}) => {
  const isMultiDress = Boolean(cartItems && cartItems.length > 0);
  const activeDress = dress || (isMultiDress ? cartItems![0].dress : null);
  if (!activeDress && !isMultiDress) return null;

  const [step, setStep] = useState<'schedule' | 'shipping' | 'payment' | 'confirmation'>('schedule');
  const [showTermsModal, setShowTermsModal] = useState(false);

  // Booking Form State
  const [eventDate, setEventDate] = useState<string>(
    initialEventDate || (isMultiDress ? cartItems![0].eventDate : '')
  );
  const [duration, setDuration] = useState<number>(
    initialDuration || (isMultiDress ? cartItems![0].durationDays : 4)
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    activeDress ? (activeDress.availableSizes[0] || 'S') : 'S'
  );

  // Customer & Shipping State
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+63 ');
  const [deliveryMethod, setDeliveryMethod] = useState<'lalamove_same_day' | 'grab_express' | 'studio_pickup' | 'provincial_lbc_jt'>('lalamove_same_day');
  const [street, setStreet] = useState('');
  const [barangay, setBarangay] = useState('');
  const [city, setCity] = useState('Quezon City');
  const [province, setProvince] = useState('Metro Manila');
  const [landmarks, setLandmarks] = useState('');

  // Payment State
  const [paymentMethod, setPaymentMethod] = useState<'gcash' | 'bank_bdo' | 'bank_bpi' | 'bank_unionbank' | 'maya'>('gcash');
  const [paymentReference, setPaymentReference] = useState('');
  const [paymentProofUrl, setPaymentProofUrl] = useState<string>('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Confirmed booking record
  const [createdBooking, setCreatedBooking] = useState<Booking | null>(null);

  // Rental schedule calculation
  const rentalWindow = calculateRentalWindow(eventDate, duration);

  // Fees calculation per policy: 100% upfront fee, 50% returned upon safe garment return
  const upfrontRentalFee = isMultiDress 
    ? cartItems!.reduce((sum, item) => sum + item.rentalFee, 0)
    : calculateRentalFee(activeDress!, duration);

  const securityDeposit = Math.round(upfrontRentalFee * 0.50); // 50% returned to renter upon return
  const netRentalFee = upfrontRentalFee - securityDeposit; // 50% net cost
  const shippingFee = deliveryMethod === 'studio_pickup' ? 0 : deliveryMethod === 'provincial_lbc_jt' ? 380 : 250;
  const totalAmount = upfrontRentalFee + shippingFee;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  // Image upload handler
  const handleReceiptUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPaymentProofUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();

    if (!termsAccepted) {
      alert('Please accept the Love Humbly Rental Terms and Damage Policy to continue.');
      return;
    }

    if (!paymentReference.trim()) {
      alert('Please enter your GCash or Bank Transfer reference number.');
      return;
    }

    const orderNumber = `LH-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    const newBooking: Booking = {
      id: `bk-${Date.now()}`,
      orderNumber,
      dressId: isMultiDress ? 'multi-item' : activeDress!.id,
      dressName: isMultiDress 
        ? `${cartItems!.length} Designer Gowns (${cartItems!.map(c => c.dress.name).join(', ')})`
        : activeDress!.name,
      dressImage: isMultiDress ? cartItems![0].dress.images[0] : activeDress!.images[0],
      size: isMultiDress ? cartItems!.map(c => `${c.dress.name.substring(0, 14)}: ${c.size}`).join('; ') : selectedSize,
      eventDate: isMultiDress ? cartItems![0].eventDate : eventDate,
      startDate: isMultiDress ? cartItems![0].startDate : rentalWindow.startDate,
      returnDate: isMultiDress ? cartItems![0].returnDate : rentalWindow.returnDate,
      durationDays: isMultiDress ? cartItems![0].durationDays : duration,
      customerName,
      email,
      phone,
      deliveryMethod,
      deliveryAddress: {
        street,
        barangay,
        city,
        province,
        landmarks
      },
      paymentMethod,
      paymentReference: paymentReference.trim(),
      paymentProofUrl: paymentProofUrl || undefined,
      paymentStatus: 'pending_verification',
      bookingStatus: 'confirmed',
      rentalFee: upfrontRentalFee,
      securityDeposit,
      shippingFee,
      totalAmount,
      totalRefundUponReturn: securityDeposit,
      depositStatus: 'held',
      createdAt: new Date().toISOString(),
      items: isMultiDress ? cartItems!.map(c => ({
        dressId: c.dress.id,
        dressName: c.dress.name,
        dressImage: c.dress.images[0],
        shop: c.dress.shop,
        size: c.size,
        eventDate: c.eventDate,
        startDate: c.startDate,
        returnDate: c.returnDate,
        durationDays: c.durationDays,
        rentalFee: c.rentalFee,
        depositRefundUponReturn: c.depositRefundUponReturn,
        netRentalCost: c.netRentalCost
      })) : undefined
    };

    setCreatedBooking(newBooking);
    onBookingSuccess(newBooking, cartItems);
    setStep('confirmation');

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      // Ignore if unavailable
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div 
        className="relative bg-[#FAFAFA] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-gray-100 my-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-gray-950 text-white flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-serif text-sm font-medium shadow-xs">
              LH
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">
              Love Humbly • Rental Booking
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-wider px-2.5 py-0.5 rounded-full bg-gray-900 border border-gray-800 text-gray-300">
              🇵🇭 Philippines
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-900 text-gray-400 hover:text-white transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-step progress tracker */}
        {step !== 'confirmation' && (
          <div className="bg-white px-6 py-3 border-b border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-400">
            <div className={`flex items-center gap-1.5 ${step === 'schedule' ? 'text-gray-900 font-bold' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 'schedule' ? 'bg-[#D4AF37] text-white shadow-xs' : 'bg-gray-100 text-gray-600'}`}>1</span>
              <span>Event Date & Size</span>
            </div>
            <span className="text-gray-200">→</span>
            <div className={`flex items-center gap-1.5 ${step === 'shipping' ? 'text-gray-900 font-bold' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 'shipping' ? 'bg-[#D4AF37] text-white shadow-xs' : 'bg-gray-100 text-gray-600'}`}>2</span>
              <span>Delivery Details</span>
            </div>
            <span className="text-gray-200">→</span>
            <div className={`flex items-center gap-1.5 ${step === 'payment' ? 'text-gray-900 font-bold' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 'payment' ? 'bg-[#D4AF37] text-white shadow-xs' : 'bg-gray-100 text-gray-600'}`}>3</span>
              <span>GCash / Bank Transfer</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {/* STEP 1: SCHEDULE & SIZE */}
          {step === 'schedule' && (
            <div className="space-y-6">
              {isMultiDress ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-gray-900">
                        Multi-Dress Rental Cart ({cartItems!.length} Items)
                      </h3>
                      <p className="text-xs text-gray-500">
                        Review your booked designer dresses and scheduled dates
                      </p>
                    </div>
                    <span className="text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full font-semibold border border-emerald-200">
                      50% Refund Guarantee
                    </span>
                  </div>

                  <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                    {cartItems!.map((item, idx) => (
                      <div key={item.id || idx} className="p-3 bg-white rounded-xl border border-gray-200 flex gap-3 items-center">
                        <img
                          src={item.dress.images[0]}
                          alt={item.dress.name}
                          className="w-14 h-18 object-cover rounded-lg shrink-0"
                        />
                        <div className="flex-1 min-w-0 text-xs">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="px-1.5 py-0.5 rounded bg-stone-900 text-white text-[9px] font-semibold uppercase">
                              {item.dress.shop}
                            </span>
                            <span className="text-gray-500 font-medium">Size: <strong className="text-gray-800">{item.size}</strong></span>
                          </div>
                          <h4 className="font-serif font-bold text-gray-900 truncate">{item.dress.name}</h4>
                          <div className="text-[11px] text-gray-500 mt-1 flex flex-wrap gap-x-2">
                            <span>Event: <strong>{formatPhilippineDate(item.eventDate)}</strong></span>
                            <span>•</span>
                            <span>{item.durationDays} Days</span>
                            <span>•</span>
                            <span>Return: <strong>{formatPhilippineDate(item.returnDate)}</strong></span>
                          </div>
                        </div>
                        <div className="text-right text-xs shrink-0 pl-2">
                          <div className="font-bold text-gray-900">{formatPHP(item.rentalFee)}</div>
                          <div className="text-[10px] text-emerald-700 font-medium mt-0.5">
                            50% Refund: {formatPHP(item.depositRefundUponReturn)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FFF9F2] border border-[#F3E5D8] text-xs text-[#8A6D1C] leading-relaxed">
                    <strong>Package Dispatch:</strong> All gowns will be bundled and dispatched together directly to your address for your scheduled events.
                  </div>
                </div>
              ) : activeDress ? (
                <>
                  {/* Selected Dress Overview */}
                  <div className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-xs">
                    <img
                      src={activeDress.images[0]}
                      alt={activeDress.name}
                      className="w-20 h-24 object-cover rounded-xl shrink-0"
                    />
                    <div className="flex-1">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block">Selected Gown</span>
                      <h3 className="font-serif text-lg font-bold text-gray-900">{activeDress.name}</h3>
                      <div className="text-xs text-gray-500 mt-0.5">{activeDress.fabric} • {activeDress.silhouette}</div>
                      <div className="text-xs font-semibold text-emerald-800 mt-2">
                        50% Return Refund Guarantee: {formatPHP(securityDeposit)} refunded upon return
                      </div>
                    </div>
                  </div>

                  {/* Event Date Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-900 block">
                      Select Your Event Date *
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    />
                    <p className="text-xs text-gray-500">
                      Select the actual day of your wedding, gala, debut, or photoshoot.
                    </p>
                  </div>

                  {/* Duration Selection (Min 4 to Max 14 Days) */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-900 block">
                        Rental Duration (Min 4 Days, Max 14 Days)
                      </label>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#D4AF37] text-white shadow-xs">
                        {duration} Days Selected
                      </span>
                    </div>

                    {/* Preset Duration Buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { days: 4, label: '4-Day (Min)', sub: 'Standard Event' },
                        { days: 7, label: '7-Day (1 Wk)', sub: 'Destination / Prenup' },
                        { days: 10, label: '10-Day', sub: 'Extended Island Tour' },
                        { days: 14, label: '14-Day (Max)', sub: 'Long-term Trip' }
                      ].map(preset => {
                        const fee = calculateRentalFee(activeDress, preset.days);
                        const isSelected = duration === preset.days;
                        return (
                          <button
                            key={preset.days}
                            type="button"
                            onClick={() => setDuration(preset.days)}
                            className={`p-3 rounded-xl border text-left transition ${
                              isSelected
                                ? 'border-[#D4AF37] bg-[#FFF9F2] text-gray-900 ring-1 ring-[#D4AF37] shadow-xs'
                                : 'border-gray-200 bg-white text-gray-800 hover:border-gray-300'
                            }`}
                          >
                            <div className="font-bold text-xs">{preset.label}</div>
                            <div className="text-[10px] text-gray-500 mt-0.5 truncate">{preset.sub}</div>
                            <div className="font-serif text-sm font-bold mt-1.5 text-[#D4AF37]">
                              {formatPHP(fee)}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Custom Days Stepper & Range Slider */}
                    <div className="p-3 bg-gray-50 rounded-2xl border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="text-xs text-gray-600">
                        <span className="font-semibold text-gray-900">Custom Duration: </span>
                        <span>{duration} days rental ({formatPHP(calculateRentalFee(activeDress, duration))})</span>
                        <span className="block text-[10px] text-gray-400 mt-0.5">
                          Base 4-day rate + {formatPHP(activeDress.extraDayRate || 250)}/extra day
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <input
                          type="range"
                          min={4}
                          max={14}
                          value={duration}
                          onChange={(e) => setDuration(Number(e.target.value))}
                          className="w-32 accent-[#D4AF37] cursor-pointer"
                        />
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            disabled={duration <= 4}
                            onClick={() => setDuration(Math.max(4, duration - 1))}
                            className="w-8 h-8 rounded-lg bg-white border border-gray-200 font-bold text-gray-800 disabled:opacity-40 hover:bg-gray-100 flex items-center justify-center transition"
                          >
                            -
                          </button>
                          <span className="w-10 text-center font-serif text-base font-bold text-gray-900">
                            {duration}d
                          </span>
                          <button
                            type="button"
                            disabled={duration >= 14}
                            onClick={() => setDuration(Math.min(14, duration + 1))}
                            className="w-8 h-8 rounded-lg bg-white border border-gray-200 font-bold text-gray-800 disabled:opacity-40 hover:bg-gray-100 flex items-center justify-center transition"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Size Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-900 block">
                      Select Size
                    </label>
                    <div className="flex gap-2 flex-wrap">
                      {activeDress.availableSizes.map(size => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 rounded-xl text-xs font-semibold border transition ${
                            selectedSize === size
                              ? 'bg-[#D4AF37] text-white border-[#D4AF37] shadow-xs'
                              : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Automated Schedule Preview */}
                  {eventDate && (
                    <div className="p-4 rounded-2xl bg-[#FFF9F2] border border-[#F3E5D8] text-gray-900 space-y-2">
                      <div className="font-semibold text-xs uppercase tracking-wider text-gray-800 flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-[#D4AF37]" />
                        <span>Automated Rental Schedule</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        <div className="bg-white p-2.5 rounded-lg border border-[#F3E5D8]">
                          <span className="text-gray-400 text-[10px] block">Delivery / Dispatch</span>
                          <strong className="text-gray-900">{formatPhilippineDate(rentalWindow.startDate)}</strong>
                        </div>
                        <div className="bg-[#D4AF37]/15 p-2.5 rounded-lg border border-[#D4AF37]/30">
                          <span className="text-[#D4AF37] text-[10px] block font-bold">Event Day</span>
                          <strong className="text-gray-900">{formatPhilippineDate(rentalWindow.eventDate)}</strong>
                        </div>
                        <div className="bg-white p-2.5 rounded-lg border border-[#F3E5D8]">
                          <span className="text-gray-400 text-[10px] block">Return Pickup</span>
                          <strong className="text-gray-900">{formatPhilippineDate(rentalWindow.returnDate)}</strong>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : null}

              {/* Step 1 Next button */}
              <div className="pt-4 border-t border-gray-100 flex justify-end">
                <button
                  type="button"
                  disabled={!isMultiDress && !eventDate}
                  onClick={() => setStep('shipping')}
                  className="px-6 py-3 rounded-2xl bg-[#D4AF37] text-white font-semibold text-sm hover:bg-[#c09e32] disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>Continue to Delivery</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: PHILIPPINE SHIPPING & DETAILS */}
          {step === 'shipping' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="font-serif text-xl font-bold text-gray-900">
                  Renter & Delivery Information
                </h3>
                <span className="text-xs text-gray-500">Target: Philippines Only</span>
              </div>

              {/* Delivery Method Options */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-900 block">
                  Delivery / Pickup Method
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('lalamove_same_day')}
                    className={`p-3.5 rounded-xl border text-left transition ${
                      deliveryMethod === 'lalamove_same_day'
                        ? 'border-[#D4AF37] bg-[#FFF9F2] text-gray-900 ring-1 ring-[#D4AF37] shadow-xs'
                        : 'border-gray-200 bg-white text-gray-800 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-bold text-xs">Lalamove / Grab</div>
                    <div className="text-[11px] mt-0.5 text-gray-500">
                      Metro Manila Same-Day
                    </div>
                    <div className="text-xs font-bold mt-1 text-[#D4AF37]">₱250</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('studio_pickup')}
                    className={`p-3.5 rounded-xl border text-left transition ${
                      deliveryMethod === 'studio_pickup'
                        ? 'border-[#D4AF37] bg-[#FFF9F2] text-gray-900 ring-1 ring-[#D4AF37] shadow-xs'
                        : 'border-gray-200 bg-white text-gray-800 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-bold text-xs">Studio Pickup</div>
                    <div className="text-[11px] mt-0.5 text-gray-500">
                      Quezon City Showroom
                    </div>
                    <div className="text-xs font-bold mt-1 text-emerald-600">FREE (₱0)</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('provincial_lbc_jt')}
                    className={`p-3.5 rounded-xl border text-left transition ${
                      deliveryMethod === 'provincial_lbc_jt'
                        ? 'border-[#D4AF37] bg-[#FFF9F2] text-gray-900 ring-1 ring-[#D4AF37] shadow-xs'
                        : 'border-gray-200 bg-white text-gray-800 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-bold text-xs">LBC / J&T Express</div>
                    <div className="text-[11px] mt-0.5 text-gray-500">
                      Provincial Shipping
                    </div>
                    <div className="text-xs font-bold mt-1 text-[#D4AF37]">₱380</div>
                  </button>
                </div>
              </div>

              {/* Renter Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-700 block mb-1">
                    Full Name (As shown on valid PH ID) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maria Clara Santos"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-700 block mb-1">
                    Philippine Mobile (+63 9XX XXX XXXX) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+63 917 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-700 block mb-1">
                  Email Address (For Booking Confirmation & Receipt) *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. maria.santos@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                />
              </div>

              {/* Address details if not studio pickup */}
              {deliveryMethod !== 'studio_pickup' && (
                <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-xs space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-900 block">
                    Delivery Address in the Philippines
                  </span>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Street, Unit / House No., Building Name, Village"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Barangay"
                      value={barangay}
                      onChange={(e) => setBarangay(e.target.value)}
                      className="px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    />
                    <input
                      type="text"
                      required
                      placeholder="City / Municipality"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Province (e.g. Metro Manila)"
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                      className="px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Nearby Landmarks or Delivery Notes (Optional)"
                    value={landmarks}
                    onChange={(e) => setLandmarks(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />
                </div>
              )}

              {/* Navigation buttons */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep('schedule')}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-100 transition flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  disabled={!customerName.trim() || !phone.trim() || !email.trim()}
                  onClick={() => setStep('payment')}
                  className="px-6 py-3 rounded-2xl bg-[#D4AF37] text-white font-semibold text-sm hover:bg-[#c09e32] disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-2 shadow-xs"
                >
                  <span>Proceed to Payment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: GCASH / BANK TRANSFER PAYMENT */}
          {step === 'payment' && (
            <form onSubmit={handleCompleteBooking} className="space-y-6">
              <div className="pb-3 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-gray-900">
                  Payment via GCash or Bank Transfer
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                  Philippine Pesos (PHP)
                </span>
              </div>

              {/* Payment Method Selector */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('gcash')}
                  className={`p-3 rounded-xl border text-center transition ${
                    paymentMethod === 'gcash'
                      ? 'border-blue-600 bg-blue-50 text-blue-900 ring-2 ring-blue-600/30 font-bold'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="text-sm font-bold text-blue-600">GCash</div>
                  <div className="text-[10px] text-gray-500">QR Ph or Number</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('bank_bdo')}
                  className={`p-3 rounded-xl border text-center transition ${
                    paymentMethod === 'bank_bdo'
                      ? 'border-[#D4AF37] bg-[#FFF9F2] text-gray-900 ring-2 ring-[#D4AF37]/30 font-bold'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="text-sm font-bold text-blue-900">BDO</div>
                  <div className="text-[10px] text-gray-500">Unibank Online</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('bank_bpi')}
                  className={`p-3 rounded-xl border text-center transition ${
                    paymentMethod === 'bank_bpi'
                      ? 'border-red-600 bg-red-50 text-red-900 ring-2 ring-red-600/30 font-bold'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="text-sm font-bold text-red-700">BPI</div>
                  <div className="text-[10px] text-gray-500">Bank Transfer</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('bank_unionbank')}
                  className={`p-3 rounded-xl border text-center transition ${
                    paymentMethod === 'bank_unionbank'
                      ? 'border-orange-600 bg-orange-50 text-orange-900 ring-2 ring-orange-600/30 font-bold'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="text-sm font-bold text-orange-600">UnionBank</div>
                  <div className="text-[10px] text-gray-500">Online / Instapay</div>
                </button>
              </div>

              {/* Payment Instruction & Details Box */}
              <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-xs space-y-4">
                {paymentMethod === 'gcash' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    {/* Simulated Clean Philippine QR Code Display */}
                    <div className="sm:col-span-5 flex flex-col items-center bg-blue-50/50 p-4 rounded-xl border border-blue-200">
                      <div className="w-36 h-36 bg-white p-2 rounded-xl shadow-xs border border-gray-200 flex flex-col items-center justify-center relative">
                        <QrCode className="w-28 h-28 text-blue-900" />
                        <span className="text-[9px] font-bold text-blue-700 uppercase tracking-wider">
                          QR Ph Compatible
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-blue-950 mt-2">
                        Scan with GCash App
                      </span>
                    </div>

                    {/* GCash Details */}
                    <div className="sm:col-span-7 space-y-2 text-xs">
                      <div>
                        <span className="text-gray-400 text-[10px] uppercase font-bold block">Account Name</span>
                        <div className="font-bold text-sm text-gray-900">LOVE HUMBLY DRESS RENTAL</div>
                      </div>

                      <div>
                        <span className="text-gray-400 text-[10px] uppercase font-bold block">GCash Mobile Number</span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="font-mono font-bold text-base text-blue-700">0917-882-5683</span>
                          <button
                            type="button"
                            onClick={() => copyToClipboard('09178825683', 'gcash')}
                            className="px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 text-[11px] font-medium flex items-center gap-1 transition"
                          >
                            <Copy className="w-3 h-3" />
                            <span>{copiedText === 'gcash' ? 'Copied!' : 'Copy'}</span>
                          </button>
                        </div>
                      </div>

                      <div className="pt-2 text-gray-600 space-y-1 text-[11px]">
                        <div>1. Send exact total: <strong>{formatPHP(totalAmount)}</strong></div>
                        <div>2. In the "Message / Notes" box, input: <strong>{customerName || 'Your Name'}</strong></div>
                        <div>3. Save screenshot & enter the 13-digit Reference No. below</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 text-xs">
                    <div className="font-bold text-sm text-gray-900">
                      {paymentMethod === 'bank_bdo' && 'BDO Unibank (Banco de Oro)'}
                      {paymentMethod === 'bank_bpi' && 'BPI (Bank of the Philippine Islands)'}
                      {paymentMethod === 'bank_unionbank' && 'UnionBank of the Philippines'}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-gray-50 p-3 rounded-xl border border-gray-200">
                      <div>
                        <span className="text-gray-400 text-[10px] uppercase font-bold block">Account Name</span>
                        <strong className="text-gray-900">LOVE HUMBLY APPAREL PHILS INC</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 text-[10px] uppercase font-bold block">Account Number</span>
                        <div className="flex items-center gap-2">
                          <strong className="font-mono text-gray-900 text-sm">
                            {paymentMethod === 'bank_bdo' && '0045 2891 7731'}
                            {paymentMethod === 'bank_bpi' && '3089 4412 85'}
                            {paymentMethod === 'bank_unionbank' && '1094 5521 8902'}
                          </strong>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(
                              paymentMethod === 'bank_bdo' ? '004528917731' :
                              paymentMethod === 'bank_bpi' ? '3089441285' : '109455218902',
                              'bank'
                            )}
                            className="px-2 py-0.5 rounded bg-gray-200 hover:bg-gray-300 text-gray-800 text-[10px] font-medium"
                          >
                            {copiedText === 'bank' ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Reference Number & Receipt Upload */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-700 block mb-1">
                    Payment Reference Number *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 10294829104 or BDO-8921"
                    value={paymentReference}
                    onChange={(e) => setPaymentReference(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />
                  <span className="text-[11px] text-gray-500 mt-1 block">
                    Found on your GCash transaction receipt or bank slip.
                  </span>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-700 block mb-1">
                    Upload Receipt Screenshot (Optional)
                  </label>
                  <label className="w-full px-3.5 py-2.5 rounded-xl border border-dashed border-gray-300 bg-white hover:bg-gray-50 text-xs text-gray-600 flex items-center justify-center gap-2 cursor-pointer transition">
                    <Upload className="w-4 h-4 text-gray-400" />
                    <span>{paymentProofUrl ? 'Receipt Attached ✓' : 'Click to select screenshot'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleReceiptUpload}
                      className="hidden"
                    />
                  </label>
                  {paymentProofUrl && (
                    <span className="text-[10px] text-emerald-700 font-semibold mt-1 block">
                      ✓ Screenshot loaded and ready for verification
                    </span>
                  )}
                </div>
              </div>

              {/* Transparent Cost Breakdown */}
              <div className="p-4 rounded-2xl bg-[#FFF9F2] border border-[#F3E5D8] text-xs space-y-2">
                <div className="font-semibold text-gray-900 uppercase tracking-wider text-[11px]">
                  Payment & Refund Summary (PHP)
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>
                    {isMultiDress 
                      ? `${cartItems!.length} Designer Gowns (100% Rental Fee)`
                      : `${duration}-Day Upfront Rental Fee (${activeDress?.name})`}
                  </span>
                  <span className="font-semibold text-gray-900">{formatPHP(upfrontRentalFee)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping / Courier ({deliveryMethod === 'studio_pickup' ? 'Studio Pickup' : 'Courier Delivery'})</span>
                  <span className="font-semibold text-gray-900">{shippingFee === 0 ? 'FREE' : formatPHP(shippingFee)}</span>
                </div>
                <div className="pt-2 border-t border-[#F3E5D8] flex justify-between items-baseline font-bold text-sm text-gray-900">
                  <span>Total Due Today</span>
                  <span className="font-serif text-2xl font-bold text-[#D4AF37]">{formatPHP(totalAmount)}</span>
                </div>

                {/* 50% Refund Guarantee Box */}
                <div className="mt-2.5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-[11px] leading-relaxed">
                    <strong className="block text-emerald-800 font-bold">
                      50% Refund Guarantee Upon Garment Return:
                    </strong>
                    Upon return of the rented gown(s) in good condition, exactly <strong className="text-emerald-950 font-bold">{formatPHP(securityDeposit)}</strong> (50% of the rental fee) will be refunded directly to your GCash or Bank account!
                    <span className="block mt-0.5 text-emerald-700 font-semibold">
                      Effective net garment rental cost: {formatPHP(netRentalFee)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Terms and Damage Agreement Checkbox */}
              <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 space-y-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-[#D4AF37] focus:ring-[#D4AF37]"
                  />
                  <div className="text-xs text-gray-800 leading-snug">
                    <strong className="block text-amber-900">
                      I accept the Official Rental Terms & Damage Policy:
                    </strong>
                    I understand that garments must <strong>never be washed, machine dried, or ironed</strong>. I agree to the late return penalty (₱500/day) and liability for severe damage or loss beyond regular wear.
                  </div>
                </label>

                <div className="pl-7">
                  <button
                    type="button"
                    onClick={() => setShowTermsModal(true)}
                    className="text-xs font-semibold text-[#D4AF37] hover:underline flex items-center gap-1"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Read Complete Terms of Rental & Damage Matrix</span>
                  </button>
                </div>
              </div>

              {/* Submit / Navigation */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep('shipping')}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-100 transition flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  disabled={!paymentReference.trim() || !termsAccepted}
                  className="px-7 py-3.5 rounded-2xl bg-[#D4AF37] text-white font-semibold text-sm hover:bg-[#c09e32] disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-2 shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Submit Rental Booking</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: CONFIRMATION VOUCHER */}
          {step === 'confirmation' && createdBooking && (
            <div className="space-y-6 text-center py-2">
              <div className="w-16 h-16 rounded-full bg-[#FFF9F2] text-[#D4AF37] border border-[#F3E5D8] flex items-center justify-center mx-auto shadow-xs">
                <Sparkles className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase font-semibold tracking-widest text-[#D4AF37] block">
                  Booking Confirmed & Dates Locked
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                  Mabuhay, {createdBooking.customerName}!
                </h2>
                <p className="text-xs text-gray-600 mt-1">
                  Your reservation for <strong>{createdBooking.dressName}</strong> is officially secured.
                </p>
              </div>

              {/* Printable Voucher Box */}
              <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xs text-left space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-gray-400 block">Order Reference Number</span>
                    <strong className="font-mono text-xl font-bold text-gray-900">{createdBooking.orderNumber}</strong>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
                    Payment Verification Pending
                  </span>
                </div>

                {createdBooking.items && createdBooking.items.length > 0 ? (
                  <div className="space-y-2 pb-2 border-b border-gray-100">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block">
                      Rented Items ({createdBooking.items.length})
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {createdBooking.items.map((item, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-2.5">
                          <img src={item.dressImage} alt={item.dressName} className="w-10 h-12 object-cover rounded-lg shrink-0" />
                          <div className="min-w-0 flex-1">
                            <div className="font-semibold text-gray-900 truncate">{item.dressName}</div>
                            <div className="text-[10px] text-gray-500">Size: {item.size} • Return: {formatPhilippineDate(item.returnDate)}</div>
                            <div className="text-[10px] text-emerald-700 font-medium">Refund upon return: {formatPHP(item.depositRefundUponReturn)}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div>
                      <span className="text-gray-400 text-[10px] uppercase block">Selected Size</span>
                      <strong className="text-gray-800">{createdBooking.size}</strong>
                    </div>
                    <div>
                      <span className="text-gray-400 text-[10px] uppercase block">Event Date</span>
                      <strong className="text-gray-800">{formatPhilippineDate(createdBooking.eventDate)}</strong>
                    </div>
                    <div>
                      <span className="text-gray-400 text-[10px] uppercase block">Delivery Date</span>
                      <strong className="text-gray-800">{formatPhilippineDate(createdBooking.startDate)}</strong>
                    </div>
                    <div>
                      <span className="text-gray-400 text-[10px] uppercase block">Return Pickup</span>
                      <strong className="text-gray-800">{formatPhilippineDate(createdBooking.returnDate)}</strong>
                    </div>
                  </div>
                )}

                <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100 text-xs space-y-1">
                  <div className="text-gray-700">Payment: <strong>{createdBooking.paymentMethod.toUpperCase()}</strong> (Ref: {createdBooking.paymentReference})</div>
                  <div className="text-gray-700">Total Upfront Paid: <strong>{formatPHP(createdBooking.totalAmount)}</strong></div>
                  <div className="text-emerald-800 font-semibold">
                    ✓ 50% Refund upon return: <strong>{formatPHP(createdBooking.securityDeposit)}</strong> (Refunded within 24-48h after return inspection)
                  </div>
                </div>

                <div className="text-xs text-gray-500 leading-relaxed">
                  Our dispatch team will coordinate delivery via SMS/Viber at <strong>{createdBooking.phone}</strong>. You will receive real-time courier tracking on dispatch day.
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gray-200 text-gray-800 text-xs font-semibold hover:bg-gray-50 flex items-center justify-center gap-1.5 transition"
                >
                  <Printer className="w-4 h-4 text-gray-500" />
                  <span>Print Receipt</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#D4AF37] text-white text-xs font-semibold hover:bg-[#c09e32] transition shadow-xs"
                >
                  Return to Collection
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Terms & Damage Policy Modal */}
      <TermsModal isOpen={showTermsModal} onClose={() => setShowTermsModal(false)} />
    </div>
  );
};
