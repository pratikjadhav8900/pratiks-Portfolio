// ============================================================
// PRATIK JADHAV — Central Profile Data
// All components consume from here. Update here to update everywhere.
// ============================================================

export const personal = {
  name: "Pratik Jadhav",
  initials: "PJ",
  role: "Full-Stack Developer · AI Tools & Automation · Data Analyst",
  tagline: "Full-Stack Developer / AI Tools & Automation / Data Analyst",
  bio: [
    "Full-Stack Developer & Data Analyst with deep expertise in AI tools (Sonnet 4.6, Gemini 3.1 Pro), Python, React/Next.js, SQL, Power BI, and workflow automation.",
    "Experienced in building complete production platforms from scratch using agentic AI, delivering 15+ freelancing projects, and engineering commercial desktop & web applications.",
  ],
  location: "Pune, Maharashtra, India",
  phone: "+91 9420434728",
  openTo: "Open to engineering, product & analytics opportunities",
  email: "pratikjadhav.job@gmail.com",
  resumeUrl: "/resume.pdf", // Copied from Pratik-data.pdf
  socials: {
    github: "https://github.com/pratikjadhav8900",
    linkedin: "https://www.linkedin.com/in/pratik-jadhav-135a93229/",
  },
};

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  dateRange: string;
  type: "full-time" | "internship" | "contract" | "part-time" | "freelance";
  description: string;
  responsibilities: string[];
  highlights?: string[];
  isCurrent?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    id: "tailoring-turba-founding-dev",
    role: "Founding Full-Stack Developer",
    company: "Tailoring Turba — Clothing Manufacturing Startup",
    location: "Pune, India",
    dateRange: "Apr 2026 — Present",
    type: "full-time",
    isCurrent: true,
    description:
      "Single-handedly built the entire website using agentic AI (Sonnet 4.6, Gemini 3.1 Pro, Julie, Spline), owning architecture, logic design, frontend, backend, database integration, and production deployment in ~2 months.",
    responsibilities: [
      "Single-handedly built the entire website using agentic AI tools (Sonnet 4.6, Gemini 3.1 Pro, Julie, Spline)",
      "Owned architecture, logic design, frontend, backend, and database integration",
      "Purchased domain, managed hosting, made site live and fully operational",
      "Implemented SEO architecture to improve search visibility and organic traffic",
      "Executed manual and automated testing (unit, integration, end-to-end)",
      "Served as a founding technical member contributing to product strategy and technical roadmap",
    ],
    highlights: [
      "Agentic AI (Sonnet 4.6, Gemini 3.1 Pro)",
      "Full-Stack Architecture",
      "Database Integration",
      "Domain, Hosting & Deployment",
      "SEO & Organic Visibility",
      "Unit, Integration & E2E Testing",
    ],
  },
  {
    id: "be10x-tech-bda",
    role: "Technical Business Development Associate",
    company: "BE10X — House of EdTech",
    location: "Pune, India",
    dateRange: "Jan 2026 — Mar 2026",
    type: "full-time",
    description:
      "Handled inside sales and generated 10x monthly revenue, translated technical client requirements into specifications, and automated CRM analytics.",
    responsibilities: [
      "Handled inside sales and generated 10x monthly revenue for the company",
      "Translated client requirements into technical specifications for internal engineering teams",
      "Built automated lead tracking dashboards using Excel and Power BI, improving follow-up efficiency by 30%",
      "Used SQL to extract customer insights from CRM data for data-driven sales targeting",
      "Collaborated with the product team to document API requirements and integration flows",
    ],
    highlights: [
      "10x Monthly Revenue Generated",
      "+30% Follow-up Efficiency",
      "Power BI & Excel Dashboards",
      "SQL CRM Analytics",
      "Technical API Specifications",
    ],
  },
  {
    id: "trinity-polytechnic-lecturer",
    role: "Lecturer — Python & Data Visualization",
    company: "Trinity Polytechnic",
    location: "Pune, India",
    dateRange: "Jun 2025 — Sep 2025",
    type: "full-time",
    description:
      "Taught Python, SQL, and Data Visualization to 150+ students, conducted hands-on project labs, and guided 25+ student applications.",
    responsibilities: [
      "Taught Python, SQL, and Data Visualization to 150+ students per year",
      "Conducted hands-on workshops and real-world data handling exercises",
      "Guided 25+ student projects using Python, SQL, and Power BI",
      "Improved curriculum with practical problem-solving and visualization modules",
    ],
    highlights: [
      "150+ Students Taught / Year",
      "25+ Student Projects Guided",
      "Python & SQL Labs",
      "Power BI & Data Visualization",
    ],
  },
  {
    id: "freelance-developer-data-analyst",
    role: "Freelance Developer / Data Analyst",
    company: "Self-Employed / Academic & Client Projects",
    location: "Pune, India",
    dateRange: "Apr 2024 — May 2025",
    type: "freelance",
    description:
      "Delivered 15+ academic and client projects including ML research systems (₹30k/project), automation tools, and 10+ B.Tech/Diploma data applications.",
    responsibilities: [
      "Delivered 15+ academic and client projects including automation tools, dashboards, and research systems",
      "Built M.Tech projects worth ₹30k per project in Machine Learning and Data Science domains",
      "Built 10+ B.Tech and Diploma projects using SQL, Python, Excel, and Power BI",
      "Created complete technical project documentation and deployment pipelines",
      "Worked on academic research integrations and data modelling",
    ],
    highlights: [
      "15+ Projects Delivered",
      "M.Tech ML Projects (₹30k / project)",
      "10+ B.Tech & Diploma Systems",
      "Full Documentation & Pipelines",
    ],
  },
  {
    id: "tailoring-turba-backend-intern",
    role: "Backend Operations Intern",
    company: "Tailoring Turba",
    location: "Pune, India",
    dateRange: "Oct 2023 — Mar 2024",
    type: "internship",
    description:
      "Automated Excel workflows saving 6+ hours per week, optimized order processing, and managed personalization data pipelines.",
    responsibilities: [
      "Automated Excel workflows saving 6+ hours per week in operational overhead",
      "Improved backend operations and structured data templates for fashion production",
      "Managed order processing and client personalization data flows",
      "Streamlined end-to-end workflow tracking from order intake to dispatch",
    ],
    highlights: [
      "Saved 6+ Hours / Week",
      "Excel Workflow Automation",
      "Order Processing Pipelines",
      "Personalization Data Management",
    ],
  },
];

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  dateRange: string;
  completed: boolean;
  details?: string;
}

