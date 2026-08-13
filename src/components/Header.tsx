import React, { useState, useEffect } from 'react';
import { 
  FileText, Search, ShieldCheck, Palette, 
  DollarSign, Wrench, Menu, X, ChevronDown, 
  Award, Layers, CheckCircle2, AlertTriangle
} from 'lucide-react';
import logoImg from '../assets/images/cadillac-logo.webp';

interface HeaderProps {
  currentTab: string;
  onNavigate: (view: string, param?: string) => void;
  onOpenLookup: (vin?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onNavigate, onOpenLookup }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isModelsOpen, setIsModelsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quickVin, setQuickVin] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleQuickVinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickVin.trim()) {
      onOpenLookup(quickVin.trim());
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#D2D2D2] transition-shadow duration-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Cadillac Crest Wordmark -> Image Placeholder */}
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <img 
              src={logoImg} 
              alt="Cadillac Window Sticker" 
              referrerPolicy="no-referrer"
              className="h-10 sm:h-11 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => onNavigate('models')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${currentTab === 'models' || currentTab.startsWith('model-') ? 'text-[#FA0037]' : 'text-[#282828] hover:text-[#FA0037]'}`}
            >
              Link 1
            </button>

            <button 
              onClick={() => onNavigate('tools')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${currentTab === 'tools' || currentTab.startsWith('tool-') ? 'text-[#FA0037]' : 'text-[#282828] hover:text-[#FA0037]'}`}
            >
              Link 2
            </button>

            <button 
              onClick={() => onNavigate('pricing')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${currentTab === 'pricing' ? 'text-[#FA0037]' : 'text-[#282828] hover:text-[#FA0037]'}`}
            >
              Link 3
            </button>

            {/* Blog Nav */}
            <button 
              onClick={() => onNavigate('blog')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${currentTab === 'blog' || currentTab.startsWith('post-') ? 'text-[#FA0037]' : 'text-[#282828] hover:text-[#FA0037]'}`}
            >
              Blog
            </button>
          </nav>

          {/* Header Action Controls */}
          <div className="flex items-center gap-3">
            
            {/* Scrolled Quick VIN Form */}
            {isScrolled && (
              <form onSubmit={handleQuickVinSubmit} className="hidden md:flex items-center gap-1.5 bg-[#F7F7F8] border border-[#D2D2D2] rounded-lg px-2.5 py-1">
                <input 
                  type="text" 
                  placeholder="Enter VIN..." 
                  value={quickVin}
                  onChange={(e) => setQuickVin(e.target.value.toUpperCase())}
                  className="bg-transparent text-sm text-[#282828] placeholder-[#787878] focus:outline-none w-32 font-mono"
                  maxLength={17}
                />
                <button type="submit" className="text-sm bg-[#282828] text-white px-2 py-1 rounded font-medium hover:bg-black transition-colors cursor-pointer">
                  Lookup
                </button>
              </form>
            )}

            {/* Login Link */}
            <button 
              onClick={() => onNavigate('login')}
              className="hidden sm:inline-block text-sm font-bold text-[#282828] hover:text-[#FA0037] px-3 py-2 transition-colors cursor-pointer"
            >
              Log In
            </button>

            {/* Main Red Primary Button (hidden on mobile, visible on sm and up) */}
            <button 
              onClick={() => onOpenLookup()}
              className="hidden sm:flex bg-[#FA0037] hover:bg-[#C8002B] active:bg-[#A00021] text-white text-sm sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-sm transition-all duration-150 items-center border border-transparent focus:ring-2 focus:ring-[#2C28E8] focus:ring-offset-2 cursor-pointer"
            >
              <span>Get Sticker</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#282828] hover:bg-[#F7F7F8] rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Full Screen Covered */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-white flex flex-col h-screen w-screen overflow-y-auto px-6 py-5 animate-in fade-in duration-200">
          {/* Mobile Overlay Top Header Bar */}
          <div className="flex items-center justify-between pb-5 border-b border-[#E5E5E7] shrink-0">
            <div className="flex items-center cursor-pointer" onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }}>
              <img 
                src={logoImg} 
                alt="Cadillac Window Sticker" 
                referrerPolicy="no-referrer"
                className="h-10 w-auto object-contain"
              />
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#282828] hover:bg-[#F7F7F8] active:bg-[#EAEAEA] rounded-xl transition-colors cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-6 space-y-2 flex-1 overflow-y-auto">
            <button 
              onClick={() => { onNavigate('models'); setIsMobileMenuOpen(false); }}
              className="w-full text-left py-3.5 px-4 rounded-xl text-base font-extrabold text-[#282828] hover:bg-[#F7F7F8] hover:text-[#FA0037] active:bg-[#EAEAEA] transition-colors cursor-pointer"
            >
              Link 1
            </button>
            <button 
              onClick={() => { onNavigate('tools'); setIsMobileMenuOpen(false); }}
              className="w-full text-left py-3.5 px-4 rounded-xl text-base font-extrabold text-[#282828] hover:bg-[#F7F7F8] hover:text-[#FA0037] active:bg-[#EAEAEA] transition-colors cursor-pointer"
            >
              Link 2
            </button>
            <button 
              onClick={() => { onNavigate('pricing'); setIsMobileMenuOpen(false); }}
              className="w-full text-left py-3.5 px-4 rounded-xl text-base font-extrabold text-[#282828] hover:bg-[#F7F7F8] hover:text-[#FA0037] active:bg-[#EAEAEA] transition-colors cursor-pointer"
            >
              Link 3
            </button>
            <button 
              onClick={() => { onNavigate('blog'); setIsMobileMenuOpen(false); }}
              className="w-full text-left py-3.5 px-4 rounded-xl text-base font-extrabold text-[#282828] hover:bg-[#F7F7F8] hover:text-[#FA0037] active:bg-[#EAEAEA] transition-colors cursor-pointer"
            >
              Blog
            </button>
          </div>

          {/* Bottom Action CTAs */}
          <div className="pt-5 border-t border-[#E5E5E7] flex flex-col gap-3 shrink-0 pb-6">
            <button 
              onClick={() => { onOpenLookup(); setIsMobileMenuOpen(false); }}
              className="w-full bg-[#FA0037] hover:bg-[#C8002B] active:bg-[#A00021] text-white text-base font-bold py-3.5 rounded-xl shadow-md transition-all duration-150 flex items-center justify-center cursor-pointer"
            >
              Get Sticker
            </button>
            <button 
              onClick={() => { onNavigate('login'); setIsMobileMenuOpen(false); }}
              className="w-full text-center py-3.5 text-sm font-bold text-[#282828] border border-[#D2D2D2] rounded-xl hover:bg-[#F7F7F8] active:bg-[#EAEAEA] transition-colors cursor-pointer"
            >
              Log In / Account Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
