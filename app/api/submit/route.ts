import { NextRequest } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Session from '@/lib/models/Session'
import { nanoid } from 'nanoid'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { answers, lang } = body

    if (!answers || typeof answers !== 'object') {
      return Response.json({ error: 'Invalid answers' }, { status: 400 })
    }

    const required = ['style', 'primaryColor', 'secondaryColor', 'borderRadius', 'shadow', 'typography', 'density', 'industry', 'projectName']
    for (const field of required) {
      if (!answers[field]) {
        return Response.json({ error: `Missing field: ${field}` }, { status: 400 })
      }
    }

    await connectDB()

    const token = nanoid(10)
    await Session.create({
      token,
      answers,
      lang: lang || 'en',
      createdAt: new Date(),
    })

    return Response.json({ token })
  } catch (err) {
    console.error(err)
    return Response.json({ error: 'Server error' }, { status: 500 })
  }
}
