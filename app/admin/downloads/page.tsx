import { Card, DownloadsTableServer, UsersTableServer } from '@/components'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function Users() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data } = await supabase
    .from('downloads')
    .select('*, profile: profiles(*),doodle: doodles(*)')
    .order('created_at', { ascending: false })

  if (!data) return null

  const downloads =
    data?.map(download => ({
      ...download,
      userProfile: Array.isArray(download.profile)
        ? download.profile[0]
        : download.profile,
      downloadedDoddle: Array.isArray(download.doodle)
        ? download.doodle[0]
        : download.doodle,
    })) ?? []

  return <DownloadsTableServer downloads={downloads} />
}
