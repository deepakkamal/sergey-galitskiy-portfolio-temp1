'use client'

import { ExternalLink, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
  ]

  const externalLinks = [
    { 
      name: 'Google Scholar', 
      href: 'https://scholar.google.com/citations?user=eK1bg80AAAAJ&hl=en&oi=ao' 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/sergey-galitskiy/' 
    },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform mb-4"
            >
              Dr. Sergey Galitskiy
            </button>
            <p className="text-gray-300 mb-6 max-w-md">
              Research Scientist and Academic Leader dedicated to advancing knowledge through 
              innovative research and academic excellence.
            </p>
            <div className="flex space-x-4">
              {externalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  {link.name}
                  <ExternalLink className="ml-1" size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/CV_sergey.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Download CV
                </a>
              </li>
              <li>
                <a
                  href="/Resume_DR_SERGEY_GALITSKIY.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Dr. Sergey Galitskiy. All rights reserved.
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            Made with <Heart className="mx-1 text-red-500" size={16} /> for academic excellence
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
