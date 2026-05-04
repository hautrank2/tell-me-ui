import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/db'
import QuizResult from '@/models/QuizResult'
import { nanoid } from 'nanoid'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { answers, lang } = body

    if (!answers || typeof answers !== 'object') {
      return NextResponse.json({ error: 'Invalid answers' }, { status: 400 })
    }

    await dbConnect()

    const token = nanoid(10)
    await QuizResult.create({
      token,
      answers,
      lang: lang || 'en',
    })

    return NextResponse.json({ token })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
