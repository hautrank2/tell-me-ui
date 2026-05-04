import mongoose from 'mongoose'
import { QuizResultModel } from '@/types/QuizModel'

const QuizResultSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  answers: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  lang: {
    type: String,
    enum: ['en', 'vi'],
    required: true,
  },
}, { timestamps: true })

export default mongoose.models.QuizResult || mongoose.model<QuizResultModel>('QuizResult', QuizResultSchema)
