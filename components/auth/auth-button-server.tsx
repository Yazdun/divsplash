import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { AuthButtonClient } from '@/components'
import { cookies } from 'next/headers'
import { ROUTES } from '@/constants'
import Link from 'next/link'
import { Button } from '@radix-ui/themes'

export const dynamic = 'force-dynamic'

export async function AuthButtonServer() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const { data: user } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session?.user.id)
    .single()

  return session ? (
    <Button asChild variant="solid" color="green">
      <Link
        href={
          user?.role === 'admin' ? ROUTES.ADMIN.DASHBOARD : ROUTES.ADMIN.USERS
        }
      >
        {user?.role === 'admin' ? 'Admin Panel' : 'Dashboard'}
      </Link>
    </Button>
  ) : (
    <AuthButtonClient role={user?.role} session={session} />
  )
}
