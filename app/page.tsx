import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-4xl font-bold">Welcome to DivSplash</h1>
        <p>Free cool illustrations for your next project</p>
        <Link
          href="#"
          className="flex px-5 py-3 text-white bg-black rounded-lg"
        >
          Browse Illustrations
        </Link>
      </div>
    </div>
  )
}
