import React from 'react'
import Link from 'next/link'
import { AuthButtonServer } from './auth-button-server'

export const Navigation = () => {
  return (
    <div className="sticky top-0 z-50 py-3 bg-white border-b-2 border-zinc-100">
      <div className="container relative flex items-center justify-between">
        <Link href="/" className="font-medium">
          DivSplash
        </Link>

        <AuthButtonServer />
      </div>
    </div>
  )
}
