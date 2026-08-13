import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  leadAnswer: string;
  fullAnswer: string;
}

interface KorayFaqSectionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
}

export const KorayFaqSection: React.FC<KorayFaqSectionProps> = ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Expert answers grounded in official General Motors invoice and Monroney label archives"
}) => {
  // Simple accordion state (first item open by default)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  // Generate FAQPage JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `${faq.leadAnswer} ${faq.fullAnswer}`
      }
    }))
  };

  return (
    <section className="py-16 bg-[#FAFAFA] border-t border-[#E5E5E7]">
      {/* Inject Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#282828] tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-[#686868] mt-2 font-normal">
              {subtitle}
            </p>
          )}
        </div>

        {/* Clean Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-[#FA0037]/40 shadow-xs' 
                    : 'border-[#E5E5E7] hover:border-[#D2D2D2]'
                }`}
              >
                {/* Accordion Header / Question */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base font-bold transition-colors leading-snug ${
                    isOpen ? 'text-[#282828]' : 'text-[#282828] hover:text-[#FA0037]'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#FA0037]/10 text-[#FA0037]' : 'bg-[#F4F4F5] text-[#686868]'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Accordion Content Panel */}
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-[#F4F4F5]">
                    <div className="pt-4 space-y-2">
                      <p className="text-sm font-semibold text-[#282828] leading-relaxed">
                        {faq.leadAnswer}
                      </p>
                      <p className="text-sm sm:text-sm text-[#686868] leading-relaxed">
                        {faq.fullAnswer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


