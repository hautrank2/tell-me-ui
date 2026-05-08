'use client'

interface Props {
  value: string
  onChange: (v: string) => void
  label: string
}

export function ColorOption({ value, onChange, label }: Props) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative group">
        <div
          className="h-40 w-40 rounded-2xl shadow-2xl shadow-current/20 ring-4 ring-background transition-transform duration-300 group-hover:scale-105 cursor-pointer"
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
        <div className="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none" />
      </div>
      <div className="flex items-center gap-3 rounded-lg border-2 border-border bg-card px-4 py-2.5 shadow-sm">
        <div className="h-6 w-6 rounded-full border-2 border-border shadow-sm" style={{ background: value }} />
        <span className="font-mono text-sm font-semibold text-foreground uppercase">
          {value}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">Nhấp vào để chọn màu</p>
    </div>
  )
}

