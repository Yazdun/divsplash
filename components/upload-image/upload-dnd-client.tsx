'use client'

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine

import { UploadDropzone } from '@uploadthing/react'
import { OurFileRouter } from '../../app/api/uploadthing/core'

import { useState } from 'react'

export function UploadImageDndClient() {
  const [images, setImages] = useState<
    { fileUrl: string; fileKey: string }[] | undefined
  >([])

  return (
    <UploadDropzone<OurFileRouter>
      endpoint="imageUploader"
      onClientUploadComplete={res => {
        // Do something with the response
        console.log('Files: ', res)
        alert('Upload Completed')
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`)
      }}
    />
  )
}
