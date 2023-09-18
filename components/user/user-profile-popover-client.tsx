'use client'

import { Avatar, Button, Popover, Separator, Slider } from '@radix-ui/themes'
import React, { useState } from 'react'
import { Session } from '@supabase/supabase-js'
import Link from 'next/link'
import {
  AiOutlineClose,
  AiOutlinePoweroff,
  AiOutlineUser,
} from 'react-icons/ai'
import { HiOutlineChatBubbleBottomCenter } from 'react-icons/hi2'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants'

export const UserProfilePopoverClient = ({
  session,
  role,
}: {
  session: Session
  role: string | undefined
}) => {
  const supabase = createClientComponentClient<Database>()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger>
        <button>
          <Avatar
            size="2"
            src={session.user.user_metadata.avatar_url}
            fallback={session.user.user_metadata.name.split('')[0]}
            radius="full"
          />
        </button>
      </Popover.Trigger>
      <Popover.Content align="end" style={{ width: 300, padding: 0 }}>
        <div className="flex justify-between p-5">
          <div className="flex items-center gap-5">
            <Avatar
              size="5"
              src={session.user.user_metadata.avatar_url}
              fallback={session.user.user_metadata.name.split('')[0]}
            />
            <div>
              <p>{session.user.user_metadata.name}</p>
              <p className="text-sm text-zinc-400">
                {session.user.user_metadata.email}
              </p>
            </div>
          </div>
          <Popover.Close>
            <Button size="1" variant="ghost">
              <AiOutlineClose />
            </Button>
          </Popover.Close>
        </div>
        <Separator orientation="horizontal" size="4" />
        <ul>
          <li className="transition-all border-b border-zinc-700 text-zinc-400 hover:text-white">
            <Link
              onClick={() => setOpen(prev => !prev)}
              className="flex items-center justify-between p-5"
              href={
                role === 'admin'
                  ? ROUTES.ADMIN.DASHBOARD
                  : ROUTES.USER.DASHBOARD
              }
            >
              {role === 'admin' ? 'Admin Panel' : 'Dashboard'}
              <AiOutlineUser className="text-xl" />
            </Link>
          </li>
          <li className="transition-all border-b text-zinc-400 hover:text-white border-zinc-700">
            <Link
              className="flex items-center justify-between p-5"
              onClick={() => setOpen(prev => !prev)}
              href={ROUTES.USER.DASHBOARD}
            >
              Your Quizzes
              <HiOutlineChatBubbleBottomCenter className="text-xl" />
            </Link>
          </li>
          <li className="transition-all text-rose-400 hover:bg-rose-950/10">
            <button
              onClick={handleSignOut}
              className="flex items-center justify-between w-full p-5"
            >
              Logout
              <AiOutlinePoweroff className="text-xl" />
            </button>
          </li>
        </ul>
      </Popover.Content>
    </Popover.Root>
  )
}
