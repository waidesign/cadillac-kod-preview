import React from 'react';
import logoImg from '../assets/images/cadillac-logo.webp';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#FAFAFA] border-t border-[#D2D2D2] text-[#282828] pt-12 pb-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-10">
          
          {/* Col 1: Brand Info */}
          <div className="col-span-2 space-y-3">
            <div className="flex items-center">
              <img 
                src={logoImg} 
                alt="Cadillac Window Sticker" 
                referrerPolicy="no-referrer"
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-[#787878] leading-relaxed max-w-sm">
              The leading online platform for recreating original factory Cadillac Monroney window stickers, build sheets, RPO codes, paint codes, and vehicle specification reports by VIN.
            </p>
            <div className="text-sm text-[#282828] font-medium pt-1">
              Covers classic and modern Cadillac models from 1953 through 2026.
            </div>
          </div>

          {/* Col 2: Primary Documents */}
          <div>
            <h4 className="text-sm font-bold text-[#282828] uppercase tracking-wider mb-3">Primary Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('tool-window-sticker')} className="text-[#787878] hover:text-[#FA0037] cursor-pointer transition-colors">
                  Window Sticker (Monroney)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tool-build-sheet')} className="text-[#787878] hover:text-[#2C28E8] cursor-pointer transition-colors">
                  Build Sheet by VIN
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tool-vin-decoder')} className="text-[#787878] hover:text-[#2C28E8] cursor-pointer transition-colors">
                  FREE VIN Decoder
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tool-msrp-lookup')} className="text-[#787878] hover:text-[#2C28E8] cursor-pointer transition-colors">
                  Original MSRP Lookup
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Vehicle Lookups */}
          <div>
            <h4 className="text-sm font-bold text-[#282828] uppercase tracking-wider mb-3">Vehicle Details</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('tool-options')} className="text-[#787878] hover:text-[#2C28E8] cursor-pointer transition-colors">
                  Options & Packages
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tool-paint-code')} className="text-[#787878] hover:text-[#2C28E8] cursor-pointer transition-colors">
                  Paint Code by VIN
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tool-warranty')} className="text-[#787878] hover:text-[#2C28E8] cursor-pointer transition-colors">
                  Warranty Check
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tool-recalls')} className="text-[#787878] hover:text-[#2C28E8] cursor-pointer transition-colors">
                  Recall Check
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="text-[#787878] hover:text-[#FA0037] cursor-pointer transition-colors">
                  Pricing Plans
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Support */}
          <div>
            <h4 className="text-sm font-bold text-[#282828] uppercase tracking-wider mb-3">Support & Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('about')} className="text-[#787878] hover:text-[#2C28E8] cursor-pointer transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-[#787878] hover:text-[#2C28E8] cursor-pointer transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('refund')} className="text-[#787878] hover:text-[#2C28E8] cursor-pointer transition-colors">
                  Request a Refund
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy')} className="text-[#787878] hover:text-[#2C28E8] cursor-pointer transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="text-[#787878] hover:text-[#2C28E8] cursor-pointer transition-colors">
                  Knowledge Hub
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 text-[14px] text-[#787878] space-y-3 leading-relaxed">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-[#E5E5E7] text-[#282828] font-medium">
            <div>
              © 2026 CadillacWindowSticker.com. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-[#787878]">
              <button onClick={() => onNavigate('privacy')} className="hover:text-[#282828] cursor-pointer">Privacy</button>
              <span>•</span>
              <button onClick={() => onNavigate('refund')} className="hover:text-[#282828] cursor-pointer">Refund Terms</button>
              <span>•</span>
              <button onClick={() => onNavigate('contact')} className="hover:text-[#282828] cursor-pointer">Support</button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
