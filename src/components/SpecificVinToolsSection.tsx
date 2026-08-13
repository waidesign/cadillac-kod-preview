import React from 'react';
import { 
  FileSpreadsheet, 
  Palette, 
  ShieldCheck, 
  DollarSign, 
  Sliders, 
  Cpu, 
  ArrowRight, 
  Wrench, 
  Sparkles 
} from 'lucide-react';

interface VinTool {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  lightBg: string;
  borderColor: string;
}

export const SpecificVinToolsSection: React.FC = () => {
  const tools: VinTool[] = [
    {
      id: 'build-sheet',
      title: 'Check Build Sheet by VIN',
      badge: 'RPO Specs',
      description: 'Decode full factory RPO build codes, assembly plant details, and complete factory equipment specifications.',
      icon: <FileSpreadsheet className="w-5 h-5 text-[#FA0037]" />,
      accentColor: '#FA0037',
      lightBg: '#FFF1F2',
      borderColor: '#FECDD3'
    },
    {
      id: 'paint-code',
      title: 'Check Paint Code by VIN',
      badge: 'OEM Color',
      description: 'Retrieve original GM factory paint codes, exact shade names, and custom exterior trim color finishes.',
      icon: <Palette className="w-5 h-5 text-[#2C28E8]" />,
      accentColor: '#2C28E8',
      lightBg: '#EEF2FF',
      borderColor: '#C7D2FE'
    },
    {
      id: 'warranty',
      title: 'Check Warranty by VIN',
      badge: 'Coverage Limits',
      description: 'Verify original GM bumper-to-bumper, powertrain, and corrosion protection factory warranty durations.',
      icon: <ShieldCheck className="w-5 h-5 text-[#16A34A]" />,
      accentColor: '#16A34A',
      lightBg: '#F0FDF4',
      borderColor: '#BBF7D0'
    },
    {
      id: 'msrp',
      title: 'Check MSRP by VIN',
      badge: 'Original Pricing',
      description: 'Reveal original factory base pricing, destination charges, and itemized Monroney MSRP sticker totals.',
      icon: <DollarSign className="w-5 h-5 text-[#D97706]" />,
      accentColor: '#D97706',
      lightBg: '#FFFBEB',
      borderColor: '#FDE68A'
    },
    {
      id: 'options',
      title: 'Check Options by VIN',
      badge: 'Packages & Tech',
      description: 'Itemize custom factory-installed options like Super Cruise™, AKG audio systems, and performance packages.',
      icon: <Sliders className="w-5 h-5 text-[#7C3AED]" />,
      accentColor: '#7C3AED',
      lightBg: '#F5F3FF',
      borderColor: '#DDD6FE'
    },
    {
      id: 'trim-specs',
      title: 'Check Trim & Engine Specs',
      badge: 'Engine & Drivetrain',
      description: 'Identify exact trim tier (Sport, Luxury, Platinum, Blackwing), engine displacement, and drive configuration.',
      icon: <Cpu className="w-5 h-5 text-[#0284C7]" />,
      accentColor: '#0284C7',
      lightBg: '#F0F9FF',
      borderColor: '#BAE6FD'
    }
  ];

  const handleToolClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-[#FAFAFA] text-[#282828] border-t border-[#E5E5E7]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#282828] tracking-tight leading-tight">
            Try Specific VIN Tool for Your Needs
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#686868] font-normal leading-relaxed">
            Need specific factory documentation for your Cadillac? Access our specialized VIN lookup tools tailored for your exact inspection requirements.
          </p>
        </div>

        {/* 6 Grid Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((t) => (
            <div
              key={t.id}
              onClick={handleToolClick}
              className="bg-white rounded-2xl border border-[#E5E5E7] p-6 shadow-sm hover:shadow-md hover:border-[#FA0037] transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Row: Badge */}
                <div className="flex items-center justify-start">
                  <span 
                    className="text-[14px] font-black uppercase px-2.5 py-1 rounded-full border"
                    style={{ 
                      backgroundColor: t.lightBg, 
                      color: t.accentColor,
                      borderColor: t.borderColor
                    }}
                  >
                    {t.badge}
                  </span>
                </div>

                {/* Tool Title */}
                <h3 className="text-base font-extrabold text-[#282828] group-hover:text-[#FA0037] transition-colors">
                  {t.title}
                </h3>

                {/* Tool Description */}
                <p className="text-sm sm:text-sm text-[#686868] leading-relaxed">
                  {t.description}
                </p>
              </div>

              {/* Action Link Footer */}
              <div className="mt-6 pt-4 border-t border-[#E5E5E7] flex items-center justify-between text-sm font-extrabold text-[#282828] group-hover:text-[#FA0037] transition-colors">
                <span>Run Instant VIN Lookup</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-[#E5E5E7] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-extrabold text-[#282828]">
              All Specialized Tools Included in One Full Window Sticker Report
            </h4>
            <p className="text-sm text-[#686868] mt-0.5">
              Every lookup generates a complete PDF containing build sheets, paint codes, original MSRP, and option package breakdowns.
            </p>
          </div>

          <button
            onClick={handleToolClick}
            className="w-full sm:w-auto bg-[#FA0037] hover:bg-[#C8002B] text-white text-sm sm:text-sm font-extrabold px-6 py-3 rounded-xl shadow-xs transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            Start Free VIN Lookup
          </button>
        </div>

      </div>
    </section>
  );
};
