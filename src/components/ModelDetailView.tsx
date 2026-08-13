import React from 'react';
import { CadillacModelInfo } from '../types';
import { generateCadillacStickerFromVin } from '../data/sampleVinDatabase';
import { MonroneySticker } from './MonroneySticker';
import { LookupCard } from './LookupCard';
import { StepTracker } from './StepTracker';
import { FeatureGrid } from './FeatureGrid';
import { KorayFaqSection } from './KorayFaqSection';
import { ArrowLeft, Car, ShieldCheck, Palette, DollarSign, Award, ChevronRight } from 'lucide-react';

interface ModelDetailViewProps {
  model: CadillacModelInfo;
  onBack: () => void;
  onSearchVin: (vin: string) => void;
  onOpenVinHelp: () => void;
  onOpenCheckout: (vin: string) => void;
}

export const ModelDetailView: React.FC<ModelDetailViewProps> = ({
  model,
  onBack,
  onSearchVin,
  onOpenVinHelp,
  onOpenCheckout
}) => {
  const sampleSticker = generateCadillacStickerFromVin(model.sampleVin);

  const modelFaqs = [
    {
      question: `How do I get an original window sticker for my Cadillac ${model.name}?`,
      leadAnswer: `You can recreate an authentic Cadillac ${model.name} window sticker by entering your 17-digit VIN into our lookup tool. It decodes factory archives to output original MSRP, option packages, paint codes, and standard equipment.`,
      fullAnswer: `Whether you own a modern ${model.name} or a classic edition, our service extracts line-by-line build data directly from General Motors invoice archives. The resulting high-resolution Monroney label PDF is formatted for vehicle resale, insurance appraisal, or display.`
    },
    {
      question: `What trim levels and options are available on the Cadillac ${model.name}?`,
      leadAnswer: `The Cadillac ${model.name} features popular trim levels including ${model.popularTrims.join(', ')} with base MSRP ranging from ${model.baseMsrpRange}.`,
      fullAnswer: `Key options verified on the ${model.name} include ${model.popularOptions.join(', ')}, as well as factory exterior paint codes such as ${model.popularPaintCodes.map(p => p.name).join(', ')}.`
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Top Breadcrumb & Back Bar */}
      <div className="bg-[#F7F7F8] border-b border-[#D2D2D2] py-3 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="text-sm font-bold text-[#282828] hover:text-[#FA0037] flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Models Catalog
          </button>
          <div className="text-sm text-[#787878] font-medium hidden sm:block">
            Cadillac Models / <span className="text-[#282828] font-bold">{model.name} Window Sticker</span>
          </div>
        </div>
      </div>

      {/* Model Hero Section */}
      <section className="py-12 px-4 sm:px-8 bg-gradient-to-b from-[#FAFAFA] to-white border-b border-[#D2D2D2]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#282828] text-[#F3C846] text-sm font-extrabold uppercase rounded-full">
              CADILLAC {model.name.toUpperCase()} • {model.yearsActive}
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-[#282828] tracking-tight leading-tight">
              Cadillac {model.name} Window Sticker by VIN
            </h1>

            <p className="text-sm sm:text-base text-[#787878] leading-relaxed">
              {model.description} {model.tagline}. Recreate the original factory Monroney label for any {model.name} vehicle instantly.
            </p>

            {/* Spec Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-white border border-[#D2D2D2] p-3 rounded-xl">
                <div className="text-[14px] text-[#787878] font-bold uppercase">Original MSRP Range</div>
                <div className="text-sm font-black text-[#282828]">{model.baseMsrpRange}</div>
              </div>
              <div className="bg-white border border-[#D2D2D2] p-3 rounded-xl">
                <div className="text-[14px] text-[#787878] font-bold uppercase">Popular Trims</div>
                <div className="text-sm font-bold text-[#A00021] truncate">{model.popularTrims.join(', ')}</div>
              </div>
            </div>

            {/* Paint Codes */}
            <div className="pt-2">
              <span className="text-sm font-bold text-[#282828] uppercase tracking-wider block mb-1.5">
                Popular Factory Paint Codes:
              </span>
              <div className="flex flex-wrap gap-2">
                {model.popularPaintCodes.map((p, idx) => (
                  <span key={idx} className="text-sm bg-[#F7F7F8] border border-[#D2D2D2] px-2.5 py-1 rounded-md text-[#282828] font-medium">
                    {p.name} ({p.code})
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Hero: Lookup Card */}
          <div className="flex justify-center">
            <LookupCard
              ctaText={`Get ${model.name} Window Sticker`}
              badge={`CADILLAC ${model.name.toUpperCase()} VIN DECODER`}
              onSearch={onSearchVin}
              onOpenVinHelp={onOpenVinHelp}
            />
          </div>

        </div>
      </section>

      {/* Model Interactive Monroney Sticker Preview */}
      <section className="py-12 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[14px] font-extrabold tracking-widest text-[#A00021] uppercase block mb-1">
              SAMPLE RECREATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#282828]">
              Sample Cadillac {model.name} Monroney Window Sticker
            </h2>
            <p className="text-sm text-[#787878] mt-1">
              Below is an authentic sample sticker generated for a {sampleSticker.year} {model.name} {sampleSticker.trim}
            </p>
          </div>

          <MonroneySticker
            data={sampleSticker}
            isUnlocked={false}
            onUnlock={() => onOpenCheckout(sampleSticker.vin)}
          />
        </div>
      </section>

      {/* Feature Grid & Step Tracker */}
      <FeatureGrid 
        features={[
          { iconName: 'FileText', title: 'Original MSRP Breakdown', description: `Exact factory base price and optional packages for Cadillac ${model.name}.` },
          { iconName: 'ListFilter', title: 'Package Itemization', description: `Verifies installed packages like ${model.popularOptions[0] || 'Super Cruise'} and trim options.` },
          { iconName: 'Palette', title: 'GM Paint & Interior Code', description: 'Confirms exact factory color formulas and leather interior seating codes.' },
          { iconName: 'ShieldCheck', title: 'Official Invoice Records', description: 'Cross-referenced directly with General Motors factory vehicle invoice archives.' }
        ]}
        title={`What a Cadillac ${model.name} Window Sticker Reveals`}
      />

      <StepTracker steps={[
        { number: 1, title: `Enter Cadillac ${model.name} VIN`, description: 'Provide your 17-digit VIN or plate number.' },
        { number: 2, title: 'Instant Factory Scan', description: 'Our database queries official GM invoice records.' },
        { number: 3, title: 'Download Monroney PDF', description: 'Access your high-resolution printable window sticker PDF.' }
      ]} />

      <KorayFaqSection 
        faqs={modelFaqs}
        title={`Cadillac ${model.name} Window Sticker FAQ`}
      />

    </div>
  );
};
