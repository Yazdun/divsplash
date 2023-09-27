import { Separator } from '@radix-ui/themes'
import dayjs from 'dayjs'
import React from 'react'

export const dynamic = 'force-dynamic'

export default async function PrivacyPolicy() {
  return (
    <main className="container px-5 py-10 space-y-5">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">DivSplash Privacy Policy</h1>
        Effective Date: {dayjs().format('YYYY MMMM DD')}
      </div>
      <Separator size="4" />
      <h2 className="text-xl font-bold">Welcome to DivSplash!</h2>
      <p>
        At DivSplash, we are committed to ensuring the privacy and security of
        your personal information. This Privacy Policy outlines how we collect,
        use, and protect the information you provide while using our website.
      </p>
      <Separator size="4" />
      <h2 className="text-xl font-bold">1. Information We Collect</h2>
      <p>We collect the following user data:</p>
      <ul className="ml-8 list-disc">
        <li>Name</li>
        <li>Email</li>

        <li>Payment information</li>
      </ul>
      <p>
        Additionally, we may collect non-personal data through web cookies. For
        more details, please refer to our Cookie Policy.
      </p>
      <Separator size="4" />
      <h2 className="text-xl font-bold">2. Purpose of Data Collection</h2>
      <p>
        The information we collect is used solely for the purpose of order
        processing and providing you with the services offered on our platform.
      </p>
      <Separator size="4" />
      <h2 className="text-xl font-bold">3. Data Sharing</h2>
      <p>
        We do not share any of the collected data with third parties. Your
        information is kept strictly confidential.
      </p>
      <Separator size="4" />
      <h2 className="text-xl font-bold">4. Children&apos;s Privacy</h2>
      <p>
        We do not knowingly collect or solicit any information from individuals
        under the age of 13. If you believe that a child under the age of 13 has
        provided us with personal information, please contact us immediately.
      </p>
      <Separator size="4" />
      <h2 className="text-xl font-bold">5. Updates to the Privacy Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Users will be notified
        of any changes via email.
      </p>
      <p>
        If you have any questions or concerns about our Privacy Policy, please
        don&apos;t hesitate to contact us via Twitter at{' '}
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
        . Thank you for using DivSplash!.
      </p>
      <p>Thank you for using DivSplash!</p>
      DivSplash Team - {dayjs().format('YYYY MMMM DD')}
    </main>
  )
}
