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
      const data = await res.json()
      router.push(`/quiz/${data.token}`)
    } catch {
      setSubmitting(false)
    }
  }

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  }

  return (
    <div className="flex flex-col gap-6">
      <ProgressBar current={index + 1} total={questions.length} />

      <div className="relative min-h-[360px] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={question.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: 'easeInOut' }}
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

      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={index === 0}
          className="rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground disabled:opacity-30"
        >
          {t(lang, 'quiz.back')}
        </button>

        {isLast ? (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!isAnswered || submitting}
            className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-40"
          >
            {submitting ? t(lang, 'quiz.submitting') : t(lang, 'quiz.submit')}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => go(1)}
            disabled={!isAnswered}
            className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-40"
          >
            {t(lang, 'quiz.next')}
          </button>
        )}
      </div>
    </div>
  )
}
