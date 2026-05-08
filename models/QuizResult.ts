import mongoose from 'mongoose'
import { QuizResultModel } from '@/types/QuizModel'
import { MOCK_MODE } from '@/lib/db'
import { mockStore } from '@/lib/mockStore'

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

const MongooseModel = mongoose.models.QuizResult || mongoose.model<QuizResultModel>('QuizResult', QuizResultSchema)

const MockModel = {
  create: mockStore.create,
  findOne: mockStore.findOne,
  findOneAndUpdate: mockStore.findOneAndUpdate,
}

export default MOCK_MODE ? MockModel : MongooseModel

