import Stripe from "stripe";

export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2026-06-24.dahlia" })
  : null;

export const PLANS = {
  free: { name: "Free", price: 0, priceId: null },
  pro: { name: "Pro", price: 2900, priceId: process.env.STRIPE_PRO_PRICE_ID || "" },
  business: { name: "Business", price: 7900, priceId: process.env.STRIPE_BUSINESS_PRICE_ID || "" },
} as const;

export type PlanKey = keyof typeof PLANS;
