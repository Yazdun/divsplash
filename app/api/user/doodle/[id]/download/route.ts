import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(
  request: Request,
  { params }: { params: { id: string } },
) {
  const supabase = createRouteHandlerClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  console.log(params)

  const { data } = await supabase
    .from('downloads')
    .insert({ user_id: session?.user.id, doodle_id: params.id })

  return NextResponse.json({ data: params.id })
}
