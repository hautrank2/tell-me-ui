import { NextRequest } from 'next/server'
import dbConnect from '@/lib/db'
import QuizResult from '@/models/QuizResult'

export async function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get('key')

  if (!key || key !== process.env.ADMIN_KEY) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await dbConnect()
    const sessions = await QuizResult.find({})
      .sort({ createdAt: -1 })
      .limit(50)
      .lean()

    return Response.json({ sessions })
  } catch (err) {
    console.error(err)
    return Response.json({ error: 'Server error' }, { status: 500 })
  }
}
