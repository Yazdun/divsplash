'use client'

import React from 'react'
import { Button, Dialog } from '@radix-ui/themes'
import { AiOutlinePlus } from 'react-icons/ai'
import { UploadImageDndClient } from '../upload-image'
import { FormProvider, useForm } from 'react-hook-form'
import { Input, titleValidation } from '../ui'

export const UploadDoodleDialog = () => {
  const methods = useForm()

  const handleSubmit = methods.handleSubmit(data => {
    console.log(data)
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
        <UploadImageDndClient />
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
                variant="solid"
                onClick={handleSubmit}
                className="flex items-center gap-3"
              >
                <AiOutlinePlus />
                Create Doodle
              </Button>
            </div>
          </form>
        </FormProvider>
      </Dialog.Content>
    </Dialog.Root>
  )
}
