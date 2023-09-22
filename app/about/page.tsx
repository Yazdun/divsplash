import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { cookies } from 'next/headers'
import UNDERLINE from '@/assets/fun-underline.svg'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'DivSplash — About',
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
    <main className="container h-[95vh] flex justify-center items-center px-5">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold">Coming Soon</h1>
        <Image src={UNDERLINE} alt="" />
      </div>
    </main>
  )
}
