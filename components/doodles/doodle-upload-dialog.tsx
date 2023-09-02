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

      <Dialog.Content style={{ maxWidth: 600, margin: 20 }} className="m-5">
        <Dialog.Title>Create Doodle</Dialog.Title>
        <UploadImageDndClient />
        <FormProvider {...methods}>
          <form onSubmit={e => e.preventDefault()}>
            <Input {...titleValidation} />
            <div className="flex justify-end gap-5">
              <Button onClick={handleSubmit} type="submit">
                Create
              </Button>
              <Dialog.Close>
                <Button type="submit">Cancel</Button>
              </Dialog.Close>
            </div>
          </form>
        </FormProvider>
      </Dialog.Content>
    </Dialog.Root>
  )
}
