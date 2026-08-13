import React from 'react';
import { Check, ShieldCheck, Zap, Lock, Sparkles, HelpCircle } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (planId: string) => void;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'single',
    name: 'Single Window Sticker',
    price: '$14.99',
    subtext: 'One-time payment • Lifetime access',
    perReportText: '$14.99 / report',
    features: [
      '1 Official Monroney Window Sticker PDF',
      'High-Resolution Print & Display Format',
      'Original MSRP & Option Itemization',
      'GM Paint Code & Interior Trim Verification',
      'Instant Email & Dashboard PDF Download',
      '100% Money-Back Accuracy Guarantee'
    ],
    ctaLabel: 'Get Single Sticker'
  },
  {
    id: 'multipack',
    name: '5-Report Multi-Pack',
    price: '$39.99',
    subtext: 'Save 46% • Credits Never Expire',
    perReportText: '$8.00 / report',
    badge: 'MOST POPULAR',
    isPopular: true,
    features: [
      '5 Official Monroney Window Stickers or Build Sheets',
      'Credits Never Expire — Use Anytime',
      'High-Resolution 300 DPI Print Quality',
      'Full RPO Build Code Breakdown Included',
      'NHTSA Safety Recall & Warranty Check',
      'Priority Email & Live Chat Support'
    ],
    ctaLabel: 'Get 5-Pack ($8/ea)'
  },
  {
    id: 'unlimited',
    name: 'Unlimited Commercial',
    price: '$29.99',
    subtext: 'Billed monthly • Cancel anytime',
    perReportText: 'Unlimited VIN Lookups',
    badge: 'FOR DEALERS & BROKERS',
    features: [
      'Unlimited Monroney Window Sticker Downloads',
      'Unlimited Build Sheet & VIN Decoding',
      'Commercial Resale & Listing Usage License',
      'Bulk VIN Batch Upload & Export Tool',
      'Dedicated Account Manager',
      'API Access Available Upon Request'
    ],
    ctaLabel: 'Start Unlimited Access'
  }
];

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#282828] tracking-tight">
            Select Your Cadillac Window Sticker Plan
          </h1>
          <p className="text-sm text-[#787878] mt-2">
            Instant digital delivery in under 10 seconds. Covered by our 100% money-back accuracy guarantee.
          </p>
        </div>

        {/* 3-Tier Pricing Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-200 relative ${
                plan.isPopular
                  ? 'bg-white border-2 border-[#FA0037] shadow-xl md:-translate-y-2'
                  : 'bg-[#FAFAFA] border border-[#D2D2D2] shadow-sm hover:shadow-md'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[14px] font-black tracking-widest uppercase shadow-sm ${
                  plan.isPopular 
                    ? 'bg-[#F3C846] text-[#282828] border border-[#282828]'
                    : 'bg-[#2C28E8] text-white'
                }`}>
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="text-lg font-extrabold text-[#282828] mb-1">
                  {plan.name}
                </h3>
                <div className="text-sm text-[#787878] mb-4">
                  {plan.subtext}
                </div>

                <div className="flex items-baseline gap-2 mb-2 pb-4 border-b border-[#E5E5E7]">
                  <span className="text-4xl font-black text-[#282828] tracking-tight">{plan.price}</span>
                  <span className="text-sm font-bold text-[#A00021]">{plan.perReportText}</span>
                </div>

                <ul className="space-y-3 my-6 text-sm text-[#282828]">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#2C28E8] shrink-0 mt-0.5" />
                      <span className="font-medium leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onSelectPlan(plan.id)}
                  className={`w-full font-extrabold text-sm py-3.5 px-4 rounded-xl shadow transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer ${
                    plan.isPopular
                      ? 'bg-[#FA0037] hover:bg-[#C8002B] text-white focus:ring-2 focus:ring-[#2C28E8]'
                      : 'bg-[#282828] hover:bg-black text-white'
                  }`}
                >
                  <span>{plan.ctaLabel}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Gold-Bordered Money Back Guarantee Strip */}
        <div className="bg-[#FEFCE8] border-2 border-[#F3C846] rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#F3C846] text-[#282828] border border-[#282828] flex items-center justify-center shrink-0 font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-[#282828]">100% No-Risk Money-Back Guarantee</h3>
              <p className="text-sm text-[#787878] mt-0.5">
                If our database cannot generate a window sticker or build report for your VIN, your payment will be refunded immediately in full — guaranteed.
              </p>
            </div>
          </div>
          <button 
            onClick={() => onSelectPlan('single')}
            className="text-sm font-extrabold text-[#282828] bg-white border border-[#282828] hover:bg-[#282828] hover:text-white px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap"
          >
            Learn Refund Policy
          </button>
        </div>

        {/* Feature Comparison Table Matrix */}
        <div className="bg-[#FAFAFA] border border-[#D2D2D2] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-extrabold text-[#282828] mb-6 text-center">
            Detailed Feature Comparison Matrix
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[#282828] text-[#282828]">
                  <th className="py-3 px-4 font-bold">Feature</th>
                  <th className="py-3 px-4 font-bold text-center">Single ($14.99)</th>
                  <th className="py-3 px-4 font-bold text-center bg-[#FA0037]/5 text-[#FA0037]">5-Pack ($39.99)</th>
                  <th className="py-3 px-4 font-bold text-center">Unlimited ($29.99/mo)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5E7]">
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#282828]">Monroney Window Sticker PDF</td>
                  <td className="py-3 px-4 text-center">1 Report</td>
                  <td className="py-3 px-4 text-center font-bold text-[#FA0037] bg-[#FA0037]/5">5 Reports</td>
                  <td className="py-3 px-4 text-center font-bold">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#282828]">RPO Build Sheet Code Breakdown</td>
                  <td className="py-3 px-4 text-center">✓ Included</td>
                  <td className="py-3 px-4 text-center font-bold text-[#FA0037] bg-[#FA0037]/5">✓ Included</td>
                  <td className="py-3 px-4 text-center font-bold">✓ Included</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#282828]">Original Base & Option MSRP</td>
                  <td className="py-3 px-4 text-center">✓ Included</td>
                  <td className="py-3 px-4 text-center font-bold text-[#FA0037] bg-[#FA0037]/5">✓ Included</td>
                  <td className="py-3 px-4 text-center font-bold">✓ Included</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#282828]">GM Paint Code & Interior Trim</td>
                  <td className="py-3 px-4 text-center">✓ Included</td>
                  <td className="py-3 px-4 text-center font-bold text-[#FA0037] bg-[#FA0037]/5">✓ Included</td>
                  <td className="py-3 px-4 text-center font-bold">✓ Included</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#282828]">Credit Expiration</td>
                  <td className="py-3 px-4 text-center">N/A</td>
                  <td className="py-3 px-4 text-center font-bold text-[#FA0037] bg-[#FA0037]/5">Never Expire</td>
                  <td className="py-3 px-4 text-center">Monthly Active</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#282828]">Commercial Resale License</td>
                  <td className="py-3 px-4 text-center text-[#787878]">Personal Only</td>
                  <td className="py-3 px-4 text-center text-[#787878] bg-[#FA0037]/5">Personal / Dealer</td>
                  <td className="py-3 px-4 text-center font-bold text-[#2C28E8]">Full Commercial License</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
