'use client'

import React, { ReactNode } from 'react'
import { Dialog, Separator } from '@radix-ui/themes'
import { AuthButtonClient } from './auth-button-client'

export const AuthDialogClient = ({
  title = 'Welcome to DivSplash 👋',
  description = 'To get started, please sign in with your social accounts.',
  triggerComponent,
}: {
  title?: string
  description?: string
  triggerComponent: ReactNode
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{triggerComponent}</Dialog.Trigger>
      <Dialog.Content
        style={{ maxWidth: 500, margin: 20 }}
        className="py-10 space-y-4"
      >
        <div className="text-center">
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Description>{description}</Dialog.Description>
        </div>
        <Separator orientation="horizontal" size="4" />
        <div className="flex justify-center">
          <AuthButtonClient />
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}
