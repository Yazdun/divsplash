import React from 'react'
import Link from 'next/link'
import {
  AuthButtonServer,
  NavigationRoutesDesktop,
  NavigationRoutesMobile,
} from '@/components'

export const NavigationTopbarServer = () => {
  return (
    <div className="sticky top-0 z-50 py-3 bg-white border-b-2 border-zinc-100">
      <div className="container relative flex items-center justify-between">
        <Link href="/" className="font-black">
          <span className="text-zinc-300">{'< '}</span>
          {'DIVSPLASH'}
          <span className="text-zinc-300">{' />'}</span>
        </Link>

        <div className="flex items-center gap-5 text-sm">
          <NavigationRoutesDesktop />
          <AuthButtonServer />
          <NavigationRoutesMobile />
        </div>
      </div>
    </div>
  )
}
