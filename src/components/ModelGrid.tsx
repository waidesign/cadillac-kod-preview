import React, { useState } from 'react';
import { CADILLAC_MODELS } from '../data/cadillacModels';
import { CadillacModelInfo } from '../types';
import { Car, ChevronRight, Search, ShieldCheck } from 'lucide-react';

interface ModelGridProps {
  onSelectModel: (model: CadillacModelInfo) => void;
  onSearchVin: (vin: string) => void;
}

export const ModelGrid: React.FC<ModelGridProps> = ({ onSelectModel, onSearchVin }) => {
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['ALL', 'SUV', 'EV', 'Sedan', 'Classic'];

  const filteredModels = CADILLAC_MODELS.filter(m => {
    const matchesCat = categoryFilter === 'ALL' || m.category === categoryFilter;
    const matchesQuery = m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         m.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Catalog Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[14px] font-extrabold tracking-widest text-[#A00021] uppercase block mb-1">
            CADILLAC MODEL ARCHIVE (1953–2026)
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#282828] tracking-tight">
            Cadillac Window Sticker & Build Sheet Catalog
          </h1>
          <p className="text-sm text-[#787878] mt-2">
            Select any Cadillac model to view original MSRP specifications, trim options, paint codes, and sample window stickers.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-[#F7F7F8] p-3 rounded-2xl border border-[#D2D2D2]">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3.5 py-1.5 text-sm font-bold rounded-xl transition-all ${
                  categoryFilter === cat
                    ? 'bg-[#282828] text-white shadow-sm'
                    : 'bg-white text-[#282828] hover:bg-[#E5E5E7] border border-[#D2D2D2]'
                }`}
              >
                {cat === 'ALL' ? 'All Models' : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#787878]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter model name..."
              className="w-full bg-white border border-[#D2D2D2] rounded-xl pl-9 pr-3 py-1.5 text-sm font-bold text-[#282828] placeholder-[#787878] focus:border-[#2C28E8]"
            />
          </div>

        </div>

        {/* Model Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map((model) => (
            <div
              key={model.id}
              onClick={() => onSelectModel(model)}
              className="bg-white rounded-2xl border border-[#D2D2D2] p-6 shadow-sm hover:shadow-md hover:border-[#FA0037] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[14px] font-extrabold uppercase px-2.5 py-0.5 rounded bg-[#F7F7F8] text-[#282828] border border-[#D2D2D2]">
                    {model.category} • {model.yearsActive}
                  </span>
                  <span className="text-sm font-bold text-[#A00021]">
                    {model.baseMsrpRange}
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#282828] group-hover:text-[#FA0037] transition-colors mb-2">
                  Cadillac {model.name}
                </h3>

                <p className="text-sm text-[#787878] leading-relaxed mb-4 line-clamp-3">
                  {model.description}
                </p>

                <div className="space-y-1.5 text-sm text-[#282828] mb-4 bg-[#F7F7F8] p-3 rounded-xl border border-[#E5E5E7]">
                  <div className="text-[14px] font-bold text-[#787878] uppercase">Popular Trims:</div>
                  <div className="font-semibold text-sm text-[#282828] truncate">
                    {model.popularTrims.join(' • ')}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E5E5E7] flex items-center justify-between text-sm font-extrabold text-[#282828] group-hover:text-[#FA0037]">
                <span>View {model.name} Window Sticker</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
