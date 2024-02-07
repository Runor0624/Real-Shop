import Nav from '@/components/Common/Nav'
import Footers from '@/components/Common/Footer'
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
        <ReactQuery>{children}</ReactQuery>
        <Footers />
      </body>
    </html>
  )
}
