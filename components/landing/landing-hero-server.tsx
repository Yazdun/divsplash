import React from 'react'
import { ROUTES } from '@/constants'
import Link from 'next/link'
import { Button, Code, Text } from '@radix-ui/themes'
import UNDERLINE from '@/assets/fun-underline.svg'
import Image from 'next/image'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
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
    <div className="flex items-center justify-center h-[94vh] bg-white">
      <div className="flex flex-col items-center gap-5 p-5 text-center ">
        <h1 className="text-4xl font-black md:text-5xl">
          <span className="text-zinc-300">{'< '}</span>
          {'DIVSPLASH'}
          <span className="text-zinc-300">{' />'}</span>
        </h1>
        <div className="flex flex-col items-center justify-center font-medium">
          <p className="text-zinc-500 md:text-lg">
            Your go-to <strong className="text-black">Open Source</strong> app
            for snagging fantastic doodles
          </p>
        </div>
        <Image src={UNDERLINE} alt="" />
        <div className="flex flex-wrap justify-center gap-3">
          <Button size="3" variant="solid" color="blue" asChild>
            <Link href={ROUTES.PUBLIC.DOODLES}>Download Doodles</Link>
          </Button>
          {session ? (
            <Button variant="soft" color="blue" size="3" asChild>
              <Link
                href={
                  user?.role === 'admin'
                    ? ROUTES.ADMIN.DASHBOARD
                    : ROUTES.USER.DASHBOARD
                }
              >
                {user?.role === 'admin'
                  ? 'View Admin Panel'
                  : 'Go To Dashboard'}
              </Link>
            </Button>
          ) : (
            <AuthDialogClient
              triggerComponent={
                <Button variant="soft" color="blue" size="3">
                  Join DivSplash
                </Button>
              }
            />
          )}
        </div>
      </div>
    </div>
  )
}
