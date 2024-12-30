'use client'

import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { ThemeProvider, useTheme } from '@/context/themeContext'
import SessionWrapper from '@/components/SessionWrapper'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

// Component to handle dynamic theme application
function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme() // Access the current theme (light or dark)

  return (
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased ${theme === 'dark' ? 'dark' : ''}`}>
      <Navbar />
      <div className="mt-[65px]">{children}</div>
    </body>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <SessionWrapper>
        <ThemeProvider>
          <ThemeWrapper>{children}</ThemeWrapper>
        </ThemeProvider>
      </SessionWrapper>
    </html>
  )
}
