import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { AuthButtonSignOut, UserCardServer } from '@/components'
import { Avatar } from '@radix-ui/themes'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'DivSplash — Dashboard',
  description: 'Welcome to DivSplash!',
}

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/')
  }
  return (
    <main className="container p-5 space-y-5">
      <h1 className="text-lg font-bold text-center lg:text-left">
        DivSplash User Panel 💻
      </h1>
      <div className="flex flex-col max-w-lg gap-5 m-auto lg:max-w-full lg:flex-row lg:m-0">
        <UserCardServer session={session} />
        {children}
      </div>
    </main>
  )
}
