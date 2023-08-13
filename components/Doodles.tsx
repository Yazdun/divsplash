'use client'

import React from 'react'
import { Button, Dialog, Flex } from '@radix-ui/themes'
import Image from 'next/image'
import { PiDownloadSimpleBold } from 'react-icons/pi'
import { toast } from 'react-hot-toast'

export const DoodleDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <li>
          <button className="flex justify-center w-full p-5 bg-white rounded-md shadow-sm">
            <Image src="/doodle.png" alt="hello" width={200} height={200} />
          </button>
        </li>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 400 }}>
        <Dialog.Title>Download Doodle</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          <div className="flex justify-center w-full p-5 border-2 border-dashed rounded-md bg-neutral-50">
            <Image src="/doodle.png" alt="hello" width={200} height={200} />
          </div>
        </Dialog.Description>

        <div className="flex justify-end gap-3">
          <Dialog.Close>
            <Button variant="soft" size="3" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Button
            variant="solid"
            color="teal"
            size="3"
            onClick={() => toast.error('Feature not available yet')}
          >
            <PiDownloadSimpleBold />
            Download
          </Button>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}
