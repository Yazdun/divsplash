import React from 'react'
import Link from 'next/link'
import {
  NavigationRoutesDesktop,
  NavigationRoutesMobile,
} from '@/components/navigation'
import { AuthButtonServer } from '@/components/auth'

export const NavigationTopbarServer = () => {
  return (
    <div className="sticky top-0 z-50 py-3 bg-white border-b-2 shadow-sm border-zinc-100">
      <div className="container relative flex items-center justify-between">
        <Link href="/" className="font-black">
          DivSplash.
        </Link>

        <div className="flex items-center gap-5 text-sm">
          <div className="hidden md:flex">
            <NavigationRoutesDesktop />
          </div>
          <AuthButtonServer />
          <NavigationRoutesMobile />
        </div>
      </div>
    </div>
  )
}
