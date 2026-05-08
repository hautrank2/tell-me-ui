import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'
import { Navbar } from '@/components/Navbar'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })

export const metadata: Metadata = {
  title: 'Vizform — Design Preference Quiz',
  description: 'Tell your developer exactly what you want your website to look like.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 text-foreground antialiased">
        <Providers>
          <Navbar />
          <main className="mx-auto max-w-4xl px-4 py-12 md:py-16">
            <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 md:p-10 shadow-xl">
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  )
}

