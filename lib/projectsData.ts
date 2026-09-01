export interface Project {
  slug: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  fullOverview: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  challenges: string;
  outcome: string;
  liveUrl?: string;
  githubUrl?: string;
  imagePlaceholder: string;
  badge?: string;
  highlights?: { label: string; value: string }[];
}

export const projectsData: Project[] = [
  {
    slug: "tailoring-turba",
    number: "01",
    name: "TAILORING TURBA",
    category: "CLOTHING MANUFACTURING & BESPOKE E-COMMERCE",
    tagline: "Live bulk apparel manufacturing & bespoke custom tailoring e-commerce platform across India.",
    description:
      "A high-end clothing manufacturing and bespoke tailoring platform built from scratch with interactive customizers, real-time measurement inputs, and automated production pipelines.",
    fullOverview:
      "Tailoring Turba is a full-scale web platform built for a modern clothing manufacturing and custom tailoring brand. Engineered single-handedly from architectural design to cloud deployment, the platform powers the entire customer journey—from bespoke 3D/interactive garment customization and custom measurements to an intuitive admin management suite for catalogs, materials, and custom orders.",
    problem:
      "Traditional custom tailoring and garment manufacturing struggle with fragmented communication, inaccurate manual measurement collection, disconnected inventory & fabric tracking, and generic e-commerce templates that fail to capture the craftsmanship of bespoke luxury apparel.",
    solution:
      "Architected and developed a unified fashion platform featuring an interactive Garment Journey customizer, custom measurement calculation logic, material selection showcase, real-time order tracking, and an admin management dashboard for live product and order handling. Built using modern agentic AI-assisted development workflows for rapid iteration and high quality.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Spline / 3D",
      "Node.js",
      "PostgreSQL / REST APIs",
      "Agentic AI (Sonnet & Gemini)",
    ],
    features: [
      "Interactive Garment Customizer & Material Selection with rich visual feedback",
      "Precision bespoke measurement input engine with validation and fit recommendations",
      "Admin management panel for product catalogs, custom order statuses, and pricing",
      "High-performance responsive UI with fluid page transitions & smooth micro-interactions",
      "Complete SEO architecture, custom metadata, and optimized Core Web Vitals",
      "End-to-end deployment with domain setup, automated testing, and production monitoring",
    ],
    challenges:
      "Balancing rich visual motion, high-resolution textile textures, and complex multi-step customizer state without compromising page load speeds or mobile responsiveness.",
    outcome:
      "Delivered and deployed a live, commercial-grade clothing manufacturing platform in ~2 months, enabling seamless bespoke garment ordering, reducing order ambiguity, and streamlining operational handoffs.",
    liveUrl: "https://tailoringturba.com",
    imagePlaceholder: "/images/projects/turba-preview.jpg",
    badge: "LIVE PRODUCTION SITE",
    highlights: [
      { label: "Deployment", value: "Production Live" },
      { label: "Delivery Time", value: "~2 Months" },
      { label: "Architecture", value: "Full-Stack Next.js" },
      { label: "Customizer", value: "3D & Interactive" },
    ],
  },
  {
    slug: "coreg1",
    number: "02",
    name: "COREG1 INVENTORY SOFTWARE",
    category: "OFFLINE-FIRST INVENTORY MANAGEMENT & POS",
    tagline: "Commercial-grade offline-first inventory management, barcode billing & ERP desktop software built with Electron, React, and SQLite.",
    description:
      "A complete offline-first desktop management software for retail and wholesale businesses, featuring instant barcode billing, real-time stock valuation, credit sales ledgers, and automated daily backups.",
    fullOverview:
      "CoreG1 is a modern desktop inventory management software and Point of Sale (POS) system engineered for retail businesses, wholesalers, and supply chain operations. Built with Electron 28, React 18, and an embedded SQLite database engine, the software operates completely offline with instant sub-millisecond query responses, eliminating internet downtime during peak store hours. It provides end-to-end sales billing, automated batch-level stock depletion, low-inventory alerts, customer credit ledger tracking, vendor purchase returns, and automatic daily database backups.",
    problem:
      "Retailers and warehouse operators face long checkout queues, inventory discrepancies, stockouts, frequent credit sales, and volatile internet connections. Legacy MS-DOS/DBF inventory software is outdated, prone to data corruption, and difficult to operate, while modern cloud-only POS systems cause disastrous billing halts whenever internet connectivity drops.",
    solution:
      "Designed and built a resilient offline-first desktop architecture using Electron and SQLite, paired with a modern glassmorphic React UI. Implemented custom IPC handlers for high-speed barcode scanner inputs and thermal printing, an automated stock valuation and batch tracking engine, a customer credit management system with debt aging ledgers, and automated migration scripts to seamlessly convert legacy DBF data into relational SQLite schemas.",
    techStack: [
      "Electron 28",
      "React 18",
      "SQLite (Offline-First)",
      "Node.js",
      "JavaScript (ES6+)",
      "IPC Architecture",
      "Playwright & Jest",
      "NSIS Installer",
    ],
    features: [
      "High-Speed Barcode Checkout with keyboard-first shortcuts and automated GST/tax invoicing",
      "Real-Time Stock Valuation & Inventory Tracking with automated reorder alerts",
      "Customer Credit Sales Ledger with partial payment collection and debt balance aging",
      "Vendor Purchase Management with automated stock-in reconciliation and supplier ledgers",
      "Customer & Supplier Directory with full transaction histories and reference tracking",
      "Comprehensive Business Analytics: fast/slow-moving items, daily profit margins, and GST reports",
      "Automated Daily Database Backups and zero-configuration data recovery tools",
      "Legacy Data Migration Utility (DBF to SQLite) for seamless onboarding of existing retail stores",
      "Native Windows Installer (.exe) & Portable executable packaged via NSIS",
    ],
    challenges:
      "Achieving sub-10ms UI responsiveness during rapid multi-item barcode scanning while maintaining synchronous ACID database writes in SQLite across complex relational tables (Sales, Batches, Inventory, Ledger) without blocking the React main thread.",
    outcome:
      "Delivered a rock-solid, commercial-grade desktop inventory management system capable of operating 100% offline, reducing checkout time by over 50% and eliminating stock discrepancies with automated inventory reconciliation.",
    imagePlaceholder: "/images/projects/coreg1-preview.jpg",
    badge: "OFFLINE-FIRST DESKTOP APPLICATION",
    highlights: [
      { label: "Environment", value: "100% Offline-First" },
      { label: "Framework", value: "Electron 28 + React 18" },
      { label: "Database", value: "Embedded SQLite" },
      { label: "Distribution", value: "Windows EXE & Portable" },
    ],
  },
];
