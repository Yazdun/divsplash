'use client'

import React, { useState } from 'react'
import { FiUserPlus } from 'react-icons/fi'
import {
  Avatar,
  Button,
  Dialog,
  DropdownMenu,
  Separator,
} from '@radix-ui/themes'
import { BiLogoGoogle, BiUser } from 'react-icons/bi'
import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { HiLogout } from 'react-icons/hi'
import { ImSpinner8 } from 'react-icons/im'

export const Navigation = () => {
  const { data: session, status } = useSession()

  return (
    <div className="sticky top-0 z-50 py-3 bg-white shadow-sm border-zinc-100">
      <div className="container relative flex items-center justify-between">
        <Link href="/" className="font-medium">
          DivSplash
        </Link>

        {status === 'unauthenticated' && <SocialsLogin />}
        {status === 'authenticated' && <UserNavigation />}
        {status === 'loading' && (
          <ImSpinner8 className="my-2 text-2xl animate-spin" />
        )}
      </div>
    </div>
  )
}

export const UserNavigation = () => {
  const { data: session } = useSession()

  console.log(session)

  return (
    <DropdownMenu.Root dir="rtl">
      <DropdownMenu.Trigger>
        <button>
          <Avatar
            src={session?.user?.image || ''}
            fallback={session?.user?.name?.charAt(0) || 'u'}
          />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-[12rem]" sideOffset={20} size="2">
        <DropdownMenu.Item>
          <Link
            className="flex items-center justify-between w-full"
            href="/user/profile"
          >
            Profile
            <BiUser />
          </Link>
        </DropdownMenu.Item>

        <DropdownMenu.Separator />
        <DropdownMenu.Item color="red">
          <button
            onClick={() => signOut()}
            className="flex items-center justify-between w-full"
          >
            Logout
            <HiLogout />
          </button>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export const SocialsLogin = () => {
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    setLoading(true)
    signIn('google')
  }

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
            <Button size="4" onClick={handleLogin}>
              {loading ? (
                <ImSpinner8 className="animate-spin" />
              ) : (
                <BiLogoGoogle />
              )}
              Login with Google
            </Button>
          </li>
        </ul>
      </Dialog.Content>
    </Dialog.Root>
  )
}
