import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { AuthButtonSignOut } from '@/components'

export const dynamic = 'force-dynamic'

export default async function User() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/')
  }

  return (
    <div className="container mt-10 text-center">
      <AuthButtonSignOut />
    </div>
  )
}
