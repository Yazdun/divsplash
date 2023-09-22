import React from 'react'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { LikesTableServer, UserItemStatusServer } from '@/components'
import { IoHeartDislikeOutline } from 'react-icons/io5'

export const dynamic = 'force-dynamic'

export default async function Dashboard() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const { data } = await supabase
    .from('likes')
    .select('*, profile: profiles(*),doodle: doodles(*)')
    .eq('user_id', session?.user.id)
    .order('created_at', { ascending: false })

  if (data?.length === 0) {
    return (
      <UserItemStatusServer
        icon={IoHeartDislikeOutline}
        title="You haven't liked any doodles yet"
        desc="Once you like a doodle, it will appear here. Click on the below button to go to the doodles page."
        href="/doodles"
      />
    )
  }

  const likes =
    data?.map(like => ({
      ...like,
      userProfile: Array.isArray(like.profile) ? like.profile[0] : like.profile,
      likedDoodle: Array.isArray(like.doodle) ? like.doodle[0] : like.doodle,
    })) ?? []

  return <LikesTableServer likes={likes} />
}
