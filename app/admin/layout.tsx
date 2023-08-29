import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { AuthButtonSignOut } from '@/components'
import { Avatar } from '@radix-ui/themes'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'DivSplash — Admin',
  description: 'Welcome to DivSplash!',
}

export default async function AdminLayout({
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

  const { data: user } = await supabase.from('profiles').select('*').single()

  if (user?.role !== 'admin') {
    return redirect('/')
  }

  return (
    <main className="container p-5 space-y-5">
      <h1 className="text-lg font-bold text-center lg:text-left">
        DivSplash Admin Panel 💻
      </h1>
      {children}
    </main>
  )
}
