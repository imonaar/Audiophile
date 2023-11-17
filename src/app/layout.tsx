import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Providers from './providers'

import './globals.css'
import { manrope } from './ui/fonts/font'

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
      <body className={`${manrope.className} antialiased text-sm`}>
        <Providers>
          <div className=''>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
