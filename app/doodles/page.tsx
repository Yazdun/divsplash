import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { cookies } from 'next/headers'
import { DoodleDetailsDialog } from '@/components'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'DivSplash — Doodles',
  description: 'Welcome to DivSplash!',
}

export default async function Doodles() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: doodles } = await supabase.from('doodles').select()

  return (
    <ul className="container grid gap-2 p-5 md:grid-cols-3 lg:grid-cols-5">
      {doodles?.map(doodle => {
        return (
          <li key={doodle.id} className="w-full">
            <DoodleDetailsDialog doodle={doodle} />
          </li>
        )
      })}
    </ul>
  )
}
