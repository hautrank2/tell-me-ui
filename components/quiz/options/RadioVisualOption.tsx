'use client'

import type { QuizOptionModel, QuizLangModel } from '@/types/QuizModel'

interface Props {
  option: QuizOptionModel
  selected: boolean
  onSelect: () => void
  lang: QuizLangModel
}

export function RadioVisualOption({ option, selected, onSelect, lang }: Props) {
  const hasPreview = !!option.preview
  const hasStyle = !!option.style

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group relative flex flex-col items-center gap-3 rounded-lg border-2 p-4 text-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
        selected
          ? 'border-primary bg-gradient-to-br from-primary/10 to-primary/5 shadow-lg shadow-primary/20'
          : 'border-border bg-card hover:border-primary/40 hover:bg-muted/50 hover:-translate-y-0.5 hover:shadow-md'
      }`}
    >
      {/* Preview element */}
      {hasPreview && (
        <div
          style={option.preview}
          className={`shrink-0 rounded shadow-sm flex items-center justify-center ${option.previewClass || ''}`}
          aria-hidden="true"
        >
          {option.previewText}
        </div>
      )}
      {hasStyle && !hasPreview && (
        <div
          style={{ ...option.style, padding: '10px 20px', minWidth: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          className="rounded text-sm shadow-sm"
          aria-hidden="true"
        >
          {option.label[lang]}
        </div>
      )}

      <div className="flex flex-col">
        <p className={`text-sm font-semibold ${selected ? 'text-primary' : 'text-foreground'}`}>
          {option.label[lang]}
        </p>
        {option.description && (
          <p className="mt-1 text-xs text-muted-foreground">
            {option.description[lang]}
          </p>
        )}
      </div>

      {selected && (
        <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary shadow-lg text-primary-foreground text-sm font-bold">
          ✓
        </span>
      )}
    </button>
  )
}

