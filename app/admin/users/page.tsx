import { Card, UsersTableServer } from '@/components'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function Users() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data } = await supabase
    .from('profiles')
    .select()
    .select('*, likes(user_id), downloads(user_id)')

  if (!data) return null

  const profiles =
    data?.map(profile => ({
      ...profile,
      downloads: profile.downloads.length,
      likes: profile.likes.length,
    })) ?? []

  return (
    <div className="w-full text-center">
      <UsersTableServer profiles={profiles.reverse()} />
    </div>
  )
}
