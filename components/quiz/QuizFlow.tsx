'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { questions } from '@/lib/questions'
import { QuizLangModel, QuizQuestionModel } from '@/types/QuizModel'
import { useApp } from '../Providers'
import { t } from '@/lib/i18n'
import { ProgressBar } from './ProgressBar'
import { QuestionCard } from './QuestionCard'

const getDefaultValue = (q: QuizQuestionModel) => {
  if (q.defaultValue !== undefined) return q.defaultValue
  if (q.type === 'color') return '#6366f1'
  if (q.type === 'checkbox') return []
  return ''
}

export function QuizFlow() {
  const { lang } = useApp()
  const router = useRouter()
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [answers, setAnswers] = useState<Record<string, any>>(() =>
    Object.fromEntries(questions.map((q) => [q.id, getDefaultValue(q)]))
  )
  const [submitting, setSubmitting] = useState(false)

  const question = questions[index]
  const value = answers[question.id]
  const isAnswered = question.optional || (Array.isArray(value) ? true : value?.trim?.() !== '')
  const isLast = index === questions.length - 1

  const go = (dir: 1 | -1) => {
    setDirection(dir)
    setIndex((i) => i + dir)
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    try {
      const res = await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers, lang }),
      })

      if (!res.ok) {
        const error = await res.json()
        console.error('Submit error:', error)
        setSubmitting(false)
        return
      }

      const data = await res.json()
      if (!data.token) {
        console.error('No token in response')
        setSubmitting(false)
        return
      }

      router.push(`/quiz/${data.token}`)
    } catch (err) {
      console.error('Submit failed:', err)
      setSubmitting(false)
    }
  }

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  }

  return (
    <div className="flex flex-col gap-10">
      <ProgressBar current={index + 1} total={questions.length} />

      <div className="relative min-h-[420px] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={question.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full"
          >
            <QuestionCard
              question={question}
              value={value}
              onChange={(v) => setAnswers((prev) => ({ ...prev, [question.id]: v }))}
              lang={lang}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-border pt-6">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={index === 0}
          className="rounded-lg border-2 border-border px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-muted hover:border-primary/30 disabled:opacity-30 disabled:cursor-not-allowed hover:enabled:-translate-y-0.5 hover:enabled:shadow-md"
        >
          ← {t(lang, 'quiz.back')}
        </button>

        <div className="flex-1" />

        {isLast ? (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!isAnswered || submitting}
            className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary/90 px-8 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed hover:enabled:-translate-y-0.5 hover:enabled:scale-105"
          >
            {submitting ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                {t(lang, 'quiz.submitting')}
              </>
            ) : (
              <>
                {t(lang, 'quiz.submit')} ✓
              </>
            )}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => go(1)}
            disabled={!isAnswered}
            className="rounded-lg bg-gradient-to-r from-primary to-primary/90 px-8 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed hover:enabled:-translate-y-0.5 hover:enabled:scale-105"
          >
            {t(lang, 'quiz.next')} →
          </button>
        )}
      </div>
    </div>
  )
}

