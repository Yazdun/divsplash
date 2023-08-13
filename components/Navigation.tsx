import Link from 'next/link'
import React from 'react'
import { SocialsLogin } from './SocialsLogin'

export const Navigation = () => {
  return (
    <div className="sticky top-0 z-50 py-3 bg-white shadow-sm border-zinc-100">
      <div className="container flex items-center justify-between ">
        <Link href="/" className="font-medium">
          DivSplash
        </Link>
        <SocialsLogin />
      </div>
    </div>
  )
}
