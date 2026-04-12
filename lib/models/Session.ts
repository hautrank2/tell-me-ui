import mongoose, { Schema, Document, Model } from 'mongoose'

export interface ISession extends Document {
  token: string
  answers: {
    style: string
    primaryColor: string
    secondaryColor: string
    borderRadius: string
    shadow: string
    typography: string
    density: string
    industry: string
    projectName: string
    description: string
  }
  lang: string
  createdAt: Date
}

const SessionSchema = new Schema<ISession>(
  {
    token: { type: String, required: true, unique: true },
    answers: {
      style: String,
      primaryColor: String,
      secondaryColor: String,
      borderRadius: String,
      shadow: String,
      typography: String,
      density: String,
      industry: String,
      projectName: String,
      description: String,
    },
    lang: { type: String, default: 'en' },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: false }
)

const Session: Model<ISession> =
  mongoose.models.Session || mongoose.model<ISession>('Session', SessionSchema)

export default Session
