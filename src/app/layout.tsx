import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StackPilot — Free Tech Stack Advisor | Find Your Perfect Stack",
  description:
    "Answer 5 quick questions and get personalized tech stack recommendations. Compare frameworks, databases, and deployment platforms side by side. Free, no login required.",
  keywords: [
    "tech stack",
    "stack advisor",
    "framework comparison",
    "Next.js",
    "React",
    "Django",
    "Laravel",
    "NestJS",
    "developer tools",
  ],
  openGraph: {
    title: "StackPilot — Find Your Perfect Tech Stack in 60 Seconds",
    description:
      "Answer 5 quick questions and get personalized tech stack recommendations. Free, no login required.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
        <script src="https://analytics.cloudrix.io/sdk.js" data-product="stackpilot" defer />
      <body className="flex min-h-full flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
