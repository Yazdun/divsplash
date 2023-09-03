'use client'

import { ENDPOINT } from '@/constants/endpoint'
import { Dialog, Button } from '@radix-ui/themes'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { ImSpinner2 } from 'react-icons/im'
import { RiDeleteBin7Line } from 'react-icons/ri'

export const DoodleDeleteDialog = ({ doodle }: { doodle: TDoodle }) => {
  const [open, setOpen] = React.useState(false)
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const handleDelete = async () => {
    setLoading(true)
    await fetch(`${ENDPOINT}/api/doodles/${doodle.id}`, {
      method: 'DELETE',
    }).then(res => {
      if (res.ok) {
        setLoading(false)
        router.refresh()
        toast.success('Doodle deleted successfully')
        setOpen(false)
      }
    })
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
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
          <Button
            disabled={loading}
            onClick={handleDelete}
            variant="solid"
            color="red"
          >
            {loading ? (
              <>
                <ImSpinner2 className="animate-spin" />
                Deleting Doodle
              </>
            ) : (
              <>
                <RiDeleteBin7Line />
                Create Doodle
              </>
            )}
          </Button>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}
