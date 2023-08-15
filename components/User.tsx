'use client'

import { Avatar } from '@radix-ui/themes'
import { useSession } from 'next-auth/react'
import React from 'react'

export const User = () => {
  const { data: session } = useSession()

  return (
    <div>
      <h1 className="mb-3 text-3xl font-bold">Welcome {session?.user?.name}</h1>
      <p>User profile will be built here</p>
    </div>
  )
}
