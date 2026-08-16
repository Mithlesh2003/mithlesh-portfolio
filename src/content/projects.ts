/**
 * Project content.
 *
 * IMAGES — to add screenshots to a project:
 *   1. Drop the files in  public/projects/<slug>/  (see public/projects/README.md)
 *   2. Add an entry to that project's `images` array, e.g.
 *        { src: "/projects/order-to-delivery-system/dashboard.png",
 *          alt: "O2D stage dashboard",
 *          caption: "Live order stages with cycle time per gate" }
 *   An empty `images` array renders a "screenshots coming" placeholder instead
 *   of a broken image, so it is always safe to ship without them.
 */

export type Metric = { value: string; label: string; note?: string };
export type FlowStep = { title: string; detail: string };
export type ProjectImage = { src: string; alt: string; caption?: string };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  org: string;
  orgNote: string;
  period: string;
  status: string;
  ownership: string;
  stack: string[];
  departments?: string[];
  /** Card blurb on the home page. */
  excerpt: string;
  /** Opening paragraphs on the detail page. */
  intro: string[];
  before: string[];
  built: string[];
  flow?: FlowStep[];
  metrics: Metric[];
  outcomes: string[];
  notes?: string[];
  images: ProjectImage[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "adc-quotation-costing-platform",
    title: "ADC Quotation — Costing & Profitability Platform",
    tagline:
      "A full-stack internal ERP that turns BOM data into priced customer quotations and tracks per-part and per-customer profitability against live break-even.",
    org: "Auto Die Cast India",
    orgNote: "OEM auto-parts manufacturer",
    period: "May 2026 – Aug 2026 · live",
    status: "Live",
    ownership:
      "Sole builder. My architecture, data model, costing logic, sync workflow and access model; management supplied the commercial requirements. Built with AI-assisted development — I own the design and can explain how and why every part works; I don't claim to write Next.js/TypeScript syntax from memory.",
    stack: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind 4",
      "Supabase (Postgres + Auth + Storage)",
      "Vercel (hosting + cron)",
      "Google Sheets API",
      "ExcelJS",
      "Tesseract.js (OCR)",
    ],
    departments: ["Sales / CRM", "Accounts", "Management"],
    excerpt:
      "Full-stack costing platform replacing a stack of quoting spreadsheets — multi-level BOM costing, price revision, and a live break-even tracker that costs every dispatch invoice.",
    intro: [
      "The company knew its total monthly profit from the P&L. It did not know which part or which customer was profitable. Quoting ran on a pile of Google Sheets: one for part quotations, one for tooling and die quotations, one to re-price everything whenever the aluminium rate moved, and manual arithmetic to work out whether an invoice actually made money after overheads.",
      "This platform replaces that stack. It pushes overhead pools down to the piece level and shows, invoice by invoice, when the month crosses break-even — and it is the project where I moved from configuring a no-code tool to architecting and shipping real software.",
    ],
    before: [
      "Quotations built by hand across several spreadsheets, with no locking — a sent price could be edited afterwards.",
      "Aluminium rate movements meant re-pricing families of parts manually, one sheet at a time.",
      "Per-part and per-customer profitability was invisible; only the monthly P&L total existed.",
      "AppSheet had hit its ceiling for this workload: many bots and triggers meant slow sync, heavy data slowed input, and apps took 1–2 minutes to open — so major updates kept getting postponed.",
    ],
    built: [
      "A multi-level BOM costing engine that prices finished goods from WIP castings and raw materials — modelling metal tolerance, burning loss, machine shot-rates by tonnage, and overhead/profit inheritance from category masters.",
      "Part Quotations and Die Quotations as separate modules, with quotation families that carry monthly revisions instead of new sheets.",
      "Price Revision on dual rate sets, so a metal rate change re-prices affected quotations without touching the originals.",
      "GP Analysis — a P&L cockpit with OCR ingestion of P&L screenshots (Tesseract.js) plus forecasting.",
      "Method C (full-absorption costing) and Method D (live contribution-margin break-even tracker) side by side, so a price can be checked against both views.",
      "Customer & Part Profitability: each dispatch invoice costed for contribution margin and classified below-floor / recovery / profit.",
      "A Google Sheets → PostgreSQL sync pipeline: daily automated job, resilient header discovery, idempotent mirroring — so the platform stays fed by the sheets the plant still uses day to day.",
      "A 4-role access model (super admin, manager, user, viewer) plus a pending state, row-level security on every table, an approval workflow, and sent quotations locked for everyone.",
    ],
    metrics: [
      { value: "~23,600", label: "lines of code" },
      { value: "310", label: "git commits" },
      { value: "26", label: "PostgreSQL tables", note: "24 SQL migrations" },
      { value: "40", label: "app routes", note: "27 API route files, ~50 HTTP methods" },
      { value: "64", label: "quotation families live", note: "with monthly revisions" },
      { value: "6", label: "die quotations shared with customers" },
      { value: "7", label: "external spreadsheets integrated" },
    ],
    outcomes: [
      "Quotations are produced from one costing engine instead of hand-built sheets, and sent versions are locked and audited.",
      "Profitability is answerable per part and per customer, not just per month.",
      "Break-even is tracked live through the month rather than reconstructed after it.",
      "The company now runs a four-person team building in full code instead of AppSheet — this platform was the first build of that shift.",
    ],
    notes: [
      "My honest boundary: I own the architecture, data model, costing and accounting logic, sync workflow and access model. The code was AI-generated to my specification, and I can walk through how and why any part of it works.",
    ],
    images: [],
    featured: true,
  },
  {
    slug: "order-to-delivery-system",
    title: "Order-to-Delivery System (O2D)",
    tagline:
      "The full commercial cycle — enquiry to goods-receipt confirmation — on one append-only event log with stage-level cycle times.",
    org: "Auto Die Cast India",
    orgNote: "OEM auto-parts manufacturer",
    period: "Live since May 2025",
    status: "Live",
    ownership:
      "Sole developer; analysis done jointly with the automation lead. Built after the internal foundation (masters, purchase, part codes, IMS) so sales could run on clean data.",
    stack: ["Google AppSheet", "Google Sheets", "Google Apps Script"],
    departments: ["CRM / Sales", "Production", "PDI / Quality", "Accounts", "Dispatch", "Security gate"],
    excerpt:
      "A 50-table system holding ~70,000 records that has carried ₹29.67 Cr of orders across 918 orders, 146 customers and 292 parts — median order-to-invoice: 3 days.",
    intro: [
      "Before this, one CRM executive kept orders in a Google Sheet purely to remember them. There was no flow, no follow-up, no timeline. Sales orders were punched wrong, dispatches went to the wrong customers, and orders with payment problems were discovered only after production had already made them.",
      "O2D turns that into a tracked pipeline with eight measurable gates, from the first enquiry to the customer's goods receipt — and it made management reviews change question, from 'which orders exist' to 'why is this stage slow'.",
    ],
    before: [
      "Orders recorded in a single-person spreadsheet with no workflow or stage visibility.",
      "SO mistakes and wrong order punching, with no validation against a real part identity.",
      "Wrong dispatches to wrong customers; no delivery tracking after the truck left.",
      "Payment-blocked orders surfacing only after production.",
    ],
    built: [
      "Multi-source enquiry capture — CRM, inbound, sales agents, management — before an order exists at all.",
      "Order punch validated against the part code system, so an order can only exist against a real, dimensioned part.",
      "SO generation and customer confirmation loop, with corrections and approval recorded.",
      "Production linkage into the separate production system, so CRM can see stock, WIP and assembly status.",
      "Dispatch approval, PDI (quantity and packaging check), transport arrangement and invoicing off the transport record.",
      "System-generated printable gate-pass PDF for the security guard, who matches physical quantity against it.",
      "Delivery tracking to the customer's door, then GRN / delivery confirmation, with the record handed to a separate after-sales app.",
      "An append-only event-log architecture with end-to-end key lineage — any delivery record traces back to its original order without lookup tables.",
    ],
    flow: [
      { title: "Enquiry", detail: "Captured from CRM, inbound, agents or management before an order exists." },
      { title: "Order punch", detail: "Validated against the part code master — no free-text parts." },
      { title: "SO + confirmation", detail: "Sales order generated, sent to customer, corrected and approved." },
      { title: "Production linkage", detail: "Stock, WIP and assembly status visible to CRM." },
      { title: "Dispatch approval", detail: "Commercial and payment checks before anything moves." },
      { title: "PDI", detail: "Quantity and packaging verified before loading." },
      { title: "Transport & invoice", detail: "Tax invoice and challan generated off the transport record; gate pass auto-printed." },
      { title: "Delivery & GRN", detail: "Tracked to the customer's door, closed with goods-receipt confirmation." },
    ],
    metrics: [
      { value: "₹29.67 Cr", label: "orders punched", note: "₹25.04 Cr confirmed · ₹15.04 Cr invoiced · ₹13.49 Cr delivered" },
      { value: "918", label: "real orders", note: "146 customers · 292 parts" },
      { value: "~3.7 lakh", label: "units ordered" },
      { value: "3 days", label: "median punch → invoice", note: "avg 5.7 · P90 15" },
      { value: "same day", label: "transport → invoice", note: "invoicing automated off the transport record" },
      { value: "~70,000", label: "records across 50 tables" },
      { value: "8", label: "measured stage gates" },
    ],
    outcomes: [
      "First stage-level conversion and cycle-time visibility the company has ever had — including a 16.5% drop at confirmation-to-planning that was previously invisible to management.",
      "Live, pending and stuck orders are all trackable, with dashboards to the MD and the team.",
      "Referential integrity verified clean across all primary stage joins — delivery records trace to their originating order by key lineage.",
      "Compliance improves as a side effect: every stage is recorded with who and when.",
    ],
    images: [],
    featured: true,
  },
  {
    slug: "part-code-system",
    title: "Part Code System",
    tagline:
      "The plant's identity layer — multi-combination, non-duplicating codes that encode mm-level dimensional difference for OEM supply.",
    org: "Auto Die Cast India",
    orgNote: "OEM auto-parts manufacturer",
    period: "2025 · core reference layer",
    status: "Live",
    ownership:
      "Co-architect — design roughly 50/50 with the automation lead; I contributed about 30% of the build. Two months of problem identification, mapped and proven entirely on paper before development started.",
    stack: ["Google AppSheet", "Google Sheets", "Google Apps Script"],
    departments: ["Purchase", "Quality", "Stores / IMS", "Assembly", "Accounts", "Dispatch"],
    excerpt:
      "~400 finished-good codes and ~700–800 raw-material codes (~1,200 including consumables), growing 4–5 a day, with architecture that supports lakhs of unique non-colliding combinations.",
    intro: [
      "I hit this problem sideways: I couldn't build sales or quotation properly because there was nothing reliable to point an order at. Different parts shared a name. Visually similar parts got confused — and at OEM precision, a few millimetres of difference is a wrong dispatch, a returned consignment, or a lost account.",
      "So the sequence stopped and the identity layer got built first. Two months of design on paper, confirmed working on paper, then built. It is now the single source of truth six departments read from.",
    ],
    before: [
      "Masters barely existed; the same name covered genuinely different parts.",
      "Visually similar parts were routinely confused across purchase, stores and dispatch.",
      "No way to encode the mm-level dimensional differences OEM supply depends on.",
      "Quotation and sales work had no stable object to attach to.",
    ],
    built: [
      "A multi-combination coding architecture with no duplication and no ceiling — designed to expand for years without collision.",
      "Dimensional attributes encoded in the code itself, so a part's identity carries its measurable difference.",
      "Generation operated by one quality engineer, who measures the physical part or the drawing and issues the code.",
      "A single reference layer consumed by Purchase, Quality, Stores/IMS, Assembly, Accounts and Dispatch.",
    ],
    metrics: [
      { value: "~400", label: "finished-good codes", note: "across 20–25 categories" },
      { value: "~700–800", label: "raw-material codes" },
      { value: "~1,200", label: "codes including consumables" },
      { value: "4–5", label: "new codes issued per day" },
      { value: "lakhs", label: "unique combinations supported", note: "architectural capacity, not codes created" },
      { value: "1", label: "engineer runs the whole issuing process" },
    ],
    outcomes: [
      "Wrong invoicing and wrong dispatch caused by misidentified parts are designed out rather than caught late.",
      "Inventory, purchase and quotation all became possible on top of it — this system unblocked the rest of the roadmap.",
      "Six departments now speak one part language instead of six local naming habits.",
    ],
    notes: [
      "Mid-way the management brought in an external industry consultant to advise on code length and industry standards. After review we did not adopt the proposal — it addressed the problems of a different plant rather than ours and left no confidence in expansion. I proposed the in-house design instead, got approval, and we built it.",
    ],
    images: [],
    featured: true,
  },
  {
    slug: "inventory-management-system",
    title: "Inventory Management System (IMS)",
    tagline:
      "Rebuilt the warehouse physically and digitally — racking, locations and FIFO, then in/out on screen with minimum-stock alerts into purchase.",
    org: "Auto Die Cast India",
    orgNote: "OEM auto-parts manufacturer",
    period: "Live since Aug 2025",
    status: "Live",
    ownership:
      "Sole developer of the digital system; design 50/50 with the automation lead, who led the physical implementation. Deliberately paused after purchase and built only once part codes existed.",
    stack: ["Google AppSheet", "Google Sheets", "Google Apps Script", "Physical racking & location design"],
    departments: ["Stores", "Purchase", "Production", "Quality"],
    excerpt:
      "~11,000 in/out transactions since launch (~1,000/month), run by 2 store staff — stock searching eliminated as an activity, ~100 sq ft of dead stock recovered.",
    intro: [
      "Stock sat on the floor. No racks, no locations, no FIFO, no part codes. Rejected and old raw material was buried and forgotten, roughly 100 sq ft was occupied by scrap, and parts taken to other rooms never came back. Nobody knew actual quantities anywhere except by walking over and looking.",
      "Finding a part took hours or days — and sometimes failed even when the part was on site. That stopped production, which pressured purchase, which pressured vendors. The fix had to be physical and digital at the same time.",
    ],
    before: [
      "Floor-stacked material across scattered rooms with no location scheme and no FIFO.",
      "~100 sq ft occupied by scrap and dead stock nobody could account for.",
      "Real quantities knowable only by physically inspecting the pile.",
      "Locating a part took hours or days, and sometimes failed entirely.",
    ],
    built: [
      "Physical rebuild: racking introduced, locations allocated, stacking designed, and scattered stock consolidated from multiple rooms into a single hall.",
      "Recovered and monetised ~100 sq ft of dead stock and scrap — sold or reused, freeing floor space for machinery.",
      "Digital in/out recording with FIFO, part-code and location linkage, and part returns handled on screen.",
      "Automated minimum-stock alerts wired into the purchase system, so procurement is threshold-triggered instead of shortage-triggered.",
      "Production now draws against IMS-released material rather than helping itself from the floor.",
    ],
    metrics: [
      { value: "~11,000", label: "in/out transactions since Aug 2025" },
      { value: "~1,000", label: "transactions per month", note: "~35 per day" },
      { value: "2", label: "staff run the entire store" },
      { value: "~100 sq ft", label: "dead stock and scrap recovered" },
    ],
    outcomes: [
      "The company's first accurate inventory position — previously known only by looking at the floor.",
      "Stock searching stopped being an activity: the part doesn't need finding because its location is already on screen.",
      "Purchase moved from reactive escalation to threshold-triggered ordering.",
    ],
    images: [],
    featured: true,
  },
  {
    slug: "purchase-management-system",
    title: "Purchase Management System",
    tagline:
      "Indent to returns across three departments, in one place — the first system I built at ADC, still running without redevelopment.",
    org: "Auto Die Cast India",
    orgNote: "OEM auto-parts manufacturer",
    period: "Live since 1 Jan 2025",
    status: "Live",
    ownership: "Sole developer; designed jointly with the automation lead.",
    stack: ["Google AppSheet", "Google Sheets", "Google Apps Script"],
    departments: ["Purchase", "Quality", "Accounts", "Stores"],
    excerpt:
      "~2,500 indents, ~4,500 line items and ~2,300 purchase invoices processed to date — indent-to-PO cut from about a day to minutes.",
    intro: [
      "Purchase ran on paper, with Google Sheets used only for recording after the fact. Shortages were reported by someone walking over. Vendors were called and sometimes forgotten. There was no record of what material arrived, when, at what rate, against which order — and paper gate passes went missing.",
      "The usual result: production discovered a shortage mid-run and pressure landed on purchase. This system closed the loop across Purchase, Quality and Accounts in a single flow.",
    ],
    before: [
      "Requirements communicated verbally; shortages found mid-production run.",
      "No traceability of material received — quantity, rate and source order all unrecorded.",
      "Paper gate passes lost; no audit trail on rejections.",
      "Follow-up with vendors depended on someone remembering.",
    ],
    built: [
      "Requirement raised by doer/store/production → indent → PO → sent to vendor, in one system.",
      "Follow-up with dates and reminders, so vendor chasing is scheduled rather than remembered.",
      "In-system material receipt capturing rate and quantity against the originating order.",
      "Quality check with approve / reject / escalate-to-senior / deviation paths.",
      "Invoice upload, and automatic debit/credit note when material is rejected.",
      "Returns module recording what goes back, plus penalties and extra charges.",
      "Connected to the accounts stream and, later, to IMS minimum-stock alerts.",
    ],
    flow: [
      { title: "Indent", detail: "Raised by store, production or the doer against a coded item." },
      { title: "PO", detail: "Issued and sent to the vendor from the same system." },
      { title: "Follow-up", detail: "Dated reminders instead of remembered phone calls." },
      { title: "Receipt", detail: "Quantity and rate recorded against the originating order." },
      { title: "Quality", detail: "Approve, reject, escalate or record a deviation." },
      { title: "Invoice & notes", detail: "Invoice uploaded; rejection auto-generates debit/credit note." },
      { title: "Returns", detail: "Return, penalty and extra charges tracked to close-out." },
    ],
    metrics: [
      { value: "~2,500", label: "indents since Jan 2025" },
      { value: "~4,500", label: "line items purchased" },
      { value: "~2,300", label: "purchase invoices processed" },
      { value: "~1 day → minutes", label: "indent-to-PO turnaround" },
      { value: "~2/month → 0", label: "production stoppages from unflagged shortages", note: "once IMS alerts were linked" },
      { value: "3", label: "people run the full cycle", note: "IMS, purchase, accounts — all connected" },
    ],
    outcomes: [
      "Live since 1 January 2025 and still running without redevelopment.",
      "Physical follow-up between stores, purchase and accounts removed.",
      "Every receipt is traceable: what arrived, when, at what rate, against which order.",
    ],
    images: [],
    featured: false,
  },
  {
    slug: "master-data-foundation",
    title: "Master Data Foundation",
    tagline:
      "The unglamorous layer everything else stands on — raw materials, consumables, vendors and customers, defined and cleaned.",
    org: "Auto Die Cast India",
    orgNote: "OEM auto-parts manufacturer",
    period: "2024 – 2025 · ~3–4 months, built in parallel with purchase",
    status: "Live",
    ownership: "Sole owner of the data definition work, done alongside the purchase build.",
    stack: ["Google Sheets", "Google AppSheet", "Data modelling"],
    departments: ["Purchase", "Stores", "Accounts", "Sales"],
    excerpt:
      "~800 raw materials and ~1,200 consumable/maintenance items across 80–100 categories; customer master cleaned from ~800 records to ~200 genuinely active.",
    intro: [
      "When I arrived, masters barely existed. Different parts were called by the same name and visually similar items were confused — which at OEM precision is not a tidiness problem, it is a lakhs-and-crores problem.",
      "This took three to four months and produced no demo anyone could applaud. It is also the reason purchase, inventory and sales could be built at all.",
    ],
    before: [
      "No structured item, vendor or customer masters.",
      "Duplicate and colliding names across departments.",
      "~800 customer records, most of them dead, blocked or duplicated.",
    ],
    built: [
      "Defined ~800 raw materials and ~1,200 consumable and maintenance items across 80–100 categories.",
      "Cleaned the customer master from ~800 records down to ~200 verified active accounts, with the rest blocked or marked inactive.",
      "Structured a vendor master of ~750–800 vendors.",
      "Established naming and categorisation rules that the part code system later formalised.",
    ],
    metrics: [
      { value: "~800", label: "raw materials defined" },
      { value: "~1,200", label: "consumable / maintenance items" },
      { value: "80–100", label: "categories structured" },
      { value: "800 → 200", label: "customer master cleaned to active accounts" },
      { value: "~750–800", label: "vendors structured" },
    ],
    outcomes: [
      "Management got its first accurate view of active trading relationships.",
      "Duplicate naming of visually similar parts eliminated before it could poison inventory and sales data.",
      "Every later system — purchase, part code, IMS, O2D, costing — reads from this layer.",
    ],
    images: [],
    featured: false,
  },
  {
    slug: "ticketing-task-management",
    title: "Ticketing & Task Management System",
    tagline:
      "Replaced hand-cut paper slips carried between desks with a digital system used by all ~80 employees.",
    org: "Shitla Papers Pvt. Ltd.",
    orgNote: "Kraft & duplex paper trading",
    period: "2023 – 2024",
    status: "Shipped",
    ownership: "100% mine — design and build.",
    stack: ["Google AppSheet", "Google Sheets", "Google Apps Script"],
    departments: ["All departments", "Management"],
    excerpt:
      "~160 tasks a day flowing through a system used by ~80 employees, with automated pending-task reports to managers and the MD — zero lost tasks.",
    intro: [
      "Tasks ran on paper: an A4 sheet cut into four, the task and the assigned person written on it, carried by an office assistant to whoever it concerned. Papers got lost, forgotten, never followed up. The mess was company-wide.",
      "I replaced it with a digital system where every employee sees only their own tasks — assigned, done, pending, all on screen.",
    ],
    before: [
      "Tasks written on quarter-sheets of A4 and physically carried between desks.",
      "Lost and forgotten slips, with no follow-up mechanism at all.",
      "No visibility for managers into what was pending anywhere.",
    ],
    built: [
      "Digital task creation and assignment for all ~80 employees, scoped so each person sees only their own work.",
      "Status tracking through completion, with nothing depending on a piece of paper surviving the journey.",
      "Automated weekly and monthly pending-task reports to managers and the MD.",
    ],
    metrics: [
      { value: "~80", label: "employees on the system" },
      { value: "~160", label: "tasks per day" },
      { value: "0", label: "tasks lost", note: "the paper flow lost them routinely" },
    ],
    outcomes: [
      "Task loss and forgotten handoffs eliminated as a category of problem.",
      "Managers stopped asking what was pending and started reading it.",
      "This was the system that taught me the pattern I still use: find what isn't tracked, and give it a system.",
    ],
    images: [],
    featured: true,
  },
  {
    slug: "help-slip-system",
    title: "Help Slip System",
    tagline: "One-click access to your reporting line, with routing, live status and automatic delay logging.",
    org: "Shitla Papers Pvt. Ltd.",
    orgNote: "Kraft & duplex paper trading",
    period: "2023 – 2024",
    status: "Shipped",
    ownership: "100% mine — design and build.",
    stack: ["Google AppSheet", "Google Sheets"],
    departments: ["All departments"],
    excerpt:
      "Instead of walking the floor to find someone, staff raise a help request from their desk against their actual reporting hierarchy — and every delay is logged.",
    intro: [
      "In an 80-person office, asking for help meant leaving your desk and finding the right person — assuming you knew who that was. Requests died in corridors and nobody could show where the time went.",
      "The help slip system made asking for help a tracked transaction.",
    ],
    before: [
      "Help requests made by walking across the floor and hoping the person was there.",
      "No record of who was asked, when, or how long the answer took.",
      "New staff had no reliable view of who to approach for what.",
    ],
    built: [
      "Desk-side help request raising, with the requester's reporting hierarchy and each person's contact/extension visible in-app.",
      "Routing to the right responder, who answers inside the system.",
      "Status tracking with automatic logging of every delay.",
    ],
    metrics: [
      { value: "~80", label: "employees covered" },
      { value: "100%", label: "of requests logged with status and delay" },
    ],
    outcomes: [
      "Chasing people across the floor stopped being part of the working day.",
      "Delays became visible data instead of anecdote.",
    ],
    images: [],
    featured: false,
  },
  {
    slug: "role-based-dashboards",
    title: "Role-Based Dashboard Layer",
    tagline: "Twenty-seven users, three levels of scope, one automated reporting rhythm.",
    org: "Shitla Papers Pvt. Ltd.",
    orgNote: "Kraft & duplex paper trading",
    period: "2023 – 2024",
    status: "Shipped",
    ownership: "Mine — design and build.",
    stack: ["Google AppSheet", "Google Sheets", "Google Apps Script"],
    departments: ["CRM", "Management"],
    excerpt:
      "Dashboards for 20 CRM executives (own pipeline), 5 managers (team view) and the MD/CMD plus their EAs (company-wide), with automated daily, weekly and monthly reports.",
    intro: [
      "Everyone was asking for the same numbers and each of them wanted a different slice. Rather than one dashboard nobody trusted, I built the scoping into the layer: you see exactly your scope, nothing else.",
    ],
    before: [
      "Status reported by asking people, then reconciling contradictory answers.",
      "No routine reporting rhythm — reports happened when someone chased them.",
    ],
    built: [
      "Executive view: an individual's own pipeline and pending actions.",
      "Manager view: team-level roll-up across their executives.",
      "MD/CMD and EA view: company-wide position.",
      "Automated daily, weekly and monthly pending-task reports pushed to each level.",
    ],
    metrics: [
      { value: "~27", label: "users on role-scoped dashboards" },
      { value: "3", label: "scope levels", note: "executive · manager · management" },
      { value: "daily / weekly / monthly", label: "automated report cadence" },
    ],
    outcomes: [
      "Decision-makers read the position instead of assembling it.",
      "Role scoping meant no one had to filter someone else's data to find their own.",
    ],
    images: [],
    featured: false,
  },
  {
    slug: "payment-recovery-automation",
    title: "Payment Recovery Automation",
    tagline: "Outstanding ledgers auto-split per executive — update cycle cut from 2–7 days to under an hour.",
    org: "Shitla Papers Pvt. Ltd.",
    orgNote: "Kraft & duplex paper trading",
    period: "2023 – 2024",
    status: "Shipped",
    ownership:
      "Built on a pre-existing structure — my contribution was the automation that collapsed the cycle time.",
    stack: ["Google Sheets", "Google Apps Script", "Google AppSheet"],
    departments: ["Accounts", "CRM"],
    excerpt:
      "Accounts uploads the ledger; the system splits outstandings by CRM executive and surfaces each one's customer dues on screen.",
    intro: [
      "Outstanding data used to be pulled from the accounting software by hand, checked on paper, marked up, and carried back. Updating every customer's outstanding took two to seven days — sometimes a full week, by which point the numbers had moved again.",
    ],
    before: [
      "Manual extraction from the accounting software, then paper reconciliation.",
      "2–7 days to refresh the outstanding position across all customers.",
      "Executives chasing payments against stale numbers.",
    ],
    built: [
      "Ledger upload by accounts, with automatic fetch into the tracking layer.",
      "Automatic split of outstandings by CRM executive.",
      "Each executive sees their own customers' dues on screen, current.",
    ],
    metrics: [
      { value: "2–7 days → ~1 hour", label: "outstanding update cycle" },
      { value: "20", label: "CRM executives served their own slice" },
    ],
    outcomes: [
      "Recovery calls started running on current data instead of week-old paper.",
      "Accounts stopped being a bottleneck for a routine daily question.",
    ],
    images: [],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const otherWork = {
  title: "Also built and contributed to",
  items: [
    "Production planning system",
    "HRMS with biometric integration and payroll",
    "Warranty management",
    "Expense & cash management",
    "Vendor / quality / debit-note handling",
    "WhatsApp workflow automation",
    "Sample & Field Management (FMS)",
    "Enquiry FMS and management task assigner",
    "Order-to-delivery tracking at Shitla (10–15 orders/day)",
    "Recurring daily/weekly/monthly compliance checklists",
  ],
};
