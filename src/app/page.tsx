import Link from "next/link";
import { stacks } from "@/data/stacks";
import {
  ArrowRight,
  Layers,
  Zap,
  Lock,
  Share2,
  ChevronDown,
} from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Answer 5 Questions",
    description:
      "Tell us about your project type, scale, team experience, timeline, and priorities.",
  },
  {
    number: "2",
    title: "Get Recommendations",
    description:
      "Our scoring engine analyzes 14 tech stacks across 5 dimensions to find your best match.",
  },
  {
    number: "3",
    title: "Compare & Decide",
    description:
      "See a radar chart, comparison table, pros/cons, and costs for your top 3 stacks.",
  },
];

const features = [
  {
    icon: Layers,
    title: "14 Tech Stacks",
    description: "From Next.js + Supabase to Spring Boot + Kubernetes",
  },
  {
    icon: Zap,
    title: "Client-side Only",
    description: "No data leaves your browser. Zero tracking.",
  },
  {
    icon: Lock,
    title: "No Login Required",
    description: "Start immediately. No email, no signup.",
  },
  {
    icon: Share2,
    title: "Shareable Results",
    description: "Get a unique URL to share with your team.",
  },
];

const faqs = [
  {
    q: "How does StackPilot choose the right stack for me?",
    a: "StackPilot uses a weighted scoring matrix that evaluates 14 tech stacks across 5 dimensions: project type, expected scale, team experience, timeline, and key priorities. Each answer adjusts the score for every stack, and the top 3 are presented with detailed comparisons.",
  },
  {
    q: "Is this tool really free?",
    a: "Yes, completely free with no hidden costs. Everything runs in your browser — we don't even have a backend. No login, no email capture required, no tracking cookies.",
  },
  {
    q: "Can I trust the recommendations?",
    a: "The recommendations are based on real-world experience building production applications across these stacks. However, every project is unique — use the results as a starting point, not a final decision. The comparison table helps you weigh trade-offs for your specific situation.",
  },
  {
    q: "What if my team knows multiple languages?",
    a: "Choose the language your team is most productive in today. You can always retake the quiz with different answers to compare how results shift. The shareable URL makes it easy to discuss options with your team.",
  },
  {
    q: "Do you cover mobile and AI stacks too?",
    a: "Yes. StackPilot includes React Native + Expo, Flutter + Firebase for mobile, and a dedicated Next.js + Claude API + Pinecone stack for AI-native products. The quiz adapts based on whether you select mobile, AI, or other project types.",
  },
];

const previewStacks = stacks.slice(0, 6);

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYtNGgtNHYyaC00di0ySDI0djRoMnY0aC0ydjRoNHYtMmg0djJoNHYtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-200">
              Free Tech Stack Advisor
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Find Your Perfect Tech Stack in{" "}
              <span className="text-yellow-300">60 Seconds</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-blue-100">
              Answer 5 quick questions about your project and get personalized
              recommendations from 14 production-tested tech stacks. No signup
              required.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-700 shadow-lg transition hover:bg-blue-50 hover:shadow-xl"
              >
                Start Free Quiz
                <ArrowRight className="h-5 w-5" />
              </Link>
              <span className="text-sm text-blue-200">
                Takes less than 60 seconds
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pb-6 text-blue-300 animate-bounce">
          <ChevronDown className="h-6 w-6" />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              How It Works
            </h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Three simple steps to your ideal tech stack
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Stacks */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Popular Tech Stacks We Analyze
            </h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              From rapid MVPs to enterprise-grade architectures
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {previewStacks.map((stack) => (
              <div
                key={stack.id}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: stack.color }}
                  />
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {stack.name.split(" + ").slice(0, 2).join(" + ")}
                  </h3>
                </div>
                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  {stack.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {stack.technologies.slice(0, 3).map((t) => (
                    <span
                      key={t.name}
                      className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                    >
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            ...and {stacks.length - previewStacks.length} more stacks analyzed
            in the quiz
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-1 font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.q}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold">Ready to Find Your Stack?</h2>
          <p className="mx-auto mt-4 max-w-lg text-blue-100">
            Stop guessing. Answer 5 questions and get a data-driven
            recommendation in under a minute.
          </p>
          <Link
            href="/quiz"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-700 shadow-lg transition hover:bg-blue-50 hover:shadow-xl"
          >
            Start Free Quiz
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
// deploy 1784642818
