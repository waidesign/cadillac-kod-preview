import React from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  FileText, 
  HelpCircle, 
  ShieldAlert,
  ChevronRight
} from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  categoryBg: string;
  readTime: string;
  date: string;
  snippet: string;
}

interface CadillacArticlesSectionProps {
  onNavigate?: (view: string) => void;
}

export const CadillacArticlesSection: React.FC<CadillacArticlesSectionProps> = ({ onNavigate }) => {
  const articles: Article[] = [
    {
      id: 'vin-not-found',
      title: "VIN Not Found? Don't Buy Until You Read This",
      category: 'VIN Troubleshooting',
      categoryColor: '#FA0037',
      categoryBg: '#FFF1F2',
      readTime: '4 min read',
      date: 'Updated Recently',
      snippet: 'A VIN not found message usually means the VIN was typed incorrectly, the vehicle uses an older pre-1981 GM format, or the factory lookup database requires exact character verification...'
    },
    {
      id: 'how-to-read',
      title: 'How to Read a Cadillac Window Sticker Before Buying Used',
      category: 'Buyer Guide',
      categoryColor: '#2C28E8',
      categoryBg: '#EEF2FF',
      readTime: '5 min read',
      date: 'Essential Guide',
      snippet: 'An official Monroney window sticker reveals exact factory options, base MSRP, standalone technology packages like Super Cruise or AKG audio, and original destination charges...'
    },
    {
      id: 'pre-1981-decoder',
      title: 'How to Decode Classic Cadillac Pre-1981 VINs & RPO Codes',
      category: 'Classic & Heritage',
      categoryColor: '#D97706',
      categoryBg: '#FFFBEB',
      readTime: '6 min read',
      date: 'Heritage Reference',
      snippet: 'Classic Cadillacs manufactured before 1981 use shorter 10 to 13-character VIN formats. Learn how to decode cowl body tags, engine codes, and classic Eldorado options...'
    }
  ];

  const handleGoToBlog = () => {
    if (onNavigate) {
      onNavigate('blog');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-white text-[#282828] border-t border-[#E5E5E7]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#282828] tracking-tight leading-tight">
            Read Cadillac Articles & Guides
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#686868] font-normal leading-relaxed">
            Explore practical guides to verify Cadillac models, decode VINs, inspect factory RPO option codes, and make informed buying decisions.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              onClick={handleGoToBlog}
              className="bg-[#FAFAFA] hover:bg-white rounded-2xl border border-[#E5E5E7] hover:border-[#FA0037] p-6 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Meta Bar: Category + Read Time */}
                <div className="flex items-center justify-between text-sm">
                  <span 
                    className="font-black uppercase tracking-wider px-2.5 py-1 rounded-md text-[14px]"
                    style={{ 
                      backgroundColor: art.categoryBg, 
                      color: art.categoryColor 
                    }}
                  >
                    {art.category}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-[#888888] font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-base sm:text-lg font-extrabold text-[#282828] group-hover:text-[#FA0037] transition-colors leading-snug">
                  {art.title}
                </h3>

                {/* Article Snippet */}
                <p className="text-sm sm:text-sm text-[#686868] leading-relaxed">
                  {art.snippet}
                </p>

              </div>

              {/* Read Article Action Link */}
              <div className="mt-6 pt-4 border-t border-[#E5E5E7] flex items-center justify-between text-sm font-extrabold text-[#282828] group-hover:text-[#FA0037] transition-colors">
                <span>Read Full Article</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>

            </article>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleGoToBlog}
            className="bg-[#FA0037] hover:bg-[#C8002B] text-white text-sm sm:text-sm font-extrabold px-8 py-3.5 rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
          >
            Read All Cadillac Articles
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