export const education: EducationItem[] = [
  {
    id: "sppu-be-cs",
    degree: "B.E. Computer Engineering",
    field: "Computer Engineering",
    institution: "Sinhgad Academy of Engineering, Pune (SPPU)",
    location: "Pune, Maharashtra",
    dateRange: "2020 – 2024",
    completed: true,
    details:
      "Undergraduate engineering degree covering data structures, algorithms, database management, software engineering, operating systems, and computer networks.",
  },
  {
    id: "navbharat-hsc-science",
    degree: "HSC — Higher Secondary Certificate",
    field: "Science",
    institution: "Navbharat Junior College",
    location: "Mul, Maharashtra",
    dateRange: "2019 – 2020",
    completed: true,
    details: "Higher secondary education with specialization in Science stream.",
  },
];

export interface CertificationItem {
  name: string;
  provider: string;
}

export const certifications: CertificationItem[] = [
  { name: "Machine Learning & NLP Bootcamp", provider: "KISHNAIK" },
  { name: "Advanced Software Engineering Simulation", provider: "Forage" },
  { name: "SQL Bootcamp", provider: "TechTFQ" },
  { name: "Complete Web Development Bootcamp", provider: "UDEMY" },
];

export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Data & Databases",
    skills: [
      "SQL",
      "MySQL",
      "PostgreSQL",
      "Power BI",
      "Power Query",
      "DAX",
      "Excel (Advanced)",
      "Google Sheets",
    ],
  },
  {
    label: "Automation & ETL",
    skills: [
      "Python (Pandas, NumPy, Matplotlib)",
      "API Integration",
      "Data Pipelines",
      "ETL Workflows",
    ],
  },
  {
    label: "Full-Stack & Web",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Frontend + Backend Development",
      "Web Deployment",
      "Domain Management",
      "SEO",
    ],
  },
  {
    label: "AI & Multi-Agent",
    skills: [
      "Prompt Engineering",
      "Multi-Agent Workflows (Sonnet 4.6, Gemini 3.1 Pro)",
      "RAG & Embeddings",
      "LangChain",
      "Spline",
    ],
  },
  {
    label: "Testing & Cloud Tools",
    skills: [
      "Manual & Automated Testing (Unit, Integration, E2E)",
      "GCP (Vertex AI)",
      "Docker",
      "Git & GitHub",
      "JIRA",
    ],
  },
];

