import React, { useState } from 'react';
import { X, Shield, Sparkles, Ruler, CheckCircle2, AlertCircle, Calendar as CalendarIcon, Heart, Share2, ArrowRight, ShoppingBag, RefreshCw } from 'lucide-react';
import { Dress, CartItem } from '../types';
import { AvailabilityCalendar } from './AvailabilityCalendar';
import { formatPHP, calculateRentalFee, calculateDepositAndRefund } from '../utils/dateUtils';

interface DressDetailModalProps {
  dress: Dress | null;
  onClose: () => void;
  onProceedToBooking: (dress: Dress, selectedDate: string, duration: number) => void;
  onAddToCart?: (dress: Dress, selectedSize: string, eventDate: string, duration: number) => void;
  existingCartItem?: CartItem | null;
}

export const DressDetailModal: React.FC<DressDetailModalProps> = ({
  dress,
  onClose,
  onProceedToBooking,
  onAddToCart,
  existingCartItem
}) => {
  if (!dress) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const availableSizes = dress.availableSizes && dress.availableSizes.length > 0 ? dress.availableSizes : ['Free Size'];
  const [selectedEventDate, setSelectedEventDate] = useState<string>(existingCartItem?.eventDate || '');
  const [rentalDuration, setRentalDuration] = useState<number>(existingCartItem?.durationDays || 4);
  const [selectedSize, setSelectedSize] = useState<string>(existingCartItem?.size || availableSizes[0]);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [dateValidationWarning, setDateValidationWarning] = useState(false);

  const { upfrontPrice, depositRefundUponReturn, netRentalCost } = calculateDepositAndRefund(dress, rentalDuration);
  const measurements = dress.measurements || [];
  const selectedMeasurement = measurements.find(m => m.size === selectedSize);
  const images = dress.images && dress.images.length > 0 ? dress.images : ['https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      <div 
        className="relative bg-[#FAFAFA] rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl border border-gray-100 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-gray-700 shadow-md transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[88vh] overflow-y-auto">
          {/* Left Column: Image Gallery (5 cols) */}
          <div className="lg:col-span-5 p-4 sm:p-6 bg-gray-100 flex flex-col gap-3">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 border border-gray-300/60 shadow-xs">
              <img
                src={dress.images[activeImageIndex] || dress.images[0]}
                alt={dress.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (dress.images[1] && target.src !== dress.images[1]) {
                    target.src = dress.images[1];
                  }
                }}
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-white text-xs font-semibold backdrop-blur-md uppercase tracking-wider shadow-xs">
                  {dress.category}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            {dress.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {dress.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`aspect-[3/4] rounded-xl overflow-hidden border-2 transition ${
                      activeImageIndex === idx ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/20' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${dress.name} view ${idx + 1}`} className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            )}

            {/* Quick Fitting Notice */}
            <div className="p-3 bg-white rounded-xl border border-gray-100 text-xs text-gray-700 mt-2 shadow-xs">
              <div className="font-semibold text-gray-900 flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Showroom Fitting in Metro Manila</span>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Want to try it on first? Schedule a 45-minute private fitting session at our Scout Gandia, QC studio. Fitting fee (₱300) is 100% credited towards your rental!
              </p>
            </div>
          </div>

          {/* Right Column: Details & Interactive Booking Calendar (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Boutique Brand, Category & Tags */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                <span className={`px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold ${
                  dress.shop === 'Corset Bloomfield' ? 'bg-[#4A2E18]' : 'bg-[#1E293B]'
                }`}>
                  {dress.shop}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">{dress.category}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500">{dress.fabric}</span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-1">
                {dress.name}
              </h2>

              <p className="text-sm text-gray-600 font-light mt-2 leading-relaxed">
                {dress.description}
              </p>

              {/* Pricing Cards (4-14 Days Duration Model) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5 p-4 rounded-2xl bg-[#FFF9F2] border border-[#F3E5D8]">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-gray-500 block tracking-wider">4-Day Base Rental</span>
                  <div className="font-serif text-2xl font-bold text-[#D4AF37]">
                    {formatPHP(dress.rentalPrice4Days || dress.rentalPrice3Days || 1950)}
                  </div>
                  <span className="text-[10px] text-gray-500">Min 4-day period</span>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-semibold text-gray-500 block tracking-wider">Extension / Extra Day</span>
                  <div className="font-serif text-2xl font-bold text-gray-900">
                    +{formatPHP(dress.extraDayRate || 250)}
                  </div>
                  <span className="text-[10px] text-gray-500">Rent up to 14 days max</span>
                </div>

                <div className="col-span-2 sm:col-span-1 border-t sm:border-t-0 sm:border-l border-[#F3E5D8] pt-2 sm:pt-0 sm:pl-3">
                  <span className="text-[10px] uppercase font-semibold text-emerald-700 block tracking-wider">50% Return Refund</span>
                  <div className="font-serif text-xl font-bold text-emerald-800">
                    {formatPHP(depositRefundUponReturn)}
                  </div>
                  <span className="text-[10px] text-gray-500">Refunded upon return</span>
                </div>
              </div>

              {/* Size Selector with Measurements */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-900 flex items-center gap-1.5">
                    <Ruler className="w-4 h-4 text-gray-500" />
                    <span>Select Size & Verify Measurements</span>
                  </label>
                  <span className="text-[11px] text-gray-500">Inches (PH Standard)</span>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {availableSizes.map(size => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition ${
                        selectedSize === size
                          ? 'bg-[#D4AF37] text-white border-[#D4AF37] shadow-xs'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Specific measurement breakdown for selected size */}
                {selectedMeasurement ? (
                  <div className="p-3 bg-white rounded-xl border border-gray-100 text-xs text-gray-700 shadow-xs">
                    <div className="font-semibold text-gray-900 mb-1.5 flex items-center justify-between">
                      <span>Size {selectedSize} Fit Guide:</span>
                      <span className="text-[10px] text-gray-500 font-normal">Back: Corset adjustable</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center text-[11px]">
                      <div className="bg-gray-50 p-1.5 rounded-lg border border-gray-100">
                        <span className="text-gray-400 block text-[9px] uppercase font-semibold">Bust</span>
                        <span className="font-semibold text-gray-900">{selectedMeasurement.bust}</span>
                      </div>
                      <div className="bg-gray-50 p-1.5 rounded-lg border border-gray-100">
                        <span className="text-gray-400 block text-[9px] uppercase font-semibold">Waist</span>
                        <span className="font-semibold text-gray-900">{selectedMeasurement.waist}</span>
                      </div>
                      <div className="bg-gray-50 p-1.5 rounded-lg border border-gray-100">
                        <span className="text-gray-400 block text-[9px] uppercase font-semibold">Hips</span>
                        <span className="font-semibold text-gray-900">{selectedMeasurement.hips}</span>
                      </div>
                      <div className="bg-gray-50 p-1.5 rounded-lg border border-gray-100">
                        <span className="text-gray-400 block text-[9px] uppercase font-semibold">Length</span>
                        <span className="font-semibold text-gray-900">{selectedMeasurement.length}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-2.5 bg-white rounded-xl border border-gray-100 text-xs text-gray-600 flex items-center justify-between">
                    <span>Size <strong>{selectedSize}</strong> • Fits true to Philippine standard sizing</span>
                    <span className="text-[10px] text-[#D4AF37] font-semibold">Corset Back Ties</span>
                  </div>
                )}
              </div>

              {/* Interactive Availability Calendar */}
              <div className="mt-6">
                <AvailabilityCalendar
                  blockedDates={dress.blockedDates || []}
                  selectedEventDate={selectedEventDate}
                  onSelectEventDate={(date) => {
                    setSelectedEventDate(date);
                    setDateValidationWarning(false);
                  }}
                  rentalDuration={rentalDuration}
                  onChangeDuration={setRentalDuration}
                  dressName={dress.name}
                  compact={true}
                />
              </div>

              {/* Best for tags & Care highlights */}
              {dress.bestFor && dress.bestFor.length > 0 && (
                <div className="mt-5 space-y-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Perfect for:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {dress.bestFor.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Action Bar */}
            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <div className="text-xs text-gray-500">
                  {rentalDuration}-Day Upfront Rental (100%):
                </div>
                <div className="font-serif text-2xl font-bold text-gray-900">
                  {formatPHP(upfrontPrice)}
                  <span className="text-xs font-sans text-emerald-700 font-semibold ml-2">
                    ({formatPHP(depositRefundUponReturn)} returned upon safe return)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                {onAddToCart && (
                  <button
                    type="button"
                    onClick={() => {
                      let dateToUse = selectedEventDate;
                      if (!dateToUse) {
                        const d = new Date();
                        d.setDate(d.getDate() + 7);
                        dateToUse = d.toISOString().split('T')[0];
                        setSelectedEventDate(dateToUse);
                      }
                      onAddToCart(dress, selectedSize, dateToUse, rentalDuration);
                      setIsAddedToCart(true);
                      setTimeout(() => setIsAddedToCart(false), 2500);
                    }}
                    className={`flex-1 sm:flex-initial px-5 py-3.5 rounded-2xl border text-xs font-semibold flex items-center justify-center gap-2 transition cursor-pointer ${
                      isAddedToCart
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                        : existingCartItem
                        ? 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100'
                        : 'bg-white text-stone-900 border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    {isAddedToCart ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>{existingCartItem ? 'Updated in Cart!' : 'Added to Cart!'}</span>
                      </>
                    ) : existingCartItem ? (
                      <>
                        <RefreshCw className="w-4 h-4 text-[#B89628]" />
                        <span>Update in Cart</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-[#B89628]" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    let dateToUse = selectedEventDate;
                    if (!dateToUse) {
                      const d = new Date();
                      d.setDate(d.getDate() + 7);
                      dateToUse = d.toISOString().split('T')[0];
                    }
                    onProceedToBooking(dress, dateToUse, rentalDuration);
                  }}
                  className="flex-1 sm:flex-initial px-6 py-3.5 rounded-2xl bg-[#D4AF37] text-white font-semibold text-xs hover:bg-[#c09e32] transition flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>{selectedEventDate ? 'Book This Dress' : 'Select Date & Book'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
