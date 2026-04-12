'use client'

import Link from 'next/link'
import { useApp } from '@/components/Providers'
import { t } from '@/lib/i18n'
import type { ISession } from '@/lib/models/Session'

interface Props {
  sessions: ISession[]
  unauthorized: boolean
}

export function AdminClient({ sessions, unauthorized }: Props) {
  const { lang } = useApp()

  if (unauthorized) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className="text-zinc-500 dark:text-zinc-400">{t(lang, 'admin.unauthorized')}</p>
      </div>
    )
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">
        {t(lang, 'admin.title')}
      </h1>

      {sessions.length === 0 ? (
        <p className="text-zinc-500 dark:text-zinc-400">{t(lang, 'admin.noSessions')}</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-700">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-800">
              <tr>
                {['token', 'project', 'industry', 'lang', 'date', 'view'].map((col) => (
                  <th
                    key={col}
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
                  >
                    {t(lang, `admin.${col}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {sessions.map((s) => (
                <tr key={s.token} className="bg-white hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800/50">
                  <td className="px-4 py-3 font-mono text-xs text-zinc-600 dark:text-zinc-400">{s.token}</td>
                  <td className="px-4 py-3 text-zinc-800 dark:text-zinc-200">{s.answers?.projectName || '—'}</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{s.answers?.industry || '—'}</td>
                  <td className="px-4 py-3 uppercase text-zinc-600 dark:text-zinc-400">{s.lang}</td>
                  <td className="px-4 py-3 text-zinc-500 dark:text-zinc-500">
                    {new Date(s.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/result/${s.token}`}
                      className="text-indigo-600 hover:underline dark:text-indigo-400"
                    >
                      {t(lang, 'admin.view')}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
