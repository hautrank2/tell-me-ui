'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { Lang } from '@/lib/i18n'

interface AppContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const AppContext = createContext<AppContextValue>({
  lang: 'en',
  setLang: () => {},
  theme: 'light',
  toggleTheme: () => {},
})

export function useApp() {
  return useContext(AppContext)
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedLang = (localStorage.getItem('lang') as Lang) || 'en'
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
    setLangState(savedLang)
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    setMounted(true)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  if (!mounted) return null

  return (
    <AppContext.Provider value={{ lang, setLang, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  )
}
