"use client";

import type { TechStack } from "@/data/stacks";
import {
  Check,
  X,
  Star,
  DollarSign,
  Clock,
  Shield,
  Zap,
  Users,
  Trophy,
} from "lucide-react";

type StackCardProps = {
  stack: TechStack;
  rank: number;
  score: number;
  maxScore: number;
};

function RatingBar({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          className={`h-2 w-5 rounded-full ${
            i < value
              ? "bg-blue-600 dark:bg-blue-500"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
        />
      ))}
    </div>
  );
}

export function StackCard({ stack, rank, score, maxScore }: StackCardProps) {
  const matchPercent = Math.round((score / maxScore) * 100);

  return (
    <div
      className={`overflow-hidden rounded-2xl border-2 transition-all ${
        rank === 1
          ? "border-blue-600 shadow-xl shadow-blue-600/10 dark:border-blue-500"
          : "border-gray-200 dark:border-gray-700"
      }`}
    >
      {/* Header */}
      <div
        className={`px-6 py-5 ${
          rank === 1
            ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
            : "bg-gray-50 dark:bg-gray-900"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              {rank === 1 && <Trophy className="h-5 w-5 text-yellow-300" />}
              <span
                className={`text-xs font-semibold uppercase tracking-wider ${
                  rank === 1
                    ? "text-blue-200"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {rank === 1
                  ? "Best Match"
                  : `Alternative #${rank - 1}`}
              </span>
            </div>
            <h3
              className={`mt-1 text-lg font-bold ${
                rank === 1 ? "text-white" : "text-gray-900 dark:text-white"
              }`}
            >
              {stack.name}
            </h3>
            <p
              className={`mt-1 text-sm ${
                rank === 1
                  ? "text-blue-100"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {stack.tagline}
            </p>
          </div>
          <div
            className={`flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl ${
              rank === 1
                ? "bg-white/20 text-white"
                : "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
            }`}
          >
            <span className="text-lg font-bold leading-none">{matchPercent}%</span>
            <span className="text-[10px] opacity-70">match</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white px-6 py-5 dark:bg-gray-900/50">
        {/* Tech stack pills */}
        <div className="mb-5">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {stack.technologies.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                {tech.name}
                {tech.version !== "-" && (
                  <span className="text-gray-400 dark:text-gray-500">
                    v{tech.version}
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Ratings grid */}
        <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div>
            <div className="mb-1 flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <Zap className="h-3 w-3" /> Scalability
            </div>
            <RatingBar value={stack.scalabilityRating} />
          </div>
          <div>
            <div className="mb-1 flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <Clock className="h-3 w-3" /> Time to MVP
            </div>
            <RatingBar value={stack.timeToMvpRating} />
          </div>
          <div>
            <div className="mb-1 flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <Star className="h-3 w-3" /> Dev Experience
            </div>
            <RatingBar value={stack.dxRating} />
          </div>
          <div>
            <div className="mb-1 flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <DollarSign className="h-3 w-3" /> Cost Efficiency
            </div>
            <RatingBar value={stack.costRating} />
          </div>
          <div>
            <div className="mb-1 flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <Shield className="h-3 w-3" /> Enterprise
            </div>
            <RatingBar value={stack.enterpriseRating} />
          </div>
          <div>
            <div className="mb-1 flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <DollarSign className="h-3 w-3" /> Est. Cost
            </div>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              {stack.monthlyCost}
            </span>
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
              Pros
            </h4>
            <ul className="space-y-1.5">
              {stack.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">
              Cons
            </h4>
            <ul className="space-y-1.5">
              {stack.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-400" />
                  <span className="text-gray-700 dark:text-gray-300">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Best for & Skills */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Best For
            </h4>
            <ul className="space-y-1">
              {stack.bestFor.map((use, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  {use}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
              <Users className="mr-1 inline h-3 w-3" />
              Team Skills Needed
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {stack.teamSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
