'use client'

import type { QuizLangModel, QuizOptionModel } from '@/types/QuizModel'

interface Props {
  options: QuizOptionModel[]
  value: string
  onChange: (v: string) => void
  lang: QuizLangModel
}

export function RadioOption({ options, value, onChange, lang }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`group flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 transition-all duration-300 ${
            value === opt.value
              ? 'border-primary bg-gradient-to-r from-primary/10 to-primary/5 shadow-lg shadow-primary/20'
              : 'border-border bg-card hover:border-primary/40 hover:bg-muted/50'
          }`}
        >
          <div
            className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all ${
              value === opt.value
                ? 'border-primary bg-primary'
                : 'border-border bg-background group-hover:border-primary/50'
            }`}
          >
            {value === opt.value && (
              <div className="h-2 w-2 rounded-full bg-primary-foreground" />
            )}
          </div>
          <div className="flex flex-col flex-1">
            <span className="font-semibold text-foreground">{opt.label[lang]}</span>
            {opt.description && (
              <span className="text-sm text-muted-foreground">{opt.description[lang]}</span>
            )}
          </div>
        </label>
      ))}
    </div>
  )
}

