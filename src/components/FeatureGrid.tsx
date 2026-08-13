import React from 'react';

interface FeatureItem {
  iconName?: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: FeatureItem[];
  title?: string;
  subtitle?: string;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  title = "What Your Cadillac Report Reveals",
  subtitle = "Complete transparency into original factory specifications, options, and MSRP"
}) => {
  return (
    <section className="py-12 bg-[#F7F7F8]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[14px] font-extrabold tracking-widest text-[#A00021] uppercase block mb-1">
            FACTORY DATA BREAKDOWN
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#282828] tracking-tight">
            {title}
          </h2>
          <p className="text-sm text-[#787878] mt-2">
            {subtitle}
          </p>
        </div>

        {/* Feature Cards Grid with Numbered Indexing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 border border-[#D2D2D2] shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 relative overflow-hidden group"
              >
                {/* Gold Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#F3C846] opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="w-8 h-8 rounded-lg bg-[#F7F7F8] border border-[#E5E5E7] flex items-center justify-center text-[#A00021] font-mono text-sm font-bold mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className="text-sm font-extrabold text-[#282828] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[#787878] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
