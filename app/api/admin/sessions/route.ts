import { NextRequest } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Session from '@/lib/models/Session'

export async function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get('key')

  if (!key || key !== process.env.ADMIN_KEY) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await connectDB()
    const sessions = await Session.find({})
      .sort({ createdAt: -1 })
      .limit(50)
      .lean()

    return Response.json({ sessions })
  } catch (err) {
    console.error(err)
    return Response.json({ error: 'Server error' }, { status: 500 })
  }
}
