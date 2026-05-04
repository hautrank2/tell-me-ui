import React from 'react'

export type QuizLangModel = 'vi' | 'en'

export type QuizQuestionTypeModel = 'radio-visual' | 'radio' | 'checkbox' | 'color' | 'select' | 'text' | 'textarea'

export interface QuizOptionModel {
  value: string
  label: { vi: string; en: string }
  description?: { vi: string; en: string }
  style?: React.CSSProperties
  preview?: React.CSSProperties
  previewClass?: string
  previewText?: string
}

export interface QuizQuestionModel {
  id: string
  type: QuizQuestionTypeModel
  label: { vi: string; en: string }
  options?: QuizOptionModel[]
  defaultValue?: string | string[]
  placeholder?: { vi: string; en: string }
  optional?: boolean
}

export interface QuizSubmitModel {
  answers: Record<string, any>
  lang: QuizLangModel
}

export interface QuizResultModel {
  _id?: string
  token?: string
  answers: Record<string, any>
  lang: QuizLangModel
  createdAt?: Date
}
