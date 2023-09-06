import { Montserrat } from 'next/font/google'
import { NavigationTopbarServer } from '@/components'
import clsx from 'clsx'
import { Theme } from '@radix-ui/themes'
import { Toaster } from 'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css'
import '@uploadthing/react/styles.css'
import './globals.css'
import '@radix-ui/themes/styles.css'
import { ToastContainer } from 'react-toastify'

export const dynamic = 'force-dynamic'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'DivSplash — Homepage ',
  description: 'Welcome to DivSplash!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(montserrat.className, 'bg-zinc-50')}>
        <Toaster position="bottom-center" reverseOrder={false} />
        <ToastContainer
          position="bottom-right"
          icon={false}
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          pauseOnHover
          theme="dark"
        />
        <Theme>
          <NavigationTopbarServer />
          {children}
        </Theme>
      </body>
    </html>
  )
}
