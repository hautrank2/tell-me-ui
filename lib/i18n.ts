import en from '@/messages/en.json'
import vi from '@/messages/vi.json'

export type Lang = 'en' | 'vi'

const messages = { en, vi } as const

type Messages = typeof en

// Simple nested key accessor
export function t(lang: Lang, key: string, vars?: Record<string, string | number>): string {
  const parts = key.split('.')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let val: any = messages[lang]
  for (const p of parts) {
    val = val?.[p]
  }
  let result = typeof val === 'string' ? val : key
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      result = result.replace(`{${k}}`, String(v))
    }
  }
  return result
}

export type { Messages }
