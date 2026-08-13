import React, { useState, lazy, Suspense } from 'react';
import { Agentation } from 'agentation';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LookupCard } from './components/LookupCard';
import { TrustStrip } from './components/TrustStrip';
import { StepTracker } from './components/StepTracker';
import { FeatureGrid } from './components/FeatureGrid';
import { WhatIsWindowStickerSection } from './components/WhatIsWindowStickerSection';
import { UsedBuyerBewareSection } from './components/UsedBuyerBewareSection';
import { StickerRevealsSection } from './components/StickerRevealsSection';
import { WhereToFindVinSection } from './components/WhereToFindVinSection';
import { HowToGetStickerSection } from './components/HowToGetStickerSection';
import { EssentialForAudiencesSection } from './components/EssentialForAudiencesSection';
import { WhatMakesUsStandOutSection } from './components/WhatMakesUsStandOutSection';
import { HiddenOptionsSection } from './components/HiddenOptionsSection';
import { JamesSellerStorySection } from './components/JamesSellerStorySection';
import { SpecificVinToolsSection } from './components/SpecificVinToolsSection';
import { EveryModelStickersSection } from './components/EveryModelStickersSection';
import { GetYourStickerTodaySection } from './components/GetYourStickerTodaySection';
import { CadillacArticlesSection } from './components/CadillacArticlesSection';
import { KorayFaqSection } from './components/KorayFaqSection';

// Lazy load non-critical components to improve initial bundle size and performance
const MonroneySticker = lazy(() => import('./components/MonroneySticker').then(m => ({ default: m.MonroneySticker })));
const PricingSection = lazy(() => import('./components/PricingSection').then(m => ({ default: m.PricingSection })));
const ModelGrid = lazy(() => import('./components/ModelGrid').then(m => ({ default: m.ModelGrid })));
const ModelDetailView = lazy(() => import('./components/ModelDetailView').then(m => ({ default: m.ModelDetailView })));
const ToolDetailView = lazy(() => import('./components/ToolDetailView').then(m => ({ default: m.ToolDetailView })));
const BlogView = lazy(() => import('./components/BlogView').then(m => ({ default: m.BlogView })));
const ArticleView = lazy(() => import('./components/ArticleView').then(m => ({ default: m.ArticleView })));
const LegalViews = lazy(() => import('./components/LegalViews').then(m => ({ default: m.LegalViews })));
const AuthView = lazy(() => import('./components/AuthView').then(m => ({ default: m.AuthView })));
const VinFinderModal = lazy(() => import('./components/VinFinderModal').then(m => ({ default: m.VinFinderModal })));
const CheckoutModal = lazy(() => import('./components/CheckoutModal').then(m => ({ default: m.CheckoutModal })));

import { CADILLAC_MODELS } from './data/cadillacModels';
import { TOOLS_DATA } from './data/toolsData';
import { BLOG_POSTS } from './data/blogData';
import { SAMPLE_CADILLAC_STICKERS, generateCadillacStickerFromVin } from './data/sampleVinDatabase';
import { CadillacModelInfo, BlogPost, MonroneyStickerData } from './types';

import { ShieldCheck, FileText, ArrowRight, Award, Sparkles, CheckCircle2, CalendarCheck, History, Star } from 'lucide-react';
import SampleStickerImage from './assets/images/1GYS4DEF2ER221260.webp';

