import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { Card, NavigationCardServer, UserCardServer } from '@/components'
import type { TNavigationCardServer } from '@/components'
import { RxDashboard } from 'react-icons/rx'
import { FiDownloadCloud, FiUsers } from 'react-icons/fi'
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
  {
    title: 'Downloads',
    href: ROUTES.ADMIN.DOWNLOADS,
    icon: FiDownloadCloud,
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

  const { data: user } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .single()

  if (user?.role !== 'admin') {
    return redirect('/')
  }

  return (
    <main className="container p-5 space-y-5">
      {/* I had to use flex box instead of text align, because of uploadthing css has weird effect on this element! */}
      <h1 className="text-lg font-bold">DivSplash Admin Panel 🦁</h1>
      <div className="max-w-lg gap-5 md:max-w-full lg:flex md:items-start">
        <Card
          style={{ padding: 0 }}
          className="w-full lg:max-w-[250px] mb-5 sticky top-20"
        >
          <UserCardServer session={session} />
          <NavigationCardServer routes={adminRoutes} />
        </Card>
        {children}
      </div>
    </main>
  )
}
