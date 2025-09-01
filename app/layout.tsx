import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dr. Sergey Galitskiy - Portfolio',
  description: 'Professional portfolio of Dr. Sergey Galitskiy - Research Scientist and Academic',
  keywords: 'Sergey Galitskiy, research, academic, scientist, portfolio',
  authors: [{ name: 'Dr. Sergey Galitskiy' }],
  openGraph: {
    title: 'Dr. Sergey Galitskiy - Portfolio',
    description: 'Professional portfolio of Dr. Sergey Galitskiy - Research Scientist and Academic',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
