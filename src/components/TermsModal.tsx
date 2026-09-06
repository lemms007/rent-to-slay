import React from 'react';
import { X, ShieldAlert, CheckCircle2, Sparkles, AlertTriangle, RefreshCw, FileText, Ban, Droplet, Clock, HeartHandshake } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      <div 
        className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-gray-100 my-8 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-gray-100 flex items-center justify-between bg-[#FFF9F2]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block">
                Official Renter Agreement
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900">
                Terms of Rental & Damage Policy
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white text-gray-500 hover:text-gray-900 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Policy Content */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-gray-700 text-sm leading-relaxed">
          {/* Quick Notice Banner */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed">
              <strong className="block text-sm font-bold text-amber-900 mb-1">
                Important Rule: Strictly No Washing, Ironing, or Dry Cleaning by Renter
              </strong>
              Every rental fee already includes professional eco-friendly sanitization and dry cleaning handled exclusively by our atelier. Under no circumstance should a client wash, spin-dry, or press flat irons onto delicate Mikado silk, French tulle, or structured terno butterfly sleeves.
            </div>
          </div>

          {/* Section 1: Duration & Booking Model */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-gray-900 font-serif text-lg font-bold">
              <Clock className="w-5 h-5 text-[#D4AF37]" />
              <h3>1. Rental Window & Duration Limits</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              To guarantee optimal fitting, courier transit, and professional sanitization, our automated booking system enforces:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
              <li><strong>Minimum Duration:</strong> 4 calendar days (e.g. Day 1: Delivery/Arrival, Day 2: Event Day, Day 3: Preparation, Day 4: Return Courier Pickup).</li>
              <li><strong>Maximum Duration:</strong> 14 calendar days (ideal for destination weddings in Batanes, Boracay, Palawan, or extended provincial photoshoots).</li>
              <li><strong>Dispatch Buffer:</strong> Gowns are dispatched 1 day prior to your registered event date to ensure stress-free preparation.</li>
            </ul>
          </section>

          {/* Section 2: Care & Prohibitions */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-gray-900 font-serif text-lg font-bold">
              <Ban className="w-5 h-5 text-rose-600" />
              <h3>2. Wear Guidelines & Prohibited Actions</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 text-xs space-y-1.5">
                <span className="font-bold text-gray-900 flex items-center gap-1.5 text-rose-700">
                  <Ban className="w-4 h-4" /> Strictly Prohibited:
                </span>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                  <li>No flat ironing or heated hair stylers near fabric</li>
                  <li>No safety pins, staplers, or permanent adhesive tapes on silk</li>
                  <li>No home laundering, bleach, or spot stain removers</li>
                  <li>No cutting or tailoring alterations to the structure</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-100 text-xs space-y-1.5">
                <span className="font-bold text-gray-900 flex items-center gap-1.5 text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Permitted & Recommended:
                </span>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                  <li>Gentle vertical garment steaming only (from reverse side)</li>
                  <li>Detaching butterfly terno sleeves via modular snaps</li>
                  <li>Use of fabric-safe fashion tape on skin (not fabric)</li>
                  <li>Hanging with internal ribbon loops provided</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Security Deposit & Damage Schedule */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-gray-900 font-serif text-lg font-bold">
              <ShieldAlert className="w-5 h-5 text-[#D4AF37]" />
              <h3>3. Security Deposit & Damage Assessment Matrix</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              The rental fee is paid 100% upfront. Upon return of the garment in good condition, 50% is promptly refunded to the renter. Upon return, gowns undergo a physical inspection:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-700 uppercase font-semibold text-[10px]">
                  <tr>
                    <th className="p-2.5">Category</th>
                    <th className="p-2.5">Damage Description</th>
                    <th className="p-2.5">Fee / Deduction</th>
                    <th className="p-2.5">Deposit Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-emerald-50/40">
                    <td className="p-2.5 font-bold text-emerald-900">Normal Wear</td>
                    <td className="p-2.5 text-gray-600">Minor dust on floor hem, faint deodorant/perfume, tiny loose thread</td>
                    <td className="p-2.5 font-bold text-emerald-700">₱0 (Included)</td>
                    <td className="p-2.5 font-bold text-emerald-800">100% Full Refund</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-amber-900">Minor Repair</td>
                    <td className="p-2.5 text-gray-600">Popped seam along hem, detached snap button, makeup mark on collar</td>
                    <td className="p-2.5 text-amber-800">₱300 – ₱600 tailoring/treatment</td>
                    <td className="p-2.5 text-gray-700">Deducted from deposit</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-rose-900">Moderate Damage</td>
                    <td className="p-2.5 text-gray-600">Broken invisible zipper, torn tulle tier, spilled red wine or grease</td>
                    <td className="p-2.5 text-rose-800">₱800 – ₱1,500 specialist restoration</td>
                    <td className="p-2.5 text-gray-700">Deposit forfeited partially</td>
                  </tr>
                  <tr className="bg-rose-50/50">
                    <td className="p-2.5 font-bold text-rose-950">Irreparable Loss</td>
                    <td className="p-2.5 text-gray-600">Cigarette/candle burn, fabric melt from iron, severe tear, non-return</td>
                    <td className="p-2.5 text-rose-950 font-bold">Full Enstack Retail Price</td>
                    <td className="p-2.5 font-bold text-rose-900">Deposit forfeited + Balance balance billed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Return Protocol & Late Surcharge */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-gray-900 font-serif text-lg font-bold">
              <RefreshCw className="w-5 h-5 text-gray-700" />
              <h3>4. Return Logistics & Late Fees</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
              <li><strong>Pickup Deadline:</strong> Garments must be packaged in the provided garment bag and ready for courier pickup by 5:00 PM on the designated Return Date.</li>
              <li><strong>Late Return Surcharge:</strong> Delayed returns without prior 24-hour notice incur a late surcharge of <strong>₱500 per calendar day</strong>, as it compromises subsequent client reservations.</li>
              <li><strong>Provincial Couriers:</strong> For LBC or J&T returns, drop-off tracking numbers must be messaged to customer support before 3:00 PM on the designated return date.</li>
            </ul>
          </section>

          {/* Section 5: Cancellations & Rescheduling */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-gray-900 font-serif text-lg font-bold">
              <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />
              <h3>5. Cancellations, Fitting & Rescheduling</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              We understand that wedding dates, flight schedules, and weather typhoons in the Philippines can fluctuate. You may reschedule your rental free of charge at least 7 days before dispatch, subject to dress calendar availability.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
          <div className="text-xs text-gray-500">
            Applicable to all reservations across Love Humbly Shop & Corset Bloomfield.
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-gray-900 text-white text-xs font-semibold hover:bg-[#D4AF37] transition shadow-xs"
          >
            I Understand & Agree
          </button>
        </div>
      </div>
    </div>
  );
};
