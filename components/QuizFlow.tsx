'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { questions } from '@/lib/questions'
import { useApp } from './Providers'
import { t } from '@/lib/i18n'
import { ProgressBar } from './ProgressBar'
import { QuestionCard } from './QuestionCard'

const getDefaultValue = (q: (typeof questions)[number]) => {
  if (q.type === 'color') return q.defaultValue || '#6366f1'
  return ''
}

export function QuizFlow() {
  const { lang } = useApp()
  const router = useRouter()
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [answers, setAnswers] = useState<Record<string, string>>(() =>
    Object.fromEntries(questions.map((q) => [q.id, getDefaultValue(q)]))
  )
  const [submitting, setSubmitting] = useState(false)

  const question = questions[index]
  const value = answers[question.id]
  const isAnswered = value.trim() !== ''
  const isLast = index === questions.length - 1

  const go = (dir: 1 | -1) => {
    setDirection(dir)
    setIndex((i) => i + dir)
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers, lang }),
      })
      const data = await res.json()
      router.push(`/result/${data.token}`)
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
          className="rounded-xl border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-600 transition hover:bg-zinc-50 disabled:opacity-30 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
        >
          {t(lang, 'quiz.back')}
        </button>

        {isLast ? (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!isAnswered || submitting}
            className="rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-40"
          >
            {submitting ? t(lang, 'quiz.submitting') : t(lang, 'quiz.submit')}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => go(1)}
            disabled={!isAnswered}
            className="rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-40"
          >
            {t(lang, 'quiz.next')}
          </button>
        )}
      </div>
    </div>
  )
}
