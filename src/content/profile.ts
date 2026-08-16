export const profile = {
  name: "Mithlesh Kumar",
  shortName: "Mithlesh",
  headline: "Business Analyst · Systems & Process Automation",
  subhead: "Manufacturing ERP builder — full-stack (AI-assisted) & no-code",
  officialTitle: "Data Management Executive",
  location: "Karala, Delhi — 110081, India",
  email: "mithlesh100903@gmail.com",
  phone: "+91 70659 48948",
  linkedin: "https://www.linkedin.com/in/mithlesh-kumar-05909a297/",
  hero: {
    line1: "I build the systems",
    line2: "that run a factory.",
    blurb:
      "Master data, purchase, part identification, inventory, order-to-delivery and costing for a ₹12–15 Cr OEM auto-parts manufacturer — sequenced by data dependency, not by request order. You can't automate sales on messy part data, and you can't track inventory without clean part codes.",
  },
  about: [
    "I digitise manual, untracked operations end to end — from process discovery on the shop floor to the working application. Not dashboards on top of a mess: the master data, the identification layer and the workflow underneath it.",
    "At Auto Die Cast India I've built the operational backbone of the plant across six connected systems. Before that, at Shitla Papers, I replaced paper task slips carried by hand with a digital system used by all ~80 employees. My core habit is the same in both places: see what nobody is tracking, put it into a system, make the messy thing a straight line.",
    "I'm now moving the company's builds from no-code (AppSheet) to full-stack code — Next.js / React / TypeScript / Supabase — using AI-assisted development. My position on that is simple: I design the architecture, the data model and the business logic; AI accelerates the build. The thinking is mine; the typing is faster.",
  ],
  approach: [
    {
      title: "Sequence by data dependency",
      body: "Masters before purchase. Part codes before inventory. Identity before sales. Building in request order produces systems that collapse the moment they touch real data.",
    },
    {
      title: "Design on paper first",
      body: "The part code system took two months of problem-mapping on paper and was proven on paper before a line was built. Cheap to redraw, expensive to rebuild.",
    },
    {
      title: "Build alongside the floor",
      body: "Racking, location allocation and FIFO stacking were changed physically at the same time as the software. A stock system on an unracked floor is fiction.",
    },
    {
      title: "Honest ownership",
      body: "Some systems are mine end to end, some are 50/50 design with my manager, some I contributed to. Every project below states which — it holds up in a reference check.",
    },
  ],
  skills: [
    {
      group: "Systems & Development",
      items: [
        "Full-stack system architecture (AI-assisted)",
        "Next.js / React / TypeScript",
        "Supabase / PostgreSQL",
        "Data modelling & schema design",
        "RBAC & row-level security",
        "REST API & sync-pipeline design",
        "Google AppSheet (ERP-style role-based apps)",
        "Google Apps Script",
        "Advanced Google Sheets",
      ],
    },
    {
      group: "Business & Operations",
      items: [
        "Business analysis",
        "Process discovery & mapping",
        "Requirement gathering across departments",
        "Master data design",
        "Part coding architecture",
        "FIFO inventory control",
        "Cost accounting & break-even analysis",
        "Dashboard & MIS reporting",
        "Cross-department system integration",
      ],
    },
    {
      group: "Working Style",
      items: [
        "Dependency sequencing",
        "Workflow & approval automation",
        "WhatsApp workflow automation",
        "User training & adoption",
        "Iterative release",
        "Building alongside physical operations",
      ],
    },
  ],
  education: [
    {
      degree: "MBA, Operations Management",
      school: "Indira Gandhi National Open University, Delhi",
      period: "2025 – 2026 (in progress)",
    },
    {
      degree: "Bachelor of Arts (Programme)",
      school: "University of Delhi",
      period: "2021 – 2024",
    },
    {
      degree: "Senior Secondary",
      school: "Sarvodaya Vidyalaya, Kailash Enclave, Delhi",
      period: "2021",
    },
    {
      degree: "Secondary",
      school: "Sarvodaya Vidyalaya, Kailash Enclave, Delhi",
      period: "2019",
    },
  ],
  interests: [
    { label: "Chess & Sudoku", tag: "Strategy" },
    { label: "Sketching & Painting", tag: "Creative" },
    { label: "Building side systems", tag: "Craft" },
  ],
} as const;

export const headlineMetrics = [
  { value: "₹29.67 Cr", label: "orders processed through systems I built" },
  { value: "6", label: "connected plant systems, live in production" },
  { value: "~11,000", label: "stock transactions since Aug 2025" },
  { value: "~23,600", label: "lines of code in the costing platform" },
] as const;
