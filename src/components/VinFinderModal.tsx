import React from 'react';
import { X, Search, ShieldCheck, Car, FileText, MapPin } from 'lucide-react';

interface VinFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VinFinderModal: React.FC<VinFinderModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#D2D2D2] relative">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#787878] hover:text-[#282828] bg-[#F7F7F8] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#FA0037]/10 text-[#FA0037] flex items-center justify-center">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-[#282828]">Where to Find Your Cadillac VIN</h3>
            <p className="text-sm text-[#787878]">Locations for 17-digit Vehicle Identification Numbers</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-[#282828] mb-6">
          
          <div className="p-4 bg-[#F7F7F8] rounded-xl border border-[#D2D2D2] flex items-start gap-3">
            <Car className="w-5 h-5 text-[#FA0037] shrink-0 mt-0.5" />
            <div>
              <div className="font-extrabold text-[#282828] mb-0.5">1. Lower Driver-Side Windshield</div>
              <p className="text-[#787878] leading-relaxed">
                Look through the front windshield from outside the vehicle at the bottom left corner near the dashboard.
              </p>
            </div>
          </div>

          <div className="p-4 bg-[#F7F7F8] rounded-xl border border-[#D2D2D2] flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#2C28E8] shrink-0 mt-0.5" />
            <div>
              <div className="font-extrabold text-[#282828] mb-0.5">2. Driver Door B-Pillar Jamb</div>
              <p className="text-[#787878] leading-relaxed">
                Open the driver’s door and check the safety certification label attached to the door frame B-pillar.
              </p>
            </div>
          </div>

          <div className="p-4 bg-[#F7F7F8] rounded-xl border border-[#D2D2D2] flex items-start gap-3">
            <FileText className="w-5 h-5 text-[#282828] shrink-0 mt-0.5" />
            <div>
              <div className="font-extrabold text-[#282828] mb-0.5">3. Registration, Insurance & Title Documents</div>
              <p className="text-[#787878] leading-relaxed">
                Your 17-digit VIN is listed on your vehicle registration card, insurance policy paper, and title certificate.
              </p>
            </div>
          </div>

        </div>

        <button
          onClick={onClose}
          className="w-full bg-[#282828] hover:bg-black text-white font-bold text-sm py-3 rounded-xl transition-colors"
        >
          Got it, return to lookup
        </button>

      </div>
    </div>
  );
};
