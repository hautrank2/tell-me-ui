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
          className={`rounded-2xl border-2 px-5 py-4 text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
            value === opt.value
              ? 'border-primary bg-primary/5 text-primary shadow-md shadow-primary/10'
              : 'border-border bg-card text-foreground hover:border-primary/30 hover:bg-muted'
          }`}
        >
          {opt.label[lang]}
        </button>
      ))}
    </div>
  )
}
