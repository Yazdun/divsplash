'use client'

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import '@uploadthing/react/styles.css'

import { UploadDropzone } from '@uploadthing/react'
import { OurFileRouter } from '../api/uploadthing/core'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [images, setImages] = useState<
    { fileUrl: string; fileKey: string }[] | undefined
  >([])

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
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
    </main>
  )
}
