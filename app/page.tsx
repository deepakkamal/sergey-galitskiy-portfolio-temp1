'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Publications from '@/components/Publications'
import WorkSamples from '@/components/WorkSamples'
import Codes from '@/components/Codes'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Publications />
      <WorkSamples />
      <Codes />
      <Contact />
      <Footer />
    </main>
  )
}
