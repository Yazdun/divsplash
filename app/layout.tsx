import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components'

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
        <Navigation />
        {children}
      </body>
    </html>
  )
}
