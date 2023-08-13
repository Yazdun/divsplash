'use client'

import React from 'react'
import { FiUserPlus } from 'react-icons/fi'
import { Avatar, Button, Dialog, Separator } from '@radix-ui/themes'
import { BiLogoGoogle } from 'react-icons/bi'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

export const Navigation = () => {
  const { data: session, status } = useSession()

  return (
    <div className="sticky top-0 z-50 py-3 bg-white shadow-sm border-zinc-100">
      <div className="container flex items-center justify-between ">
        <Link href="/" className="font-medium">
          DivSplash
        </Link>
        {status === 'unauthenticated' && <SocialsLogin />}
        {status === 'authenticated' && <UserNavigation />}
      </div>
    </div>
  )
}

export const UserNavigation = () => {
  const { data: session } = useSession()

  console.log(session)

  return (
    <div>
      <Avatar
        src={session?.user?.image || ''}
        fallback={session?.user?.name?.charAt(0) || 'u'}
      />
    </div>
  )
}

export const SocialsLogin = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="outline" size="3" color="indigo">
          <div className="flex items-center gap-2">
            <FiUserPlus className="mb-[0.07rem]" />
            Socials Login
          </div>
        </Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Socials Login</h1>
          <p>Choose your social account to continute</p>
        </div>
        <Separator my="4" size="4" />
        <ul className="flex flex-col items-center">
          <li>
            <Button size="4" onClick={() => signIn('google')}>
              <BiLogoGoogle />
              Login with Google
            </Button>
          </li>
        </ul>
      </Dialog.Content>
    </Dialog.Root>
  )
}
