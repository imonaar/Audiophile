import type { Metadata } from 'next'

import Providers from './providers'

import './globals.css'
import { manrope } from './ui/fonts/font'

import Header from './ui/header/pages'
import Footer from './ui/footer/page'
import MainCardBottom from './ui/components/main-card-bottom'

export const metadata: Metadata = {
  title: 'Audiophile',
  description: 'Audiophile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased text-sm h-screen relative`}>
        <Providers>
          <div className='h-full flex flex-col'>
            <Header />
            {/* <div className="w-full bg-[#979797] block h-[1px] md:mx-10 lg:mx-40">.</div> */}
            <div className='grow grid gap-[120px] pb-[120px] '>
              {children}
              <div className='padding-x-mobile md:padding-x-tablet lg:padding-x-desktop'>
                <MainCardBottom />
              </div>
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
