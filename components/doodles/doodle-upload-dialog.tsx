'use client'

import React from 'react'
import { Button, Dialog } from '@radix-ui/themes'
import { AiOutlinePlus } from 'react-icons/ai'

export const UploadDoodleDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="solid" className="flex items-center gap-3">
          <AiOutlinePlus />
          Create Doodle
        </Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 600, margin: 20 }} className="m-5">
        <Dialog.Title>Create Doodle</Dialog.Title>
      </Dialog.Content>
    </Dialog.Root>
  )
}
