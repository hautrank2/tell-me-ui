import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/db'
import QuizResult from '@/models/QuizResult'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    
    await dbConnect()

    const result = await QuizResult.findOne({ token: id }).lean()

    if (!result) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    // Convert ObjectId to string to avoid serialization issues
    const { _id, ...rest } = result as any

    return NextResponse.json(rest)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    await dbConnect()
    
    const data = await request.json()
    if (!data.answers) {
      return NextResponse.json({ error: 'Missing answers' }, { status: 400 })
    }

    const updated = await QuizResult.findOneAndUpdate(
      { token: id },
      { $set: { answers: data.answers } },
      { new: true }
    ).lean()

    if (!updated) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
