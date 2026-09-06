import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Calendar, Search, Filter, ShieldCheck, Truck, RefreshCw, 
  Heart, ExternalLink, ArrowRight, CheckCircle2, ChevronRight, Phone, MapPin, Instagram, Facebook
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { DressCard } from './components/DressCard';
import { DressDetailModal } from './components/DressDetailModal';
import { BookingModal } from './components/BookingModal';
import { TermsAndDamages } from './components/TermsAndDamages';
import { BookingTracker } from './components/BookingTracker';
import { AdminDashboard } from './components/AdminDashboard';
import { CartDrawer } from './components/CartDrawer';
import { INITIAL_DRESSES, INITIAL_BOOKINGS } from './data/initialDresses';
import { Dress, Booking, DressCategory, BlockedDateRange, CartItem } from './types';
import { calculateRentalWindow, calculateRentalFee, checkDateOverlap, formatPhilippineDate, formatPHP } from './utils/dateUtils';
import { 
  fetchDressesFromFirestore, 
  seedDressesToFirestore, 
  saveDressToFirestore, 
  deleteDressFromFirestore, 
  fetchBookingsFromFirestore, 
  saveBookingToFirestore, 
  updateBookingInFirestore,
  syncProductsFromRentToSlayFirestore,
  isAdaraLong
} from './services/firebase';

