export type QuestionOption = {
  id: string;
  label: string;
  description: string;
  icon: string;
};

export type Question = {
  id: string;
  title: string;
  subtitle: string;
  options: QuestionOption[];
};

export const questions: Question[] = [
  {
    id: "project",
    title: "What are you building?",
    subtitle: "Select the type of project that best matches your goals",
    options: [
      {
        id: "saas",
        label: "SaaS Product",
        description: "Subscription-based web application",
        icon: "Cloud",
      },
      {
        id: "mobile",
        label: "Mobile App",
        description: "iOS and/or Android native app",
        icon: "Smartphone",
      },
      {
        id: "ecommerce",
        label: "E-commerce",
        description: "Online store with payments",
        icon: "ShoppingCart",
      },
      {
        id: "data",
        label: "Data Platform",
        description: "Analytics, dashboards, or data pipelines",
        icon: "BarChart3",
      },
      {
        id: "ai",
        label: "AI Product",
        description: "AI/ML-powered application",
        icon: "Brain",
      },
      {
        id: "internal",
        label: "Internal Tool",
        description: "Company-internal dashboards or tools",
        icon: "Settings",
      },
      {
        id: "api",
        label: "API / Backend",
        description: "REST or GraphQL backend service",
        icon: "Server",
      },
      {
        id: "marketing",
        label: "Marketing Website",
        description: "Content-driven marketing or landing pages",
        icon: "Globe",
      },
    ],
  },
  {
    id: "scale",
    title: "Expected scale?",
    subtitle: "How many users do you anticipate in the first year?",
    options: [
      {
        id: "mvp",
        label: "MVP / Prototype",
        description: "Less than 1,000 users",
        icon: "Rocket",
      },
      {
        id: "growth",
        label: "Growth Stage",
        description: "1,000 - 100,000 users",
        icon: "TrendingUp",
      },
      {
        id: "scale",
        label: "Scale",
        description: "100,000 - 1,000,000 users",
        icon: "Layers",
      },
      {
        id: "enterprise",
        label: "Enterprise",
        description: "1,000,000+ users",
        icon: "Building2",
      },
    ],
  },
  {
    id: "experience",
    title: "Team experience?",
    subtitle: "What languages and frameworks is your team most comfortable with?",
    options: [
      {
        id: "javascript",
        label: "JavaScript / TypeScript",
        description: "React, Node.js, Next.js ecosystem",
        icon: "FileCode",
      },
      {
        id: "python",
        label: "Python",
        description: "Django, FastAPI, Flask ecosystem",
        icon: "Terminal",
      },
      {
        id: "java",
        label: "Java / Kotlin",
        description: "Spring Boot, Android ecosystem",
        icon: "Coffee",
      },
      {
        id: "go",
        label: "Go",
        description: "High-performance systems programming",
        icon: "Zap",
      },
      {
        id: "ruby",
        label: "Ruby",
        description: "Rails ecosystem",
        icon: "Gem",
      },
      {
        id: "dotnet",
        label: ".NET / C#",
        description: "Microsoft ecosystem",
        icon: "Monitor",
      },
      {
        id: "php",
        label: "PHP",
        description: "Laravel, WordPress ecosystem",
        icon: "Code",
      },
      {
        id: "new",
        label: "New to Coding",
        description: "Just getting started",
        icon: "GraduationCap",
      },
    ],
  },
  {
    id: "timeline",
    title: "What's your timeline?",
    subtitle: "How quickly do you need to launch?",
    options: [
      {
        id: "asap",
        label: "ASAP",
        description: "Less than 4 weeks",
        icon: "Timer",
      },
      {
        id: "normal",
        label: "Normal",
        description: "1 - 3 months",
        icon: "Calendar",
      },
      {
        id: "planned",
        label: "Planned",
        description: "3 - 6 months",
        icon: "CalendarDays",
      },
      {
        id: "no-rush",
        label: "No Rush",
        description: "6+ months",
        icon: "Clock",
      },
    ],
  },
  {
    id: "priority",
    title: "Key priority?",
    subtitle: "What matters most to your project's success?",
    options: [
      {
        id: "speed",
        label: "Speed to Market",
        description: "Launch fast and iterate",
        icon: "Rocket",
      },
      {
        id: "scalability",
        label: "Scalability",
        description: "Handle massive growth",
        icon: "TrendingUp",
      },
      {
        id: "dx",
        label: "Developer Experience",
        description: "Great tooling and productivity",
        icon: "Sparkles",
      },
      {
        id: "cost",
        label: "Cost Efficiency",
        description: "Minimize infrastructure spend",
        icon: "DollarSign",
      },
      {
        id: "enterprise",
        label: "Enterprise Features",
        description: "SSO, audit logs, compliance",
        icon: "Shield",
      },
      {
        id: "ai-ml",
        label: "AI/ML Capabilities",
        description: "Machine learning and AI integration",
        icon: "Brain",
      },
    ],
  },
];
