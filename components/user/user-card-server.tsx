import { Avatar } from '@radix-ui/themes'
import { Session } from '@supabase/supabase-js'
import React from 'react'
import { AuthButtonSignOut } from '../auth'
import { Card } from '@/components/ui'

export const UserCardServer = ({ session }: { session: Session | null }) => {
  if (!session) return null

  return (
    <Card className="flex items-center justify-center gap-5 md:w-[300px] lg:max-w-sm lg:items-center lg:flex-col">
      <Avatar
        size="7"
        src={session.user.user_metadata.avatar_url}
        fallback={session.user.user_metadata.name.split('')[0]}
      />
      <div className="space-y-2 lg:text-center">
        <ul className="text-sm">
          <li className="flex gap-1">
            <span>Signed in as</span>
            <strong>{session.user.user_metadata.name}</strong>
          </li>
        </ul>
        <AuthButtonSignOut />
      </div>
    </Card>
  )
}
