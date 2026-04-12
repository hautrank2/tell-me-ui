'use client'

import type { Option } from '@/lib/questions'
import type { Lang } from '@/lib/i18n'

interface Props {
  option: Option
  selected: boolean
  onSelect: () => void
  lang: Lang
}

export function RadioVisualOption({ option, selected, onSelect, lang }: Props) {
  const hasPreview = !!option.preview
  const hasStyle = !!option.style

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group relative flex flex-col items-center gap-3 rounded-xl border-2 p-4 text-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
        selected
          ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40'
          : 'border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-600'
      }`}
    >
      {/* Preview element */}
      {hasPreview && (
        <div
          style={option.preview}
          className="shrink-0 rounded"
          aria-hidden="true"
        />
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
        <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          {option.label[lang]}
        </p>
        {option.description && (
          <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
            {option.description[lang]}
          </p>
        )}
      </div>

      {selected && (
        <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-white text-xs">
          ✓
        </span>
      )}
    </button>
  )
}
