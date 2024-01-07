import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'

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
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}
