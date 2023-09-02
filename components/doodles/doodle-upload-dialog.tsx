'use client'

import React from 'react'
import { Button, Dialog } from '@radix-ui/themes'

export const UploadDoodleDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Upload Doodle</Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 600 }} className="m-5">
        <Dialog.Title>Upload Doodle</Dialog.Title>
      </Dialog.Content>
    </Dialog.Root>
  )
}
