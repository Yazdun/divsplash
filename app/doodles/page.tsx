import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { cookies } from 'next/headers'
import { DoodleAuthDialog, DoodleDetailsDialog } from '@/components'
import DoodleImage from '@/assets/aada.png'
import Image from 'next/image'

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
      <div className="flex flex-col items-center gap-5 my-10 lg:flex-row">
        <div className="w-full space-y-5 text-center lg:text-left">
          <h1 className="text-6xl font-bold">DivSplash</h1>
          <p className="text-3xl lg:flex lg:flex-col">
            Crafting cool Web & App illustrations <span>for you.</span>
          </p>
        </div>
        <div className="relative">
          <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white to-transparent"></div>
          <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white to-transparent"></div>
          <Image src={DoodleImage} alt="A vibrant and artistic doodle" />
        </div>
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
