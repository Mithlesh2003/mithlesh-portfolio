export type Experience = {
  company: string;
  companyNote: string;
  title: string;
  altTitle?: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
  projectSlugs: string[];
};

export const experience: Experience[] = [
  {
    company: "Auto Die Cast India",
    companyNote:
      "Aluminium die-casting auto parts — drum plates, shockers, alloy wheels · OEM supplier · ~₹12–15 Cr turnover · ~80 employees",
    title: "Business Analyst & Systems Developer",
    altTitle: "Official title on record: Data Management Executive",
    period: "Oct 2024 – Present",
    location: "Delhi",
    summary:
      "Building the operational backbone of the plant — master data, purchase, part identification, inventory, order-to-delivery and costing — sequenced by data dependency rather than by request order.",
    points: [
      "Spent the first 30–45 days on process discovery across departments before building anything.",
      "Rebuilt the company's master data: ~800 raw materials and ~1,200 consumable/maintenance items across 80–100 categories, plus vendor and customer masters.",
      "Moved the company's builds from no-code (AppSheet) to full-stack code development using AI-assisted development — architecting and shipping production applications rather than configuring a no-code tool.",
      "Also contributed to: production planning, HRMS with biometric integration and payroll, warranty management, expense & cash management, vendor/quality/debit-note handling, and WhatsApp workflow automation.",
    ],
    projectSlugs: [
      "adc-quotation-costing-platform",
      "order-to-delivery-system",
      "part-code-system",
      "inventory-management-system",
      "purchase-management-system",
      "master-data-foundation",
    ],
  },
  {
    company: "Shitla Papers Pvt. Ltd.",
    companyNote: "Kraft & duplex paper trading · ~80 employees",
    title: "MIS Executive",
    period: "Aug 2023 – Sep 2024",
    location: "Delhi",
    summary:
      "Digitised how an entire trading company tracked its work — the learning phase where I picked up the Google Workspace + AppSheet + Apps Script stack and shipped my first company-wide systems.",
    points: [
      "Replaced hand-cut paper task slips carried desk to desk with a digital ticketing system used by all ~80 employees.",
      "Built a role-based dashboard layer for ~27 users with automated daily, weekly and monthly pending-task reports.",
      "Automated payment recovery — outstanding update cycle cut from 2–7 days to under an hour.",
      "Built order-to-delivery tracking, enquiry-stage tracking, management task delegation and recurring compliance checklists.",
    ],
    projectSlugs: [
      "ticketing-task-management",
      "help-slip-system",
      "role-based-dashboards",
      "payment-recovery-automation",
    ],
  },
];
