import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/posts";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — StackPilot | Tech Stack Guides & Comparisons",
  description:
    "In-depth guides, framework comparisons, and decision frameworks to help you choose the right tech stack. Written by engineers, not marketers.",
  openGraph: {
    title: "StackPilot Blog — Tech Stack Guides & Comparisons",
    description:
      "In-depth guides, framework comparisons, and decision frameworks for choosing your tech stack.",
    type: "website",
  },
};

export default function BlogIndex() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Blog
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Tech Stack Guides & Comparisons
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Opinionated guides written by senior engineers. No fluff, no
            sponsored content — just real advice for real decisions.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:hover:border-blue-700 sm:p-8"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  <Tag className="h-3 w-3" />
                  {post.category}
                </span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>

              <Link href={`/blog/${post.slug}`}>
                <h2 className="mb-3 text-xl font-bold text-gray-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 sm:text-2xl">
                  {post.title}
                </h2>
              </Link>

              <p className="mb-4 text-gray-500 dark:text-gray-400">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Read article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-bold">
            Not sure which stack to choose?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-blue-100">
            Take our free 60-second quiz and get a personalized recommendation
            from 14 production-tested stacks.
          </p>
          <Link
            href="/quiz"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-blue-700 shadow-lg transition hover:bg-blue-50"
          >
            Take the Quiz
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
