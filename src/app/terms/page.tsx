import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for StackPilot by Cloudrix.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-12">Last updated: July 2026</p>

        <div className="prose prose-gray max-w-none">
          <h2>1. Agreement</h2>
          <p>By using StackPilot (&quot;Service&quot;), you agree to these Terms. The Service is operated by Cloudrix, Tilburg, Netherlands (KVK: 97732699).</p>

          <h2>2. Accounts</h2>
          <p>You must provide accurate information when creating an account. You are responsible for maintaining the security of your account credentials.</p>

          <h2>3. Subscriptions &amp; Payments</h2>
          <p>Paid plans are billed monthly or annually via Stripe. Prices are in USD. Subscriptions auto-renew unless canceled before the renewal date. You can cancel anytime from your account settings.</p>

          <h2>4. Free Tier</h2>
          <p>The free tier is provided as-is with usage limits. We reserve the right to modify free tier limits with 30 days notice.</p>

          <h2>5. Refund Policy</h2>
          <p>We offer a <strong>14-day money-back guarantee</strong> on all paid plans. See our <Link href="/refunds">Refund Policy</Link> for details.</p>

          <h2>6. Acceptable Use</h2>
          <p>You may not: abuse the service, attempt to circumvent usage limits, use automated tools to scrape the service, or resell access without permission.</p>

          <h2>7. Intellectual Property</h2>
          <p>You retain ownership of your data. We retain ownership of the Service, its code, design, and branding. Your subscription grants you a non-exclusive license to use the Service.</p>

          <h2>8. Data &amp; Privacy</h2>
          <p>We handle your data according to our <Link href="/privacy">Privacy Policy</Link>. We comply with GDPR and applicable data protection laws.</p>

          <h2>9. Limitation of Liability</h2>
          <p>The Service is provided &quot;as is&quot;. Cloudrix is not liable for indirect, incidental, or consequential damages. Our total liability is limited to the amount you paid in the 12 months preceding the claim.</p>

          <h2>10. Service Availability</h2>
          <p>We target 99.9% uptime but do not guarantee uninterrupted service. Scheduled maintenance will be communicated in advance.</p>

          <h2>11. Termination</h2>
          <p>Either party may terminate at any time. Upon termination, your data will be available for export for 30 days, then deleted.</p>

          <h2>12. Governing Law</h2>
          <p>These Terms are governed by the laws of <strong>the Netherlands</strong>. Disputes shall be resolved in the courts of the Netherlands. For EU consumers, mandatory consumer protection laws of your country also apply.</p>

          <h2>13. Changes</h2>
          <p>We may update these Terms with 30 days notice. Continued use after changes constitutes acceptance.</p>

          <h2>14. Contact</h2>
          <p>Questions? Email <a href="mailto:contact@cloudrix.io">contact@cloudrix.io</a>.</p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex gap-6 text-sm text-gray-500">
          <Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
          <Link href="/refunds" className="hover:text-gray-900">Refund Policy</Link>
          <Link href="/" className="hover:text-gray-900">Back to StackPilot</Link>
        </div>
      </div>
    </div>
  );
}
