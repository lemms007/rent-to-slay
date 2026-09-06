import React, { useState } from 'react';
import { 
  ShieldAlert, Sparkles, AlertTriangle, CheckCircle2, Clock, 
  HelpCircle, RefreshCw, XCircle, ArrowRight, FileText, Ban
} from 'lucide-react';
import { formatPHP } from '../utils/dateUtils';

export const TermsAndDamages: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rules' | 'damages' | 'deposits' | 'faq'>('rules');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9F2] text-gray-800 text-xs font-semibold mb-3 border border-[#F3E5D8]">
          <ShieldAlert className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Love Humbly & Corset Bloomfield Rental Charter • Philippines</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
          Terms of Rental & Damage Policy
        </h1>
        <p className="text-sm sm:text-base text-gray-600 font-light mt-3 leading-relaxed">
          We want you to look breathtaking at your event with zero worries. Please review our fair guidelines on garment care, security deposits, and damage protocols.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1.5 rounded-2xl bg-white border border-gray-200/80 shadow-xs max-w-full overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('rules')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
              activeTab === 'rules'
                ? 'bg-[#D4AF37] text-white shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Care & Rental Rules
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('damages')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
              activeTab === 'damages'
                ? 'bg-[#D4AF37] text-white shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Damages & Penalty Schedule
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('deposits')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
              activeTab === 'deposits'
                ? 'bg-[#D4AF37] text-white shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Security Deposit & Refunds
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('faq')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
              activeTab === 'faq'
                ? 'bg-[#D4AF37] text-white shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Frequently Asked Questions
          </button>
        </div>
      </div>

      {/* TAB 1: RENTAL RULES & CARE PROTOCOL */}
      {activeTab === 'rules' && (
        <div className="space-y-8 animate-fadeIn">
          {/* CRITICAL GOLDEN RULE BANNER */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FFF9F2] border-2 border-[#D4AF37]/40 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#D4AF37]/20 text-[#D4AF37] shrink-0">
                <Ban className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37]">
                  Strict Golden Rule for All Renters
                </span>
                <h3 className="font-serif text-2xl font-bold text-gray-950">
                  DO NOT Wash, Hand-Wash, Machine-Dry, or Directly Iron the Dress
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
                  Our designer gowns and modern Filipiniana butterfly sleeves are constructed from delicate textiles—such as pure mulberry silk, fine French tulle, hand-sewn micro-sequins, and handwoven Inabel. Standard domestic laundry detergents, warm water, and hot irons can permanently shrink, scorch, or ruin these fabrics.
                </p>
                <div className="pt-2 text-xs font-semibold text-gray-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Professional eco-friendly dry cleaning is already covered in your rental fee and handled by Love Humbly.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-step Rental Rules */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#D4AF37] text-white font-serif font-bold flex items-center justify-center text-sm shadow-xs">
                1
              </div>
              <h4 className="font-serif text-xl font-bold text-gray-900">
                Upon Receiving Your Gown
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Your dress will arrive in a premium Love Humbly dust bag, on a velvet padded hanger, freshly steamed. Please inspect the gown immediately and notify our team within 2 hours of receipt if any pre-existing flaw is noticed.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#D4AF37] text-white font-serif font-bold flex items-center justify-center text-sm shadow-xs">
                2
              </div>
              <h4 className="font-serif text-xl font-bold text-gray-900">
                During Your Event
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Apply makeup, hairspray, perfume, and body bronzers <strong>before</strong> putting on the dress. When walking on grass, wet pavement, or staircases, gently lift the skirt hem to prevent soil and gravel snagging.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#D4AF37] text-white font-serif font-bold flex items-center justify-center text-sm shadow-xs">
                3
              </div>
              <h4 className="font-serif text-xl font-bold text-gray-900">
                Returning the Gown
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Place the dress back into the Love Humbly garment bag with the hanger. Hand it over to our assigned courier (Lalamove / Grab / LBC) or return to our QC showroom by 5:00 PM on your scheduled return date.
              </p>
            </div>
          </div>

          {/* Alterations Policy */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 shadow-xs">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
              Alterations & Styling Guidelines
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-gray-600 leading-relaxed">
              <div className="space-y-2">
                <span className="font-semibold text-gray-900 block uppercase tracking-wider text-[11px] text-emerald-700">
                  ✓ What Is Permitted:
                </span>
                <ul className="list-disc pl-4 space-y-1.5">
                  <li>Gentle double-sided fashion body tape (residue-free).</li>
                  <li>Lacing adjustments on corset backs to fit your curves.</li>
                  <li>Handheld garment steamers on low temperature to remove shipping creases.</li>
                  <li>Clear stick-on silicone bras and seamless undergarments.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <span className="font-semibold text-gray-900 block uppercase tracking-wider text-[11px] text-rose-700">
                  ✗ Strictly Prohibited:
                </span>
                <ul className="list-disc pl-4 space-y-1.5">
                  <li>Cutting, shortening, or tailoring the fabric or hem.</li>
                  <li>Sewing or stitching alterations with needles that pierce silk.</li>
                  <li>Fabric glues, pins, or safety pins that cause punctures or tears.</li>
                  <li>Machine laundering or standard household steam irons.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: DAMAGES & PENALTY SCHEDULE */}
      {activeTab === 'damages' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Overview Note */}
          <div className="p-6 rounded-3xl bg-[#FFF9F2] border border-[#F3E5D8] text-xs sm:text-sm text-gray-700 leading-relaxed">
            <strong className="text-gray-900 font-bold block mb-1">
              Transparent, Fair & Documented Damage Assessment:
            </strong>
            We understand that events are meant to be enjoyed! Minor wear is expected and absorbed by us. In the event of avoidable stains or structural damage, repair fees are deducted strictly at actual cost from your refundable security deposit.
          </div>

          {/* Damage Schedule Table */}
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-xs">
            <div className="p-5 bg-gray-950 text-white flex items-center justify-between border-b border-gray-800">
              <span className="font-serif text-lg font-bold">Damage Classification & Cost Schedule</span>
              <span className="text-xs text-gray-400">Philippine Peso (PHP)</span>
            </div>

            <div className="divide-y divide-gray-100 text-xs sm:text-sm">
              {/* Category 1: Normal Wear */}
              <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gray-50/50">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-bold">Tier 1</span>
                    <strong className="text-gray-900 font-bold text-base">Minor Normal Wear & Tear</strong>
                  </div>
                  <p className="text-gray-500 text-xs">
                    Light dust on lower skirt hem, removable powder makeup smudges, minor loose threads.
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-bold text-emerald-700 text-base">₱0 (Free)</span>
                  <span className="text-[11px] text-gray-400 block">Covered by Love Humbly</span>
                </div>
              </div>

              {/* Category 2: Seamstress Repairable */}
              <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs font-bold">Tier 2</span>
                    <strong className="text-gray-900 font-bold text-base">Minor Repairable Damage</strong>
                  </div>
                  <p className="text-gray-500 text-xs">
                    Broken zipper slider, detached button or hook-and-eye, minor seam strain along lining.
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-bold text-gray-900 text-base">₱350 - ₱600</span>
                  <span className="text-[11px] text-gray-400 block">Deducted from deposit</span>
                </div>
              </div>

              {/* Category 3: Chemical Spot Cleaning */}
              <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gray-50/50">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-xs font-bold">Tier 3</span>
                    <strong className="text-gray-900 font-bold text-base">Heavy Stains & Spot Treatment</strong>
                  </div>
                  <p className="text-gray-500 text-xs">
                    Red wine spills, candle wax, food grease, permanent ink, or heavy mud requiring intensive enzymatic treatment.
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-bold text-amber-800 text-base">₱750 - ₱1,500</span>
                  <span className="text-[11px] text-gray-400 block">Specialist dry-clean fee</span>
                </div>
              </div>

              {/* Category 4: Late Return */}
              <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-xs font-bold">Penalty</span>
                    <strong className="text-gray-900 font-bold text-base">Late Return Delay</strong>
                  </div>
                  <p className="text-gray-500 text-xs">
                    Unnotified delay past 5:00 PM on scheduled return date (directly disrupts turnaround for next event client).
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-bold text-purple-900 text-base">₱500 / day</span>
                  <span className="text-[11px] text-gray-400 block">Per calendar day late</span>
                </div>
              </div>

              {/* Category 5: Irreparable / Loss */}
              <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-rose-50/60">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-rose-200 text-rose-900 text-xs font-bold">Tier 4</span>
                    <strong className="text-rose-950 font-bold text-base">Irreparable Ruin, Burns, or Theft</strong>
                  </div>
                  <p className="text-rose-900/80 text-xs">
                    Cigarette or sparkler burn holes, fabric cuts, unremovable paint, severe tears across main silhouette, or item loss.
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-bold text-rose-700 text-base">Full Deposit + Replacement</span>
                  <span className="text-[11px] text-rose-500 block">Retail replacement value</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SECURITY DEPOSIT & REFUND SCHEDULE */}
      {activeTab === 'deposits' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF9F2] text-[#D4AF37] border border-[#F3E5D8] flex items-center justify-center">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                24 - 48 Hour Deposit Refund Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Your security deposit (ranging from ₱1,000 to ₱2,500 depending on gown tier) is strictly held as a guarantee and is <strong>never treated as revenue</strong>.
              </p>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-700 space-y-2">
                <div className="font-semibold text-gray-900">Refund Process:</div>
                <div>1. Gown is received at our QC atelier and inspected under studio lighting.</div>
                <div>2. If no major defects, our finance staff initiates direct refund to your GCash or Bank Account.</div>
                <div>3. Transaction receipt is sent directly to your mobile SMS & email.</div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                Cancellation & Rescheduling
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                We know event schedules can shift. We offer flexible rescheduling options:
              </p>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>7+ Days Before:</strong> 100% full refund or free rescheduling to any available date within 6 months.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>3 to 6 Days Before:</strong> 50% rental fee refund (deposit is 100% refunded) or 1 free rescheduling pass.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Within 48 Hours:</strong> Rental fee is non-refundable due to reserved calendar lock (deposit is 100% refunded).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: FREQUENTLY ASKED QUESTIONS */}
      {activeTab === 'faq' && (
        <div className="space-y-4 animate-fadeIn max-w-4xl mx-auto">
          {[
            {
              q: 'Can I rent if I live outside Metro Manila?',
              a: 'Yes! We ship nationwide across the Philippines via LBC Express and J&T Express. We support rental durations from a minimum of 4 days up to a maximum of 14 days, providing generous transit and preparation buffers for destination weddings and provincial events (e.g. Boracay, Batanes, Tagaytay, Cebu, Baguio).'
            },
            {
              q: 'What if the dress does not fit when it arrives?',
              a: 'All our dresses feature adjustable corset backs or stretch bias linings with detailed bust, waist, and hip measurements listed in inches. If you notify us within 2 hours of delivery and the dress has not been worn, you may swap it for another gown of equal value at our QC showroom subject to courier availability.'
            },
            {
              q: 'How do I return the dress?',
              a: 'Simply pack the dress inside the Love Humbly garment bag. On your designated return day, we will book our partner courier (Lalamove / Grab) to pick it up from your address, or you may drop it off at our Quezon City studio before 5:00 PM.'
            },
            {
              q: 'What if wine or sauce accidentally spills on the gown?',
              a: 'Do not panic and DO NOT scrub it with soap or water! Blot the excess liquid very gently with a dry white napkin without rubbing into the fibers. Inform us when returning the gown so our master dry-cleaner can apply the appropriate enzymatic chemical formula.'
            },
            {
              q: 'Can I visit the studio to fit before booking online?',
              a: 'Absolutely! Our showroom is located along Scout Gandia St., Quezon City. Studio fitting sessions are ₱300 for 45 minutes, which is 100% deducted from your rental fee when you confirm your booking.'
            }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-gray-100 shadow-xs space-y-1.5">
              <h4 className="font-serif text-lg font-bold text-gray-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{item.q}</span>
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light pl-6">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
