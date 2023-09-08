import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { BsHeart } from 'react-icons/bs'

export const LikeDoodleClient = ({ doodle }: { doodle: TDoodleWithStats }) => {
  const handleLike = async () => {
    const supabase = createClientComponentClient<Database>()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (user) {
      if (doodle.user_has_liked_doodle) {
        await supabase
          .from('likes')
          .delete()
          .match({ user_id: user.id, doodle_id: doodle.id })
      } else {
        await supabase
          .from('likes')
          .insert({ user_id: user.id, doodle_id: doodle.id })
      }
    }
  }
  return (
    <button
      onClick={handleLike}
      className="flex items-center gap-1 px-3 py-1 text-sm border-2 rounded-xl border-zinc-100"
    >
      <BsHeart />
      {doodle.likes}
    </button>
  )
}
