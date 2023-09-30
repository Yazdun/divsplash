import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import {
  NavigationCardServer,
  TNavigationCardServer,
} from '@/components/navigation'
import { Card } from '@/components/ui'
import { UserCardServer } from '@/components/user'
import { ROUTES } from '@/constants'
import { BsHeart } from 'react-icons/bs'
import { FiDownloadCloud } from 'react-icons/fi'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'DivSplash — Dashboard',
  description: 'Welcome to DivSplash!',
}

const userRoutes: TNavigationCardServer[] = [
  {
    title: 'Downloaded Doodles',
    href: ROUTES.USER.DASHBOARD,
    icon: FiDownloadCloud,
  },
  {
    title: 'Liked Doodles',
    href: ROUTES.USER.LIKES,
    icon: BsHeart,
  },
]

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
      <h1 className="text-lg font-bold text-slate-700">
        DivSplash User Panel 🪴
      </h1>
      <div className="w-full gap-5 lg:flex md:items-start">
        <Card
          style={{ padding: 0 }}
          className="w-full lg:max-w-[250px] mb-5 lg:sticky top-20"
        >
          <UserCardServer session={session} />
          <NavigationCardServer routes={userRoutes} />
        </Card>
        {children}
      </div>
    </main>
  )
}
