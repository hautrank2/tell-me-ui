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
          className="h-32 w-32 rounded-2xl shadow-lg ring-4 ring-background"
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
      <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-2">
        <div className="h-5 w-5 rounded-full border border-border" style={{ background: value }} />
        <span className="font-mono text-sm font-medium text-foreground uppercase">
          {value}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">Click the swatch to pick a color</p>
    </div>
  )
}
