'use client'

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine

import { UploadDropzone } from '@uploadthing/react'
import { OurFileRouter } from '../../app/api/uploadthing/core'

import { toast } from 'react-hot-toast'

export type FileResponse = { fileUrl: string; fileKey: string }

export function UploadImageDndClient({
  setFiles,
}: {
  setFiles: (files: FileResponse[] | undefined) => void
}) {
  return (
    <UploadDropzone<OurFileRouter>
      endpoint="imageUploader"
      onClientUploadComplete={res => {
        setFiles(res)
        toast.success('Upload Completed')
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        toast.error(`ERROR! ${error.message}`)
      }}
    />
  )
}
