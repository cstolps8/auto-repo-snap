"use client";

import Link from "next/link";
import { useState } from "react";

export default function Snap() {
  const [repoUrl, setRepoUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!repoUrl.trim()) {
      setError("Please enter a GitHub repository URL.");
      return;
    }
    if (!repoUrl.startsWith("https://github.com/")) {
      setError("URL must start with https://github.com/");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  function handleReset() {
    setRepoUrl("");
    setSubmitted(false);
    setError("");
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-zinc-900 dark:text-zinc-50"
          >
            auto-repo-snap
          </Link>
          <nav className="flex gap-4">
            <Link
              href="/about"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              About
            </Link>
            <Link
              href="/snap"
              className="text-sm font-medium text-zinc-900 dark:text-zinc-50"
            >
              Try It
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Snap a Repository
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          Enter a public GitHub repository URL to generate a snapshot.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} noValidate>
            <label
              htmlFor="repo-url"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
            >
              Repository URL
            </label>
            <input
              id="repo-url"
              type="url"
              placeholder="https://github.com/owner/repo"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 mb-4"
            />
            {error && (
              <p
                role="alert"
                data-testid="form-error"
                className="text-red-600 text-sm mb-4"
              >
                {error}
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 py-2 rounded-lg font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              Generate Snapshot
            </button>
          </form>
        ) : (
          <div data-testid="success-message" className="text-center py-10">
            <div className="text-5xl mb-4">✅</div>
            <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Snapshot queued!
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              We&apos;re generating a snapshot for{" "}
              <span className="font-mono text-sm">{repoUrl}</span>
            </p>
            <button
              onClick={handleReset}
              className="bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 px-6 py-2 rounded-full font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              Snap Another
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
