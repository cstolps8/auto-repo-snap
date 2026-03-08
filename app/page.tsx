import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            auto-repo-snap
          </h1>
          <nav className="flex gap-4">
            <Link
              href="/about"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
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

      <main className="max-w-5xl mx-auto px-6 py-20">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
            Snapshot any GitHub repo
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10">
            Automatically capture, archive, and share visual snapshots of any
            public GitHub repository — in seconds.
          </p>
          <Link
            href="/snap"
            data-testid="hero-cta"
            className="inline-block bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 px-8 py-3 rounded-full font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
          >
            Get Started
          </Link>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
            <div className="text-3xl mb-3">📸</div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Instant Snapshots
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Generate visual screenshots of any repository&apos;s file tree and README.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
            <div className="text-3xl mb-3">🔁</div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Auto-Updated
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Snapshots are refreshed automatically on every push to keep things current.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
            <div className="text-3xl mb-3">🔗</div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Shareable Links
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Share a permanent link to the snapshot anywhere — docs, issues, or tweets.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
