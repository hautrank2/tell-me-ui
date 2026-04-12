import { QuizFlow } from '@/components/QuizFlow'

export default function HomePage() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          What should your website look like?
        </h1>
        <p className="mt-3 text-zinc-500 dark:text-zinc-400">
          Answer a few visual questions and get a shareable link for your developer.
        </p>
      </div>
      <QuizFlow />
    </div>
  )
}
