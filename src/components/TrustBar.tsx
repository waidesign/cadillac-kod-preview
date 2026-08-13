import React from 'react';

export const TrustBar: React.FC = () => {
  return (
    <div className="bg-[#F7F7F8] py-4 my-8 border-y border-[#E5E5E7]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
          
          <div className="flex flex-col justify-center">
            <div className="text-sm font-extrabold text-[#282828] uppercase tracking-wide">Instant Delivery</div>
            <div className="text-[14px] text-[#787878]">High-Res PDF in under 10 seconds</div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-sm font-extrabold text-[#282828] uppercase tracking-wide">Secure Checkout</div>
            <div className="text-[14px] text-[#787878]">256-Bit SSL Encrypted</div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-sm font-extrabold text-[#282828] uppercase tracking-wide">100% Money-Back</div>
            <div className="text-[14px] text-[#787878]">Full refund if record not found</div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-sm font-extrabold text-[#282828] uppercase tracking-wide">1953 – 2026 Models</div>
            <div className="text-[14px] text-[#787878]">Classic & Modern Coverage</div>
          </div>

        </div>
      </div>
    </div>
  );
};

