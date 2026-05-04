'use client'

import { useState } from 'react'
import { useApp } from '@/components/Providers'
import { t } from '@/lib/i18n'
import type { QuizResultModel } from '@/types/QuizModel'
import { MockSandbox } from '@/components/quiz/MockSandbox'
import { QuestionCard } from '@/components/quiz/QuestionCard'
import { questions } from '@/lib/questions'
import { AnimatePresence, motion } from 'framer-motion'


interface Props {
  result: QuizResultModel
}

export function ResultPageClient({ result }: Props) {
  const { lang } = useApp()
  const [answers, setAnswers] = useState<Record<string, any>>(result.answers || {})
  const [isSaving, setIsSaving] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [copied, setCopied] = useState(false)

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const res = await fetch(`/api/quiz/${result.token}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers }),
      })
      if (res.ok) {
        setToastMessage(t(lang, 'result.saveSuccess') || 'Saved successfully!')
      } else {
        setToastMessage('Error saving.')
      }
    } catch (err) {
      setToastMessage('Network error.')
    } finally {
      setIsSaving(false)
      setTimeout(() => setToastMessage(''), 3000)
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {t(lang, 'result.title')}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {t(lang, 'result.subtitle')}
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={copyLink}
            className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
          >
            {copied ? t(lang, 'result.copied') : t(lang, 'result.copyLink')}
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left: Mock Website Sandbox */}
        <div className="sticky top-20 h-fit">
          <MockSandbox answers={answers} />
        </div>

        {/* Right: Controls Panel */}
        <div className="flex flex-col gap-8 rounded-2xl border border-border bg-card/50 p-6 shadow-sm">
          <h2 className="text-xl font-bold">Customize UI</h2>
          <div className="flex flex-col gap-10">
            {questions.map((q) => (
              <QuestionCard
                key={q.id}
                question={q}
                value={answers[q.id]}
                onChange={(v) => setAnswers(prev => ({ ...prev, [q.id]: v }))}
                lang={lang}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-xl z-50"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
