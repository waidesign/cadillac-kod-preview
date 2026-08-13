import React, { useState } from 'react';
import { MonroneyStickerData } from '../types';
import { Download, Printer, ShieldCheck, Lock, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

interface MonroneyStickerProps {
  data: MonroneyStickerData;
  isUnlocked?: boolean;
  onUnlock?: () => void;
}

export const MonroneySticker: React.FC<MonroneyStickerProps> = ({
  data,
  isUnlocked = false,
  onUnlock
}) => {
  const [showWatermark, setShowWatermark] = useState(!isUnlocked);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-4">
      
      {/* Action Bar Above Sticker */}
      <div className="no-print bg-[#F7F7F8] border border-[#D2D2D2] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#282828] text-[#F3C846] flex items-center justify-center font-serif font-bold text-base">
            C
          </div>
          <div>
            <div className="text-sm font-bold text-[#282828] flex items-center gap-2">
              <span>{data.year} {data.make} {data.model} {data.trim}</span>
              <span className="text-[14px] bg-[#282828] text-white px-2 py-0.5 rounded font-mono">
                VIN: {data.vin}
              </span>
            </div>
            <div className="text-[14px] text-[#787878]">
              Original Factory Monroney Label • Total MSRP: ${data.totalMsrp.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {showWatermark && !isUnlocked && (
            <button
              onClick={onUnlock}
              className="bg-[#FA0037] hover:bg-[#C8002B] text-white text-sm font-extrabold px-4 py-2 rounded-lg shadow transition-colors flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              Unlock High-Res PDF ($14.99)
            </button>
          )}

          <button
            onClick={handlePrint}
            className="bg-white border border-[#D2D2D2] hover:bg-[#F7F7F8] text-[#282828] text-sm font-bold px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            Print
          </button>

          <button
            onClick={() => {
              if (isUnlocked) {
                alert('Downloading Official High-Res PDF...');
              } else if (onUnlock) {
                onUnlock();
              }
            }}
            className="bg-[#282828] hover:bg-black text-white text-sm font-bold px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            Download PDF
          </button>
        </div>
      </div>

      {/* Actual Monroney Window Sticker Container */}
      <div 
        id="monroney-sticker-printable"
        className="relative bg-white border-2 border-[#282828] shadow-xl p-5 sm:p-8 font-sans text-[#282828] max-w-4xl mx-auto overflow-hidden select-none"
        style={{ minHeight: '800px' }}
      >
        
        {/* Sample Watermark Overlay */}
        {showWatermark && !isUnlocked && (
          <div className="no-print absolute inset-0 z-20 pointer-events-none flex items-center justify-center overflow-hidden">
            <div className="transform -rotate-45 text-[#FA0037]/15 font-black text-5xl sm:text-7xl uppercase tracking-widest whitespace-nowrap border-y-8 border-[#FA0037]/15 py-6">
              SAMPLE PREVIEW • CADILLACWINDOWSTICKER.COM • SAMPLE PREVIEW
            </div>
          </div>
        )}

        {/* TOP BRAND HEADER */}
        <div className="border-b-4 border-[#282828] pb-4 mb-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#282828] text-[#F3C846] border-2 border-[#F3C846] rounded-md flex items-center justify-center font-serif text-3xl font-bold shadow-md">
              C
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#282828] leading-none">
                CADILLAC MOTOR CAR DIVISION
              </h1>
              <div className="text-sm font-bold text-[#787878] uppercase tracking-widest mt-1">
                GENERAL MOTORS LLC • DETROIT, MICHIGAN, USA
              </div>
            </div>
          </div>

          <div className="text-right text-sm font-mono font-bold bg-[#F7F7F8] border border-[#D2D2D2] p-2.5 rounded">
            <div className="text-[14px] text-[#787878] uppercase font-sans">DELIVERED TO DEALER:</div>
            <div className="text-[#282828] uppercase">{data.shippingDealer.name}</div>
            <div className="text-[#787878]">{data.shippingDealer.city}, {data.shippingDealer.state}</div>
          </div>
        </div>

        {/* VEHICLE IDENTIFICATION BAR */}
        <div className="bg-[#282828] text-white p-3 mb-4 rounded flex flex-wrap items-center justify-between text-sm font-mono font-bold">
          <div>MODEL: <span className="text-[#F3C846] font-sans font-bold">{data.year} {data.make} {data.model} {data.trim}</span></div>
          <div>VIN: <span className="text-white">{data.vin}</span></div>
          <div>ASSEMBLY: <span className="text-[#E5E5E7]">{data.finalAssemblyPoint}</span></div>
        </div>

        {/* COLOR & SPECIFICATION STRIP */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5 bg-[#F7F7F8] p-3 border border-[#D2D2D2] text-sm font-medium">
          <div>
            <span className="text-[14px] text-[#787878] uppercase block">Exterior Paint:</span>
            <span className="font-bold text-[#282828]">{data.exteriorColor}</span>
          </div>
          <div>
            <span className="text-[14px] text-[#787878] uppercase block">Interior Trim:</span>
            <span className="font-bold text-[#282828]">{data.interiorColor}</span>
          </div>
          <div>
            <span className="text-[14px] text-[#787878] uppercase block">Engine:</span>
            <span className="font-bold text-[#282828]">{data.engine}</span>
          </div>
          <div>
            <span className="text-[14px] text-[#787878] uppercase block">Transmission:</span>
            <span className="font-bold text-[#282828]">{data.transmission}</span>
          </div>
        </div>

        {/* MAIN EQUIPMENT & OPTIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          {/* LEFT COLUMN: STANDARD EQUIPMENT */}
          <div className="border border-[#D2D2D2] p-4 bg-[#FAFAFA] rounded">
            <h3 className="text-sm font-extrabold uppercase tracking-wider bg-[#282828] text-white px-2.5 py-1 mb-3 rounded-sm flex items-center justify-between">
              <span>STANDARD EQUIPMENT</span>
              <span className="text-[14px] text-[#F3C846] font-normal">INCLUDED AT NO EXTRA CHARGE</span>
            </h3>

            <div className="space-y-3 text-[14px] leading-snug">
              <div>
                <span className="font-bold text-[#282828] uppercase border-b border-[#D2D2D2] block pb-0.5 mb-1">
                  LUXURY & INTERIOR
                </span>
                <ul className="list-disc list-inside space-y-0.5 text-[#787878]">
                  <li>Full Semi-Aniline Leather Seating Surfaces</li>
                  <li>16-Way Power Driver & Front Passenger Seats</li>
                  <li>Heated & Ventilated Front Seats with Massage</li>
                  <li>Tri-Zone Automatic Climate Control</li>
                  <li>UltraView Power Panoramic Sunroof</li>
                </ul>
              </div>

              <div>
                <span className="font-bold text-[#282828] uppercase border-b border-[#D2D2D2] block pb-0.5 mb-1">
                  SAFETY & SECURITY
                </span>
                <ul className="list-disc list-inside space-y-0.5 text-[#787878]">
                  <li>Automatic Emergency Braking & Front Pedestrian</li>
                  <li>HD Surround Vision 360-Degree Camera</li>
                  <li>Lane Keep Assist with Lane Departure Warning</li>
                  <li>Enhanced Automatic Parking Assist</li>
                </ul>
              </div>

              <div>
                <span className="font-bold text-[#282828] uppercase border-b border-[#D2D2D2] block pb-0.5 mb-1">
                  CONNECTIVITY & TECHNOLOGY
                </span>
                <ul className="list-disc list-inside space-y-0.5 text-[#787878]">
                  <li>Curved OLED Glass Display / Infotainment</li>
                  <li>OnStar 4G LTE Wi-Fi Hotspot Capable</li>
                  <li>Wireless Apple CarPlay & Android Auto</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: OPTIONAL EQUIPMENT & PRICING */}
          <div className="border border-[#D2D2D2] p-4 bg-white rounded flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider bg-[#282828] text-white px-2.5 py-1 mb-3 rounded-sm">
                MANUFACTURER'S SUGGESTED RETAIL PRICE
              </h3>

              <div className="flex items-center justify-between text-sm font-bold text-[#282828] pb-2 border-b-2 border-[#282828] mb-3">
                <span>STANDARD VEHICLE PRICE:</span>
                <span className="font-mono text-sm">${data.baseMsrp.toLocaleString()}</span>
              </div>

              <div className="text-sm font-bold text-[#787878] uppercase mb-2">
                FACTORY INSTALLED OPTIONS:
              </div>

              <div className="space-y-2 text-sm mb-4">
                {data.options.map((opt, i) => (
                  <div key={i} className="flex items-center justify-between text-[14px] pb-1 border-b border-[#E5E5E7]">
                    <div>
                      <span className="font-mono font-bold text-[#FA0037] mr-1">[{opt.code || 'OPT'}]</span>
                      <span className="font-medium text-[#282828]">{opt.name}</span>
                    </div>
                    <span className="font-mono font-bold text-[#282828]">
                      {opt.price === 0 ? 'INCLUDED' : `$${opt.price.toLocaleString()}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* TOTAL MSRP BOX */}
            <div className="mt-4 pt-3 border-t-2 border-[#282828] bg-[#F7F7F8] p-3 rounded">
              <div className="flex items-center justify-between text-sm font-bold text-[#787878] mb-1">
                <span>TOTAL OPTIONS:</span>
                <span className="font-mono">
                  ${data.options.reduce((acc, curr) => acc + curr.price, 0).toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm font-bold text-[#787878] mb-2 pb-2 border-b border-[#D2D2D2]">
                <span>DESTINATION CHARGE:</span>
                <span className="font-mono">${data.destinationCharge.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-base font-extrabold text-[#282828] bg-white p-2 rounded border border-[#282828]">
                <span className="uppercase">TOTAL VEHICLE PRICE:</span>
                <span className="font-mono text-lg text-[#FA0037]">${data.totalMsrp.toLocaleString()}</span>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM EPA & SAFETY BOXES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t-2 border-[#282828]">
          
          {/* Box 1: EPA Fuel Economy */}
          <div className="border border-[#282828] p-3 rounded text-center bg-[#FAFAFA]">
            <div className="text-[14px] font-extrabold tracking-widest uppercase bg-[#282828] text-white py-0.5 mb-2 rounded-xs">
              EPA FUEL ECONOMY & ENVIRONMENT
            </div>

            {data.fuelEconomy.mpgeCombined ? (
              <div>
                <div className="text-2xl font-black font-mono text-[#2C28E8]">{data.fuelEconomy.mpgeCombined} MPGe</div>
                <div className="text-[14px] text-[#787878] font-bold">ALL-ELECTRIC ULTIUM VEHICLE</div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 text-center my-1">
                <div className="bg-white p-1.5 border border-[#D2D2D2] rounded">
                  <div className="text-lg font-black font-mono text-[#282828]">{data.fuelEconomy.mpgCity || 16}</div>
                  <div className="text-[14px] font-bold text-[#787878] uppercase">MPG CITY</div>
                </div>
                <div className="bg-white p-1.5 border border-[#D2D2D2] rounded">
                  <div className="text-lg font-black font-mono text-[#282828]">{data.fuelEconomy.mpgHighway || 22}</div>
                  <div className="text-[14px] font-bold text-[#787878] uppercase">MPG HWY</div>
                </div>
              </div>
            )}

            <div className="text-[14px] text-[#787878] mt-2 font-medium">
              Estimated Annual Fuel Cost: <span className="font-bold text-[#282828]">${data.fuelEconomy.annualFuelCost || 2800}</span>
            </div>
          </div>

          {/* Box 2: Government Safety Ratings */}
          <div className="border border-[#282828] p-3 rounded bg-[#FAFAFA]">
            <div className="text-[14px] font-extrabold tracking-widest uppercase bg-[#282828] text-white py-0.5 mb-2 rounded-xs text-center">
              GOVERNMENT 5-STAR SAFETY RATINGS
            </div>
            <div className="space-y-1 text-[14px] font-bold text-[#282828]">
              <div className="flex justify-between">
                <span>Overall Vehicle Score:</span>
                <span className="text-[#F3C846]">★★★★★ ({data.safetyRatings?.overall || 5}/5)</span>
              </div>
              <div className="flex justify-between text-[#787878]">
                <span>Frontal Crash:</span>
                <span className="text-[#282828]">★★★★★ Driver/Pass</span>
              </div>
              <div className="flex justify-between text-[#787878]">
                <span>Side Crash:</span>
                <span className="text-[#282828]">★★★★★ Front/Rear</span>
              </div>
            </div>
            <div className="text-[14px] text-[#787878] mt-2 text-center">
              Source: National Highway Traffic Safety Administration (NHTSA)
            </div>
          </div>

          {/* Box 3: VIN Barcode & QR Stamp */}
          <div className="border border-[#282828] p-3 rounded text-center bg-white flex flex-col items-center justify-between">
            <div className="text-[14px] font-bold uppercase text-[#787878]">
              OFFICIAL CADILLAC FACTORY RECORD
            </div>
            
            {/* Simulated VIN Barcode */}
            <div className="my-2 py-1 bg-[#282828] text-white px-3 font-mono text-sm font-bold tracking-widest rounded w-full">
              ||||| ||| ||||||| |||| |||||
            </div>

            <div className="text-[14px] font-mono text-[#282828] font-bold">
              {data.vin}
            </div>

            <div className="text-[14px] text-[#787878] flex items-center justify-center gap-1 mt-1">
              <CheckCircle2 className="w-3 h-3 text-[#2C28E8]" />
              Authentic Monroney Replication
            </div>
          </div>

        </div>

        {/* FOOTER DISCLAIMER */}
        <div className="mt-4 pt-2 border-t border-[#D2D2D2] text-[14px] text-[#787878] flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Recreated by CadillacWindowSticker.com • Based on Official General Motors Invoice Archives</span>
          <span>Federal Automobile Information Disclosure Act</span>
        </div>

      </div>

    </div>
  );
};
