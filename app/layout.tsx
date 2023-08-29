import { Inter } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css'
import { NavigationServer } from '@/components'
import { Theme } from '@radix-ui/themes'
import { Toaster } from 'react-hot-toast'
import clsx from 'clsx'

export const metadata = {
  title: 'DivSplash — Homepage ',
  description: 'Welcome to DivSplash!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx('bg-zinc-50')}>
        <Toaster position="bottom-center" reverseOrder={false} />
        <Theme>
          <NavigationServer />
          {children}
        </Theme>
      </body>
    </html>
  )
}
