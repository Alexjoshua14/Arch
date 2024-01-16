import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arch',
  description: 'Imaginary Architectural Design Firm',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
