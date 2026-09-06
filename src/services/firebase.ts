import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { 
  getFirestore, doc, collection, getDocs, setDoc, deleteDoc, updateDoc,
  getDocFromServer, onSnapshot
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import { Dress, Booking } from '../types';

// Initialize Firebase app
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// CRITICAL: Initialize Firestore instances
// defaultDb houses the 124 live products and 168 inventory items from Rent-To-Slay
export const defaultDb = getFirestore(app);
export const db = firebaseConfig.firestoreDatabaseId ? getFirestore(app, firebaseConfig.firestoreDatabaseId) : defaultDb;
export const auth = getAuth(app);

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Validate Firestore connection on boot
export async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
  }
}
testConnection();

export function isAdaraLong(itemOrId: { id?: string; name?: string } | string, name?: string): boolean {
  if (typeof itemOrId === 'object' && itemOrId !== null) {
    const idLower = (itemOrId.id || '').toLowerCase();
    const nameLower = (itemOrId.name || '').toLowerCase();
    return (idLower.includes('adara') && idLower.includes('long')) ||
           (nameLower.includes('adara') && nameLower.includes('long'));
  }
  const idStr = typeof itemOrId === 'string' ? itemOrId : '';
  const idLower = idStr.toLowerCase();
  const nameLower = (name || '').toLowerCase();
  return (idLower.includes('adara') && idLower.includes('long')) ||
         (nameLower.includes('adara') && nameLower.includes('long'));
}

// Helper to map raw Firestore product & inventory records to Dress interface
export function mapFirestoreProductToDress(
  prodDocId: string, 
  data: any, 
  sizesMap: Record<string, string[]> = {}
): Dress {
  const title = data.title || prodDocId;
  const isCorset = (data.store || '').toLowerCase().includes('corset');
  const shop: 'Love Humbly' | 'Corset Bloomfield' = isCorset ? 'Corset Bloomfield' : 'Love Humbly';
  const images = [data.supabase_image_url, data.original_image_url].filter(Boolean);
  const rentalPrice = typeof data.rental_price === 'number' ? Math.round(data.rental_price) : 1500;
  // Per policy: 100% upfront payment, 50% refundable upon return
  const securityDeposit = Math.round(rentalPrice * 0.50);
  const sizes = sizesMap[prodDocId] && sizesMap[prodDocId].length > 0 
    ? sizesMap[prodDocId] 
    : ['S', 'M', 'L', 'Free Size'];

  let category: Dress['category'] = 'Modern Filipiniana';
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('bridal') || lowerTitle.includes('wedding')) {
    category = 'Bridal & Prenup';
  } else if (lowerTitle.includes('infinity') || lowerTitle.includes('multiway')) {
    category = 'Infinity & Multiway';
  } else if (lowerTitle.includes('gala') || lowerTitle.includes('gown') || lowerTitle.includes('evening') || lowerTitle.includes('mermaid')) {
    category = 'Gala & Evening Gowns';
  }

  return {
    id: prodDocId,
    name: title,
    slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    shop,
    category,
    tagline: `Authentic ${shop} designer piece from Enstack`,
    description: `Authentic designer creation from ${shop}. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: ${data.product_url || 'https://enstack.ph'}`,
    rentalPrice4Days: rentalPrice,
    extraDayRate: Math.max(150, Math.round(rentalPrice * 0.18)),
    rentalPrice3Days: Math.round(rentalPrice * 0.85),
    rentalPrice5Days: Math.round(rentalPrice * 1.15),
    retailPrice: typeof data.raw_price === 'string' ? (parseInt(data.raw_price.replace(/[^0-9]/g, ''), 10) || rentalPrice * 4) : rentalPrice * 4,
    securityDeposit,
    availableSizes: sizes,
    colors: [title.split(' ').slice(-1)[0] || 'Natural'],
    fabric: lowerTitle.includes('satin') ? 'Mulberry Satin Silk' : lowerTitle.includes('organza') ? 'Frosted Shimmer Organza' : lowerTitle.includes('tulle') ? 'Soft Illusion Tulle' : 'Premium Textured Gazar Silk',
    silhouette: lowerTitle.includes('midi') ? 'Midi Corset Dress' : lowerTitle.includes('set') ? 'Two-Piece Bustier & Skirt Set' : 'A-Line Modern Filipiniana Gown',
    images: images.length > 0 ? images : ['https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_2_ARELI_IVORY_WHITE.webp'],
    featured: true,
    fittingAvailable: true,
    careNotes: ['Professional Eco-Dry Clean Only', 'Steam lightly on low heat', 'Delicate corset boning & zipper'],
    bestFor: ['Weddings & Entourage', 'Debut & Galas', 'Photoshoots & Editorial', 'Formal Events'],
    blockedDates: []
  };
}

