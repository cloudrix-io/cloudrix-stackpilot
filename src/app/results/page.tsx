"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  paramsToAnswers,
  getRecommendations,
} from "@/lib/recommendation-engine";
import { StackCard } from "@/components/results/stack-card";
import { RadarChart } from "@/components/results/radar-chart";
import { ComparisonTable } from "@/components/results/comparison-table";
import { getShareUrl } from "@/lib/utils";
import {
  Share2,
  RotateCcw,
  Check,
  ArrowRight,
  Mail,
} from "lucide-react";

function ResultsContent() {
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // Parse answers from URL
  const params: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  const answers = paramsToAnswers(params);

  if (!answers) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          No Results Found
        </h2>
        <p className="mb-8 text-gray-500 dark:text-gray-400">
          It looks like you haven&apos;t taken the quiz yet. Answer 5 quick
          questions to get your personalized tech stack recommendation.
        </p>
        <Link
          href="/quiz"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Take the Quiz
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  const result = getRecommendations(answers);
  const top3Stacks = [result.primary, ...result.alternatives];
  const top3Scores = result.scores.slice(0, 3);
  const maxScore = top3Scores[0].score;

  const handleShare = async () => {
    const url = getShareUrl(searchParams.toString());
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Store in localStorage
    const stored = JSON.parse(
      localStorage.getItem("stackpilot-leads") || "[]"
    );
    stored.push({
      email,
      answers,
      topStack: result.primary.name,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("stackpilot-leads", JSON.stringify(stored));
    setEmailSubmitted(true);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Your Results
        </p>
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
          We Found Your Perfect Stack
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-gray-500 dark:text-gray-400">
          Based on your answers, here are the top 3 tech stacks ranked by
          compatibility with your project.
        </p>
      </div>

      {/* Action buttons */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-500" />
              Copied!
            </>
          ) : (
            <>
              <Share2 className="h-4 w-4" />
              Share Results
            </>
          )}
        </button>
        <Link
          href="/quiz"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          <RotateCcw className="h-4 w-4" />
          Start Over
        </Link>
      </div>

      {/* Primary recommendation */}
      <div className="mb-8">
        <StackCard
          stack={result.primary}
          rank={1}
          score={top3Scores[0].score}
          maxScore={maxScore}
        />
      </div>

      {/* Radar chart */}
      <div className="mb-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="mb-6 text-center text-xl font-bold text-gray-900 dark:text-white">
          Stack Comparison
        </h2>
        <RadarChart stacks={top3Stacks} />
      </div>

      {/* Alternative recommendations */}
      <div className="mb-12 grid gap-6 sm:grid-cols-2">
        {result.alternatives.map((stack, i) => (
          <StackCard
            key={stack.id}
            stack={stack}
            rank={i + 2}
            score={top3Scores[i + 1].score}
            maxScore={maxScore}
          />
        ))}
      </div>

      {/* Comparison table */}
      <div className="mb-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
          Side-by-Side Comparison
        </h2>
        <ComparisonTable stacks={top3Stacks} />
      </div>

      {/* Email capture */}
      <div className="mb-12 rounded-2xl bg-gray-50 p-6 sm:p-8 dark:bg-gray-900">
        {emailSubmitted ? (
          <div className="text-center">
            <Check className="mx-auto mb-3 h-10 w-10 text-green-500" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Saved!
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Your results have been saved locally. Thank you!
            </p>
          </div>
        ) : (
          <div className="text-center">
            <Mail className="mx-auto mb-3 h-8 w-8 text-blue-600 dark:text-blue-400" />
            <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
              Get a Detailed Report
            </h3>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              Enter your email to save your results and receive implementation
              tips.
            </p>
            <form
              onSubmit={handleEmailSubmit}
              className="mx-auto flex max-w-md gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
              />
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Save
              </button>
            </form>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-center text-white sm:p-12">
        <h2 className="text-2xl font-bold">Need Help Implementing?</h2>
        <p className="mx-auto mt-3 max-w-md text-blue-100">
          Our engineers have built production systems with every stack we
          recommend. Let us help you get started right.
        </p>
        <a
          href="https://cloudrix.io/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
        >
          Talk to Our Engineers
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <Suspense
          fallback={
            <div className="flex min-h-[60vh] items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
                <p className="text-gray-500 dark:text-gray-400">
                  Calculating your perfect stack...
                </p>
              </div>
            </div>
          }
        >
          <ResultsContent />
        </Suspense>
      </div>
    </div>
  );
}
