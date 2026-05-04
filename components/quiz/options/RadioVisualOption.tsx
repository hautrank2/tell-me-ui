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
      className={`group relative flex flex-col items-center gap-4 rounded-2xl border-2 p-5 text-center transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
        selected
          ? 'border-primary bg-primary/5 shadow-md shadow-primary/10'
          : 'border-border bg-card hover:-translate-y-1 hover:border-primary/30 hover:bg-muted hover:shadow-lg'
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
          className="rounded text-sm"
          aria-hidden="true"
        >
          {option.label[lang]}
        </div>
      )}

      <div>
        <p className="text-sm font-semibold text-foreground">
          {option.label[lang]}
        </p>
        {option.description && (
          <p className="mt-0.5 text-xs text-muted-foreground">
            {option.description[lang]}
          </p>
        )}
      </div>

      {selected && (
        <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
          ✓
        </span>
      )}
    </button>
  )
}
