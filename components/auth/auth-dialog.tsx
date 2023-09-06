'use client'

import React from 'react'
import { Button, Dialog, Separator } from '@radix-ui/themes'
import { AiOutlinePlus } from 'react-icons/ai'
import { AuthButtonClient } from './auth-button-client'

export const AuthDialogClient = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button
          variant="solid"
          color="gray"
          highContrast
          className="flex items-center gap-3"
        >
          <AiOutlinePlus />
          Join DivSplash
        </Button>
      </Dialog.Trigger>

      <Dialog.Content
        style={{ maxWidth: 500, margin: 20 }}
        className="m-5 space-y-4"
      >
        <div className="text-center">
          <Dialog.Title>Welcome to DivSplash 👋</Dialog.Title>
          <Dialog.Description>
            To get started, please sign in with your social accounts.
          </Dialog.Description>
        </div>
        <Separator orientation="horizontal" size="4" />
        <div className="flex justify-center">
          <AuthButtonClient />
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}
