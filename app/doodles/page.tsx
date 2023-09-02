import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { cookies } from 'next/headers'
import { DoodleDetailsDialog } from '@/components'

export const dynamic = 'force-dynamic'

export default async function Doodles() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: doodles } = await supabase.from('doodles').select()

  return (
    <ul className="container grid gap-5 p-5 md:grid-cols-2 lg:grid-cols-4">
      {doodles?.map(doodle => {
        return <DoodleDetailsDialog key={doodle.id} />
      })}
    </ul>
  )
}
