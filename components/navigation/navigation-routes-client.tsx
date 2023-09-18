'use client'

import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { useClickAway } from 'react-use'
import { useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import { BiHomeAlt2, BiParty } from 'react-icons/bi'
import { Pivot as Hamburger } from 'hamburger-react'
import { BsBalloon } from 'react-icons/bs'
import { TbBrandGithub } from 'react-icons/tb'
import { ROUTES } from '@/constants'

const routes = [
  {
    shortTitle: 'Home',
    longTitle: 'Homepage',
    href: '/',
    Icon: BiHomeAlt2,
  },
  {
    shortTitle: 'Doodles',
    longTitle: 'Browse Doodles',
    href: '/doodles',
    Icon: BiParty,
  },
  {
    shortTitle: 'About',
    longTitle: 'What is DivSplash',
    href: '/about',
    Icon: BsBalloon,
  },
  {
    shortTitle: 'GitHub',
    longTitle: 'GitHub',
    href: ROUTES.EXTERNAL.GITHUB,
    Icon: TbBrandGithub,
    target: '_blank',
  },
]

export const NavigationRoutesDesktop = () => {
  const pathname = usePathname()

  return (
    <ul className="flex items-center gap-5">
      {routes.map(route => {
        const isActive = pathname === route.href
        const { Icon } = route
        return (
          <li key={route.shortTitle}>
            <Button
              asChild
              variant="ghost"
              highContrast
              color={isActive ? 'blue' : 'gray'}
            >
              <Link href={route.href} target={route.target || ''}>
                <Icon className="mb-[0.05rem]" />
                <span>{route.shortTitle}</span>
              </Link>
            </Button>
          </li>
        )
      })}
    </ul>
  )
}

export const NavigationRoutesMobile = () => {
  const [isOpen, setOpen] = useState(false)
  const pathname = usePathname()
  const ref = useRef(null)

  useClickAway(ref, () => setOpen(false))

  return (
    <div ref={ref} className="z-50 md:hidden">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            {...framerMenu}
            className="fixed left-0 right-0 top-[4.4rem] p-5 bg-white border-b-2 border-b-zinc-200"
          >
            <ul className="grid gap-2">
              {routes.map((route, idx) => {
                const isActive = pathname === route.href
                const { Icon } = route

                return (
                  <motion.li
                    {...framerMenuItem(idx)}
                    key={route.longTitle}
                    className="w-full"
                  >
                    <Link
                      target={route.target || ''}
                      onClick={() => setOpen(prev => !prev)}
                      className={clsx(
                        'flex items-center justify-between w-full p-5 rounded-xl',
                        isActive
                          ? 'bg-zinc-100 text-blue-600 pointer-events-none'
                          : '',
                      )}
                      href={route.href}
                    >
                      <span className="flex gap-1 text-lg">
                        {route.longTitle}
                      </span>
                      <Icon className="text-xl" />
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const framerMenu = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
}

const framerMenuItem = (delay: number) => {
  return {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 0.1 + delay / 10,
    },
  }
}
