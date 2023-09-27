import React from 'react'
import dayjs from 'dayjs'
import { Separator } from '@radix-ui/themes'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function TermsAndServices() {
  return (
    <main className="container px-5 py-10 space-y-5">
      <h1 className="text-2xl font-bold">DivSplash Terms of Services</h1>
      <Separator size="4" />
      <p>Effective Date: {dayjs().format('YYYY MMMM DD')}</p>

      <p>
        {`These Terms of Service ("Terms") govern your use of the DivSplash
        website (the "Website") and any related services provided by DivSplash
        ("we", "us", or "our"). By accessing or using the Website, you agree to
        be bound by these Terms.`}
      </p>

      <Separator size="4" />

      <h2 className="text-xl font-bold">1. Description of Service</h2>

      <p>
        DivSplash is an open-source platform that provides users with the
        ability to download doodles and illustrations for use in their design
        projects.
      </p>

      <Separator size="4" />

      <h2 className="text-xl font-bold">2. Ownership</h2>

      <p>
        You may download the doodles and illustrations from DivSplash without
        any copyright issues.
      </p>

      <Separator size="4" />

      <h2 className="text-xl font-bold">3. User Data</h2>

      <p>
        In order to provide our services, we collect and store the following
        user data:
      </p>

      <ul className="ml-8 list-disc">
        <li>Name</li>
        <li>Email</li>
        <li>Payment information</li>
      </ul>
      <p>
        For more information on how we handle and protect your data, please
        refer to our{' '}
        <Link href="/privacy-policy" className="font-bold">
          Privacy Policy
        </Link>
        .
      </p>

      <Separator size="4" />

      <h2 className="text-xl font-bold">4. Non-Personal Data</h2>

      <p>
        We may also collect non-personal data through the use of web cookies.
        For more information, please refer to our{' '}
        <Link href="/privacy-policy" className="font-bold">
          Privacy Policy
        </Link>
        .
      </p>

      <Separator size="4" />

      <h2 className="text-xl font-bold">5. Governing Law</h2>

      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of Canada.
      </p>

      <Separator size="4" />

      <h2 className="text-xl font-bold">6. Updates to the Terms</h2>

      <p>
        We may update these Terms from time to time. You will be notified of any
        changes via email. If you have any questions or concerns regarding these
        Terms, please contact us via Twitter at{' '}
        <a
          href="https://twitter.com/Yazdun"
          target="_blank"
          className="font-bold"
        >
          @Yazdun
        </a>{' '}
        or{' '}
        <a
          href="https://twitter.com/velpcode"
          target="_blank"
          className="font-bold"
        >
          @Velpcode
        </a>
        . Thank you for using DivSplash!
      </p>

      <p>DivSplash Team {dayjs().format('YYYY MMMM DD')}</p>
    </main>
  )
}
