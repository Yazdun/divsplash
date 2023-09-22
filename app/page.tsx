import { LandingHeroServer } from '@/components'
import { Metadata } from 'next' // if using TypeScript

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  openGraph: {
    title: 'DivSplash',
    url: 'https://www.divsplash.co/',
    siteName: 'DivSplash',
    images: [
      {
        url: 'https://www.divsplash.co/api/og/home',
        width: 1200,
        height: 630,
      },
      {
        url: 'https://www.divsplash.co/api/og/home',
        width: 1200,
        height: 630,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <LandingHeroServer />
    </>
  )
}
