import React, { useState } from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ArrowRight, 
  Sparkles, 
  DollarSign, 
  Sliders, 
  Eye, 
  AlertTriangle,
  Car
} from 'lucide-react';

export const HiddenOptionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'breakdown'>('comparison');

  const optionBreakdown = [
    { name: 'Super Cruise™ Hands-Free Driving', category: 'Driver Assist', cost: '+$2,500' },
    { name: 'AKG Studio Reference 36-Speaker System', category: 'Premium Audio', cost: '+$4,300' },
    { name: 'Touring Package (Air Ride & Soft-Close Doors)', category: 'Performance', cost: '+$2,550' },
    { name: 'Night Vision w/ Thermal Imaging', category: 'Safety Tech', cost: '+$2,000' },
    { name: 'Rear Seat Entertainment (Dual 12.6" Screens)', category: 'Interior', cost: '+$1,990' },
    { name: '22" 12-Spoke Polished Chrome Wheels', category: 'Exterior', cost: '+$910' }
  ];

  return (
    <section className="py-16 bg-[#FAFAFA] text-[#282828] border-t border-[#E5E5E7]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#282828] tracking-tight leading-tight">
            How Can You Tell If a Cadillac Has $10,000+ in Hidden Options?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#686868] font-normal leading-relaxed">
            Here is something most used car buyers never think about: Take two Cadillac Escalades on the same lot. Same year, same trim, same exterior color. They look 100% identical sitting side-by-side. Yet one is priced much higher. Why?
          </p>
        </div>

        {/* Visual Storytelling Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* CARD 1: Base Trim Escalade */}
          <div className="bg-white rounded-2xl border border-[#E5E5E7] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E7]">
                <div>
                  <span className="text-[14px] font-black uppercase text-[#888888]">Vehicle A</span>
                  <h3 className="text-lg font-extrabold text-[#282828]">Base Trim Escalade</h3>
                </div>
                <span className="text-sm font-black uppercase px-3 py-1 bg-[#F4F4F6] text-[#686868] rounded-full border border-[#E5E5E7]">
                  Standard Build
                </span>
              </div>

              {/* Price Tag */}
              <div className="mt-6 p-4 bg-[#FAFAFA] rounded-xl border border-[#E5E5E7]">
                <span className="text-sm text-[#686868] font-semibold block">Total Monroney MSRP</span>
                <span className="text-2xl font-black text-[#282828] block">$83,895</span>
                <span className="text-[14px] text-[#A0A0A0] font-bold block mt-0.5">Factory Options: $0</span>
              </div>

              {/* Missing Features List */}
              <div className="mt-6 space-y-3">
                <span className="text-sm font-extrabold text-[#282828] uppercase tracking-wider block">
                  Missing Optional Equipment:
                </span>
                <ul className="space-y-2 text-sm text-[#686868]">
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-[#EF4444] shrink-0" />
                    <span>No Super Cruise™ Hands-Free Tech</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-[#EF4444] shrink-0" />
                    <span>Standard 19-Speaker Audio (Not 36 AKG)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-[#EF4444] shrink-0" />
                    <span>Standard Coil Suspension (No Air Ride)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-[#EF4444] shrink-0" />
                    <span>No Night Vision Thermal Camera</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E5E5E7] text-sm text-[#888888] font-medium">
              Looks identical on the outside, but carries zero factory upgrades.
            </div>
          </div>

          {/* CARD 2: Fully Loaded Escalade ($14,250 Hidden Options) */}
          <div className="bg-white rounded-2xl border-2 border-[#FA0037] p-6 sm:p-8 shadow-md relative flex flex-col justify-between">
            <span className="absolute -top-3.5 right-6 bg-[#FA0037] text-white text-[14px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
              +$14,250 Hidden Value
            </span>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E7]">
                <div>
                  <span className="text-[14px] font-black uppercase text-[#FA0037]">Vehicle B</span>
                  <h3 className="text-lg font-extrabold text-[#282828]">Loaded Escalade</h3>
                </div>
                <span className="text-sm font-black uppercase px-3 py-1 bg-[#FFF1F2] text-[#FA0037] rounded-full border border-[#FECDD3]">
                  Fully Loaded
                </span>
              </div>

              {/* Price Tag */}
              <div className="mt-6 p-4 bg-[#FFF1F2]/60 rounded-xl border border-[#FECDD3]">
                <span className="text-sm text-[#686868] font-semibold block">Total Monroney MSRP</span>
                <span className="text-2xl font-black text-[#FA0037] block">$98,145</span>
                <span className="text-[14px] text-[#A00021] font-bold block mt-0.5">Factory Installed Options: +$14,250</span>
              </div>

              {/* Installed Options Itemized */}
              <div className="mt-6 space-y-3">
                <span className="text-sm font-extrabold text-[#282828] uppercase tracking-wider block">
                  Verified Monroney Option Packages:
                </span>
                <ul className="space-y-2 text-sm text-[#282828]">
                  {optionBreakdown.map((opt, i) => (
                    <li key={i} className="flex items-center justify-between bg-[#FAFAFA] p-2 rounded-lg border border-[#E5E5E7]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                        <span className="font-bold">{opt.name}</span>
                      </div>
                      <span className="font-black text-[#FA0037] text-[14px] shrink-0 ml-2">{opt.cost}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E5E5E7] text-sm text-[#16A34A] font-bold flex items-center justify-between">
              <span>Verified via Cadillac Window Sticker Lookup</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>

        </div>

        {/* Story Callout Box */}
        <div className="bg-white rounded-2xl border border-[#E5E5E7] p-6 sm:p-8 shadow-sm w-full space-y-4">
          <div className="flex items-center gap-3 text-[#FA0037]">
            <HelpCircle className="w-6 h-6 shrink-0" />
            <h3 className="text-base sm:text-lg font-extrabold text-[#282828]">
              Why can't a basic VIN decoder reveal these $10,000+ options?
            </h3>
          </div>

          <p className="text-sm sm:text-sm text-[#505050] leading-relaxed">
            Standard VIN decoders only read basic vehicle attributes—like engine size, model year, and assembly plant. They <strong className="text-[#282828] font-bold">cannot see factory option packages</strong> selected when the car was custom-ordered.
          </p>

          <p className="text-sm sm:text-sm text-[#505050] leading-relaxed">
            <strong className="text-[#282828] font-bold">The seller of a loaded car knows it has these features. The buyer often does not.</strong> Without an official Cadillac window sticker lookup by VIN, you cannot see the full story. Only the original Monroney sticker lists every single installed package, RPO code, and original price tag.
          </p>

          {/* Action Button */}
          <div className="pt-4 border-t border-[#E5E5E7] text-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-[#FA0037] hover:bg-[#C8002B] text-white text-sm sm:text-sm font-extrabold px-8 py-3.5 rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
            >
              Uncover Your Cadillac's Hidden Options Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
