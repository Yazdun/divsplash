'use client'

import React, { useState } from 'react'
import { Badge, Button, Dialog } from '@radix-ui/themes'
import { AiOutlinePlus } from 'react-icons/ai'
import { FileResponse, UploadImageDndClient } from '../upload-image'
import { FormProvider, useForm } from 'react-hook-form'
import { Input, titleValidation } from '../ui'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { ENDPOINT } from '@/constants/endpoint'
import { ImSpinner2 } from 'react-icons/im'

export const UploadDoodleDialog = () => {
  const methods = useForm()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const [files, setFiles] = useState<FileResponse[] | undefined>(undefined)

  const handleSubmit = methods.handleSubmit(async data => {
    if (files) {
      setLoading(true)
      await fetch(`${ENDPOINT}/api/admin/doodles`, {
        method: 'POST',
        body: JSON.stringify({
          fileKey: files[0].fileKey,
          fileUrl: files[0].fileUrl,
          title: data.title,
        }),
      }).then(res => {
        if (res.ok) {
          router.refresh()
          toast.success('Doodle created successfully')
          setFiles(undefined)
          methods.reset()
          setLoading(false)
        }
      })
    } else if (!files) {
      toast.error('Please upload an image')
    }
  })

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="solid" className="flex items-center gap-3">
          <AiOutlinePlus />
          Create new Doodle
        </Button>
      </Dialog.Trigger>

      <Dialog.Content
        style={{ maxWidth: 600, margin: 20 }}
        className="m-5 space-y-4"
      >
        <Dialog.Title>Create Doodle</Dialog.Title>
        <UploadImageDndClient setFiles={setFiles} />
        {files && (
          <Badge color="green" variant="soft">
            Doodle file has been stored
          </Badge>
        )}
        <FormProvider {...methods}>
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <Input {...titleValidation} />
            <div className="flex justify-end gap-2">
              <Dialog.Close>
                <Button type="submit" variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
              <Button
                disabled={loading}
                variant="solid"
                onClick={handleSubmit}
                className="flex items-center gap-3"
              >
                {loading ? (
                  <>
                    <ImSpinner2 className="animate-spin" />
                    Creating Doodle
                  </>
                ) : (
                  <>
                    <AiOutlinePlus />
                    Create Doodle
                  </>
                )}
              </Button>
            </div>
          </form>
        </FormProvider>
      </Dialog.Content>
    </Dialog.Root>
  )
}
