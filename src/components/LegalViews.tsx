import React, { useState } from 'react';
import { ShieldCheck, Mail, RefreshCw, FileText, Lock, Building, HelpCircle, CheckCircle, ChevronDown } from 'lucide-react';

interface LegalViewProps {
  type: 'about' | 'contact' | 'refund' | 'privacy';
  onNavigate: (view: string) => void;
  onOpenLookup: () => void;
}

export const LegalViews: React.FC<LegalViewProps> = ({ type, onNavigate, onOpenLookup }) => {
  const [contactSubject, setContactSubject] = useState('VIN Lookup Inquiry');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (type === 'about') {
    return (
      <div className="py-12 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center">
            <span className="text-[14px] font-extrabold tracking-widest text-[#A00021] uppercase block mb-1">
              ABOUT CADILLACWINDOWSTICKER.COM
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#282828]">
              Preserving American Automotive History
            </h1>
            <p className="text-sm text-[#787878] mt-2 max-w-2xl mx-auto">
              Dedicated to restoring complete transparency for Cadillac owners, buyers, dealers, and collectors worldwide.
            </p>
          </div>

          <div className="bg-[#F7F7F8] border border-[#D2D2D2] rounded-2xl p-6 sm:p-8 space-y-4 text-sm sm:text-sm text-[#282828] leading-relaxed">
            <h3 className="text-base font-extrabold text-[#282828] flex items-center gap-2">
              <Building className="w-5 h-5 text-[#FA0037]" />
              Our Mission & Data Heritage
            </h3>
            <p>
              Founded by automotive historians and software engineers, CadillacWindowSticker.com maintains the premier independent archive of General Motors invoice logs, Monroney label templates, and Regular Production Option (RPO) build codes covering 1953 through 2026 model years.
            </p>
            <p>
              When a vehicle leaves the dealership, paper window stickers are almost always discarded or lost. We bridge this historical gap by allowing owners to recreate high-resolution, printable Monroney labels that display exact original base MSRP, itemized package costs, exterior paint formulas, and shipping dealer records.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-[#D2D2D2]">
              <div className="text-2xl font-black text-[#282828] font-mono">1,250,000+</div>
              <div className="text-sm font-bold text-[#787878] mt-1">Stickers Recreated</div>
            </div>
            <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-[#D2D2D2]">
              <div className="text-2xl font-black text-[#FA0037] font-mono">1953 – 2026</div>
              <div className="text-sm font-bold text-[#787878] mt-1">Model Coverage</div>
            </div>
            <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-[#D2D2D2]">
              <div className="text-2xl font-black text-[#2C28E8] font-mono">100%</div>
              <div className="text-sm font-bold text-[#787878] mt-1">Accuracy Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'contact') {
    return (
      <div className="py-12 bg-white min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center">
            <span className="text-[14px] font-extrabold tracking-widest text-[#A00021] uppercase block mb-1">
              SUPPORT & INQUIRIES
            </span>
            <h1 className="text-3xl font-extrabold text-[#282828]">Contact Our Specialist Team</h1>
            <p className="text-sm text-[#787878] mt-1">
              Need assistance with a VIN lookup or bulk dealer license? We reply within 2 hours.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-[#F7F7F8] border border-[#D2D2D2] rounded-2xl p-6 sm:p-8 space-y-4">
              <div>
                <label className="block text-sm font-bold text-[#282828] mb-1 uppercase">Your Email</label>
                <input 
                  type="email" 
                  required 
                  value={contactEmail} 
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full bg-white border border-[#D2D2D2] rounded-xl px-4 py-3 text-sm font-bold text-[#282828]"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#282828] mb-1 uppercase">Subject</label>
                <div className="relative">
                  <select 
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    className="w-full bg-white border border-[#D2D2D2] rounded-xl pl-4 pr-10 py-3 text-sm font-bold text-[#282828] appearance-none cursor-pointer"
                  >
                    <option value="VIN Lookup Inquiry">VIN Lookup Inquiry</option>
                    <option value="Refund Request">Refund Request</option>
                    <option value="Dealer Commercial Plan">Dealer Commercial Account</option>
                    <option value="Report Correction">Report Data Correction</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#787878] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#282828] mb-1 uppercase">Message / VIN Details</label>
                <textarea 
                  rows={4}
                  required
                  value={contactMsg}
                  onChange={(e) => setContactMsg(e.target.value)}
                  placeholder="Include your 17-digit VIN if applicable..."
                  className="w-full bg-white border border-[#D2D2D2] rounded-xl p-4 text-sm font-bold text-[#282828]"
                />
              </div>

              <button type="submit" className="w-full bg-[#FA0037] hover:bg-[#C8002B] text-white font-extrabold text-sm py-3.5 rounded-xl transition-colors">
                Send Inquiry
              </button>
            </form>
          ) : (
            <div className="bg-[#F7F7F8] border border-[#D2D2D2] rounded-2xl p-8 text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-[#2C28E8] mx-auto" />
              <h3 className="text-lg font-extrabold text-[#282828]">Message Received!</h3>
              <p className="text-sm text-[#787878]">Our automotive records team will review your inquiry and respond shortly.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (type === 'refund') {
    return (
      <div className="py-12 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center">
            <span className="text-[14px] font-extrabold tracking-widest text-[#A00021] uppercase block mb-1">
              ZERO-RISK GUARANTEE
            </span>
            <h1 className="text-3xl font-extrabold text-[#282828]">Refund & Accuracy Policy</h1>
          </div>

          <div className="bg-[#F7F7F8] border border-[#D2D2D2] rounded-2xl p-6 space-y-4 text-sm sm:text-sm text-[#282828]">
            <h3 className="text-base font-extrabold text-[#282828]">Our 100% Money-Back Promise</h3>
            <p>
              We stand behind the accuracy of our Cadillac Monroney window stickers and build reports. If our system fails to locate factory records for your VIN, or if there is a fundamental mismatch in model specifications, we will issue a full 100% refund immediately upon request.
            </p>

            <h4 className="font-extrabold text-[#282828]">How to Request a Refund:</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm text-[#787878]">
              <li>Contact our support team with your order email and 17-digit VIN.</li>
              <li>Specify the reason for the refund request.</li>
              <li>Our team will process your refund back to your original payment method within 1 business day.</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-3xl font-extrabold text-[#282828]">Privacy Policy</h1>
        <div className="text-sm text-[#787878] space-y-4 leading-relaxed">
          <p>
            At CadillacWindowSticker.com, we respect your privacy. Vehicle Identification Numbers (VINs) queried on our site are matched against public and authorized GM invoice databases solely to generate your requested window sticker or build report.
          </p>
          <p>
            We do not sell personal owner information to third-party marketers or data brokers. All payment transactions are encrypted via 256-Bit SSL protocols.
          </p>
        </div>
      </div>
    </div>
  );
};
