'use client'

import {
  createClientComponentClient,
  Session,
} from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export function AuthButtonClient({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      },
    })
  }

  return session ? (
    <Link href="/user/profile">Profile</Link>
  ) : (
    <button onClick={handleSignIn}>Login</button>
  )
}

export function AuthButtonSignOut() {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return <button onClick={handleSignOut}>SignOut</button>
}
