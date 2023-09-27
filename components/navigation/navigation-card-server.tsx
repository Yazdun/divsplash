import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

export type TNavigationCardServer = {
  title: string
  href: string
  icon: IconType
}

export const NavigationCardServer = ({
  routes,
}: {
  routes: TNavigationCardServer[]
}) => {
  return (
    <ul className="text-sm">
      {routes.map(route => {
        return (
          <li key={route.title} className="border-t-2 border-zinc-50">
            <Link
              className="flex items-center justify-between px-5 py-3 transition-all hover:bg-zinc-50"
              href={route.href}
            >
              {route.title}
              <route.icon />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
