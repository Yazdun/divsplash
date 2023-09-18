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
    <main className="container px-5">
      <div className="flex flex-col items-center justify-center my-10 space-y-2 text-center">
        <h1 className="text-3xl font-bold">Doodles</h1>
        <p className="max-w-lg">
          You can view all the doodles here, Click on the doodle to view the
          download link. You can also like them if you want to!
        </p>
      </div>
      <ul className="grid gap-2 md:grid-cols-3 lg:grid-cols-4">
        {doodles?.map(doodle => {
          return (
            <li key={doodle.id} className="w-full">
              {session ? (
                <DoodleDetailsDialog
                  doodle={doodle}
                  session={session || undefined}
                />
              ) : (
                <DoodleAuthDialog doodle={doodle} />
              )}
            </li>
          )
        })}
      </ul>
    </main>
  )
}
