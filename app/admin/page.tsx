import { AdminClient } from './AdminClient'

async function getSessions(key: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/admin/sessions?key=${key}`, { cache: 'no-store' })
    if (res.status === 401) return { error: true, sessions: [] }
    const data = await res.json()
    return { error: false, sessions: data.sessions || [] }
  } catch {
    return { error: true, sessions: [] }
  }
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>
}) {
  const { key } = await searchParams
  const { error, sessions } = await getSessions(key || '')

  return <AdminClient sessions={sessions} unauthorized={error} />
}
