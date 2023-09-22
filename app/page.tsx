import { LandingHeroServer } from '@/components'
import { Metadata } from 'next' // if using TypeScript

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  openGraph: {
    url: 'https://www.divsplash.co',
    siteName: 'DivSplash',

    images: [
      {
        url: 'https://www.divsplash.co/api/og/home',
        width: 830,
        height: 420,
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
