import Link from 'next/link'
import React from 'react'
import { FiSearch } from 'react-icons/fi'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-4xl font-bold">Welcome to DivSplash</h1>
        <p>Free and cool doodles for your next project</p>
        <Link
          href="/doodles"
          className="flex items-center gap-1 px-5 py-3 text-white bg-blue-500 rounded-lg"
        >
          <FiSearch className="text-lg" />
          Browse Doodles
        </Link>
      </div>
    </div>
  )
}
