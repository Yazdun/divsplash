import {
  Card,
  DownloadsTableServer,
  UserItemStatusServer,
  UsersTableServer,
} from '@/components'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { cookies } from 'next/headers'
import { MdOutlineFolderOff } from 'react-icons/md'

export const dynamic = 'force-dynamic'

export default async function Users() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data } = await supabase
    .from('downloads')
    .select('*, profile: profiles(*),doodle: doodles(*)')
    .order('created_at', { ascending: false })

  if (!data || data.length > 0) {
    return (
      <UserItemStatusServer
        icon={MdOutlineFolderOff}
        title="Users haven't downloaded any doodles yet"
        desc="Once someone download a doodle, it will appear here. Click on the below button to go to the doodles page."
        href="/doodles"
      />
    )
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
