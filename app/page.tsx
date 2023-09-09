import { LandingAboutClient, LandingHeroServer } from '@/components'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <>
      <LandingHeroServer />
      <LandingAboutClient />
    </>
  )
}
