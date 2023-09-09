import { ROUTES } from '@/constants'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import RAWR from '@/assets/rawr.png'
import Image from 'next/image'

export const LandingAboutClient = () => {
  return (
    <div className="h-screen py-20 border-t-2 bg-gradient-to-b bg-zinc-50">
      <div className="container lg:flex">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="text-3xl font-bold">What is Divplash?!</h2>
          <p>
            DivSplash is your go-to open source app for snagging fantastic
            doodles, all completely free! You&apos;re sure to find the perfect
            doodle for your creative projects.
          </p>
          <Image
            src={RAWR}
            className="lg:hidden"
            alt="dude typing on his computer"
            placeholder="blur"
          />
          <Button size="3" variant="solid" color="blue" asChild>
            <Link href={ROUTES.PUBLIC.DOODLES}>Grab a Doodle</Link>
          </Button>
        </div>
        <Image
          src={RAWR}
          className="hidden"
          alt="dude typing on his computer"
          placeholder="blur"
        />
      </div>
    </div>
  )
}
