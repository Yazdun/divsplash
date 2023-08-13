import React from 'react'
import { FiUserPlus } from 'react-icons/fi'
import { Button } from '@radix-ui/themes'

export const SocialsLogin = () => {
  return (
    <Button variant="outline" size="3" color="indigo">
      <div className="flex items-center gap-2">
        <FiUserPlus className="mb-[0.07rem]" />
        Join DivSplash
      </div>
    </Button>
  )
}
