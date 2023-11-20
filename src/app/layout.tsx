import type { Metadata } from 'next'

import Providers from './providers'

import './globals.css'
import { manrope } from './ui/fonts/font'

import Header from './ui/header/pages'
import Footer from './ui/footer/page'
import Navigationbar from './ui/components/navbar'
import MenuItems from './ui/components/menu-items'

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
      <body className={`${manrope.className} antialiased text-sm h-screen`}>
        <Providers>
          <div className='h-full flex flex-col'>
            <MenuItems/>
            <div className='grow'>
              {children}
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
