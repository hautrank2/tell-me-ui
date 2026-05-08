'use client'

interface Props {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  multiline?: boolean
}

export function TextOption({ value, onChange, placeholder, multiline }: Props) {
  const base =
    'w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-base text-foreground outline-none transition duration-200 focus:border-primary focus:shadow-lg focus:shadow-primary/10 placeholder:text-muted-foreground'

  if (multiline) {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={5}
        className={`${base} resize-none font-normal`}
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

