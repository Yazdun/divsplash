'use client'

import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
} from 'react-icons/ai'
import { PiWarningBold } from 'react-icons/pi'

type Props = {
  variant?: 'success' | 'error' | 'warning' | 'info'
  message?: string
}

const variations = [
  {
    variant: 'success',
    icon: <AiOutlineCheckCircle className="text-2xl text-success" />,
  },
  {
    variant: 'error',
    icon: <AiOutlineCloseCircle className="text-2xl text-red-500" />,
  },
  {
    variant: 'warning',
    icon: <PiWarningBold className="text-2xl text-orange-500" />,
  },
  {
    variant: 'info',
    icon: <AiOutlineInfoCircle className="text-2xl text-blue-400" />,
  },
]

export function ToastVariation({ message, variant = 'info' }: Props) {
  const { icon, variant: title } =
    variations.find(v => v.variant === variant) || variations[0]

  return (
    <div className="space-y-1 text-primary-dark">
      <div className="flex items-center gap-1 text-lg">
        {icon}
        <span>{}</span>
      </div>
      {message && <p>{message}</p>}
    </div>
  )
}
