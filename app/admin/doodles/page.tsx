import { DoodlesTable, UploadDoodleDialog } from '@/components'
import React from 'react'

export default async function Doodles() {
  return (
    <div className="container flex flex-col items-end gap-5">
      <UploadDoodleDialog />
      <DoodlesTable />
    </div>
  )
}
