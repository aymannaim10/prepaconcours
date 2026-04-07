import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Prof. Yasmine | Medical Entrance Prep – UM6SS Morocco',
  description:
    'Expert medical entrance exam preparation by Professor Yasmine at UM6SS. Access 12 years of official exams, tips, revision series and course recaps to ace the concours médecine.',
  keywords: ['concours medecine', 'UM6SS', 'Maroc', 'médecine', 'préparation concours', 'Yasmine', 'mathématiques médicales'],
  openGraph: {
    title: 'Prof. Yasmine – Medical Concours Platform | UM6SS Morocco',
    description: 'Premium preparation platform for medical entrance exams in Morocco.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
