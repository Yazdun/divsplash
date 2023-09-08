'use client'

import React, { useState } from 'react'
import { Button, Dialog } from '@radix-ui/themes'
import Image from 'next/image'
import { PiDownloadSimpleBold } from 'react-icons/pi'
import { toast } from 'react-hot-toast'
import { ENDPOINT } from '@/constants/endpoint'
import { ImSpinner2 } from 'react-icons/im'
import { LikeDoodleClient } from '../like'

export const DoodleDetailsDialog = ({
  doodle,
}: {
  doodle: TDoodleWithStats
}) => {
  const [loading, setLoading] = useState(false)

  async function downloadImage() {
    const image = await fetch(doodle.fileUrl)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)

    const link = document.createElement('a')
    link.href = imageURL
    link.download = doodle.title
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDownload = async () => {
    setLoading(true)
    await fetch(`${ENDPOINT}/api/user/doodle/${doodle.id}/download`, {
      method: 'POST',
    }).then(res => {
      if (res.ok) {
        toast.success('Added to downloads')
        downloadImage()
        setLoading(false)
      } else {
        toast.error("Couldn't download doodle")
        setLoading(false)
      }
    })
  }

  return (
    <Dialog.Root>
      <div className="bg-white border-2 rounded-md border-zinc-100">
        <Dialog.Trigger>
          <button className="flex flex-col items-center justify-between w-full gap-2 p-5 text-center">
            <div className="h-[200px] w-full flex justify-center items-center">
              <Image
                src={doodle.fileUrl}
                alt="hello"
                width={200}
                height={200}
              />
            </div>
            <h2 className="font-bold">{doodle.title}</h2>
          </button>
        </Dialog.Trigger>
        <div className="px-5 py-3 border-t-2 border-zinc-100">
          <LikeDoodleClient />
        </div>
      </div>

      <Dialog.Content style={{ maxWidth: 400 }} className="m-5">
        <Dialog.Title>{doodle.title}</Dialog.Title>
        <div className="flex justify-center w-full p-5 border-2 border-dashed rounded-md">
          <Image src={doodle.fileUrl} alt="hello" width={200} height={200} />
        </div>

        <div className="flex justify-end gap-3 mt-5">
          <Dialog.Close>
            <Button variant="soft" size="3" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Button
            variant="solid"
            color="green"
            size="3"
            disabled={loading}
            onClick={() => {
              handleDownload()
            }}
          >
            {loading ? (
              <>
                <ImSpinner2 className="animate-spin" />
                Starting download
              </>
            ) : (
              <>
                <PiDownloadSimpleBold />
                Download
              </>
            )}
          </Button>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}
