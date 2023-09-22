import { LandingHeroServer } from '@/components'
import { Metadata } from 'next' // if using TypeScript

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'DivSplash — Homepage ',
  description:
    'Snag some fantastic doodles for your websites, apps or designs!',
  openGraph: {
    url: 'https://www.divsplash.co/',
    siteName: 'DivSplash',

    images: [
      {
        url: 'https://www.divsplash.co/api/og/home',
        width: 1200,
        height: 630,
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
