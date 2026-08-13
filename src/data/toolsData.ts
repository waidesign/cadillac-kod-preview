import { ToolPageMeta } from '../types';

export const TOOLS_DATA: Record<string, ToolPageMeta> = {
  'window-sticker': {
    slug: 'window-sticker',
    title: 'Cadillac Window Sticker Lookup by VIN',
    subtitle: 'Recreate the official factory Monroney label for any 1953–2026 Cadillac vehicle in seconds.',
    ctaText: 'Get Window Sticker',
    badge: 'MONRONEY LABEL RECREATION',
    metaDescription: 'Retrieve and recreate your official Cadillac window sticker by VIN. Displays original MSRP, factory options, packages, paint code, and standard equipment.',
    features: [
      {
        iconName: 'FileText',
        title: 'Original Factory MSRP Breakdown',
        description: 'See exact base price, optional equipment package pricing, destination charge, and total MSRP as shipped from the factory.'
      },
      {
        iconName: 'ListFilter',
        title: 'Complete Option & Package List',
        description: 'Verifies RPO codes, Super Cruise, AKG Audio, Onyx Package, Performance Brakes, and interior trim details.'
      },
      {
        iconName: 'Palette',
        title: 'Factory Exterior & Interior Colors',
        description: 'Identifies exact GM paint code (e.g. GBA Black Raven, G1W Crystal White Tricoat) and interior leather specification.'
      },
      {
        iconName: 'ShieldCheck',
        title: 'Authentic Monroney Layout',
        description: 'Designed to match GM factory layout standards with VIN barcode, final assembly point, and dealer delivery information.'
      }
    ],
    steps: [
      { number: 1, title: 'Enter Cadillac VIN or Plate', description: 'Input your 17-digit VIN or U.S. license plate number into our instant lookup tool.' },
      { number: 2, title: 'Instant Factory Scan', description: 'Our system queries official GM build records and original invoice archives.' },
      { number: 3, title: 'View & Download Monroney PDF', description: 'Access a high-resolution, printable Monroney label PDF formatted for sale, display, or vehicle documentation.' }
    ],
    korayFaqs: [
      {
        question: 'What is a Cadillac window sticker (Monroney label)?',
        leadAnswer: 'A Cadillac window sticker is an official Monroney label required by federal law on all new U.S. vehicles. It provides the original factory MSRP, installed option packages, engine specifications, fuel economy ratings, and final assembly point.',
        fullAnswer: 'Named after Senator Almer Stillwell Monroney who sponsored the Automobile Information Disclosure Act of 1958, the window sticker remains the definitive birth certificate for any Cadillac vehicle. For used buyers, sellers, and collectors, having the original window sticker verifies true trim level, rare packages like V-Series or Blackwing, and authentic factory options that increase vehicle resale value.'
      },
      {
        question: 'How do I get an original window sticker for my Cadillac by VIN?',
        leadAnswer: 'You can recreate an authentic Cadillac window sticker by entering your 17-digit VIN into our instant lookup tool. Our system accesses factory invoice archives to regenerate the complete Monroney label in high-definition PDF format.',
        fullAnswer: 'Dealerships typically discard original paper window stickers upon vehicle sale. Our service bridges this gap by decoding your VIN against GM factory databases to generate a accurate replica containing the exact MSRP, option prices, exterior paint code, and shipping dealer details.'
      },
      {
        question: 'Can I get a window sticker for classic or older Cadillacs?',
        leadAnswer: 'Yes. Our database covers Cadillac models from 1953 through 2026, including classic Eldorados, DeVilles, Fleetwoods, and modern Escalades, CT5s, and Lyriq EVs.',
        fullAnswer: 'For pre-1981 classic Cadillacs with shorter 13-digit or vintage VIN formats, our historical archive decodes factory body style codes, trim numbers, and original MSRP values to produce period-correct window sticker replicas.'
      }
    ]
  },

  'build-sheet': {
    slug: 'build-sheet',
    title: 'Cadillac Build Sheet by VIN',
    subtitle: 'Decode every single RPO code and factory component installed on your Cadillac at the assembly plant.',
    ctaText: 'Get Build Sheet',
    badge: 'COMPLETE RPO BUILD SPECIFICATION',
    metaDescription: 'Extract the complete factory build sheet and Regular Production Option (RPO) codes for any Cadillac using the VIN.',
    features: [
      {
        iconName: 'Cpu',
        title: 'Full RPO Code Decoder',
        description: 'Translates 3-character GM Regular Production Option codes (e.g. UKL, F55, J6F, C3U) into clear plain English.'
      },
      {
        iconName: 'Wrench',
        title: 'Mechanical & Drivetrain Specs',
        description: 'Details axle ratios, suspension codes (Magnetic Ride Control), brake package ratings, and alternator capacities.'
      },
      {
        iconName: 'Shield',
        title: 'Factory Safety & Electrical',
        description: 'Lists air bag configurations, sensor suites, infotainment modules, and wiring harness options.'
      },
      {
        iconName: 'Layers',
        title: 'Assembly Date & Plant Data',
        description: 'Verifies exact assembly plant location (Arlington, Lansing, Spring Hill) and factory order numbers.'
      }
    ],
    steps: [
      { number: 1, title: 'Input 17-Digit VIN', description: 'Enter your Cadillac VIN into the build sheet decoder.' },
      { number: 2, title: 'RPO Code Extraction', description: 'System extracts line-by-line assembly records from GM invoice database.' },
      { number: 3, title: 'Download Detailed Report', description: 'Receive a full structured list of all installed equipment and RPO definitions.' }
    ],
    korayFaqs: [
      {
        question: 'What is a Cadillac build sheet?',
        leadAnswer: 'A Cadillac build sheet is the comprehensive factory document generated during assembly. It contains all 3-character Regular Production Option (RPO) codes identifying every mechanical, electronic, and cosmetic part built into the vehicle.',
        fullAnswer: 'While a window sticker emphasizes customer pricing and marketing features, a build sheet serves as the engineering ledger for technicians and restorers. It lists obscure codes for spring rates, differential gear ratios, steering rack tuning, and exact wiring harnesses.'
      },
      {
        question: 'Where can I find the RPO sticker on a Cadillac?',
        leadAnswer: 'On modern Cadillacs, the RPO sticker (Service Parts Identification label) is located inside the glovebox, under the trunk floor mat, or on the driver door jamb.',
        fullAnswer: 'On newer GM vehicles, physical RPO stickers have been replaced by a QR code on the driver door B-pillar. Our online build sheet tool extracts all these RPO codes directly from your VIN without needing to search your vehicle.'
      }
    ]
  },

  'vin-decoder': {
    slug: 'vin-decoder',
    title: 'FREE Cadillac VIN Decoder',
    subtitle: 'Decode model year, engine displacement, body style, plant location, and check for safety recalls instantly.',
    ctaText: 'Get Free VIN Report',
    badge: 'INSTANT FREE VEHICLE DECODER',
    metaDescription: 'Free Cadillac VIN decoder. Check model year, engine size, trim level, safety ratings, and manufacturing plant.',
    features: [
      {
        iconName: 'Search',
        title: 'Instant VIN Validation',
        description: 'Verifies checksum digit and identifies invalid or tampered VIN sequences.'
      },
      {
        iconName: 'Activity',
        title: 'Engine & Powertrain Summary',
        description: 'Identifies engine code, horsepower, fuel injection system, and drive type (RWD, AWD, FWD).'
      },
      {
        iconName: 'MapPin',
        title: 'Assembly Plant Identification',
        description: 'Determines the exact GM manufacturing plant where your vehicle was built.'
      },
      {
        iconName: 'AlertTriangle',
        title: 'NHTSA Recall Check',
        description: 'Cross-checks open safety recalls and service bulletins from official NHTSA databases.'
      }
    ],
    steps: [
      { number: 1, title: 'Enter Any VIN', description: 'Type or paste your 17-digit Cadillac VIN.' },
      { number: 2, title: 'Free Instant Decode', description: 'View essential specs, engine size, trim, and safety information free of charge.' },
      { number: 3, title: 'Optional Sticker Upgrade', description: 'Upgrade anytime to the complete Monroney Window Sticker PDF for full pricing and option details.' }
    ],
    korayFaqs: [
      {
        question: 'What information does a free Cadillac VIN decoder provide?',
        leadAnswer: 'A free Cadillac VIN decoder reveals the vehicle model year, make, body style, engine size, horsepower, drive type, assembly plant, and active NHTSA safety recalls.',
        fullAnswer: 'A standard VIN decoder breaks down the 17-character structure: World Manufacturer Identifier (WMI), Vehicle Descriptor Section (VDS), Check Digit, Model Year, Plant Code, and Sequential Production Number. For detailed factory options and original MSRP, upgrade to a full window sticker.'
      }
    ]
  },

  'msrp-lookup': {
    slug: 'msrp-lookup',
    title: 'Cadillac MSRP Lookup by VIN',
    subtitle: 'Find the exact original sticker price, option itemization, and destination fees for any Cadillac.',
    ctaText: 'Lookup Original MSRP',
    badge: 'FACTUAL HISTORICAL MSRP DATA',
    metaDescription: 'Check original MSRP pricing for Cadillac vehicles by VIN. Includes base MSRP, option pricing, and total invoice cost.',
    features: [
      {
        iconName: 'DollarSign',
        title: 'Exact Original Base MSRP',
        description: 'Finds the exact price set by Cadillac on the day the vehicle was built.'
      },
      {
        iconName: 'PieChart',
        title: 'Itemized Option Pricing',
        description: 'Breaks down individual cost for packages like Super Cruise ($2,500), Carbon Fiber ($5,380), and AKG Audio.'
      },
      {
        iconName: 'Truck',
        title: 'Destination & Freight Charges',
        description: 'Verifies the original factory delivery fee charged to the selling dealership.'
      },
      {
        iconName: 'TrendingUp',
        title: 'Resale Valuation Baseline',
        description: 'Provides true historical pricing context for classic and modern pre-owned negotiations.'
      }
    ],
    steps: [
      { number: 1, title: 'Enter VIN', description: 'Input your VIN number to access pricing archives.' },
      { number: 2, title: 'Price Extraction', description: 'System correlates VIN with historical GM price guides.' },
      { number: 3, title: 'View Itemized Total', description: 'See base MSRP + options + destination = Total Original MSRP.' }
    ],
    korayFaqs: [
      {
        question: 'Why does original MSRP matter when buying a used Cadillac?',
        leadAnswer: 'Original MSRP reveals how heavily optioned a used Cadillac was from the factory. Two Escalades of the same year can differ by $30,000+ in original MSRP based on installed packages like V-Series, Super Cruise, and Onyx packages.',
        fullAnswer: 'Knowing the original MSRP helps buyers avoid paying top price for a stripped base model. It also provides insurance companies with proof of high-value factory equipment in total loss or valuation disputes.'
      }
    ]
  },

  'options': {
    slug: 'options',
    title: 'Cadillac Options & Packages by VIN',
    subtitle: 'Discover all factory-installed optional equipment, wheels, audio systems, and interior upgrades.',
    ctaText: 'Lookup Options',
    badge: 'EQUIPMENT & PACKAGE VERIFIER',
    metaDescription: 'Verify installed factory options, packages, and equipment on any Cadillac using the VIN number.',
    features: [
      {
        iconName: 'Package',
        title: 'Package Identification',
        description: 'Verifies Onyx Package, Platinum Package, Technology Package, and Carbon Fiber Trim Packages.'
      },
      {
        iconName: 'Volume2',
        title: 'Premium Audio Systems',
        description: 'Confirms AKG Studio 19 or 36-speaker systems vs standard Bose 14-speaker setups.'
      },
      {
        iconName: 'Disc',
        title: 'Wheel & Tire Packages',
        description: 'Lists factory wheel diameter, finish, and performance tire configurations.'
      },
      {
        iconName: 'Navigation',
        title: 'Super Cruise & Driver Assist',
        description: 'Confirms whether hands-free driving hardware and subscriptions were included.'
      }
    ],
    steps: [
      { number: 1, title: 'Enter VIN', description: 'Type in your Cadillac VIN.' },
      { number: 2, title: 'Option Scan', description: 'Scan factory records for all installed option codes.' },
      { number: 3, title: 'Detailed Breakdown', description: 'Review categorized list of all interior, exterior, and tech options.' }
    ],
    korayFaqs: [
      {
        question: 'How can I check what options my Cadillac has by VIN?',
        leadAnswer: 'You can check all installed factory options on your Cadillac by entering your VIN into our options lookup tool. It provides a categorized list of tech, interior, exterior, and safety options.',
        fullAnswer: 'Used car sellers often misstate package names. Using a VIN lookup confirms true option codes so you never pay for features that are not physically present on the vehicle.'
      }
    ]
  },

  'paint-code': {
    slug: 'paint-code',
    title: 'Cadillac Paint Code by VIN',
    subtitle: 'Find the exact GM paint code (WA / G-code) and official color marketing name for touch-up or body work.',
    ctaText: 'Get Paint Code',
    badge: 'GM FACTORY COLOR DECODER',
    metaDescription: 'Lookup exact Cadillac paint codes and exterior color names by VIN. Perfect for touch-up paint and body shop repairs.',
    features: [
      {
        iconName: 'Palette',
        title: 'Dual Paint Code System',
        description: 'Provides both GM WA-code (e.g. WA8555) and Marketing G-code (e.g. GBA Black Raven).'
      },
      {
        iconName: 'Eye',
        title: 'Interior Color Match',
        description: 'Identifies interior trim color name and seat leather codes.'
      },
      {
        iconName: 'Sparkles',
        title: 'Specialty Finish Verification',
        description: 'Distinguishes between solid, metallic, tri-coat, and matte frost paint finishes.'
      },
      {
        iconName: 'CheckCircle',
        title: 'Body Shop Precision',
        description: 'Ensures 100% accurate color matching for body repairs and custom refinishing.'
      }
    ],
    steps: [
      { number: 1, title: 'Submit VIN', description: 'Provide your 17-digit VIN.' },
      { number: 2, title: 'Color Database Match', description: 'Match VIN against GM paint formula database.' },
      { number: 3, title: 'Get Paint Code', description: 'Obtain exact WA code, G-code, and interior code.' }
    ],
    korayFaqs: [
      {
        question: 'Where is the paint code on a Cadillac and what does it look like?',
        leadAnswer: 'Cadillac paint codes are listed on the Service Parts Identification sticker as a 4-digit WA code (e.g., WA8555 for Black Raven or WA140X for Crystal White Tricoat).',
        fullAnswer: 'Finding this sticker on a vehicle can be difficult if it is faded, worn, or removed during body work. Looking up your paint code online by VIN guarantees you get the precise GM factory color code needed for flawless paint matching.'
      }
    ]
  },

  'warranty': {
    slug: 'warranty',
    title: 'Cadillac Warranty Check by VIN',
    subtitle: 'Verify remaining factory bumper-to-bumper, powertrain, roadside assistance, and Ultium battery coverage.',
    ctaText: 'Check Warranty',
    badge: 'FACTORY WARRANTY STATUS',
    metaDescription: 'Check remaining Cadillac factory warranty coverage by VIN. Includes Bumper-to-Bumper, Powertrain, and EV Battery terms.',
    features: [
      {
        iconName: 'ShieldCheck',
        title: '4-Year / 50K Bumper-to-Bumper',
        description: 'Calculates remaining coverage based on original in-service date.'
      },
      {
        iconName: 'Zap',
        title: '6-Year / 70K Powertrain',
        description: 'Verifies powertrain warranty and courtesy transportation limits.'
      },
      {
        iconName: 'Battery',
        title: '8-Year / 100K EV Battery',
        description: 'Special coverage verification for Lyriq, Celestiq, Optiq, and Escalade IQ Ultium batteries.'
      },
      {
        iconName: 'Clock',
        title: 'In-Service Date Verification',
        description: 'Identifies the exact date the vehicle was first delivered to the original retail buyer.'
      }
    ],
    steps: [
      { number: 1, title: 'Enter VIN', description: 'Input your Cadillac VIN.' },
      { number: 2, title: 'In-Service Date Calculation', description: 'Retrieve original delivery date from GM service record.' },
      { number: 3, title: 'Warranty Summary', description: 'View active vs expired warranty coverage parameters.' }
    ],
    korayFaqs: [
      {
        question: 'What is Cadillac factory warranty coverage?',
        leadAnswer: 'Cadillac provides a 4-year / 50,000-mile Bumper-to-Bumper Limited Warranty and a 6-year / 70,000-mile Powertrain Limited Warranty with 24/7 Roadside Assistance.',
        fullAnswer: 'Electric vehicles like the Lyriq and Escalade IQ receive an extended 8-year / 100,000-mile Ultium EV component warranty. Warranty coverage starts on the vehicle’s original in-service date, which our VIN tool calculates automatically.'
      }
    ]
  },

  'recalls': {
    slug: 'recalls',
    title: 'Cadillac Recall Check by VIN',
    subtitle: 'Cross-reference official NHTSA databases for open safety recalls, seatbelt, airbag, and brake service actions.',
    ctaText: 'Check Open Recalls',
    badge: 'NHTSA SAFETY RECALL CHECK',
    metaDescription: 'Check open safety recalls and technical service bulletins for any Cadillac vehicle using the VIN.',
    features: [
      {
        iconName: 'AlertOctagon',
        title: 'Direct NHTSA Database Query',
        description: 'Pulls real-time recall records directly from the National Highway Traffic Safety Administration.'
      },
      {
        iconName: 'FileCheck',
        title: 'Remedy Availability Status',
        description: 'Shows whether replacement parts and dealer repair procedures are currently available.'
      },
      {
        iconName: 'Check',
        title: 'Zero Cost Repairs',
        description: 'Reminds owners that all recall repairs must be completed free of charge at any authorized Cadillac dealer.'
      },
      {
        iconName: 'ShieldAlert',
        title: 'Airbag & Electrical Bulletins',
        description: 'Checks critical safety items including Super Cruise software updates and battery management system flashes.'
      }
    ],
    steps: [
      { number: 1, title: 'Enter VIN', description: 'Enter your 17-character VIN.' },
      { number: 2, title: 'Live NHTSA Scan', description: 'Perform live safety database lookup.' },
      { number: 3, title: 'Recall Report', description: 'View list of open safety campaigns and dealer instructions.' }
    ],
    korayFaqs: [
      {
        question: 'Are Cadillac recall repairs free of charge?',
        leadAnswer: 'Yes. By federal law, all open safety recall repairs must be performed free of charge by an authorized Cadillac dealership, regardless of whether you are the original owner.',
        fullAnswer: 'Checking open recalls before buying a used Cadillac ensures safety repairs are scheduled promptly before taking delivery.'
      }
    ]
  }
};
