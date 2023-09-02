import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'
import { Card } from '@/components'

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
    <Card as="ul" style={{ padding: 0 }} className="text-sm">
      {routes.map(route => {
        return (
          <li key={route.title}>
            <Link
              className="flex items-center justify-between px-5 py-3 border-b-2 border-zinc-50 hover:bg-zinc-50"
              href={route.href}
            >
              {route.title}
              <route.icon />
            </Link>
          </li>
        )
      })}
    </Card>
  )
}
