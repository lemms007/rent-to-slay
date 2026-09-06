import React, { useState } from 'react';
import { 
  Settings, CheckCircle2, AlertCircle, Clock, Calendar, Plus, 
  Eye, RefreshCw, DollarSign, Package, ShieldCheck, Trash2, ArrowLeft, ExternalLink, Download, FileText, Search
} from 'lucide-react';
import { Dress, Booking, BlockedDateRange, DressCategory, ShopBrand } from '../types';
import { formatPhilippineDate, formatPHP } from '../utils/dateUtils';

interface AdminDashboardProps {
  dresses: Dress[];
  bookings: Booking[];
  onUpdateBookingStatus: (bookingId: string, status: Booking['bookingStatus']) => void;
  onUpdatePaymentStatus: (bookingId: string, status: Booking['paymentStatus']) => void;
  onUpdateDepositStatus: (bookingId: string, status: Booking['depositStatus']) => void;
  onAddBlockedDate: (dressId: string, block: BlockedDateRange) => void;
  onRemoveBlockedDate: (dressId: string, blockId: string) => void;
  onAddNewDress: (dress: Dress) => void;
  onDeleteDress?: (dressId: string) => void;
  onResetInventory?: () => void;
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  dresses,
  bookings,
  onUpdateBookingStatus,
  onUpdatePaymentStatus,
  onUpdateDepositStatus,
  onAddBlockedDate,
  onRemoveBlockedDate,
  onAddNewDress,
  onDeleteDress,
  onResetInventory,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'bookings' | 'block_dates' | 'add_dress' | 'inventory'>('bookings');
  const [selectedProofUrl, setSelectedProofUrl] = useState<string | null>(null);

  // Block Dates Form State
  const [blockDressId, setBlockDressId] = useState<string>(dresses[0]?.id || '');
  const [blockStart, setBlockStart] = useState('');
  const [blockEnd, setBlockEnd] = useState('');
  const [blockType, setBlockType] = useState<'maintenance' | 'cleaning' | 'fitting' | 'booked'>('maintenance');
  const [blockNotes, setBlockNotes] = useState('');

  // Add Dress Form State
  const [newName, setNewName] = useState('');
  const [newShop, setNewShop] = useState<ShopBrand>('Love Humbly');
  const [newCategory, setNewCategory] = useState<DressCategory>('Gala & Evening Gowns');
  const [newTagline, setNewTagline] = useState('');
  const [newPrice4D, setNewPrice4D] = useState(1500);
  const [newExtraDayRate, setNewExtraDayRate] = useState(250);
  const [newRetail, setNewRetail] = useState(12000);
  const [newDeposit, setNewDeposit] = useState(1000);
  const [newFabric, setNewFabric] = useState('Mulberry Satin Silk');
  const [newSilhouette, setNewSilhouette] = useState('Corset Gown');
  const [newImageUrl, setNewImageUrl] = useState('');

  // Inventory Table Filter State
  const [inventorySearch, setInventorySearch] = useState('');
  const [inventoryShopFilter, setInventoryShopFilter] = useState<'All' | 'Love Humbly' | 'Corset Bloomfield'>('All');

  // Stats calculation
  const totalRevenue = bookings.reduce((sum, b) => sum + b.rentalFee, 0);
  const totalDepositsHeld = bookings
    .filter(b => b.depositStatus === 'held')
    .reduce((sum, b) => sum + b.securityDeposit, 0);
  const pendingApprovals = bookings.filter(b => b.paymentStatus === 'pending_verification').length;

