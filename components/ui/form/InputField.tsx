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
        'relative flex flex-col items-start w-full gap-1 transition-colors',
      )}
    >
      <label className="font-bold" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={clsx(
          'w-full px-5 py-3 bg-transparent border-2 rounded-md placeholder:opacity-50 border-zinc-100 focus:outline-none',
          errors[name!]
            ? 'focus-within:border-red-400'
            : 'focus-within:border-zinc-800',
        )}
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
