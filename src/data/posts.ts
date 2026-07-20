export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  category: string;
  keyword: string;
}

export const posts: BlogPost[] = [
  {
    slug: "best-tech-stack-for-saas-2026",
    title: "Best Tech Stack for SaaS in 2026 — A Data-Driven Guide",
    date: "2026-06-25",
    excerpt:
      "Compare Next.js + Supabase, NestJS + PostgreSQL, and Django + PostgreSQL for SaaS. Pros, cons, real examples, and a decision framework to pick the right one.",
    readTime: "8 min read",
    category: "Tech Stacks",
    keyword: "best tech stack for SaaS",
  },
  {
    slug: "nextjs-vs-nestjs-which-to-choose",
    title: "Next.js vs NestJS: Which Framework Should You Choose in 2026?",
    date: "2026-06-22",
    excerpt:
      "A deep comparison of Next.js and NestJS covering architecture, use cases, performance, ecosystem, and hiring. When to use each and when to combine them.",
    readTime: "9 min read",
    category: "Framework Comparison",
    keyword: "Next.js vs NestJS",
  },
  {
    slug: "how-to-choose-tech-stack-startup",
    title: "How to Choose a Tech Stack for Your Startup (Without Regret)",
    date: "2026-06-18",
    excerpt:
      "A practical decision framework for startup founders and CTOs. Avoid the most common mistakes, balance team skills vs tech hype, and know when to switch.",
    readTime: "8 min read",
    category: "Strategy",
    keyword: "how to choose tech stack startup",
  },
  {
    slug: "react-native-vs-flutter-2026",
    title: "React Native vs Flutter in 2026: The Definitive Comparison",
    date: "2026-06-14",
    excerpt:
      "Performance benchmarks, developer experience, ecosystem maturity, hiring pools, and real company case studies. Which cross-platform framework wins in 2026?",
    readTime: "9 min read",
    category: "Mobile Development",
    keyword: "React Native vs Flutter 2026",
  },
  {
    slug: "full-stack-javascript-vs-python",
    title:
      "Full-Stack JavaScript vs Python: Which Path for Your Next Project?",
    date: "2026-06-10",
    excerpt:
      "Node.js/Next.js vs Django/FastAPI — when each shines, team composition trade-offs, performance characteristics, and which ecosystem is growing faster.",
    readTime: "8 min read",
    category: "Language Comparison",
    keyword: "JavaScript vs Python full stack",
  },
];
