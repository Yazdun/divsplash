import { Card, UsersTableServer } from '@/components'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function Users() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: profiles } = await supabase.from('profiles').select()

  if (!profiles) return null

  return (
    <div className="w-full text-center">
      <UsersTableServer profiles={profiles} />
    </div>
  )
}
