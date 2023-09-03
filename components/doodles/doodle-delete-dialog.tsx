'use client'

import { Dialog, Button } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

export const DoodleDeleteDialog = ({ doodle }: { doodle: TDoodle }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="soft" color="red">
          Delete
        </Button>
      </Dialog.Trigger>
      <Dialog.Content
        className="space-y-5"
        style={{ maxWidth: 450, margin: 20 }}
      >
        <Dialog.Title className="text-center">
          Delete {doodle.title} ?
        </Dialog.Title>
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex items-center justify-center w-32 h-32 border-2 border-dashed border-zinc-100 rounded-xl">
            <Image
              width={100}
              height={100}
              src={doodle.fileUrl}
              alt={doodle.title}
              className="rounded-md bg-slate-100"
            />
          </div>
          <p>
            Are you sure? This doodle will no longer be accessible and any
            existing downloads will be removed.
          </p>
        </div>

        <div className="flex justify-center gap-3">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Button variant="solid" color="red">
            Delete Doodle
          </Button>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}
