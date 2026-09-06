import React, { useState } from 'react';
import { Calendar, ShieldAlert, Search, ShoppingBag, ExternalLink, Menu, X, Settings, Sparkles, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  currentView: 'catalog' | 'terms' | 'tracker' | 'admin';
  setCurrentView: (view: 'catalog' | 'terms' | 'tracker' | 'admin') => void;
  bookingsCount: number;
  firebaseSynced?: boolean;
  cartCount?: number;
  onOpenCart?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  bookingsCount,
  firebaseSynced = false,
  cartCount = 0,
  onOpenCart
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
      {/* Top Notice Bar */}
      <div className="bg-gray-900 text-gray-200 text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-between border-b border-gray-800">
        {currentView === 'admin' ? (
          <div className="hidden sm:flex items-center gap-2">
            <span className={`inline-block w-2 h-2 rounded-full ${firebaseSynced ? 'bg-emerald-400 animate-pulse' : 'bg-[#D4AF37]'}`}></span>
            <span className="text-[11px] text-gray-300">
              {firebaseSynced ? '🔥 Firestore Database: rent-to-slay' : '⚡ Connecting to Firestore...'}
            </span>
          </div>
        ) : (
          <div className="hidden sm:flex items-center gap-2 text-stone-300 text-[11px]">
            <span>✨ Quezon City Atelier & Showroom</span>
          </div>
        )}
        <div className="mx-auto sm:mx-0 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
          <span>🇵🇭 Philippines-Exclusive Dress & Gown Rental • Real-time Booking Calendar • GCash Accepted</span>
        </div>
        <div className="hidden md:block text-[11px] text-gray-400">
          Tues–Sun 10AM–7PM
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => {
              setCurrentView('catalog');
              setMobileMenuOpen(false);
            }}
          >
            <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-serif text-xl font-medium shadow-xs transition group-hover:bg-[#c09e32]">
              LH
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-serif tracking-tight text-gray-900 flex items-baseline gap-2">
                Love Humbly <span className="text-xs sm:text-sm font-sans font-normal text-gray-500 italic">Dress Rentals</span>
              </h1>
              <span className="text-[10px] tracking-wider text-gray-400 block -mt-0.5">
                Manila Atelier • Evening Gowns & Modern Filipiniana
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
            <button
              id="nav-collection"
              onClick={() => setCurrentView('catalog')}
              className={`transition-colors py-1 ${
                currentView === 'catalog'
                  ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] font-semibold'
                  : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent'
              }`}
            >
              Catalog & Availability
            </button>

            <button
              id="nav-terms"
              onClick={() => setCurrentView('terms')}
              className={`transition-colors py-1 flex items-center gap-1.5 ${
                currentView === 'terms'
                  ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] font-semibold'
                  : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent'
              }`}
            >
              <ShieldAlert className="w-4 h-4 text-[#D4AF37]" />
              <span>Terms & Damages</span>
            </button>

            <button
              id="nav-tracker"
              onClick={() => setCurrentView('tracker')}
              className={`transition-colors py-1 flex items-center gap-1.5 ${
                currentView === 'tracker'
                  ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] font-semibold'
                  : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent'
              }`}
            >
              <Search className="w-4 h-4 text-gray-400" />
              <span>Track Booking</span>
            </button>

            {/* Facebook & Enstack pages */}
            <div className="flex items-center gap-1.5">
              <a
                id="nav-fb-link"
                href="https://www.facebook.com/lovehumbly"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-gray-500 hover:text-blue-700 flex items-center gap-1 transition px-2.5 py-1 rounded-full bg-gray-50 hover:bg-gray-100"
                title="Love Humbly Facebook"
              >
                <span>FB: Love Humbly</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>

              <a
                id="nav-cb-fb-link"
                href="https://www.facebook.com/corsetbloomfield/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-gray-500 hover:text-rose-700 flex items-center gap-1 transition px-2.5 py-1 rounded-full bg-rose-50/70 hover:bg-rose-100"
                title="Corset Bloomfield Facebook Page & Store"
              >
                <span>FB: Corset Bloomfield</span>
                <ExternalLink className="w-2.5 h-2.5 text-rose-500" />
              </a>
            </div>

            {/* Cart Drawer Trigger Button */}
            {onOpenCart && (
              <button
                id="nav-cart-btn"
                onClick={onOpenCart}
                className="relative p-2 rounded-full border border-stone-200 bg-stone-50 hover:bg-amber-50 hover:border-[#D4AF37] transition text-stone-800 flex items-center gap-1.5 px-3.5 cursor-pointer shadow-2xs"
                title="View Rental Cart"
              >
                <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs font-semibold">Rental Bag</span>
                {cartCount > 0 && (
                  <span className="ml-0.5 px-1.5 py-0.2 rounded-full bg-[#D4AF37] text-white text-[10px] font-bold animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>
            )}

            {/* Admin / Shop Owner Toggle */}
            <button
              id="nav-admin"
              onClick={() => setCurrentView('admin')}
              className={`ml-1 px-4 py-2 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 shadow-xs ${
                currentView === 'admin'
                  ? 'bg-[#D4AF37] text-white'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              <Settings className="w-3.5 h-3.5 text-amber-300" />
              <span>Staff Portal</span>
              {bookingsCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-white text-gray-900 text-[10px] flex items-center justify-center font-bold">
                  {bookingsCount}
                </span>
              )}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            {onOpenCart && (
              <button
                onClick={onOpenCart}
                className="relative p-2 text-gray-700 rounded-lg hover:bg-gray-100"
                title="Rental Cart"
              >
                <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#D4AF37] text-white text-[9px] flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
            )}

            <button
              onClick={() => setCurrentView('admin')}
              className="p-2 text-gray-700 rounded-lg hover:bg-gray-100"
              title="Staff Portal"
            >
              <Settings className="w-5 h-5 text-gray-700" />
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-2">
          <button
            onClick={() => {
              setCurrentView('catalog');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium ${
              currentView === 'catalog' ? 'bg-[#D4AF37] text-white' : 'text-gray-800 hover:bg-gray-50'
            }`}
          >
            Catalog & Availability Calendar
          </button>

          <button
            onClick={() => {
              setCurrentView('terms');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between ${
              currentView === 'terms' ? 'bg-[#D4AF37] text-white' : 'text-gray-800 hover:bg-gray-50'
            }`}
          >
            <span>Terms, Rules & Damages Policy</span>
            <ShieldAlert className="w-4 h-4 text-[#D4AF37]" />
          </button>

          <button
            onClick={() => {
              setCurrentView('tracker');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between ${
              currentView === 'tracker' ? 'bg-[#D4AF37] text-white' : 'text-gray-800 hover:bg-gray-50'
            }`}
          >
            <span>Track Rental Booking</span>
            <Search className="w-4 h-4 text-gray-500" />
          </button>

          {onOpenCart && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between bg-amber-50 text-stone-900 border border-amber-200"
            >
              <span className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                <span>View Rental Cart</span>
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#D4AF37] text-white text-xs font-bold">
                {cartCount} Items
              </span>
            </button>
          )}

          <div className="pt-2 border-t border-gray-100 space-y-1.5">
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block px-1">
              Atelier Stores & Facebook Pages
            </span>
            <a
              href="https://www.facebook.com/lovehumbly"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2.5 rounded-xl text-xs font-medium text-blue-700 bg-blue-50/70 hover:bg-blue-100"
            >
              Love Humbly: facebook.com/lovehumbly
            </a>
            <a
              href="https://www.facebook.com/corsetbloomfield/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2.5 rounded-xl text-xs font-medium text-rose-700 bg-rose-50/70 hover:bg-rose-100"
            >
              Corset Bloomfield: facebook.com/corsetbloomfield
            </a>
            <a
              href="https://enstack.ph/corsetbloomfield"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2.5 rounded-xl text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200"
            >
              Corset Bloomfield: enstack.ph/corsetbloomfield
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
