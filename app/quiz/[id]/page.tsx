import { notFound } from 'next/navigation'
import { ResultPageClient } from './ResultPageClient'

async function getQuizResult(id: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/quiz/${id}`, { cache: 'no-store' })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export default async function QuizResultPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const result = await getQuizResult(id)

  if (!result) notFound()

  return <ResultPageClient result={result} />
}
