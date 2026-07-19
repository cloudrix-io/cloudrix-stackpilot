"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import { QuestionCard } from "@/components/quiz/question-card";
import { ProgressBar } from "@/components/quiz/progress-bar";
import { answersToParams, type Answers } from "@/lib/recommendation-engine";
import { ArrowLeft } from "lucide-react";

export default function QuizPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"enter" | "exit">("enter");

  const currentQuestion = questions[currentStep];

  const handleSelect = useCallback(
    (optionId: string) => {
      if (isAnimating) return;

      const newAnswers = { ...answers, [currentQuestion.id]: optionId };
      setAnswers(newAnswers);

      // Auto-advance after a short delay
      setTimeout(() => {
        if (currentStep < questions.length - 1) {
          setDirection("exit");
          setIsAnimating(true);

          setTimeout(() => {
            setCurrentStep((prev) => prev + 1);
            setDirection("enter");

            setTimeout(() => {
              setIsAnimating(false);
            }, 50);
          }, 300);
        } else {
          // Quiz complete — navigate to results
          const params = answersToParams(newAnswers as Answers);
          router.push(`/results?${params}`);
        }
      }, 400);
    },
    [answers, currentQuestion.id, currentStep, isAnimating, router]
  );

  const handleBack = useCallback(() => {
    if (currentStep === 0 || isAnimating) return;

    setDirection("exit");
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentStep((prev) => prev - 1);
      setDirection("enter");

      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
  }, [currentStep, isAnimating]);

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        {/* Progress */}
        <div className="mb-10">
          <ProgressBar currentStep={currentStep} />
        </div>

        {/* Back button */}
        <div className="mb-6 h-10">
          {currentStep > 0 && (
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
          )}
        </div>

        {/* Question */}
        <QuestionCard
          question={currentQuestion}
          selectedAnswer={answers[currentQuestion.id] ?? null}
          onSelect={handleSelect}
          isAnimating={isAnimating}
          direction={direction}
        />
      </div>
    </div>
  );
}
