import React, { useState } from 'react';
import { 
  ChevronRight,
  ChevronDown
} from 'lucide-react';

import cadillacStickerImg from '../assets/images/vehicle-description.webp';
import standardEquipmentImg from '../assets/images/standard-equipment.webp';
import msrpImg from '../assets/images/msrp.webp';
import optionsImg from '../assets/images/packags-and-options.webp';
import destChargeImg from '../assets/images/shipping-charges.webp';
import totalPriceImg from '../assets/images/total-vehicle-price.webp';
import warrantyImg from '../assets/images/warranty.webp';
import fuelEconomyImg from '../assets/images/fuel-economy.webp';
import safetyRatingsImg from '../assets/images/safety-ratings.webp';

interface StickerSectionItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  sampleData: string[];
  keyTakeaway: string;
  image?: string;
}

export const StickerRevealsSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('veh-desc');

  const sections: StickerSectionItem[] = [
    {
      id: 'veh-desc',
      title: '1. Vehicle Description & Identity',
      badge: 'Identity',
      description: 'Identifies the year, make, model, trim tier, exterior paint code, interior trim, engine displacement, and transmission.',
      sampleData: ['Year & Model: 2024 Cadillac Escalade V-Series', 'Engine: 6.2L Supercharged V8 (682 hp)', 'Exterior: Crystal White Tricoat (G1W)', 'Interior: Jet Black Full Semi-Aniline Leather'],
      keyTakeaway: 'Confirms the vehicle is exactly what the seller claims before inspecting in person.',
      image: cadillacStickerImg
    },
    {
      id: 'std-equip',
      title: '2. Standard Equipment',
      badge: 'Base Features',
      description: 'Itemizes all base-tier features included in the base MSRP without additional package costs.',
      sampleData: ['AKG Studio Reference 36-Speaker Audio', 'Magnetic Ride Control 4.0 Suspension', 'Curved OLED 38-inch Total Diagonal Display', 'Panoramic Power Sunroof'],
      keyTakeaway: 'Helps you verify what features come standard versus paid option add-ons.',
      image: standardEquipmentImg
    },
    {
      id: 'base-msrp',
      title: "3. Manufacturer's Base MSRP",
      badge: 'Pricing',
      description: 'The starting retail price set directly by General Motors before any optional packages or freight fees.',
      sampleData: ['Base Vehicle MSRP: $152,295.00', 'Manufacturing Plant: Arlington, TX', 'Final Assembly Country: USA'],
      keyTakeaway: 'Establishes the true baseline value for calculating resale depreciation.',
      image: msrpImg
    },
    {
      id: 'opt-equip',
      title: '4. Optional Equipment & Packages',
      badge: 'High Value',
      description: 'Line-item listing of all factory-installed options, tech packages, and special trim upgrades with pricing.',
      sampleData: ['Super Cruise™ Hands-Free Driver Assist ($2,500)', 'Night Vision System ($2,000)', '22" 18-Spoke Polished Alloy Wheels ($1,995)', 'Heavy-Duty Trailering Package ($600)'],
      keyTakeaway: 'Ensures you pay fair market value for real factory upgrades, not aftermarket add-ons.',
      image: optionsImg
    },
    {
      id: 'dest-charge',
      title: '5. Destination Charge',
      badge: 'GM Freight',
      description: 'Standardized transportation fee charged by GM to ship the vehicle from the assembly plant to the original dealer.',
      sampleData: ['Destination Charge: $1,895.00', 'Original Selling Dealer: Cadillac of Beverly Hills', 'Ship To: Beverly Hills, CA'],
      keyTakeaway: 'Fixed official freight rate consistent across all U.S. dealerships for that model.',
      image: destChargeImg
    },
    {
      id: 'total-msrp',
      title: '6. Total Vehicle Price (Total MSRP)',
      badge: 'Final MSRP',
      description: 'The official sum of base price, factory options, and destination charge as printed on the original sticker.',
      sampleData: ['Total Options Value: $7,095.00', 'Total Destination: $1,895.00', 'Total Vehicle MSRP: $161,285.00'],
      keyTakeaway: 'The single most critical benchmark figure for bank financing and resale appraisal.',
      image: totalPriceImg
    },
    {
      id: 'warranty-info',
      title: '7. Warranty Information',
      badge: 'Protection',
      description: 'Details original Bumper-to-Bumper, Powertrain, Corrosion, and Roadside Assistance limits.',
      sampleData: ['4-Yr / 50,000-Mi Bumper-to-Bumper Limited', '6-Yr / 70,000-Mi Powertrain Limited', '6-Yr / Unlimited-Mi Corrosion Protection', 'First Maintenance Visit Included'],
      keyTakeaway: 'Allows you to calculate remaining transferable coverage based on original delivery date.',
      image: warrantyImg
    },
    {
      id: 'fuel-economy',
      title: '8. Fuel Economy & EPA Label',
      badge: 'Environmental',
      description: 'Official U.S. EPA estimated fuel economy metrics, annual fuel costs, and environmental smog ratings.',
      sampleData: ['Combined MPG: 13 (11 City / 16 Hwy)', 'Annual Fuel Cost: $4,550', 'Fuel Economy & Greenhouse Gas Rating: 2/10', 'Smog Rating: 3/10'],
      keyTakeaway: 'Provides verified fuel consumption benchmarks for accurate operational cost planning.',
      image: fuelEconomyImg
    },
    {
      id: 'safety-ratings',
      title: '9. Government Safety Ratings',
      badge: 'NHTSA Scores',
      description: 'Official NHTSA 5-star crash safety ratings for frontal crash, side impact, and rollover protection.',
      sampleData: ['Overall Vehicle Score: 4/5 Stars', 'Frontal Crash Driver: 5/5 Stars', 'Side Crash Front Seat: 5/5 Stars', 'Rollover Risk: 3/5 Stars'],
      keyTakeaway: 'Verifies official U.S. government crash-worthiness and safety test scores.',
      image: safetyRatingsImg
    }
  ];

  const selectedItem = sections.find(s => s.id === selectedId) || sections[0];

  return (
    <section className="py-16 bg-[#F7F7F8] text-[#282828]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#282828] tracking-tight leading-tight">
            Everything Your Cadillac Window Sticker Reveals
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#686868] font-normal leading-relaxed">
            A genuine Cadillac Monroney label is packed with information. Here is a breakdown of all 9 official sections.
          </p>
        </div>

        {/* Master Interactive Split Layout - Equal 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: List of All 9 Points */}
          <div className="space-y-3">
            {sections.map((sec) => {
              const isSelected = sec.id === selectedItem.id;
              return (
                <div
                  key={sec.id}
                  onClick={() => setSelectedId(sec.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col gap-3 ${
                    isSelected
                      ? 'bg-white border-[#FA0037] shadow-md ring-1 ring-[#FA0037]/20'
                      : 'bg-white/80 border-[#E5E5E7] hover:border-[#D2D2D2] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm font-extrabold text-[#282828]">
                          {sec.title}
                        </h3>
                        <span className="text-[14px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#F0F0F2] text-[#505050]">
                          {sec.badge}
                        </span>
                      </div>
                      <p className="text-sm text-[#686868] mt-1 leading-relaxed">
                        {sec.description}
                      </p>
                    </div>

                    <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${isSelected ? 'text-[#FA0037] translate-x-1' : 'text-[#A0A0A0]'}`} />
                  </div>

                  {/* Inline Expanded Preview when selected on mobile */}
                  {isSelected && (
                    <div className="lg:hidden mt-2 pt-3 border-t border-[#E5E5E7] space-y-3">
                      {/* Image Container */}
                      <div className="relative aspect-video rounded-xl overflow-hidden border border-[#E5E5E7] bg-[#F7F7F8]">
                        <img 
                          src={selectedItem.image || cadillacStickerImg} 
                          alt="Cadillac Window Sticker Sample" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                      </div>

                      <div className="p-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl text-sm text-[#166534]">
                        <strong className="font-bold text-[#15803D]">Buyer Value: </strong>
                        {sec.keyTakeaway}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Deep-Dive Inspection Card for Desktop */}
          <div className="hidden lg:block sticky top-24 self-start z-20">
            <div className="bg-white rounded-2xl border border-[#E5E5E7] p-6 shadow-md space-y-6">
              
              {/* Card Header */}
              <div className="pb-4 border-b border-[#E5E5E7]">
                <span className="text-[14px] font-black uppercase text-[#FA0037] tracking-wider block mb-1">
                  Selected Field Inspection
                </span>
                <h3 className="text-base font-extrabold text-[#282828]">
                  {selectedItem.title}
                </h3>
              </div>

              {/* Image Placeholder Container */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-[#E5E5E7] bg-[#F7F7F8]">
                <img 
                  src={selectedItem.image || cadillacStickerImg} 
                  alt="Cadillac Window Sticker Sample" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Description */}
              <p className="text-sm sm:text-sm text-[#505050] leading-relaxed">
                {selectedItem.description}
              </p>

              {/* Key Takeaway Callout */}
              <div className="p-3.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl text-sm text-[#166534]">
                <strong className="font-bold block text-[#15803D] mb-0.5">Buyer Value:</strong>
                {selectedItem.keyTakeaway}
              </div>

              {/* Action Button */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full bg-[#FA0037] hover:bg-[#C8002B] text-white text-sm sm:text-sm font-extrabold py-3.5 rounded-xl shadow-md transition-all cursor-pointer text-center block"
              >
                Inspect Your VIN On Sticker
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

