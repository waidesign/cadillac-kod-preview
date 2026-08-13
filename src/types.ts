/**
 * Core type definitions for CadillacWindowSticker.com
 */

export type VehicleLookupType = 'vin' | 'plate' | 'ymm';

export interface CadillacOptionItem {
  code?: string; // RPO Code e.g. "UKL", "CXS"
  name: string;
  category: 'Safety' | 'Interior' | 'Exterior' | 'Performance' | 'Audio/Tech' | 'Package';
  price: number;
  description?: string;
  isStandard?: boolean;
}

export interface MonroneyStickerData {
  vin: string;
  year: number;
  make: 'Cadillac';
  model: string;
  trim: string;
  bodyStyle: string;
  engine: string;
  transmission: string;
  exteriorColor: string;
  interiorColor: string;
  paintCode: string;
  finalAssemblyPoint: string;
  shippingDealer: {
    name: string;
    city: string;
    state: string;
  };
  baseMsrp: number;
  options: CadillacOptionItem[];
  destinationCharge: number;
  totalMsrp: number;
  fuelEconomy: {
    mpgCity?: number;
    mpgHighway?: number;
    mpgCombined?: number;
    mpgeCombined?: number; // for EV like Lyriq / Celestiq / Escalade IQ
    annualFuelCost?: number;
  };
  safetyRatings?: {
    overall: number;
    frontierCrash: number;
    sideCrash: number;
    rollover: number;
  };
  warrantySummary: {
    bumperToBumper: string;
    powertrain: string;
    roadsideAssistance: string;
    courtesyTransportation: string;
  };
  recallsCount: number;
  buildDate?: string;
}

export interface CadillacModelInfo {
  id: string;
  name: string; // e.g. "Escalade", "Lyriq", "CT5"
  category: 'SUV' | 'Sedan' | 'EV' | 'V-Series' | 'Classic';
  yearsActive: string; // e.g. "1999 – 2026"
  description: string;
  baseMsrpRange: string;
  popularTrims: string[];
  popularOptions: string[];
  sampleVin: string;
  tagline: string;
  heroImage?: string;
  popularPaintCodes: { code: string; name: string }[];
}

export interface ToolPageMeta {
  slug: 'window-sticker' | 'build-sheet' | 'vin-decoder' | 'msrp-lookup' | 'options' | 'paint-code' | 'warranty' | 'recalls';
  title: string;
  subtitle: string;
  ctaText: string;
  badge: string;
  metaDescription: string;
  features: { iconName: string; title: string; description: string }[];
  steps: { number: number; title: string; description: string }[];
  korayFaqs: { question: string; leadAnswer: string; fullAnswer: string }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'vehicle-insights' | 'vehicle-history-report' | 'vin-lookup' | 'window-sticker';
  readTime: string;
  date: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  content: string; // Markdown or formatted text
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  subtext: string;
  perReportText: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  ctaLabel: string;
}
