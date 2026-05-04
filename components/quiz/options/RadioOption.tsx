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
          className={`flex cursor-pointer items-center gap-4 rounded-2xl border-2 p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${
            value === opt.value
              ? 'border-primary bg-primary/5 shadow-md shadow-primary/10'
              : 'border-border bg-card hover:border-primary/30 hover:bg-muted'
          }`}
        >
          <input
            type="radio"
            name="radio-group"
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="h-5 w-5 border-input text-primary focus:ring-primary bg-background"
          />
          <div className="flex flex-col">
            <span className="font-medium text-foreground">{opt.label[lang]}</span>
            {opt.description && (
              <span className="text-sm text-muted-foreground">{opt.description[lang]}</span>
            )}
          </div>
        </label>
      ))}
    </div>
  )
}
