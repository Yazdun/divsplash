import { Card, UsersTableServer } from '@/components'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function Users() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data } = await supabase
    .from('downloads')
    .select('*, profile: profiles(*)')
    .order('created_at', { ascending: false })

  if (!data) return null

  return (
    <div className="w-full text-center">{JSON.stringify(data, null, 2)}</div>
  )
}
