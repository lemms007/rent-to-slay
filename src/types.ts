export type DressCategory = 
  | 'All'
  | 'Modern Filipiniana'
  | 'Infinity & Multiway'
  | 'Gala & Evening Gowns'
  | 'Cocktail & Semi-Formal'
  | 'Bridal & Prenup'
  | 'Debutante & Prom';

export type ShopBrand = 'Love Humbly' | 'Corset Bloomfield';

export interface DressMeasurement {
  size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'Free Size';
  bust: string; // e.g. "32-34 in"
  waist: string; // e.g. "24-26 in"
  hips: string; // e.g. "34-36 in"
  length: string; // e.g. "58 in"
}

export interface BlockedDateRange {
  id: string;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  type: 'booked' | 'cleaning' | 'fitting' | 'maintenance';
  customerName?: string;
  orderId?: string;
  notes?: string;
}

export interface Dress {
  id: string;
  name: string;
  slug: string;
  shop: ShopBrand;
  category: DressCategory;
  tagline: string;
  description: string;
  rentalPrice4Days: number; // Base 4-day rental in PHP (Min 4 days)
  extraDayRate: number; // Additional daily rate for days beyond 4 up to 14 days
  rentalPrice3Days?: number; // legacy compatibility fallback
  rentalPrice5Days?: number; // legacy compatibility fallback
  retailPrice: number; // in PHP
  securityDeposit: number; // in PHP (refundable)
  availableSizes: ('XS' | 'S' | 'M' | 'L' | 'XL' | 'Free Size' | string)[];
  measurements?: DressMeasurement[];
  colors: string[];
  fabric: string;
  silhouette: string;
  images: string[];
  featured?: boolean;
  fittingAvailable: boolean;
  blockedDates: BlockedDateRange[];
  careNotes: string[];
  bestFor: string[];
}

export interface CartItem {
  id: string; // unique item id
  dressId: string;
  dress: Dress;
  size: string;
  eventDate: string; // YYYY-MM-DD
  startDate: string; // YYYY-MM-DD
  returnDate: string; // YYYY-MM-DD
  durationDays: number; // 4 to 14 days
  rentalFee: number; // 100% upfront price for the duration
  depositRefundUponReturn: number; // 50% returned to renter upon safe garment return
  netRentalCost: number; // 50% net cost
}

export interface BookingItem {
  dressId: string;
  dressName: string;
  dressImage: string;
  shop: ShopBrand;
  size: string;
  eventDate: string;
  startDate: string;
  returnDate: string;
  durationDays: number;
  rentalFee: number;
  depositRefundUponReturn: number;
  netRentalCost: number;
}

export interface Booking {
  id: string;
  orderNumber: string; // e.g. LH-2026-4821
  dressId: string;
  dressName: string;
  dressImage: string;
  size: string;
  eventDate: string; // YYYY-MM-DD
  startDate: string; // YYYY-MM-DD (Delivery/Pickup date)
  returnDate: string; // YYYY-MM-DD (Return pickup date)
  durationDays: number; // 4 to 14 days
  customerName: string;
  email: string;
  phone: string;
  deliveryMethod: 'lalamove_same_day' | 'grab_express' | 'studio_pickup' | 'provincial_lbc_jt';
  deliveryAddress: {
    street: string;
    barangay: string;
    city: string;
    province: string;
    postalCode?: string;
    landmarks?: string;
  };
  paymentMethod: 'gcash' | 'bank_bdo' | 'bank_bpi' | 'bank_unionbank' | 'maya';
  paymentReference: string;
  paymentProofUrl?: string; // base64 or placeholder URL
  paymentStatus: 'pending_verification' | 'confirmed' | 'rejected' | 'refunded';
  bookingStatus: 'confirmed' | 'preparing' | 'in_transit' | 'active_rental' | 'returned' | 'cancelled';
  rentalFee: number; // Total rental fee
  securityDeposit: number; // 50% refundable upon return
  shippingFee: number;
  totalAmount: number; // Total upfront paid
  totalRefundUponReturn?: number; // 50% refunded upon return
  depositStatus: 'held' | 'refunded' | 'partially_deducted' | 'forfeited';
  createdAt: string;
  specialRequests?: string;
  items?: BookingItem[]; // Multi-dress items support
}

export interface PaymentDetails {
  method: 'gcash' | 'bank_bdo' | 'bank_bpi' | 'bank_unionbank' | 'maya';
  accountName: string;
  accountNumber: string;
  qrCodeUrl?: string;
  instructions: string[];
}
