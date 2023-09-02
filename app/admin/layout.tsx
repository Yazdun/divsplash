import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { Card, UserCardServer } from '@/components'
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
        <div className="md:w-[300px] w-full space-y-2">
          <UserCardServer session={session} />
          <Card as="ul" style={{ padding: 0 }} className="text-sm">
            <li>
              <Link
                className="flex items-center justify-between px-5 py-3 border-b-2 border-zinc-50 hover:bg-zinc-50"
                href={ROUTES.ADMIN.DASHBOARD}
              >
                Dashboard
                <RxDashboard />
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-between px-5 py-3 border-b-2 border-zinc-50 hover:bg-zinc-50"
                href={ROUTES.ADMIN.USERS}
              >
                Users
                <FiUsers />
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-between px-5 py-3 hover:bg-zinc-50"
                href={ROUTES.ADMIN.DOODLES}
              >
                Doodles
                <BsFolder />
              </Link>
            </li>
          </Card>
        </div>
        {children}
      </div>
    </main>
  )
}
