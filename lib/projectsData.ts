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
}

export const projectsData: Project[] = [
  {
    slug: "tyfoon",
    number: "01",
    name: "TYFOON",
    category: "AI JOB DISCOVERY PLATFORM",
    tagline: "Personalized AI-powered job discovery, resume normalization & opportunity manager.",
    description:
      "A personal job-search system built to discover, normalize, tailor, and manage real opportunities across tech hubs.",
    fullOverview:
      "TYFOON is an intelligent career discovery platform designed to strip away spam and low-signal job postings. It aggregates real-time listings, normalizes job descriptions using LLMs, matches tech stacks against candidate profiles, and assists in tailoring applications efficiently.",
    problem:
      "Modern job searching is fragmented across dozens of boards with inconsistent titles, keyword stuffing, and outdated listings. Candidates waste hundreds of hours manually filtering irrelevance.",
    solution:
      "Built a unified ingestion engine and LLM-assisted processing pipeline that categorizes roles, extracts tech stack requirements, grades relevance scores, and manages application stages in a clean, unified workflow.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "LLM / OpenAI API",
      "PostgreSQL",
      "TailwindCSS",
    ],
    features: [
      "Automated job listing aggregation and deduplication pipeline",
      "AI-driven skill matching & candidate compatibility score",
      "Resume tailoring recommendations based on raw job specs",
      "Kanban-style application tracker with status workflow",
      "Real-time notifications & bookmarking dashboard",
    ],
    challenges:
      "Handling unstructured job description formats from diverse sources required building robust parsing prompts and robust error fallbacks.",
    outcome:
      "Transformed job discovery from a manual multi-site chore into a streamlined, high-signal command center.",
    imagePlaceholder: "/images/projects/tyfoon-preview.jpg",
  },
  {
    slug: "coreg1",
    number: "02",
    name: "COREG1",
    category: "ENTERPRISE POS / ERP",
    tagline: "Commercial-grade inventory, billing, and enterprise business management platform.",
    description:
      "A commercial-grade inventory, billing and business management experience built for performance and reliability.",
    fullOverview:
      "COREG1 is a full-featured Point of Sale (POS) and Enterprise Resource Planning (ERP) platform designed for retail and wholesale businesses. It supports multi-store inventory tracking, high-speed checkout billing, tax reporting, and analytical insights.",
    problem:
      "Legacy POS systems suffer from slow interfaces, complex multi-step billing, clunky offline handling, and poor inventory synchronization across store locations.",
    solution:
      "Engineered an ultra-responsive web dashboard with keyboard shortcuts for rapid barcode billing, real-time inventory updates, and multi-tenant store role management.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Chart.js",
    ],
    features: [
      "High-speed barcode scanning & instant receipt generation",
      "Multi-location inventory tracking with low-stock alerts",
      "Daily sales reporting, GST/tax calculation & analytics summaries",
      "User role permissions (Cashier, Manager, Admin)",
      "Customer purchase history & loyalty tracking",
    ],
    challenges:
      "Optimizing database transactions during peak checkout hours required indexing key lookup fields and implementing pessimistic concurrency locks.",
    outcome:
      "Delivered a reliable POS/ERP experience that minimizes checkout latency and streamlines inventory reconciliation.",
    imagePlaceholder: "/images/projects/coreg1-preview.jpg",
  },
  {
    slug: "tailoring-turba",
    number: "03",
    name: "TAILORING TURBA",
    category: "FASHION E-COMMERCE",
    tagline: "Editorial fashion storefront with bespoke design system and smooth visual storytelling.",
    description:
      "A premium fashion storefront with a strong editorial visual identity and tailored shopping experience.",
    fullOverview:
      "TAILORING TURBA is an e-commerce platform tailored for bespoke fashion and luxury apparel. Built with an editorial visual aesthetic, dynamic product showcases, custom fitting options, and seamless cart checkout.",
    problem:
      "Standard e-commerce templates lack personality and fail to convey the craftsmanship of custom tailored luxury apparel.",
    solution:
      "Designed a visually striking, editorial-style storefront with smooth image transitions, custom size customization forms, and fluid cart animations.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Framer Motion",
      "Stripe API",
      "TailwindCSS",
    ],
    features: [
      "Editorial product showcase with micro-interactions",
      "Bespoke measurement customization form for custom tailors",
      "Slide-out quick cart & instant checkout flow",
      "Dynamic filtering by collection, fabric, and fit",
      "Fully responsive mobile-first shopping UI",
    ],
    challenges:
      "Combining complex Framer Motion transitions with high-resolution apparel imagery required careful image optimization and lazy-loading strategies.",
    outcome:
      "Created an immersive fashion e-commerce experience that balances high aesthetics with fast load performance.",
    imagePlaceholder: "/images/projects/turba-preview.jpg",
  },
];
