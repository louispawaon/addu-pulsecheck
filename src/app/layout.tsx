import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PulseCheck',
  description: 'Your go-to destination for effortlessly checking the online pulse of Ateneo de Davao University (AdDU).',
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
