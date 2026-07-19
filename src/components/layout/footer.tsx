import { Layers } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Layers className="h-4 w-4" />
            </div>
            <span className="font-semibold text-gray-900 dark:text-white">
              StackPilot
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <Link
              href="/"
              className="transition hover:text-gray-900 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/quiz"
              className="transition hover:text-gray-900 dark:hover:text-white"
            >
              Take Quiz
            </Link>
            <a
              href="https://cloudrix.io"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-gray-900 dark:hover:text-white"
            >
              Cloudrix
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-400 dark:border-gray-800 dark:text-gray-500">
          <p>
            Built by{" "}
            <a
              href="https://cloudrix.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 transition hover:text-blue-700 dark:text-blue-400"
            >
              Cloudrix
            </a>
            . Free forever. No login required.
          </p>
        </div>
      </div>
    </footer>
  );
}
