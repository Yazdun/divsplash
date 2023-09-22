import React from 'react'
import { ROUTES } from '@/constants'
import Link from 'next/link'
import { Button } from '@radix-ui/themes'
import DOOMSCROLL from '@/assets/doomscroll.png'
import ARROW from '@/assets/arched-arrow.svg'
import Image from 'next/image'
import {
  Session,
  createServerComponentClient,
} from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthDialogClient } from '../auth'

export async function LandingHeroServer() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const { data: user } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session?.user.id)
    .single()

  return (
    <div className="flex items-center justify-center h-[87vh]">
      <div className="container flex flex-col items-center p-5 lg:gap-10 lg:flex-row lg:justify-center">
        <div className="hidden p-10 w-sm rounded-3xl shadow-4xl -rotate-3 lg:flex">
          <Image
            src={DOOMSCROLL}
            width={300}
            height={300}
            alt="doomscroll dude"
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col items-center gap-5 p-5 text-center lg:items-start lg:text-left lg:justify-between">
          <div className="relative">
            <h1 className="relative text-4xl font-black md:text-5xl -rotate-3 lg:rotate-0">
              DivSplash.
            </h1>
            <div className="absolute top-0 rotate-[120deg] -right-14 lg:hidden">
              <Image src={ARROW} alt="" />
            </div>
          </div>
          <div className="p-10 w-sm rounded-3xl shadow-4xl rotate-3 lg:hidden">
            <Image
              width={200}
              height={200}
              src={DOOMSCROLL}
              alt="doomscroll dude"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col items-center justify-center font-medium">
            <p className="text-zinc-500 md:text-lg">
              Snag some fantastic doodles for your websites, apps or designs.
            </p>
          </div>
          <Actions session={session} userRole={user?.role} />
        </div>
      </div>
    </div>
  )
}

const Actions = ({
  session,
  userRole,
}: {
  session: Session | null
  userRole: string | undefined
}) => {
  return (
    <div className="relative flex flex-wrap justify-center gap-3">
      <div className="absolute -bottom-20 rotate-[-140deg] left-0 hidden lg:flex">
        <Image src={ARROW} alt="" width={50} height={50} />
      </div>
      <Button size="3" variant="solid" color="gray" highContrast asChild>
        <Link href={ROUTES.PUBLIC.DOODLES}>Explore DivSplash</Link>
      </Button>
      {session ? (
        <Button variant="soft" color="gray" size="3" asChild>
          <Link
            href={
              userRole === 'admin'
                ? ROUTES.ADMIN.DASHBOARD
                : ROUTES.USER.DASHBOARD
            }
          >
            {userRole === 'admin' ? 'View Admin Panel' : 'Go To Dashboard'}
          </Link>
        </Button>
      ) : (
        <AuthDialogClient
          triggerComponent={
            <Button variant="soft" color="gray" size="3">
              Join DivSplash
            </Button>
          }
        />
      )}
    </div>
  )
}
