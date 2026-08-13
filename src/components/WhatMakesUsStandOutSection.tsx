import React, { useState } from 'react';
import { 
  ArrowRight 
} from 'lucide-react';

interface FeatureCard {
  id: string;
  title: string;
  tagline: string;
  description: string;
  accentColor: string;
}

export const WhatMakesUsStandOutSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const features: FeatureCard[] = [
    {
      id: 'accuracy',
      title: '100% Accurate Cadillac Data',
      tagline: 'Direct GM Factory Pipeline',
      description: 'We pull information directly from official factory databases. Your sticker will show the exact trim level, options packages, and individual specs that rolled off the assembly line for your specific VIN.',
      accentColor: '#FA0037'
    },
    {
      id: 'models',
      title: 'Covers All Cadillac Models',
      tagline: 'Classic Fleet to EV Era',
      description: 'Whether you drive a classic Eldorado, a modern Escalade, a V-Series Blackwing, or the latest Lyriq electric SUV, our database supports a massive range of model years and trim configurations.',
      accentColor: '#2C28E8'
    },
    {
      id: 'plate-search',
      title: 'Search by License Plate or VIN',
      tagline: 'No VIN? No Problem',
      description: 'If you don’t have your 17-digit VIN handy, search using your license plate number and registration state. Our system automatically decodes the plate to generate your exact sticker.',
      accentColor: '#0284C7'
    },
    {
      id: 'speed',
      title: 'Instant Fast Results',
      tagline: 'Zero Waiting Time',
      description: 'No waiting around for days or dealing with dealership delays. Enter your VIN or plate, and our automated engine processes the request instantly so you can download your PDF in seconds.',
      accentColor: '#D97706'
    },
    {
      id: 'price',
      title: 'Affordable Price',
      tagline: 'Transparent & Low Cost',
      description: 'Dealerships and data collectors often charge excessive fees for vehicle records. We offer budget-friendly pricing so you get official Monroney details without breaking the bank.',
      accentColor: '#16A34A'
    },
    {
      id: 'layout',
      title: 'Clear High-Res Layout',
      tagline: 'Print-Ready Monroney OEM Format',
      description: 'Our stickers are formatted with crisp typography and clean hierarchy. Base MSRP, option package breakdowns, fuel ratings, and specs are organized for easy reading.',
      accentColor: '#7C3AED'
    }
  ];

  return (
    <section className="py-16 bg-white text-[#282828] border-t border-[#E5E5E7]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#282828] tracking-tight leading-tight">
            What Makes Our Cadillac Window Stickers Stand Out?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#686868] font-normal leading-relaxed">
            When you look up a Cadillac window sticker with us, you aren’t just getting a generic printout. You receive a high-quality, factory-accurate replica of the original Monroney sticker.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => {
            const isHovered = hoveredId === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`p-6 rounded-2xl border transition-all duration-300 bg-[#FAFAFA] hover:bg-white flex flex-col justify-between ${
                  isHovered 
                    ? 'border-[#FA0037] shadow-lg -translate-y-1' 
                    : 'border-[#E5E5E7] hover:border-[#D2D2D2]'
                }`}
              >
                <div className="space-y-4">
                  {/* Title */}
                  <div>
                    <h3 className="text-base font-extrabold text-[#282828] flex items-center gap-2">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-sm text-[#686868] leading-relaxed">
                    {item.description}
                  </p>
                </div>


              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.cadillacwindowsticker.com/sticker/vin/1GYS4DEF2ER221260-BBE5BBE5-1D1D-A995-16A4-0382A3F6A785"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#FA0037] hover:bg-[#C8002B] text-white text-sm sm:text-sm font-extrabold px-8 py-4 rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center justify-center gap-2.5"
          >
            View Sample Cadillac Window Sticker
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
