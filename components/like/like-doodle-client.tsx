import React from 'react'
import { BsHeart } from 'react-icons/bs'

export const LikeDoodleClient = ({ doodle }: { doodle: TDoodleWithStats }) => {
  return (
    <div className="flex items-center gap-1">
      <BsHeart />
      {doodle.likes}
    </div>
  )
}
