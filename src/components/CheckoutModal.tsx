import React, { useState } from 'react';
import { X, ShieldCheck, Lock, CheckCircle, CreditCard, Sparkles, Mail } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  vin: string;
  planId?: string;
  onClose: () => void;
  onCompletePurchase: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  vin,
  planId = 'single',
  onClose,
  onCompletePurchase
}) => {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onCompletePurchase();
      }, 1200);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#D2D2D2] relative">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#787878] hover:text-[#282828] bg-[#F7F7F8] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#FA0037]/10 text-[#FA0037] flex items-center justify-center font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#282828]">Unlock Official Cadillac Report</h3>
                <p className="text-sm text-[#787878] font-mono">VIN: {vin || '1GYS4HKJ8R1089241'}</p>
              </div>
            </div>

            <div className="bg-[#F7F7F8] border border-[#D2D2D2] rounded-xl p-4 mb-5 text-sm text-[#282828] space-y-2">
              <div className="flex justify-between font-bold">
                <span>Selected Package:</span>
                <span className="text-[#FA0037]">
                  {planId === 'multipack' ? '5-Report Multi-Pack ($39.99)' : planId === 'unlimited' ? 'Unlimited Monthly ($29.99/mo)' : 'Single Window Sticker ($14.99)'}
                </span>
              </div>
              <div className="flex justify-between text-[#787878]">
                <span>Document Format:</span>
                <span>High-Res PDF + Email Delivery</span>
              </div>
              <div className="flex justify-between text-[#787878]">
                <span>Guarantee:</span>
                <span className="text-[#A00021] font-semibold">100% Money-Back</span>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-[#282828] mb-1 uppercase">
                  Email Address for PDF Delivery
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#787878]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. owner@cadillac-enthusiast.com"
                    className="w-full bg-[#FAFAFA] border border-[#D2D2D2] rounded-xl pl-9 pr-4 py-3 text-sm font-bold text-[#282828] focus:bg-white focus:border-[#2C28E8]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#282828] mb-1 uppercase">
                  Payment Details (SSL Secured)
                </label>
                <div className="relative">
                  <CreditCard className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#787878]" />
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full bg-[#FAFAFA] border border-[#D2D2D2] rounded-xl pl-9 pr-4 py-3 text-sm font-mono font-bold text-[#282828] focus:bg-white focus:border-[#2C28E8]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#FA0037] hover:bg-[#C8002B] active:bg-[#A00021] text-white font-extrabold text-sm py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Accessing GM Invoice Archives...
                  </span>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Pay {planId === 'multipack' ? '$39.99' : planId === 'unlimited' ? '$29.99' : '$14.99'} & Download PDF</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 text-[14px] text-[#787878] text-center flex items-center justify-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2C28E8]" />
              <span>256-Bit Bank Level Encryption • Instant PDF Download</span>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 bg-[#2C28E8] text-white rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-[#282828]">Report Unlocked Successfully!</h3>
            <p className="text-sm text-[#787878]">Generating official Cadillac Monroney PDF for VIN: {vin}</p>
          </div>
        )}

      </div>
    </div>
  );
};
