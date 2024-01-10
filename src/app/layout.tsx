import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '@/app/components/ui/Navbar'
import Footer from '@/app/components/ui/Footer'

export const metadata: Metadata = {
  title: 'PulseCheck',
  description: 'Your go-to destination for effortlessly checking the online pulse of Ateneo de Davao University (AdDU).',
  metadataBase: new URL('https://pulsecheck.vercel.app/'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <Navbar/>
          {children}
          <Analytics/>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}
