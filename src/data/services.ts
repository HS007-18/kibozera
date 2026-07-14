import { ServiceData } from "../types/seo";

export const services: ServiceData[] = [
  {
    slug: "ai-automation",
    title: "AI Automation Services | Kibozera",
    metaTitle: "Enterprise AI Automation Services & Consulting Company India",
    metaDescription: "Boost your operational efficiency with Kibozera's enterprise-grade AI automation services. We map, design, and deploy adaptive AI systems that scale. Free consultation.",
    h1: "Enterprise AI Automation Services",
    badge: "Operational Intelligence",
    tagline: "Transform manual friction into automated precision with adaptive enterprise systems.",
    description: "Kibozera engineers custom AI automation systems that eliminate bottlenecks and streamline operations. By integrating machine learning models directly into your daily pipelines, we create self-optimizing workflows that save thousands of man-hours and reduce overhead costs.",
    benefits: [
      "Significant overhead reduction through task offloading",
      "99.9% error reduction in complex data processing pipelines",
      "Self-improving AI loops that learn from production inputs",
      "Real-time operational dashboards for tracking ROI"
    ],
    process: [
      "Workflow Analysis: We audit your operations to pinpoint bottlenecks.",
      "Architecture Design: We draft the AI system layout and select models.",
      "Pipeline Engineering: We connect systems and program model interfaces.",
      "Production Hand-off: We launch, monitor for drift, and hand over control."
    ],
    technologies: ["Python", "FastAPI", "OpenAI API", "n8n", "LangChain", "PostgreSQL"],
    industriesServed: ["Manufacturing", "Logistics", "Textiles", "Healthcare"],
    deliverables: [
      "Operational bottleneck audit & mapping reports",
      "Custom AI integration pipelines and APIs",
      "Automated self-training model loops",
      "Real-time performance analytics dashboards"
    ],
    accentColor: "#b8c3ff",
    faqs: [
      {
        question: "What is enterprise AI automation?",
        answer: "Enterprise AI automation is the practice of combining traditional process automation (APIs/RPA) with cognitive machine learning models to handle complex, decision-heavy business workflows."
      },
      {
        question: "How long does it take to deploy an AI automation system?",
        answer: "A standard workflow automation pipeline takes 3 to 6 weeks, while complex systems with fine-tuned models can take up to 12 weeks."
      }
    ]
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation Company | Kibozera",
    metaTitle: "Workflow Automation Company India — n8n, Make & Zapier Experts",
    metaDescription: "Connect your enterprise apps and automate daily manual tasks. Kibozera provides advanced workflow automation consulting using n8n, Make, and custom APIs.",
    h1: "Workflow Automation Solutions",
    badge: "System Sync",
    tagline: "Connect your entire software stack and automate business processes with zero code-friction.",
    description: "We design and optimize automated workflows that link your CRMs, ERPs, emails, and databases. Using leading orchestration tools like n8n and Make, we build secure pipelines that synchronize data in real-time, eliminating manual copy-pasting.",
    benefits: [
      "Complete elimination of manual data entry errors",
      "Instant, real-time data sync across all corporate systems",
      "Reduced subscription overhead by optimizing API routes",
      "Automated alerts and notifications on Slack or WhatsApp"
    ],
    process: [
      "API Inventory: Mapping all software platforms used by your business.",
      "Workflow Drafting: Designing visual trigger-and-action diagrams.",
      "Integrations Setup: Writing custom webhooks and API connectors.",
      "Testing & Launch: Validating edge cases and deploying live sync."
    ],
    technologies: ["n8n", "Make", "Zapier", "FastAPI", "Webhooks", "PostgreSQL"],
    industriesServed: ["Retail", "Logistics", "Finance", "Education"],
    deliverables: [
      "Visual workflow diagrams and mapping sheets",
      "n8n/Make pipeline JSON templates",
      "Custom webhooks and API auth configurations",
      "Fail-safe alerting and error recovery systems"
    ],
    accentColor: "#d0bcff",
    faqs: [
      {
        question: "Should I use n8n or Make for workflow automation?",
        answer: "n8n is ideal for self-hosted, secure, and complex pipelines, while Make is excellent for cloud-native integrations. We help you choose the best fit for your stack."
      },
      {
        question: "Can you automate legacy software with no public APIs?",
        answer: "Yes. For legacy systems, we deploy custom RPA (Robotic Process Automation) bots to interact with the user interface directly."
      }
    ]
  },
  {
    slug: "business-process-automation",
    title: "Business Process Automation (RPA) | Kibozera",
    metaTitle: "Robotic Process Automation (RPA) Services India | Kibozera",
    metaDescription: "Automate repetitive, high-volume tasks with intelligent RPA and business process automation. Get a free custom bot feasibility report today.",
    h1: "Robotic Process Automation (RPA)",
    badge: "Task Delegation",
    tagline: "Deploy software bots to handle high-volume, repetitive desktop operations.",
    description: "Kibozera builds RPA systems that mimic human UI actions — clicking, typing, extracting tables, and uploading files. We eliminate administrative friction from document sorting, invoice logging, and reporting.",
    benefits: [
      "10x faster execution of data-entry tasks",
      "24/7 continuous operation without human intervention",
      "Zero-downtime integration with legacy ERP systems",
      "Freed-up staff to focus on customer-facing roles"
    ],
    process: [
      "Process Identification: Finding high-volume, rule-based tasks.",
      "RPA Scripting: Building bots with advanced visual selectors.",
      "Testing Iterations: Validating UI layouts and screen changes.",
      "Continuous Monitoring: Tracking bot success rates and logs."
    ],
    technologies: ["Playwright", "Python", "Docker", "Node.js", "n8n"],
    industriesServed: ["Finance", "Textiles", "Logistics", "Retail"],
    deliverables: [
      "Custom RPA execution scripts and bots",
      "Dockerized container environments for hosting bots",
      "Process definition documentation (PDD)",
      "Daily email success reports and alert logs"
    ],
    accentColor: "#ffb59b",
    faqs: [
      {
        question: "What is the difference between API automation and RPA?",
        answer: "API automation communicates directly between servers, while RPA controls the visual browser/desktop UI where APIs are not available."
      },
      {
        question: "Are RPA bots secure?",
        answer: "Absolutely. We secure credentials using encrypted keystores and isolate bot runtimes inside secure cloud containers."
      }
    ]
  },
  {
    slug: "ai-agents",
    title: "Autonomous AI Agents | Kibozera",
    metaTitle: "Enterprise AI Agents Development Company India | Kibozera",
    metaDescription: "Deploy intelligent, autonomous AI agents to manage email ops, customer inquiries, and complex multi-step workflows 24/7. Speak to our architects.",
    h1: "Autonomous AI Agents",
    badge: "Cognitive Workers",
    tagline: "Integrate decision-capable digital agents to orchestrate complex tasks 24/7.",
    description: "Kibozera builds autonomous AI agents capable of multi-step reasoning, goal setting, tool usage, and database querying. These agents function as digital team members that handle support, research, and data ops autonomously.",
    benefits: [
      "Autonomous handling of unstructured, complex prompts",
      "Integration with corporate databases via semantic query",
      "Self-correcting task execution lists",
      "Instant scaling to handle thousands of concurrent queries"
    ],
    process: [
      "Agent Mapping: Outlining the agent's tools, role, and context.",
      "LLM & Tool Integration: Wiring agents to custom database lookup APIs.",
      "Prompt Optimization: Fine-tuning system instructions and security.",
      "Feedback Loops: Gathering agent execution logs for system tuning."
    ],
    technologies: ["LangChain", "CrewAI", "Python", "OpenAI GPT-4", "Pinecone", "FastAPI"],
    industriesServed: ["Healthcare", "Finance", "Retail", "Manufacturing"],
    deliverables: [
      "Custom agentic Python microservices",
      "Integrated vector database embeddings",
      "Security guardrails config files (Prompt injection protection)",
      "Agent execution dashboards"
    ],
    accentColor: "#b8c3ff",
    faqs: [
      {
        question: "What is an AI Agent?",
        answer: "An AI Agent is an autonomous program that uses LLMs (like GPT-4) to make decisions, execute multi-step plans, and use external APIs to solve complex problems."
      },
      {
        question: "Do AI agents hallucinate?",
        answer: "We implement strict validation layers, database cross-references, and prompt guardrails to minimize hallucinations and keep responses accurate."
      }
    ]
  },
  {
    slug: "chatbot-development",
    title: "AI Chatbot Development | Kibozera",
    metaTitle: "Custom AI Chatbot Development Services India — WhatsApp & Web",
    metaDescription: "Build custom-trained AI chatbots for WhatsApp, websites, and Slack. Automate support and lead qualification. Get a custom demo today.",
    h1: "AI Chatbot Development",
    badge: "Conversational UX",
    tagline: "Engage clients and qualify leads instantly with custom-trained conversational AI.",
    description: "We design and deploy conversational AI chatbots trained on your internal documentation, product catalogs, and PDFs. Integrate these chatbots into your website, WhatsApp, Slack, or Telegram to respond to leads and support inquiries instantly.",
    benefits: [
      "24/7 instant response times for client support",
      "Automatic lead capture and CRM synchronization",
      "Reduced support workload by resolving up to 80% of common queries",
      "Multi-channel support with consistent brand tone"
    ],
    process: [
      "Knowledge Assessment: Gathering brand materials, PDFs, and links.",
      "Flow Integration: Setting up dynamic qualification questions.",
      "Channel Routing: Wiring the chat to WhatsApp API, Web, or Slack.",
      "Handoff Logic: Coding smooth transfer lines to live agents."
    ],
    technologies: ["React", "FastAPI", "OpenAI APIs", "Pinecone", "Twilio WhatsApp API", "Redis"],
    industriesServed: ["Retail", "Education", "Hospitality", "Healthcare"],
    deliverables: [
      "Responsive web chat widget code snippet",
      "WhatsApp/Slack webhook backend service",
      "Custom knowledge vector database setup",
      "Live chat agent handoff control panel"
    ],
    accentColor: "#d0bcff",
    faqs: [
      {
        question: "Can the chatbot transfer conversations to a real person?",
        answer: "Yes. When a query is complex or requested, the bot immediately triggers a webhook to alert support staff on Slack, email, or your CRM."
      },
      {
        question: "How is the chatbot trained on our data?",
        answer: "We convert your training manuals, PDFs, and guides into vector embeddings, saving them in a vector database for semantic search query."
      }
    ]
  },
  {
    slug: "custom-software",
    title: "Custom Software Development | Kibozera",
    metaTitle: "Custom Software Development Company India | Kibozera",
    metaDescription: "Tailor-made software solutions designed for your operational needs. Custom CRM, ERP, and database applications. Get a design mockup.",
    h1: "Custom Software Development",
    badge: "Bespoke Engineering",
    tagline: "Build custom software tailored exactly to your unique operational flows.",
    description: "Kibozera develops custom web applications, ERP backends, internal tools, and CRM systems. We write clean, modular code that integrates directly with automated databases and AI models to make your business run smoothly.",
    benefits: [
      "Elimination of monthly SaaS licensing overheads",
      "100% custom workflows built to fit your business model",
      "Complete ownership of code and data structure",
      "Seamless scaling capacity without licensing boundaries"
    ],
    process: [
      "Requirements Mapping: Translating business needs to data models.",
      "Architecture Drafting: Picking high-performance databases & backends.",
      "Modular Coding: Building clean frontend, backend, and APIs.",
      "Deployment & Setup: Launching on robust cloud servers."
    ],
    technologies: ["Next.js", "Python", "FastAPI", "Docker", "PostgreSQL", "Node.js"],
    industriesServed: ["Textiles", "Manufacturing", "Finance", "Logistics"],
    deliverables: [
      "Full ownership of production source code via Git",
      "Staged & live cloud deployment configurations",
      "API schema blueprints and documentation",
      "Admin dashboards and database panels"
    ],
    accentColor: "#ffb59b",
    faqs: [
      {
        question: "Who owns the code of the custom software?",
        answer: "You own 100% of the code, IP rights, and data architecture once the project is completed."
      },
      {
        question: "Do you offer post-launch maintenance?",
        answer: "Yes, we provide ongoing updates, server optimization, and feature expansion packages."
      }
    ]
  },
  {
    slug: "web-development",
    title: "Web Development Services | Kibozera",
    metaTitle: "Modern Web Development Services India — Next.js & React Experts",
    metaDescription: "High-performance, SEO-optimized web applications and corporate websites built with Next.js and React. Get a free performance audit.",
    h1: "Web Development Services",
    badge: "Next-Gen Web",
    tagline: "Rank higher and convert faster with blazing-fast Next.js web applications.",
    description: "We build modern, responsive web applications engineered for speed, responsiveness, and top-tier SEO. By using frameworks like Next.js and modern CSS styling, we deliver premium websites that load instantly and rank for target search terms.",
    benefits: [
      "Fast page load times (95+ score on Google Lighthouse)",
      "Structured SEO-ready HTML for indexing out of the box",
      "Responsive, elegant designs that scale across screen sizes",
      "Easy content management options (CMS integrations)"
    ],
    process: [
      "UI Mockups: Designing clean, glassmorphic layouts.",
      "Component Coding: Writing reusable React & Next.js files.",
      "Performance Tuning: Preloading images, fonts, and scripts.",
      "Static Compilation: Building static pages for crawl speed."
    ],
    technologies: ["Next.js", "React 19", "Tailwind CSS", "TypeScript", "Vercel", "Framer Motion"],
    industriesServed: ["Hospitality", "Education", "Retail", "Finance"],
    deliverables: [
      "SEO-friendly, responsive Next.js source code",
      "Connected content management system (CMS)",
      "Configured analytics (Google Analytics & Search Console)",
      "SSL, security headers, and domain setup"
    ],
    accentColor: "#b8c3ff",
    faqs: [
      {
        question: "Why do you recommend Next.js over WordPress?",
        answer: "Next.js websites compile to static HTML, making them load instantly, rank better on SEO, and offer complete design flexibility without plugins."
      },
      {
        question: "Are your websites mobile-responsive?",
        answer: "Yes. Every component is styled using fluid layout parameters to guarantee pristine presentation on phones, tablets, and ultra-wide monitors."
      }
    ]
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development | Kibozera",
    metaTitle: "Mobile App Development Company India | iOS & Android Apps",
    metaDescription: "Deploy custom iOS and Android mobile apps using React Native. High-performance, cross-platform apps for enterprises. Get a quote.",
    h1: "Mobile App Development",
    badge: "Mobile Architecture",
    tagline: "Deliver custom iOS and Android mobile experiences for your customers.",
    description: "Kibozera builds cross-platform mobile applications that run smoothly on both iOS and Android devices. We design custom customer apps, driver routing tools, and staff dashboards that connect directly to your automated server backend.",
    benefits: [
      "Single codebase for both iOS and Android (React Native)",
      "Fast launch schedules and cost-efficient development",
      "Offline sync support and push notifications",
      "Clean UI/UX designs matched to brand guidelines"
    ],
    process: [
      "User Flows: Mapping actions, page navigations, and screens.",
      "App Development: Writing React Native code and testing state.",
      "API Integration: Connecting app components to backend servers.",
      "App Store Submission: Compiling and uploading files to Apple & Google."
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "Firebase", "Apple App Store", "Google Play"],
    industriesServed: ["Logistics", "Retail", "Healthcare", "Hospitality"],
    deliverables: [
      "Cross-platform React Native source repository",
      "Compiled iOS (.ipa) and Android (.apk/.aab) bundles",
      "Configured push notifications and analytics panels",
      "Completed App Store and Google Play submissions"
    ],
    accentColor: "#d0bcff",
    faqs: [
      {
        question: "Do you develop natively or cross-platform?",
        answer: "We specialize in React Native cross-platform apps. It saves up to 50% of development cost and ensures simultaneous updates for iOS and Android."
      },
      {
        question: "Can the app work offline?",
        answer: "Yes. We configure local caching databases that queue actions and sync with the main cloud databases once internet connects."
      }
    ]
  },
  {
    slug: "erp-integration",
    title: "ERP Integration Services | Kibozera",
    metaTitle: "ERP Integration & Automation Services India | Kibozera",
    metaDescription: "Connect your ERP system with custom databases, automated reporting, and AI tools. We support SAP, Zoho, and legacy ERPs. Get a consult.",
    h1: "ERP Integration Services",
    badge: "Resource Orchestration",
    tagline: "Sync your enterprise resources in real-time to automate planning.",
    description: "We bridge legacy and modern ERP systems (SAP, Zoho ERP, Microsoft Dynamics) with sales pipelines, warehouse sensors, and CRM tools. We automate database entries to eliminate manual inventory logging.",
    benefits: [
      "Automated stock level updates across multiple channels",
      "Instant synchronization of invoices and accounting records",
      "Consolidated financial and operational reporting",
      "Reduced software silos across operations departments"
    ],
    process: [
      "Database Mapping: Checking Zoho, SAP, or custom schemas.",
      "Connector Configuration: Setting up APIs, Webhooks, or RPA bots.",
      "Security Audits: Encrypting connections and configuring access.",
      "Data Verification: Ensuring test batches sync correctly."
    ],
    technologies: ["Zoho API", "SAP SDK", "Python", "PostgreSQL", "FastAPI", "n8n"],
    industriesServed: ["Textiles", "Manufacturing", "Logistics", "Finance"],
    deliverables: [
      "ERP connector scripts and middleware codebase",
      "Data sync schemas and field mapping manuals",
      "Automated operational compliance alerts",
      "Synchronized database tables"
    ],
    accentColor: "#ffb59b",
    faqs: [
      {
        question: "Can you connect local legacy ERP software to the cloud?",
        answer: "Yes, we build secure bridge APIs that fetch data from local databases and push them to secure cloud systems."
      },
      {
        question: "Do you support Zoho API integration?",
        answer: "Yes. We have extensive experience building custom pipelines that sync Zoho CRM, Books, and Creator with external AI tools."
      }
    ]
  },
  {
    slug: "crm-automation",
    title: "CRM Automation Services | Kibozera",
    metaTitle: "CRM Automation Company India — HubSpot, Zoho & Salesforce",
    metaDescription: "Optimize your sales funnel. We automate lead capture, email sequences, and CRM database synchronization. Get a free operations audit.",
    h1: "CRM Automation Services",
    badge: "Sales Velocity",
    tagline: "Nurture leads and close sales automatically with custom CRM workflows.",
    description: "Kibozera automates CRM management (HubSpot, Salesforce, Zoho CRM). We build pipelines that capture web leads, qualify them using AI, schedule meetings, and update client statuses with zero manual clicks.",
    benefits: [
      "Instant response to new lead inquiries",
      "Automated, customized follow-up email campaigns",
      "No missed sales tasks or client follow-ups",
      "Accurate sales pipeline tracking and visual reports"
    ],
    process: [
      "Funnel Analysis: Auditing lead touchpoints and forms.",
      "CRM API Setup: Creating custom properties and webhooks.",
      "Pipeline Automation: Writing triggers to qualify and assign leads.",
      "Testing: Sending test leads to verify correct CRM routing."
    ],
    technologies: ["HubSpot API", "Salesforce API", "n8n", "Zapier", "Python", "SendGrid"],
    industriesServed: ["Education", "Retail", "Hospitality", "Finance"],
    deliverables: [
      "Automated lead capture & routing configurations",
      "Customized email sequence layouts and templates",
      "Cross-platform CRM sync scripts",
      "Lead scoring AI models"
    ],
    accentColor: "#b8c3ff",
    faqs: [
      {
        question: "Can you automate lead scoring using AI?",
        answer: "Yes. We train AI models on your past conversion data to score and rank leads based on their profile and activity automatically."
      },
      {
        question: "Will this replace our sales staff?",
        answer: "No. It takes care of the repetitive data logging and scheduling so that your sales staff can focus entirely on calling qualified leads."
      }
    ]
  },
  {
    slug: "api-development",
    title: "Custom API Development | Kibozera",
    metaTitle: "Custom API Development & Integration Services India | Kibozera",
    metaDescription: "High-performance REST & GraphQL APIs built with FastAPI and Node.js. Secure, scalable backend endpoints. Get an API architecture spec.",
    h1: "Custom API Development",
    badge: "Microservice Core",
    tagline: "Build high-speed, secure APIs to connect and scale your digital assets.",
    description: "We develop custom REST and GraphQL APIs using high-speed frameworks like FastAPI and Node.js. We build clean API layers that communicate securely with databases, legacy software, mobile frontends, and AI models.",
    benefits: [
      "Sub-millisecond backend response times",
      "Standard OpenAPI / Swagger self-documenting code",
      "Secure token authentication (JWT) and rate limiting",
      "Modular, microservice-ready backend codebases"
    ],
    process: [
      "Schema Design: Modeling database endpoints and JSON paths.",
      "API Programming: Writing controllers, models, and routes.",
      "Security Hardening: Adding token validation and CORS rules.",
      "Endpoint Testing: Running unit tests and load checks."
    ],
    technologies: ["FastAPI", "Node.js", "PostgreSQL", "Docker", "Swagger/OpenAPI", "Redis"],
    industriesServed: ["Finance", "Logistics", "Retail", "Manufacturing"],
    deliverables: [
      "Clean, documented API source repository",
      "Swagger UI interactive documentation pages",
      "Secure hosting configurations (Docker Compose)",
      "Unit test scripts and coverage reports"
    ],
    accentColor: "#d0bcff",
    faqs: [
      {
        question: "What framework do you use for APIs?",
        answer: "We prefer FastAPI (Python) for machine-learning and data integration services, and Express/NestJS (Node.js) for high-scale web platforms."
      },
      {
        question: "How do you secure your APIs?",
        answer: "We implement OAuth2, JSON Web Tokens (JWT) for authentication, HTTPS encryption, API keys, and rate-limiting limits."
      }
    ]
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions & DevOps | Kibozera",
    metaTitle: "Cloud AI Infrastructure & DevOps Services India | Kibozera",
    metaDescription: "Deploy and optimize scalable cloud applications on AWS, GCP, and Azure. Custom CI/CD pipelines, Docker, and auto-scaling. Learn more.",
    h1: "Cloud Solutions & DevOps",
    badge: "Compute Infrastructure",
    tagline: "Scale your software securely with modern auto-scaling cloud configurations.",
    description: "Kibozera designs and deploys scalable cloud architecture on AWS, Google Cloud, and Microsoft Azure. We configure CI/CD pipelines, containerize applications with Docker, and set up auto-scaling so your apps run reliably under load.",
    benefits: [
      "Optimized server hosting costs (up to 50% savings)",
      "Zero-downtime automated deployments (CI/CD pipelines)",
      "Robust auto-scaling to absorb traffic spikes",
      "Isolated environments (Staging/Production) for safe testing"
    ],
    process: [
      "Architecture Review: Reviewing server requirements and traffic forecasts.",
      "Infrastructure Setup: Creating secure cloud VPCs and server instances.",
      "Containerization: Writing Docker files for all backend services.",
      "CI/CD Configuration: Wiring GitHub to deploy automatically."
    ],
    technologies: ["AWS", "Google Cloud", "Docker", "GitHub Actions", "Nginx", "Linux Server"],
    industriesServed: ["Logistics", "Retail", "Manufacturing", "Finance"],
    deliverables: [
      "Infrastructure configuration scripts",
      "GitHub Actions workflow pipelines",
      "Production Docker Compose files",
      "Automated server backup configurations"
    ],
    accentColor: "#ffb59b",
    faqs: [
      {
        question: "Which cloud provider should we choose?",
        answer: "We assess your project needs and match you to AWS, GCP, or Firebase based on compute demands and budget constraints."
      },
      {
        question: "What is CI/CD?",
        answer: "CI/CD automates testing and deployment: pushing code to GitHub automatically runs checks and updates your production website in minutes."
      }
    ]
  },
  {
    slug: "machine-learning",
    title: "Machine Learning Services | Kibozera",
    metaTitle: "Custom Machine Learning Services & Consulting India | Kibozera",
    metaDescription: "Train predictive analytics models, anomaly detection algorithms, and recommendation engines on your business data. Get a feasibility check.",
    h1: "Machine Learning Solutions",
    badge: "Predictive Analytics",
    tagline: "Unlock hidden opportunities with predictive models trained on your data.",
    description: "We train custom machine learning models to solve business challenges. From forecasting retail demand and predicting inventory shortages to detecting anomalies in transaction logs, we help you make data-driven decisions.",
    benefits: [
      "Highly accurate demand forecasting models",
      "Automatic detection of abnormal database entries",
      "Personalized product recommendation algorithms",
      "Automated classification of customer support requests"
    ],
    process: [
      "Data Cleansing: Structuring, cleaning, and labeling datasets.",
      "Model Training: Selecting algorithms (scikit-learn, PyTorch) and training.",
      "Evaluation: Checking model accuracy and false-positive rates.",
      "API Integration: Deploying the model behind a secure API."
    ],
    technologies: ["Python", "PyTorch", "scikit-learn", "Pandas", "FastAPI", "Jupyter"],
    industriesServed: ["Textiles", "Manufacturing", "Finance", "Retail"],
    deliverables: [
      "Trained machine learning model files (.pkl / .onnx)",
      "Data preprocessing and cleansing pipelines",
      "Model evaluation reports and metrics",
      "High-speed inference API services"
    ],
    accentColor: "#b8c3ff",
    faqs: [
      {
        question: "How much data do we need to train a model?",
        answer: "While deep learning needs millions of records, standard forecasting and classification models can run accurately on a few thousand clean rows."
      },
      {
        question: "Can we run the model locally?",
        answer: "Yes, we package models inside light Docker containers that can run locally on your servers or in any cloud hosting."
      }
    ]
  },
  {
    slug: "computer-vision",
    title: "Computer Vision Solutions | Kibozera",
    metaTitle: "Computer Vision Solutions India — Quality Control & Object Tracking",
    metaDescription: "Automate visual inspections, defect detection, and OCR with custom computer vision models. Based in Tiruppur — serving factories worldwide.",
    h1: "Computer Vision Solutions",
    badge: "Visual Inspection",
    tagline: "Automate quality control and defect checking with visual AI pipelines.",
    description: "We build custom computer vision models to automate fabric defect detection, check products on assembly lines, track objects in warehouse cams, and read invoice fields. Ideal for textile mills and production lines.",
    benefits: [
      "100% automated quality check (QA) at production speed",
      "Immediate alert triggering on visual defect detection",
      "Elimination of human error in visual checks",
      "Structured data outputs from raw image/video inputs"
    ],
    process: [
      "Image Gathering: Capturing raw product/fabric pictures.",
      "Labeling Data: Drawing boxes around defects (dataset labeling).",
      "Model Training: Training YOLO or PyTorch vision models.",
      "Hardware Integration: Connecting camera streams to the server."
    ],
    technologies: ["OpenCV", "YOLO", "Python", "PyTorch", "FastAPI", "Docker"],
    industriesServed: ["Textiles", "Manufacturing", "Logistics", "Retail"],
    deliverables: [
      "Fine-tuned custom vision model weights",
      "Real-time video processing pipeline scripts",
      "Structured output API endpoints",
      "Integrations with alert lights or buzzers"
    ],
    accentColor: "#d0bcff",
    faqs: [
      {
        question: "What is YOLO?",
        answer: "YOLO (You Only Look Once) is a leading real-time object detection model that detects objects and defects in camera feeds instantly."
      },
      {
        question: "Can computer vision work in low light?",
        answer: "Yes. We configure specialized image preprocessing (contrast filters) and train models on low-light datasets to handle factory floors."
      }
    ]
  },
  {
    slug: "data-analytics",
    title: "Data Analytics & BI | Kibozera",
    metaTitle: "Data Analytics & Business Intelligence India | Kibozera",
    metaDescription: "Transform raw databases into interactive KPI dashboards. Custom business intelligence solutions. Get a data analysis proposal.",
    h1: "Data Analytics & BI",
    badge: "Metric Dashboard",
    tagline: "Visualize operational data and make choices using dynamic dashboards.",
    description: "We help companies aggregate data from database systems, spreadsheets, and CRMs. We build clean data pipelines and design interactive dashboards that show revenue growth, production bottlenecks, and logistics efficiency.",
    benefits: [
      "Consolidated overview of all company databases",
      "Interactive filtering by dates, regions, and products",
      "Automated daily email reports sent directly to management",
      "Identification of hidden operational costs"
    ],
    process: [
      "Data Extraction: Connecting pipelines to databases & APIs.",
      "ETL Processing: Cleaning, formatting, and joining datasets.",
      "Dashboard Layout: Designing clean charts and diagrams.",
      "Launch: Hosting the interactive dashboard securely."
    ],
    technologies: ["Python", "Pandas", "PostgreSQL", "Next.js", "Redis", "Metabase"],
    industriesServed: ["Retail", "Logistics", "Textiles", "Finance"],
    deliverables: [
      "Automated database extraction pipelines (ETL)",
      "Secure, interactive analytics dashboards",
      "Custom PDF report generators",
      "Scheduled email report services"
    ],
    accentColor: "#ffb59b",
    faqs: [
      {
        question: "Can we connect our spreadsheets directly to the dashboard?",
        answer: "Yes. We build sync connections that update charts automatically when changes are saved in Google Sheets or Excel files."
      },
      {
        question: "Do we need an expensive BI subscription?",
        answer: "No. We deploy open-source BI dashboards (like Metabase) or build custom Next.js charts so you pay zero licensing fees."
      }
    ]
  },
  {
    slug: "rag-development",
    title: "RAG System Development | Kibozera",
    metaTitle: "Enterprise RAG System Development India — LLM Vector Search",
    metaDescription: "Build custom Retrieval-Augmented Generation (RAG) platforms. Connect LLMs to internal wiki docs, contracts, and PDFs securely. Learn more.",
    h1: "RAG System Development",
    badge: "Semantic Search",
    tagline: "Connect Large Language Models securely to your internal business databases.",
    description: "Kibozera designs Retrieval-Augmented Generation (RAG) platforms. We index your company wiki files, NDAs, and customer support databases, allowing staff or users to retrieve answers via semantic search queries without LLM hallucination.",
    benefits: [
      "AI responses derived entirely from verified company documentation",
      "Instant lookup of details inside thousands of PDFs",
      "Enhanced data privacy: records stay within private clouds",
      "Sub-second semantic search responses"
    ],
    process: [
      "Ingestion Setup: Scraping wikis, PDFs, and folders.",
      "Text Chunking: Splitting documents and generating vector data.",
      "Vector Indexing: Saving embedding data into Pinecone or pgvector.",
      "LLM Wiring: Connecting search query matches to GPT-4 context."
    ],
    technologies: ["LangChain", "Pinecone", "Python", "FastAPI", "OpenAI Embeddings", "pgvector"],
    industriesServed: ["Healthcare", "Finance", "Education", "Manufacturing"],
    deliverables: [
      "Custom document ingestion & chunking microservice",
      "Configured vector database tables",
      "Search user interface and web application",
      "Semantic search API endpoints"
    ],
    accentColor: "#b8c3ff",
    faqs: [
      {
        question: "What is RAG?",
        answer: "Retrieval-Augmented Generation (RAG) is a technique that retrieves relevant passages from your database and feeds them to an LLM to answer prompts accurately based on your data."
      },
      {
        question: "Is our database uploaded to OpenAI?",
        answer: "No. We can set up local open-source embedding models and local LLMs (like Llama 3) so that your data never leaves your secure server."
      }
    ]
  },
  {
    slug: "llm-integration",
    title: "Enterprise LLM Integration | Kibozera",
    metaTitle: "Enterprise LLM Integration Services India | Kibozera",
    metaDescription: "Integrate GPT-4, Claude 3.5, and open-source LLMs into your systems. Automate email drafting, coding, and translation. Speak to an expert.",
    h1: "Enterprise LLM Integration",
    badge: "Model Fine-Tuning",
    tagline: "Incorporate advanced linguistic models into your workflow systems.",
    description: "We integrate Large Language Models (LLMs) like GPT-4, Claude, and Gemini into corporate platforms. We automate text extraction, code translation, automated document summarizing, and email response drafting.",
    benefits: [
      "Automated summary generation of contracts and reports",
      "High-accuracy multilingual translation in real-time",
      "AI-driven classification of email and form responses",
      "Custom fine-tuned models matching company communication tone"
    ],
    process: [
      "Use Case Audit: Finding areas suited for language models.",
      "Model Selection: Choosing GPT-4, Claude, or a local open-source model.",
      "Prompt Optimization: Coding system contexts and output schemas.",
      "Deployment: Hooking the model into webforms, databases, or CRMs."
    ],
    technologies: ["OpenAI API", "Anthropic API", "Gemini API", "Python", "LangChain", "FastAPI"],
    industriesServed: ["Retail", "Education", "Finance", "Healthcare"],
    deliverables: [
      "LLM middleware service and API endpoint code",
      "Optimized prompt template configurations",
      "Fine-tuning script models (if required)",
      "Usage monitoring and token budget dashboards"
    ],
    accentColor: "#d0bcff",
    faqs: [
      {
        question: "Can we use Claude 3.5 instead of GPT-4?",
        answer: "Yes. We support all major LLM APIs and set up multi-model structures so your app can switch models based on speed or quality needs."
      },
      {
        question: "How do you control LLM API costs?",
        answer: "We optimize prompts, implement token count limits, cache repetitive requests using Redis, and deploy local open-source models where possible."
      }
    ]
  },
  {
    slug: "ocr-solutions",
    title: "AI OCR Solutions | Kibozera",
    metaTitle: "Automated OCR & Document Processing India | Kibozera",
    metaDescription: "Extract text and tables from invoices, bank statements, and shipping bills automatically. High-accuracy AI OCR. Learn more.",
    h1: "AI OCR Solutions",
    badge: "Document Parsing",
    tagline: "Extract structured data from scanned invoices, receipts, and PDFs.",
    description: "Kibozera builds AI-powered Optical Character Recognition (OCR) systems. We parse scanned sheets, invoices, custom receipts, and cargo manifests, converting raw images into clean JSON files for ERP databases.",
    benefits: [
      "Elimination of manual invoice data entry",
      "Instant parsing of multi-page bank statements",
      "High-accuracy extraction of tabular database charts from PDFs",
      "Automated document classification and sorting"
    ],
    process: [
      "Sample Gathering: Collecting sample PDFs and scanned images.",
      "Layout Mapping: Defining critical fields (date, totals, items).",
      "OCR Training: Configuring layouts using PaddleOCR or Tesseract.",
      "ERP Wiring: Syncing parsed data fields with database rows."
    ],
    technologies: ["PaddleOCR", "Python", "Tesseract OCR", "OpenCV", "n8n", "FastAPI"],
    industriesServed: ["Logistics", "Finance", "Manufacturing", "Textiles"],
    deliverables: [
      "Custom OCR document parser microservice",
      "Structured JSON mapping formats",
      "Automated email document intake endpoints",
      "ERP data import integrations"
    ],
    accentColor: "#ffb59b",
    faqs: [
      {
        question: "Can the OCR read handwriting?",
        answer: "Standard OCR is optimized for printed text, but we integrate specialized AI layout models to extract handwritten text."
      },
      {
        question: "How do you handle parsing errors?",
        answer: "We configure validation scripts (e.g. check if column subtotals match the total). If data is flagged, the bot alerts a manager for review."
      }
    ]
  },
  {
    slug: "saas-development",
    title: "SaaS Product Development | Kibozera",
    metaTitle: "SaaS Product Development Company India — Next.js & Node",
    metaDescription: "Build and scale custom SaaS platforms. Custom subscription billing, multi-tenant databases, and dashboard UI. Speak to our developers.",
    h1: "SaaS Product Development",
    badge: "Product Delivery",
    tagline: "Build, launch, and scale modern subscription-based software systems.",
    description: "We develop multi-tenant SaaS products from scratch. We write high-scale backends, integrate subscription payments (Stripe/Razorpay), design administrative dashboards, and implement multi-tenant database partitioning.",
    benefits: [
      "Highly secure multi-tenant database separation",
      "Seamless Razorpay/Stripe subscription integration",
      "Modern, fast UI dashboards built with React/Next.js",
      "Scalable infrastructure designed for millions of user requests"
    ],
    process: [
      "Product Strategy: Designing user roles, plans, and database lines.",
      "Backend Architecture: Building multi-tenant databases (PostgreSQL).",
      "Frontend Design: Coding responsive dashboard widgets.",
      "Deployment: Setting up hosting environments with monitoring."
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe/Razorpay", "Docker", "AWS"],
    industriesServed: ["Retail", "Logistics", "Education", "Finance"],
    deliverables: [
      "Scalable multi-tenant SaaS codebase",
      "Configured payment gateway integrations",
      "User role authorization systems (RBAC)",
      "Cloud monitoring and load balancer setups"
    ],
    accentColor: "#b8c3ff",
    faqs: [
      {
        question: "Do you integrate Indian payment gateways?",
        answer: "Yes, we integrate Razorpay and PayU for automated Indian cards and UPI subscriptions, alongside Stripe for global billing."
      },
      {
        question: "How do you ensure user data separation?",
        answer: "We use database row-level security (RLS) or partition databases into separate schemas to ensure absolute security between tenants."
      }
    ]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX & Web Design | Kibozera",
    metaTitle: "UI/UX & Web Design Company India — Modern Interfaces",
    metaDescription: "Figma wireframes, design systems, and responsive web app layouts. Elegant glassmorphism and modern visual interfaces. Get a design draft.",
    h1: "UI/UX & Web Design",
    badge: "Interface Mastery",
    tagline: "Elevate your brand with clean, high-conversion visual design frameworks.",
    description: "We craft visual interfaces, Figma mockups, and corporate design systems. We combine glassmorphism design tokens, clean typography, and interactive micro-animations to deliver beautiful, premium web presentations.",
    benefits: [
      "Modern brand presentation that builds customer trust",
      "Highly optimized user layouts that increase form conversions",
      "Figma link access to modify and test layouts",
      "Systematic color and font definitions for developer hand-off"
    ],
    process: [
      "Wireframing: Sketching layout mockups and navigation plans.",
      "Visual Design: Developing high-fidelity pages in Figma.",
      "Micro-interactions: Defining hover animations and transitions.",
      "Hand-off: Packaging design tokens for Next.js CSS styling."
    ],
    technologies: ["Figma", "CSS Variables", "Tailwind CSS", "Framer Motion", "Google Fonts"],
    industriesServed: ["Retail", "Hospitality", "Education", "Finance"],
    deliverables: [
      "Complete high-fidelity Figma file assets",
      "Responsive web page layout mockups",
      "Tailwind/CSS color variables and configuration tokens",
      "Custom SVG graphics and icon sets"
    ],
    accentColor: "#d0bcff",
    faqs: [
      {
        question: "Do you build the designs you sketch?",
        answer: "Yes. Our team handles both design and development, meaning your final web application will match the Figma files perfectly."
      },
      {
        question: "What is Figma?",
        answer: "Figma is the industry-standard collaborative design platform. We share live links so you can leave comments on layouts in real-time."
      }
    ]
  }
];
