import React from 'react'
import Link from 'next/link'
import { AuthButtonServer } from '@/components'
import { TbGuitarPick } from 'react-icons/tb'

export const Navigation = () => {
  return (
    <div className="sticky top-0 z-50 py-3 bg-white border-b-2 border-zinc-100">
      <div className="container relative flex items-center justify-between">
        <Link href="/" className="font-medium">
          <TbGuitarPick className="text-2xl" />
        </Link>

        <div className="flex items-center gap-5 text-sm">
          <Link href="/user/dashboard">User dashboard</Link>
          <Link href="/admin/dashboard">Admin dashboard</Link>
          <AuthButtonServer />
        </div>
      </div>
    </div>
  )
}
