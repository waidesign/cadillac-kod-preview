import React from 'react';
import { 
  ArrowRight 
} from 'lucide-react';

interface AudienceRole {
  id: 'buyers' | 'sellers' | 'dealers';
  title: string;
  badge: string;
  accentColor: string;
  lightBg: string;
  borderColor: string;
  points: {
    title: string;
    description: string;
  }[];
}

export const EssentialForAudiencesSection: React.FC = () => {
  const audiences: AudienceRole[] = [
    {
      id: 'buyers',
      title: 'Used Car Buyers',
      badge: 'Buyer Protection',
      accentColor: '#FA0037',
      lightBg: '#FFF1F2',
      borderColor: '#FECDD3',
      points: [
        {
          title: 'Know What You Are Paying For',
          description: 'You are spending hard-earned money on a used Cadillac. You deserve to know the full story before you hand over a single dollar.'
        },
        {
          title: 'See the Original Price and Features',
          description: 'A Cadillac window sticker lookup tells you the original price, every option the car came with, and the exact trim level it left the factory with.'
        },
        {
          title: 'Verify What the Seller Is Telling You',
          description: 'Compare original specs to what the seller is claiming. If features do not match up, you know it is time to walk away.'
        }
      ]
    },
    {
      id: 'sellers',
      title: 'Sellers',
      badge: 'Maximum Value',
      accentColor: '#2C28E8',
      lightBg: '#EEF2FF',
      borderColor: '#C7D2FE',
      points: [
        {
          title: 'Prove Your Cadillac Is Worth the Price',
          description: 'Want more money for your Cadillac? Show buyers the original window sticker. It is one of the most powerful tools when negotiating a sale.'
        },
        {
          title: 'Build Buyer Confidence',
          description: 'Buyers pay more when they trust what they are buying. The window sticker proves the features, trim level, and original MSRP without any guesswork.'
        },
        {
          title: 'Sell Faster With a Cadillac Window Sticker',
          description: 'A Cadillac window sticker PDF helps you justify your asking price and gives buyers a reason to choose your car over another. That means a quicker sale and less back and forth.'
        }
      ]
    },
    {
      id: 'dealers',
      title: 'Dealerships and Car Enthusiasts',
      badge: 'Professional Standard',
      accentColor: '#16A34A',
      lightBg: '#F0FDF4',
      borderColor: '#BBF7D0',
      points: [
        {
          title: 'A Trust Building Tool for Dealerships',
          description: 'For dealerships, sharing the original window sticker builds trust and transparency throughout the sales process. Customers feel more confident when they can see the copy of the original Cadillac window sticker.'
        },
        {
          title: 'A Must Have Reference for Enthusiasts',
          description: 'For car enthusiasts, the window sticker is a valuable reference point. It lets you verify the original specs and options so you always know exactly what a vehicle came with from day one.'
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-[#FAFAFA] text-[#282828] border-t border-[#E5E5E7]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#282828] tracking-tight leading-tight">
            Cadillac Window Sticker Lookup — Essential for Buyers, Sellers, and Enthusiasts
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#686868] font-normal leading-relaxed">
            Buying a used Cadillac should be exciting. But without the right information, it can be a costly mistake. Here are the most common reasons buyers, sellers, and dealers rely on our lookup every day:
          </p>
        </div>

        {/* Simplified 3-Column Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {audiences.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-[#E5E5E7] p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Card Title Header */}
                <div className="pb-4 border-b border-[#E5E5E7]">
                  <h3 className="text-lg font-extrabold text-[#282828]">
                    {card.title}
                  </h3>
                </div>

                {/* Point List */}
                <div className="space-y-6">
                  {card.points.map((pt, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <h4 className="text-sm font-extrabold text-[#282828]">
                        {pt.title}
                      </h4>
                      <p className="text-sm sm:text-sm text-[#686868] leading-relaxed">
                        {pt.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>


            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#FA0037] hover:bg-[#C8002B] text-white text-sm sm:text-sm font-extrabold px-8 py-4 rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
          >
            Lookup Cadillac Window Sticker by VIN
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
