import { ROUTES } from '@/constants'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import UNDRAW from '@/assets/two-lines.svg'
import UNDRAW_UNDERLINE from '@/assets/fun-underline-black.svg'
import Image from 'next/image'

export const LandingShipServer = () => {
  return (
    <section className="container flex flex-col items-center gap-5 px-5 py-20 text-center lg:mt-10">
      <div className="relative">
        <h2 className="text-2xl font-black lg:text-4xl">
          <Image
            src={UNDRAW}
            alt=""
            className="absolute hidden lg:flex -top-4 -right-14"
          />
          Ship your sites with style
        </h2>
        <Image
          src={UNDRAW_UNDERLINE}
          alt=""
          className="m-auto mt-2 lg:hidden"
        />
      </div>
      <p className="lg:max-w-xl lg:text-lg">
        Here at DivSplash, our goal is to make design easy and fun for you. We
        think every project should have a special touch, so we&apos;ve gathered
        a bunch of amazing doodles, just for you.
      </p>
      <Button size="3" variant="solid" color="gray" highContrast asChild>
        <Link href={ROUTES.PUBLIC.DOODLES}>Explore DivSplash</Link>
      </Button>
    </section>
  )
}
