import React, { useState } from 'react';
import { 
  Car, 
  Search, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Crown,
  Grid,
  ChevronRight
} from 'lucide-react';

interface CadillacModel {
  name: string;
  category: 'SUVs & Crossovers' | 'V-Series & Performance' | 'Sedans & Coupes' | 'EV & Future' | 'Heritage & Classics';
  badge?: string;
  featured?: boolean;
}

export const EveryModelStickersSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const allModels: CadillacModel[] = [
    // SUVs & Crossovers
    { name: 'Cadillac Escalade', category: 'SUVs & Crossovers', badge: 'Most Popular', featured: true },
    { name: 'Cadillac Escalade ESV', category: 'SUVs & Crossovers', badge: 'Full-Size' },
    { name: 'Cadillac Escalade EXT', category: 'SUVs & Crossovers', badge: 'Truck' },
    { name: 'Cadillac Escalade Hybrid', category: 'SUVs & Crossovers' },
    { name: 'Cadillac XT4', category: 'SUVs & Crossovers', badge: 'Compact' },
    { name: 'Cadillac XT5', category: 'SUVs & Crossovers', badge: 'Best Seller' },
    { name: 'Cadillac XT6', category: 'SUVs & Crossovers', badge: '3-Row' },
    { name: 'Cadillac SRX', category: 'SUVs & Crossovers' },

    // V-Series & Performance
    { name: 'Cadillac CT5-V', category: 'V-Series & Performance', badge: 'Blackwing', featured: true },
    { name: 'Cadillac CT4-V', category: 'V-Series & Performance', badge: 'V-Series' },
    { name: 'Cadillac CT6-V', category: 'V-Series & Performance', badge: 'Twin Turbo' },
    { name: 'Cadillac CTS-V', category: 'V-Series & Performance', badge: 'Supercharged' },
    { name: 'Cadillac ATS-V', category: 'V-Series & Performance', badge: 'Twin Turbo' },
    { name: 'Cadillac XLR', category: 'V-Series & Performance', badge: 'Hardtop Roadster' },

    // Sedans & Coupes
    { name: 'Cadillac CT5', category: 'Sedans & Coupes', badge: 'Luxury Sedan' },
    { name: 'Cadillac CT4', category: 'Sedans & Coupes' },
    { name: 'Cadillac CT6', category: 'Sedans & Coupes', badge: 'Flagship' },
    { name: 'Cadillac CT6 PLUG-IN', category: 'Sedans & Coupes' },
    { name: 'Cadillac CTS', category: 'Sedans & Coupes' },
    { name: 'Cadillac ATS', category: 'Sedans & Coupes' },
    { name: 'Cadillac XTS', category: 'Sedans & Coupes' },
    { name: 'Cadillac DTS', category: 'Sedans & Coupes' },
    { name: 'Cadillac STS', category: 'Sedans & Coupes' },
    { name: 'Cadillac Catera', category: 'Sedans & Coupes' },
    { name: 'Cadillac ELR', category: 'Sedans & Coupes', badge: 'Luxury Coupe' },

    // EV & Future
    { name: 'Cadillac Lyriq', category: 'EV & Future', badge: 'Ultium EV', featured: true },
    { name: 'Cadillac Escalade IQ', category: 'EV & Future', badge: 'Full EV SUV' },
    { name: 'Cadillac Celestiq', category: 'EV & Future', badge: 'Bespoke Ultra-Luxury' },
    { name: 'Cadillac Optiq', category: 'EV & Future', badge: 'Compact EV' },

    // Heritage & Classics
    { name: 'Cadillac Eldorado', category: 'Heritage & Classics', badge: 'Iconic Classic' },
    { name: 'Cadillac DeVille', category: 'Heritage & Classics', badge: 'Heritage' },
    { name: 'Cadillac Fleetwood', category: 'Heritage & Classics', badge: 'Classic' },
    { name: 'Cadillac Brougham', category: 'Heritage & Classics' },
    { name: 'Cadillac Seville', category: 'Heritage & Classics' },
    { name: 'Cadillac Allante', category: 'Heritage & Classics', badge: 'Italian Design' },
    { name: 'Cadillac Sixty Special', category: 'Heritage & Classics' }
  ];

  const categories = ['All', 'SUVs & Crossovers', 'V-Series & Performance', 'Sedans & Coupes', 'EV & Future', 'Heritage & Classics'];

  const filteredModels = allModels.filter((model) => {
    const matchesCategory = selectedCategory === 'All' || model.category === selectedCategory;
    const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleModelClick = (modelName: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-white text-[#282828] border-t border-[#E5E5E7]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#282828] tracking-tight leading-tight">
            Window Stickers Available for Every Cadillac Model
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#686868] font-normal leading-relaxed">
            Our Cadillac window sticker lookup works across the full Cadillac lineup. Whether you are researching a classic Eldorado, a high-performance V-Series, or a brand new electric model, we have you covered.
          </p>
        </div>

        {/* Interactive Controls Bar: Category Pills + Search Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#FAFAFA] p-3 rounded-2xl border border-[#E5E5E7]">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-none w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-sm font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#282828] text-white shadow-xs'
                    : 'bg-white text-[#686868] hover:text-[#282828] border border-[#E5E5E7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-[#A0A0A0] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter model name..."
              className="w-full bg-white border border-[#E5E5E7] rounded-xl pl-9 pr-4 py-2 text-sm text-[#282828] placeholder-[#A0A0A0] focus:outline-none focus:border-[#FA0037] transition-colors font-medium"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#888888] hover:text-[#282828]"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Model Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {filteredModels.map((m, idx) => (
            <div
              key={idx}
              onClick={() => handleModelClick(m.name)}
              className="bg-[#FAFAFA] hover:bg-white rounded-xl border border-[#E5E5E7] hover:border-[#FA0037] p-4 transition-all duration-200 cursor-pointer flex items-center justify-between group shadow-xs hover:shadow-md"
            >
              <div className="space-y-1 min-w-0 pr-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-sm font-extrabold text-[#282828] group-hover:text-[#FA0037] transition-colors truncate">
                    {m.name}
                  </h3>
                </div>
              </div>

              <div className="p-1.5 rounded-lg bg-white border border-[#E5E5E7] text-[#888888] group-hover:bg-[#FA0037] group-hover:text-white group-hover:border-[#FA0037] transition-all shrink-0">
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State when Search yields no result */}
        {filteredModels.length === 0 && (
          <div className="text-center py-12 bg-[#FAFAFA] rounded-2xl border border-dashed border-[#D2D2D2]">
            <p className="text-sm font-bold text-[#686868]">No Cadillac model found matching "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-sm font-extrabold text-[#FA0037] hover:underline cursor-pointer"
            >
              Clear filters and view all models
            </button>
          </div>
        )}

        {/* Bottom CTA Bar */}
        <div className="mt-12 p-6 sm:p-8 bg-[#121214] text-white rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#FA0037] rounded-xl text-white shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-white">
                Don't See Your Exact Model Variant?
              </h3>
              <p className="text-sm text-[#A0A0A0] mt-0.5">
                Our VIN system decodes 100% of General Motors factory VIN databases from classic to 2026+ models.
              </p>
            </div>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-full sm:w-auto bg-[#FA0037] hover:bg-[#C8002B] text-white text-sm sm:text-sm font-extrabold px-6 py-3.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 shrink-0"
          >
            Lookup Any Cadillac VIN
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
