'use client'

import { UploadButton } from '@uploadthing/react'
import { OurFileRouter } from '../../app/api/uploadthing/core'

import { useState } from 'react'

export function UploadButtonClient() {
  const [images, setImages] = useState<
    { fileUrl: string; fileKey: string }[] | undefined
  >([])

  return (
    <UploadButton<OurFileRouter>
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
