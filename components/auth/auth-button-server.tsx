import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { AuthDialogClient } from '@/components'
import { cookies } from 'next/headers'
import { ROUTES } from '@/constants'
import Link from 'next/link'
import { Button } from '@radix-ui/themes'
import { AiOutlinePlus } from 'react-icons/ai'

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
    <Button asChild variant="surface" highContrast color="gray">
      <Link
        href={
          user?.role === 'admin'
            ? ROUTES.ADMIN.DASHBOARD
            : ROUTES.USER.DASHBOARD
        }
      >
        {user?.role === 'admin' ? 'Admin Panel' : 'Dashboard'}
      </Link>
    </Button>
  ) : (
    <AuthDialogClient
      triggerComponent={
        <Button
          variant="solid"
          color="gray"
          highContrast
          className="flex items-center gap-3"
        >
          <AiOutlinePlus />
          Join DivSplash
        </Button>
      }
    />
  )
}
