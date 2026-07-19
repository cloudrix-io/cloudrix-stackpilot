"use client";

import type { Question } from "@/data/questions";
import {
  Cloud,
  Smartphone,
  ShoppingCart,
  BarChart3,
  Brain,
  Settings,
  Server,
  Globe,
  Rocket,
  TrendingUp,
  Layers,
  Building2,
  FileCode,
  Terminal,
  Coffee,
  Zap,
  Gem,
  Monitor,
  Code,
  GraduationCap,
  Timer,
  Calendar,
  CalendarDays,
  Clock,
  Sparkles,
  DollarSign,
  Shield,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Cloud,
  Smartphone,
  ShoppingCart,
  BarChart3,
  Brain,
  Settings,
  Server,
  Globe,
  Rocket,
  TrendingUp,
  Layers,
  Building2,
  FileCode,
  Terminal,
  Coffee,
  Zap,
  Gem,
  Monitor,
  Code,
  GraduationCap,
  Timer,
  Calendar,
  CalendarDays,
  Clock,
  Sparkles,
  DollarSign,
  Shield,
};

type QuestionCardProps = {
  question: Question;
  selectedAnswer: string | null;
  onSelect: (optionId: string) => void;
  isAnimating: boolean;
  direction: "enter" | "exit";
};

export function QuestionCard({
  question,
  selectedAnswer,
  onSelect,
  isAnimating,
  direction,
}: QuestionCardProps) {
  return (
    <div
      className={`transition-all duration-400 ${
        isAnimating
          ? direction === "exit"
            ? "translate-x-[-100%] opacity-0"
            : "translate-x-[100%] opacity-0"
          : "translate-x-0 opacity-100"
      }`}
    >
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
          {question.title}
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          {question.subtitle}
        </p>
      </div>

      <div
        className={`grid gap-3 ${
          question.options.length > 4
            ? "grid-cols-1 sm:grid-cols-2"
            : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {question.options.map((option, index) => {
          const Icon = iconMap[option.icon];
          const isSelected = selectedAnswer === option.id;

          return (
            <button
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={`group relative flex items-start gap-4 rounded-xl border-2 p-4 text-left transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                isSelected
                  ? "border-blue-600 bg-blue-50 shadow-lg shadow-blue-600/10 dark:border-blue-500 dark:bg-blue-950/30"
                  : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:hover:border-blue-700"
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                  isSelected
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600 dark:bg-gray-800 dark:text-gray-400 dark:group-hover:bg-blue-900/30 dark:group-hover:text-blue-400"
                }`}
              >
                {Icon && <Icon className="h-5 w-5" />}
              </div>
              <div className="min-w-0 flex-1">
                <div
                  className={`font-semibold ${
                    isSelected
                      ? "text-blue-900 dark:text-blue-300"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {option.label}
                </div>
                <div
                  className={`mt-0.5 text-sm ${
                    isSelected
                      ? "text-blue-700 dark:text-blue-400"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {option.description}
                </div>
              </div>
              {isSelected && (
                <div className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
