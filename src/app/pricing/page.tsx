import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — StackPilot",
  description:
    "Simple, transparent pricing for StackPilot. Start free, upgrade when you are ready.",
};

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Basic stack recommendations",
    cta: "Start Free",
    featured: false,
    features: [
      "Basic stack recommendations",
      "Community support",
      "Basic analytics",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    description: "Advanced analysis, export reports",
    cta: "Get Started",
    featured: true,
    features: [
      "Everything in Free",
      "Advanced analysis, export reports",
      "Priority support",
      "Advanced analytics",
    ],
  },
  {
    name: "Team",
    price: "$79",
    description: "Team workspace, shared stacks",
    cta: "Get Started",
    featured: false,
    features: [
      "Everything in Pro",
      "Team workspace, shared stacks",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-8 shadow-sm transition-shadow hover:shadow-lg ${
                tier.featured
                  ? "border-indigo-600 ring-2 ring-indigo-600"
                  : "border-gray-200"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{tier.description}</p>

              <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">
                  {tier.price === "$0" ? "Free" : tier.price}
                </span>
                {tier.price !== "$0" && (
                  <span className="ml-1 text-sm text-gray-500">/month</span>
                )}
              </div>

              <Link
                href={tier.price === "$0" ? "/register" : "/register"}
                className={`mt-8 block w-full rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                  tier.featured
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {tier.cta}
              </Link>

              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 border-t border-gray-100 pt-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Secure payments by Stripe
                </p>
                <p className="text-xs text-gray-500">256-bit SSL encryption</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  14-day money-back guarantee
                </p>
                <p className="text-xs text-gray-500">
                  Full refund, no questions asked
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Cancel anytime
                </p>
                <p className="text-xs text-gray-500">No long-term contracts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-500">
          <Link href="/privacy" className="hover:text-gray-700">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gray-700">
            Terms of Service
          </Link>
          <Link href="/refunds" className="hover:text-gray-700">
            Refund Policy
          </Link>
        </div>
      </main>
    </div>
  );
}
