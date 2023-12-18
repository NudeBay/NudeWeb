import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextNProgress from 'nextjs-progressbar';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NudeBay',
  description: 'Short Porn Content for Free',
  keywords: ['Porn', 'Shorts', 'XXX', 'Sex', ''],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UserProvider>
        <NextNProgress color='#e5194d' startPosition={0.3} />
        <body className={inter.className}>{children}</body>
      </UserProvider>
    </html>
  )
}
