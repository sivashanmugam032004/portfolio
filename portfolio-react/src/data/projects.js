const projects = [
  {
    index: "01 / FINTECH",
    title: "NBFC Banking Loan Application",
    role: "Full Stack Developer",
    stack: ["React", "React Native", "C#", "ASP.NET Core Web API", "EF Core", "JWT", "SQL Server"],
    description: "A loan application platform supporting web and mobile clients, built around secure onboarding, master data, and dependable backend workflows.",
    impact: "Delivered a secure, deployment-ready lending workflow across web and mobile clients.",
    highlights: [
      "Owned the full backend and database design for the loan application platform.",
      "Built REST APIs with ASP.NET Core Web API, EF Core, LINQ, and stored procedures for complex queries and loan calculations.",
      "Implemented JWT authentication and role-based access control, then created master-data-driven React templates from wireframes.",
      "Integrated Surepass Aadhaar, Income Tax PAN, eMudhra digital signature, Razorpay payments, and SMS Integra SMS/OTP.",
      "Deployed the frontend on Netlify, backend on IIS, and production workloads on AWS.",
      "Supported live releases by tracing issues from frontend to database and applying production fixes.",
    ],
    badges: ["React", "React Native", "ASP.NET Core", "EF Core", "JWT", "Stored Procedures", "SQL Server", "Third-party APIs"],
  },
  {
    index: "02 / FEATURED AI PROJECT",
    title: "SANCO AI Assist — Logistics Import & Export Management System",
    role: "Solo Developer — End to End",
    featured: true,
    stack: ["Python", "Streamlit", "LLM", "Generative AI", "Google Gemini API", "SQL Server"],
    description: "An independently designed natural-language-to-SQL assistant that gives logistics teams a conversational way to work with complex operational data.",
    impact: "Enabled non-technical staff to query a 267-table operational database without writing SQL.",
    caseStudy: [
      {
        number: "01",
        label: "Problem",
        text: "Non-technical logistics and CFS operations staff needed to query a complex 267-table operational database but had no SQL knowledge, creating a bottleneck where every report request depended on a developer.",
      },
      {
        number: "02",
        label: "Constraint",
        text: "Sending the full 267-table schema to the LLM on every request would exceed token limits and slow response times, while the schema also needed to stay accurate as the underlying database evolved.",
      },
      {
        number: "03",
        label: "Approach",
        text: "Independently analyzed table structures and relationships across the full schema, then engineered a dynamic schema-context system that selects only relevant tables per question and live-introspects INFORMATION_SCHEMA.COLUMNS to stay in sync with schema changes. Used Google Gemini with carefully engineered prompts to convert natural language into validated SQL, with multi-turn memory, file/voice input, retry logic with exponential backoff, and a custom Claude.ai-style chat interface.",
      },
      {
        number: "04",
        label: "Result",
        text: "Enabled non-technical staff to self-serve operational data queries in plain English, removing the developer bottleneck for routine reporting while maintaining accuracy across a live, evolving 267-table schema.",
      },
    ],
    highlights: [
      "Analyzed table structures and relationships across a 267-table SQL Server database before implementation.",
      "Built a schema introspection pass that mapped table relationships, business fields, and join paths into a dynamic schema-context engine.",
      "Used engineered Google Gemini prompts to convert natural-language questions into validated, read-only SQL in real time.",
      "Added retry and exponential backoff handling for AI service overloads, with fallback schema logic and user-safe error states.",
      "Added multi-turn conversational memory, file and voice input, IP tracking, and secure credential management.",
      "Integrated the Port Setu CFS Gate Detail API for container gate IN/OUT movement data.",
      "Built a custom Claude.ai-style chat interface with Streamlit.",
    ],
    badges: ["Featured Project", "Google Gemini", "Text-to-SQL", "Prompt Engineering", "Streamlit", "SQL Server", "Port Setu API"],
  },
  {
    index: "03 / MANUFACTURING",
    title: "KVM — Manufacturing & Inventory Management System",
    role: "Production Support & Maintenance",
    stack: ["ASP.NET MVC 5", "C#", "LINQ", "Entity Framework", "SQL Server", "Razor", "AJAX", "jQuery"],
    description: "An ongoing seafood-production inventory system where I develop core sales features and provide direct production support.",
    impact: "Kept client operations moving through hands-on training, live fixes, and dependable production support.",
    highlights: [
      "Developed Sales Order, Sales Invoice, and Sales Report modules within the existing production inventory system.",
      "Studied the complete application flow and codebase to take over ongoing support confidently.",
      "Conducted hands-on client-site training and act as the primary support contact for reported issues.",
      "Handle backend fixes and live production data updates to keep operations moving.",
    ],
    badges: ["ASP.NET MVC 5", "C#", "Entity Framework", "SQL Server", "Razor Views", "Production Support"],
  },
];

export default projects;
