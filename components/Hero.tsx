'use client'

import { ArrowDown, ExternalLink } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-600"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Profile Image Placeholder */}
          <div className="mx-auto w-48 h-48 bg-gradient-to-br from-primary-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
            <div className="w-44 h-44 bg-white rounded-full flex items-center justify-center">
              <span className="text-6xl font-bold text-gray-600">SG</span>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Dr. <span className="gradient-text">Sergey Galitskiy</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Postdoctoral Researcher Physics Department<br />
              University of South Florida
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto break-words">
              Specializing in Molecular Dynamics (MD), Density Functional Theory (DFT), Machine Learning (ML), Shock Physics, and Computational Materials Science
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="https://scholar.google.com/citations?user=eK1bg80AAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Google Scholar
              <ExternalLink className="ml-2" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sergey-galitskiy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-full border-2 border-primary-600 hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              LinkedIn Profile
              <ExternalLink className="ml-2" size={20} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16">
            <button
              onClick={scrollToAbout}
              className="animate-bounce text-gray-400 hover:text-primary-600 transition-colors duration-300"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
