import { NavigationTopbarServer } from '@/components'
import clsx from 'clsx'
import { Theme } from '@radix-ui/themes'
import { Toaster } from 'react-hot-toast'
import '@radix-ui/themes/styles.css'
import './globals.css'
import { Metadata } from 'next' // if using TypeScript

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
          <footer className="p-5 text-center border-t-2 border-zinc-100 bg-white sticky top-[100%]">
            DivSplash | Made with ❤️
          </footer>
        </Theme>
      </body>
    </html>
  )
}
