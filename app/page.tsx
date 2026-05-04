import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          What should your website look like?
        </h1>
        <p className="mt-4 text-muted-foreground">
          Answer a few visual questions and get a shareable link for your developer.
        </p>
      </div>
      <Link
        href="/quiz"
        className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
      >
        Start Quiz
      </Link>
    </div>
  )
}
