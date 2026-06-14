export interface TranslationDict {
  nav: {
    features: string;
    showcase: string;
    whyUs: string;
    aiFeatures: string;
    pricing: string;
    faq: string;
    demo: string;
    trial: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaDemo: string;
    ctaTrial: string;
    stats: {
      hotels: string;
      bookings: string;
      occupancy: string;
      revenue: string;
    };
  };
  trusted: {
    title: string;
  };
  features: {
    title: string;
    subtitle: string;
    categories: {
      pms: string;
      bookingEngine: string;
      channelManager: string;
      revenue: string;
      crm: string;
      accounting: string;
      pos: string;
      inventory: string;
      hr: string;
      maintenance: string;
      reports: string;
    };
    pms: {
      title: string;
      desc: string;
      f1: string; f1d: string;
      f2: string; f2d: string;
      f3: string; f3d: string;
      f4: string; f4d: string;
      f5: string; f5d: string;
      f6: string; f6d: string;
    };
    bookingEngine: {
      title: string;
      desc: string;
      f1: string; f1d: string;
      f2: string; f2d: string;
      f3: string; f3d: string;
    };
    channelManager: {
      title: string;
      desc: string;
      f1: string; f1d: string;
      f2: string; f2d: string;
      f3: string; f3d: string;
      f4: string; f4d: string;
    };
    revenue: {
      title: string;
      desc: string;
      f1: string; f1d: string;
      f2: string; f2d: string;
      f3: string; f3d: string;
    };
    crm: {
      title: string;
      desc: string;
      f1: string; f1d: string;
      f2: string; f2d: string;
      f3: string; f3d: string;
    };
    accounting: {
      title: string;
      desc: string;
      f1: string; f1d: string;
      f2: string; f2d: string;
      f3: string; f3d: string;
      f4: string; f4d: string;
    };
    pos: {
      title: string;
      desc: string;
      f1: string; f1d: string;
      f2: string; f2d: string;
      f3: string; f3d: string;
      f4: string; f4d: string;
    };
    inventory: {
      title: string;
      desc: string;
      f1: string; f1d: string;
      f2: string; f2d: string;
      f3: string; f3d: string;
    };
    hr: {
      title: string;
      desc: string;
      f1: string; f1d: string;
      f2: string; f2d: string;
      f3: string; f3d: string;
      f4: string; f4d: string;
    };
    maintenance: {
      title: string;
      desc: string;
      f1: string; f1d: string;
      f2: string; f2d: string;
      f3: string; f3d: string;
    };
    reports: {
      title: string;
      desc: string;
      f1: string; f1d: string;
      f2: string; f2d: string;
      f3: string; f3d: string;
      f4: string; f4d: string;
    };
  };
  showcase: {
    title: string;
    subtitle: string;
    occupancyChart: string;
    revenueChart: string;
    bookingsChart: string;
    metrics: {
      occupancy: string;
      revpar: string;
      adr: string;
      activeGuests: string;
    };
    chartLegend: {
      thisWeek: string;
      lastWeek: string;
      revenue: string;
      bookings: string;
    };
  };
  whyUs: {
    title: string;
    subtitle: string;
    faster: { t: string; d: string; };
    revenue: { t: string; d: string; };
    guestExp: { t: string; d: string; };
    cloud: { t: string; d: string; };
    secure: { t: string; d: string; };
    scalable: { t: string; d: string; };
  };
  ai: {
    title: string;
    subtitle: string;
    forecasting: { t: string; d: string; };
    insights: { t: string; d: string; };
    pricing: { t: string; d: string; };
    prediction: { t: string; d: string; };
    bi: { t: string; d: string; };
  };
  integrations: {
    title: string;
    subtitle: string;
    desc: string;
    connected: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    list: {
      name: string;
      role: string;
      hotel: string;
      quote: string;
      rating: number;
    }[];
  };
  pricing: {
    title: string;
    subtitle: string;
    monthly: string;
    yearly: string;
    save: string;
    popular: string;
    getStarted: string;
    featuresHeader: string;
    tiers: {
      starter: {
        name: string;
        priceMon: string;
        priceYear: string;
        desc: string;
        features: string[];
      };
      pro: {
        name: string;
        priceMon: string;
        priceYear: string;
        desc: string;
        features: string[];
      };
      enterprise: {
        name: string;
        priceMon: string;
        priceYear: string;
        desc: string;
        features: string[];
      };
    };
  };
  faq: {
    title: string;
    subtitle: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  cta: {
    title: string;
    subtitle: string;
    demo: string;
    trial: string;
    noCard: string;
  };
  footer: {
    desc: string;
    product: string;
    company: string;
    legal: string;
    newsletter: string;
    newsletterDesc: string;
    subscribe: string;
    successMsg: string;
    allRightsReserved: string;
  };
}

export const translations = {
  en: {
    nav: {
      features: "Features",
      showcase: "Dashboard",
      whyUs: "Why Ewan",
      aiFeatures: "AI Features",
      pricing: "Pricing",
      faq: "FAQ",
      demo: "Book Demo",
      trial: "Start Free Trial"
    },
    hero: {
      badge: "The Next-Gen Hotel Management System",
      title: "Manage Your Entire Hotel From One Smart Platform",
      subtitle: "Simplify check-ins, maximize dynamic pricing, integrate channel managers, and deliver world-class guest experiences with our cloud-based Property Management System (PMS).",
      ctaDemo: "Request Demo",
      ctaTrial: "Start Free Trial",
      stats: {
        hotels: "Active Hotels",
        bookings: "Daily Bookings",
        occupancy: "Average Occupancy",
        revenue: "Revenue Growth"
      }
    },
    trusted: {
      title: "Trusted by leading hotel groups and boutique stays globally"
    },
    features: {
      title: "Everything You Need to Run Your Hotel",
      subtitle: "Eliminate messy spreadsheets. Explore our unified modules built for modern hospitality teams.",
      categories: {
        pms: "Property Management (PMS)",
        bookingEngine: "Booking Engine",
        channelManager: "Channel Manager",
        revenue: "Revenue Management",
        crm: "CRM & Guest Loyalty",
        accounting: "Accounting & Finance",
        pos: "Restaurant & POS",
        inventory: "Inventory Management",
        hr: "HR & Scheduling",
        maintenance: "Maintenance Module",
        reports: "Reports & Analytics"
      },
      pms: {
        title: "Front Desk & Property Operations",
        desc: "Streamline day-to-day lodging workflows, enhance staff communication, and keep operations running flawlessly.",
        f1: "Reservations Calendar", f1d: "A visual, drag-and-drop grid to manage bookings, extensions, and room changes in real-time.",
        f2: "Check-in / Check-out", f2d: "Fast, paperless processes with electronic signature support and keycard integration.",
        f3: "Room Management", f3d: "Monitor room statuses (dirty, clean, inspecting) and trigger automatic notifications.",
        f4: "Guest Profiles", f4d: "Centralized history of guest preferences, notes, and previous billing records.",
        f5: "Housekeeping Planner", f5d: "Assign rooms to housekeepers dynamically and update cleanliness status via mobile devices.",
        f6: "Front Desk Operations", f6d: "Manage walk-ins, print custom folios, and handle shifts without friction."
      },
      bookingEngine: {
        title: "Direct Online Bookings",
        desc: "Transform your website into your highest-yielding sales channel and escape high OTA commission fees.",
        f1: "Direct Online Bookings", f1d: "A responsive, modern booking interface that integrates directly into your hotel website.",
        f2: "Real-time Availability", f2d: "Instant sync of room types and availability to prevent overbooking and double-booking.",
        f3: "Dynamic Pricing Rates", f3d: "Automatically adjust rates based on seasonal demand, booking windows, or special packages."
      },
      channelManager: {
        title: "Global Channel Distribution",
        desc: "Distribute your inventory globally across all major booking channels with real-time bidirectional syncing.",
        f1: "Airbnb Integration", f1d: "Sync availability, rates, and guest messaging instantly with Airbnb.",
        f2: "Booking.com Sync", f2d: "Real-time updates to price plans, minimum stay rules, and cancellations.",
        f3: "Expedia Connection", f3d: "Ensure accurate listing details and prevent manual mapping errors.",
        f4: "Agoda & Global Channels", f4d: "Access massive Asian markets and secondary distribution channels easily."
      },
      revenue: {
        title: "Dynamic Revenue Management",
        desc: "Utilize real-time market insights and dynamic demand models to sell the right room to the right guest at the right price.",
        f1: "Dynamic Rates", f1d: "Automated rate changes triggered by occupancy thresholds and competitor pricing.",
        f2: "Occupancy Forecasting", f2d: "Predict demand weeks in advance using historical data and local event calendars.",
        f3: "Revenue Analytics", f3d: "Detailed metrics tracking RevPAR, ADR, and yield efficiency."
      },
      crm: {
        title: "CRM & Guest Relationship",
        desc: "Build strong, lasting relationships with personalized communication, marketing automation, and smart loyalty programs.",
        f1: "Guest History & Prefs", f1d: "Track pillow preferences, allergies, or favorite drinks to surprise guests at arrival.",
        f2: "Loyalty Programs", f2d: "Reward returnees with automated points, upgrades, or direct discount vouchers.",
        f3: "Marketing Campaigns", f3d: "Send automated pre-arrival emails, post-stay review requests, and seasonal newsletters."
      },
      accounting: {
        title: "Accounting & Financial Integrity",
        desc: "Manage multi-currency billing, custom invoices, automated tax calculations, and payments securely.",
        f1: "Custom Invoices", f1d: "Generate fully branded invoices, split bills between roommates, or route to corporate accounts.",
        f2: "Secure Payments", f2d: "Integrated credit card terminal processing, authorization hold, and online payments.",
        f3: "Tax Management", f3d: "Support local city taxes, VAT, and custom tourism levies automatically.",
        f4: "Financial Reports", f4d: "Generate daily ledger balances, revenue distributions, and end-of-year accounts."
      },
      pos: {
        title: "Restaurant & Point of Sale (POS)",
        desc: "Unify food, beverage, and spa services with the main guest folio for a seamless guest billing experience.",
        f1: "Restaurant Orders", f1d: "Sleek table management, custom menus, and kitchen display systems (KDS).",
        f2: "Cafe Management", f2d: "Quick service cash drawer options, item variations, and barcode printing.",
        f3: "Room Service", f3d: "Let guests scan room QR codes to browse dining menus and place orders straight to the kitchen.",
        f4: "Folio Integration", f4d: "Post dining tickets directly to the guest's room number for a single check-out payment."
      },
      inventory: {
        title: "Inventory & Procurement",
        desc: "Track hotel assets, manage kitchen supplies, monitor linen stocks, and automate supplier orders.",
        f1: "Stock Tracking", f1d: "Real-time stock alerts for items like beverages, amenities, and clean linen.",
        f2: "Purchasing Orders", f2d: "Generate purchase orders automatically when stock falls below safety levels.",
        f3: "Supplier Directory", f3d: "Organize supplier contacts, lead times, contract pricing, and delivery dates."
      },
      hr: {
        title: "HR & Shift Management",
        desc: "Optimize shifts, schedule housekeeping, track attendance, and automate payroll allocations.",
        f1: "Employee Management", f1d: "Secure digital directories with documents, contact details, and contracts.",
        f2: "Payroll Integrations", f2d: "Unify worked hours with payroll applications, tracking overtime and bonuses.",
        f3: "Attendance Clocking", f3d: "Staff can clock in/out using PIN codes, mobile GPS, or biometric terminals.",
        f4: "Dynamic Scheduling", f4d: "Build schedules based on predicted occupancy, reducing excess labor costs."
      },
      maintenance: {
        title: "Maintenance & Preventative Work",
        desc: "Reduce guest complaints by maintaining rooms, managing repair tickets, and schedule upkeep campaigns.",
        f1: "Asset Tracking", f1d: "Maintain database profiles for AC units, boilers, gym machines, and kitchen appliances.",
        f2: "Work Orders", f2d: "Front desk can quickly dispatch maintenance tickets to technician mobile apps.",
        f3: "Preventative Upkeep", f3d: "Schedule automatic reminders for filter changes, deep cleaning, and safety inspections."
      },
      reports: {
        title: "Analytics & Custom Reporting",
        desc: "Gain complete transparency into your property metrics with executive dashboards and customizable spreadsheets.",
        f1: "Occupancy Reports", f1d: "Visualize occupancy rates, average length of stay (LOS), and booking sources.",
        f2: "Revenue Reports", f2d: "Track overall sales, room revenue, F&B orders, and payment method summaries.",
        f3: "Performance Reports", f3d: "Compare performance between rooms, staff efficiency, and OTA channels.",
        f4: "Custom Dashboards", f4d: "Pin important charts to your main screen and schedule automatic email PDF updates."
      }
    },
    showcase: {
      title: "Interactive Operations Control",
      subtitle: "Click the categories below to simulate the Ewan live dashboard. Experience real data fluidity.",
      occupancyChart: "Occupancy Simulation",
      revenueChart: "Revenue Growth Trend",
      bookingsChart: "Daily Booking Velocity",
      metrics: {
        occupancy: "Occupancy Rate",
        revpar: "RevPAR",
        adr: "Average Daily Rate (ADR)",
        activeGuests: "Active Guests"
      },
      chartLegend: {
        thisWeek: "This Week",
        lastWeek: "Last Week",
        revenue: "Revenue ($)",
        bookings: "Bookings"
      }
    },
    whyUs: {
      title: "Engineered for High-Performance Hospitality",
      subtitle: "Why independent boutique hotels and international chains migrate their infrastructure to Ewan.",
      faster: {
        t: "Faster Operations",
        d: "Decrease check-in times by 65%. Automate housekeeping assignments and front desk updates instantly."
      },
      revenue: {
        t: "Increased Revenue",
        d: "Boost direct bookings and maximize average daily rates (ADR) using built-in AI dynamic yield tools."
      },
      guestExp: {
        t: "Better Guest Experience",
        d: "Automate pre-arrival alerts, enable mobile self-check-in, and maintain preferences for personalized stays."
      },
      cloud: {
        t: "Cloud-Based",
        d: "Access your property data securely from any device, anywhere. No bulky local servers required."
      },
      secure: {
        t: "Highly Secure",
        d: "Bank-level encryption, PCI DSS compliance for payments, and daily automatic offsite database backups."
      },
      scalable: {
        t: "Scalable Infrastructure",
        d: "Whether you operate a 15-room boutique villa or a 500-room multi-location resort, our cluster scales with you."
      }
    },
    ai: {
      title: "Futuristic AI Operations",
      subtitle: "Unlock predictive hospitality. Ewan AI analyzes market patterns to automate decisions.",
      forecasting: {
        t: "AI Revenue Forecasting",
        d: "Analyze 36+ market factors to project cash flows, revenue margins, and optimal budgets for the next 90 days."
      },
      insights: {
        t: "AI Guest Insights",
        d: "Analyze guest reviews, dining choices, and previous requests to auto-segment customers for loyalty campaigns."
      },
      pricing: {
        t: "AI Smart Pricing",
        d: "Calculate optimal pricing configurations 24/7 by correlating regional weather, flights, local demand, and competitor trends."
      },
      prediction: {
        t: "AI Occupancy Prediction",
        d: "Predict future low-occupancy periods 6 weeks in advance, allowing marketing to trigger target campaigns."
      },
      bi: {
        t: "AI Business Intelligence",
        d: "Generate conversational reports. Type 'Show me F&B growth compared to room revenue' and receive instant graphics."
      }
    },
    integrations: {
      title: "Seamless Integration Ecosystem",
      subtitle: "Ewan co-exists with your current tech stack. Connect all services in just one click.",
      desc: "Synchronize details instantly. We support bidirectional communication with top tools to streamline billing, distribution, and automation.",
      connected: "Connected"
    },
    testimonials: {
      title: "Endorsed by Hotel Operators",
      subtitle: "Read success stories from independent boutique owners and global resort general managers.",
      list: [
        {
          name: "Sarah Jenkins",
          role: "General Manager",
          hotel: "The Grand Horizon Resort",
          quote: "Ewan PMS transformed how our team collaborates. Shift handovers are painless, housekeeping is 40% faster, and our direct bookings grew by 35% in just four months.",
          rating: 5
        },
        {
          name: "Marcello Rossi",
          role: "Boutique Owner",
          hotel: "Villa Bellagio Lake Como",
          quote: "The multi-lingual support and clean UX are fantastic. Our staff required only two hours of training before using it live. The channel manager is lightning fast and has eliminated overbookings.",
          rating: 5
        },
        {
          name: "Khalid Al-Mansoor",
          role: "Operations Director",
          hotel: "Oasis Palms Hotels Group",
          quote: "Managing 5 properties from a single login was a dream we couldn't achieve with legacy PMS. The AI revenue forecasting module has optimized our rates, boosting RevPAR by 22%.",
          rating: 5
        }
      ]
    },
    pricing: {
      title: "Flexible Plans for Any Scale",
      subtitle: "Choose the pricing model that matches your room capacity. Switch or cancel at any time.",
      monthly: "Monthly",
      yearly: "Yearly",
      save: "Save 20%",
      popular: "Most Popular",
      getStarted: "Start Free Trial",
      featuresHeader: "Everything in the plan, plus:",
      tiers: {
        starter: {
          name: "Starter",
          priceMon: "49",
          priceYear: "39",
          desc: "Perfect for boutique stays, villas, and small guesthouses.",
          features: [
            "Up to 25 Rooms",
            "Core PMS Operations",
            "Direct Booking Engine",
            "Standard Guest CRM",
            "Email Guest Notifications",
            "24/7 Email Support"
          ]
        },
        pro: {
          name: "Professional",
          priceMon: "129",
          priceYear: "99",
          desc: "For mid-size hotels, boutique resorts, and expanding operations.",
          features: [
            "Up to 100 Rooms",
            "Advanced PMS Calendar",
            "Bidirectional Channel Manager",
            "AI Smart Pricing Engine",
            "Restaurant & Spa POS Integration",
            "Accounting & Custom Invoices",
            "WhatsApp & SMS Alerts",
            "Priority Support (Chat & Phone)"
          ]
        },
        enterprise: {
          name: "Enterprise",
          priceMon: "349",
          priceYear: "279",
          desc: "For multi-property groups, large resorts, and full enterprise needs.",
          features: [
            "Unlimited Rooms & Properties",
            "Full AI Suite (Forecasting & BI)",
            "Automated HR & Employee Scheduling",
            "Full Inventory & Procurement Systems",
            "Preventative Maintenance Planner",
            "Custom API Access & Webhooks",
            "Dedicated Account Manager",
            "Onsite Implementation & Training"
          ]
        }
      }
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Have questions about migration, training, or setup? We have answers.",
      items: [
        {
          q: "How long does implementation take?",
          a: "For small properties, setup takes less than 24 hours. For larger resorts, our team will migrate your room records, guest histories, and active reservations within 3 to 5 business days, ensuring zero operational downtime."
        },
        {
          q: "Is staff training included?",
          a: "Yes! Professional and Enterprise plans include guided remote training sessions. We also provide a comprehensive online Academy with video tutorials, guides, and searchable manuals accessible by all employees."
        },
        {
          q: "Can I manage multiple hotels?",
          a: "Absolutely. Ewan PMS supports multi-property architectures. You can switch between hotels with a single dropdown, combine analytics, share guest loyalty databases, and control individual pricing rules."
        },
        {
          q: "Is there a mobile app?",
          a: "Yes. Ewan is fully responsive and behaves like a native application on smartphones and tablets. We also provide native mobile apps for Housekeeping and Maintenance teams to speed up communication."
        },
        {
          q: "Is our data secure?",
          a: "Completely. We implement AES-256 bank-level database encryption, force SSL/TLS connections, are fully PCI DSS compliant to handle payments, and maintain live replica databases across multiple regions to prevent outages."
        }
      ]
    },
    cta: {
      title: "Transform Your Hotel Operations Today",
      subtitle: "Join thousands of hotels worldwide running high-occupancy properties with Ewan. Scale your reservations, not your headaches.",
      demo: "Book a Demo",
      trial: "Start 14-Day Free Trial",
      noCard: "No credit card required. Cancel anytime."
    },
    footer: {
      desc: "Cloud hospitality engine built to automate property operations, drive direct bookings, and maximize average yield.",
      product: "Product",
      company: "Company",
      legal: "Legal",
      newsletter: "Subscribe to our Newsletter",
      newsletterDesc: "Get hospitality tactics, product releases, and market insights straight to your inbox.",
      subscribe: "Subscribe",
      successMsg: "Subscribed successfully! Thank you.",
      allRightsReserved: "All rights reserved."
    }
  },
  ar: {
    nav: {
      features: "المميزات",
      showcase: "لوحة التحكم",
      whyUs: "لماذا إيوان",
      aiFeatures: "الذكاء الاصطناعي",
      pricing: "الأسعار",
      faq: "الأسئلة الشائعة",
      demo: "احجز تجربة",
      trial: "ابدأ مجاناً"
    },
    hero: {
      badge: "الجيل القادم من أنظمة إدارة الفنادق",
      title: "إدارة فندقك بالكامل من منصة ذكية واحدة",
      subtitle: "سهّل عمليات تسجيل الوصول، وضاعف أرباحك بالتسعير الديناميكي، واربط بين قنوات الحجز المختلفة مع نظام إدارة الممتلكات (PMS) السحابي المتكامل.",
      ctaDemo: "طلب عرض توضيحي",
      ctaTrial: "ابدأ الفترة التجريبية مجاناً",
      stats: {
        hotels: "فندق نشط",
        bookings: "حجز يومي",
        occupancy: "متوسط نسبة الإشغال",
        revenue: "نمو الإيرادات"
      }
    },
    trusted: {
      title: "موثوق من قبل مجموعات الفنادق الرائدة وأماكن الإقامة الفاخرة عالمياً"
    },
    features: {
      title: "كل ما تحتاجه لإدارة فندقك بكفاءة",
      subtitle: "وداعاً للجداول الورقية المعقدة. استكشف وحداتنا المتكاملة المصممة خصيصاً لفرق الضيافة الحديثة.",
      categories: {
        pms: "إدارة العقار (PMS)",
        bookingEngine: "محرك الحجز المباشر",
        channelManager: "مدير القنوات",
        revenue: "إدارة الإيرادات",
        crm: "علاقات النزلاء والولاء",
        accounting: "الحسابات والمالية",
        pos: "المطاعم ونقاط البيع",
        inventory: "إدارة المخزون والمشتريات",
        hr: "الموارد البشرية والجدولة",
        maintenance: "وحدة الصيانة",
        reports: "التقارير والتحليلات"
      },
      pms: {
        title: "الاستقبال وعمليات الفندق اليومية",
        desc: "قم بتبسيط سير العمل اليومي في فندقك، وحسّن التواصل بين موظفيك، وحافظ على كفاءة التشغيل دون أي انقطاع.",
        f1: "تقويم الحجوزات التفاعلي", f1d: "جدول زمني مرئي بسحب وإفلات لإدارة الحجوزات والتمديد وتغيير الغرف فوراً.",
        f2: "تسجيل الوصول والمغادرة", f2d: "عمليات سريعة وغير ورقية بالكامل مع دعم التوقيع الإلكتروني وتشفير بطاقات الغرف.",
        f3: "حالة الغرف الفورية", f3d: "مراقبة دقيقة لحالة الغرف (نظيفة، غير نظيفة، قيد الفحص) وإرسال تنبيهات تلقائية.",
        f4: "ملفات النزلاء المتكاملة", f4d: "أرشيف مركزي لتفضيلات النزلاء، وملاحظاتهم، وسجلات فواتيرهم السابقة.",
        f5: "جدولة التدبير المنزلي", f5d: "توزيع الغرف على عمال النظافة ديناميكياً وتحديث حالة الغرفة مباشرة عبر الهاتف.",
        f6: "عمليات مكتب الاستقبال", f6d: "إدارة الحجوزات المباشرة، وطباعة كشوف الحسابات المخصصة، وتسهيل استلام الفترات."
      },
      bookingEngine: {
        title: "محرك الحجز المباشر للموقع",
        desc: "حوّل موقع فندقك الإلكتروني إلى أكثر قنوات مبيعاتك ربحاً وتجنّب عمولات وكالات السفر الباهظة.",
        f1: "حجوزات مباشرة عبر الإنترنت", f1d: "واجهة حجز حديثة وسريعة متوافقة مع الهواتف وتتكامل مباشرة في موقع فندقك.",
        f2: "توافر الغرف اللحظي", f2d: "مزامنة فورية لأنواع الغرف وتوفرها لمنع حدوث الحجوزات المزدوجة أو المكررة.",
        f3: "أسعار مرنة وديناميكية", f3d: "تعديل الأسعار تلقائياً بناءً على مواسم الطلب، وفترات الحجز المسبق، والتقويم الترويجي."
      },
      channelManager: {
        title: "توزيع الغرف عبر القنوات العالمية",
        desc: "وزّع غرفك المتاحة على جميع قنوات الحجز العالمية الكبرى مع مزامنة ثنائية الاتجاه وفي الوقت الفعلي.",
        f1: "الربط مع Airbnb", f1d: "مزامنة التوافر والأسعار ومراسلات النزلاء فوراً مع منصة Airbnb.",
        f2: "مزامنة Booking.com", f2d: "تحديث فوري لخطط الأسعار، وشروط الحد الأدنى للإقامة، والطلبات الملغاة.",
        f3: "الاتصال بـ Expedia", f3d: "ضمان دقة معلومات غرفك ومنع أخطاء الربط اليدوي التقليدية.",
        f4: "قنوات Agoda والعالم", f4d: "الوصول بسهولة لأسواق الضيافة الآسيوية الكبرى وقنوات التوزيع البديلة."
      },
      revenue: {
        title: "إدارة الإيرادات الذكية",
        desc: "استعن ببيانات السوق الفورية ونماذج العرض والطلب لبيع الغرفة المناسبة للسعر المناسب للنزيل المناسب.",
        f1: "التسعير الديناميكي", f1d: "تغييرات تلقائية في الأسعار يتم تفعيلها بناءً على نسب الإشغال وأسعار المنافسين.",
        f2: "توقع الإشغال المستقبلي", f2d: "توقع حجم الطلب لأسابيع قادمة باستخدام البيانات التاريخية ومواعيد الفعاليات المحلية.",
        f3: "تحليلات الأرباح الشاملة", f3d: "متابعة دقيقة لمؤشرات RevPAR (العائد لكل غرفة) و ADR (متوسط السعر اليومي) وكفاءة العائد."
      },
      crm: {
        title: "إدارة علاقات وولاء النزلاء",
        desc: "ابنِ علاقات متينة ودائمة مع نزلاء فندقك من خلال رسائل مخصصة، وحملات تسويقية تلقائية، وبرامج ولاء ذكية.",
        f1: "أرشيف النزلاء والتفضيلات", f1d: "تتبع أنواع الوسائد المفضلة، والحساسية، والمشروبات المفضلة لمفاجأتهم عند الوصول.",
        f2: "برامج ولاء مبتكرة", f2d: "كافئ نزلاءك الدائمين بنقاط تلقائية، أو ترقيات مجانية للغرف، أو قسائم خصم مباشرة.",
        f3: "الحملات التسويقية الآلية", f3d: "أرسل رسائل ترحيبية قبل الوصول، وطلبات تقييم بعد المغادرة، ونشرات العروض الموسمية."
      },
      accounting: {
        title: "المحاسبة والنزاهة المالية",
        desc: "أدِر الفواتير متعددة العملات، وحسابات النزلاء، وحسابات الضرائب التلقائية، والمدفوعات الإلكترونية بأمان.",
        f1: "فواتير مخصصة ومقسمة", f1d: "إصدار فواتير احترافية بشعار فندقك، وتقسيم الحساب بين النزلاء، أو ترحيلها لحسابات الشركات.",
        f2: "بوابات دفع آمنة", f2d: "تكامل كامل مع أجهزة الدفع، وحجز مبالغ التأمين، واستقبال المدفوعات عبر الإنترنت.",
        f3: "إدارة الضرائب والرسوم", f3d: "حساب تلقائي لضرائب المدينة، وضريبة القيمة المضافة (VAT)، ورسوم السياحة المحلية.",
        f4: "التقارير المالية اليومية", f4d: "استخراج كشوفات الأرصدة اليومية، وتوزيعات الإيرادات، والميزانيات الختامية بسهولة."
      },
      pos: {
        title: "المطاعم ونقاط البيع (POS)",
        desc: "اربط خدمات الطعام والشراب والسبا مباشرة بفاتورة غرفة النزيل لتوفير تجربة دفع موحدة ومريحة.",
        f1: "طلبات المطعم والمقهى", f1d: "إدارة الطاولات بشكل مرن، وتصميم القوائم الرقمية، ونظام عرض المطبخ (KDS).",
        f2: "مبيعات المقاهي السريعة", f2d: "خيارات البيع السريع، وإدارة الصناديق النقدية، وطباعة ملصقات الباركود.",
        f3: "خدمة الغرف الرقمية", f3d: "امسح رمز QR في الغرفة لتصفح القائمة وطلب الطعام والشراب مباشرة للمطبخ.",
        f4: "ترحيل الحساب التلقائي", f4d: "ترحيل قيمة الوجبات مباشرة إلى رقم الغرفة ليتم دفعها دفعة واحدة عند المغادرة."
      },
      inventory: {
        title: "المخازن والمشتريات",
        desc: "تتبع أصول الفندق، وأدِر إمدادات المطبخ، وراقب مخزون الشراشف، وأتمت طلبات الشراء من الموردين.",
        f1: "مراقبة المخزون الفوري", f1d: "تنبيهات فورية عند انخفاض مستويات مخزون المشروبات، والمستلزمات، والشراشف النظيفة.",
        f2: "أوامر الشراء التلقائية", f2d: "إصدار طلبات التوريد تلقائياً بمجرد هبوط كمية صنف معين عن حد الأمان المسموح.",
        f3: "دليل الموردين والعقود", f3d: "ترتيب جهات اتصال الموردين، ومواعيد التسليم، وأسعار العقود المعتمدة."
      },
      hr: {
        title: "الموارد البشرية وجدولة النوبات",
        desc: "نظّم نوبات العمل، وجدول أعمال التدبير المنزلي، وتتبع الحضور، وأتمتة مخصصات الأجور والرواتب.",
        f1: "إدارة ملفات الموظفين", f1d: "دليل رقمي آمن لحفظ المستندات الرسمية، وتفاصيل الاتصال، وعقود العمل لكل موظف.",
        f2: "حساب الأجور والرواتب", f2d: "ربط ساعات العمل الفعلية بكشوف المرتبات، وتتبع الإضافي والمكافآت بدقة.",
        f3: "تسجيل الحضور والانصراف", f3d: "إمكانية إثبات الحضور باستخدام الرموز السرية، أو الموقع الجغرافي للموظف، أو البصمة.",
        f4: "جدولة نوبات العمل الذكية", f4d: "بناء جداول العمل بناءً على نسب الإشغال المتوقعة لتقليل تكاليف العمالة الزائدة."
      },
      maintenance: {
        title: "الصيانة والأعمال الوقائية",
        desc: "قلل شكاوى النزلاء من خلال صيانة الغرف بشكل دوري، ومتابعة تذاكر الإصلاح، وجدولة الفحص الوقائي.",
        f1: "سجل الأصول والمعدات", f1d: "أرشيف متكامل لملفات أجهزة التكييف، والغلايات، وأجهزة الصالة الرياضية، ومعدات المطبخ.",
        f2: "تذاكر الصيانة الفورية", f2d: "إمكانية إرسال تذاكر الأعطال من مكتب الاستقبال فوراً لتطبيق الفني على الهاتف.",
        f3: "الصيانة الدورية الوقائية", f3d: "جدولة تنبيهات تلقائية لتنظيف الفلاتر، والفحص السنوي للمصاعد، واختبارات السلامة."
      },
      reports: {
        title: "التحليلات والتقارير المخصصة",
        desc: "احصل على شفافية كاملة لأداء فندقك ومؤشراته الحيوية مع لوحات تحكم وتقارير قابلة للتخصيص.",
        f1: "تقارير نسب الإشغال", f1d: "تحليل نسب الإشغال، ومتوسط مدة الإقامة (LOS)، وقنوات الحجز الأكثر فعالية.",
        f2: "تقارير الإيرادات التفصيلية", f2d: "تتبع إجمالي المبيعات، وإيرادات الغرف، والمطاعم، وملخصات وسائل الدفع المستخدمة.",
        f3: "مقارنة كفاءة الأداء", f3d: "مقارنة الأداء المالي للغرف المختلفة، وكفاءة موظفي الاستقبال، ومردود قنوات الحجز.",
        f4: "لوحات تحكم تفاعلية", f4d: "تثبيت أهم المؤشرات على شاشتك الرئيسية وجدولة إرسال التقارير التلقائية كملف PDF للبريد."
      }
    },
    showcase: {
      title: "التحكم التفاعلي بالعمليات",
      subtitle: "انقر على الفئات أدناه لمحاكاة لوحة تحكم إيوان المباشرة. واختبر سرعة تدفق البيانات.",
      occupancyChart: "محاكاة الإشغال",
      revenueChart: "نمو الإيرادات",
      bookingsChart: "سرعة الحجوزات اليومية",
      metrics: {
        occupancy: "نسبة الإشغال",
        revpar: "العائد للغرفة (RevPAR)",
        adr: "متوسط السعر اليومي (ADR)",
        activeGuests: "النزلاء النشطون"
      },
      chartLegend: {
        thisWeek: "الأسبوع الحالي",
        lastWeek: "الأسبوع الماضي",
        revenue: "الإيرادات ($)",
        bookings: "الحجوزات"
      }
    },
    whyUs: {
      title: "مصمم لقطاع ضيافة فائق الأداء",
      subtitle: "لماذا تقوم الفنادق المستقلة وسلاسل الفنادق العالمية بنقل بنيتها التحتية إلى إيوان.",
      faster: {
        t: "عمليات تشغيل أسرع",
        d: "قلل أوقات تسجيل الوصول بنسبة 65%. قم بتوزيع مهام التنظيف وتحديثات الاستقبال فوراً وبشكل تلقائي."
      },
      revenue: {
        t: "زيادة واضحة في الأرباح",
        d: "زد نسبة الحجوزات المباشرة وارفع متوسط سعر الغرفة اليومي باستخدام أدوات التسعير الذكي المدعومة بالذكاء الاصطناعي."
      },
      guestExp: {
        t: "تجربة نزلاء لا تُنسى",
        d: "أرسل رسائل الترحيب التلقائية، وفعّل خيار تسجيل الوصول الذاتي من الهاتف، واحفظ تفضيلات نزلاء فندقك."
      },
      cloud: {
        t: "نظام سحابي بالكامل",
        d: "أدِر بيانات فندقك بأمان وسهولة من أي جهاز وفي أي مكان. لا حاجة لخوادم محلية مكلفة وصعبة الصيانة."
      },
      secure: {
        t: "أمان بمستوى بنكي",
        d: "تشفير كامل للبيانات، والتوافق مع معايير PCI DSS للمدفوعات، ونسخ احتياطي تلقائي ويومي لقاعدة البيانات."
      },
      scalable: {
        t: "بنية تحتية مرنة",
        d: "سواء كنت تدير فيلا صغيرة من 15 غرفة أو منتجعاً ضخماً متعدد الفروع بـ 500 غرفة، فنظامنا يتوسع معك."
      }
    },
    ai: {
      title: "عمليات مستقبلية بالذكاء الاصطناعي",
      subtitle: "افتح آفاق التوقعات في قطاع الضيافة. يحلل الذكاء الاصطناعي في إيوان أنماط السوق لأتمتة القرارات.",
      forecasting: {
        t: "توقع الإيرادات بالذكاء الاصطناعي",
        d: "تحليل أكثر من 36 عاملاً في السوق لتوقع التدفقات النقدية، وهوامش الأرباح، والميزانيات المثالية لـ 90 يوماً القادمة."
      },
      insights: {
        t: "تحليل تفضيلات النزلاء",
        d: "تحليل مراجعات النزلاء، وخيارات الطعام والشراب، والطلبات السابقة لتقسيم العملاء وتوجيه حملات الولاء بدقة."
      },
      pricing: {
        t: "التسعير الذكي بالذكاء الاصطناعي",
        d: "حساب السعر الأمثل للغرفة على مدار الساعة من خلال ربط حالة الطقس، وحركة الطيران، وحجم الطلب، وأسعار المنافسين."
      },
      prediction: {
        t: "توقع نسب الإشغال",
        d: "تنبؤ بفترات الإشغال المنخفضة قبل 6 أسابيع من حدوثها، مما يمنح فريق التسويق فرصة لإطلاق حملات ترويجية مستهدفة."
      },
      bi: {
        t: "ذكاء الأعمال الفوري",
        d: "استخرج التقارير بمجرد الكتابة. اكتب 'قارن نمو المطعم بإيرادات الغرف' واحصل على رسومات بيانية فورية."
      }
    },
    integrations: {
      title: "منظومة ربط وتكامل شاملة",
      subtitle: "يتكامل إيوان بسلاسة مع أدواتك الحالية. اربط جميع خدماتك بضغطة زر واحدة.",
      desc: "تزامن فوري للمعلومات. نحن ندعم الربط ثنائي الاتجاه مع أفضل الأنظمة لتبسيط الفواتير، والتوزيع الرقمي، والأتمتة التامة للعمليات.",
      connected: "متصل"
    },
    testimonials: {
      title: "آراء أصحاب الفنادق ومشغليها",
      subtitle: "اقرأ قصص نجاح مديري الفنادق المستقلة والمنتجعات العالمية مع نظام إيوان.",
      list: [
        {
          name: "سارة جينكينز",
          role: "المديرة العامة",
          hotel: "منتجع ذا غراند هورايزون",
          quote: "لقد غيّر إيوان طريقة تعاون فريقنا بالكامل. أصبحت عمليات استلام الفترات سهلة، والتدبير المنزلي أسرع بنسبة 40%، وارتفعت حجوزاتنا المباشرة بنسبة 35% خلال أربعة أشهر فقط.",
          rating: 5
        },
        {
          name: "مارشيلو روسي",
          role: "مالك فندق بوتيك",
          hotel: "فيلا بيلاجيو - بحيرة كومو",
          quote: "دعم اللغات المختلفة والتصميم الأنيق رائع للغاية. لم يحتج موظفونا إلا لساعتين من التدريب قبل بدء التشغيل الفعلي. كما أن ربط القنوات سريع للغاية ومنع تماماً الحجوزات المكررة.",
          rating: 5
        },
        {
          name: "خالد المنصور",
          role: "مدير العمليات",
          hotel: "مجموعة فنادق واحة النخيل",
          quote: "كانت إدارة 5 فنادق بحساب واحد حلماً صعب المنال مع الأنظمة القديمة. لقد ساعدتنا وحدة الذكاء الاصطناعي في تحسين أسعارنا ورفع متوسط العائد لكل غرفة (RevPAR) بنسبة 22%.",
          rating: 5
        }
      ]
    },
    pricing: {
      title: "خطط أسعار مرنة لكل الأحجام",
      subtitle: "اختر الخطة المناسبة لحجم غرف فندقك. يمكنك التبديل أو الإلغاء في أي وقت.",
      monthly: "شهرياً",
      yearly: "سنوياً",
      save: "وفر 20%",
      popular: "الأكثر شيوعاً",
      getStarted: "ابدأ الفترة التجريبية",
      featuresHeader: "كل ما في الخطة السابقة، بالإضافة إلى:",
      tiers: {
        starter: {
          name: "الباقة الأساسية",
          priceMon: "49",
          priceYear: "39",
          desc: "مثالية للفنادق الصغيرة، والفلل، ودور الضيافة المحدودة.",
          features: [
            "حتى 25 غرفة",
            "العمليات الأساسية لنظام PMS",
            "محرك الحجز المباشر للموقع",
            "نظام إدارة علاقات النزلاء الأساسي",
            "تنبيهات النزلاء عبر البريد الإلكتروني",
            "دعم فني عبر البريد 24/7"
          ]
        },
        pro: {
          name: "الباقة الاحترافية",
          priceMon: "129",
          priceYear: "99",
          desc: "للفنادق المتوسطة، والمنتجعات، والمنشآت قيد التوسع.",
          features: [
            "حتى 100 غرفة",
            "تقويم متقدم وعمليات مرنة",
            "مدير قنوات حجز ثنائي الاتجاه",
            "محرك التسعير الذكي بالذكاء الاصطناعي",
            "ربط مطعم وسبا الفندق (POS)",
            "الحسابات وإصدار الفواتير المخصصة",
            "تنبيهات واتساب ورسائل نصية SMS",
            "دعم ذو أولوية (هاتف ومحادثة)"
          ]
        },
        enterprise: {
          name: "باقة المؤسسات",
          priceMon: "349",
          priceYear: "279",
          desc: "للمجموعات الفندقية، والمنتجعات الضخمة، والشركات الكبرى.",
          features: [
            "عدد غرف وفروع غير محدود",
            "مجموعة أدوات الذكاء الاصطناعي كاملة",
            "إدارة وجدولة الموظفين الآلية",
            "أنظمة المخزون والمشتريات الشاملة",
            "لوحة تخطيط صيانة الفندق الوقائية",
            "وصول كامل لواجهة البرمجة (API)",
            "مدير حساب مخصص للفندق",
            "تدريب وتشغيل ميداني مباشر للفريق"
          ]
        }
      }
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "لديك استفسارات حول الانتقال أو التدريب أو الإعداد؟ لدينا الإجابات.",
      items: [
        {
          q: "كم من الوقت تستغرق عملية الإعداد والتشغيل؟",
          a: "للفنادق الصغيرة، يستغرق الإعداد أقل من 24 ساعة. بالنسبة للمنتجعات الكبيرة، يقوم فريقنا بنقل بيانات غرفك، وسجلات النزلاء السابقة، وحجوزاتك الحالية خلال 3 إلى 5 أيام عمل، مع ضمان استمرار العمل الفندقي دون أي توقف."
        },
        {
          q: "هل التدريب الفني لفريق العمل مشمول في الخدمة؟",
          a: "نعم! تشمل الباقة الاحترافية وباقة المؤسسات جلسات تدريبية تفاعلية عن بعد. كما نوفر أكاديمية تعليمية متكاملة عبر الإنترنت تحتوي على شروحات فيديو، وأدلة مبسطة، ومراجع بحثية لجميع الموظفين."
        },
        {
          q: "هل يمكنني إدارة فنادق متعددة بحساب واحد؟",
          a: "بكل تأكيد. يدعم إيوان إدارة العقارات المتعددة. يمكنك التنقل بين الفنادق المختلفة من قائمة منسدلة واحدة، ودمج تحليلاتك المالية، ومشاركة قاعدة بيانات ولاء النزلاء، وتحديد قواعد تسعير مستقلة."
        },
        {
          q: "هل يتوفر تطبيق للهاتف المحمول؟",
          a: "نعم. يتوافق إيوان بالكامل مع شاشات الهواتف والأجهزة اللوحية ويدعم التشغيل كتطبيق. كما نوفر تطبيقات هاتفية مخصصة لفرق التدبير المنزلي والصيانة لتسريع وتيرة التواصل والتشغيل الميداني."
        },
        {
          q: "هل بيانات فندقنا آمنة ومحمية؟",
          a: "نعم بالكامل. نطبق تشفير قاعدة البيانات بمستوى بنكي AES-256، ونفرض اتصالات SSL/TLS المشفرة، ونلتزم بمعايير PCI DSS العالمية لمعالجة وحفظ المدفوعات، مع الاحتفاظ بنسخ احتياطية لحظية في مراكز بيانات متعددة لمنع فقدان البيانات."
        }
      ]
    },
    cta: {
      title: "أحدث ثورة في إدارة فندقك اليوم",
      subtitle: "انضم إلى آلاف الفنادق عالمياً التي تدير منشآتها بنسب إشغال عالية باستخدام إيوان. ضاعف حجوزاتك، ودع عنك عناء التشغيل المجهد.",
      demo: "احجز عرضاً توضيحياً",
      trial: "ابدأ تجربة مجانية لـ 14 يوماً",
      noCard: "لا يتطلب بطاقة ائتمان. إلغاء في أي وقت."
    },
    footer: {
      desc: "نظام تشغيل وإدارة الفنادق السحابي المصمم لأتمتة العمليات الفندقية، وزيادة الحجوزات المباشرة، وتعظيم العائدات المادية.",
      product: "المنتج",
      company: "الشركة",
      legal: "قانوني",
      newsletter: "اشترك في نشرتنا البريدية",
      newsletterDesc: "احصل على استراتيجيات الضيافة، وتحديثات النظام، وتحليلات السوق مباشرة في بريدك.",
      subscribe: "اشترك الآن",
      successMsg: "تم الاشتراك بنجاح! شكرًا لك.",
      allRightsReserved: "جميع الحقوق محفوظة."
    }
  }
} as const;

export type TranslationKey = keyof typeof translations;
