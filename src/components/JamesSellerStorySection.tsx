import React, { useState } from 'react';
import { 
  UserCheck, 
  Sparkles, 
  CheckCircle2, 
  FileText, 
  DollarSign, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Quote, 
  Car, 
  Clock, 
  Award,
  BadgeCheck
} from 'lucide-react';

export const JamesSellerStorySection: React.FC = () => {
  const storySteps = [
    {
      step: '01',
      title: 'James Wanted to Sell but Needed to Stand Out',
      subtitle: 'The Challenge',
      description: 'James owned a 2019 Cadillac XT4 and was ready to move on. Like most private sellers, he wanted a fair price and a smooth process. The problem was that buyers always had questions about options, and he needed a way to answer them with 100% confidence.',
      icon: <Car className="w-5 h-5 text-[#FA0037]" />,
      accentColor: '#FA0037',
      lightBg: '#FFF1F2'
    },
    {
      step: '02',
      title: 'He Found the Original Window Sticker Online',
      subtitle: 'The Discovery',
      description: 'James visited our lookup tool and retrieved his vehicle’s original Monroney sticker within minutes. It detailed every factory option, including Cold Weather Package, Technology Package, and dual panel sunroof—standalone features that added genuine resale value.',
      icon: <FileText className="w-5 h-5 text-[#2C28E8]" />,
      accentColor: '#2C28E8',
      lightBg: '#EEF2FF'
    },
    {
      step: '03',
      title: 'The Sticker Did the Talking for Him',
      subtitle: 'The Strategy',
      description: 'Sharing the official digital PDF with buyers made everything crystal clear. All options, trim specs, and original MSRP were documented by General Motors factory data, so James never had to haggle or defend his asking price. The sticker spoke for itself.',
      icon: <Award className="w-5 h-5 text-[#0284C7]" />,
      accentColor: '#0284C7',
      lightBg: '#F0F9FF'
    },
    {
      step: '04',
      title: 'Trust Was Built & Deal Closed Fast',
      subtitle: 'The Result',
      description: 'With complete buyer confidence in the purchase, there was no lowballing or drawn-out negotiation. James got his full asking price, and the buyer walked away with total peace of mind and verified documentation.',
      icon: <TrendingUp className="w-5 h-5 text-[#16A34A]" />,
      accentColor: '#16A34A',
      lightBg: '#F0FDF4'
    }
  ];

  return (
    <section className="py-16 bg-white text-[#282828] border-t border-[#E5E5E7]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#282828] tracking-tight leading-tight">
            Real Seller Story: How James Sold His 2019 Cadillac XT4 With Zero Stress
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#686868] font-normal leading-relaxed">
            See how a single official Monroney window sticker turned buyer hesitation into a full-asking-price cash sale in record time.
          </p>
        </div>

        {/* Story Card & Vehicle Profile Banner */}
        <div className="bg-[#FAFAFA] rounded-3xl border border-[#E5E5E7] p-6 sm:p-10 shadow-sm mb-12">
          
          {/* Spotlight Vehicle Spec Bar */}
          <div className="bg-white rounded-2xl border border-[#E5E5E7] p-5 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-extrabold text-[#282828]">2019 Cadillac XT4 Sport AWD</h3>
                  <span className="inline-flex items-center gap-1 text-[14px] font-black uppercase tracking-wider bg-[#16A34A]/10 text-[#15803D] px-2.5 py-0.5 rounded-full border border-[#BBF7D0]">
                    <BadgeCheck className="w-3 h-3" />
                    Sold At Full Price
                  </span>
                </div>
                <p className="text-sm text-[#686868] font-medium mt-0.5">
                  Shadow Metallic • 2.0L Turbo I4 • Original Monroney MSRP: $44,285
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-[#505050] border-t md:border-t-0 md:border-l border-[#E5E5E7] pt-3 md:pt-0 md:pl-6 w-full md:w-auto justify-between md:justify-end">
              <div>
                <span className="text-[14px] text-[#888888] font-bold block uppercase">Time to Sell</span>
                <span className="font-extrabold text-[#282828] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#2C28E8]" />
                  Under 48 Hours
                </span>
              </div>
              <div>
                <span className="text-[14px] text-[#888888] font-bold block uppercase">Negotiation</span>
                <span className="font-extrabold text-[#16A34A] flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5" />
                  $0 Price Cut
                </span>
              </div>
            </div>
          </div>

          {/* 4-Phase Story Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {storySteps.map((s, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-[#E5E5E7] p-6 shadow-xs hover:border-[#D2D2D2] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span 
                        className="text-[14px] font-black uppercase tracking-wider"
                        style={{ color: s.accentColor }}
                      >
                        {s.subtitle}
                      </span>
                    </div>
                    <span className="text-xl font-black text-[#E5E5E7]">
                      {s.step}
                    </span>
                  </div>

                  <h4 className="text-base font-extrabold text-[#282828] leading-snug">
                    {s.title}
                  </h4>

                  <p className="text-sm sm:text-sm text-[#686868] leading-relaxed">
                    {s.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* Quote Card */}
          <div className="mt-8 bg-gradient-to-r from-[#282828] to-[#1A1A1A] text-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <Quote className="w-8 h-8 text-[#FA0037] shrink-0 mt-1" />
              <div>
                <p className="text-sm sm:text-base font-medium text-[#E5E5E7] italic leading-relaxed">
                  "Having the original window sticker changed everything. The buyer saw the exact factory options, stopped asking if the price was negotiable, and wrote a check on the spot."
                </p>
                <span className="text-sm font-extrabold text-[#FA0037] uppercase tracking-wider block mt-2">
                  — James M., 2019 Cadillac XT4 Seller
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Takeaway Banner */}
        <div className="bg-white rounded-2xl border-2 border-[#16A34A] p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#F0FDF4] rounded-2xl text-[#16A34A] shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[14px] font-extrabold uppercase tracking-wider text-[#16A34A] block">
                The Takeaway
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-[#282828]">
                One simple document made the entire sale easier.
              </h3>
              <p className="text-sm sm:text-sm text-[#686868] mt-1">
                If you are selling a used Cadillac, retrieving your original window sticker is one of the smartest first steps you can take.
              </p>
            </div>
          </div>

          <a
            href="https://app.cadillacwindowsticker.com/sticker/vin/1GYFZDR43KF204587-71497149-CECE-EBA5-19AE-8467D3C642D2"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#FA0037] hover:bg-[#C8002B] text-white text-sm sm:text-sm font-extrabold px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 shrink-0"
          >
            View a 2019 Cadillac XT4 Window Sticker
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
