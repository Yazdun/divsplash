import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { AuthButtonClient } from './auth-button-client'
import { cookies } from 'next/headers'

export async function AuthButtonServer() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return <AuthButtonClient session={session} />
}
