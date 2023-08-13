'use client'

import React from 'react'
import { FiUserPlus } from 'react-icons/fi'
import { Button, Dialog, Separator } from '@radix-ui/themes'
import { BiLogoGoogle } from 'react-icons/bi'

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
            <Button size="4">
              <BiLogoGoogle />
              Login with Google
            </Button>
          </li>
        </ul>
      </Dialog.Content>
    </Dialog.Root>
  )
}
