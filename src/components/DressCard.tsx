import React, { useState } from 'react';
import { Calendar, Sparkles, Shield, Heart, Ruler, ArrowRight, ShoppingBag } from 'lucide-react';
import { Dress } from '../types';
import { formatPHP } from '../utils/dateUtils';

interface DressCardProps {
  dress: Dress;
  onSelect: (dress: Dress) => void;
  onQuickBook: (dress: Dress) => void;
  onAddToCart?: (dress: Dress) => void;
  isInCart?: boolean;
}

export const DressCard: React.FC<DressCardProps> = ({ dress, onSelect, onQuickBook, onAddToCart, isInCart }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Active bookings count
  const blockedDates = dress.blockedDates || [];
  const bookedCount = blockedDates.filter(b => b.type === 'booked').length;
  const upfrontPrice = dress.rentalPrice4Days || dress.rentalPrice3Days || 1950;
  const returnRefund = Math.round(upfrontPrice * 0.5);
  const images = dress.images && dress.images.length > 0 ? dress.images : ['https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80'];
  const availableSizes = dress.availableSizes && dress.availableSizes.length > 0 ? dress.availableSizes : ['Free Size'];

  return (
    <div className="group bg-white p-2.5 sm:p-3 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-xl cursor-pointer" onClick={() => onSelect(dress)}>
        <img
          src={images[currentImgIndex] || images[0]}
          alt={dress.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            if (images[1] && target.src !== images[1]) {
              target.src = images[1];
            }
          }}
        />

        {/* Gradient overlay on bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* Status indicator top right (from Professional Polish design) */}
        <div className="absolute top-2.5 right-2.5 z-10">
          {bookedCount > 0 ? (
            <span className="bg-amber-500 text-white text-[10px] px-2.5 py-0.5 rounded-full font-medium shadow-xs inline-block">
              {bookedCount} Reserved
            </span>
          ) : (
            <span className="bg-emerald-500 text-white text-[10px] px-2.5 py-0.5 rounded-full font-medium shadow-xs inline-block">
              Available
            </span>
          )}
        </div>

        {/* Shop Brand & Category Pill top left */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
          <span className={`px-2.5 py-0.5 rounded-full text-white text-[10px] font-semibold tracking-wide uppercase shadow-xs ${
            dress.shop === 'Corset Bloomfield' ? 'bg-[#4A2E18]' : 'bg-[#1E293B]'
          }`}>
            {dress.shop}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-gray-900/80 backdrop-blur-md text-white text-[10px] font-medium tracking-wide uppercase shadow-xs">
            {dress.category}
          </span>
          {dress.featured && (
            <span className="px-2 py-0.5 rounded-full bg-[#D4AF37] text-white text-[10px] font-semibold tracking-wide uppercase flex items-center gap-1 w-max shadow-xs">
              <Sparkles className="w-2.5 h-2.5" />
              Featured
            </span>
          )}
          {isInCart && (
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-semibold tracking-wide uppercase flex items-center gap-1 w-max shadow-xs">
              <ShoppingBag className="w-2.5 h-2.5" />
              In Cart
            </span>
          )}
        </div>

        {/* Favorite button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white text-gray-700 backdrop-blur-md transition shadow-xs z-10"
          aria-label="Save dress"
        >
          <Heart className={`w-3.5 h-3.5 transition ${isLiked ? 'fill-rose-500 text-rose-500' : 'text-gray-700'}`} />
        </button>

        {/* Thumbnail switcher if multiple images */}
        {images.length > 1 && (
          <div 
            className="absolute bottom-3 left-3 flex justify-center gap-1.5 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onMouseEnter={() => setCurrentImgIndex(idx)}
                onClick={() => setCurrentImgIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImgIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`View photo ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Dress Content */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Tagline */}
          <div className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-1">
            {dress.silhouette} • {dress.fabric}
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelect(dress)}
            className="font-serif text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors cursor-pointer leading-snug"
          >
            {dress.name}
          </h3>

          <p className="text-xs text-gray-500 line-clamp-2 mt-1 font-light leading-relaxed">
            {dress.tagline}
          </p>

          {/* Available Sizes */}
          <div className="flex items-center gap-1.5 mt-2.5 flex-wrap">
            <span className="text-[11px] text-gray-400 font-medium">Sizes:</span>
            {availableSizes.map(size => (
              <span 
                key={size} 
                className="px-2 py-0.5 rounded-md bg-gray-50 text-gray-700 text-[11px] font-medium border border-gray-200"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & Booking CTA */}
        <div className="pt-3 mt-3 border-t border-gray-100">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-[10px] uppercase font-semibold text-gray-400 block">Rental Price</span>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#D4AF37]">
                  {formatPHP(dress.rentalPrice4Days || dress.rentalPrice3Days || 1950)}
                </span>
                <span className="text-xs text-gray-400 font-light">/ 4-14d</span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] uppercase font-semibold text-gray-400 block">Upon Return</span>
              <span className="text-[11px] font-medium text-emerald-700 flex items-center gap-1 justify-end" title="50% refunded upon garment return">
                <Shield className="w-3 h-3" />
                50% Refund: {formatPHP(returnRefund)}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            {onAddToCart ? (
              <button
                type="button"
                onClick={() => onAddToCart(dress)}
                className={`px-2.5 py-2 rounded-xl border text-xs font-medium transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  isInCart
                    ? 'bg-amber-50 border-amber-300 text-amber-900 hover:bg-amber-100 shadow-2xs'
                    : 'border-gray-200 text-gray-700 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-900'
                }`}
                title={isInCart ? "Item already in cart - Click to modify reservation" : "Add this dress to your multi-dress cart"}
              >
                {isInCart ? (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-[#B89628]" />
                    <span>Modify in Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3.5 h-3.5 text-[#B89628]" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onSelect(dress)}
                className="px-3 py-2 rounded-xl border border-gray-200 text-gray-700 text-xs font-medium hover:bg-gray-50 hover:border-gray-300 transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-gray-500" />
                <span>Calendar</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => onQuickBook(dress)}
              className="px-3 py-2 rounded-xl bg-gray-900 text-white text-xs font-medium hover:bg-[#D4AF37] transition-colors flex items-center justify-center gap-1 shadow-xs cursor-pointer"
            >
              <span>Book Dress</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
