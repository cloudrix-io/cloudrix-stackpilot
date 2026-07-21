import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for StackPilot by Cloudrix.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-12">Last updated: July 2026</p>

        <div className="prose prose-gray max-w-none">
          <h2>1. Who We Are</h2>
          <p>StackPilot is operated by Cloudrix, registered in Tilburg, Netherlands (KVK: 97732699). Contact: contact@cloudrix.io.</p>

          <h2>2. Data We Collect</h2>
          <p>We collect: account information (name, email), usage data, payment information (processed by Stripe — we never store card details), and cookies for analytics.</p>

          <h2>3. How We Use Your Data</h2>
          <p>To provide the service, process payments, send transactional emails, improve the product, and comply with legal obligations.</p>

          <h2>4. Payment Processing</h2>
          <p>Payments are processed by <strong>Stripe</strong> (PCI DSS Level 1 certified). We never see or store your credit card details. See <a href="https://stripe.com/privacy" target="_blank" rel="noopener">Stripe&apos;s privacy policy</a>.</p>

          <h2>5. Cookies &amp; Analytics</h2>
          <p>We use Google Analytics (GA4) and Vercel Analytics to understand usage patterns. These use cookies. You can opt out via your browser settings.</p>

          <h2>6. Data Retention</h2>
          <p>Account data is retained while your account is active. After deletion, data is removed within 30 days. Backups are purged within 90 days.</p>

          <h2>7. Your Rights (GDPR)</h2>
          <p>If you are in the EU/EEA, you have the right to: access your data, rectify inaccuracies, request deletion, restrict processing, data portability, and object to processing. Contact contact@cloudrix.io to exercise these rights.</p>

          <h2>8. Third-Party Services</h2>
          <p>We use: Stripe (payments), MongoDB Atlas (database), Resend (email), Vercel (hosting), Google Analytics (analytics).</p>

          <h2>9. Security</h2>
          <p>We use encryption in transit (TLS), encryption at rest, and follow security best practices. We conduct regular security reviews.</p>

          <h2>10. Changes</h2>
          <p>We may update this policy. Material changes will be communicated via email or in-app notification.</p>

          <h2>11. Contact</h2>
          <p>Questions? Email <a href="mailto:contact@cloudrix.io">contact@cloudrix.io</a> or write to Cloudrix, Tilburg, Netherlands.</p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex gap-6 text-sm text-gray-500">
          <Link href="/terms" className="hover:text-gray-900">Terms of Service</Link>
          <Link href="/refunds" className="hover:text-gray-900">Refund Policy</Link>
          <Link href="/" className="hover:text-gray-900">Back to StackPilot</Link>
        </div>
      </div>
    </div>
  );
}