export default function App() {
  // Persistence state with authentic Enstack inventory (Love Humbly & Corset Bloomfield)
  const [dresses, setDresses] = useState<Dress[]>(() => {
    try {
      // Clear legacy storage keys with demo inventory
      localStorage.removeItem('love_humbly_dresses');
      localStorage.removeItem('love_humbly_dresses_v2');
      localStorage.removeItem('love_humbly_enstack_inventory_v3');
      localStorage.removeItem('love_humbly_inventory_v4');

      const saved = localStorage.getItem('rent_to_slay_firestore_inventory_v1');
      if (saved) {
        const parsed: Dress[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0 && !parsed[0].id.startsWith('lh-')) {
          return parsed.filter(d => !isAdaraLong(d));
        }
      }
      return INITIAL_DRESSES.filter(d => !isAdaraLong(d));
    } catch {
      return INITIAL_DRESSES.filter(d => !isAdaraLong(d));
    }
  });

  const [bookings, setBookings] = useState<Booking[]>(() => {
    try {
      const saved = localStorage.getItem('love_humbly_bookings');
      if (saved) {
        const parsed: Booking[] = JSON.parse(saved);
        // Filter out any bookings on legacy demo dresses
        const demoIds = ['lh-ruffled-tulle', 'lh-crisscross-satin', 'lh-tulle-kids'];
        const valid = parsed.filter(b => !demoIds.includes(b.dressId));
        if (valid.length > 0) return valid;
      }
      return INITIAL_BOOKINGS;
    } catch {
      return INITIAL_BOOKINGS;
    }
  });

  // Firebase Firestore Connection State
  const [firebaseStatus, setFirebaseStatus] = useState<'loading' | 'connected' | 'error'>('loading');
  const [isRefreshingFirebase, setIsRefreshingFirebase] = useState<boolean>(false);

  // Fetch products from Firebase Firestore
  const loadProductsFromFirebase = async (isManualRefresh = false) => {
    if (isManualRefresh) setIsRefreshingFirebase(true);
    try {
      const remoteDresses = await fetchDressesFromFirestore();
      if (remoteDresses && remoteDresses.length > 0) {
        setDresses(remoteDresses);
        localStorage.setItem('rent_to_slay_firestore_inventory_v1', JSON.stringify(remoteDresses));
        setFirebaseStatus('connected');
      } else {
        const directDresses = await syncProductsFromRentToSlayFirestore();
        if (directDresses.length > 0) {
          setDresses(directDresses);
          localStorage.setItem('rent_to_slay_firestore_inventory_v1', JSON.stringify(directDresses));
          setFirebaseStatus('connected');
        }
      }

      // Also fetch remote bookings
      const remoteBookings = await fetchBookingsFromFirestore();
      if (remoteBookings && remoteBookings.length > 0) {
        setBookings(remoteBookings);
      }
    } catch (error) {
      console.warn('Firebase sync note: fallback to local cache while database initializes', error);
      setFirebaseStatus('error');
    } finally {
      if (isManualRefresh) setIsRefreshingFirebase(false);
    }
  };

  useEffect(() => {
    loadProductsFromFirebase();
  }, []);

  // Save to localStorage as secondary backup
  useEffect(() => {
    localStorage.setItem('rent_to_slay_firestore_inventory_v1', JSON.stringify(dresses));
  }, [dresses]);

  useEffect(() => {
    localStorage.setItem('love_humbly_bookings', JSON.stringify(bookings));
  }, [bookings]);

  // Views & Modals
  const [currentView, setCurrentView] = useState<'catalog' | 'terms' | 'tracker' | 'admin'>('catalog');
  const [selectedDetailDress, setSelectedDetailDress] = useState<Dress | null>(null);
  const [bookingDress, setBookingDress] = useState<Dress | null>(null);
  const [bookingInitialDate, setBookingInitialDate] = useState<string>('');
  const [bookingInitialDuration, setBookingInitialDuration] = useState<number>(4);

  // Multi-Dress Cart State
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('love_humbly_rental_cart_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [checkoutCartItems, setCheckoutCartItems] = useState<CartItem[] | null>(null);

  useEffect(() => {
    localStorage.setItem('love_humbly_rental_cart_v1', JSON.stringify(cart));
  }, [cart]);

  // Cart operations
  const handleAddToCart = (dress: Dress, size?: string, eventDate?: string, duration?: number) => {
    const chosenSize = size || (dress.availableSizes && dress.availableSizes[0]) || 'Free Size';
    const chosenDuration = duration && duration >= 4 ? duration : 4;
    
    // Default event date to 7 days from now if not specified
    let chosenDate = eventDate;
    if (!chosenDate) {
      const d = new Date();
      d.setDate(d.getDate() + 7);
      chosenDate = d.toISOString().split('T')[0];
    }

    const rentalFee = calculateRentalFee(dress, chosenDuration);
    const depositRefundUponReturn = Math.round(rentalFee * 0.50);
    const netRentalCost = rentalFee - depositRefundUponReturn;
    const windowDates = calculateRentalWindow(chosenDate, chosenDuration);

    setCart(prev => {
      // Check if this dress is already in the cart
      const existingIndex = prev.findIndex(item => item.dressId === dress.id);
      if (existingIndex > -1) {
        // Modify the existing item in the cart instead of creating a new duplicate
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          size: chosenSize,
          eventDate: chosenDate,
          durationDays: chosenDuration,
          startDate: windowDates.startDate,
          returnDate: windowDates.returnDate,
          rentalFee,
          depositRefundUponReturn,
          netRentalCost
        };
        return updated;
      }

      // If not in cart, add new item
      const newItem: CartItem = {
        id: `cart-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        dressId: dress.id,
        dress,
        size: chosenSize,
        eventDate: chosenDate,
        durationDays: chosenDuration,
        startDate: windowDates.startDate,
        returnDate: windowDates.returnDate,
        rentalFee,
        depositRefundUponReturn,
        netRentalCost
      };

      return [newItem, ...prev];
    });

    setIsCartOpen(true);
  };

  const handleUpdateCartItem = (
    cartItemId: string,
    updates: Partial<{ size: string; eventDate: string; durationDays: number }>
  ) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id !== cartItemId) return item;

        const newSize = updates.size !== undefined ? updates.size : item.size;
        const newDuration = updates.durationDays !== undefined
          ? Math.max(4, Math.min(14, updates.durationDays))
          : item.durationDays;
        const newDate = updates.eventDate !== undefined ? updates.eventDate : item.eventDate;

        const rentalFee = calculateRentalFee(item.dress, newDuration);
        const depositRefundUponReturn = Math.round(rentalFee * 0.50);
        const netRentalCost = rentalFee - depositRefundUponReturn;
        const windowDates = calculateRentalWindow(newDate, newDuration);

        return {
          ...item,
          size: newSize,
          eventDate: newDate,
          durationDays: newDuration,
          startDate: windowDates.startDate,
          returnDate: windowDates.returnDate,
          rentalFee,
          depositRefundUponReturn,
          netRentalCost
        };
      });
    });
  };

  const handleRemoveFromCart = (cartItemId: string) => {
    setCart(prev => prev.filter(item => item.id !== cartItemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleProceedToCartCheckout = () => {
    if (cart.length === 0) return;
    setIsCartOpen(false);
    setBookingDress(null);
    setCheckoutCartItems(cart);
  };

  // Catalog Filters
  const [selectedShop, setSelectedShop] = useState<'All' | 'Love Humbly' | 'Corset Bloomfield'>('All');
  const [selectedCategory, setSelectedCategory] = useState<DressCategory>('All');
  const [selectedSize, setSelectedSize] = useState<string>('All');
  const [filterDate, setFilterDate] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price_low' | 'price_high'>('featured');

  // Handle new booking
  const handleBookingSuccess = (newBooking: Booking) => {
    // Add to bookings list
    setBookings(prev => [newBooking, ...prev]);
    saveBookingToFirestore(newBooking).catch(console.error);

    // If multi-dress booking was completed, clear the cart
    if (newBooking.items && newBooking.items.length > 0) {
      setCart([]);
    }

    // Automatically block out the dates on the specific dress(es)
    const itemsToBlock = (newBooking.items && newBooking.items.length > 0)
      ? newBooking.items.map(item => ({
          dressId: item.dressId,
          startDate: item.startDate,
          returnDate: item.returnDate
        }))
      : [{
          dressId: newBooking.dressId,
          startDate: newBooking.startDate,
          returnDate: newBooking.returnDate
        }];

    setDresses(prevDresses => prevDresses.map(d => {
      const matchingItem = itemsToBlock.find(item => item.dressId === d.id);
      if (matchingItem) {
        const newRentalBlock: BlockedDateRange = {
          id: `block-${Date.now()}-${d.id}`,
          startDate: matchingItem.startDate,
          endDate: matchingItem.returnDate,
          type: 'booked',
          customerName: newBooking.customerName,
          orderId: newBooking.orderNumber
        };

        // Also add dry cleaning turnaround block (+2 days)
        const returnD = new Date(matchingItem.returnDate);
        returnD.setDate(returnD.getDate() + 1);
        const cleanStart = returnD.toISOString().split('T')[0];
        returnD.setDate(returnD.getDate() + 1);
        const cleanEnd = returnD.toISOString().split('T')[0];

        const cleaningBlock: BlockedDateRange = {
          id: `block-clean-${Date.now()}-${d.id}`,
          startDate: cleanStart,
          endDate: cleanEnd,
          type: 'cleaning',
          notes: 'Post-rental professional eco-dry clean'
        };

        const updatedDress: Dress = {
          ...d,
          blockedDates: [...d.blockedDates, newRentalBlock, cleaningBlock]
        };
        saveDressToFirestore(updatedDress).catch(console.error);
        return updatedDress;
      }
      return d;
    }));
  };

  // Admin date blocking
  const handleAddBlockedDate = (dressId: string, block: BlockedDateRange) => {
    setDresses(prev => prev.map(d => {
      if (d.id === dressId) {
        const updated: Dress = {
          ...d,
          blockedDates: [...d.blockedDates, block]
        };
        saveDressToFirestore(updated).catch(console.error);
        return updated;
      }
      return d;
    }));
  };

  const handleRemoveBlockedDate = (dressId: string, blockId: string) => {
    setDresses(prev => prev.map(d => {
      if (d.id === dressId) {
        const updated: Dress = {
          ...d,
          blockedDates: d.blockedDates.filter(b => b.id !== blockId)
        };
        saveDressToFirestore(updated).catch(console.error);
        return updated;
      }
      return d;
    }));
  };

  const handleAddNewDress = (newDress: Dress) => {
    setDresses(prev => [newDress, ...prev]);
    saveDressToFirestore(newDress).catch(console.error);
  };

  const handleDeleteDress = (dressId: string) => {
    setDresses(prev => prev.filter(d => d.id !== dressId));
    deleteDressFromFirestore(dressId).catch(console.error);
  };

  const handleResetToEnstackInventory = async () => {
    if (window.confirm('Re-sync catalog with live Rent-To-Slay products and images from Cloud Firestore?')) {
      setIsRefreshingFirebase(true);
      try {
        const liveDresses = await syncProductsFromRentToSlayFirestore();
        if (liveDresses.length > 0) {
          setDresses(liveDresses);
          localStorage.setItem('rent_to_slay_firestore_inventory_v1', JSON.stringify(liveDresses));
          alert(`Successfully synced ${liveDresses.length} live products and images from Cloud Firestore!`);
        }
      } catch (err) {
        console.error('Failed to sync live products:', err);
        alert('Could not sync with Firestore. Please check connection.');
      } finally {
        setIsRefreshingFirebase(false);
      }
    }
  };

  const handleUpdateBookingStatus = (bookingId: string, status: Booking['bookingStatus']) => {
    setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, bookingStatus: status } : b));
    updateBookingInFirestore(bookingId, { bookingStatus: status }).catch(console.error);
  };

  const handleUpdatePaymentStatus = (bookingId: string, status: Booking['paymentStatus']) => {
    setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, paymentStatus: status } : b));
    updateBookingInFirestore(bookingId, { paymentStatus: status }).catch(console.error);
  };

  const handleUpdateDepositStatus = (bookingId: string, status: Booking['depositStatus']) => {
    setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, depositStatus: status } : b));
    updateBookingInFirestore(bookingId, { depositStatus: status }).catch(console.error);
  };

  // Filter dresses logic
  const filteredDresses = dresses.filter(dress => {
    if (selectedShop !== 'All' && dress.shop !== selectedShop) {
      return false;
    }
    if (selectedCategory !== 'All' && dress.category !== selectedCategory) {
      return false;
    }
    if (selectedSize !== 'All' && !dress.availableSizes.includes(selectedSize as any)) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match = dress.name.toLowerCase().includes(q) ||
        (dress.shop && dress.shop.toLowerCase().includes(q)) ||
        dress.fabric.toLowerCase().includes(q) ||
        dress.silhouette.toLowerCase().includes(q) ||
        dress.tagline.toLowerCase().includes(q) ||
        dress.bestFor.some(tag => tag.toLowerCase().includes(q));
      if (!match) return false;
    }
    // Date filter: only show dresses that are free on filterDate
    if (filterDate) {
      const window = calculateRentalWindow(filterDate, 4);
      const { hasConflict } = checkDateOverlap(window.startDate, window.returnDate, dress.blockedDates);
      if (hasConflict) return false;
    }
    return true;
  }).sort((a, b) => {
    const priceA = a.rentalPrice4Days || a.rentalPrice3Days || 0;
    const priceB = b.rentalPrice4Days || b.rentalPrice3Days || 0;
    if (sortBy === 'price_low') return priceA - priceB;
    if (sortBy === 'price_high') return priceB - priceA;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans flex flex-col selection:bg-[#D4AF37] selection:text-white">
      {/* Navbar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        bookingsCount={bookings.length}
        firebaseSynced={firebaseStatus === 'connected'}
        cartCount={cart.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* VIEW 1: CATALOG STOREFRONT */}
      {currentView === 'catalog' && (
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF9F2] to-[#FAFAFA] border-b border-gray-100 pt-10 pb-16 sm:pt-14 sm:pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Hero Text */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF9F2] border border-[#F3E5D8] text-gray-900 text-xs font-medium tracking-wide shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Manila’s Premier Evening Gown & Modern Filipiniana Rental</span>
                  </div>

                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
                    Elegance for your <br className="hidden sm:inline" />
                    <span className="italic font-serif text-[#D4AF37]">milestone moments.</span>
                  </h1>

                  <p className="text-base sm:text-lg text-gray-600 font-light max-w-xl leading-relaxed">
                    Rent authentic designer gowns, sculpted terno butterfly sleeves, and gala couture from our <strong>lovehumbly</strong> collection. Real-time booking calendar, door-to-door Philippine courier delivery, and secure GCash payments.
                  </p>

                  {/* Trust Highlights */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="block text-gray-900 font-medium">Real-time Calendar</strong>
                        <span className="text-gray-500 text-[10px]">Instant date locks</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="block text-gray-900 font-medium">100% Refundable</strong>
                        <span className="text-gray-500 text-[10px]">Deposit in 24-48 hrs</span>
                      </div>
                    </div>

                    <div className="col-span-2 sm:col-span-1 flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                        <Truck className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="block text-gray-900 font-medium">Door-to-Door Courier</strong>
                        <span className="text-gray-500 text-[10px]">Lalamove & LBC PH</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hero Feature Visual */}
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gray-100">
                    <img
                      src="https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_2_ARELI_IVORY_WHITE.webp"
                      alt="Areli Ivory White Modern Filipiniana"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.src = "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                      <span className="text-xs uppercase tracking-widest font-semibold text-[#D4AF37]">
                        Featured Designer Piece • Enstack Collection
                      </span>
                      <h3 className="font-serif text-2xl font-bold mt-1">
                        Areli Ivory White Filipiniana
                      </h3>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/20 text-xs">
                        <span className="text-[#D4AF37] font-serif font-bold text-sm">₱1,238 / 4-Day Rental</span>
                        <span className="text-emerald-300 font-medium">Available for Next Weekend</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badges */}
                  <div className="absolute -bottom-5 left-2 right-2 flex flex-col sm:flex-row gap-2.5">
                    {/* Enstack Shop Badge */}
                    <a
                      href="https://enstack.ph/love-humbly-shop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-2xl shadow-md border border-gray-100 flex items-center gap-2.5 hover:bg-gray-50 transition flex-1"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#D4AF37] text-white flex items-center justify-center font-bold text-xs">
                        LH
                      </div>
                      <div className="text-left text-xs">
                        <div className="font-semibold text-gray-900 flex items-center gap-1">
                          <span>enstack.ph/love-humbly-shop</span>
                          <ExternalLink className="w-3 h-3 text-gray-400" />
                        </div>
                        <span className="text-[11px] text-gray-500">Official Shop & Ready-to-Wear Inventory</span>
                      </div>
                    </a>

                    {/* Facebook Badge */}
                    <a
                      href="https://www.facebook.com/lovehumbly"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-2xl shadow-md border border-gray-100 flex items-center gap-2.5 hover:bg-gray-50 transition shrink-0"
                    >
                      <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                        <Facebook className="w-4 h-4" />
                      </div>
                      <div className="text-left text-xs">
                        <div className="font-semibold text-gray-900 flex items-center gap-1">
                          <span>@lovehumbly</span>
                          <ExternalLink className="w-3 h-3 text-gray-400" />
                        </div>
                        <span className="text-[11px] text-gray-500">Fitting Albums</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Date Availability Check Bar */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              <div className="md:col-span-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-gray-900 leading-tight">
                    Instant Event Availability Check
                  </h4>
                  <p className="text-[11px] text-gray-500">
                    Find gowns available for your exact event date
                  </p>
                </div>
              </div>

              <div className="md:col-span-5 flex items-center gap-2">
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                />
                {filterDate && (
                  <button
                    type="button"
                    onClick={() => setFilterDate('')}
                    className="px-2.5 py-2 text-xs text-gray-500 hover:text-gray-900 whitespace-nowrap"
                  >
                    Clear Date
                  </button>
                )}
              </div>

              <div className="md:col-span-3 text-right flex items-center justify-end gap-2 text-xs">
                {filterDate ? (
                  <span className="px-3 py-1.5 rounded-xl bg-[#FFF9F2] text-gray-900 font-semibold border border-[#F3E5D8]">
                    Showing gowns for {formatPhilippineDate(filterDate)}
                  </span>
                ) : (
                  <span className="text-gray-400 font-light">
                    Select a date to filter {dresses.length} gowns
                  </span>
                )}
              </div>
            </div>
          </section>

          {/* How Rental Works in 4 Steps */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] block mb-1">
                Seamless 4-Step Process
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
                How Renting with Love Humbly Works
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  step: '01',
                  title: 'Select Gown & Dates',
                  desc: 'Pick your event date on our real-time calendar. Flexible 4-day to 14-day rental windows calculate dispatch and return automatically.'
                },
                {
                  step: '02',
                  title: 'GCash / Bank Transfer',
                  desc: 'Pay the rental fee + refundable security deposit (₱1,000 - ₱2,000) via instant GCash QR Ph or Philippine bank transfer.'
                },
                {
                  step: '03',
                  title: 'Steamed to Your Door',
                  desc: 'Delivered via Lalamove or LBC inside a dust garment bag on a velvet hanger, ready to wear. Strictly no ironing needed.'
                },
                {
                  step: '04',
                  title: 'Return & Deposit Refund',
                  desc: 'Hand back the gown in its dust bag on return day. Once inspected, your deposit is refunded to GCash within 24-48 hours!'
                }
              ].map((item) => (
                <div key={item.step} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-xs space-y-2">
                  <div className="font-serif text-3xl font-bold text-[#D4AF37]">{item.step}</div>
                  <h3 className="font-serif text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Collection & Filter Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            {/* Filter Controls Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-serif text-3xl font-bold text-gray-900">
                    Curated Rental Inventory
                  </h2>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide ${
                    firebaseStatus === 'connected'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${firebaseStatus === 'connected' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                    {firebaseStatus === 'connected' ? 'Firestore Live' : 'Connecting'}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <p className="text-xs text-gray-500">
                    Showing {filteredDresses.length} of {dresses.length} designer gowns fetched from Firebase
                  </p>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={() => loadProductsFromFirebase(true)}
                    disabled={isRefreshingFirebase}
                    className="text-[11px] text-[#B89628] hover:text-[#97791E] font-medium flex items-center gap-1 transition cursor-pointer"
                    title="Fetch fresh products list from Firebase Firestore"
                  >
                    <RefreshCw className={`w-3 h-3 ${isRefreshingFirebase ? 'animate-spin' : ''}`} />
                    {isRefreshingFirebase ? 'Syncing...' : 'Sync Firestore'}
                  </button>
                </div>
              </div>

              {/* Search and Sort */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search terno, corset, silk, gala..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full sm:w-60 pl-9 pr-3.5 py-2 rounded-xl border border-gray-200 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                  />
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3.5 py-2 rounded-xl border border-gray-200 bg-white text-xs font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                >
                  <option value="featured">Featured First</option>
                  <option value="price_low">Rental Price: Low to High</option>
                  <option value="price_high">Rental Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Boutique Source Selector */}
            <div className="pt-4 pb-2 flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 mr-1">
                Boutique:
              </span>
              {[
                { id: 'All', label: 'All Boutiques' },
                { id: 'Love Humbly', label: 'Love Humbly Shop (enstack.ph/love-humbly-shop)' },
                { id: 'Corset Bloomfield', label: 'Corset Bloomfield (enstack.ph/corsetbloomfield)' }
              ].map(shopTab => (
                <button
                  key={shopTab.id}
                  type="button"
                  onClick={() => setSelectedShop(shopTab.id as any)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                    selectedShop === shopTab.id
                      ? 'bg-gray-900 text-white shadow-xs'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {shopTab.label}
                </button>
              ))}
            </div>

            {/* Category Pills & Size Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3">
              {/* Category Pills */}
              <div className="flex gap-2 overflow-x-auto pb-1 max-w-full">
                {[
                  'All',
                  'Modern Filipiniana',
                  'Infinity & Multiway',
                  'Gala & Evening Gowns',
                  'Bridal & Prenup',
                  'Debutante & Prom',
                  'Cocktail & Semi-Formal'
                ].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat as any)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === cat
                        ? 'bg-[#D4AF37] text-white shadow-xs'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Size filter */}
              <div className="flex items-center gap-1.5 self-start sm:self-auto shrink-0">
                <span className="text-xs text-gray-400 font-medium mr-1">Size:</span>
                {['All', 'XS', 'S', 'M', 'L', 'XL'].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    className={`w-7 h-7 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center ${
                      selectedSize === s
                        ? 'bg-[#D4AF37] text-white shadow-xs'
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Dresses Grid */}
            {filteredDresses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
                {filteredDresses.map((dress) => {
                  const existingInCart = cart.find(item => item.dressId === dress.id);
                  return (
                    <DressCard
                      key={dress.id}
                      dress={dress}
                      isInCart={Boolean(existingInCart)}
                      onSelect={(d) => setSelectedDetailDress(d)}
                      onQuickBook={(d) => {
                        setBookingDress(d);
                        setBookingInitialDate(filterDate || '');
                      }}
                      onAddToCart={(d) => {
                        if (existingInCart) {
                          setSelectedDetailDress(d);
                        } else {
                          handleAddToCart(d, (d.availableSizes && d.availableSizes[0]) || 'Free Size', filterDate || '', 4);
                        }
                      }}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 mt-4 p-8 space-y-3 shadow-xs">
                <h3 className="font-serif text-2xl font-bold text-gray-900">
                  No Gowns Matched Your Filters
                </h3>
                <p className="text-xs text-gray-500 max-w-md mx-auto">
                  Try clearing your date selection or adjusting size and category filters to view all available pieces in our Love Humbly inventory.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedSize('All');
                    setFilterDate('');
                    setSearchQuery('');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#D4AF37] text-white text-xs font-semibold hover:bg-[#c09e32] transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </section>
        </main>
      )}

      {/* VIEW 2: TERMS AND DAMAGES PAGE */}
      {currentView === 'terms' && (
        <main className="flex-1">
          <TermsAndDamages />
        </main>
      )}

      {/* VIEW 3: TRACKING PORTAL */}
      {currentView === 'tracker' && (
        <main className="flex-1">
          <BookingTracker
            bookings={bookings}
            onOpenNewBooking={() => setCurrentView('catalog')}
          />
        </main>
      )}

      {/* VIEW 4: ADMIN / STAFF DASHBOARD */}
      {currentView === 'admin' && (
        <main className="flex-1">
          <AdminDashboard
            dresses={dresses}
            bookings={bookings}
            onUpdateBookingStatus={handleUpdateBookingStatus}
            onUpdatePaymentStatus={handleUpdatePaymentStatus}
            onUpdateDepositStatus={handleUpdateDepositStatus}
            onAddBlockedDate={handleAddBlockedDate}
            onRemoveBlockedDate={handleRemoveBlockedDate}
            onAddNewDress={handleAddNewDress}
            onDeleteDress={handleDeleteDress}
            onResetInventory={handleResetToEnstackInventory}
            onClose={() => setCurrentView('catalog')}
          />
        </main>
      )}

      {/* DRESS DETAIL MODAL */}
      {selectedDetailDress && (
        <DressDetailModal
          dress={selectedDetailDress}
          existingCartItem={cart.find(item => item.dressId === selectedDetailDress.id) || null}
          onClose={() => setSelectedDetailDress(null)}
          onProceedToBooking={(dress, date, duration) => {
            setSelectedDetailDress(null);
            setBookingDress(dress);
            setBookingInitialDate(date);
            setBookingInitialDuration(duration);
            setCheckoutCartItems(null);
          }}
          onAddToCart={(dress, size, date, duration) => {
            handleAddToCart(dress, size, date, duration);
          }}
        />
      )}

      {/* MULTI-DRESS CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onUpdateCartItem={handleUpdateCartItem}
        onCheckout={handleProceedToCartCheckout}
        onSelectDress={(dress) => {
          setIsCartOpen(false);
          setSelectedDetailDress(dress);
        }}
      />

      {/* MULTI-DRESS CART CHECKOUT MODAL */}
      {checkoutCartItems && checkoutCartItems.length > 0 && (
        <BookingModal
          cartItems={checkoutCartItems}
          onClose={() => setCheckoutCartItems(null)}
          onBookingSuccess={handleBookingSuccess}
        />
      )}

      {/* SINGLE DRESS BOOKING MODAL */}
      {bookingDress && (
        <BookingModal
          dress={bookingDress}
          initialEventDate={bookingInitialDate}
          initialDuration={bookingInitialDuration}
          onClose={() => setBookingDress(null)}
          onBookingSuccess={handleBookingSuccess}
        />
      )}

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-300 pt-14 pb-10 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-900">
            {/* Brand & Partner Stores column */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-serif text-lg font-medium shadow-xs">
                  LH
                </div>
                <span className="font-serif text-2xl font-bold text-white tracking-tight block">
                  Love Humbly
                </span>
              </div>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Manila’s premier evening dress and modern Filipiniana terno rental atelier. Empowering Filipinas to celebrate life’s milestone moments sustainably.
              </p>
              
              {/* Official Pages & Stores */}
              <div className="pt-2 space-y-1.5 text-xs">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block">
                  Official Facebook Pages & Stores:
                </span>
                <div className="flex flex-col gap-1.5">
                  <a 
                    href="https://www.facebook.com/lovehumbly" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#D4AF37] transition flex items-center gap-1.5 text-blue-400 text-xs"
                  >
                    <Facebook className="w-3.5 h-3.5 shrink-0" />
                    <span>facebook.com/lovehumbly</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>

                  <a 
                    href="https://www.facebook.com/corsetbloomfield/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#D4AF37] transition flex items-center gap-1.5 text-rose-400 text-xs"
                  >
                    <Facebook className="w-3.5 h-3.5 shrink-0" />
                    <span>facebook.com/corsetbloomfield</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Atelier Studio Location */}
            <div className="space-y-2 text-xs">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] block">
                Showroom & Fitting Studio
              </span>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Scout Gandia St., near Tomas Morato, Quezon City, Metro Manila, Philippines</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 pt-1">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>+63 917 882 5683 (0917-882-LOVE)</span>
              </div>
              <p className="text-[11px] text-gray-500 pt-1">
                Showroom fitting appointments: Tuesdays to Sundays, 10:00 AM – 7:00 PM.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-2 text-xs">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] block">
                Renter Guides & Policies
              </span>
              <ul className="space-y-1.5 text-gray-400">
                <li>
                  <button onClick={() => setCurrentView('terms')} className="hover:text-[#D4AF37] transition text-left">
                    Damage Policy & Stain Rules
                  </button>
                </li>
                <li>
                  <button onClick={() => setCurrentView('terms')} className="hover:text-[#D4AF37] transition text-left">
                    50% Security Deposit Return Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => setIsCartOpen(true)} className="hover:text-[#D4AF37] transition text-left text-amber-400">
                    Rental Cart & Multi-Dress Booking ({cart.length})
                  </button>
                </li>
                <li>
                  <button onClick={() => setCurrentView('tracker')} className="hover:text-[#D4AF37] transition text-left">
                    Track GCash Payment & Delivery
                  </button>
                </li>
                <li>
                  <button onClick={() => setCurrentView('admin')} className="hover:text-[#D4AF37] transition text-left">
                    Staff Portal & Shop Inventory
                  </button>
                </li>
              </ul>
            </div>

            {/* Partner Stores & Enstack Links */}
            <div className="space-y-3 text-xs">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] block">
                Partner Boutiques & Stores
              </span>
              <div className="space-y-2">
                <a 
                  href="https://enstack.ph/corsetbloomfield" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-rose-500/50 block transition group"
                >
                  <div className="font-semibold text-white group-hover:text-rose-300 flex items-center justify-between">
                    <span>Corset Bloomfield</span>
                    <ExternalLink className="w-3 h-3 text-gray-500" />
                  </div>
                  <div className="text-[11px] text-gray-400 truncate">enstack.ph/corsetbloomfield</div>
                </a>

                <a 
                  href="https://enstack.ph/love-humbly-shop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-[#D4AF37]/50 block transition group"
                >
                  <div className="font-semibold text-white group-hover:text-amber-300 flex items-center justify-between">
                    <span>Love Humbly Shop</span>
                    <ExternalLink className="w-3 h-3 text-gray-500" />
                  </div>
                  <div className="text-[11px] text-gray-400 truncate">enstack.ph/love-humbly-shop</div>
                </a>
              </div>

              <div className="pt-1">
                <span className="text-[10px] text-gray-500 block mb-1.5 uppercase font-semibold">Accepted Payments:</span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-blue-900/60 border border-blue-700/50 text-blue-200 text-[10px] font-semibold">
                    GCash QR Ph
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-gray-900 border border-gray-800 text-gray-300 text-[10px]">
                    BDO Unibank
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-gray-900 border border-gray-800 text-gray-300 text-[10px]">
                    BPI
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
            <div>
              © 2026 Love Humbly & Corset Bloomfield. All rights reserved. Real-time boutique sync.
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href="https://enstack.ph/love-humbly-shop" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">
                Love Humbly Enstack
              </a>
              <span>•</span>
              <a href="https://enstack.ph/corsetbloomfield" target="_blank" rel="noopener noreferrer" className="underline hover:text-rose-300">
                Corset Bloomfield Enstack
              </a>
              <span>•</span>
              <a href="https://www.facebook.com/corsetbloomfield/" target="_blank" rel="noopener noreferrer" className="underline hover:text-rose-300">
                Corset Bloomfield FB
              </a>
              <span>•</span>
              <a href="https://www.facebook.com/lovehumbly" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">
                Love Humbly FB
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
