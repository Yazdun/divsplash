import React from 'react'
import { AuthDialogClient } from '../auth'
import Image from 'next/image'

export const DoodleAuthDialog = ({ doodle }: { doodle: TDoodle }) => {
  return (
    <AuthDialogClient
      title="Sorry to interrupt! 🥸"
      description="You need to be signed in to download this doodle."
      triggerComponent={
        <button className="flex flex-col items-center justify-between w-full gap-2 p-5 text-center bg-white border-2 rounded-md border-zinc-100">
          <div className="h-[200px] w-full flex justify-center items-center">
            <Image src={doodle.fileUrl} alt="hello" width={200} height={200} />
          </div>
          <h2 className="font-bold">{doodle.title}</h2>
        </button>
      }
    />
  )
}
