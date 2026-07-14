import { SolutionData } from "../types/seo";

export const solutions: SolutionData[] = [
  {
    slug: "lead-generation-automation",
    title: "Lead Generation Automation | Kibozera",
    metaTitle: "Automated Lead Generation & Qualification Systems | Kibozera",
    metaDescription: "Qualify leads and route them directly to your sales CRM automatically. Kibozera custom lead generation workflows. Get a free proposal.",
    h1: "Lead Generation Automation",
    badge: "Revenue Velocity",
    tagline: "Capture, qualify, and route leads to your sales team automatically 24/7.",
    description: "Kibozera builds automated lead capturing pipelines. We connect your web forms, landing pages, and ads directly to AI scoring models. The AI qualifies leads based on criteria you define and assigns them to the right sales rep in CRM instantly.",
    painPoints: [
      "Leads getting cold due to slow human response times",
      "Sales reps wasting hours calling unqualified, low-intent leads",
      "Manual copy-pasting of lead info from contact forms to CRM databases"
    ],
    solutionOverview: "Our lead automation pipelines capture incoming contacts, use LLMs to score lead quality, and trigger instant follow-up notification flows. High-intent leads get booked into calendars automatically.",
    benefits: [
      "Under 5-minute response times to new inquiries",
      "Sales reps speak only to highly qualified leads",
      "100% automated data entry from forms to CRM sheets"
    ],
    features: [
      "AI-driven lead qualification using custom profile metrics",
      "Automated booking links emailed to high-score leads",
      "Real-time alerts sent to sales Slack channels"
    ],
    recommendedTech: ["n8n", "OpenAI API", "HubSpot API", "Slack API", "FastAPI"],
    faqs: [
      {
        question: "How does the AI qualify leads?",
        answer: "We pass form responses and company profiles to an LLM. The model ranks the lead score (e.g. A, B, C) based on budget, role, and industry fit."
      },
      {
        question: "Can this work with Facebook or Google ads?",
        answer: "Yes, we build webhook integration pipelines to pull leads from ad forms instantly."
      }
    ]
  },
  {
    slug: "customer-support-automation",
    title: "AI Customer Support Automation | Kibozera",
    metaTitle: "AI Customer Support Automation Company India | Kibozera",
    metaDescription: "Resolve 80% of support queries automatically using AI chatbots and CRM routing. Secure, 24/7 automated customer service solutions.",
    h1: "Customer Support Automation",
    badge: "24/7 Support",
    tagline: "Resolve common customer queries instantly with automated AI agents.",
    description: "We deploy conversational support assistants trained on your product guides, FAQs, and shipping rules. The AI resolves standard tracking, returns, and query tickets, routing complex cases to live staff.",
    painPoints: [
      "Support staff overwhelmed by repetitive, basic customer questions",
      "Long ticket resolution queues causing customer frustration",
      "High cost of maintaining 24/7 support coverage"
    ],
    solutionOverview: "Our support pipelines utilize semantic search against vector databases to answer guest questions instantly. We coordinate ticket routing and live-agent notifications on Slack/email.",
    benefits: [
      "Instant resolution of up to 80% of support queries",
      "Reduced support workload letting staff focus on key cases",
      "24/7 customer assistance with zero night-shift overheads"
    ],
    features: [
      "Custom vector index trained on corporate manuals",
      "Multi-channel support (WhatsApp, Web widget, Slack)",
      "Seamless transfer webhooks to notify live agents"
    ],
    recommendedTech: ["Next.js", "FastAPI", "Pinecone", "Twilio API", "OpenAI APIs"],
    faqs: [
      {
        question: "Can the bot process order refunds?",
        answer: "The bot can qualify the request and trigger a database ticket. We keep actual card refunds behind human validation layers for security."
      },
      {
        question: "What channels do you support?",
        answer: "We deploy bots across website widgets, WhatsApp Business API, Facebook Messenger, Slack, and Telegram."
      }
    ]
  },
  {
    slug: "hr-automation",
    title: "HR Automation Solutions | Kibozera",
    metaTitle: "Automated Employee Onboarding & Resume Screening India | Kibozera",
    metaDescription: "Automate resume screening, coordinate interview bookings, and trigger onboarding documents. Kibozera custom HR automation services.",
    h1: "HR Automation Solutions",
    badge: "Talent Ops",
    tagline: "Automate resume screening, interview scheduling, and team onboarding.",
    description: "Kibozera builds HR workflow automation. We write parsing scripts to screen incoming resumes, schedule interview slots via automated calendar links, and compile onboarding documents on contract signings.",
    painPoints: [
      "HR managers spending hours manually reviewing hundreds of PDF resumes",
      "Double-booking scheduling conflicts during candidate reviews",
      "Slow onboarding paperwork delays delaying candidate start dates"
    ],
    solutionOverview: "We build n8n and Python pipelines to extract details from applicant resumes, coordinate doctor/candidate schedules, and dispatch digital agreements on trigger.",
    benefits: [
      "90% reduction in resume screening review times",
      "Zero scheduling conflicts with automated calendars",
      "Frictionless onboarding document dispatches"
    ],
    features: [
      "AI resume parser highlighting skills matching criteria",
      "Dynamic booking calendar links sent to candidates",
      "Automated package dispatch flows (contracts, NDAs)"
    ],
    recommendedTech: ["n8n", "Python", "FastAPI", "Google Calendar API", "SendGrid"],
    faqs: [
      {
        question: "Does the resume parser reject candidates?",
        answer: "No. The AI scores resumes based on experience and keywords, ranking them on a dashboard for HR review. Humans make all final choices."
      },
      {
        question: "Can we connect this to LinkedIn?",
        answer: "Yes, we build parsing webhooks to capture candidate details directly from application boards."
      }
    ]
  },
  {
    slug: "invoice-processing",
    title: "Automated Invoice Processing | Kibozera",
    metaTitle: "AI Invoice OCR & Reconciliations Automation India | Kibozera",
    metaDescription: "Extract billing fields from scanned invoices and sync them to Zoho Books automatically. Secure AI financial document processing.",
    h1: "Automated Invoice Processing",
    badge: "Billing Precision",
    tagline: "Parse scanned invoices with OCR and sync reconciled data to your ERP.",
    description: "Kibozera engineers automated accounting pipelines. We extract vendor name, invoice date, amounts, and item details from scanned PDF bills and sync data to Zoho Books or accounting tables automatically.",
    painPoints: [
      "Manual data entry of paper invoices causing ledger errors",
      "Billing discrepancies between purchase orders and vendor invoices",
      "Slow approval cycles delaying payments and vendor relations"
    ],
    solutionOverview: "We use OCR models to read scan documents, match calculated column totals to matching purchase orders, and trigger ledger records on success.",
    benefits: [
      "Complete elimination of manual bookkeeping data entry errors",
      "Reconciliation processing speed boosted by 5x",
      "Instant error flags when totals do not match purchase order sheets"
    ],
    features: [
      "PaddleOCR and LayoutLM document parsing models",
      "Direct API sync to Zoho Books, Tally, or ERP systems",
      "Duplication check and verification logs"
    ],
    recommendedTech: ["PaddleOCR", "Python", "FastAPI", "n8n", "PostgreSQL", "Docker"],
    faqs: [
      {
        question: "Can the OCR read low-quality scanned invoice photos?",
        answer: "Yes. We apply contrast enhancement filters to clean up images before parsing, maintaining high accuracy on low-quality files."
      },
      {
        question: "How are ledger discrepancies handled?",
        answer: "If the PO and invoice totals deviate, the pipeline routes the record to an review queue and alerts the accountant."
      }
    ]
  },
  {
    slug: "ocr-automation",
    title: "AI OCR Automation | Kibozera",
    metaTitle: "AI-Powered Document OCR & Data Extraction India | Kibozera",
    metaDescription: "Extract text and tables from PDFs, receipts, and bank statements automatically using visual AI OCR systems. Get a custom demo.",
    h1: "AI OCR Automation",
    badge: "Document Capture",
    tagline: "Extract clean data from unstructured scanned sheets and receipts.",
    description: "We build custom OCR (Optical Character Recognition) pipelines to transcribe scanned bank statements, customs manifests, logistics bills, and reports into clean, structured tables.",
    painPoints: [
      "Wasted hours manually typing data from paper printouts",
      "OCR errors from poor formatting on scanned layouts",
      "Unstructured PDF documents containing tables that NoSQL can't read"
    ],
    solutionOverview: "Our OCR systems combine layout segmentation with text translation models. We process images, extract key-value data, and export clean JSON structures.",
    benefits: [
      "10x speedup in document transcription processes",
      "Precise cell-by-cell extraction from complex data tables",
      "Fully automated file sorting and naming"
    ],
    features: [
      "Custom layout parsing models trained on specific form formats",
      "Tabular extraction modules sorting grid data to Excel sheets",
      "Multilingual text recognition support"
    ],
    recommendedTech: ["Python", "Tesseract", "PaddleOCR", "OpenCV", "FastAPI"],
    faqs: [
      {
        question: "What is AI OCR?",
        answer: "AI OCR goes beyond simple character reading, using machine learning to understand the document layout, tables, and context."
      },
      {
        question: "Can it extract data from bank statements?",
        answer: "Yes. Our models extract tabular rows (date, description, amount) from multi-page PDFs and save them to CSV tables."
      }
    ]
  },
  {
    slug: "email-automation",
    title: "AI Email Automation | Kibozera",
    metaTitle: "Automated Email Classification & Response Drafting | Kibozera",
    metaDescription: "Classify incoming emails, extract tasks, and draft replies using AI. Kibozera custom email automation services. Learn more.",
    h1: "AI Email Automation",
    badge: "Inbox Control",
    tagline: "Sort incoming mail, trigger workflow databases, and draft AI replies.",
    description: "Kibozera builds email automation pipelines. We connect your shared inboxes (support, sales) to classification LLMs. The system automatically categorizes emails, updates CRM cards, and drafts responses for your team to review.",
    painPoints: [
      "Customer support teams losing hours sorting through crowded inboxes",
      "Long response times to critical client emails",
      "Missed inquiries due to manual sorting oversights"
    ],
    solutionOverview: "We build n8n listeners that read incoming mail, classify the text intent using AI, and write draft replies directly inside your mail client.",
    benefits: [
      "Inbox sorting tasks reduced by 90%",
      "Response times to critical clients cut to minutes",
      "Draft replies pre-written and ready for click review"
    ],
    features: [
      "Semantic classification of incoming email intent",
      "Information parsing (e.g. order numbers, files) to ERP",
      "Draft email generators synced to Microsoft Outlook / Gmail APIs"
    ],
    recommendedTech: ["n8n", "OpenAI API", "Gmail API", "Outlook API", "Python"],
    faqs: [
      {
        question: "Will the AI send emails without human review?",
        answer: "We recommend a 'human-in-the-loop' setup where the AI drafts the email and saves it as a draft, allowing staff to review and click send."
      },
      {
        question: "Can it handle attachment file types?",
        answer: "Yes. The pipeline can extract PDF, Excel, and image attachments and route them to OCR or storage folders automatically."
      }
    ]
  },
  {
    slug: "whatsapp-automation",
    title: "WhatsApp Automation Services | Kibozera",
    metaTitle: "WhatsApp Business API Integration & Automation India | Kibozera",
    metaDescription: "Connect WhatsApp Business API. Automate customer alerts, schedule booking reminders, and deploy AI support bots. Get a custom demo.",
    h1: "WhatsApp Automation Services",
    badge: "Direct Messaging",
    tagline: "Engage clients and send booking alerts automatically via WhatsApp.",
    description: "We connect the WhatsApp Business API to CRM databases. We automate dispatch alerts, schedule class/meeting reminders, and run custom support bots that solve client queries on chat.",
    painPoints: [
      "Poor email open rates causing clients to miss alerts",
      "Staff spending hours manually typing WhatsApp status checks",
      "Expensive SMS fees for sending appointment confirmations"
    ],
    solutionOverview: "Our WhatsApp pipelines connect CRM platforms directly to the Twilio API. We program transactional alert templates and set up conversational bot responses.",
    benefits: [
      "98% message open rates compared to 20% on emails",
      "Automated transactional notification dispatches on database triggers",
      "Fast, direct booking schedules on user messaging logs"
    ],
    features: [
      "WhatsApp Business API metadata templates setup",
      "Conversational AI bot configurations trained on wiki data",
      "Dynamic reminder triggers linked to calendar dates"
    ],
    recommendedTech: ["Twilio API", "n8n", "FastAPI", "Python", "Redis", "PostgreSQL"],
    faqs: [
      {
        question: "Do we need a verified Facebook Business Manager profile?",
        answer: "Yes. To access the official WhatsApp Business API, Facebook requires business verification. We guide you through the setup."
      },
      {
        question: "Can we send marketing broadcasts via WhatsApp?",
        answer: "Yes, but WhatsApp enforces specific template approvals and guidelines to prevent spam. We configure compliant broadcast flows."
      }
    ]
  },
  {
    slug: "sales-automation",
    title: "Sales Funnel Automation | Kibozera",
    metaTitle: "Sales Pipeline & CRM Workflow Automation India | Kibozera",
    metaDescription: "Automate quote generation, CRM pipeline card moves, and follow-up alerts. Kibozera sales process automation. Get a free consult.",
    h1: "Sales Funnel Automation",
    badge: "Deal Velocity",
    tagline: "Automate client follow-ups, quote creations, and CRM card updates.",
    description: "Kibozera engineers sales automation systems. We connect webforms to CRM databases, automatically compile quotation PDFs on input, and coordinate tasks to keep deals moving without delay.",
    painPoints: [
      "Sales reps losing time writing custom proposal PDFs manually",
      "CRM pipelines out-of-date due to manual logging neglect",
      "Fewer deals closed from poor follow-up structures"
    ],
    solutionOverview: "We use n8n loops to monitor CRM stages, trigger automated proposal creation scripts on deal moves, and schedule calendar alerts.",
    benefits: [
      "Quotation PDF generation time cut from hours to seconds",
      "Always updated CRM pipelines synced via automated triggers",
      "Increased conversions from structured client follow-up sequences"
    ],
    features: [
      "Quotation PDF template generators pulling CRM deal values",
      "Automated status check alerts on Slack/WhatsApp",
      "Integration with digital signature APIs (DocuSign/SignEasy)"
    ],
    recommendedTech: ["n8n", "HubSpot API", "Zoho CRM", "SignEasy API", "Python", "PostgreSQL"],
    faqs: [
      {
        question: "Can this system generate custom pricing quotes?",
        answer: "Yes. We write calculation scripts that pull your product catalog prices and calculate discounts and totals from forms automatically."
      },
      {
        question: "Does it work with Zoho CRM?",
        answer: "Yes, we write custom Zoho Creator and CRM scripting pipelines to automate cards, tasks, and quotation files."
      }
    ]
  },
  {
    slug: "inventory-automation",
    title: "Automated Inventory Management | Kibozera",
    metaTitle: "Automated Inventory Sync & Purchase Alerts India | Kibozera",
    metaDescription: "Sync inventory levels between physical shops and online storefronts automatically. Real-time database alerts. Get a custom specs document.",
    h1: "Automated Inventory Management",
    badge: "Supply Control",
    tagline: "Sync retail stocks in real-time and automate vendor purchase orders.",
    description: "We design real-time database sync pipelines. We connect physical retail POS machines directly to WooCommerce/Shopify databases and automate stock-threshold purchase orders to vendors.",
    painPoints: [
      "Double-selling products due to database delays between online and offline stores",
      "Wasted capital from manual over-ordering of inventory items",
      "Production delays from stock shortages in manufacturing plants"
    ],
    solutionOverview: "Our inventory pipelines sync POS transaction logs to web server tables. When item counts drop below limit scales, we trigger vendor purchase orders.",
    benefits: [
      "Real-time sync of stock metrics across all listings",
      "Automated stock-threshold purchase order dispatch flows",
      "Optimized warehouse layout reports based on turnover metrics"
    ],
    features: [
      "Real-time database sync scripts (PostgreSQL/Redis caches)",
      "Automated vendor order dispatches on stock threshold limit moves",
      "Stock turnover reporting and tracking dashboards"
    ],
    recommendedTech: ["Python", "FastAPI", "n8n", "Redis", "WooCommerce API", "PostgreSQL"],
    faqs: [
      {
        question: "How fast is the online-offline store sync?",
        answer: "We set up webhook pipelines that trigger within seconds of an offline sale, updating online availability immediately."
      },
      {
        question: "Can the system send orders to our suppliers directly?",
        answer: "Yes. When inventory drops below a preset limit, the script compiles a PDF purchase order and emails it to the supplier automatically."
      }
    ]
  },
  {
    slug: "document-processing",
    title: "AI Document Processing | Kibozera",
    metaTitle: "AI-Powered PDF & Contract Data Processing India | Kibozera",
    metaDescription: "Extract clauses from contracts, parse bank files, and sort corporate PDFs automatically. Kibozera secure document AI services.",
    h1: "AI Document Processing",
    badge: "Clause Analysis",
    tagline: "Parse contracts and sort corporate documents automatically with AI.",
    description: "Kibozera constructs document processing backends. We use LLM models to identify clauses in legal files, extract metrics from financial statements, and file paperwork into company databases.",
    painPoints: [
      "Legal and compliance teams spending days reading long contract files",
      "Data inaccuracies when manually logging PDF terms into system databases",
      "Messy file directories with uncategorized corporate documents"
    ],
    solutionOverview: "We use OCR and LangChain document parsing to read files, extract target values, and sort files into classified directory systems.",
    benefits: [
      "Agreement review cycles shortened from hours to minutes",
      "Automated identification of risk clauses or dates",
      "Structured data columns generated from unstructured PDF inputs"
    ],
    features: [
      "AI contract parser identifying deadlines, liabilities, and amounts",
      "Automated folder classification systems",
      "Secure backend vaults with user role permission settings"
    ],
    recommendedTech: ["Python", "LangChain", "OpenAI API", "PaddleOCR", "AWS S3", "FastAPI"],
    faqs: [
      {
        question: "Can you parse scanned PDF agreements?",
        answer: "Yes. The pipeline runs OCR to extract the scanned text, then feeds the layout segments to an LLM for structured clause checks."
      },
      {
        question: "Is our intellectual property protected?",
        answer: "Data security is our priority. We construct isolated processing servers and sign NDAs to ensure no leakages occur."
      }
    ]
  },
  {
    slug: "ai-knowledge-base",
    title: "Enterprise AI Knowledge Base | Kibozera",
    metaTitle: "Custom AI Knowledge Base & Semantic Search India | Kibozera",
    metaDescription: "Train private AI models on your company wikis, policies, and files. Build a custom search engine for employees. Learn more.",
    h1: "Enterprise AI Knowledge Base",
    badge: "Wiki Search",
    tagline: "Connect your team to internal data using semantic AI search indices.",
    description: "We build private company search engines. By saving internal guides, training manuals, and policies as vector embeddings, staff can query corporate knowledge directly on chat panels.",
    painPoints: [
      "Staff losing hours search folders for specific policies or forms",
      "Slow onboarding times for new hires needing operational guidelines",
      "Knowledge loss when senior staff leave the organization"
    ],
    solutionOverview: "We deploy RAG system architectures. We chunk company wiki files, index them inside vector tables, and configure chat dashboards for query responses.",
    benefits: [
      "Instant lookup of answers from thousands of corporate PDFs",
      "Shorter onboarding times for new hires",
      "Preservation of institutional business guidelines"
    ],
    features: [
      "Automatic document import from Google Drive or local folders",
      "Web chat panel with source citation links",
      "Admin control panel to review and update indexes"
    ],
    recommendedTech: ["LangChain", "Pinecone", "Next.js", "Python", "FastAPI", "Google Drive API"],
    faqs: [
      {
        question: "Can we control document permissions?",
        answer: "Yes. We configure user role permissions (RBAC) so employees can only retrieve answers from documents their profiles are allowed to see."
      },
      {
        question: "How do we add new files to the index?",
        answer: "We link folders to automated ingestion scripts. Saving a new PDF inside Google Drive syncs it to the vector database in minutes."
      }
    ]
  },
  {
    slug: "internal-ai-assistant",
    title: "Custom Internal AI Assistant | Kibozera",
    metaTitle: "Custom Internal AI Assistant Developer India | Kibozera",
    metaDescription: "Deploy custom AI assistants to assist employees with drafting, database lookups, and reporting tasks. Secure corporate AI. Get a demo.",
    h1: "Custom Internal AI Assistant",
    badge: "Staff Co-pilot",
    tagline: "Boost employee productivity with secure, custom AI assistants.",
    description: "Kibozera designs internal AI co-pilots. We build secure chat platforms that help staff draft emails, compile database reports, translate documents, and write scripts safely without corporate data leakages.",
    painPoints: [
      "Employees paste sensitive customer database details into public AI tools",
      "Wasted hours manually drafting email structures and reports",
      "Inefficient access to database metrics for staff without SQL skills"
    ],
    solutionOverview: "We build secure Next.js chat portals connected to private LLM servers. We configure API lookups so staff can fetch reports via natural language.",
    benefits: [
      "Corporate data remains secure in private cloud networks",
      "Instant SQL-free database queries via chat commands",
      "Improved writing, translation, and coding workflows"
    ],
    features: [
      "Secure user profile login with active directories sync",
      "Private API pipelines to LLMs preventing dataset training lookups",
      "Natural language interfaces to query company databases"
    ],
    recommendedTech: ["Next.js", "FastAPI", "Python", "PostgreSQL", "Redis", "Llama 3 / OpenAI"],
    faqs: [
      {
        question: "Why not let employees use ChatGPT?",
        answer: "Public AI queries may be used for model training. Our private integrations guarantee that queries remain completely confidential."
      },
      {
        question: "Can this generate database reports?",
        answer: "Yes. By connecting the assistant to a secure reporting layer, the AI converts queries (e.g. 'Show sales for last week') into SQL commands, running the check and presenting charts."
      }
    ]
  }
];
