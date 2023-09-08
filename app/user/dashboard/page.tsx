import React from 'react'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Card, DownloadsTableServer } from '@/components'

export const dynamic = 'force-dynamic'

export default async function Dashboard() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()
  const { data } = await supabase
    .from('downloads')
    .select('*, profile: profiles(*),doodle: doodles(*)')
    .order('created_at', { ascending: false })

  if (!data) {
    return <Card>Found no doodles!</Card>
  }

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
