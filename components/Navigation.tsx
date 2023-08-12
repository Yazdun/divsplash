import Link from 'next/link'
import React from 'react'
import { RiDiscordLine } from 'react-icons/ri'
import { Button } from '@radix-ui/themes'

export const Navigation = () => {
  return (
    <div className="sticky top-0 py-3 bg-white border-b-2 border-zinc-100">
      <div className="container flex items-center justify-between ">
        <Link href="/" className="font-bold">
          DivSplash
        </Link>
        <Button variant="ghost" asChild size="3" color="blue">
          <a href="#" className="flex items-center gap-1 font-medium">
            <RiDiscordLine className="text-2xl" />
            Discord
          </a>
        </Button>
      </div>
    </div>
  )
}
