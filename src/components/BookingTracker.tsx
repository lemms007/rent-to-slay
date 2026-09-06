import React, { useState } from 'react';
import { Search, CheckCircle2, Clock, Truck, ShieldCheck, AlertCircle, Phone, Calendar, ArrowRight, Printer } from 'lucide-react';
import { Booking } from '../types';
import { formatPhilippineDate, formatPHP } from '../utils/dateUtils';

interface BookingTrackerProps {
  bookings: Booking[];
  onOpenNewBooking: () => void;
}

export const BookingTracker: React.FC<BookingTrackerProps> = ({ bookings, onOpenNewBooking }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [matchedBooking, setMatchedBooking] = useState<Booking | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      setMatchedBooking(null);
      return;
    }

    const found = bookings.find(b => 
      b.orderNumber.toLowerCase().includes(query) ||
      b.phone.replace(/\s+/g, '').includes(query.replace(/\s+/g, '')) ||
      b.email.toLowerCase().includes(query) ||
      b.customerName.toLowerCase().includes(query)
    );

    setMatchedBooking(found || null);
  };

  const getStatusStepIndex = (status: Booking['bookingStatus']) => {
    switch (status) {
      case 'confirmed': return 1;
      case 'preparing': return 2;
      case 'in_transit': return 3;
      case 'active_rental': return 4;
      case 'returned': return 5;
      default: return 1;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs uppercase font-bold tracking-wider text-stone-500 block mb-1">
          Self-Service Portal
        </span>
        <h1 className="font-serif-title text-3xl sm:text-4xl font-bold text-stone-900">
          Track Your Rental Booking
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 font-light mt-2">
          Enter your Order Number (e.g. <strong>LH-2026-8921</strong>) or your Philippine mobile number to see real-time dispatch, courier, and deposit refund status.
        </p>
      </div>

      {/* Search Input Box */}
      <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-10">
        <div className="relative flex items-center shadow-sm rounded-2xl bg-white border border-stone-300 focus-within:ring-2 focus-within:ring-stone-900 focus-within:border-stone-900 overflow-hidden">
          <Search className="w-5 h-5 text-stone-400 ml-4 shrink-0" />
          <input
            type="text"
            placeholder="Enter Order # (e.g. LH-2026-8921) or Mobile (+63 9...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3.5 text-sm bg-transparent focus:outline-none text-stone-900 placeholder-stone-400"
          />
          <button
            type="submit"
            className="m-1.5 px-5 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition"
          >
            Track
          </button>
        </div>

        {/* Quick Sample Links */}
        <div className="flex items-center justify-center gap-2 mt-3 text-xs text-stone-500">
          <span>Try sample orders:</span>
          {bookings.slice(0, 2).map(b => (
            <button
              key={b.id}
              type="button"
              onClick={() => {
                setSearchQuery(b.orderNumber);
                setMatchedBooking(b);
                setSearched(true);
              }}
              className="font-mono text-stone-800 underline hover:text-stone-950"
            >
              {b.orderNumber}
            </button>
          ))}
        </div>
      </form>

      {/* Result Display */}
      {searched && !matchedBooking && (
        <div className="p-8 rounded-3xl bg-white border border-stone-200 text-center max-w-md mx-auto space-y-3">
          <AlertCircle className="w-10 h-10 text-stone-400 mx-auto" />
          <h3 className="font-serif-title text-xl font-bold text-stone-900">No Booking Found</h3>
          <p className="text-xs text-stone-600">
            We couldn't locate an order matching "{searchQuery}". Please check your order reference or phone number and try again.
          </p>
        </div>
      )}

      {matchedBooking && (
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden p-6 sm:p-8 space-y-8 animate-fadeIn">
          {/* Header of matched booking */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-200 gap-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">
                Booking Reference
              </span>
              <div className="flex items-center gap-3 mt-1">
                <span className="font-mono text-2xl font-bold text-stone-900">
                  {matchedBooking.orderNumber}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  {matchedBooking.bookingStatus.replace('_', ' ')}
                </span>
              </div>
              <div className="text-xs text-stone-500 mt-1">
                Renter: <strong>{matchedBooking.customerName}</strong> ({matchedBooking.phone})
              </div>
            </div>

            <div className="text-right sm:self-auto">
              <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">
                Total Paid
              </span>
              <div className="font-serif-title text-2xl font-bold text-stone-900">
                {formatPHP(matchedBooking.totalAmount)}
              </div>
              <span className="text-xs font-semibold text-emerald-700 block">
                Includes {formatPHP(matchedBooking.securityDeposit)} Deposit
              </span>
            </div>
          </div>

          {/* Real-time Visual Timeline */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-900 block">
              Order Timeline & Progress
            </span>

            {/* Timeline stages */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {[
                { title: '1. Payment', sub: matchedBooking.paymentStatus === 'confirmed' ? 'Verified ✓' : 'Reviewing', done: true },
                { title: '2. Atelier Prep', sub: 'Steaming & Dust Bag', done: getStatusStepIndex(matchedBooking.bookingStatus) >= 2 },
                { title: '3. Dispatched', sub: matchedBooking.deliveryMethod.replace(/_/g, ' '), done: getStatusStepIndex(matchedBooking.bookingStatus) >= 3 },
                { title: '4. Event Rental', sub: formatPhilippineDate(matchedBooking.eventDate), done: getStatusStepIndex(matchedBooking.bookingStatus) >= 4 },
                { title: '5. Return & Refund', sub: matchedBooking.depositStatus === 'refunded' ? 'Refunded ✓' : 'Held / Pending', done: getStatusStepIndex(matchedBooking.bookingStatus) >= 5 }
              ].map((step, idx) => (
                <div 
                  key={idx}
                  className={`p-3 rounded-2xl border text-xs transition ${
                    step.done
                      ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                      : 'bg-stone-50 text-stone-500 border-stone-200'
                  }`}
                >
                  <div className="font-bold">{step.title}</div>
                  <div className={`text-[10px] mt-0.5 capitalize ${step.done ? 'text-stone-300' : 'text-stone-400'}`}>
                    {step.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dress & Rental Schedule Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Left: Dress details */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex gap-4 items-center">
              <img
                src={matchedBooking.dressImage}
                alt={matchedBooking.dressName}
                className="w-20 h-24 object-cover rounded-xl shrink-0"
              />
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">Reserved Dress</span>
                <h4 className="font-serif-title text-lg font-bold text-stone-900 leading-snug">
                  {matchedBooking.dressName}
                </h4>
                <div className="text-xs text-stone-600">Size: <strong>{matchedBooking.size}</strong> • {matchedBooking.durationDays}-Day Rental</div>
                <div className="text-xs text-stone-500">Method: {matchedBooking.paymentMethod.toUpperCase()} (Ref: {matchedBooking.paymentReference})</div>
              </div>
            </div>

            {/* Right: Date windows */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">Key Dates</span>
              <div className="flex justify-between">
                <span className="text-stone-500">Delivery / Dispatch Date:</span>
                <strong className="text-stone-900">{formatPhilippineDate(matchedBooking.startDate)}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Your Event Day:</span>
                <strong className="text-stone-900">{formatPhilippineDate(matchedBooking.eventDate)}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Return Pickup Date:</span>
                <strong className="text-stone-900">{formatPhilippineDate(matchedBooking.returnDate)}</strong>
              </div>
              <div className="pt-2 border-t border-stone-200 text-stone-600 flex justify-between">
                <span>Security Deposit Refund:</span>
                <span className="font-bold text-emerald-700">
                  {matchedBooking.depositStatus === 'refunded' ? 'Refunded via GCash' : 'Within 24-48 hrs of return'}
                </span>
              </div>
            </div>
          </div>

          {/* Delivery Address & Customer notes */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
              Philippine Delivery Address:
            </span>
            <div>{matchedBooking.deliveryAddress.street}, {matchedBooking.deliveryAddress.barangay}</div>
            <div>{matchedBooking.deliveryAddress.city}, {matchedBooking.deliveryAddress.province}</div>
            {matchedBooking.deliveryAddress.landmarks && (
              <div className="text-stone-500">Landmarks: {matchedBooking.deliveryAddress.landmarks}</div>
            )}
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-stone-200">
            <div className="text-xs text-stone-500">
              Need assistance? Message Love Humbly on Facebook: <a href="https://www.facebook.com/lovehumbly" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">fb.com/lovehumbly</a>
            </div>

            <button
              type="button"
              onClick={() => window.print()}
              className="px-4 py-2 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-800 text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Booking Contract</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
