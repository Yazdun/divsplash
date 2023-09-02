import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { Card, NavigationCardServer, UserCardServer } from '@/components'
import type { TNavigationCardServer } from '@/components'
import Link from 'next/link'
import { RxDashboard } from 'react-icons/rx'
import { FiUsers } from 'react-icons/fi'
import { BsFolder } from 'react-icons/bs'
import { ROUTES } from '@/constants'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'DivSplash — Admin',
  description: 'Welcome to DivSplash!',
}

const adminRoutes: TNavigationCardServer[] = [
  {
    title: 'Dashboard',
    href: ROUTES.ADMIN.DASHBOARD,
    icon: RxDashboard,
  },
  {
    title: 'Users',
    href: ROUTES.ADMIN.USERS,
    icon: FiUsers,
  },
  {
    title: 'Doodles',
    href: ROUTES.ADMIN.DOODLES,
    icon: BsFolder,
  },
]

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
        DivSplash Admin Panel 🦁
      </h1>
      <div className="flex flex-col max-w-lg gap-5 m-auto lg:max-w-full lg:flex-row lg:m-0 lg:items-start">
        <Card style={{ padding: 0 }} className="w-full lg:max-w-[250px]">
          <UserCardServer session={session} />
          <NavigationCardServer routes={adminRoutes} />
        </Card>
        {children}
      </div>
    </main>
  )
}
