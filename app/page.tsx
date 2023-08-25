import Link from 'next/link'
import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { Button } from '@radix-ui/themes'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[87vh]">
      <div className="flex flex-col items-center gap-2 p-5 text-center">
        <h1 className="text-2xl font-bold md:text-3xl">Welcome to DivSplash</h1>
        <p>Free and cool doodles for your next project</p>
        <Button asChild size="3" color="indigo" variant="solid">
          <Link href="/doodles" className="flex items-center gap-1">
            <FiSearch className="text-lg" />
            Browse Doodles
          </Link>
        </Button>
      </div>
    </div>
  )
}
