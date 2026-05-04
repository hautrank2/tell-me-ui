'use client'

import { useApp } from './Providers'

export function Navbar() {
  const { lang, setLang, theme, toggleTheme } = useApp()

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <span className="text-xl font-bold tracking-tight text-foreground">
          Vizform
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === 'en' ? 'vi' : 'en')}
            className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
            aria-label="Toggle language"
          >
            {lang === 'en' ? '🇻🇳 VI' : '🇺🇸 EN'}
          </button>
          <button
            onClick={toggleTheme}
            className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}
