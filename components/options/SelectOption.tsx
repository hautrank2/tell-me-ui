'use client'

import type { Option } from '@/lib/questions'
import type { Lang } from '@/lib/i18n'

interface Props {
  options: Option[]
  value: string
  onChange: (v: string) => void
  lang: Lang
}

export function SelectOption({ options, value, onChange, lang }: Props) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`rounded-xl border-2 px-4 py-3 text-sm font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
            value === opt.value
              ? 'border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300'
              : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600'
          }`}
        >
          {opt.label[lang]}
        </button>
      ))}
    </div>
  )
}
