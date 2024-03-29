import Nav from '@/components/Common/Nav'
import Footers from '@/components/Common/Footer'
import TopButton from '@/components/Common/TopButton'
import DarkModeProviders from '@/components/Common/DarkMode/DarkModeProvider'
import DarkMode from '@/components/Common/DarkMode/DarkMode'
import 'slick-carousel/slick/slick.css'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './globals.css'
import ReactQuery from './Util/ReactQuery'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <DarkModeProviders>
          <Nav />
          <ToastContainer />
          <ReactQuery>{children}</ReactQuery>
          <Footers />
          <TopButton />
          <DarkMode />
        </DarkModeProviders>
      </body>
    </html>
  )
}
