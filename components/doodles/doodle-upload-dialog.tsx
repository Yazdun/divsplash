'use client'

import React from 'react'
import { Button, Dialog } from '@radix-ui/themes'
import { AiOutlinePlus } from 'react-icons/ai'
import { UploadImageDndClient } from '../upload-image'

export const UploadDoodleDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="solid" className="flex items-center gap-3">
          <AiOutlinePlus />
          Create new Doodle
        </Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 600, margin: 20 }} className="m-5">
        <Dialog.Title>Create Doodle</Dialog.Title>
        <UploadImageDndClient />
      </Dialog.Content>
    </Dialog.Root>
  )
}
