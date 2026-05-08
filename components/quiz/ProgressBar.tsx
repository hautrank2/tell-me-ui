'use client'

interface ProgressBarProps {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100)
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground">
            Question {current} of {total}
          </span>
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            {pct}%
          </span>
        </div>
      </div>
      <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-gradient-to-r from-secondary to-secondary/50 shadow-sm">
        <div
          className="absolute inset-y-0 left-0 h-full rounded-full bg-gradient-to-r from-primary to-primary/80 shadow-lg shadow-primary/30 transition-all duration-700 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

