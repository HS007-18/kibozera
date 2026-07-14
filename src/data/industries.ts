import { IndustryData } from "../types/seo";

export const industries: IndustryData[] = [
  {
    slug: "textile-manufacturing",
    title: "AI for Textile Manufacturing | Kibozera",
    metaTitle: "AI & Automation for Textile Industry Tiruppur Coimbatore India",
    metaDescription: "Boost your textile mill efficiency. Kibozera provides automated supply chain, fabric defect detection vision systems, and inventory sync in Tamil Nadu.",
    h1: "AI for Textile Manufacturing",
    badge: "Garment Optimization",
    tagline: "Automate supply chain processing and inspect fabrics with high-speed visual AI.",
    description: "Kibozera builds custom automation systems and visual QA models specifically engineered for the textile hubs of Tiruppur, Coimbatore, and Erode. We automate order intakes, sync fabric inventory data, and deploy defect checking cams on production floors.",
    challenges: [
      "Manual order routing leading to shipping delays",
      "High human labor costs for visual fabric defect checks",
      "Spreadsheet-based stock tracking causing inventory errors",
      "Slow communication with international buyers"
    ],
    existingWorkflow: "Orders are received via email, manually compiled into Excel sheets, printed for production lines, and fabrics are visually checked by human eyes under bright lights. Inventory is logged weekly.",
    aiOpportunities: [
      "Visual fabric inspection models checking for dye or weave defects instantly",
      "n8n engines parsing client order emails and updating ERP databases",
      "Automated WhatsApp notification bots linking dispatch teams"
    ],
    automationRoadmap: [
      "Phase 1: Automating document intake from purchase emails to ERP.",
      "Phase 2: Deploying cameras and YOLO models to inspect fabric defects.",
      "Phase 3: Connecting ERP levels to live client order status portals."
    ],
    roi: "Reduces manual data entry by 85%, speeds up defect detection by 3x, and cuts customer order response delay to under 5 minutes.",
    useCases: [
      "Automated order intake from international buyer PDFs to local ERP database",
      "Fabric defect detection on weaving machines using high-speed YOLOv8 vision AI",
      "Automatic yarn count calculation and inventory alert thresholds"
    ],
    recommendedTech: ["OpenCV", "YOLO", "n8n", "Python", "PostgreSQL", "FastAPI"],
    localIndustries: ["Garments", "Weaving & Spinning", "Dyeing & Finishing", "Apparel Design"],
    accentColor: "#b8c3ff",
    faqs: [
      {
        question: "Can visual AI detect minor fabric weaving defects?",
        answer: "Yes. By training models on fabric defect images, our vision systems identify minor yarn defects and mark them instantly on high-speed feeds."
      },
      {
        question: "How do you connect the vision system to our existing machines?",
        answer: "We mount industrial cameras on your weaving machines and connect the video feed to local edge computing units running our models."
      }
    ]
  },
  {
    slug: "manufacturing",
    title: "AI for Manufacturing Industry | Kibozera",
    metaTitle: "AI & Automation for Manufacturing and Assembly Lines India",
    metaDescription: "Optimize assembly line quality control and implement predictive maintenance. Kibozera builds enterprise manufacturing automation systems.",
    h1: "AI for Manufacturing",
    badge: "Industrial Scale",
    tagline: "Increase assembly line productivity with predictive models and quality control AI.",
    description: "We deploy machine learning models and visual sensors to check components, predict machine downtime, and automate shipping invoices, ensuring your factory runs continuously with maximum efficiency.",
    challenges: [
      "High costs of machine breakdowns causing system shutdowns",
      "Manual check loops causing component defect leakages",
      "Unsynchronized inventory databases causing delivery delays"
    ],
    existingWorkflow: "Maintenance is scheduled based on estimated hours. Defect checking is done manually at the end of the line. Stock database is updated at the end of shifts.",
    aiOpportunities: [
      "Predictive model algorithms alerting staff before a motor fails",
      "Visual assembly line cameras checking dimensions of parts in real-time",
      "Synchronized IoT database feeds logging inventory levels"
    ],
    automationRoadmap: [
      "Phase 1: Setting up database sync pipelines between machinery logs and central server.",
      "Phase 2: Training defect detection vision models for assembly line cams.",
      "Phase 3: Deploying automated predictive maintenance alerts on dashboards."
    ],
    roi: "Saves up to 30% in machinery maintenance costs and eliminates 98% of assembly component defect leakages.",
    useCases: [
      "Predictive temperature and vibration analysis models for factory pumps",
      "Visual dimensions check on metal components using OpenCV inspection pipelines",
      "IoT database sync for automated supply replenishment alerts"
    ],
    recommendedTech: ["Python", "scikit-learn", "OpenCV", "Docker", "pgvector", "FastAPI"],
    localIndustries: ["Automotive Parts", "Foundries", "Industrial Pumps", "Electrical Goods"],
    accentColor: "#d0bcff",
    faqs: [
      {
        question: "What is predictive maintenance?",
        answer: "Predictive maintenance uses vibration, thermal, and log data from sensors to calculate the exact wear level of parts and schedule repairs before failure."
      },
      {
        question: "Can visual AI work at high conveyor belt speeds?",
        answer: "Yes. We configure specialized high-frame-rate industrial cameras and lightweight object detection models to check parts at speed."
      }
    ]
  },
  {
    slug: "retail",
    title: "AI for Retail & E-commerce | Kibozera",
    metaTitle: "AI & Marketing Automation for Retail & E-commerce India",
    metaDescription: "Personalize shopping campaigns, sync multi-channel inventories, and automate retail customer support. Kibozera custom retail AI solutions.",
    h1: "AI for Retail & E-commerce",
    badge: "Smart Commerce",
    tagline: "Automate shop management, inventory syncs, and client support flows.",
    description: "Kibozera integrates automated inventories and smart conversational bots into Shopify, custom SaaS stores, and brick-and-mortar ERP systems, ensuring retail workflows run without manual input.",
    challenges: [
      "Out-of-stock database lags across web and offline stores",
      "High volume of repetitive support messages (status checks, returns)",
      "Low customer retention from generic marketing campaigns"
    ],
    existingWorkflow: "Orders are synced hourly between channels. Customer inquiries are handled manually by support staff. Bulk generic emails are sent to all subscribers weekly.",
    aiOpportunities: [
      "Real-time database sync scripts that update items across all listings",
      "AI chatbots handling WhatsApp support and order queries autonomously",
      "Personalized campaign dispatch engines based on user click histories"
    ],
    automationRoadmap: [
      "Phase 1: Connecting WooCommerce/Shopify databases to central inventory CRM.",
      "Phase 2: Setting up WhatsApp AI bot for common support queries.",
      "Phase 3: Designing automated, dynamic email campaigns in CRM."
    ],
    roi: "Cuts support chat response time to under 1 second, reduces manual inventory management, and improves repeat purchase rates by 25%.",
    useCases: [
      "AI support chatbot resolving order tracking and refund queries on WhatsApp",
      "Automated stock sync between physical POS cash systems and online storefronts",
      "Hyper-personalized email sequence flows triggered by cart additions"
    ],
    recommendedTech: ["n8n", "Redis", "Node.js", "OpenAI APIs", "PostgreSQL", "Twilio API"],
    localIndustries: ["E-commerce", "Apparel Shops", "Supermarkets", "Supply Chains"],
    accentColor: "#ffb59b",
    faqs: [
      {
        question: "Can retail chatbots handle order tracking requests?",
        answer: "Yes. By connecting the chatbot backend to your ERP or Shopify database, the bot queries customer IDs and returns tracking links instantly."
      },
      {
        question: "How long does inventory sync take?",
        answer: "We design real-time webhook systems that sync data within milliseconds of a purchase offline or online."
      }
    ]
  },
  {
    slug: "healthcare",
    title: "AI for Healthcare Industry | Kibozera",
    metaTitle: "AI & Automation for Healthcare, Clinics & Labs India",
    metaDescription: "HIPAA-compliant document parsing, automated doctor scheduling, and patient messaging. Kibozera custom healthcare automation.",
    h1: "AI for Healthcare",
    badge: "Clinical Efficiency",
    tagline: "Reduce patient admin overhead and parse reports with secure document AI.",
    description: "We configure secure, HIPAA-compliant document parsing engines, appointment schedulers, and client notifications, letting clinic staff prioritize patient care.",
    challenges: [
      "Excessive time spent transcribing medical records",
      "High cancellation rates from poor patient appointment reminders",
      "Security concerns when handling sensitive patient data"
    ],
    existingWorkflow: "Patients call to book appointments. Records are manually typed from physical forms into database software. Reminders are sent manually via SMS daily.",
    aiOpportunities: [
      "Secure OCR scanners parsing medical history docs directly into databases",
      "Automated WhatsApp notification workflows for booking confirmation",
      "AI schedulers coordinating doctor calendars based on shift constraints"
    ],
    automationRoadmap: [
      "Phase 1: Setting up automated WhatsApp appointment booking lines.",
      "Phase 2: Deploying OCR document parsing for incoming medical reports.",
      "Phase 3: Hardening backend servers for total database encryption."
    ],
    roi: "Saves up to 15 hours of patient admin transcription weekly and decreases missed appointment rates by 40%.",
    useCases: [
      "Automated scheduling and reminder workflows via WhatsApp Business API",
      "Secure PDF report transcription using AI document layout parsing",
      "Internal clinical wiki search engine for medical research"
    ],
    recommendedTech: ["Python", "FastAPI", "PaddleOCR", "Pinecone", "PostgreSQL", "AWS"],
    localIndustries: ["Clinics & Labs", "Hospitals", "Pharmacies", "Diagnostics"],
    accentColor: "#b8c3ff",
    faqs: [
      {
        question: "Is patient data secure under this automation?",
        answer: "Yes. We build HIPAA-compliant server models utilizing encryption at rest, secure API tokens, and access logging."
      },
      {
        question: "Can patients book appointments autonomously?",
        answer: "Yes. Patients can interact with an AI conversational agent on WhatsApp or your website to find open slots and book appointments instantly."
      }
    ]
  },
  {
    slug: "education",
    title: "AI for Education & E-Learning | Kibozera",
    metaTitle: "AI & Automation Solutions for Schools, Colleges & E-Learning India",
    metaDescription: "Automate student enrollment, grade report generation, and student portal support. Kibozera custom educational automation services.",
    h1: "AI for Education",
    badge: "Smart Campus",
    tagline: "Automate student registration, grading reports, and course queries.",
    description: "Kibozera integrates database sync scripts and custom FAQ bots into university systems and e-learning portals, simplifying administrative workloads.",
    challenges: [
      "High workload during student admission seasons",
      "Slow response times to prospective student admission questions",
      "Manual generation of grade files and certificates"
    ],
    existingWorkflow: "Applications are received, printed, and hand-sorted by admin staff. Common queries are answered via call queues. Reports are generated manually using spreadsheets.",
    aiOpportunities: [
      "n8n engines sorting incoming student application data automatically",
      "AI web bots resolving campus queries (holidays, exams) on university portals",
      "Automated PDF engines generating grade reports and certificates on trigger"
    ],
    automationRoadmap: [
      "Phase 1: Building automated student database intake from web forms.",
      "Phase 2: Integrating chatbot widget on main website for admission queries.",
      "Phase 3: Deploying document automation for report cards and diplomas."
    ],
    roi: "Cuts registration sorting delays by 80% and reduces portal admin workloads by 60% during peak seasons.",
    useCases: [
      "AI chatbot on college websites qualifying and answering admission queries",
      "Automated PDF template generators for certificate and scorecard dispatch",
      "Student portal alert integrations for exam schedules and dues"
    ],
    recommendedTech: ["Next.js", "n8n", "Python", "FastAPI", "SendGrid", "PostgreSQL"],
    localIndustries: ["Universities", "Schools", "E-Learning", "Training Centers"],
    accentColor: "#d0bcff",
    faqs: [
      {
        question: "Can the chatbot answer campus-specific questions?",
        answer: "Yes. We train the AI chatbot on your prospectus, student handbook, and academic calendar to answer accurate portal queries."
      },
      {
        question: "Can we automate bulk certificate generation?",
        answer: "Yes. We connect a Google Sheet or database grid to custom PDF engines that dispatch customized files to thousands of students in minutes."
      }
    ]
  },
  {
    slug: "logistics",
    title: "AI for Logistics & Supply Chain | Kibozera",
    metaTitle: "AI & Automation for Logistics, Warehouse & Tracking India",
    metaDescription: "Automate cargo bill parsing, coordinate driver routing databases, and track deliveries. Kibozera custom logistics automation.",
    h1: "AI for Logistics & Supply Chain",
    badge: "Frictionless Transit",
    tagline: "Sync delivery statuses and parse cargo bills with automated data systems.",
    description: "We configure OCR invoice processing, driver routing pipelines, and delivery tracking notify-loops, ensuring supply chains operate without administrative delays.",
    challenges: [
      "Manual copy-pasting of delivery tracking IDs between portals",
      "Delays in processing paper-based customs invoices and cargo bills",
      "Slow communication updates to clients on delivery schedules"
    ],
    existingWorkflow: "Tracking IDs are compiled in Excel daily. Billing invoices are hand-typed into shipping software. Customer notification emails are sent manually on request.",
    aiOpportunities: [
      "Automated API bridges linking courier databases to CRM panels",
      "AI OCR models reading scanned shipping manifests and importing fields",
      "Real-time customer status alerts triggered by package database updates"
    ],
    automationRoadmap: [
      "Phase 1: Connecting shipping API feeds to customer CRM accounts.",
      "Phase 2: Deploying OCR invoice parsing for customs billing records.",
      "Phase 3: Automating transit alert notifications via SMS and email."
    ],
    roi: "Speeds up document intake validation by 5x and cuts package tracking query logs in half.",
    useCases: [
      "Automated extraction of details from scanned delivery manifests using OCR",
      "Tracking webhook pipelines syncing updates to client portals",
      "Optimal driver dispatch routing algorithms mapped to database queues"
    ],
    recommendedTech: ["FastAPI", "Python", "PaddleOCR", "n8n", "Redis", "Docker"],
    localIndustries: ["Cargo Shipping", "Trucking Lines", "Warehousing", "Courier Delivery"],
    accentColor: "#ffb59b",
    faqs: [
      {
        question: "Can the OCR parse unstructured customs invoices?",
        answer: "Yes. We use LayoutLM and AI parsing models to identify headers, amounts, and item details on non-standard formats."
      },
      {
        question: "How are clients notified of shipping delays?",
        answer: "Webhooks listen for database status changes and trigger instant, automated SMS/email alerts to the client profile."
      }
    ]
  },
  {
    slug: "finance",
    title: "AI for Finance & Accounting | Kibozera",
    metaTitle: "AI & Automation for Finance, Billing & Accounting India",
    metaDescription: "Automate invoice matching, sync ERP ledgers, and deploy fraud alert algorithms. Kibozera secure financial automation systems.",
    h1: "AI for Finance & Accounting",
    badge: "Fiscal Automation",
    tagline: "Secure ledger records and sync bills automatically with OCR AI pipelines.",
    description: "Kibozera deploys secure document-matching engines, automated payment syncs, and financial alert dashboards, minimizing manual bookkeeping overheads.",
    challenges: [
      "Heavy manual effort required for receipt and invoice matching",
      "Data discrepancies when keying bills to accounting software",
      "High security compliance demands when syncing financial profiles"
    ],
    existingWorkflow: "Invoices are printed, matched against purchase receipts, and manually typed into books. Bank statements are reconciled monthly.",
    aiOpportunities: [
      "Secure OCR engines matching invoice line items to PO databases",
      "Automatic reconciliation scripts linking bank APIs to ledger databases",
      "Anomaly detection scripts logging duplicate billing attempts"
    ],
    automationRoadmap: [
      "Phase 1: Setting up automated receipt data parsing with OCR.",
      "Phase 2: Building matching rules to link parsed invoices to purchase orders.",
      "Phase 3: Integrating bank API webhooks for automated reconciliations."
    ],
    roi: "Reduces accounting transcription errors by 99% and cuts manual document matching time by 80%.",
    useCases: [
      "Automated ledger matching using custom PO validation logic",
      "Scanned receipt OCR parsing directly into Zoho Books/Tally databases",
      "Reconciliation script pipelines comparing banking logs to company tables"
    ],
    recommendedTech: ["Python", "FastAPI", "Tesseract", "n8n", "PostgreSQL", "Docker"],
    localIndustries: ["Accounting", "Banking", "Tax & Audit", "Fintech SaaS"],
    accentColor: "#b8c3ff",
    faqs: [
      {
        question: "Can you sync data directly to Tally or Zoho Books?",
        answer: "Yes. We build secure API integrations to push reconciled invoice data straight to TallyPrime, Zoho Books, or QuickBooks."
      },
      {
        question: "How does the system handle pricing mismatches?",
        answer: "If the OCR total doesn't match the purchase order total, the script routes the invoice to a 'Manual Review' dashboard and alerts the team."
      }
    ]
  },
  {
    slug: "agriculture",
    title: "AI for Agriculture | Kibozera",
    metaTitle: "AI & Automation for Smart Agriculture & Cold Storage India",
    metaDescription: "Optimize crop disease checks and automate cold storage tracking. Kibozera custom agricultural automation services.",
    h1: "AI for Agriculture & Cold Storage",
    badge: "Smart Farming",
    tagline: "Deploy computer vision crop checks and automate supply monitoring.",
    description: "We build machine learning analytics, IoT temperature alert scripts, and visual leaf analysis models, optimizing yield checking and cold-storage operations.",
    challenges: [
      "Slow identification of crop diseases leading to reduced yields",
      "Manual monitoring of cold-storage temperatures causing food waste",
      "Poor logistics forecasting causing product spoilage during transit"
    ],
    existingWorkflow: "Crops are inspected manually by farmers. Cold storage metrics are written on physical log sheets daily. Transit schedules are coordinated via phone calls.",
    aiOpportunities: [
      "Visual leaf check apps detecting pest marks or rot indicators instantly",
      "IoT database sync tracking storage temperatures and alerting via WhatsApp",
      "Predictive demand forecasting models coordinating crop dispatch schedules"
    ],
    automationRoadmap: [
      "Phase 1: Deploying sensor bridges for temperature logging in storage units.",
      "Phase 2: Building vision analysis models for crop health checks.",
      "Phase 3: Connecting logistics queues to agricultural yield predictions."
    ],
    roi: "Cuts cold storage spoiling losses by 50% and speeds up crop quality checks by 4x.",
    useCases: [
      "Crop leaf disease classification using YOLOv8 vision AI model structures",
      "Storage temperature monitoring logs syncing to alerts on WhatsApp",
      "Yield forecasting analytics guiding logistics dispatch tables"
    ],
    recommendedTech: ["PyTorch", "YOLO", "Python", "FastAPI", "n8n", "PostgreSQL"],
    localIndustries: ["Farms", "Cold Storage", "Processing Plants", "Fertilizers"],
    accentColor: "#d0bcff",
    faqs: [
      {
        question: "How do temperature alerts work in cold storage?",
        answer: "We connect temperature sensors to our cloud backend. If metrics exceed threshold limits, the system triggers SMS alerts immediately."
      },
      {
        question: "Can visual AI identify crop diseases from photos?",
        answer: "Yes. By training models on leaf images, our computer vision pipelines identify diseases like blight or rot from smartphone photos."
      }
    ]
  },
  {
    slug: "hospitality",
    title: "AI for Hospitality & Hotels | Kibozera",
    metaTitle: "AI & Booking Automation for Hotels & Resorts India",
    metaDescription: "Automate room bookings, deploy guest WhatsApp chatbots, and track reviews. Kibozera custom hospitality automation.",
    h1: "AI for Hospitality & Hotels",
    badge: "Guest Velocity",
    tagline: "Automate room check-ins, guest queries, and feedback dispatch.",
    description: "Kibozera deploys automated guest support lines, room booking sync databases, and review parsing engines, improving hospitality service cycles.",
    challenges: [
      "Front-desk staff spending hours answering repetitive booking queries",
      "Delays in updating room cleaning queues to reservation software",
      "Low guest review collection rates due to slow follow-up cycles"
    ],
    existingWorkflow: "Booking questions are handled via front desk calls. Room cleanup queues are logged on paper. Guest feedback is requested manually during checkout.",
    aiOpportunities: [
      "WhatsApp AI assistants booking rooms and answering guest questions 24/7",
      "Task database triggers notifying staff when guests check out",
      "Feedback request emails sent to guest accounts automatically on checkout"
    ],
    automationRoadmap: [
      "Phase 1: Setting up guest WhatsApp support chatbots for common questions.",
      "Phase 2: Wiring checkout triggers to automated cleaning task boards.",
      "Phase 3: Creating review follow-up sequences in guest CRM."
    ],
    roi: "Reduces phone query volume by 70% and increases positive Google Review count by 35% in 3 months.",
    useCases: [
      "WhatsApp guest assistant booking amenities and checking checkout times",
      "Automated checkout notifications routing tasks to room cleanup boards",
      "Google Review request flows triggered by property departures"
    ],
    recommendedTech: ["n8n", "OpenAI APIs", "PostgreSQL", "Twilio API", "FastAPI", "React"],
    localIndustries: ["Hotels", "Resorts", "Travel Agencies", "Restaurants"],
    accentColor: "#ffb59b",
    faqs: [
      {
        question: "Can a WhatsApp bot book hotel rooms?",
        answer: "Yes. By connecting Twilio API to your booking database, guests can query dates, choose rooms, and get reservation confirmations on chat."
      },
      {
        question: "How does the cleanup automation work?",
        answer: "When a guest checks out at the desk, the database updates and triggers a task notification straight to the cleaning crew's mobile panel."
      }
    ]
  },
  {
    slug: "construction",
    title: "AI for Construction & Contracting | Kibozera",
    metaTitle: "AI & Estimating Automation for Construction India | Kibozera",
    metaDescription: "Automate construction material estimates, track labor logs, and parse blueprint specs. Kibozera contracting automation.",
    h1: "AI for Construction & Contracting",
    badge: "Precision Logistics",
    tagline: "Sync site resource logs and automate material estimates.",
    description: "We configure automated invoice matching, materials estimation parsers, and site status logs, helping general contractors manage budgets.",
    challenges: [
      "Taking days to manually calculate material logs from blueprint sheets",
      "Budget discrepancies from paper invoice tracking logs on-site",
      "Slow communication loops between field staff and project managers"
    ],
    existingWorkflow: "Estimators count materials manually from drawings. Site logs are written in paper journals and typed into Excel weekly. Invoices are hand-filed.",
    aiOpportunities: [
      "OCR engines reading PDF plan sheets and listing estimated components",
      "Mobile database portals logging site resources directly to main sheets",
      "Invoice parsing scripts comparing purchases to estimation databases"
    ],
    automationRoadmap: [
      "Phase 1: Building mobile database logs for site managers to record resources.",
      "Phase 2: Deploying OCR invoice tracking for material purchases.",
      "Phase 3: Implementing automatic budget deviation warnings on dashboards."
    ],
    roi: "Reduces estimation processing times by 75% and ensures project managers see daily cost tracking instead of weekly logs.",
    useCases: [
      "Plan sheet parsing using custom OCR extraction configurations",
      "Field logs sync portal uploading updates directly to central databases",
      "Material invoice OCR parsing and automatic budget matching scripts"
    ],
    recommendedTech: ["Python", "FastAPI", "PaddleOCR", "Next.js", "PostgreSQL", "Docker"],
    localIndustries: ["Contractors", "Architects", "Material Suppliers", "Real Estate"],
    accentColor: "#b8c3ff",
    faqs: [
      {
        question: "Can OCR read quantities from plan sheets?",
        answer: "Yes, we program OCR layouts to find structural schedules and tables on PDF plan drawings and extract quantities."
      },
      {
        question: "Will the mobile log work without internet on site?",
        answer: "Yes. Our database interfaces cache logs on the mobile device and upload them automatically once connection is established."
      }
    ]
  }
];
