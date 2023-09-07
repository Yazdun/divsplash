import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { fileKey, fileUrl, title } = await request.json()

  const supabase = createRouteHandlerClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    const { data, error } = await supabase.from('doodles').insert({
      fileKey: fileKey,
      fileUrl: fileUrl,
      title: title,
      user_id: session.user.id,
    })
    return NextResponse.json({ error })
  }
  return NextResponse.json({})
}
