import React from 'react'
import { AuthDialogClient } from '../auth'
import Image from 'next/image'
import clsx from 'clsx'
import { BsHeart } from 'react-icons/bs'

export const DoodleAuthDialog = ({ doodle }: { doodle: TDoodleWithLikes }) => {
  return (
    <AuthDialogClient
      title="Sorry to interrupt! 🥸"
      description={`You need to be signed in to download ${doodle.title}.`}
      triggerComponent={
        <button className="w-full transition-all bg-white border-2 border-white shadow-sm rounded-xl hover:border-slate-200">
          <div className="flex flex-col items-center justify-between w-full gap-2 p-5 text-center ">
            <div className="h-[200px] w-full flex justify-center items-center">
              <Image
                src={doodle.fileUrl}
                alt="hello"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="flex items-center justify-between px-5 py-2 text-sm">
            <h2 className="font-bold">{doodle.title}</h2>
            <div
              className={
                'flex overflow-hidden items-center gap-1 px-3 py-1 text-sm border-2  rounded-xl border-zinc-100'
              }
            >
              <BsHeart />
              {doodle.likes}
            </div>
          </div>
        </button>
      }
    />
  )
}
