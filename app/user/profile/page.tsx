import React from 'react'
import { User as UserProfile } from '@/components'
import { createClient } from '@supabase/supabase-js'

export default async function User() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      db: {
        schema: 'next_auth',
      },
    },
  )

  const { data } = await supabase.from('users').select('name')

  return (
    <div className="container mt-10 text-center">{JSON.stringify(data)}</div>
  )
}
