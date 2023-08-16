import './globals.css'


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
      <body className="relative">{children}</body>
    </html>
  )
}
