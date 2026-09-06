import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, CheckCircle2, AlertCircle, Info, Sparkles } from 'lucide-react';
import { BlockedDateRange } from '../types';
import { formatDate, parseDate, calculateRentalWindow, checkDateOverlap, formatPhilippineDate } from '../utils/dateUtils';

interface AvailabilityCalendarProps {
  blockedDates: BlockedDateRange[];
  selectedEventDate: string;
  onSelectEventDate: (date: string) => void;
  rentalDuration: number;
  onChangeDuration: (duration: number) => void;
  dressName?: string;
  compact?: boolean;
}

export const AvailabilityCalendar: React.FC<AvailabilityCalendarProps> = ({
  blockedDates,
  selectedEventDate,
  onSelectEventDate,
  rentalDuration,
  onChangeDuration,
  dressName,
  compact = false
}) => {
  // Calendar current view month
  const initialDate = selectedEventDate ? parseDate(selectedEventDate) : new Date();
  const [viewDate, setViewDate] = useState<Date>(
    new Date(initialDate.getFullYear(), initialDate.getMonth(), 1)
  );

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const monthName = viewDate.toLocaleString('en-US', { month: 'long', year: 'numeric' });

  // Calculate rental window for current selection
  const rentalWindow = selectedEventDate 
    ? calculateRentalWindow(selectedEventDate, rentalDuration) 
    : { startDate: '', eventDate: '', returnDate: '', bufferEndDate: '' };

  const { hasConflict, conflictingBlock } = selectedEventDate
    ? checkDateOverlap(rentalWindow.startDate, rentalWindow.returnDate, blockedDates)
    : { hasConflict: false, conflictingBlock: undefined };

  // Generate days in month
  const firstDayOfWeek = new Date(year, month, 1).getDay(); // 0 = Sun
  const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  const todayStr = formatDate(new Date());

  // Determine status of a particular day
  const getDayStatus = (dateStr: string) => {
    // Check if past
    if (dateStr < todayStr) {
      return { status: 'past', label: 'Past' };
    }

    // Check if within selected window
    if (selectedEventDate) {
      if (dateStr === rentalWindow.eventDate) {
        return { status: 'selected_event', label: 'Event Date' };
      }
      if (dateStr >= rentalWindow.startDate && dateStr <= rentalWindow.returnDate) {
        return { status: 'selected_rental', label: 'Rental Period' };
      }
      if (dateStr > rentalWindow.returnDate && dateStr <= rentalWindow.bufferEndDate) {
        return { status: 'selected_buffer', label: 'Cleaning Buffer' };
      }
    }

    // Check blocked dates
    for (const block of blockedDates) {
      if (dateStr >= block.startDate && dateStr <= block.endDate) {
        if (block.type === 'booked') {
          return { status: 'booked', label: 'Reserved', block };
        } else if (block.type === 'cleaning') {
          return { status: 'cleaning', label: 'Dry Cleaning', block };
        } else if (block.type === 'fitting') {
          return { status: 'fitting', label: 'Studio Fitting', block };
        } else {
          return { status: 'maintenance', label: 'Maintenance', block };
        }
      }
    }

    return { status: 'available', label: 'Available' };
  };

  return (
    <div className={`bg-white rounded-2xl border border-gray-100 ${compact ? 'p-4' : 'p-5 sm:p-6'} shadow-sm`}>
      {/* Header with Title & Rental Duration Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100">
        <div>
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900">
              Real-time Availability
            </h3>
          </div>
          <p className="text-xs text-gray-500 mt-0.5">
            Select your event date to automatically generate delivery & return windows
          </p>
        </div>

        {/* 4 to 14 Days Rental Duration Controls */}
        <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-auto bg-gray-50 p-1 rounded-xl border border-gray-200">
          {[
            { days: 4, label: '4 Days (Min)' },
            { days: 7, label: '7 Days' },
            { days: 10, label: '10 Days' },
            { days: 14, label: '14 Days (Max)' }
          ].map((preset) => (
            <button
              key={preset.days}
              type="button"
              onClick={() => onChangeDuration(preset.days)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${
                rentalDuration === preset.days
                  ? 'bg-[#D4AF37] text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {preset.label}
            </button>
          ))}

          {/* Stepper for fine-grained 4 to 14 days selection */}
          <div className="flex items-center gap-1 pl-1 border-l border-gray-300 ml-0.5">
            <button
              type="button"
              disabled={rentalDuration <= 4}
              onClick={() => onChangeDuration(Math.max(4, rentalDuration - 1))}
              className="w-6 h-6 flex items-center justify-center rounded-md bg-white border border-gray-200 text-xs font-bold text-gray-700 disabled:opacity-35 hover:bg-gray-100 transition"
              title="Decrease duration (min 4 days)"
            >
              -
            </button>
            <span className="text-xs font-bold text-gray-900 px-1 whitespace-nowrap">
              {rentalDuration}d
            </span>
            <button
              type="button"
              disabled={rentalDuration >= 14}
              onClick={() => onChangeDuration(Math.min(14, rentalDuration + 1))}
              className="w-6 h-6 flex items-center justify-center rounded-md bg-white border border-gray-200 text-xs font-bold text-gray-700 disabled:opacity-35 hover:bg-gray-100 transition"
              title="Increase duration (max 14 days)"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between py-3">
        <button
          type="button"
          onClick={handlePrevMonth}
          className="p-2 rounded-lg hover:bg-gray-100 text-gray-700 transition"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <span className="font-serif text-base sm:text-lg font-bold text-gray-900 tracking-wide">
          {monthName}
        </span>

        <button
          type="button"
          onClick={handleNextMonth}
          className="p-2 rounded-lg hover:bg-gray-100 text-gray-700 transition"
          aria-label="Next month"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Day Names Grid */}
      <div className="grid grid-cols-7 gap-1 text-center mb-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d, i) => (
          <div key={d} className={`text-[11px] font-semibold tracking-wider py-1 ${i === 0 || i === 6 ? 'text-gray-400' : 'text-gray-500'}`}>
            {d}
          </div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {/* Empty cells before month start */}
        {Array.from({ length: firstDayOfWeek }).map((_, idx) => (
          <div key={`empty-${idx}`} className="h-9 sm:h-11 rounded-lg" />
        ))}

        {/* Days of current month */}
        {Array.from({ length: totalDaysInMonth }).map((_, idx) => {
          const dayNum = idx + 1;
          const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
          const { status, label } = getDayStatus(dateStr);

          const isPast = status === 'past';
          const isBooked = status === 'booked';
          const isCleaning = status === 'cleaning';
          const isSelectedEvent = status === 'selected_event';
          const isSelectedRental = status === 'selected_rental';
          const isSelectedBuffer = status === 'selected_buffer';
          const isAvailable = status === 'available';

          let btnClasses = 'relative h-9 sm:h-11 rounded-lg text-xs sm:text-sm font-medium transition flex flex-col items-center justify-center ';

          if (isPast) {
            btnClasses += 'text-gray-300 cursor-not-allowed';
          } else if (isSelectedEvent) {
            btnClasses += 'bg-[#D4AF37] text-white font-bold ring-2 ring-[#D4AF37] ring-offset-1 shadow-sm';
          } else if (isSelectedRental) {
            btnClasses += 'bg-[#FFF9F2] text-gray-900 border border-[#F3E5D8] font-semibold';
          } else if (isSelectedBuffer) {
            btnClasses += 'bg-amber-50 text-amber-800 border border-amber-200';
          } else if (isBooked) {
            btnClasses += 'bg-rose-50 text-rose-500 line-through cursor-not-allowed opacity-80';
          } else if (isCleaning) {
            btnClasses += 'bg-amber-50 text-amber-700 cursor-not-allowed opacity-75';
          } else {
            btnClasses += 'bg-gray-50 text-gray-800 hover:bg-[#FFF9F2] hover:text-[#D4AF37] hover:border-[#D4AF37]/30 cursor-pointer border border-transparent';
          }

          return (
            <button
              key={dateStr}
              type="button"
              disabled={isPast || isBooked || isCleaning}
              onClick={() => onSelectEventDate(dateStr)}
              className={btnClasses}
              title={`${dateStr}: ${label}`}
            >
              <span>{dayNum}</span>
              {isSelectedEvent && (
                <span className="text-[9px] uppercase tracking-tighter leading-none text-white/90">Event</span>
              )}
              {isSelectedRental && !isSelectedEvent && (
                <span className="text-[8px] uppercase tracking-tighter leading-none text-[#D4AF37]">Rental</span>
              )}
              {isBooked && (
                <span className="w-1 h-1 rounded-full bg-rose-500 mt-0.5" />
              )}
              {isCleaning && (
                <span className="w-1 h-1 rounded-full bg-amber-500 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {/* Calendar Legend */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 mt-3 border-t border-gray-100 text-[11px] text-gray-500">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-gray-100 border border-gray-200" />
          <span>Available</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-[#D4AF37]" />
          <span>Your Rental Period</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-rose-100 border border-rose-200" />
          <span>Booked / Reserved</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-amber-100 border border-amber-200" />
          <span>Eco-Dry Cleaning</span>
        </div>
      </div>

      {/* Real-time Status Card for Selected Dates */}
      {selectedEventDate ? (
        <div className="mt-4 pt-3 border-t border-gray-100">
          {hasConflict ? (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold block text-sm text-rose-800">Date Range Unavailable</span>
                This dress has a confirmed booking or dry-cleaning block overlapping with your requested window ({formatPhilippineDate(rentalWindow.startDate)} to {formatPhilippineDate(rentalWindow.returnDate)}). Please choose another date or browse our alternative gown recommendations!
              </div>
            </div>
          ) : (
            <div className="p-3.5 rounded-xl bg-[#FFF9F2] border border-[#F3E5D8] text-gray-900 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-900">
                    Instant Availability Confirmed
                  </span>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-white font-medium shadow-xs">
                  {rentalDuration}-Day Rental
                </span>
              </div>

              {/* Breakdown of Days */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-1 text-xs">
                <div className="bg-white p-2.5 rounded-lg border border-[#F3E5D8]">
                  <div className="text-gray-400 text-[10px] uppercase font-semibold">1. Delivery / Pickup</div>
                  <div className="font-semibold text-gray-900">{formatPhilippineDate(rentalWindow.startDate)}</div>
                  <div className="text-[10px] text-gray-500">Arrives steamed by noon</div>
                </div>
                <div className="bg-[#D4AF37]/15 p-2.5 rounded-lg border border-[#D4AF37]/30">
                  <div className="text-[#D4AF37] text-[10px] uppercase font-bold">2. Your Event Day</div>
                  <div className="font-bold text-gray-900">{formatPhilippineDate(rentalWindow.eventDate)}</div>
                  <div className="text-[10px] text-[#D4AF37] font-medium">Wear & Shine ✨</div>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-[#F3E5D8]">
                  <div className="text-gray-400 text-[10px] uppercase font-semibold">3. Return Pickup</div>
                  <div className="font-semibold text-gray-900">{formatPhilippineDate(rentalWindow.returnDate)}</div>
                  <div className="text-[10px] text-gray-500">Courier pickup by 5:00 PM</div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-4 p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs text-gray-600 flex items-center gap-2">
          <Info className="w-4 h-4 text-gray-400 shrink-0" />
          <span>Click on any available day above to calculate your exact rental window (Min 4 days to Max 14 days).</span>
        </div>
      )}
    </div>
  );
};