export const whatIDo = [
  {
    number: "01",
    title: "Full-Stack Development",
    description:
      "Building resilient frontend experiences with React and Next.js, backed by robust Node.js and Python server-side architectures.",
  },
  {
    number: "02",
    title: "Product Development",
    description:
      "Turning real-world problems into useful digital products — from initial concept through architecture, build, and shipping.",
  },
  {
    number: "03",
    title: "AI Integration",
    description:
      "Using LLMs, RAG pipelines, LangChain, and vector databases to build AI-powered features that actually work in production.",
  },
  {
    number: "04",
    title: "UI / UX & Motion",
    description:
      "Designing and building polished interfaces with thoughtful interaction design, micro-animations, and editorial visual quality.",
  },
];

export const currently = {
  building: "Tailoring Turba Platform",
  exploring: "AI + Product Development",
  openTo: "Engineering & Product Opportunities",
};

// ============================================================
// STORY — "THE 60 SECOND VERSION"
// Data for the interactive storytelling section.
// Audio field is prepared for a future voice recording.
// To enable: set audioUrl to a real file path (e.g. "/story.mp3")
// ============================================================

export interface StoryStep {
  id: string;
  eyebrow: string;
  title: string;
  titleItalic?: string; // appended in italic/serif
  subtitle?: string[];  // short lines below title
  body: string;
  type?: "default" | "projects" | "process" | "areas";
  items?: string[];     // used by "process" and "areas" types
  skills?: string[];    // optional tech pills (type: "areas")
}

export const story = {
  label: "THE 60 SECOND VERSION",
  audioUrl: null as string | null, // set to e.g. "/story.mp3" when ready
  steps: [
    {
      id: "who",
      eyebrow: "WHO AM I?",
      title: "I'm Pratik.",
      titleItalic: undefined,
      subtitle: ["Full-Stack Developer.", "AI Tools & Automation.", "Data Analyst."],
      body: "I engineer full-stack web platforms, modern desktop software, and intelligent AI-powered workflows.",
      type: "default",
    },
    {
      id: "what",
      eyebrow: "WHAT DO I BUILD?",
      title: "Real",
      titleItalic: "products.",
      subtitle: undefined,
      body: "Not prototypes that live in a folder. Things that work — from AI job platforms to enterprise billing to editorial storefronts.",
      type: "projects",
      items: undefined,
    },
    {
      id: "how",
      eyebrow: "HOW DO I THINK?",
      title: "Problem",
      titleItalic: "first.",
      subtitle: undefined,
      body: "I start with what needs to exist and why it matters. The technology comes after. Always.",
      type: "process",
      items: ["PROBLEM", "THINK", "BUILD", "ITERATE"],
    },
    {
      id: "bring",
      eyebrow: "WHAT DO I BRING?",
      title: "A full",
      titleItalic: "stack.",
      subtitle: undefined,
      body: "From the database to the interface — and increasingly, the AI layer in between.",
      type: "areas",
      items: [
        "FULL-STACK DEVELOPMENT",
        "AI / GENAI",
        "PRODUCT THINKING",
        "UI / UX",
        "MOTION & INTERACTION",
      ],
      skills: [
        "React", "Next.js", "TypeScript", "Python",
        "Node.js", "PostgreSQL", "LLMs", "RAG",
      ],
    },
    {
      id: "next",
      eyebrow: "WHAT'S NEXT?",
      title: "Interesting",
      titleItalic: "problems.",
      subtitle: undefined,
      body: "Good problems. Good people. Opportunities to build things that are actually useful.",
      type: "areas",
      items: ["ENGINEERING", "PRODUCT", "AI", "CREATIVE TECHNOLOGY"],
    },
  ] as StoryStep[],
};

