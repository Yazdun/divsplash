import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function Doodles() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: doodles } = await supabase.from('doodles').select()

  return (
    <div className="container">
      <pre>{JSON.stringify(doodles, null, 2)}</pre>
    </div>
  )
}
