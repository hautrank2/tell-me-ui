'use client'

import { useState } from 'react'
import { useApp } from '@/components/Providers'
import { ResultCard } from '@/components/ResultCard'
import { t } from '@/lib/i18n'
import type { ISession } from '@/lib/models/Session'

interface Props {
  session: ISession
}

export function ResultPageClient({ session }: Props) {
  const { lang } = useApp()
  const [copied, setCopied] = useState(false)

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          {t(lang, 'result.title')}
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          {t(lang, 'result.subtitle')}
        </p>
        {session.answers?.projectName && (
          <p className="mt-1 text-lg font-semibold text-indigo-600 dark:text-indigo-400">
            {session.answers.projectName}
          </p>
        )}
      </div>

      <ResultCard answers={session.answers as unknown as Record<string, string>} lang={lang} />

      <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900">
        <p className="mb-3 text-sm text-zinc-500 dark:text-zinc-400">
          {t(lang, 'result.shareDesc')}
        </p>
        <div className="flex items-center gap-3">
          <code className="flex-1 truncate rounded-lg bg-zinc-100 px-3 py-2 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            {typeof window !== 'undefined' ? window.location.href : ''}
          </code>
          <button
            onClick={copyLink}
            className="shrink-0 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            {copied ? t(lang, 'result.copied') : t(lang, 'result.copyLink')}
          </button>
        </div>
      </div>
    </div>
  )
}
