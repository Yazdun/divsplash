'use client'

import { ROUTES } from '@/constants'
import { Button } from '@radix-ui/themes'
import {
  createClientComponentClient,
  Session,
} from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import React from 'react'

export function AuthButtonClient({
  session,
  role,
}: {
  session: Session | null
  role: string | undefined
}) {
  const supabase = createClientComponentClient<Database>()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
  }

  return (
    <Button variant="solid" color="green" onClick={handleSignIn}>
      Login with Google
    </Button>
  )
}

export function AuthButtonSignOut() {
  const supabase = createClientComponentClient<Database>()
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <Button variant="solid" color="red" onClick={handleSignOut}>
      Sign Out
    </Button>
  )
}
