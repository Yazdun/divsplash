import { NavigationTopbarServer } from '@/components'
import clsx from 'clsx'
import { Button, Theme } from '@radix-ui/themes'
import { Toaster } from 'react-hot-toast'
import '@radix-ui/themes/styles.css'
import './globals.css'
import { Metadata } from 'next' // if using TypeScript
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export function generateMetadata(): Metadata {
  return {
    title: 'DivSplash',
    description:
      'Snag some fantastic doodles for your websites, apps or designs!',

    openGraph: {
      url: 'https://www.divsplash.co',
      siteName: 'DivSplash',
      images: [
        {
          url: 'https://divsplash.co/api/og/home',
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  }
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
          <main className="min-h-[95vh]">{children}</main>
          <footer className="border-t-2 p-5 space-y-2 text-center border-zinc-100 bg-white sticky top-[100%]">
            <p className="font-bold">DivSplash | Made with ❤️</p>
            <ul className="flex flex-wrap justify-center gap-3">
              <li>
                <Button asChild variant="ghost" color="gray">
                  <Link href="/terms">Terms of Service</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="ghost" color="gray">
                  <Link href="/about">About</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="ghost" color="gray">
                  <Link href="/privacy">Privacy Policy</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="ghost" color="gray">
                  <Link href="/doodles">Doodles</Link>
                </Button>
              </li>
            </ul>
          </footer>
        </Theme>
      </body>
    </html>
  )
}
