import Link from 'next/link'
import React from 'react'
import { FiUserPlus } from 'react-icons/fi'
import { Button } from '@radix-ui/themes'

export const Navigation = () => {
  return (
    <div className="sticky top-0 z-50 py-3 bg-white shadow-sm border-zinc-100">
      <div className="container flex items-center justify-between ">
        <Link href="/" className="font-medium">
          DivSplash
        </Link>
        <Button variant="outline" size="3" color="indigo">
          <div className="flex items-center gap-2">
            <FiUserPlus className="mb-[0.07rem]" />
            Join DivSplash
          </div>
        </Button>
      </div>
    </div>
  )
}
