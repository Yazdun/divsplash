import { NavigationTopbarServer } from '@/components'
import clsx from 'clsx'
import { Theme } from '@radix-ui/themes'
import { Toaster } from 'react-hot-toast'
import '@radix-ui/themes/styles.css'
import './globals.css'

export const dynamic = 'force-dynamic'

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
      <body className={clsx('text-neutral-700')}>
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{ style: { background: 'black', color: 'white' } }}
        />

        <Theme>
          <NavigationTopbarServer />
          <main className="h-[95vh]">{children}</main>
          <footer className="p-5 text-center border-t-2 border-slate-200 sticky top-[100%]">
            DivSplash | Made with ❤️
          </footer>
        </Theme>
      </body>
    </html>
  )
}
