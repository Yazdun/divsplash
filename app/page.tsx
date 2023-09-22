import { LandingHeroServer } from '@/components'
import { Metadata } from 'next' // if using TypeScript

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'DivSplash — Homepage ',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga quibusdam itaque illum sapiente, accusantium cumque voluptatum! Quibusdam, ipsa libero. voluptatum! Quibusdam, ipsa libero.',
  openGraph: {
    title: 'DivSplash — Homepage',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga quibusdam itaque illum sapiente, accusantium cumque voluptatum! Quibusdam, ipsa libero. voluptatum! Quibusdam, ipsa libero.',
    url: 'https://www.divsplash.co',
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
