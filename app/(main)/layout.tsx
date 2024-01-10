import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/partials/Navbar'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TravelBe',
  description: 'Cherish your life',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} overflow-x-hidden bg-primary-dob text-slate-50`}><Navbar />{children}</body>
    </html>
  )
}
