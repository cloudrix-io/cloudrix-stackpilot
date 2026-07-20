"use client";

import Link from "next/link";
import { Layers, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("stackpilot-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("stackpilot-theme", next ? "dark" : "light");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-lg">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Layers className="h-4.5 w-4.5" />
          </div>
          <span className="text-gray-900 dark:text-white">StackPilot</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/blog"
            className="hidden text-sm text-gray-500 transition hover:text-gray-900 sm:block dark:text-gray-400 dark:hover:text-white"
          >
            Blog
          </Link>
          <a
            href="https://cloudrix.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm text-gray-500 transition hover:text-gray-900 sm:block dark:text-gray-400 dark:hover:text-white"
          >
            by Cloudrix
          </a>
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>
          <Link
            href="/quiz"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </header>
  );
}
