'use client'

import React, { useState } from 'react'
import { Button, Dialog } from '@radix-ui/themes'
import Image from 'next/image'
import { PiDownloadSimpleBold } from 'react-icons/pi'
import { toast } from 'react-hot-toast'

export const DoodleDetailsDialog = ({ doodle }: { doodle: TDoodle }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className="flex flex-col items-center justify-between w-full gap-2 p-5 text-center bg-white border-2 rounded-md border-zinc-100">
          <div className="h-[200px] w-full flex justify-center items-center">
            <Image src={doodle.fileUrl} alt="hello" width={200} height={200} />
          </div>
          <h2 className="font-bold">{doodle.title}</h2>
        </button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 400 }} className="m-5">
        <Dialog.Title>{doodle.title}</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          <div className="flex justify-center w-full p-5 border-2 border-dashed rounded-md">
            <Image src={doodle.fileUrl} alt="hello" width={200} height={200} />
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
            onClick={() => {
              toast.error('Feature not implemented yet')
            }}
          >
            <PiDownloadSimpleBold />
            Download
          </Button>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}
