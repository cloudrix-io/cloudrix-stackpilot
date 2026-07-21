import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  if (!stripe) return NextResponse.json({ error: "Not configured" }, { status: 503 });
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");
  if (!signature) return NextResponse.json({ error: "No signature" }, { status: 400 });
  try {
    const event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!);
    switch (event.type) {
      case "checkout.session.completed":
        console.log("Payment completed:", (event.data.object as Stripe.Checkout.Session).customer_email);
        break;
      case "customer.subscription.deleted":
        console.log("Subscription canceled");
        break;
    }
    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json({ error: "Webhook failed" }, { status: 400 });
  }
}
