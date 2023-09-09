import { ROUTES } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { Button, Code, Text } from '@radix-ui/themes'
import UNDERLINE from '@/assets/fun-underline.svg'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[87vh] bg-gradient-to-b from-white via-white to-slate-200">
      <div className="flex flex-col items-center gap-5 p-5 text-center ">
        <h1 className="text-4xl font-black md:text-5xl">
          <span className="text-zinc-300">{'< '}</span>
          {'DIVSPLASH'}
          <span className="text-zinc-300">{' />'}</span>
        </h1>
        <div className="flex flex-col items-center justify-center font-medium">
          <p className="text-lg text-zinc-500">WASSUP DEVELOPERS.</p>
          <p className="flex gap-1 text-zinc-500">
            LET&apos;S BUILD SOME COOL STUFF WITH{' '}
            <strong className="text-zinc-700">ART</strong> AND
            <strong className="text-zinc-700">CODE.</strong>
          </p>
        </div>
        <Image src={UNDERLINE} alt="" />
        <div className="flex flex-wrap justify-center gap-3">
          <Button size="3" variant="solid" color="crimson">
            Download Doodles
          </Button>
          <Button variant="soft" color="crimson" size="3">
            Join DivSplash
          </Button>
        </div>
      </div>
    </div>
  )
}
