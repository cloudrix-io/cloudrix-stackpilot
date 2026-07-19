"use client";

import { questions } from "@/data/questions";
import { Check } from "lucide-react";

type ProgressBarProps = {
  currentStep: number;
};

export function ProgressBar({ currentStep }: ProgressBarProps) {
  const total = questions.length;

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-gray-700 dark:text-gray-300">
          Question {currentStep + 1} of {total}
        </span>
        <span className="text-gray-500 dark:text-gray-400">
          {Math.round(((currentStep + 1) / total) * 100)}%
        </span>
      </div>
      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className="relative h-2 flex-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"
          >
            <div
              className={`absolute inset-0 rounded-full transition-all duration-500 ${
                i < currentStep
                  ? "bg-blue-600"
                  : i === currentStep
                    ? "bg-blue-600"
                    : "bg-transparent"
              }`}
              style={{
                transform: i <= currentStep ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
              }}
            />
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-between">
        {questions.map((q, i) => (
          <div key={q.id} className="flex items-center gap-1">
            <div
              className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium transition-all ${
                i < currentStep
                  ? "bg-blue-600 text-white"
                  : i === currentStep
                    ? "bg-blue-100 text-blue-700 ring-2 ring-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                    : "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500"
              }`}
            >
              {i < currentStep ? (
                <Check className="h-3.5 w-3.5" />
              ) : (
                i + 1
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
