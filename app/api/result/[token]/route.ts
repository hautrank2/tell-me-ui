import { NextRequest } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Session from '@/lib/models/Session'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params
    await connectDB()

    const session = await Session.findOne({ token }).lean()
    if (!session) {
      return Response.json({ error: 'Not found' }, { status: 404 })
    }

    return Response.json(session)
  } catch (err) {
    console.error(err)
    return Response.json({ error: 'Server error' }, { status: 500 })
  }
}
