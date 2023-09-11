'use client'

import {
  Session,
  createClientComponentClient,
} from '@supabase/auth-helpers-nextjs'
import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export const LikeDoodleClient = ({ doodle }: { doodle: TDoodleWithStats }) => {
  const [isLiked, setIsLiked] = useState(doodle.user_has_liked_doodle)
  const [likes, setLikes] = useState(doodle.likes)
  const router = useRouter()

  const handleLike = async () => {
    const supabase = createClientComponentClient<Database>()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (user) {
      if (isLiked) {
        setIsLiked(false)
        setLikes(prev => prev - 1)
        await supabase
          .from('likes')
          .delete()
          .match({ user_id: user.id, doodle_id: doodle.id })
      } else {
        setIsLiked(true)
        setLikes(prev => prev + 1)
        await supabase
          .from('likes')
          .insert({ user_id: user.id, doodle_id: doodle.id })
      }
    }
  }
  return (
    <button
      onClick={async () => {
        await handleLike()
        router.refresh()
      }}
      className={clsx(
        'flex overflow-hidden items-center gap-1 px-3 py-1 text-sm border-2  rounded-xl border-zinc-100',
      )}
    >
      {isLiked ? <BsHeartFill className="text-rose-500" /> : <BsHeart />}
      <AnimatePresence initial={false} mode="wait">
        {isLiked ? (
          <motion.span
            {...motionProps}
            key="liked"
            className="font-bold text-rose-500"
          >
            {likes}
          </motion.span>
        ) : (
          <motion.span {...motionProps} key="notLiked">
            {likes}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}

const motionProps = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}
