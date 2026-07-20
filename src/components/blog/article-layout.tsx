"use client";

import Link from "next/link";
import { useState } from "react";
import { posts, type BlogPost } from "@/data/posts";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Tag,
  Link2,
  Check,
  User,
} from "lucide-react";

interface TocItem {
  id: string;
  title: string;
}

interface ArticleLayoutProps {
  slug: string;
  toc: TocItem[];
  children: React.ReactNode;
}

export function ArticleLayout({ slug, toc, children }: ArticleLayoutProps) {
  const [copied, setCopied] = useState(false);
  const post = posts.find((p) => p.slug === slug)!;

  const relatedPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  function copyUrl() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
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

          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                <User className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Firas Sayah
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Cloudrix
                </p>
              </div>
            </div>
            <button
              onClick={copyUrl}
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-500 transition hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-white"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-green-500" />
                  Copied
                </>
              ) : (
                <>
                  <Link2 className="h-4 w-4" />
                  Share
                </>
              )}
            </button>
          </div>
        </header>

        {/* Table of Contents */}
        {toc.length > 0 && (
          <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Table of Contents
            </p>
            <ul className="space-y-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Content */}
        <article className="article-content">
          {children}
        </article>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-center text-white sm:p-10">
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

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
              Related Articles
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group rounded-xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-md dark:border-gray-700 dark:hover:border-blue-700"
                >
                  <span className="mb-1 block text-xs text-gray-400 dark:text-gray-500">
                    {related.category}
                  </span>
                  <span className="block text-sm font-semibold text-gray-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {related.title}
                  </span>
                  <span className="mt-2 block text-xs text-gray-400 dark:text-gray-500">
                    {related.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
