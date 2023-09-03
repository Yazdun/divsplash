import { Montserrat } from 'next/font/google'
import { NavigationTopbarServer } from '@/components'
import { Theme } from '@radix-ui/themes'
import { Toaster } from 'react-hot-toast'
import clsx from 'clsx'
import './globals.css'
import '@radix-ui/themes/styles.css'

export const dynamic = 'force-dynamic'

const montserrat = Montserrat({ subsets: ['latin'] })

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
      <body className={clsx(montserrat.className, 'bg-zinc-50')}>
        <Toaster position="bottom-center" reverseOrder={false} />
        <Theme>
          <NavigationTopbarServer />
          {children}
        </Theme>
      </body>
    </html>
  )
}
