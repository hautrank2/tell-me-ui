'use client'

interface Props {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  multiline?: boolean
}

export function TextOption({ value, onChange, placeholder, multiline }: Props) {
  const base =
    'w-full rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-800 outline-none transition focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-indigo-400'

  if (multiline) {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className={`${base} resize-none`}
      />
    )
  }

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={base}
    />
  )
}
