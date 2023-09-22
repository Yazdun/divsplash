import { LandingHeroServer } from '@/components'
import { Metadata } from 'next' // if using TypeScript

export const dynamic = 'force-dynamic'

// export const metadata: Metadata = {
//   title: 'DivSplash — Homepage ',
//   description:
//     'Snag some fantastic doodles for your websites, apps or designs!',
//   openGraph: {
//     url: 'https://www.divsplash.co',
//     siteName: 'DivSplash',

//     images: [
//       {
//         url: 'https://www.divsplash.co/api/og/home',
//         width: 1200,
//         height: 630,

//       },
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
// }

export const metadata: Metadata = {
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
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