  const handleBlockSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blockStart || !blockEnd) return;

    const newBlock: BlockedDateRange = {
      id: `block-${Date.now()}`,
      startDate: blockStart,
      endDate: blockEnd,
      type: blockType,
      notes: blockNotes || undefined
    };

    onAddBlockedDate(blockDressId, newBlock);
    setBlockNotes('');
    alert('Date block added successfully! These dates are now blocked on the customer calendar.');
  };

  const handleAddDressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const slug = newName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const newDress: Dress = {
      id: `dress-${Date.now()}`,
      name: newName,
      slug,
      shop: newShop,
      category: newCategory,
      tagline: newTagline || `Exclusive ${newShop} designer couture`,
      description: `${newName} in ${newFabric} designed for special occasions.`,
      rentalPrice4Days: Number(newPrice4D),
      extraDayRate: Number(newExtraDayRate),
      rentalPrice3Days: Number(newPrice4D),
      rentalPrice5Days: Number(newPrice4D + newExtraDayRate),
      retailPrice: Number(newRetail),
      securityDeposit: Number(newDeposit),
      availableSizes: ['S', 'M', 'L'],
      measurements: [
        { size: 'S', bust: '33-34 in', waist: '25-26 in', hips: '35-37 in', length: '58 in' },
        { size: 'M', bust: '35-36 in', waist: '27-28 in', hips: '37-39 in', length: '59 in' },
        { size: 'L', bust: '37-38 in', waist: '29-30 in', hips: '39-41 in', length: '60 in' }
      ],
      colors: ['Custom'],
      fabric: newFabric,
      silhouette: newSilhouette,
      images: [
        newImageUrl || 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80'
      ],
      featured: false,
      fittingAvailable: true,
      careNotes: ['Garment steaming only', 'Professional dry cleaning included'],
      bestFor: ['Weddings', 'Galas', 'Special Events'],
      blockedDates: []
    };

    onAddNewDress(newDress);
    setNewName('');
    setNewTagline('');
    setNewImageUrl('');
    setActiveTab('bookings');
    alert('New gown added to the inventory!');
  };

  const handleDownloadProductsJson = () => {
    const jsonStr = JSON.stringify(dresses, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `love_humbly_enstack_products_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-200/80 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#FFF9F2] text-[#D4AF37] border border-[#F3E5D8]">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
              Love Humbly • Staff Portal
            </h1>
            <p className="text-xs text-gray-500">
              Real-time booking confirmations, GCash verification, calendar blocks & inventory
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="px-4 py-2 rounded-xl border border-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-50 flex items-center gap-1.5 transition self-start sm:self-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Storefront</span>
        </button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Total Bookings</span>
          <div className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
            {bookings.length}
          </div>
          <span className="text-[11px] text-gray-500">Active rental reservations</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Pending GCash Review</span>
          <div className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37] mt-1">
            {pendingApprovals}
          </div>
          <span className="text-[11px] text-gray-500">Awaiting payment check</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Rental Revenue</span>
          <div className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
            {formatPHP(totalRevenue)}
          </div>
          <span className="text-[11px] text-gray-500">Excluding refundable deposits</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Refundable Deposits Held</span>
          <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-700 mt-1">
            {formatPHP(totalDepositsHeld)}
          </div>
          <span className="text-[11px] text-gray-500">To refund upon inspection</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200/80 pb-3 mb-6 overflow-x-auto text-xs font-semibold">
        <button
          onClick={() => setActiveTab('bookings')}
          className={`px-4 py-2 rounded-xl transition ${
            activeTab === 'bookings' ? 'bg-[#D4AF37] text-white shadow-xs' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200/80'
          }`}
        >
          Customer Bookings ({bookings.length})
        </button>

        <button
          onClick={() => setActiveTab('block_dates')}
          className={`px-4 py-2 rounded-xl transition ${
            activeTab === 'block_dates' ? 'bg-[#D4AF37] text-white shadow-xs' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200/80'
          }`}
        >
          Manage Calendar Date Blocks
        </button>

        <button
          onClick={() => setActiveTab('add_dress')}
          className={`px-4 py-2 rounded-xl transition flex items-center gap-1.5 ${
            activeTab === 'add_dress' ? 'bg-[#D4AF37] text-white shadow-xs' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200/80'
          }`}
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add New Gown to Inventory</span>
        </button>

        <button
          onClick={() => setActiveTab('inventory')}
          className={`px-4 py-2 rounded-xl transition flex items-center gap-1.5 ${
            activeTab === 'inventory' ? 'bg-[#D4AF37] text-white shadow-xs' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200/80'
          }`}
        >
          <Package className="w-3.5 h-3.5" />
          <span>Shop Inventory ({dresses.length})</span>
        </button>
      </div>

      {/* TAB 1: BOOKINGS TABLE */}
      {activeTab === 'bookings' && (
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xs overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-serif text-xl font-bold text-gray-900">
              Active Customer Rentals
            </h3>
            <span className="text-xs text-gray-500">Updates sync in real-time</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50/70 border-b border-gray-100 text-gray-500 uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4 font-semibold">Order / Gown</th>
                  <th className="py-3.5 px-4 font-semibold">Renter Contact</th>
                  <th className="py-3.5 px-4 font-semibold">Rental Dates</th>
                  <th className="py-3.5 px-4 font-semibold">Payment & Total</th>
                  <th className="py-3.5 px-4 font-semibold">Order Status</th>
                  <th className="py-3.5 px-4 font-semibold">Deposit Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {bookings.map((b) => (
                  <tr key={b.id} className="hover:bg-gray-50/50 transition">
                    <td className="py-4 px-4">
                      <div className="font-mono font-bold text-gray-900">{b.orderNumber}</div>
                      <div className="font-medium text-gray-800 mt-0.5">{b.dressName} (Size {b.size})</div>
                      <div className="text-[10px] text-gray-400 capitalize">{b.deliveryMethod.replace(/_/g, ' ')}</div>
                    </td>

                    <td className="py-4 px-4">
                      <div className="font-semibold text-gray-900">{b.customerName}</div>
                      <div className="text-gray-500">{b.phone}</div>
                      <div className="text-[10px] text-gray-400 truncate max-w-[180px]">{b.deliveryAddress.city}, {b.deliveryAddress.province}</div>
                    </td>

                    <td className="py-4 px-4">
                      <div>Event: <strong className="text-gray-900">{formatPhilippineDate(b.eventDate)}</strong></div>
                      <div className="text-[10px] text-gray-500">
                        {formatPhilippineDate(b.startDate)} → {formatPhilippineDate(b.returnDate)}
                      </div>
                    </td>

                    <td className="py-4 px-4">
                      <div className="font-bold text-gray-900">{formatPHP(b.totalAmount)}</div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="uppercase text-[10px] font-bold text-blue-700">{b.paymentMethod}</span>
                        <span className="text-[10px] text-gray-500">Ref: {b.paymentReference}</span>
                      </div>
                      <div className="mt-1 flex items-center gap-1">
                        {b.paymentStatus === 'confirmed' ? (
                          <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                            Paid ✓
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => onUpdatePaymentStatus(b.id, 'confirmed')}
                            className="px-2 py-0.5 rounded-md bg-[#D4AF37] text-white text-[10px] font-bold hover:bg-[#c09e32] transition"
                          >
                            Verify Payment
                          </button>
                        )}
                        {b.paymentProofUrl && (
                          <button
                            type="button"
                            onClick={() => setSelectedProofUrl(b.paymentProofUrl!)}
                            className="text-gray-500 hover:text-gray-900 p-1"
                            title="View Receipt Screenshot"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </td>

                    <td className="py-4 px-4">
                      <select
                        value={b.bookingStatus}
                        onChange={(e) => onUpdateBookingStatus(b.id, e.target.value as any)}
                        className="px-2.5 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      >
                        <option value="confirmed">Confirmed</option>
                        <option value="preparing">Preparing & Steaming</option>
                        <option value="in_transit">Dispatched / Out for Delivery</option>
                        <option value="active_rental">Active Rental</option>
                        <option value="returned">Returned to Atelier</option>
                      </select>
                    </td>

                    <td className="py-4 px-4">
                      <div className="text-[11px] font-bold mb-1 text-gray-800">
                        Deposit: {formatPHP(b.securityDeposit)}
                      </div>
                      {b.depositStatus === 'refunded' ? (
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                          Refunded via GCash ✓
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => onUpdateDepositStatus(b.id, 'refunded')}
                          className="px-2.5 py-1 rounded-lg bg-gray-900 text-white text-[10px] font-semibold hover:bg-gray-800 transition"
                        >
                          Mark Deposit Refunded
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: BLOCK DATES */}
      {activeTab === 'block_dates' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-5 bg-white p-6 rounded-3xl border border-gray-100 shadow-xs space-y-4">
            <h3 className="font-serif text-xl font-bold text-gray-900">
              Block Calendar Dates
            </h3>
            <p className="text-xs text-gray-500">
              Block specific dresses from customer reservations for dry cleaning, repairs, or celebrity pullouts.
            </p>

            <form onSubmit={handleBlockSubmit} className="space-y-4 text-xs">
              <div>
                <label className="font-semibold text-gray-700 block mb-1">Select Dress</label>
                <select
                  value={blockDressId}
                  onChange={(e) => setBlockDressId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:ring-1 focus:ring-[#D4AF37] focus:outline-none"
                >
                  {dresses.map(d => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">Start Date</label>
                  <input
                    type="date"
                    required
                    value={blockStart}
                    onChange={(e) => setBlockStart(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:ring-1 focus:ring-[#D4AF37] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">End Date</label>
                  <input
                    type="date"
                    required
                    value={blockEnd}
                    onChange={(e) => setBlockEnd(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:ring-1 focus:ring-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-gray-700 block mb-1">Reason / Type</label>
                <select
                  value={blockType}
                  onChange={(e) => setBlockType(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:ring-1 focus:ring-[#D4AF37] focus:outline-none"
                >
                  <option value="maintenance">Maintenance / Tailoring Repair</option>
                  <option value="cleaning">Specialist Dry Cleaning</option>
                  <option value="fitting">Studio Fitting Reservation</option>
                  <option value="booked">Direct / Showroom Booking</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-gray-700 block mb-1">Internal Note (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Celebrity pullout for ABS-CBN Ball"
                  value={blockNotes}
                  onChange={(e) => setBlockNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:ring-1 focus:ring-[#D4AF37] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#D4AF37] text-white font-semibold text-xs hover:bg-[#c09e32] transition shadow-xs"
              >
                Apply Calendar Block
              </button>
            </form>
          </div>

          <div className="md:col-span-7 bg-white p-6 rounded-3xl border border-gray-100 shadow-xs space-y-4">
            <h3 className="font-serif text-xl font-bold text-gray-900">
              Active Calendar Blocks
            </h3>

            <div className="space-y-2 max-h-[450px] overflow-y-auto">
              {dresses.flatMap(d => d.blockedDates.map(b => ({ ...b, dressName: d.name, dressId: d.id }))).map((b) => (
                <div key={b.id} className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-gray-900">{b.dressName}</div>
                    <div className="text-gray-600">
                      {formatPhilippineDate(b.startDate)} to {formatPhilippineDate(b.endDate)}
                    </div>
                    <div className="text-[10px] text-gray-400 capitalize">
                      Type: <strong>{b.type}</strong> {b.notes ? `• ${b.notes}` : ''}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemoveBlockedDate(b.dressId, b.id)}
                    className="p-2 text-gray-400 hover:text-rose-600 transition"
                    title="Remove block"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: ADD NEW DRESS */}
      {activeTab === 'add_dress' && (
        <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xs">
          <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
            Add New Gown to Love Humbly Inventory
          </h3>
          <p className="text-xs text-gray-500 mb-6">
            New gowns will immediately be visible on the customer collection with real-time booking calendar.
          </p>

          <form onSubmit={handleAddDressSubmit} className="space-y-4 text-xs">
            <div>
              <label className="font-semibold text-gray-700 block mb-1">Gown Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Maria Clara Gold Organza Ballgown"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:ring-1 focus:ring-[#D4AF37] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-gray-700 block mb-1">Shop Boutique *</label>
                <select
                  value={newShop}
                  onChange={(e) => setNewShop(e.target.value as ShopBrand)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:ring-1 focus:ring-[#D4AF37] focus:outline-none"
                >
                  <option value="Love Humbly">Love Humbly (enstack.ph/love-humbly-shop)</option>
                  <option value="Corset Bloomfield">Corset Bloomfield (enstack.ph/corsetbloomfield)</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-gray-700 block mb-1">Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:ring-1 focus:ring-[#D4AF37] focus:outline-none"
                >
                  <option value="Modern Filipiniana">Modern Filipiniana</option>
                  <option value="Infinity & Multiway">Infinity & Multiway</option>
                  <option value="Gala & Evening Gowns">Gala & Evening Gowns</option>
                  <option value="Debutante & Prom">Debutante & Prom</option>
                  <option value="Bridal & Prenup">Bridal & Prenup</option>
                  <option value="Cocktail & Semi-Formal">Cocktail & Semi-Formal</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-gray-700 block mb-1">Fabric</label>
                <input
                  type="text"
                  placeholder="e.g. Silk Organza, Velvet"
                  value={newFabric}
                  onChange={(e) => setNewFabric(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:ring-1 focus:ring-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-gray-700 block mb-1">Retail Value (₱)</label>
                <input
                  type="number"
                  value={newRetail}
                  onChange={(e) => setNewRetail(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:ring-1 focus:ring-[#D4AF37] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="font-semibold text-gray-700 block mb-1">Base 4-Day Rental (₱)</label>
                <input
                  type="number"
                  value={newPrice4D}
                  onChange={(e) => setNewPrice4D(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:ring-1 focus:ring-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-gray-700 block mb-1">Extra Day Rate (₱/day)</label>
                <input
                  type="number"
                  value={newExtraDayRate}
                  onChange={(e) => setNewExtraDayRate(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:ring-1 focus:ring-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-emerald-800 block mb-1">Security Deposit (₱)</label>
                <input
                  type="number"
                  value={newDeposit}
                  onChange={(e) => setNewDeposit(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-emerald-300 bg-emerald-50/50 text-xs focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="font-semibold text-gray-700 block mb-1">Photo Image URL</label>
              <input
                type="url"
                placeholder="https://images.unsplash.com/..."
                value={newImageUrl}
                onChange={(e) => setNewImageUrl(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:ring-1 focus:ring-[#D4AF37] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-[#D4AF37] text-white font-semibold text-xs hover:bg-[#c09e32] transition shadow-xs"
            >
              Save Gown to Catalog
            </button>
          </form>
        </div>
      )}

      {/* TAB 4: SHOP INVENTORY MANAGEMENT */}
      {activeTab === 'inventory' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-2xl font-bold text-gray-900">
                  Shop Inventory Catalog ({dresses.length})
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Authentic Enstack Stock
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Extracted collections from <strong>Love Humbly Shop</strong> (enstack.ph/love-humbly-shop) and <strong>Corset Bloomfield</strong> (enstack.ph/corsetbloomfield). Demo inventory removed.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
              <button
                type="button"
                onClick={handleDownloadProductsJson}
                className="px-3.5 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-semibold flex items-center gap-2 shadow-xs transition"
                title="Download full product info file with image URLs as JSON"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download products.json</span>
              </button>

              <a
                href="/products.json"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 text-xs font-semibold flex items-center gap-1.5 transition"
                title="View stored products.json file in browser"
              >
                <FileText className="w-4 h-4 text-blue-500" />
                <span>View File</span>
                <ExternalLink className="w-3 h-3 text-gray-400" />
              </a>

              {onResetInventory && (
                <button
                  type="button"
                  onClick={onResetInventory}
                  className="px-3.5 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-semibold flex items-center gap-1.5 transition"
                  title="Restore original authentic catalog items"
                >
                  <RefreshCw className="w-4 h-4 text-amber-700" />
                  <span>Reset Inventory</span>
                </button>
              )}
            </div>
          </div>

          {/* Breakdown summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Love Humbly Items</span>
              <div className="text-xl font-bold font-serif text-gray-900 mt-0.5">
                {dresses.filter(d => d.shop === 'Love Humbly').length} designs
              </div>
              <span className="text-[11px] text-gray-500">Adara, Sara, Deana, Sierra, Eula, Infinity</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Corset Bloomfield Items</span>
              <div className="text-xl font-bold font-serif text-gray-900 mt-0.5">
                {dresses.filter(d => d.shop === 'Corset Bloomfield').length} designs
              </div>
              <span className="text-[11px] text-gray-500">Aurora, Areli, Niña Bridal, Beatrice, Fidela</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Demo Inventory Status</span>
              <div className="text-xl font-bold font-serif text-emerald-600 mt-0.5">
                0 Demo Items
              </div>
              <span className="text-[11px] text-emerald-600">Old demo items successfully purged</span>
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-xs">
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <span className="text-xs text-gray-500 font-medium">Filter Shop:</span>
              <div className="flex items-center gap-1.5">
                {(['All', 'Love Humbly', 'Corset Bloomfield'] as const).map(shop => {
                  const count = shop === 'All' ? dresses.length : dresses.filter(d => d.shop === shop).length;
                  return (
                    <button
                      key={shop}
                      type="button"
                      onClick={() => setInventoryShopFilter(shop)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                        inventoryShopFilter === shop
                          ? 'bg-gray-900 text-white shadow-xs'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      {shop} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={inventorySearch}
                onChange={e => setInventorySearch(e.target.value)}
                placeholder="Search gown name, size, fabric..."
                className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
          </div>

          {/* Table of Gowns */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50/70 border-b border-gray-100 text-gray-500 uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="p-4">Gown / Design</th>
                    <th className="p-4">Shop Origin</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Min Rental (4 Days)</th>
                    <th className="p-4">Extra Day Rate</th>
                    <th className="p-4">Deposit</th>
                    <th className="p-4">Sizes</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {dresses
                    .filter(dress => {
                      if (inventoryShopFilter !== 'All' && dress.shop !== inventoryShopFilter) return false;
                      if (inventorySearch.trim()) {
                        const q = inventorySearch.toLowerCase();
                        return (
                          dress.name.toLowerCase().includes(q) ||
                          (dress.shop && dress.shop.toLowerCase().includes(q)) ||
                          dress.category.toLowerCase().includes(q) ||
                          dress.fabric.toLowerCase().includes(q) ||
                          dress.silhouette.toLowerCase().includes(q) ||
                          dress.availableSizes.some(s => s.toLowerCase().includes(q))
                        );
                      }
                      return true;
                    })
                    .map((dress) => (
                    <tr key={dress.id} className="hover:bg-gray-50/50 transition">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={dress.images[0]}
                            alt={dress.name}
                            className="w-12 h-14 object-cover rounded-lg border border-gray-200 shrink-0"
                          />
                          <div>
                            <div className="font-semibold text-gray-900">{dress.name}</div>
                            <div className="text-[11px] text-gray-400 line-clamp-1 max-w-xs">{dress.tagline}</div>
                            <div className="flex items-center gap-2 mt-1 text-[10px] text-gray-500">
                              <span className="font-medium text-gray-700">{dress.images.length} image{dress.images.length > 1 ? 's' : ''}</span>
                              <span>•</span>
                              <a
                                href={dress.images[0]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline inline-flex items-center gap-0.5"
                                title="Open primary image URL"
                              >
                                Image URL
                                <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide ${
                          dress.shop === 'Love Humbly'
                            ? 'bg-[#FFF9F2] text-[#B89628] border border-[#F3E5D8]'
                            : 'bg-rose-50 text-rose-800 border border-rose-200'
                        }`}>
                          {dress.shop}
                        </span>
                      </td>

                      <td className="p-4 text-gray-600">
                        {dress.category}
                      </td>

                      <td className="p-4 font-semibold text-gray-900">
                        {formatPHP(dress.rentalPrice4Days)}
                      </td>

                      <td className="p-4 text-gray-600">
                        +{formatPHP(dress.extraDayRate)}/day
                      </td>

                      <td className="p-4 text-gray-600">
                        {formatPHP(dress.securityDeposit)}
                      </td>

                      <td className="p-4">
                        <div className="flex flex-wrap gap-1 max-w-[120px]">
                          {dress.availableSizes.map(s => (
                            <span key={s} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[9px] font-medium">
                              {s}
                            </span>
                          ))}
                        </div>
                      </td>

                      <td className="p-4 text-right">
                        {onDeleteDress && (
                          <button
                            type="button"
                            onClick={() => {
                              if (window.confirm(`Are you sure you want to remove "${dress.name}" from the catalog?`)) {
                                onDeleteDress(dress.id);
                              }
                            }}
                            className="p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                            title="Remove gown from inventory"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {selectedProofUrl && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white p-4 rounded-2xl max-w-sm w-full space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-gray-900">Payment Proof Screenshot</span>
              <button onClick={() => setSelectedProofUrl(null)} className="text-gray-400 hover:text-gray-900">
                ✕
              </button>
            </div>
            <img src={selectedProofUrl} alt="Receipt proof" className="w-full rounded-xl max-h-[400px] object-contain bg-gray-50" />
            <button
              type="button"
              onClick={() => setSelectedProofUrl(null)}
              className="w-full py-2 bg-gray-900 text-white rounded-xl text-xs font-semibold hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
