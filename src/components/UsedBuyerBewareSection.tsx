import React from 'react';
import { AlertTriangle, AlertCircle, ShieldAlert, DollarSign, Wrench, FileSearch, ShieldCheck, Tag, Sparkles } from 'lucide-react';

interface ProblemItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  risk: string;
  solution: string;
}

export const UsedBuyerBewareSection: React.FC = () => {
  const problems: ProblemItem[] = [
    {
      id: 'overpaying-base',
      icon: <DollarSign className="w-5 h-5 text-[#D97706]" />,
      title: 'Overpaying for a Base Model',
      risk: 'Two Cadillac XT5s can look identical on the outside, but one carries a $6,000 Premium Luxury trim while the other is a standard base model.',
      solution: 'Instantly verifies true factory trim level and eliminates base-model markup.'
    },
    {
      id: 'aftermarket-traps',
      icon: <Wrench className="w-5 h-5 text-[#D97706]" />,
      title: 'Aftermarket Upgrades Passed as Factory',
      risk: 'Dealers often mark up vehicles with non-genuine aftermarket accessories, pricing them like high-end OEM factory options.',
      solution: 'Lists exact factory-installed line items vs. dealer-added accessories.'
    },
    {
      id: 'unknown-msrp',
      icon: <Tag className="w-5 h-5 text-[#D97706]" />,
      title: 'Lacking Original MSRP Leverage',
      risk: 'Without the original window sticker price, you cannot accurately negotiate fair resale value or assess true depreciation.',
      solution: 'Provides exact original base price, itemized option costs, and total MSRP.'
    },
    {
      id: 'warranty-confusion',
      icon: <ShieldAlert className="w-5 h-5 text-[#D97706]" />,
      title: 'Missing Warranty Start Dates',
      risk: 'Many GM warranties are transferable, but calculating remaining coverage requires knowing the exact factory in-service date.',
      solution: 'Establishes official factory delivery benchmarks to verify warranty status.'
    },
    {
      id: 'trim-uncertainty',
      icon: <AlertCircle className="w-5 h-5 text-[#D97706]" />,
      title: 'Trim Tier Misrepresentation',
      risk: 'Cadillac offers distinct tiers (Luxury, Sport, Premium Luxury, Platinum, V-Series) with vastly different resale values.',
      solution: 'Decodes exact trim codes directly from General Motors manufacturing logs.'
    },
    {
      id: 'hidden-packages',
      icon: <FileSearch className="w-5 h-5 text-[#D97706]" />,
      title: 'Unidentified Premium Packages',
      risk: 'Expensive options like Super Cruise, AKG 36-Speaker audio, or Magnetic Ride Control are easy to miss in basic online listings.',
      solution: 'Uncovers every hidden factory package, technology tier, and wheel spec.'
    }
  ];

  return (
    <section className="py-16 bg-white text-[#282828]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#282828] tracking-tight leading-tight">
            Used Cadillac Buyers Beware: Common Problems Revealed
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#686868] font-normal leading-relaxed">
            Buying a pre-owned Cadillac should be exciting — but without official factory documentation, simple oversights can cost you thousands.
          </p>
        </div>

        {/* 6 Grid Cards with Distinct Modern Aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => (
            <div 
              key={item.id}
              className="bg-[#FAFAFA] border border-[#E5E5E7] hover:border-[#D2D2D2] p-6 rounded-2xl transition-all duration-200 hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-[#FEF3C7] rounded-xl shrink-0 group-hover:bg-[#FDE68A] transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#282828] leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Risk Description */}
                <p className="text-sm sm:text-sm text-[#505050] leading-relaxed mb-6">
                  {item.risk}
                </p>
              </div>

              {/* Solution Footer Pill */}
              <div className="pt-4 border-t border-[#E5E5E7] flex items-start gap-2 text-sm text-[#15803D] font-semibold bg-white/60 -mx-6 -mb-6 p-4 rounded-b-2xl">
                <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                <span><strong className="text-[#16A34A]">Sticker Solution:</strong> {item.solution}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-12 bg-gradient-to-r from-[#282828] to-[#121212] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest text-[#FA0037]">
              Instant Risk Prevention
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              Avoid Costly Mistakes Before You Sign
            </h3>
            <p className="text-sm sm:text-sm text-[#A0A0A0]">
              Get the official factory window sticker by VIN in seconds to verify true options, packages, and original MSRP.
            </p>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="shrink-0 bg-[#FA0037] hover:bg-[#C8002B] text-white text-sm sm:text-sm font-extrabold px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            Lookup Window Sticker Now
          </button>
        </div>

      </div>
    </section>
  );
};
