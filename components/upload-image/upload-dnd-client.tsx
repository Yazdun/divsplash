'use client'

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine

import { UploadButton, UploadDropzone } from '@uploadthing/react'
import { OurFileRouter } from '../../app/api/uploadthing/core'
import { toast } from 'react-hot-toast'

export type FileResponse = { fileUrl: string; fileKey: string }

export function UploadImageDndClient({
  setFiles,
}: {
  setFiles: (files: FileResponse[] | undefined) => void
}) {
  return (
    <div className="p-10 border-2 border-dashed">
      <UploadButton<OurFileRouter>
        className="mt-4 ut-button:bg-gray-950 ut-button:text-white ut-button:cursor-pointer ut-button:ut-readying:bg-black/20 ut-button:px-5 ut-button:py-2"
        content={{
          button({ ready, isUploading, uploadProgress }) {
            if (ready) return <div>Upload Doodle</div>

            return 'Getting Ready...'
          },
          allowedContent({ ready, fileTypes, isUploading, uploadProgress }) {
            if (!ready) return 'Please wait'
            if (isUploading) return `${uploadProgress}% is uploaded...`
            return `Let's upload some doodles baby 🎉`
          },
        }}
        endpoint="imageUploader"
        onClientUploadComplete={res => {
          setFiles(res)
          toast.success('Upload Completed')
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          toast.error(`ERROR! ${error.cause}`)
        }}
      />
    </div>
  )
}