// ============================================================
// SERVICES & CLIENT WORK DATA
// What clients, founders & businesses can hire Pratik to build.
// ============================================================

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  capabilities: string[];
  techStack: string[];
  relatedProject?: {
    name: string;
    slug: string;
  };
}

export const servicesData: ServiceItem[] = [
  {
    id: "business-websites",
    number: "01",
    title: "BUSINESS WEBSITES",
    shortDescription: "Modern, responsive websites designed around your business, brand, and customer journey.",
    description: "I design and develop tailored business websites that reflect brand identity, communicate value clearly, and turn visitors into clients across desktop and mobile devices.",
    capabilities: [
      "Company & Brand Websites",
      "Custom Frontend Architecture",
      "Responsive & Mobile-First Design",
      "SEO & Core Web Vitals Optimization",
      "CMS & Headless Content Setup",
      "Fast & Secure Cloud Deployment",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind / CSS", "Vercel"],
    relatedProject: {
      name: "Tailoring Turba",
      slug: "tailoring-turba",
    },
  },
  {
    id: "ecommerce-solutions",
    number: "02",
    title: "E-COMMERCE SOLUTIONS",
    shortDescription: "Complete online storefront experiences focused on usability, product presentation, and conversion.",
    description: "From product catalogues and shopping carts to secure checkout flows and inventory management, I build dependable digital storefronts that make buying effortless.",
    capabilities: [
      "Custom Digital Storefronts",
      "Product Catalogues & Filtering",
      "Cart & Checkout Systems",
      "Payment Gateway Integration",
      "Inventory & Order Management",
      "Mobile Shopping Optimization",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe / Payment APIs", "Tailwind"],
    relatedProject: {
      name: "Tailoring Turba",
      slug: "tailoring-turba",
    },
  },
  {
    id: "landing-pages",
    number: "03",
    title: "LANDING PAGES",
    shortDescription: "Focused landing pages designed for campaigns, products, services, and lead generation.",
    description: "High-impact, conversion-engineered landing pages built with clear visual hierarchy, crisp typography, and persuasive product storytelling.",
    capabilities: [
      "Product Launch Pages",
      "Lead Capture & Contact Funnels",
      "Campaign & Promo Pages",
      "Fast Load Times & Micro-animations",
      "Form & CRM Integrations",
      "Analytics & Event Tracking",
    ],
    techStack: ["React", "Next.js", "Framer Motion", "TypeScript", "Tailwind"],
  },
  {
    id: "seo-optimization",
    number: "04",
    title: "SEO OPTIMIZATION",
    shortDescription: "Technical and on-page improvements designed to make websites more search-friendly and discoverable.",
    description: "Auditing and optimizing site architecture, crawlability, Core Web Vitals, metadata, and structured schema so your web properties rank effectively on organic search.",
    capabilities: [
      "Technical SEO Audits",
      "On-Page Structure & Meta Tags",
      "Core Web Vitals Performance",
      "Semantic Schema Markup (JSON-LD)",
      "Sitemap & Robots Configuration",
      "Mobile Usability & Indexing",
    ],
    techStack: ["Google Search Console", "Lighthouse", "Schema.org", "Next.js Metadata API"],
  },
  {
    id: "google-ads",
    number: "05",
    title: "GOOGLE ADS",
    shortDescription: "Paid search campaigns and landing-page experiences designed to reach relevant audiences.",
    description: "Structuring targeted Google Search campaigns coupled directly with high-relevance landing pages to minimize bounce rates and connect with high-intent searchers.",
    capabilities: [
      "Search Campaign Architecture",
      "Keyword & Intent Research",
      "Ad Copywriting & Asset Setup",
      "Landing Page Alignment",
      "Conversion & Goal Tracking",
      "Continuous Campaign Maintenance",
    ],
    techStack: ["Google Ads", "Google Tag Manager", "Google Analytics 4"],
  },
  {
    id: "meta-ads",
    number: "06",
    title: "META ADS",
    shortDescription: "Facebook and Instagram advertising support connecting campaigns with high-converting landing experiences.",
    description: "Campaign setup, audience targeting, and custom creative-to-landing funnel alignment across Facebook and Instagram to drive qualified interest.",
    capabilities: [
      "Audience Segmentation & Targeting",
      "Campaign & Ad Set Structure",
      "Creative-to-Landing Match",
      "Meta Pixel & Event Setup",
      "Retargeting & Engagement Funnels",
      "Performance Diagnostics",
    ],
    techStack: ["Meta Ads Manager", "Meta Pixel", "Conversions API"],
  },
  {
    id: "ai-automation",
    number: "07",
    title: "AI & AUTOMATION",
    shortDescription: "AI-powered workflows and automation designed to reduce repetitive work and improve operational efficiency.",
    description: "Integrating LLMs, vector search, automated pipelines, and third-party APIs to streamline business workflows, automate data handling, and power custom tools.",
    capabilities: [
      "Custom AI Workflows",
      "LLM & RAG Pipeline Setup",
      "API & Webhook Integrations",
      "Automated Data Extraction",
      "Business Process Automation",
      "Interactive Assistant Interfaces",
    ],
    techStack: ["Python", "LangChain", "OpenAI / Anthropic APIs", "Vector DBs", "Node.js"],
    relatedProject: {
      name: "Tailoring Turba Platform",
      slug: "tailoring-turba",
    },
  },
  {
    id: "website-maintenance",
    number: "08",
    title: "WEBSITE MAINTENANCE",
    shortDescription: "Ongoing technical support and maintenance to keep websites updated, functional, secure, and healthy.",
    description: "Reliable ongoing engineering support, dependency upgrades, security monitoring, uptime tracking, and rapid turnaround for content updates and bug fixes.",
    capabilities: [
      "Content & Asset Updates",
      "Performance & Speed Tuning",
      "Dependency & Security Patches",
      "Bug Fixes & Layout Tweaks",
      "Uptime & Form Monitoring",
      "Backup & Rollback Procedures",
    ],
    techStack: ["Git / GitHub", "Vercel / AWS", "DNS & Domains", "Monitoring Tools"],
  },
  {
    id: "data-analytics",
    number: "09",
    title: "DATA & ANALYTICS",
    shortDescription: "Turning business data into dashboards, reports, and actionable insights.",
    description: "Cleaning raw operational data, crafting performant SQL queries, and building intuitive dashboards in Power BI and Excel to give stakeholders clear business visibility.",
    capabilities: [
      "Custom Business Dashboards",
      "SQL Query Design & Optimization",
      "Data Cleaning & Transformation",
      "Power BI Interactive Reports",
      "Automated Excel Data Models",
      "Metric Definition & KPI Tracking",
    ],
    techStack: ["SQL / PostgreSQL", "Power BI", "Excel", "Python / Pandas"],
    relatedProject: {
      name: "CoreG1 Inventory Software",
      slug: "coreg1",
    },
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  detail: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "UNDERSTAND",
    summary: "Business, users & the real problem.",
    detail: "We clarify the goals, define who the product is for, map constraints, and establish clear deliverables.",
  },
  {
    number: "02",
    title: "PLAN",
    summary: "Architecture, user journey & stack.",
    detail: "Structuring the layout, page hierarchy, technical components, and milestone timeline before writing code.",
  },
  {
    number: "03",
    title: "BUILD",
    summary: "Design, code, integrate & refine.",
    detail: "Full-stack development with clean code, responsive layouts, API integrations, and continuous testing.",
  },
  {
    number: "04",
    title: "LAUNCH",
    summary: "Deploy, optimize & go live.",
    detail: "Production deployment, Core Web Vitals speed tuning, SEO metadata check, and analytics verification.",
  },
  {
    number: "05",
    title: "IMPROVE",
    summary: "Maintain, automate & scale.",
    detail: "Ongoing support, data-informed iterations, automation workflows, and feature enhancements.",
  },
];
