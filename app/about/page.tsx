import Link from "next/link";

export default function About() {
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
              className="text-sm font-medium text-zinc-900 dark:text-zinc-50"
            >
              About
            </Link>
            <Link
              href="/snap"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Try It
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
          About auto-repo-snap
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-7">
          <strong>auto-repo-snap</strong> is an open-source tool that
          automatically captures visual snapshots of GitHub repositories.
          Whether you want to share a quick view of your project structure or
          archive the state of a repo at a point in time, auto-repo-snap has you
          covered.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 leading-7">
          Built with Next.js and Playwright, this project embraces modern
          web tooling to deliver a fast and reliable experience.
        </p>
      </main>
    </div>
  );
}
