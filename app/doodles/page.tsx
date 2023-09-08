import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { cookies } from 'next/headers'
import { DoodleAuthDialog, DoodleDetailsDialog } from '@/components'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'DivSplash — Doodles',
  description: 'Welcome to DivSplash!',
}

export default async function DoodlesPage() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data } = await supabase.from('doodles').select('*, likes(user_id)')

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const doodles =
    data?.map(doodle => ({
      ...doodle,
      user_has_liked_doodle: session
        ? !!doodle.likes.find(like => like.user_id === session.user.id)
        : false,
      likes: doodle.likes.length,
    })) ?? []

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
