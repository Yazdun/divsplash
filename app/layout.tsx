import { Inter } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css'
import { Navigation } from '@/components'
import { Theme } from '@radix-ui/themes'
import { Toaster } from 'react-hot-toast'
import clsx from 'clsx'
import { Providers } from '@/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DivSplash',
  description: 'Welcome to DivSplash Babyyy!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-zinc-50')}>
        <Providers>
          <Toaster position="bottom-center" reverseOrder={false} />
          <Theme>
            <Navigation />
            {children}
          </Theme>
        </Providers>
      </body>
    </html>
  )
}
