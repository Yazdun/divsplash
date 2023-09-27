import { UploadDoodleDialog } from '@/components/doodles'
import { DoodlesTableServer } from '@/components/doodles'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function Doodles() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data } = await supabase
    .from('doodles')
    .select('*, likes(user_id), downloads(user_id)')
    .order('created_at', { ascending: false })

  if (!data) return null

  const doodles =
    data?.map(doodle => ({
      ...doodle,
      likes: doodle.likes.length,
      downloads: doodle.downloads.length,
    })) ?? []

  return (
    <div className="flex flex-col items-end w-full gap-5">
      <UploadDoodleDialog />
      <DoodlesTableServer doodles={doodles} />
    </div>
  )
}
