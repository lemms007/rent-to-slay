import { BlockedDateRange, Dress } from '../types';

// Format YYYY-MM-DD
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function parseDate(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

export function formatPhilippineDate(dateStr: string): string {
  if (!dateStr) return '';
  const d = parseDate(dateStr);
  return d.toLocaleDateString('en-PH', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    weekday: 'short'
  });
}

// Compute rental start, event, and return dates based on Event Date & Duration (Min 4 days, Max 14 days)
export function calculateRentalWindow(eventDateStr: string, durationDays: number = 4) {
  if (!eventDateStr) {
    return { startDate: '', eventDate: '', returnDate: '', bufferEndDate: '' };
  }
  const eventD = parseDate(eventDateStr);
  // Enforce min 4 days and max 14 days
  const days = Math.max(4, Math.min(14, Math.round(durationDays) || 4));

  // Item is delivered/picked up 1 day before the event
  const startD = new Date(eventD);
  startD.setDate(startD.getDate() - 1);

  // Return date is start date + (duration - 1) days (inclusive of start day)
  const returnD = new Date(startD);
  returnD.setDate(returnD.getDate() + (days - 1));

  const bufferDays = 2; // Days for dry-cleaning after return
  const bufferEndD = new Date(returnD);
  bufferEndD.setDate(bufferEndD.getDate() + bufferDays);

  return {
    startDate: formatDate(startD),
    eventDate: eventDateStr,
    returnDate: formatDate(returnD),
    bufferEndDate: formatDate(bufferEndD),
    durationDays: days
  };
}

// Compute total rental fee based on duration (Min 4 days base rate, plus pro-rated extra day rate up to 14 days)
export function calculateRentalFee(dress: Dress, durationDays: number = 4): number {
  const days = Math.max(4, Math.min(14, Math.round(durationDays) || 4));
  const baseRate = dress.rentalPrice4Days || dress.rentalPrice3Days || 1800;
  const extraRate = dress.extraDayRate || Math.round(baseRate * 0.12);

  if (days <= 4) {
    return baseRate;
  }
  return baseRate + (days - 4) * extraRate;
}

// Calculate rental pricing and 50% deposit return:
// Total upfront is 100% of the price; upon safe return, 50% is returned to renter
export function calculateDepositAndRefund(dress: Dress, durationDays: number = 4) {
  const upfrontPrice = calculateRentalFee(dress, durationDays);
  const depositRefundUponReturn = Math.round(upfrontPrice * 0.50);
  const netRentalCost = upfrontPrice - depositRefundUponReturn;
  return {
    upfrontPrice,
    depositRefundUponReturn,
    netRentalCost
  };
}

// Check if a single day is in range
export function isDateInRange(targetDateStr: string, startRangeStr: string, endRangeStr: string): boolean {
  return targetDateStr >= startRangeStr && targetDateStr <= endRangeStr;
}

// Check if requested window (startDate to returnDate) overlaps with any blocked date
export function checkDateOverlap(
  candidateStartDate: string,
  candidateReturnDate: string,
  blockedDates: BlockedDateRange[]
): { hasConflict: boolean; conflictingBlock?: BlockedDateRange } {
  for (const block of blockedDates) {
    // Overlap condition: candidateStart <= blockEnd && candidateEnd >= blockStart
    if (candidateStartDate <= block.endDate && candidateReturnDate >= block.startDate) {
      return { hasConflict: true, conflictingBlock: block };
    }
  }
  return { hasConflict: false };
}

// Get array of date strings between two dates
export function getDatesBetween(startDateStr: string, endDateStr: string): string[] {
  const dates: string[] = [];
  const curr = parseDate(startDateStr);
  const end = parseDate(endDateStr);

  while (curr <= end) {
    dates.push(formatDate(curr));
    curr.setDate(curr.getDate() + 1);
  }
  return dates;
}

// Format Philippine Peso Currency (e.g. ₱2,500)
export function formatPHP(amount: number): string {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 0
  }).format(amount);
}
