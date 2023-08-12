import { Inter } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css'
import { Navigation } from '@/components'
import { Theme } from '@radix-ui/themes'

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
      <body className={inter.className}>
        <Theme>
          <Navigation />
          {children}
        </Theme>
      </body>
    </html>
  )
}
