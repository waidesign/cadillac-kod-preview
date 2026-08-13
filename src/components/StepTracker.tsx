import React from 'react';
import { Check } from 'lucide-react';

interface StepItem {
  number: number;
  title: string;
  description: string;
}

interface StepTrackerProps {
  steps: StepItem[];
  title?: string;
  subtitle?: string;
}

export const StepTracker: React.FC<StepTrackerProps> = ({
  steps,
  title = "How to Recreate Your Cadillac Window Sticker",
  subtitle = "Simple 3-step process to generate your official factory Monroney label"
}) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[14px] font-extrabold tracking-widest text-[#A00021] uppercase block mb-1">
            SIMPLE & FAST
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#282828] tracking-tight">
            {title}
          </h2>
          <p className="text-sm text-[#787878] mt-2">
            {subtitle}
          </p>
        </div>

        {/* Horizontal Step Tracker */}
        <div className="relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-0.5 bg-[#D2D2D2] -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="bg-[#F7F7F8] border border-[#D2D2D2] rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                
                {/* Step Number Circle Node */}
                <div className="w-12 h-12 rounded-full bg-[#FA0037] text-white font-black text-lg flex items-center justify-center mx-auto mb-4 shadow-sm border-2 border-white">
                  {step.number}
                </div>

                <h3 className="text-base font-extrabold text-[#282828] mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-[#787878] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
