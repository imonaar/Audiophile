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
            {/* <Header /> */}
            <div className='grow grid gap-[120px] padding-x-mobile md:padding-x-tablet lg:padding-x-desktop pb-[120px] '>
              {children}
              <MainCardBottom />
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
