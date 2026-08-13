import React from 'react';
import { ToolPageMeta } from '../types';
import { LookupCard } from './LookupCard';
import { FeatureGrid } from './FeatureGrid';
import { StepTracker } from './StepTracker';
import { KorayFaqSection } from './KorayFaqSection';
import { TrustBar } from './TrustBar';
import { ArrowLeft, Check, FileText, ShieldCheck, Sparkles } from 'lucide-react';

interface ToolDetailViewProps {
  tool: ToolPageMeta;
  onBack: () => void;
  onSearchVin: (vin: string) => void;
  onOpenVinHelp: () => void;
}

export const ToolDetailView: React.FC<ToolDetailViewProps> = ({
  tool,
  onBack,
  onSearchVin,
  onOpenVinHelp
}) => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* On-Page Anchor Bar */}
      <div className="bg-[#F7F7F8] border-b border-[#D2D2D2] py-2.5 px-4 sm:px-8 text-sm font-semibold text-[#787878] sticky top-16 z-30">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="text-sm font-bold text-[#282828] hover:text-[#FA0037] flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Home
          </button>
          <div className="flex items-center gap-6">
            <a href="#overview" className="hover:text-[#282828]">Overview</a>
            <a href="#features" className="hover:text-[#282828]">What It Reveals</a>
            <a href="#steps" className="hover:text-[#282828]">How It Works</a>
            <a href="#faq" className="hover:text-[#282828]">FAQ</a>
          </div>
        </div>
      </div>

      {/* Hero with Sticky Right Rail Layout */}
      <section id="overview" className="py-12 px-4 sm:px-8 bg-gradient-to-b from-[#FAFAFA] to-white border-b border-[#D2D2D2]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#FA0037]/10 text-[#A00021] text-sm font-extrabold uppercase rounded-full border border-[#FA0037]/20">
              <span className="w-2 h-2 rounded-full bg-[#FA0037]"></span>
              {tool.badge}
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-[#282828] tracking-tight leading-tight">
              {tool.title}
            </h1>

            <p className="text-sm sm:text-base text-[#787878] leading-relaxed">
              {tool.subtitle} Access direct General Motors factory archives covering classic and modern Cadillac vehicles from 1953 through 2026.
            </p>

            <div className="bg-[#F7F7F8] border border-[#D2D2D2] rounded-2xl p-5 space-y-2.5 text-sm text-[#282828]">
              <div className="font-extrabold text-[#282828] uppercase text-[14px] tracking-wider text-[#A00021]">
                Why Use This Tool?
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2C28E8] shrink-0" />
                  <span>Verified GM Invoice Archives</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2C28E8] shrink-0" />
                  <span>Instant Printable PDF Format</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2C28E8] shrink-0" />
                  <span>100% Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2C28E8] shrink-0" />
                  <span>Covers 1953 – 2026 Models</span>
                </div>
              </div>
            </div>

            <TrustBar />
          </div>

          {/* Right Column: Sticky Rail Lookup Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <LookupCard
              ctaText={tool.ctaText}
              badge={tool.badge}
              onSearch={onSearchVin}
              onOpenVinHelp={onOpenVinHelp}
            />
          </div>

        </div>
      </section>

      {/* Feature Grid */}
      <div id="features">
        <FeatureGrid 
          features={tool.features}
          title={`What Your ${tool.title} Reveals`}
        />
      </div>

      {/* Step Tracker */}
      <div id="steps">
        <StepTracker 
          steps={tool.steps}
          title={`How to Get Your Cadillac ${tool.title}`}
        />
      </div>

      {/* Koray Q&A FAQ Section */}
      <div id="faq">
        <KorayFaqSection 
          faqs={tool.korayFaqs}
          title={`${tool.title} FAQ`}
        />
      </div>

    </div>
  );
};
