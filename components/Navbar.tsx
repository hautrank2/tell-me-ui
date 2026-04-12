'use client'

import { useApp } from './Providers'

export function Navbar() {
  const { lang, setLang, theme, toggleTheme } = useApp()

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Vizform
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === 'en' ? 'vi' : 'en')}
            className="rounded-md px-3 py-1.5 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            aria-label="Toggle language"
          >
            {lang === 'en' ? '🇻🇳 VI' : '🇺🇸 EN'}
          </button>
          <button
            onClick={toggleTheme}
            className="rounded-md px-3 py-1.5 text-sm transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}
