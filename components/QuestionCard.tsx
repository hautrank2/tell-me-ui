'use client'

import type { Question } from '@/lib/questions'
import type { Lang } from '@/lib/i18n'
import { RadioVisualOption } from './options/RadioVisualOption'
import { ColorOption } from './options/ColorOption'
import { SelectOption } from './options/SelectOption'
import { TextOption } from './options/TextOption'

interface Props {
  question: Question
  value: string
  onChange: (v: string) => void
  lang: Lang
}

export function QuestionCard({ question, value, onChange, lang }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white sm:text-2xl">
        {question.label[lang]}
      </h2>

      {question.type === 'radio-visual' && question.options && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {question.options.map((opt) => (
            <RadioVisualOption
              key={opt.value}
              option={opt}
              selected={value === opt.value}
              onSelect={() => onChange(opt.value)}
              lang={lang}
            />
          ))}
        </div>
      )}

      {question.type === 'color' && (
        <div className="flex justify-center">
          <ColorOption
            value={value || question.defaultValue || '#6366f1'}
            onChange={onChange}
            label={question.label[lang]}
          />
        </div>
      )}

      {question.type === 'select' && question.options && (
        <SelectOption
          options={question.options}
          value={value}
          onChange={onChange}
          lang={lang}
        />
      )}

      {question.type === 'text' && (
        <TextOption
          value={value}
          onChange={onChange}
          placeholder={question.placeholder?.[lang]}
        />
      )}

      {question.type === 'textarea' && (
        <TextOption
          value={value}
          onChange={onChange}
          placeholder={question.placeholder?.[lang]}
          multiline
        />
      )}
    </div>
  )
}
