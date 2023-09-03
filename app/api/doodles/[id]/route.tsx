import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  const supabase = createRouteHandlerClient<Database>({ cookies })

  const { data } = await supabase
    .from('doodles')
    .delete()
    .match({ id: params.id })

  return NextResponse.json({ data })
}
