import { Card, DoodlesTable, UploadDoodleDialog } from '@/components'
import React from 'react'

export default function Doodles() {
  return (
    <div className="container flex flex-col items-end gap-5">
      <UploadDoodleDialog />
      <DoodlesTable />
    </div>
  )
}
