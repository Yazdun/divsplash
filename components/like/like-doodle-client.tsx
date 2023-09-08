import React from 'react'
import { BsHeart } from 'react-icons/bs'

export const LikeDoodleClient = ({ doodle }: { doodle: TDoodleWithStats }) => {
  return (
    <button className="flex items-center gap-1 px-3 py-1 text-sm border-2 rounded-xl border-zinc-100">
      <BsHeart />
      {doodle.likes}
    </button>
  )
}
