import Nav from '@/components/Common/Nav'
import Footers from '@/components/Common/Footer'
import TopButton from '@/components/Common/TopButton'

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
        <Nav />
        <ToastContainer />
        <ReactQuery>{children}</ReactQuery>
        <Footers />
        <TopButton />
      </body>
    </html>
  )
}
