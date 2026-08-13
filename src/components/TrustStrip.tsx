import React from 'react';
import { Star, ShieldCheck, Award, CheckCircle } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="py-12 bg-[#FAFAFA]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stat Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-center">
          <div className="bg-white p-6 rounded-2xl border border-[#D2D2D2] shadow-sm">
            <div className="text-3xl sm:text-4xl font-black text-[#282828] font-mono">1,250,000+</div>
            <div className="text-sm font-bold text-[#787878] uppercase tracking-wider mt-1">Stickers Generated</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#D2D2D2] shadow-sm">
            <div className="text-3xl sm:text-4xl font-black text-[#FA0037] font-mono">73+</div>
            <div className="text-sm font-bold text-[#787878] uppercase tracking-wider mt-1">Cadillac Models</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#D2D2D2] shadow-sm">
            <div className="text-3xl sm:text-4xl font-black text-[#282828] font-mono">1953 – 2026</div>
            <div className="text-sm font-bold text-[#787878] uppercase tracking-wider mt-1">Years Covered</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#D2D2D2] shadow-sm">
            <div className="text-3xl sm:text-4xl font-black text-[#2C28E8] font-mono">99.8%</div>
            <div className="text-sm font-bold text-[#787878] uppercase tracking-wider mt-1">Accuracy Score</div>
          </div>
        </div>

        {/* Real Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white p-6 rounded-2xl border border-[#D2D2D2] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-[#F3C846] mb-3">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-sm text-[#282828] leading-relaxed mb-4 italic">
                "Verified that the 2023 Escalade V-Series I was purchasing had the factory Onyx Package and Super Cruise intact. The original MSRP breakdown saved me thousands in negotiation!"
              </p>
            </div>
            <div className="pt-3 border-t border-[#E5E5E7] flex items-center justify-between">
              <div>
                <div className="text-sm font-extrabold text-[#282828]">James R.</div>
                <div className="text-[14px] text-[#787878]">Verified Buyer • 2023 Escalade V-Series</div>
              </div>
              <CheckCircle className="w-4 h-4 text-[#2C28E8]" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#D2D2D2] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-[#F3C846] mb-3">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-sm text-[#282828] leading-relaxed mb-4 italic">
                "As a classic Cadillac collector, finding a period-correct 1976 Eldorado Fleetwood window sticker replica for car show displays was incredible. Spot-on original factory font and pricing."
              </p>
            </div>
            <div className="pt-3 border-t border-[#E5E5E7] flex items-center justify-between">
              <div>
                <div className="text-sm font-extrabold text-[#282828]">Marcus T.</div>
                <div className="text-[14px] text-[#787878]">Cadillac Club Collector • 1976 Eldorado</div>
              </div>
              <CheckCircle className="w-4 h-4 text-[#2C28E8]" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#D2D2D2] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-[#F3C846] mb-3">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-sm text-[#282828] leading-relaxed mb-4 italic">
                "Our dealership uses the Unlimited Plan to print high-resolution window stickers for every pre-owned CT5 and Lyriq on our lot. Customers appreciate the complete transparency."
              </p>
            </div>
            <div className="pt-3 border-t border-[#E5E5E7] flex items-center justify-between">
              <div>
                <div className="text-sm font-extrabold text-[#282828]">Sarah B.</div>
                <div className="text-[14px] text-[#787878]">Pre-Owned Inventory Mgr • GM Dealership</div>
              </div>
              <CheckCircle className="w-4 h-4 text-[#2C28E8]" />
            </div>
          </div>

        </div>

        {/* E-E-A-T Author Credentials Box */}
        <div className="bg-white rounded-2xl border border-[#D2D2D2] p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" 
            alt="Gracia Automotive Historian" 
            className="w-20 h-20 rounded-full object-cover border-2 border-[#282828] shrink-0"
          />
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-base font-black text-[#282828]">Gracia</span>
              <span className="text-[14px] bg-[#282828] text-[#F3C846] px-2 py-0.5 rounded font-bold uppercase">
                AUTOMOTIVE HISTORIAN & VIN SPECIALIST
              </span>
            </div>
            <p className="text-sm text-[#787878] leading-relaxed max-w-3xl">
              Gracia has audited and decoded over 40,000 GM vehicle invoice archives, Monroney labels, and Regular Production Option (RPO) build sheets. Our database undergoes continuous verification against official National Highway Traffic Safety Administration (NHTSA) and GM Heritage center records.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
