'use client'

interface Props {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  multiline?: boolean
}

export function TextOption({ value, onChange, placeholder, multiline }: Props) {
  const base =
    'w-full rounded-xl border-2 border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary'

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
