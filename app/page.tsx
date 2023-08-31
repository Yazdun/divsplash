import Link from 'next/link'
import React from 'react'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[87vh]">
      <div className="flex flex-col items-center gap-2 p-5 text-center">
        <h1 className="text-2xl font-bold md:text-3xl">
          🚧 App in Development 🚧
        </h1>
        <ul className="font-bold">
          <li>
            <Link
              className="flex justify-center p-2 text-center"
              href="/admin/dashboard"
            >
              - Protected Admin Dashboard
            </Link>
          </li>
          <li>
            <Link
              className="flex justify-center p-2 text-center"
              href="/admin/dashboard"
            >
              - Protected User Dashboard
            </Link>
          </li>
          <li>
            <Link
              className="flex justify-center p-2 text-center"
              href="/doodles"
            >
              - Public Doodles
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
