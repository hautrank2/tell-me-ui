'use client'

import { QuizLangModel, QuizQuestionModel } from '@/types/QuizModel'
import { RadioVisualOption } from './options/RadioVisualOption'
import { ColorOption } from './options/ColorOption'
import { SelectOption } from './options/SelectOption'
import { TextOption } from './options/TextOption'
import { CheckboxOption } from './options/CheckboxOption'
import { RadioOption } from './options/RadioOption'

interface Props {
  question: QuizQuestionModel
  value: any
  onChange: (v: any) => void
  lang: QuizLangModel
}

export function QuestionCard({ question, value, onChange, lang }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          {question.label[lang]}
        </h2>
        {question.description?.[lang] && (
          <p className="text-lg text-muted-foreground">
            {question.description[lang]}
          </p>
        )}
      </div>

      <div className="space-y-4">
        {question.type === 'radio-visual' && question.options && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
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

        {question.type === 'radio' && question.options && (
          <RadioOption
            options={question.options}
            value={value}
            onChange={onChange}
            lang={lang}
          />
        )}

        {question.type === 'checkbox' && question.options && (
          <CheckboxOption
            options={question.options}
            value={value || []}
            onChange={onChange}
            lang={lang}
          />
        )}

        {question.type === 'color' && (
          <div className="flex justify-center py-4">
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
    </div>
  )
}

