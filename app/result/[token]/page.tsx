import { notFound } from 'next/navigation'
import { ResultPageClient } from './ResultPageClient'

async function getSession(token: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/result/${token}`, { cache: 'no-store' })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export default async function ResultPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params
  const session = await getSession(token)

  if (!session) notFound()

  return <ResultPageClient session={session} />
}