export default function App() {
  // Read initial URL search params if present
  const getUrlParams = () => {
    try {
      return new URLSearchParams(window.location.search);
    } catch {
      return new URLSearchParams();
    }
  };

  const initialParams = getUrlParams();
  const initialVinFromUrl = initialParams.get('vin')?.trim().toUpperCase();
  const initialViewFromUrl = initialParams.get('view');

  const [currentView, setCurrentView] = useState<string>(initialViewFromUrl || 'home');
  const [selectedModel, setSelectedModel] = useState<CadillacModelInfo | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeVin, setActiveVin] = useState<string>(initialVinFromUrl || '1GYS4HKJ8R1089241');
  const [currentStickerData, setCurrentStickerData] = useState<MonroneyStickerData>(
    initialVinFromUrl ? generateCadillacStickerFromVin(initialVinFromUrl) : SAMPLE_CADILLAC_STICKERS['1GYS4HKJ8R1089241']
  );
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);

  // Modals
  const [isVinHelpOpen, setIsVinHelpOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('single');

  // Navigation Handler
  const handleNavigate = (view: string, param?: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(view);

    // Clear URL query parameters when navigating internally
    if (window.location.search) {
      window.history.pushState({}, '', window.location.pathname);
    }

    if (view.startsWith('model-')) {
      const modelId = view.replace('model-', '');
      const found = CADILLAC_MODELS.find(m => m.id === modelId);
      if (found) setSelectedModel(found);
    } else if (view.startsWith('post-')) {
      const postId = view.replace('post-', '');
      const found = BLOG_POSTS.find(p => p.id === postId);
      if (found) setSelectedPost(found);
    }
  };

  // VIN Search Handler - Opens preview in a new browser tab
  const handleSearchVin = (vin: string) => {
    const clean = vin.trim().toUpperCase();
    setActiveVin(clean);
    const generatedData = generateCadillacStickerFromVin(clean);
    setCurrentStickerData(generatedData);
    setIsUnlocked(false);

    // Build preview URL for new browser tab
    const previewUrl = `${window.location.origin}${window.location.pathname}?vin=${encodeURIComponent(clean)}&view=sticker-view`;

    // Open preview in a new browser tab
    const newTab = window.open(previewUrl, '_blank');
    if (!newTab) {
      // Fallback if browser popup blocker prevents new tab
      setCurrentView('sticker-view');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenCheckout = (vinToUnlock?: string, planId: string = 'single') => {
    if (vinToUnlock) setActiveVin(vinToUnlock);
    setSelectedPlanId(planId);
    setIsCheckoutOpen(true);
  };

  const handleCompletePurchase = () => {
    setIsUnlocked(true);
    setIsCheckoutOpen(false);
  };

  // Sample Sticker for Homepage Hero Right Side
  const heroSampleData = SAMPLE_CADILLAC_STICKERS['1GYS4HKJ8R1089241'];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#282828] selection:bg-[#FA0037] selection:text-white">
      
      {/* Sticky Top Header */}
      <Header
        currentTab={currentView}
        onNavigate={handleNavigate}
        onOpenLookup={(vin) => {
          if (vin) handleSearchVin(vin);
          else handleNavigate('home');
        }}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-grow">
        <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh]"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FA0037]"></div></div>}>
        
        {/* VIEW 1: HOME PAGE */}
        {currentView === 'home' && (
          <div>
            
            {/* HERO SECTION: Two-Column Layout */}
            <section className="pt-8 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAFAFA] via-white to-white">
              <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                {/* Left Column: H1 + Subhead + Lookup Card */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-sm font-extrabold uppercase rounded-full border border-emerald-200 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    12,400+ stickers decoded today
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#282828] tracking-tight leading-[1.08]">
                    Cadillac Window Sticker <br className="hidden sm:inline" />
                    <span className="text-[#FA0037]">by VIN Number</span>
                  </h1>

                  <p className="text-sm sm:text-base text-[#787878] leading-relaxed max-w-xl font-medium">
                    Recreate the official factory Monroney window sticker and build sheet for any 1953–2026 Cadillac vehicle in seconds. Original MSRP, option codes, paint codes, and standard equipment.
                  </p>

                  <LookupCard
                    ctaText="Get Window Sticker"
                    badge="INSTANT MONRONEY LOOKUP"
                    onSearch={handleSearchVin}
                    onOpenVinHelp={() => setIsVinHelpOpen(true)}
                  />
                </div>

                {/* Right Column: Sample Sticker Image Placeholder */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
                  <a 
                    href="https://app.cadillacwindowsticker.com/sticker/vin/1GYS4DEF2ER221260-BBE5BBE5-1D1D-A995-16A4-0382A3F6A785"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full max-w-2xl bg-[#F4F4F6] border-2 border-[#282828] rounded-2xl shadow-2xl overflow-hidden transform lg:rotate-1 hover:rotate-0 hover:border-[#FA0037] transition-all duration-300 group cursor-pointer block"
                  >
                    <img 
                      src={SampleStickerImage} 
                      alt="Cadillac Window Sticker Sample" 
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                    />
                  </a>

                  {/* View Sample Window Sticker Link */}
                  <div className="flex items-center justify-center pt-5">
                    <a
                      href="https://app.cadillacwindowsticker.com/sticker/vin/1GYS4DEF2ER221260-BBE5BBE5-1D1D-A995-16A4-0382A3F6A785"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-base font-bold text-[#2C28E8] hover:text-[#211FAB] hover:underline transition-colors cursor-pointer"
                    >
                      <span>View Sample Window Sticker →</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Hero Facts Grid */}
              <div className="max-w-[1440px] mx-auto mt-10 pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl border border-[#E5E5E7] shadow-xs flex items-start gap-3">
                  <div className="p-2 bg-[#FA0037]/10 text-[#A00021] rounded-lg shrink-0">
                    <CalendarCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#282828] uppercase tracking-wide">Up to 2026 Models Support</h4>
                    <p className="text-sm text-[#787878] mt-0.5 font-medium">Covers latest production schedules</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E5E5E7] shadow-xs flex items-start gap-3">
                  <div className="p-2 bg-[#FA0037]/10 text-[#A00021] rounded-lg shrink-0">
                    <History className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#282828] uppercase tracking-wide">Classic &amp; Heritage Support</h4>
                    <p className="text-sm text-[#787878] mt-0.5 font-medium">Deep heritage chassis logs (1989+)</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E5E5E7] shadow-xs flex items-start gap-3">
                  <div className="p-2 bg-[#FA0037]/10 text-[#A00021] rounded-lg shrink-0">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#282828] uppercase tracking-wide">NHTSA Safety Star Integrated</h4>
                    <p className="text-sm text-[#787878] mt-0.5 font-medium">Federal rating database synced</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E5E5E7] shadow-xs flex items-start gap-3">
                  <div className="p-2 bg-[#FA0037]/10 text-[#A00021] rounded-lg shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M8 12h1.2a1.4 1.4 0 0 0 0-2.8H8v4.8" />
                      <path d="M12 9.2v4.8h1.2a2.4 2.4 0 0 0 0-4.8H12" />
                      <path d="M16 9.2h2.5" />
                      <path d="M16 11.6h1.8" />
                      <path d="M16 9.2v4.8" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#282828] uppercase tracking-wide">Downloadable PDF</h4>
                    <p className="text-sm text-[#787878] mt-0.5 font-medium">High-resolution, vector replicas</p>
                  </div>
                </div>
              </div>
            </section>

            {/* WHAT IS A CADILLAC WINDOW STICKER SECTION */}
            <WhatIsWindowStickerSection onOpenLookup={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

            {/* USED CADILLAC BUYERS BEWARE SECTION */}
            <UsedBuyerBewareSection />

            {/* EVERYTHING YOUR CADILLAC WINDOW STICKER REVEALS SECTION */}
            <StickerRevealsSection />

            {/* WHERE TO FIND YOUR CADILLAC VIN SECTION */}
            <WhereToFindVinSection />

            {/* HOW TO GET YOUR CADILLAC WINDOW STICKER BY VIN SECTION */}
            <HowToGetStickerSection />

            {/* CADILLAC WINDOW STICKER LOOKUP - ESSENTIAL FOR AUDIENCES SECTION */}
            <EssentialForAudiencesSection />

            {/* WHAT MAKES OUR CADILLAC WINDOW STICKERS STAND OUT SECTION */}
            <WhatMakesUsStandOutSection />

            {/* HOW CAN YOU TELL IF A CADILLAC HAS $10,000+ IN HIDDEN OPTIONS SECTION */}
            <HiddenOptionsSection />

            {/* REAL SELLER STORY: JAMES 2019 CADILLAC XT4 SECTION */}
            <JamesSellerStorySection />

            {/* TRY SPECIFIC VIN TOOL FOR YOUR NEEDS SECTION */}
            <SpecificVinToolsSection />

            {/* WINDOW STICKERS AVAILABLE FOR EVERY CADILLAC MODEL SECTION */}
            <EveryModelStickersSection />

            {/* GET YOUR CADILLAC'S ORIGINAL WINDOW STICKER TODAY SECTION */}
            <GetYourStickerTodaySection />

            {/* READ MORE CADILLAC ARTICLES & GUIDES SECTION */}
            <CadillacArticlesSection onNavigate={handleNavigate} />






            {/* KORAY FAQ SECTION */}
            <KorayFaqSection 
              faqs={TOOLS_DATA['window-sticker'].korayFaqs}
              title="Cadillac Window Sticker FAQ"
            />

          </div>
        )}

        {/* VIEW 2: SINGLE STICKER RESULT VIEW */}
        {currentView === 'sticker-view' && (
          <div className="py-10 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
            <div className="max-w-5xl mx-auto space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#D2D2D2] pb-4">
                <button 
                  onClick={() => handleNavigate('home')}
                  className="text-sm font-bold text-[#282828] hover:text-[#FA0037] flex items-center gap-1"
                >
                  ← Return to Home Lookup
                </button>
                <div className="text-sm font-bold text-[#A00021]">
                  Official Recreated Monroney Label
                </div>
              </div>

              <MonroneySticker
                data={currentStickerData}
                isUnlocked={isUnlocked}
                onUnlock={() => handleOpenCheckout(currentStickerData.vin)}
              />

            </div>
          </div>
        )}

        {/* VIEW 3: TOOL DETAIL PAGES */}
        {currentView.startsWith('tool-') && (
          <ToolDetailView
            tool={TOOLS_DATA[currentView.replace('tool-', '')] || TOOLS_DATA['window-sticker']}
            onBack={() => handleNavigate('home')}
            onSearchVin={handleSearchVin}
            onOpenVinHelp={() => setIsVinHelpOpen(true)}
          />
        )}

        {/* VIEW 4: MODEL CATALOG & MODEL DETAIL */}
        {currentView === 'models' && (
          <ModelGrid
            onSelectModel={(m) => { setSelectedModel(m); setCurrentView(`model-${m.id}`); }}
            onSearchVin={handleSearchVin}
          />
        )}

        {currentView.startsWith('model-') && selectedModel && (
          <ModelDetailView
            model={selectedModel}
            onBack={() => handleNavigate('models')}
            onSearchVin={handleSearchVin}
            onOpenVinHelp={() => setIsVinHelpOpen(true)}
            onOpenCheckout={(vin) => handleOpenCheckout(vin)}
          />
        )}

        {/* VIEW 5: PRICING VIEW */}
        {currentView === 'pricing' && (
          <PricingSection onSelectPlan={(planId) => handleOpenCheckout(activeVin, planId)} />
        )}

        {/* VIEW 6: BLOG HUB & ARTICLES */}
        {currentView === 'blog' && (
          <BlogView
            onSelectPost={(post) => { setSelectedPost(post); setCurrentView(`post-${post.id}`); }}
            onBack={() => handleNavigate('home')}
          />
        )}

        {currentView.startsWith('post-') && selectedPost && (
          <ArticleView
            post={selectedPost}
            onBack={() => handleNavigate('blog')}
            onOpenLookup={() => handleNavigate('home')}
          />
        )}

        {/* VIEW 7: AUTHENTICATION VIEWS (LOGIN & SIGNUP) */}
        {['login', 'signup'].includes(currentView) && (
          <AuthView
            initialMode={currentView === 'signup' ? 'signup' : 'login'}
            onNavigate={handleNavigate}
          />
        )}

        {/* VIEW 8: LEGAL & SUPPORT VIEWS */}
        {['about', 'contact', 'refund', 'privacy'].includes(currentView) && (
          <LegalViews
            type={currentView as any}
            onNavigate={handleNavigate}
            onOpenLookup={() => handleNavigate('home')}
          />
        )}

        </Suspense>
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals */}
      <VinFinderModal
        isOpen={isVinHelpOpen}
        onClose={() => setIsVinHelpOpen(false)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        vin={activeVin}
        planId={selectedPlanId}
        onClose={() => setIsCheckoutOpen(false)}
        onCompletePurchase={handleCompletePurchase}
      />

      {process.env.NODE_ENV === "development" && <Agentation />}
    </div>
  );
}
