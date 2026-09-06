import React from 'react';
import { 
  X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, 
  Calendar, Ruler, Sparkles, RefreshCw, AlertCircle, CheckCircle2 
} from 'lucide-react';
import { CartItem, Dress } from '../types';
import { formatPHP, formatPhilippineDate } from '../utils/dateUtils';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart?: CartItem[];
  cartItems?: CartItem[];
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
  onCheckout?: () => void;
  onProceedToCheckout?: () => void;
  onSelectDress?: (dress: Dress) => void;
  onUpdateCartItem?: (
    cartItemId: string,
    updates: Partial<{ size: string; eventDate: string; durationDays: number }>
  ) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  cartItems,
  onRemoveItem,
  onClearCart,
  onCheckout,
  onProceedToCheckout,
  onSelectDress,
  onUpdateCartItem
}) => {
  if (!isOpen) return null;

  const items = cartItems || cart || [];

  // Calculate totals
  const totalUpfrontRental = items.reduce((sum, item) => sum + (item.rentalFee || 0), 0);
  const totalRefundUponReturn = items.reduce((sum, item) => sum + (item.depositRefundUponReturn || 0), 0);
  const totalNetCost = totalUpfrontRental - totalRefundUponReturn;

  const handleCheckoutClick = () => {
    if (onProceedToCheckout) {
      onProceedToCheckout();
    } else if (onCheckout) {
      onCheckout();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md md:max-w-lg bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between bg-stone-900 text-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-white flex items-center justify-center shadow-xs">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold">Rental Bag & Cart</h2>
                <p className="text-[11px] text-gray-300">
                  {items.length === 0 ? 'No dresses added' : `${items.length} ${items.length === 1 ? 'dress' : 'dresses'} ready to reserve`}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 50% Return Policy Banner */}
          <div className="bg-[#FAF7F0] border-b border-[#EBDCB9] p-3 text-xs text-[#7A5B18] flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#B89628] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block text-stone-900">50% Refund Guarantee on Return</span>
              <p className="text-[11px] text-[#69501B] mt-0.5 leading-relaxed">
                Pay 100% upfront. Upon returning your garments in good condition, <strong>50% is returned</strong> directly to your GCash or Bank!
              </p>
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-500">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-3 text-gray-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-gray-800">Your rental cart is empty</h3>
                <p className="text-xs text-gray-500 mt-1 max-w-xs">
                  Explore our live designer collection from Love Humbly and Corset Bloomfield to add gowns to your bag.
                </p>
                <button
                  onClick={onClose}
                  className="mt-5 px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold shadow-sm transition cursor-pointer"
                >
                  Explore Catalog
                </button>
              </div>
            ) : (
              items.map((item, index) => (
                <div 
                  key={item.id || index}
                  className="p-3.5 rounded-2xl border border-gray-200 bg-white shadow-xs hover:border-gray-300 transition flex gap-3.5 relative"
                >
                  {/* Thumbnail */}
                  <div 
                    onClick={() => onSelectDress && onSelectDress(item.dress)}
                    className="w-20 sm:w-24 aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200 cursor-pointer"
                  >
                    <img
                      src={(item.dress.images && item.dress.images[0]) || ''}
                      alt={item.dress.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (item.dress.images && item.dress.images[1] && target.src !== item.dress.images[1]) {
                          target.src = item.dress.images[1];
                        }
                      }}
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className={`px-2 py-0.5 rounded-md text-[9px] font-semibold uppercase tracking-wider ${
                          item.dress.shop === 'Corset Bloomfield' ? 'bg-[#4A2E18] text-white' : 'bg-stone-900 text-white'
                        }`}>
                          {item.dress.shop}
                        </span>
                        
                        {/* Size Modifier */}
                        {onUpdateCartItem && item.dress.availableSizes && item.dress.availableSizes.length > 1 ? (
                          <div className="flex items-center gap-1">
                            <span className="text-[10px] text-gray-500 font-medium">Size:</span>
                            <select
                              value={item.size}
                              onChange={(e) => onUpdateCartItem(item.id, { size: e.target.value })}
                              className="text-[11px] font-semibold bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded px-1 py-0.5 text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-[#D4AF37] cursor-pointer"
                              title="Modify garment size"
                            >
                              {item.dress.availableSizes.map(sz => (
                                <option key={sz} value={sz}>{sz}</option>
                              ))}
                            </select>
                          </div>
                        ) : (
                          <span className="text-[10px] text-gray-500 font-medium truncate">
                            Size: <strong className="text-gray-900">{item.size}</strong>
                          </span>
                        )}
                      </div>

                      <div className="flex items-start justify-between gap-1">
                        <h4 
                          onClick={() => onSelectDress && onSelectDress(item.dress)}
                          className="font-serif text-sm font-bold text-gray-900 leading-tight line-clamp-2 cursor-pointer hover:text-[#D4AF37] transition"
                        >
                          {item.dress.name}
                        </h4>
                        {onSelectDress && (
                          <button
                            type="button"
                            onClick={() => onSelectDress(item.dress)}
                            className="text-[10px] text-[#B89628] hover:text-[#8C701B] font-semibold flex items-center gap-0.5 shrink-0 pt-0.5 cursor-pointer"
                            title="Edit details on gown calendar"
                          >
                            <Sparkles className="w-2.5 h-2.5" />
                            <span>Edit</span>
                          </button>
                        )}
                      </div>

                      {/* Event schedule & duration modifier badge */}
                      <div className="mt-2 p-2 rounded-xl bg-gray-50 border border-gray-100 text-[11px] text-gray-600 space-y-1.5">
                        <div className="flex items-center justify-between gap-2 flex-wrap text-gray-700">
                          {/* Event Date Picker Modifier */}
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3 h-3 text-[#B89628]" />
                            <span className="text-[10px] font-medium text-gray-500">Event:</span>
                            {onUpdateCartItem ? (
                              <input
                                type="date"
                                value={item.eventDate}
                                min={new Date().toISOString().split('T')[0]}
                                onChange={(e) => {
                                  if (e.target.value) {
                                    onUpdateCartItem(item.id, { eventDate: e.target.value });
                                  }
                                }}
                                className="text-[10px] font-semibold bg-white border border-gray-200 rounded px-1.5 py-0.5 text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-[#D4AF37] cursor-pointer"
                                title="Change event date"
                              />
                            ) : (
                              <strong>{formatPhilippineDate(item.eventDate)}</strong>
                            )}
                          </div>

                          {/* Duration Stepper Modifier */}
                          {onUpdateCartItem ? (
                            <div className="flex items-center bg-white border border-gray-200 rounded-md p-0.5 shadow-2xs">
                              <button
                                type="button"
                                onClick={() => onUpdateCartItem(item.id, { durationDays: Math.max(4, item.durationDays - 1) })}
                                disabled={item.durationDays <= 4}
                                className="w-5 h-5 rounded flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition"
                                title="Decrease duration (minimum 4 days)"
                              >
                                -
                              </button>
                              <span className="font-semibold text-stone-900 px-1 text-[10px] min-w-[24px] text-center">
                                {item.durationDays}d
                              </span>
                              <button
                                type="button"
                                onClick={() => onUpdateCartItem(item.id, { durationDays: Math.min(14, item.durationDays + 1) })}
                                disabled={item.durationDays >= 14}
                                className="w-5 h-5 rounded flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition"
                                title="Extend duration (+₱250/day up to 14 days)"
                              >
                                +
                              </button>
                            </div>
                          ) : (
                            <span className="font-semibold text-stone-900 bg-white px-1.5 py-0.2 rounded border border-gray-200 text-[10px]">
                              {item.durationDays} Days
                            </span>
                          )}
                        </div>

                        <div className="text-[10px] text-gray-500 flex items-center justify-between pt-1 border-t border-gray-200/60">
                          <span>Delivery: <strong>{formatPhilippineDate(item.startDate)}</strong></span>
                          <span>Return: <strong>{formatPhilippineDate(item.returnDate)}</strong></span>
                        </div>
                      </div>
                    </div>

                    {/* Price and Refund Info */}
                    <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-end justify-between">
                      <div>
                        <div className="text-[10px] text-gray-500">Upfront Fee (100%):</div>
                        <div className="font-bold text-sm text-stone-900">
                          {formatPHP(item.rentalFee)}
                        </div>
                        <div className="text-[10px] text-emerald-600 font-medium">
                          50% Refund on return: {formatPHP(item.depositRefundUponReturn)}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition cursor-pointer"
                        title="Remove from bag"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout CTA */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-gray-200 bg-gray-50/90 backdrop-blur-xs space-y-3">
              {/* Cost Summary Box */}
              <div className="space-y-1.5 text-xs text-gray-600 bg-white p-3 rounded-xl border border-gray-200">
                <div className="flex justify-between">
                  <span>Total Upfront Amount (100%):</span>
                  <span className="font-bold text-gray-900">{formatPHP(totalUpfrontRental)}</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Refund Upon Return (50%):
                  </span>
                  <span>- {formatPHP(totalRefundUponReturn)}</span>
                </div>
                <div className="border-t border-gray-100 pt-1.5 mt-1.5 flex justify-between font-bold text-stone-900 text-sm">
                  <span>Net Garment Cost (50%):</span>
                  <span className="text-[#B89628]">{formatPHP(totalNetCost)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClearCart}
                  className="px-3 py-3 rounded-xl border border-gray-300 text-xs font-semibold text-gray-600 hover:bg-gray-100 transition cursor-pointer"
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={handleCheckoutClick}
                  className="flex-1 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition cursor-pointer"
                >
                  <span>Checkout All ({items.length} {items.length === 1 ? 'Dress' : 'Dresses'})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[10px] text-center text-gray-400">
                Lalamove / Grab / Provincial couriers configured at checkout step.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
