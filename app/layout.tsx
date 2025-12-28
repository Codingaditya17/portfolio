import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Aditya Patel - Portfolio',
  description: 'Personal portfolio website showcasing projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

