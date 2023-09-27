import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { UserProfilePopoverClient } from '@/components/user'
import { AuthDialogClient } from '@/components/auth'
import { cookies } from 'next/headers'
import { Button } from '@radix-ui/themes'
import { FaArrowRightLong } from 'react-icons/fa6'

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
    <UserProfilePopoverClient role={user?.role} session={session} />
  ) : (
    <AuthDialogClient
      triggerComponent={
        <Button
          variant="solid"
          color="gray"
          highContrast
          className="flex items-center gap-3 shadow-2xl"
        >
          <FaArrowRightLong />
          <span>Login</span>
        </Button>
      }
    />
  )
}
