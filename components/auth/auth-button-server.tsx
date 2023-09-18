import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { AuthDialogClient, UserProfilePopoverClient } from '@/components'
import { cookies } from 'next/headers'
import { Button } from '@radix-ui/themes'
import { AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'

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
          className="flex items-center gap-3"
        >
          <AiOutlinePlus />
          <span className="hidden md:flex">Join DivSplash</span>
          <span className="flex md:hidden">Sign Up</span>
        </Button>
      }
    />
  )
}
