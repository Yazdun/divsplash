import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { AuthButtonSignOut } from '@/components'
import { Avatar } from '@radix-ui/themes'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'DivSplash',
  description: 'Welcome to DivSplash Babyyy!',
}

export default async function RootLayout({
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
    <main className="container flex flex-col max-w-lg gap-5 p-5 lg:max-w-[1000px] lg:flex-row">
      <div className="flex items-center justify-center max-w-lg gap-5 p-5 bg-white border-2 rounded-md lg:max-w-sm lg:items-center lg:flex-col border-zinc-100">
        <Avatar
          size="7"
          src={session.user.user_metadata.avatar_url}
          fallback={session.user.user_metadata.name.split()[0]}
        />
        <div className="space-y-2 lg:text-center">
          <ul>
            <li>{session.user.user_metadata.name}</li>
            <li>{session.user.user_metadata.email}</li>
          </ul>
          <AuthButtonSignOut />
        </div>
      </div>
      {children}
    </main>
  )
}
