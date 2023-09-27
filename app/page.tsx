import { LandingHeroServer } from '@/components/landing'
import { LandingShipServer } from '@/components/landing/landing-ship-server'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main>
      <LandingHeroServer />
      <LandingShipServer />
    </main>
  )
}
