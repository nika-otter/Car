import { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from '@/components'


export const metadata: Metadata = {
    title: 'Cur Hub',
  description: 'Discover the best in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className="relative">{children}</body>
      <Footer/>
    </html>
  )
}
