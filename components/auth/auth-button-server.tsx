import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { AuthButtonClient } from '@/components'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export async function AuthButtonServer() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const { data: user } = await supabase.from('profiles').select('*').single()

  return <AuthButtonClient role={user?.role} session={session} />
}
