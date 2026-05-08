'use client'

import type { QuizLangModel, QuizOptionModel } from '@/types/QuizModel'

interface Props {
  options: QuizOptionModel[]
  value: string[]
  onChange: (v: string[]) => void
  lang: QuizLangModel
}

export function CheckboxOption({ options, value = [], onChange, lang }: Props) {
  const toggle = (optValue: string) => {
    if (value.includes(optValue)) {
      onChange(value.filter((v) => v !== optValue))
    } else {
      onChange([...value, optValue])
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`group flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 transition-all duration-300 ${
            value.includes(opt.value)
              ? 'border-primary bg-gradient-to-r from-primary/10 to-primary/5 shadow-lg shadow-primary/20'
              : 'border-border bg-card hover:border-primary/40 hover:bg-muted/50'
          }`}
        >
          <div
            className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 transition-all ${
              value.includes(opt.value)
                ? 'border-primary bg-primary'
                : 'border-border bg-background group-hover:border-primary/50'
            }`}
          >
            {value.includes(opt.value) && (
              <svg className="h-3 w-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
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

