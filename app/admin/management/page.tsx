import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { AuthButtonSignOut } from '@/components'
import { Avatar } from '@radix-ui/themes'

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
    <div className="container p-5">
      Admin
      <div className="flex items-center justify-center max-w-sm gap-5 p-5 m-auto bg-white border-2 rounded-md border-zinc-100">
        <Avatar
          size="7"
          src={session.user.user_metadata.avatar_url}
          fallback={session.user.user_metadata.name.split()[0]}
        />
        <div className="space-y-2">
          <ul>
            <li>{session.user.user_metadata.name}</li>
            <li>{session.user.user_metadata.email}</li>
          </ul>
          <AuthButtonSignOut />
        </div>
      </div>
    </div>
  )
}
