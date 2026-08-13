import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';

export const GetYourStickerTodaySection: React.FC = () => {
  const handleScrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Focus on the top input if available
    setTimeout(() => {
      const topInput = document.querySelector('input[type="text"]') as HTMLInputElement;
      if (topInput) {
        topInput.focus();
      }
    }, 500);
  };

  return (
    <section className="py-16 bg-[#FAFAFA] text-[#282828] border-t border-[#E5E5E7]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card Banner */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1A1A1E] via-[#24242A] to-[#121215] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-[#33333C]">
          
          {/* Subtle Background Glow Accent */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FA0037]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#2C28E8]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">

            {/* Main Title */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Get Your Cadillac's Original Window Sticker Today
            </h2>

            {/* Narrative Subtitle */}
            <p className="text-sm sm:text-lg text-[#D1D1D6] font-normal leading-relaxed max-w-2xl mx-auto">
              Do not risk making a blind purchase or losing thousands on a sale. Reveal the true identity, factory option packages, and exact original MSRP of your luxury vehicle right now.
            </p>

            {/* Action Button */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={handleScrollToHero}
                className="bg-[#FA0037] hover:bg-[#C8002B] text-white text-sm sm:text-base font-extrabold px-10 py-4 rounded-xl shadow-xl transition-all cursor-pointer inline-flex items-center justify-center gap-3 group"
              >
                Get my Window Sticker
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Footnote reassurance */}
            <p className="text-[14px] text-[#A0A0A0] font-medium flex items-center justify-center gap-1.5 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>Official Monroney Format • Instant High-Res PDF • No Dealership Delays</span>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
