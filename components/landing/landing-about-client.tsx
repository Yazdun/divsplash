import { ROUTES } from '@/constants'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import RAWR from '@/assets/rawr.png'
import RAWR_REVERSE from '@/assets/rawr-reverse.png'
import ARROW from '@/assets/fun-arrow.svg'
import Image from 'next/image'

export const LandingAboutClient = () => {
  return (
    <div className="py-20 border-t-2 bg-gradient-to-b bg-zinc-50">
      <div className="container md:gap-5 md:flex md:items-center md:justify-between">
        <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left md:pr-20">
          <h2 className="text-3xl font-bold">What is Divplash?!</h2>

          <div className="relative max-w-[350px] md:hidden">
            <Image src={ARROW} alt="" className="absolute top-0 right-12" />
            <Image
              src={RAWR}
              alt="dude typing on his computer"
              placeholder="blur"
            />
          </div>
          <p>
            DivSplash is your go-to open source app for snagging fantastic
            doodles, all completely free! You&apos;re sure to find the perfect
            doodle for your creative projects.
          </p>
          <Button size="3" variant="solid" color="blue" asChild>
            <Link href={ROUTES.PUBLIC.DOODLES}>Grab a Doodle</Link>
          </Button>
        </div>
        <Image
          src={RAWR_REVERSE}
          width={340}
          className="hidden md:flex"
          alt="dude typing on his computer"
          placeholder="blur"
        />
      </div>
    </div>
  )
}
