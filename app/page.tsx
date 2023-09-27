import {
  LandingHeroServer,
  LandingShipServer,
  LandingFeaturesServer,
  LandingQaClient,
} from '@/components/landing'
import Image from 'next/image'
import VELP from '@/assets/profiles/velp.jpg'
import YAZ from '@/assets/profiles/yazdun.jpg'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main>
      <LandingHeroServer />
      <LandingShipServer />
      <div className="container">
        <LandingFeaturesServer />
      </div>
      <div className="container px-5 py-10">
        <LandingQaClient />
      </div>
      <div className="flex flex-col items-center gap-5 my-10">
        <div className="flex justify-center gap-5">
          <a
            href="https://twitter.com/velpcode"
            className="transition-all hover:scale-110"
            target="_blank"
          >
            <Image
              placeholder="blur"
              src={VELP}
              width={100}
              height={100}
              alt="velp"
              className="rounded-full shadow-4xl"
            />
          </a>
          <a
            href="https://twitter.com/Yazdun"
            target="_blank"
            className="transition-all hover:scale-110"
          >
            <Image
              placeholder="blur"
              src={YAZ}
              width={100}
              height={100}
              alt="yaz"
              className="rounded-full shadow-4xl"
            />
          </a>
        </div>
        <div>
          Brought to you by{' '}
          <a
            className="font-bold text-blue-500"
            href="https://twitter.com/velpcode"
            target="_blank"
          >
            Velp
          </a>{' '}
          and{' '}
          <a
            className="font-bold text-blue-500"
            href="https://twitter.com/Yazdun"
          >
            Yaz
          </a>
        </div>
      </div>
    </main>
  )
}
