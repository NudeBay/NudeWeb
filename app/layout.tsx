import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import './globals.scss'

const ubuntu = Ubuntu({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'NudeBay',
  description: 'Short Porn Content for Free',
  keywords: ['Porn', 'Shorts', 'XXX', 'Sex'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={ubuntu.className}>{children}</body>
      </UserProvider>
    </html>
  )
}
