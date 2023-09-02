'use client'

import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence } from 'framer-motion'
import { InputProps } from './Input.interface'
import { InputError } from './InputError'
import clsx from 'clsx'

export const Input: FC<InputProps> = ({
  id,
  type,
  placeholder,
  name,
  validation,
  label,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div
      className={clsx(
        'relative flex flex-col w-full gap-2 transition-colors',
        errors[name!]
          ? 'focus-within:border-red-600'
          : 'focus-within:border-zinc-500',
      )}
    >
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        className="w-full px-5 py-3 bg-transparent border-2 rounded-md text-zinc-400 placeholder:opacity-50 border-zinc-100 focus:outline-none"
        placeholder={placeholder}
        autoComplete="off"
        {...register(name!, validation)}
      />
      <AnimatePresence mode="wait" initial={false}>
        {errors[name!] && (
          <InputError
            message={errors[name!]!.message}
            key={errors[name!]!.message?.toString()}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
