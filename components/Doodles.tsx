'use client'

import React from 'react'
import { Button, Dialog, Flex } from '@radix-ui/themes'
import Image from 'next/image'
import { PiDownloadSimpleBold } from 'react-icons/pi'

export const DoodleDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <li>
          <button className="flex justify-center w-full p-5 border rounded-md bg-neutral-50">
            <Image src="/doodle.png" alt="hello" width={200} height={200} />
          </button>
        </li>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Download Doodle</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          <div className="flex justify-center w-full p-5 border-2 border-dashed rounded-md bg-neutral-50 ">
            <Image src="/doodle.png" alt="hello" width={200} height={200} />
          </div>
        </Dialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Button variant="solid" color="teal">
            <PiDownloadSimpleBold />
            Download
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
