import { CadillacModelInfo } from '../types';

export const CADILLAC_MODELS: CadillacModelInfo[] = [
  {
    id: 'escalade',
    name: 'Escalade',
    category: 'SUV',
    yearsActive: '1999 – 2026',
    description: 'The flagship full-size luxury SUV defining American presence, advanced technology, and high-capacity towing.',
    baseMsrpRange: '$83,895 – $152,295',
    popularTrims: ['Luxury', 'Premium Luxury', 'Sport', 'Platinum', 'V-Series'],
    popularOptions: ['Super Cruise Hands-Free Driving', 'AKG Studio Reference 36-Speaker Audio', 'Onyx Package', 'Air Ride Adaptive Suspension'],
    sampleVin: '1GYS4HKJ8R1089241',
    tagline: 'The Undisputed Icon of American Luxury SUVs',
    popularPaintCodes: [
      { code: 'GBA / WA8555', name: 'Black Raven' },
      { code: 'G1W / WA140X', name: 'Crystal White Tricoat' },
      { code: 'GNT / WA170X', name: 'Radiant Red Tintcoat' },
    ]
  },
  {
    id: 'escalade-esv',
    name: 'Escalade ESV',
    category: 'SUV',
    yearsActive: '2003 – 2026',
    description: 'Extended wheelbase flagship luxury SUV offering enhanced third-row legroom and cargo space behind the third row.',
    baseMsrpRange: '$86,895 – $155,295',
    popularTrims: ['Premium Luxury', 'Sport Platinum', 'V-Series'],
    popularOptions: ['Dual Rear Entertainment Screens', 'Console Refrigerator with Freezer', 'Power-Retractable Assist Steps'],
    sampleVin: '1YS4HKJ8R1089241',
    tagline: 'Maximum Space & Uncompromised Presence',
    popularPaintCodes: [
      { code: 'GBA', name: 'Black Raven' },
      { code: 'GLU', name: 'Dark Emerald Metallic' },
    ]
  },
  {
    id: 'lyriq',
    name: 'Lyriq',
    category: 'EV',
    yearsActive: '2023 – 2026',
    description: 'The inaugural all-electric luxury crossover powered by GM’s Ultium platform, featuring a 33-inch curved 9K LED display.',
    baseMsrpRange: '$58,590 – $74,590',
    popularTrims: ['Tech', 'Luxury 1/2/3', 'Sport 1/2/3'],
    popularOptions: ['Ultium Dual Motor AWD (500 hp)', 'Super Cruise', 'AKG Studio 19-Speaker Audio', '19.2 kW Charger'],
    sampleVin: '1GYKPDRS4PZ192841',
    tagline: 'The Dawn of Electric Cadillac Luxury',
    popularPaintCodes: [
      { code: 'GB8 / WA622D', name: 'Opulent Blue Metallic' },
      { code: 'G1W', name: 'Crystal White Tricoat' },
      { code: 'GNT', name: 'Radiant Red' },
    ]
  },
  {
    id: 'ct5',
    name: 'CT5 & CT5-V',
    category: 'Sedan',
    yearsActive: '2020 – 2026',
    description: 'Mid-size luxury sport sedan engineered on the Alpha II rear-wheel drive chassis, culminating in the track-proven 668-hp CT5-V Blackwing.',
    baseMsrpRange: '$38,595 – $91,995',
    popularTrims: ['Luxury', 'Premium Luxury', 'Sport', 'CT5-V', 'CT5-V Blackwing'],
    popularOptions: ['6.2L Supercharged V8', 'Carbon Fiber Package 1 & 2', 'Carbon Ceramic Brakes', 'Performance Data Recorder'],
    sampleVin: '1G6D65S32P1104882',
    tagline: 'Precision Craftsmanship Meets Supercharged Performance',
    popularPaintCodes: [
      { code: 'GRW / WA608D', name: 'Rift Metallic' },
      { code: 'G7E', name: 'Velocity Red' },
      { code: 'G6O', name: 'Cyber Yellow Metallic' },
    ]
  },
  {
    id: 'ct4',
    name: 'CT4 & CT4-V',
    category: 'Sedan',
    yearsActive: '2020 – 2026',
    description: 'Compact luxury athletic sedan delivering perfect 50/50 weight distribution and high-output turbo propulsion.',
    baseMsrpRange: '$34,595 – $61,995',
    popularTrims: ['Luxury', 'Premium Luxury', 'Sport', 'CT4-V', 'CT4-V Blackwing'],
    popularOptions: ['3.6L Twin-Turbo V6 (472 hp)', 'Magnetic Ride Control 4.0', 'Microfiber Suede Trim'],
    sampleVin: '1G6D15S32M1029811',
    tagline: 'Nimble Handling & Sharp Athletic Stance',
    popularPaintCodes: [
      { code: 'G1M', name: 'Blaze Orange Metallic' },
      { code: 'GBA', name: 'Black Raven' },
    ]
  },
  {
    id: 'escalade-iq',
    name: 'Escalade IQ',
    category: 'EV',
    yearsActive: '2025 – 2026',
    description: 'The revolutionary all-electric full-size SUV offering 450+ miles of range, 750 hp Velocity Max, and a 55-inch pillar-to-pillar display.',
    baseMsrpRange: '$129,990 – $175,000',
    popularTrims: ['Luxury 1/2', 'Sport 1/2'],
    popularOptions: ['4-Wheel Steer / CrabWalk', 'Executive Second-Row Seating', 'AKG Studio 40-Speaker Audio'],
    sampleVin: '1GYKEQRS9SZ100192',
    tagline: 'The Ultimate Expression of Electric SUV Scale',
    popularPaintCodes: [
      { code: 'GA0', name: 'Flare Metallic' },
      { code: 'G1W', name: 'Crystal White Tricoat' },
    ]
  },
  {
    id: 'celestiq',
    name: 'Celestiq',
    category: 'EV',
    yearsActive: '2024 – 2026',
    description: 'Handcrafted ultra-luxury flagship sedan, individually built for every client in Warren, Michigan with infinite bespoke personalization.',
    baseMsrpRange: '$340,000+',
    popularTrims: ['Bespoke Custom Commission'],
    popularOptions: ['Smart Glass Roof with Suspended Particle Device', '55-inch Diagonal Screen', '41-Speaker AKG Audio'],
    sampleVin: '1GYC111S8PZ100001',
    tagline: 'Hand-Commissioned Ultra-Luxury Craftsmanship',
    popularPaintCodes: [
      { code: 'CUSTOM', name: 'Bespoke Paint-to-Sample' }
    ]
  },
  {
    id: 'optiq',
    name: 'Optiq',
    category: 'EV',
    yearsActive: '2025 – 2026',
    description: 'Entry luxury electric CUV combining athletic proportions, dual-motor standard AWD, and 300-mile estimated range.',
    baseMsrpRange: '$54,000 – $65,000',
    popularTrims: ['Luxury', 'Sport'],
    popularOptions: ['Standard Dual-Motor AWD', '33" Curved LED Screen', 'Super Cruise'],
    sampleVin: '1GYKOARS1SZ100882',
    tagline: 'Dynamic & Spirited All-Electric Crossover',
    popularPaintCodes: [
      { code: 'GAT', name: 'Murdock White' },
      { code: 'GB8', name: 'Opulent Blue' }
    ]
  },
  {
    id: 'xt5',
    name: 'XT5',
    category: 'SUV',
    yearsActive: '2017 – 2026',
    description: 'Refined mid-size luxury crossover providing spacious two-row comfort, UltraView sunroof, and intuitive driver assistance.',
    baseMsrpRange: '$44,295 – $57,295',
    popularTrims: ['Luxury', 'Premium Luxury', 'Sport'],
    popularOptions: ['3.6L V6 Engine', 'Technology Package', 'Bose Performance Series Audio', 'Smart Towing Package'],
    sampleVin: '1GYKNFRS9MZ241093',
    tagline: 'Versatile Mid-Size Comfort & Refinement',
    popularPaintCodes: [
      { code: 'G1W', name: 'Crystal White Tricoat' },
      { code: 'GBA', name: 'Black Raven' },
      { code: 'GAR', name: 'Stellar Black Metallic' }
    ]
  },
  {
    id: 'xt4',
    name: 'XT4',
    category: 'SUV',
    yearsActive: '2019 – 2026',
    description: 'Compact luxury SUV engineered for urban agility, boasting class-leading rear legroom and a 33-inch 9K curved glass display.',
    baseMsrpRange: '$37,895 – $45,895',
    popularTrims: ['Luxury', 'Premium Luxury', 'Sport'],
    popularOptions: ['2.0L Turbo Engine', 'AKG Studio 13-Speaker Audio', 'Cold Weather Package', 'Dual-Panel Sunroof'],
    sampleVin: '1GYFZAR49PZ102941',
    tagline: 'Bold Style & Agile Urban Maneuverability',
    popularPaintCodes: [
      { code: 'GNT', name: 'Radiant Red' },
      { code: 'G1W', name: 'Crystal White' }
    ]
  },
  {
    id: 'xt6',
    name: 'XT6',
    category: 'SUV',
    yearsActive: '2020 – 2026',
    description: 'Three-row luxury crossover offering seating for up to seven passengers, standard safety features, and available Night Vision.',
    baseMsrpRange: '$49,195 – $61,195',
    popularTrims: ['Luxury', 'Premium Luxury', 'Sport'],
    popularOptions: ['Night Vision Assistant', 'Platinum Package', 'Bose Performance Series 14-Speaker Audio'],
    sampleVin: '1GYKNERS3MZ108922',
    tagline: 'Spacious Three-Row Luxury for Family Journeys',
    popularPaintCodes: [
      { code: 'GBA', name: 'Black Raven' },
      { code: 'GLU', name: 'Dark Emerald' }
    ]
  },
  {
    id: 'cts',
    name: 'CTS & CTS-V',
    category: 'Classic',
    yearsActive: '2003 – 2019',
    description: 'The executive sport sedan that proved American engineering could dominate Nürburgring performance records, led by the 640-hp CTS-V.',
    baseMsrpRange: '$46,995 – $86,995',
    popularTrims: ['Standard', 'Luxury', 'Premium Luxury', 'V-Sport', 'CTS-V'],
    popularOptions: ['6.2L Supercharged LT4 V8', 'Recaro Performance Seats', 'Magnetic Ride Control'],
    sampleVin: '1G6D55S30K0109281',
    tagline: 'The Legendary Nürburgring-Honed Sport Sedan',
    popularPaintCodes: [
      { code: 'GBA', name: 'Black Raven' },
      { code: 'G7E', name: 'Velocity Red' }
    ]
  },
  {
    id: 'ats',
    name: 'ATS & ATS-V',
    category: 'Classic',
    yearsActive: '2013 – 2019',
    description: 'Lightweight compact luxury performance chassis engineered to challenge world benchmarks in both Sedan and Coupe forms.',
    baseMsrpRange: '$35,495 – $63,795',
    popularTrims: ['Base', 'Luxury', 'Performance', 'Premium Luxury', 'ATS-V'],
    popularOptions: ['3.6L Twin-Turbo V6 (464 hp)', 'Brembo Performance Brakes', 'Track Package'],
    sampleVin: '1G6AA5S38H0198201',
    tagline: 'Ultra-Lightweight Chassis & Razor-Sharp Steering',
    popularPaintCodes: [
      { code: 'GBA', name: 'Black Raven' },
      { code: 'G1W', name: 'Crystal White' }
    ]
  },
  {
    id: 'eldorado',
    name: 'Eldorado',
    category: 'Classic',
    yearsActive: '1953 – 2002',
    description: 'The golden classic of personal luxury, famous for iconic tailfins, Fleetwood Coachwork, and massive 500 cu in V8 heritage.',
    baseMsrpRange: 'Classic Vintage ($7,750 – $11,049 original)',
    popularTrims: ['Biarritz', 'Fleetwood Convertible', 'Touring Coupe (ETC)'],
    popularOptions: ['500 cu in (8.2L) V8', '4-Barrel Rochester Quadrajet', 'Automatic Climate Control', 'AM/FM Signal-Seeking Radio'],
    sampleVin: '6L67S6Q108924',
    tagline: 'The Golden Standard of Personal American Luxury',
    popularPaintCodes: [
      { code: '36 / WA4674', name: 'Firethorn Metallic' },
      { code: '11', name: 'Cotillion White' }
    ]
  },
  {
    id: 'deville',
    name: 'DeVille / DTS',
    category: 'Classic',
    yearsActive: '1949 – 2011',
    description: 'The timeless full-size American luxury sedan embodying quiet ride comfort, Northstar V8 power, and presidential transport heritage.',
    baseMsrpRange: 'Historical ($28,000 – $48,000 original)',
    popularTrims: ['Base', 'd’Elegance', 'Concours', 'DTS Platinum'],
    popularOptions: ['4.6L Northstar V8', 'Night Vision Thermal Imaging', 'Massage Front Seats'],
    sampleVin: '1G6KD5495YU109281',
    tagline: 'Unmatched Boulevard Ride Quality & Smooth V8 Heritage',
    popularPaintCodes: [
      { code: 'WA8555', name: 'Black Raven' },
      { code: 'WA9292', name: 'White Diamond Tricoat' }
    ]
  }
];
