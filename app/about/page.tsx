import React from 'react'
import UNDERLINE from '@/assets/fun-underline.svg'
import VELP from '@/assets/profiles/velp.jpg'
import YAZ from '@/assets/profiles/yazdun.jpg'
import Image from 'next/image'
import { Separator, Text } from '@radix-ui/themes'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'DivSplash — About',
}

export default async function About() {
  return (
    <main className="container px-5 py-10 space-y-5">
      <div className="space-y-5 text-center lg:max-w-2xl lg:m-auto">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">About DivSplash</h1>
          <p className="font-bold">
            Welcome to DivSplash - Your Gateway to Creativity!
          </p>
        </div>
        <p>
          At DivSplash, we believe that every project deserves a touch of magic,
          and that&apos;s why we&apos;ve curated a treasure trove of fantastic
          doodles, just for you.
        </p>
        <div className="flex justify-center gap-5">
          <a
            href="https://twitter.com/velpcode"
            className="transition-all hover:scale-110"
            target="_blank"
          >
            <Image
              placeholder="blur"
              src={VELP}
              width={100}
              height={100}
              alt="velp"
              className="rounded-full shadow-4xl"
            />
          </a>
          <a
            href="https://twitter.com/Yazdun"
            target="_blank"
            className="transition-all hover:scale-110"
          >
            <Image
              placeholder="blur"
              src={YAZ}
              width={100}
              height={100}
              alt="yaz"
              className="rounded-full shadow-4xl"
            />
          </a>
        </div>
        <div>
          Brought to you by{' '}
          <a
            className="font-bold text-red-500"
            href="https://twitter.com/velpcode"
            target="_blank"
          >
            Velp
          </a>{' '}
          and{' '}
          <a
            className="font-bold text-red-500"
            href="https://twitter.com/Yazdun"
          >
            Yaz
          </a>
        </div>
      </div>
      <Separator size="4" />
      <h2 className="text-xl font-bold">Our Mission</h2>
      <p>
        Our mission is clear: to arm you with the most awesome resources for
        your designs and websites. We know that a great design can make all the
        difference, whether you&apos;re crafting a stunning website, a
        cutting-edge app, or a captivating piece of digital art.
      </p>
      <h2 className="text-xl font-bold">Our Commitment</h2>
      <p>
        We&apos;re committed to ensuring that every doodle you pick from
        DivSplash meets the highest standards of quality. Your satisfaction is
        our top priority, and that&apos;s why we offer lifetime support for all
        our resources. We want to be your creative partner, providing you with
        the tools you need to bring your vision to life.
      </p>
      <h2 className="text-xl font-bold">Open Source Forever</h2>
      <p>
        We believe in the power of community and collaboration. That&apos;s why
        we&apos;re proud to be an open-source platform, dedicated to sharing
        creativity far and wide. We invite you to join us on this journey, to
        contribute, and to be part of something bigger than yourself.
      </p>
      <p>
        Thank you for being a part of the DivSplash community. Together,
        let&apos;s turn your ideas into design masterpieces!
      </p>
      DivSplash Team
    </main>
  )
}
