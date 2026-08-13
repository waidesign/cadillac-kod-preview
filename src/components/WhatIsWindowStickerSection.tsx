import React from 'react';
import { FileCheck, Receipt, Scale, Sparkles, CheckCircle2 } from 'lucide-react';

interface WhatIsWindowStickerSectionProps {
  onOpenLookup?: () => void;
}

export const WhatIsWindowStickerSection: React.FC<WhatIsWindowStickerSectionProps> = ({ onOpenLookup }) => {
  return (
    <section className="py-16 bg-[#FAFAFA] text-[#282828] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Side Narrative & Cards, Right Side Visual Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#282828] leading-tight">
                What Is a Cadillac Window Sticker?
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#505050] leading-relaxed font-normal">
              A <strong className="text-[#282828]">window sticker</strong>, officially recognized as a <strong className="text-[#282828]">Monroney label</strong>, is the federal window document printed by General Motors prior to dealer shipment. It acts as the vehicle’s definitive <span className="text-[#A00021] font-semibold">factory birth certificate</span>.
            </p>

            <p className="text-sm sm:text-base text-[#686868] leading-relaxed">
              Every detail is preserved straight from the assembly plant — including the original window sticker price (MSRP), trim tier, paint &amp; interior color codes, factory-installed options, EPA fuel ratings, and federal safety scores.
            </p>

            {/* Quick Feature Badges */}
            <div className="pt-2 flex flex-wrap gap-2.5 text-sm font-bold text-[#282828]">
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-2 rounded-lg border border-[#E5E5E7] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#FA0037]" />
                Monroney Act Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-2 rounded-lg border border-[#E5E5E7] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#FA0037]" />
                Original Factory Options (RPO)
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-2 rounded-lg border border-[#E5E5E7] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#FA0037]" />
                MSRP &amp; Destination Fees
              </span>
            </div>
          </div>

          {/* Right Column: 3 Structured Visual Cards Stack */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card 1 */}
            <div className="bg-white p-5 rounded-2xl border border-[#E5E5E7] shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="p-3 bg-[#FA0037]/10 text-[#A00021] rounded-xl shrink-0">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#282828] uppercase tracking-wide">Vehicle Birth Certificate</h3>
                <p className="text-sm text-[#686868] mt-1 leading-normal">
                  Confirms official GM factory assembly origin, VIN authenticity, original chassis serials, and production sequence logs.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-5 rounded-2xl border border-[#E5E5E7] shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="p-3 bg-[#2C28E8]/10 text-[#2C28E8] rounded-xl shrink-0">
                <Receipt className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#282828] uppercase tracking-wide">Build Sheet &amp; Option Breakdown</h3>
                <p className="text-sm text-[#686868] mt-1 leading-normal">
                  Itemizes standard equipment, special luxury trim packages (V-Series, Platinum), standalone factory options, and package pricing.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-5 rounded-2xl border border-[#E5E5E7] shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="p-3 bg-[#282828]/10 text-[#282828] rounded-xl shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#282828] uppercase tracking-wide">Federal Safety &amp; Economy</h3>
                <p className="text-sm text-[#686868] mt-1 leading-normal">
                  Lists NHTSA safety star ratings, EPA fuel economy ratings, smog scores, and factory warranty coverage details.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
