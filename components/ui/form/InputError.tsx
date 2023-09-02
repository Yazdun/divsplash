'use client'

import { FC } from 'react'
import { InputErrorProps } from './Input.interface'
import { motion } from 'framer-motion'
import { MdOutlineNearbyError } from 'react-icons/md'

export const InputError: FC<InputErrorProps> = ({ message }) => {
  return (
    <motion.p
      className="absolute right-0 flex items-center gap-1 font-bold text-red-400 w-max"
      {...framerError}
    >
      <MdOutlineNearbyError className="mb-[0.2rem]" />
      <span>{message?.toString()}</span>
    </motion.p>
  )
}

const framerError = {
  initial: { opacity: 0, scale: 0.7 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.7 },
  transition: { duration: 0.2 },
}
