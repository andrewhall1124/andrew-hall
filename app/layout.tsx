import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Andrew Hall',
  description: 'Software development portfolio for Andrew Hall',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <header className="bg-slate-100 p-4 flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </header>
        <main className='p-4'>
          {children}
        </main>
      </body>
    </html>
  )
}
