'use client'

interface Props {
  value: string
  onChange: (v: string) => void
  label: string
}

export function ColorOption({ value, onChange, label }: Props) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        <div
          className="h-32 w-32 rounded-2xl shadow-lg ring-4 ring-white dark:ring-zinc-800"
          style={{ background: value }}
        />
        <label
          htmlFor="color-picker"
          className="absolute inset-0 cursor-pointer rounded-2xl"
          aria-label={label}
        />
        <input
          id="color-picker"
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />
      </div>
      <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-2 dark:border-zinc-700 dark:bg-zinc-900">
        <div className="h-5 w-5 rounded-full border border-zinc-200 dark:border-zinc-600" style={{ background: value }} />
        <span className="font-mono text-sm font-medium text-zinc-700 dark:text-zinc-300 uppercase">
          {value}
        </span>
      </div>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">Click the swatch to pick a color</p>
    </div>
  )
}