// Fetch all authentic dresses from Firestore
export async function fetchDressesFromFirestore(): Promise<Dress[]> {
  const path = 'dresses';
  try {
    // 1. Try reading from dresses collection in active db
    const snapshot = await getDocs(collection(db, path));
    if (!snapshot.empty) {
      const dresses: Dress[] = [];
      snapshot.forEach(docSnap => {
        const d = docSnap.data() as Dress;
        // Filter out legacy dummy ids and Adara Long
        if (!docSnap.id.startsWith('lh-') && !docSnap.id.startsWith('cb-') && !isAdaraLong(docSnap.id, d.name)) {
          dresses.push(d);
        }
      });
      if (dresses.length > 0) {
        return dresses;
      }
    }

    // 2. Direct pull from defaultDb products & inventory if dresses is empty
    return await syncProductsFromRentToSlayFirestore();
  } catch (error) {
    console.warn('Attempting direct fetch from default products collection:', error);
    try {
      return await syncProductsFromRentToSlayFirestore();
    } catch (fallbackErr) {
      handleFirestoreError(fallbackErr, OperationType.LIST, 'products');
      return [];
    }
  }
}

// Pull directly from Rent-To-Slay products and inventory collections
export async function syncProductsFromRentToSlayFirestore(): Promise<Dress[]> {
  const [prodSnap, invSnap] = await Promise.all([
    getDocs(collection(defaultDb, 'products')),
    getDocs(collection(defaultDb, 'inventory')).catch(() => ({ forEach: () => {} }))
  ]);

  const sizesMap: Record<string, string[]> = {};
  invSnap.forEach((d: any) => {
    const inv = d.data();
    if (inv?.product_id && inv?.size) {
      if (!sizesMap[inv.product_id]) sizesMap[inv.product_id] = [];
      if (!sizesMap[inv.product_id].includes(inv.size)) sizesMap[inv.product_id].push(inv.size);
    }
  });

  const authenticDresses: Dress[] = [];
  prodSnap.forEach(prodDoc => {
    const data = prodDoc.data();
    // Exclude Adara Long
    if (!isAdaraLong(prodDoc.id, data.title)) {
      const dress = mapFirestoreProductToDress(prodDoc.id, data, sizesMap);
      authenticDresses.push(dress);
    }
  });

  // Also persist to named database dresses collection for fast caching
  if (authenticDresses.length > 0 && db !== defaultDb) {
    for (const dress of authenticDresses) {
      setDoc(doc(db, 'dresses', dress.id), dress).catch(() => {});
    }
  }

  return authenticDresses;
}

// Seed initial dresses to Firestore
export async function seedDressesToFirestore(dresses: Dress[]): Promise<void> {
  const path = 'dresses';
  try {
    for (const dress of dresses) {
      await setDoc(doc(db, path, dress.id), dress);
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

// Save or update single dress in Firestore
export async function saveDressToFirestore(dress: Dress): Promise<void> {
  const path = `dresses/${dress.id}`;
  try {
    await setDoc(doc(db, 'dresses', dress.id), dress);
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

// Delete dress from Firestore
export async function deleteDressFromFirestore(dressId: string): Promise<void> {
  const path = `dresses/${dressId}`;
  try {
    await deleteDoc(doc(db, 'dresses', dressId));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

// Fetch all bookings from Firestore
export async function fetchBookingsFromFirestore(): Promise<Booking[]> {
  const path = 'bookings';
  try {
    const snapshot = await getDocs(collection(db, path));
    if (snapshot.empty) {
      return [];
    }
    const bookings: Booking[] = [];
    snapshot.forEach(docSnap => {
      bookings.push(docSnap.data() as Booking);
    });
    return bookings;
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
    return [];
  }
}

// Save new booking to Firestore
export async function saveBookingToFirestore(booking: Booking): Promise<void> {
  const path = `bookings/${booking.id}`;
  try {
    await setDoc(doc(db, 'bookings', booking.id), booking);
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

// Update existing booking in Firestore
export async function updateBookingInFirestore(bookingId: string, updates: Partial<Booking>): Promise<void> {
  const path = `bookings/${bookingId}`;
  try {
    await updateDoc(doc(db, 'bookings', bookingId), updates);
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}
