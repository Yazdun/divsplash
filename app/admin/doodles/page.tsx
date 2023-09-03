import { DoodlesTable, UploadDoodleDialog } from '@/components'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function Doodles() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: doodles } = await supabase.from('doodles').select()

  if (!doodles) return null

  return (
    <div className="flex flex-col items-end w-full gap-5">
      <UploadDoodleDialog />
      <DoodlesTable doodles={doodles.reverse()} />
    </div>
  )
}
