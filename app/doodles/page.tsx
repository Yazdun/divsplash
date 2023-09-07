import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { cookies } from 'next/headers'
import { DoodleAuthDialog, DoodleDetailsDialog } from '@/components'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'DivSplash — Doodles',
  description: 'Welcome to DivSplash!',
}

export default async function Doodles() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: doodles } = await supabase.from('doodles').select()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <ul className="container grid gap-2 p-5 md:grid-cols-3 lg:grid-cols-4">
      {doodles?.map(doodle => {
        return (
          <li key={doodle.id} className="w-full">
            {session ? (
              <DoodleDetailsDialog doodle={doodle} />
            ) : (
              <DoodleAuthDialog doodle={doodle} />
            )}
          </li>
        )
      })}
    </ul>
  )
}
