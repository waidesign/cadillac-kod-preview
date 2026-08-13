import React, { useState } from 'react';
import { 
  Lock, 
  Mail, 
  User, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Zap, 
  Star, 
  ArrowRight, 
  Building2, 
  Car,
  AlertCircle,
  X,
  CalendarCheck,
  History
} from 'lucide-react';

interface AuthViewProps {
  initialMode?: 'login' | 'signup';
  onNavigate: (view: string) => void;
  onSuccess?: (userEmail: string) => void;
}

export const AuthView: React.FC<AuthViewProps> = ({
  initialMode = 'login',
  onNavigate,
  onSuccess
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [accountType, setAccountType] = useState<'individual' | 'dealer'>('individual');
  
  // Form States
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(true);

  // Status States
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  // Password strength calculation
  const getPasswordStrength = (pass: string) => {
    if (!pass) return { score: 0, label: '', color: 'bg-[#D2D2D2]' };
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;

    if (score <= 1) return { score: 25, label: 'Weak', color: 'bg-[#FA0037]' };
    if (score === 2 || score === 3) return { score: 65, label: 'Medium', color: 'bg-[#F3C846]' };
    return { score: 100, label: 'Strong', color: 'bg-[#16A34A]' };
  };

  const strength = getPasswordStrength(password);
  const passwordsMatch = confirmPassword.length > 0 && password === confirmPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    if (mode === 'signup') {
      if (!fullName.trim()) {
        setErrorMsg('Please enter your full name.');
        setIsLoading(false);
        return;
      }
      if (password !== confirmPassword) {
        setErrorMsg('Passwords do not match.');
        setIsLoading(false);
        return;
      }
      if (!agreeTerms) {
        setErrorMsg('Please accept the Terms of Service to create an account.');
        setIsLoading(false);
        return;
      }
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMsg(
        mode === 'login' 
          ? 'Successfully logged in! Redirecting...' 
          : 'Account created successfully! Welcome aboard.'
      );
      if (onSuccess) {
        onSuccess(email);
      }
      setTimeout(() => {
        onNavigate('home');
      }, 1200);
    }, 1000);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setResetSent(true);
    }, 800);
  };

  return (
    <div className="min-h-[calc(100vh-65px)] bg-[#F8F9FA] py-10 sm:py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto">
        
        {/* Container Card */}
        <div className="bg-white rounded-3xl border border-[#E5E5E7] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
          
          {/* LEFT PANEL: High-Craft Value Showcase */}
          <div className="lg:col-span-5 bg-[#1E1E24] text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden order-2 lg:order-1">
            {/* Ambient background glow elements */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#FA0037]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#2C28E8]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              {/* Dynamic Value Proposition Title */}
              <div className="space-y-3 pt-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {mode === 'login' 
                    ? 'Access Your Cadillac Window Sticker Dashboard' 
                    : 'Unlock Factory Accurate Monroney & Build Specs'}
                </h2>
                <p className="text-sm text-[#A0A0AB] leading-relaxed">
                  Join thousands of Cadillac owners, classic car collectors, and pre-owned GM dealerships nationwide.
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xs">
                  <div className="p-2 rounded-xl bg-[#FA0037]/20 text-[#FA0037] shrink-0 mt-0.5">
                    <CalendarCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">Up to 2026 Models Support</h4>
                    <p className="text-xs text-[#A0A0AB] mt-0.5 font-medium">Covers latest production schedules</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xs">
                  <div className="p-2 rounded-xl bg-[#FA0037]/20 text-[#FA0037] shrink-0 mt-0.5">
                    <History className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">Classic & Heritage Support</h4>
                    <p className="text-xs text-[#A0A0AB] mt-0.5 font-medium">Deep heritage chassis logs (1989+)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xs">
                  <div className="p-2 rounded-xl bg-[#FA0037]/20 text-[#FA0037] shrink-0 mt-0.5">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">NHTSA Safety Star Integrated</h4>
                    <p className="text-xs text-[#A0A0AB] mt-0.5 font-medium">Federal rating database synced</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xs">
                  <div className="p-2 rounded-xl bg-[#FA0037]/20 text-[#FA0037] shrink-0 mt-0.5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">Downloadable PDF</h4>
                    <p className="text-xs text-[#A0A0AB] mt-0.5 font-medium">High-resolution, vector replicas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Footer Badge */}
            <div className="relative z-10 pt-8 border-t border-white/10 mt-8">
              <div className="flex items-center gap-1 text-[#F3C846] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F3C846]" />
                ))}
              </div>
              <p className="text-xs text-[#D1D1D6] italic leading-relaxed">
                "Having the original factory window sticker helped me prove the full option list when selling my 2023 Escalade V-Series. Essential tool!"
              </p>
              <div className="mt-2 text-xs font-bold text-white">
                — Marcus B. <span className="text-[#A0A0AB] font-normal">• Verified Cadillac Collector</span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Modern Interactive Auth Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between bg-white order-1 lg:order-2">
            
            {/* Top Navigation & Mode Switcher */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E5E5E7] mb-8">
                {/* Segmented Switcher */}
                <div className="bg-[#F4F4F6] p-1.5 rounded-2xl flex items-center gap-1 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => { setMode('login'); setErrorMsg(''); setSuccessMsg(''); }}
                    className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-xl text-sm font-extrabold transition-all cursor-pointer ${
                      mode === 'login' 
                        ? 'bg-white text-[#282828] shadow-sm' 
                        : 'text-[#787878] hover:text-[#282828]'
                    }`}
                  >
                    Log In
                  </button>
                  <button
                    type="button"
                    onClick={() => { setMode('signup'); setErrorMsg(''); setSuccessMsg(''); }}
                    className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-xl text-sm font-extrabold transition-all cursor-pointer ${
                      mode === 'signup' 
                        ? 'bg-white text-[#282828] shadow-sm' 
                        : 'text-[#787878] hover:text-[#282828]'
                    }`}
                  >
                    Create Account
                  </button>
                </div>

                {/* Return Home Button */}
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#787878] hover:text-[#FA0037] transition-colors cursor-pointer"
                >
                  <span>Back to Home</span>
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Success / Error Notification Banners */}
              {errorMsg && (
                <div className="mb-6 p-4 rounded-2xl bg-[#FA0037]/10 border border-[#FA0037]/20 flex items-center gap-3 text-sm text-[#A00021] font-bold animate-in fade-in">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {successMsg && (
                <div className="mb-6 p-4 rounded-2xl bg-[#16A34A]/10 border border-[#16A34A]/20 flex items-center gap-3 text-sm text-[#15803D] font-bold animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>{successMsg}</span>
                </div>
              )}

              {/* Form Heading */}
              <div className="mb-6">
                <h3 className="text-2xl font-black text-[#282828]">
                  {mode === 'login' ? 'Welcome Back' : 'Create Your Free Account'}
                </h3>
                <p className="text-sm text-[#787878] mt-1">
                  {mode === 'login' 
                    ? 'Enter your credentials to access your saved VIN reports and credits.' 
                    : 'Fill out your information below to register your account.'}
                </p>
              </div>

              {/* FORM FIELDS */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Account Type Selector for Sign Up */}
                {mode === 'signup' && (
                  <div>
                    <label className="block text-xs font-bold text-[#787878] uppercase tracking-wider mb-2">
                      Account Persona
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setAccountType('individual')}
                        className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                          accountType === 'individual'
                            ? 'border-[#282828] bg-[#F8F9FA] shadow-xs'
                            : 'border-[#E5E5E7] hover:border-[#D2D2D2]'
                        }`}
                      >
                        <Car className={`w-5 h-5 ${accountType === 'individual' ? 'text-[#FA0037]' : 'text-[#787878]'}`} />
                        <div>
                          <div className="text-xs font-extrabold text-[#282828]">Individual Owner</div>
                          <div className="text-[11px] text-[#787878]">Personal Cadillac lookup</div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setAccountType('dealer')}
                        className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                          accountType === 'dealer'
                            ? 'border-[#282828] bg-[#F8F9FA] shadow-xs'
                            : 'border-[#E5E5E7] hover:border-[#D2D2D2]'
                        }`}
                      >
                        <Building2 className={`w-5 h-5 ${accountType === 'dealer' ? 'text-[#2C28E8]' : 'text-[#787878]'}`} />
                        <div>
                          <div className="text-xs font-extrabold text-[#282828]">Dealer / Collector</div>
                          <div className="text-[11px] text-[#787878]">Multi-VIN volume usage</div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}

                {/* Full Name field for Sign Up */}
                {mode === 'signup' && (
                  <div>
                    <label className="block text-xs font-bold text-[#282828] uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#787878]">
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Jane Doe"
                        className="w-full bg-[#F8F9FA] border border-[#E5E5E7] focus:border-[#282828] focus:bg-white focus:outline-none rounded-2xl pl-11 pr-4 py-3.5 text-sm font-bold text-[#282828] transition-all"
                      />
                    </div>
                  </div>
                )}

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-[#282828] uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#787878]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full bg-[#F8F9FA] border border-[#E5E5E7] focus:border-[#282828] focus:bg-white focus:outline-none rounded-2xl pl-11 pr-4 py-3.5 text-sm font-bold text-[#282828] transition-all"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-[#282828] uppercase tracking-wider">
                      Password
                    </label>
                    {mode === 'login' && (
                      <button
                        type="button"
                        onClick={() => setShowForgotPassword(true)}
                        className="text-xs font-bold text-[#FA0037] hover:underline cursor-pointer"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#787878]">
                      <Lock className="w-5 h-5" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-[#F8F9FA] border border-[#E5E5E7] focus:border-[#282828] focus:bg-white focus:outline-none rounded-2xl pl-11 pr-11 py-3.5 text-sm font-bold text-[#282828] transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#787878] hover:text-[#282828] transition-colors cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Password Strength Meter for Signup */}
                  {mode === 'signup' && password.length > 0 && (
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-bold text-[#787878]">
                        <span>Password Strength:</span>
                        <span className={strength.label === 'Strong' ? 'text-[#16A34A]' : strength.label === 'Medium' ? 'text-[#D97706]' : 'text-[#FA0037]'}>
                          {strength.label}
                        </span>
                      </div>
                      <div className="w-full bg-[#E5E5E7] h-1.5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-300 ${strength.color}`} 
                          style={{ width: `${strength.score}%` }} 
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Confirm Password field for Sign Up */}
                {mode === 'signup' && (
                  <div>
                    <label className="block text-xs font-bold text-[#282828] uppercase tracking-wider mb-1.5">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#787878]">
                        <Lock className="w-5 h-5" />
                      </div>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-[#F8F9FA] border border-[#E5E5E7] focus:border-[#282828] focus:bg-white focus:outline-none rounded-2xl pl-11 pr-11 py-3.5 text-sm font-bold text-[#282828] transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#787878] hover:text-[#282828] transition-colors cursor-pointer"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>

                    {confirmPassword.length > 0 && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-xs font-bold">
                        {passwordsMatch ? (
                          <span className="text-[#16A34A] flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Passwords match
                          </span>
                        ) : (
                          <span className="text-[#FA0037]">Passwords do not match</span>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Remember Me Checkbox for Login */}
                {mode === 'login' && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 rounded border-[#D2D2D2] text-[#FA0037] focus:ring-[#FA0037] accent-[#FA0037]"
                      />
                      <span className="text-xs font-bold text-[#505050]">Remember me on this device</span>
                    </label>
                  </div>
                )}

                {/* Terms Agreement Checkbox for Sign Up */}
                {mode === 'signup' && (
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="w-4 h-4 mt-0.5 rounded border-[#D2D2D2] text-[#FA0037] focus:ring-[#FA0037] accent-[#FA0037]"
                    />
                    <label htmlFor="terms" className="text-xs text-[#787878] leading-snug cursor-pointer">
                      I agree to the <button type="button" onClick={() => onNavigate('privacy')} className="text-[#282828] font-bold hover:underline">Privacy Policy</button> and <button type="button" onClick={() => onNavigate('refund')} className="text-[#282828] font-bold hover:underline">Terms of Service</button>.
                    </label>
                  </div>
                )}

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#FA0037] hover:bg-[#C8002B] active:bg-[#A00021] text-white text-base font-extrabold py-4 rounded-2xl shadow-lg shadow-[#FA0037]/25 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group disabled:opacity-60"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{mode === 'login' ? 'Log In To Dashboard' : 'Create Account'}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

              </form>
            </div>

            {/* Bottom Footer Switch Prompt */}
            <div className="pt-8 border-t border-[#E5E5E7] mt-8 text-center">
              {mode === 'login' ? (
                <p className="text-sm text-[#787878] font-medium">
                  Don't have an account yet?{' '}
                  <button
                    type="button"
                    onClick={() => { setMode('signup'); setErrorMsg(''); setSuccessMsg(''); }}
                    className="font-extrabold text-[#FA0037] hover:underline cursor-pointer ml-1"
                  >
                    Sign Up Free
                  </button>
                </p>
              ) : (
                <p className="text-sm text-[#787878] font-medium">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => { setMode('login'); setErrorMsg(''); setSuccessMsg(''); }}
                    className="font-extrabold text-[#FA0037] hover:underline cursor-pointer ml-1"
                  >
                    Log In
                  </button>
                </p>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* FORGOT PASSWORD MODAL */}
      {showForgotPassword && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-[#D2D2D2] relative">
            <button
              onClick={() => { setShowForgotPassword(false); setResetSent(false); }}
              className="absolute top-5 right-5 p-2 text-[#787878] hover:text-[#282828] rounded-xl hover:bg-[#F8F9FA] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!resetSent ? (
              <div className="space-y-5">
                <div>
                  <div className="w-12 h-12 bg-[#FA0037]/10 text-[#FA0037] rounded-2xl flex items-center justify-center mb-3">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-[#282828]">Reset Your Password</h3>
                  <p className="text-xs text-[#787878] mt-1">
                    Enter the email address registered with your Cadillac Window Sticker account.
                  </p>
                </div>

                <form onSubmit={handleForgotPassword} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#282828] uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      placeholder="owner@domain.com"
                      className="w-full bg-[#F8F9FA] border border-[#E5E5E7] focus:border-[#282828] focus:bg-white focus:outline-none rounded-2xl px-4 py-3.5 text-sm font-bold text-[#282828]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#282828] hover:bg-black text-white text-sm font-extrabold py-3.5 rounded-2xl transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isLoading ? 'Sending Link...' : 'Send Password Reset Link'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center space-y-4 py-4">
                <div className="w-14 h-14 bg-[#16A34A]/10 text-[#16A34A] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-[#282828]">Reset Link Sent</h3>
                <p className="text-xs text-[#787878] leading-relaxed">
                  We've sent a password reset link to <strong className="text-[#282828]">{resetEmail}</strong>. Please check your inbox or spam folder.
                </p>
                <button
                  type="button"
                  onClick={() => { setShowForgotPassword(false); setResetSent(false); }}
                  className="w-full bg-[#F8F9FA] hover:bg-[#EAEAEA] text-[#282828] text-xs font-extrabold py-3 rounded-xl transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
