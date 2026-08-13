import React, { useState } from 'react';
import { Search, HelpCircle, ChevronDown, FileText, ExternalLink } from 'lucide-react';
import { VehicleLookupType } from '../types';

interface LookupCardProps {
  ctaText?: string;
  badge?: string;
  onSearch: (vin: string) => void;
  onOpenVinHelp: () => void;
  onViewSample?: () => void;
}

export const LookupCard: React.FC<LookupCardProps> = ({
  ctaText = 'Get Window Sticker',
  badge = 'INSTANT CADILLAC LOOKUP',
  onSearch,
  onOpenVinHelp,
  onViewSample
}) => {
  const [lookupType, setLookupType] = useState<VehicleLookupType>('vin');
  const [vinInput, setVinInput] = useState('');
  const [plateInput, setPlateInput] = useState('');
  const [stateInput, setStateInput] = useState('CA');
  const [yearInput, setYearInput] = useState('2024');
  const [modelInput, setModelInput] = useState('Escalade');
  const [errorMsg, setErrorMsg] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (lookupType === 'vin') {
      const clean = vinInput.trim().toUpperCase();
      if (!clean) {
        setErrorMsg('Please enter a Cadillac VIN number.');
        return;
      }
      if (clean.length < 6) {
        setErrorMsg('Please enter a valid VIN (e.g. 1GYS4HKJ8R1089241).');
        return;
      }
      onSearch(clean);
    } else if (lookupType === 'plate') {
      if (!plateInput.trim()) {
        setErrorMsg('Please enter a U.S. license plate number.');
        return;
      }
      // Generate synthetic VIN lookup based on plate
      const syntheticVin = `1GY${plateInput.trim().toUpperCase()}92810`;
      onSearch(syntheticVin);
    } else {
      // Year/Make/Model lookup
      const syntheticVin = `1GYS4HKJ8R${yearInput}089`;
      onSearch(syntheticVin);
    }
  };

  const handleSampleClick = (sampleVin: string) => {
    setVinInput(sampleVin);
    setLookupType('vin');
    setErrorMsg('');
    onSearch(sampleVin);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-[#D2D2D2] p-6 sm:p-8 max-w-xl w-full">
      
      {/* Segmented Control Selector with Single Clear Labels */}
      <div className="grid grid-cols-3 bg-[#F7F7F8] p-1.5 rounded-xl border border-[#D2D2D2] mb-6 gap-1">
        <button
          type="button"
          onClick={() => { setLookupType('vin'); setErrorMsg(''); }}
          className={`py-2 text-sm font-bold rounded-lg transition-all cursor-pointer ${
            lookupType === 'vin'
              ? 'bg-white text-[#282828] shadow-sm border border-[#D2D2D2]'
              : 'text-[#787878] hover:text-[#282828]'
          }`}
        >
          By VIN Number
        </button>
        <button
          type="button"
          onClick={() => { setLookupType('plate'); setErrorMsg(''); }}
          className={`py-2 text-sm font-bold rounded-lg transition-all cursor-pointer ${
            lookupType === 'plate'
              ? 'bg-white text-[#282828] shadow-sm border border-[#D2D2D2]'
              : 'text-[#787878] hover:text-[#282828]'
          }`}
        >
          By U.S. Plate
        </button>
        <button
          type="button"
          onClick={() => { setLookupType('ymm'); setErrorMsg(''); }}
          className={`py-2 text-sm font-bold rounded-lg transition-all cursor-pointer ${
            lookupType === 'ymm'
              ? 'bg-white text-[#282828] shadow-sm border border-[#D2D2D2]'
              : 'text-[#787878] hover:text-[#282828]'
          }`}
        >
          By Year & Model
        </button>
      </div>

      <form onSubmit={handleFormSubmit} className="space-y-4">
        
        {/* VIN Input View */}
        {lookupType === 'vin' && (
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-bold text-[#282828] uppercase tracking-wide">
                17-Digit Cadillac VIN Number
              </label>
              <button 
                type="button"
                onClick={onOpenVinHelp}
                className="text-sm font-semibold text-[#2C28E8] hover:text-[#211FAB] flex items-center gap-1 transition-colors cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                Where is my VIN?
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                value={vinInput}
                onChange={(e) => setVinInput(e.target.value.toUpperCase())}
                placeholder="e.g. 1GYS4HKJ8R1089241"
                className="w-full bg-[#FAFAFA] border border-[#D2D2D2] rounded-xl px-4 py-3.5 text-sm sm:text-base font-mono font-bold text-[#282828] placeholder-[#787878] focus:bg-white focus:border-[#2C28E8] focus:ring-2 focus:ring-[#2C28E8]/20 transition-all uppercase"
                maxLength={17}
              />
              {vinInput && (
                <button
                  type="button"
                  onClick={() => setVinInput('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#787878] hover:text-[#282828] bg-[#E5E5E7] px-2 py-0.5 rounded"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        )}

        {/* License Plate View */}
        {lookupType === 'plate' && (
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <label className="block text-sm font-bold text-[#282828] mb-1.5 uppercase tracking-wide">
                License Plate
              </label>
              <input
                type="text"
                value={plateInput}
                onChange={(e) => setPlateInput(e.target.value.toUpperCase())}
                placeholder="e.g. 7XYZ892"
                className="w-full bg-[#FAFAFA] border border-[#D2D2D2] rounded-xl px-4 py-3 text-sm font-mono font-bold text-[#282828] placeholder-[#787878] focus:bg-white focus:border-[#2C28E8] focus:ring-2 focus:ring-[#2C28E8]/20 uppercase"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#282828] mb-1.5 uppercase tracking-wide">
                State
              </label>
              <div className="relative">
                <select
                  value={stateInput}
                  onChange={(e) => setStateInput(e.target.value)}
                  className="w-full bg-[#FAFAFA] border border-[#D2D2D2] rounded-xl pl-3 pr-9 py-3 text-sm font-bold text-[#282828] focus:bg-white focus:border-[#2C28E8] appearance-none cursor-pointer"
                >
                  {['CA', 'NY', 'TX', 'FL', 'MI', 'GA', 'IL', 'NC', 'PA', 'OH', 'AZ'].map(st => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#787878] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        )}

        {/* Year/Make/Model View */}
        {lookupType === 'ymm' && (
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-bold text-[#282828] mb-1.5 uppercase tracking-wide">
                Model Year
              </label>
              <div className="relative">
                <select
                  value={yearInput}
                  onChange={(e) => setYearInput(e.target.value)}
                  className="w-full bg-[#FAFAFA] border border-[#D2D2D2] rounded-xl pl-3 pr-9 py-3 text-sm font-bold text-[#282828] focus:bg-white focus:border-[#2C28E8] appearance-none cursor-pointer"
                >
                  {Array.from({ length: 30 }, (_, i) => 2026 - i).map(yr => (
                    <option key={yr} value={yr}>{yr}</option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#787878] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#282828] mb-1.5 uppercase tracking-wide">
                Cadillac Model
              </label>
              <div className="relative">
                <select
                  value={modelInput}
                  onChange={(e) => setModelInput(e.target.value)}
                  className="w-full bg-[#FAFAFA] border border-[#D2D2D2] rounded-xl pl-3 pr-9 py-3 text-sm font-bold text-[#282828] focus:bg-white focus:border-[#2C28E8] appearance-none cursor-pointer"
                >
                  {['Escalade', 'Lyriq', 'CT5', 'XT5', 'XT4', 'XT6', 'CT4', 'Celestiq', 'CTS', 'Eldorado', 'DeVille'].map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#787878] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {errorMsg && (
          <div className="p-3 bg-[#FA0037]/10 border border-[#FA0037]/30 text-[#A00021] text-sm font-semibold rounded-lg">
            {errorMsg}
          </div>
        )}

        {/* Context-Specific Primary CTA Button */}
        <button
          type="submit"
          className="w-full bg-[#FA0037] hover:bg-[#C8002B] active:bg-[#A00021] text-white font-extrabold text-sm sm:text-base py-4 rounded-xl shadow-md transition-all duration-150 flex items-center justify-center cursor-pointer focus:ring-2 focus:ring-[#2C28E8] focus:ring-offset-2"
        >
          <span>{ctaText}</span>
        </button>



        {/* Micro Trust Facts */}
        <p className="text-center text-[14px] sm:text-sm text-[#787878] font-medium mt-3">
          SSL Encrypted • Powered by Vehicle Databases • PDF Format
        </p>
      </form>

    </div>
  );
};
