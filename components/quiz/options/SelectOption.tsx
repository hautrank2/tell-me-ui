'use client'

import type { QuizOptionModel, QuizLangModel } from '@/types/QuizModel'

interface Props {
  options: QuizOptionModel[]
  value: string
  onChange: (v: string) => void
  lang: QuizLangModel
}

export function SelectOption({ options, value, onChange, lang }: Props) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`group rounded-lg border-2 px-4 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
            value === opt.value
              ? 'border-primary bg-gradient-to-r from-primary/10 to-primary/5 text-primary shadow-lg shadow-primary/20'
              : 'border-border bg-card text-foreground hover:border-primary/40 hover:bg-muted/50 hover:-translate-y-0.5'
          }`}
        >
          {opt.label[lang]}
        </button>
      ))}
    </div>
  )
}

