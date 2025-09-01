'use client'

import { useState } from 'react'
import { BookOpen, Award, Users, Target, ChevronDown, ChevronUp } from 'lucide-react'

const About = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }
  const highlights = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Research Excellence",
      description: "Leading innovative research projects with significant academic impact",
      details: [
        "High-impact publications in Nature and top-tier journals",
        "DOE-funded research on materials under extreme conditions",
        "Collaboration with national laboratories (LLNL, LANL, ORNL)",
        "Development of novel computational methodologies"
      ]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Academic Achievement",
      description: "Recognized expertise in field with numerous publications and citations",
      details: [
        "255+ citations with h-index of 8",
        "18+ peer-reviewed publications",
        "Teaching Excellence Award (UConn, 2021)",
        "Multiple conference presentations and invited talks"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Building bridges between academia and industry through strategic partnerships",
      details: [
        "NSF-funded Accelerator Track I: Sustainable Materials - 'ML-assisted plastic recycling for large-scale industrial use' with Stanley Black & Decker",
        "International research collaborations in shock physics spanning Germany, France, and USA",
        "Cross-disciplinary projects integrating computational physics and materials engineering",
        "Active collaborations with key DoE national laboratories: LANL, LLNL, and Johns Hopkins Applied Physics Laboratory",
        "Lectures and mentoring of PhD and undergraduate students in advanced computational methods"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "Driving forward-thinking solutions across multiple domains",
      details: [
        "Failure analysis of tribological systems (patent # XXXX)",
        "Advanced CAE design of oscillating tools (patent pending)",
        "Thermal management (electronics) and steel heat treatment",
        "Analysis tools for atomistic systems"
      ]
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to advancing scientific knowledge and fostering academic excellence through cutting-edge research, 
            industry partnerships, and innovative solutions. Bridging the gap between fundamental science and practical 
            applications to solve real-world challenges in materials engineering, sustainable technologies, and high-performance computing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="text-lg leading-relaxed">
                As a <strong>research scientist</strong> at the <strong>University of South Florida</strong>, I specialize in <strong>computational materials science</strong> 
                with a focus on <strong>molecular dynamics (MD) and density functional theory (DFT)</strong>, <strong>shock physics</strong>, and <strong>laser-matter interactions</strong>. My research 
                investigates the <strong>atomic-scale mechanisms</strong> underlying material behavior under <strong>extreme conditions</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                My work contributes to understanding:
              </p>
              <ul className="text-lg leading-relaxed space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-2">•</span>
                  <span>deformation mechanisms, spall failure, and microstructural evolution in light-weight and refractory metals;</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-2">•</span>
                  <span>mechanisms of deformation and melting in Carbon systems at conditions relevant to ICF at NIF and interplanetary science;</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-2">•</span>
                  <span>development of new quantum-accurate machine learning interatomic potentials (MLIP);</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-2">•</span>
                  <span>analysis tools for atomistic data with Ovito and Python.</span>
                </li>
              </ul>
            </div>

            {/* Download CV/Resume Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="/CV_sergey.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Download CV
              </a>
              <a
                href="/Resume_DR_SERGEY_GALITSKIY.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleCard(index)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-primary-600 mb-4">
                        {highlight.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600">
                        {highlight.description}
                      </p>
                    </div>
                    <div className="ml-4 text-primary-600">
                      {expandedCard === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </div>
                
                {expandedCard === index && (
                  <div className="px-6 pb-6 border-t border-primary-100">
                    <div className="pt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {highlight.details.map((detail, idx) => (
                          <li key={idx} className="text-gray-600 text-sm flex items-start">
                            <span className="text-primary-600 mr-2 mt-1 text-xs">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
