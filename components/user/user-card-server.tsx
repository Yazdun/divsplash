import { Avatar } from '@radix-ui/themes'
import { Session } from '@supabase/supabase-js'
import React from 'react'
import { AuthButtonSignOut } from '../auth'

export const UserCardServer = ({ session }: { session: Session | null }) => {
  if (!session) return null

  return (
    <div className="flex items-center justify-center max-w-lg gap-5 p-5 bg-white border-2 rounded-md lg:max-w-sm lg:items-center lg:flex-col border-zinc-100">
      <Avatar
        size="7"
        src={session.user.user_metadata.avatar_url}
        fallback={session.user.user_metadata.name.split('')[0]}
      />
      <div className="space-y-2 lg:text-center">
        <ul>
          <li>{session.user.user_metadata.name}</li>
          <li>{session.user.user_metadata.email}</li>
        </ul>
        <AuthButtonSignOut />
      </div>
    </div>
  )
}
