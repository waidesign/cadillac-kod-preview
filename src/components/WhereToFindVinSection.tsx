import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

import vinLocatorImg from '../assets/images/cadillac-vin-locator.webp';
import titleImg from '../assets/images/title.webp';
import insuranceImg from '../assets/images/insurance-paper.webp';
import dealershipImg from '../assets/images/dealership-paper.webp';

interface VinLocationItem {
  id: string;
  type: 'physical' | 'paperwork';
  title: string;
  subtitle: string;
  description: string;
  tip: string;
  hotspot?: { x: number; y: number }; // percentage positions on vehicle image
  image?: string;
}

export const WhereToFindVinSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'physical' | 'paperwork'>('physical');
  const [selectedId, setSelectedId] = useState<string>('windshield');

  const locations: VinLocationItem[] = [
    // Physical Locations
    {
      id: 'windshield',
      type: 'physical',
      title: "Driver's Side Dashboard",
      subtitle: 'Lower Windshield Corner',
      description: 'Look through the lower driver-side corner of the front windshield from outside the vehicle. The 17-character VIN is etched into a metal plate.',
      tip: 'Easiest spot to read without opening doors or hood.',
      hotspot: { x: 32, y: 50 }
    },
    {
      id: 'door-pillar',
      type: 'physical',
      title: "Driver's Door B-Pillar",
      subtitle: 'Safety Certification Label',
      description: "Open the driver's door and inspect the door jamb or post. A black-and-white GM safety compliance sticker displays the full VIN barcode.",
      tip: 'Includes exact GM production month, year, and paint code (WA-code).',
      hotspot: { x: 50, y: 55 }
    },
    {
      id: 'engine-bay',
      type: 'physical',
      title: 'Engine Bay Firewall',
      subtitle: 'Metal Chassis Stamp',
      description: 'Pop the hood and look near the firewall bulkhead or front strut tower. GM stamps the VIN directly into the steel chassis metal.',
      tip: 'Useful for verifying chassis authenticity if windshield tag is obscured.',
      hotspot: { x: 25, y: 58 }
    },

    // Paperwork Locations
    {
      id: 'dmv-title',
      type: 'paperwork',
      title: 'State DMV Certificate of Title',
      subtitle: 'Official Title & Registration',
      description: "Your official state vehicle title document explicitly lists the 17-digit VIN under 'Vehicle Identification Number' at the top section.",
      tip: 'Cross-check title VIN against physical dashboard plate before purchase.',
      image: titleImg
    },
    {
      id: 'insurance-card',
      type: 'paperwork',
      title: 'Auto Insurance Documents',
      subtitle: 'Policy Statement & ID Cards',
      description: 'Active insurance policy declarations, monthly billing statements, and digital/printed proof of insurance cards show the registered VIN.',
      tip: 'Quick digital access via your insurance mobile app.',
      image: insuranceImg
    },
    {
      id: 'service-invoice',
      type: 'paperwork',
      title: 'Cadillac Dealership Receipts',
      subtitle: 'Service & Maintenance Records',
      description: 'Official GM dealership repair orders, multi-point inspection sheets, and routine service invoices print the VIN on every header.',
      tip: 'Confirms vehicle service history tied directly to the chassis.',
      image: dealershipImg
    }
  ];

  const filteredLocations = locations.filter(loc => loc.type === activeCategory);
  const selectedItem = locations.find(loc => loc.id === selectedId) || locations[0];

  const handleSelectLocation = (loc: VinLocationItem) => {
    setSelectedId(loc.id);
  };

  const handleSwitchCategory = (cat: 'physical' | 'paperwork') => {
    setActiveCategory(cat);
    const firstInCat = locations.find(loc => loc.type === cat);
    if (firstInCat) {
      setSelectedId(firstInCat.id);
    }
  };

  return (
    <section className="py-16 bg-[#FAFAFA] text-[#282828] border-t border-[#E5E5E7]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#282828] tracking-tight leading-tight">
            Where to Find Your Cadillac VIN?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#686868] font-normal leading-relaxed">
            General Motors places the unique 17-character Vehicle Identification Number across key physical chassis locations and official ownership paperwork.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="mt-8 inline-flex p-1.5 bg-[#EAEAEA] rounded-2xl border border-[#DCDCDC]">
            <button
              onClick={() => handleSwitchCategory('physical')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeCategory === 'physical'
                  ? 'bg-white text-[#282828] shadow-sm'
                  : 'text-[#686868] hover:text-[#282828]'
              }`}
            >
              Physical Vehicle Spots
            </button>
            <button
              onClick={() => handleSwitchCategory('paperwork')}
              className={`px-5 py-2.5 rounded-xl text-sm sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeCategory === 'paperwork'
                  ? 'bg-white text-[#282828] shadow-sm'
                  : 'text-[#686868] hover:text-[#282828]'
              }`}
            >
              Official Paperwork &amp; Records
            </button>
          </div>
        </div>

        {/* Interactive Main Grid Layout - Equal 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Side: Selectable Location List */}
          <div className="space-y-3">
            <h3 className="text-sm font-black uppercase tracking-wider text-[#A00021] mb-2">
              {activeCategory === 'physical' ? 'On-Vehicle Locations' : 'Document Records'}
            </h3>

            {filteredLocations.map((loc) => {
              const isSelected = loc.id === selectedItem.id;
              return (
                <div
                  key={loc.id}
                  onClick={() => handleSelectLocation(loc)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#FA0037] shadow-md ring-1 ring-[#FA0037]/20'
                      : 'bg-white/70 border-[#E5E5E7] hover:border-[#D2D2D2] hover:bg-white'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-extrabold text-[#282828]">
                        {loc.title}
                      </h4>
                    </div>
                    <p className="text-sm text-[#A00021] font-semibold">
                      {loc.subtitle}
                    </p>
                    <p className="text-sm text-[#686868] line-clamp-2 leading-relaxed">
                      {loc.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Quick Tip Box */}
            <div className="p-4 bg-white rounded-2xl border border-[#E5E5E7] shadow-xs mt-4">
              <div className="text-sm text-[#505050]">
                <strong className="font-bold text-[#282828] block mb-1">What is a 17-Digit VIN?</strong>
                A Cadillac VIN consists of 17 capital letters and digits (excluding letters I, O, and Q to avoid confusion with numbers 1 and 0).
              </div>
            </div>
          </div>

          {/* Right Side: Visual Interactive Hotspot Diagram / Document Specimen */}
          <div className="sticky top-24">
            <div className="bg-white rounded-2xl border border-[#E5E5E7] p-5 sm:p-6 shadow-md space-y-5 w-full">
              
              {/* Top Title of Active Selection */}
              <div className="pb-4 border-b border-[#E5E5E7]">
                <h3 className="text-lg font-extrabold text-[#282828]">
                  {selectedItem.title}
                </h3>
              </div>

              {/* Visual Display - Image Placeholder */}
              {activeCategory === 'physical' ? (
                <div className="relative aspect-video rounded-xl overflow-hidden border border-[#E5E5E7] bg-black">
                  <img 
                    src={vinLocatorImg} 
                    alt="Cadillac VIN Location Visual" 
                    className="w-full h-full object-cover opacity-90"
                    referrerPolicy="no-referrer"
                  />

                  {/* Hotspot Pulse Pins for Physical Spots */}
                  {locations.filter(l => l.type === 'physical').map((loc) => {
                    if (!loc.hotspot) return null;
                    const isActive = loc.id === selectedItem.id;
                    return (
                      <button
                        key={loc.id}
                        onClick={() => setSelectedId(loc.id)}
                        style={{ left: `${loc.hotspot.x}%`, top: `${loc.hotspot.y}%` }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all ${
                          isActive ? 'z-30 scale-125' : 'z-20 opacity-80 hover:opacity-100 hover:scale-110'
                        }`}
                      >
                        <span className="relative flex h-6 w-6 items-center justify-center">
                          {isActive && (
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FA0037] opacity-75"></span>
                          )}
                          <span className={`relative inline-flex rounded-full h-4 w-4 border-2 border-white ${
                            isActive ? 'bg-[#FA0037] shadow-lg' : 'bg-[#282828]'
                          }`} />
                        </span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="relative aspect-video rounded-xl overflow-hidden border border-[#E5E5E7] bg-[#121214] flex items-center justify-center">
                  <img 
                    src={selectedItem.image || `https://placehold.co/800x600/18181b/ffffff?text=${encodeURIComponent(selectedItem.title)}+Specimen`}
                    alt={`${selectedItem.title} Specimen`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              {/* Detailed Location Description */}
              <div className="space-y-3">
                <p className="text-sm sm:text-sm text-[#505050] leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* 17-Digit VIN Anatomy Footer Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-[#E5E5E7] p-6 sm:p-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h3 className="text-lg font-extrabold text-[#282828]">
              Cadillac 17-Digit VIN Sequence Breakdown
            </h3>
            <p className="text-sm text-[#686868] mt-1">
              Every position in your 17-character VIN encodes specific manufacturing and build data.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
            <div className="p-3 bg-[#FAFAFA] rounded-xl border border-[#E5E5E7]">
              <span className="text-sm font-mono font-black text-[#FA0037] block">1 - 3</span>
              <span className="text-[14px] font-bold text-[#282828] block mt-0.5">World Manufacturer</span>
              <span className="text-[14px] text-[#787878] block">1GY = GM Cadillac</span>
            </div>
            <div className="p-3 bg-[#FAFAFA] rounded-xl border border-[#E5E5E7]">
              <span className="text-sm font-mono font-black text-[#2C28E8] block">4 - 5</span>
              <span className="text-[14px] font-bold text-[#282828] block mt-0.5">Model Line &amp; Series</span>
              <span className="text-[14px] text-[#787878] block">Escalade / CT5</span>
            </div>
            <div className="p-3 bg-[#FAFAFA] rounded-xl border border-[#E5E5E7]">
              <span className="text-sm font-mono font-black text-[#16A34A] block">6 - 7</span>
              <span className="text-[14px] font-bold text-[#282828] block mt-0.5">Body &amp; Restraint</span>
              <span className="text-[14px] text-[#787878] block">SUV / Coupe / Sedan</span>
            </div>
            <div className="p-3 bg-[#FAFAFA] rounded-xl border border-[#E5E5E7]">
              <span className="text-sm font-mono font-black text-[#D97706] block">8</span>
              <span className="text-[14px] font-bold text-[#282828] block mt-0.5">Engine Code</span>
              <span className="text-[14px] text-[#787878] block">V8 / V6 / Electric</span>
            </div>
            <div className="p-3 bg-[#FAFAFA] rounded-xl border border-[#E5E5E7]">
              <span className="text-sm font-mono font-black text-[#7c3aed] block">10</span>
              <span className="text-[14px] font-bold text-[#282828] block mt-0.5">Model Year</span>
              <span className="text-[14px] text-[#787878] block">e.g. R = 2024</span>
            </div>
            <div className="p-3 bg-[#FAFAFA] rounded-xl border border-[#E5E5E7]">
              <span className="text-sm font-mono font-black text-[#0284c7] block">11</span>
              <span className="text-[14px] font-bold text-[#282828] block mt-0.5">Assembly Plant</span>
              <span className="text-[14px] text-[#787878] block">Arlington / Lansing</span>
            </div>
            <div className="p-3 bg-[#FAFAFA] rounded-xl border border-[#E5E5E7] col-span-2 sm:col-span-2 lg:col-span-1">
              <span className="text-sm font-mono font-black text-[#282828] block">12 - 17</span>
              <span className="text-[14px] font-bold text-[#282828] block mt-0.5">Production Serial</span>
              <span className="text-[14px] text-[#787878] block">6-Digit Sequence</span>
            </div>
          </div>

          {/* Bottom Action Row */}
          <div className="mt-8 pt-6 border-t border-[#E5E5E7] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#505050] text-center sm:text-left">
              Have your 17-character VIN ready? Generate your official Cadillac window sticker PDF instantly.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-[#FA0037] hover:bg-[#C8002B] text-white text-sm sm:text-sm font-extrabold px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              Lookup Cadillac Window Sticker
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
