'use client'
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Providers = (props: Props) => {
  return <SessionProvider>{props.children}</SessionProvider>
}
