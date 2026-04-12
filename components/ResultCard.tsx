'use client'

import { questions } from '@/lib/questions'
import type { Lang } from '@/lib/i18n'
import { t } from '@/lib/i18n'

interface Props {
  answers: Record<string, string>
  lang: Lang
}

function AnswerPreview({ questionId, value }: { questionId: string; value: string }) {
  if (questionId === 'primaryColor' || questionId === 'secondaryColor') {
    return (
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full border border-zinc-200 dark:border-zinc-600" style={{ background: value }} />
        <span className="font-mono text-sm uppercase">{value}</span>
      </div>
    )
  }

  if (questionId === 'borderRadius') {
    const radii: Record<string, string> = { none: '0px', sm: '4px', md: '12px', lg: '20px', full: '9999px' }
    return (
      <div className="flex items-center gap-3">
        <div className="h-8 w-12 bg-indigo-500" style={{ borderRadius: radii[value] || '0px' }} />
        <span className="text-sm capitalize">{value}</span>
      </div>
    )
  }

  if (questionId === 'shadow') {
    const shadows: Record<string, string> = {
      flat: 'none',
      subtle: '0 1px 3px rgba(0,0,0,0.12)',
      medium: '0 4px 12px rgba(0,0,0,0.15)',
      bold: '0 10px 30px rgba(0,0,0,0.25)',
    }
    return (
      <div className="flex items-center gap-3">
        <div className="h-8 w-12 rounded bg-white dark:bg-zinc-700" style={{ boxShadow: shadows[value] || 'none', border: value === 'flat' ? '1px solid #e5e7eb' : undefined }} />
        <span className="text-sm capitalize">{value}</span>
      </div>
    )
  }

  if (questionId === 'typography') {
    const fonts: Record<string, string> = { sans: 'Inter, sans-serif', serif: 'Georgia, serif', mono: 'monospace' }
    return (
      <span className="text-base" style={{ fontFamily: fonts[value] || 'inherit' }}>
        {value} — The quick brown fox
      </span>
    )
  }

  // Find label from question options
  const q = questions.find((q) => q.id === questionId)
  const opt = q?.options?.find((o) => o.value === value)
  if (opt) {
    return <span className="text-sm">{opt.label.en} / {opt.label.vi}</span>
  }

  return <span className="text-sm whitespace-pre-wrap">{value}</span>
}

export function ResultCard({ answers, lang }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {questions.map((q) => {
        const val = answers[q.id]
        if (!val) return null
        return (
          <div
            key={q.id}
            className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              {t(lang, `result.answers.${q.id}`)}
            </p>
            <div className="text-zinc-800 dark:text-zinc-100">
              <AnswerPreview questionId={q.id} value={val} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
