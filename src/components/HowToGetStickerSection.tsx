import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const HowToGetStickerSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section className="py-16 bg-white text-[#282828] border-t border-[#E5E5E7]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#282828] tracking-tight leading-tight">
            How to Get Your Cadillac Window Sticker by VIN?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#686868] font-normal leading-relaxed">
            If you lost your original GM Monroney label or need to verify factory equipment on a pre-owned Cadillac, follow these three simple steps to generate an official PDF window sticker.
          </p>
        </div>

        {/* Timeline Flow Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          
          {/* STEP 1 */}
          <div 
            onClick={() => setActiveStep(1)}
            className={`relative z-10 bg-[#FAFAFA] border rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              activeStep === 1 
                ? 'border-[#FA0037] shadow-lg ring-2 ring-[#FA0037]/10 bg-white' 
                : 'border-[#E5E5E7] hover:border-[#D2D2D2] hover:bg-white'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FA0037]/10 text-[#FA0037] flex items-center justify-center font-black text-lg">
                  01
                </div>
                <span className="px-3 py-1 rounded-full text-[14px] font-extrabold uppercase tracking-wider bg-[#F0F0F2] text-[#505050]">
                  Phase 1: Input
                </span>
              </div>

              <h3 className="text-base font-extrabold text-[#282828] mb-2">
                Step 1: Enter Cadillac VIN
              </h3>

              <p className="text-sm sm:text-sm text-[#505050] leading-relaxed">
                Type your 17-character VIN into our lookup bar. You can also search using license plate state or year, make, and model.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div 
            onClick={() => setActiveStep(2)}
            className={`relative z-10 bg-[#FAFAFA] border rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              activeStep === 2 
                ? 'border-[#2C28E8] shadow-lg ring-2 ring-[#2C28E8]/10 bg-white' 
                : 'border-[#E5E5E7] hover:border-[#D2D2D2] hover:bg-white'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#2C28E8]/10 text-[#2C28E8] flex items-center justify-center font-black text-lg">
                  02
                </div>
                <span className="px-3 py-1 rounded-full text-[14px] font-extrabold uppercase tracking-wider bg-[#F0F0F2] text-[#505050]">
                  Phase 2: Query
                </span>
              </div>

              <h3 className="text-base font-extrabold text-[#282828] mb-2">
                Step 2: GM Database Query
              </h3>

              <p className="text-sm sm:text-sm text-[#505050] leading-relaxed">
                Our system instantly queries official General Motors factory archives, decoding trim tier, original options, exterior paint codes, and MSRP.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div 
            onClick={() => setActiveStep(3)}
            className={`relative z-10 bg-[#FAFAFA] border rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              activeStep === 3 
                ? 'border-[#16A34A] shadow-lg ring-2 ring-[#16A34A]/10 bg-white' 
                : 'border-[#E5E5E7] hover:border-[#D2D2D2] hover:bg-white'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center font-black text-lg">
                  03
                </div>
                <span className="px-3 py-1 rounded-full text-[14px] font-extrabold uppercase tracking-wider bg-[#F0F0F2] text-[#505050]">
                  Phase 3: Download
                </span>
              </div>

              <h3 className="text-base font-extrabold text-[#282828] mb-2">
                Step 3: View &amp; Download PDF
              </h3>

              <p className="text-sm sm:text-sm text-[#505050] leading-relaxed">
                Instantly view and download your complete, high-resolution Cadillac Monroney window sticker PDF with all original MSRP pricing and specs.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#FA0037] hover:bg-[#C8002B] text-white text-sm sm:text-base font-extrabold px-8 py-4 rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center gap-2.5"
          >
            Lookup Cadillac Window Sticker by VIN Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
