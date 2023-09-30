import { NavigationTopbarServer } from '@/components/navigation'
import clsx from 'clsx'
import { Button, Theme } from '@radix-ui/themes'
import { Toaster } from 'react-hot-toast'
import '@radix-ui/themes/styles.css'
import './globals.css'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="DivSplash" />
        <meta
          property="og:description"
          content="Snag some fantastic doodles for your websites, apps or designs!"
        />
        <meta property="og:url" content="https://divsplash.co" />
        <meta property="og:site_name" content="DivSplash" />
        <meta property="og:image" content="https://www.divsplash.co/og.png" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://divsplash.co" />
        <meta name="twitter:title" content="DivSplash" />
        <meta
          name="twitter:description"
          content="Snag some fantastic doodles for your websites, apps or designs!"
        />
        <meta name="twitter:image" content="https://www.divsplash.co/og.png" />
        <meta name="next-size-adjust" />
      </head>
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
                  <Link href="/tos">Terms of Service</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="ghost" color="gray">
                  <Link href="/about">About</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="ghost" color="gray">
                  <Link href="/privacy-policy">Privacy Policy</Link>
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
