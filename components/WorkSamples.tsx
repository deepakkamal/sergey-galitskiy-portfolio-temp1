'use client'

import { useState } from 'react'
import { Play, Code, FileText, ExternalLink, Download, Brain, Terminal, BarChart3 } from 'lucide-react'

const WorkSamples = () => {
  const [activeCodeTab, setActiveCodeTab] = useState('repositories')

  const atomisticMovies = [
    {
      title: "Laser Shock Loading of Aluminum",
      description: "Molecular dynamics simulation showing spall failure in single-crystal aluminum under laser shock loading conditions",
      thumbnail: "/images/movie-placeholder.jpg",
      videoUrl: "#",
      duration: "0:45",
      type: "MD Simulation"
    },
    {
      title: "Void Collapse in Tantalum",
      description: "Atomistic visualization of shock-induced void collapse in single-crystal Ta systems at mesoscales",
      thumbnail: "/images/movie-placeholder.jpg",
      videoUrl: "#",
      duration: "1:20",
      type: "MD Simulation"
    },
    {
      title: "Deformation Twinning in Magnesium",
      description: "Real-time atomistic movie showing deformation twinning mechanisms in magnesium single crystals",
      thumbnail: "/images/movie-placeholder.jpg",
      videoUrl: "#",
      duration: "0:55",
      type: "MD Simulation"
    }
  ]

  const codeRepositories = [
    {
      title: "MD-TTM Hybrid Code",
      description: "Two-Temperature Model implementation for laser-matter interaction simulations combining molecular dynamics with continuum methods",
      language: "C++/Fortran",
      features: ["MPI Parallelization", "GPU Acceleration", "Custom Potentials"],
      githubUrl: "#",
      downloadUrl: "#"
    },
    {
      title: "Atomistic Analysis Tools",
      description: "Python toolkit for post-processing molecular dynamics simulations and extracting material properties",
      language: "Python",
      features: ["Data Visualization", "Statistical Analysis", "Property Extraction"],
      githubUrl: "#",
      downloadUrl: "#"
    },
    {
      title: "SNAP Potential Development",
      description: "Machine learning framework for developing Spectral Neighbor Analysis Potentials for extreme conditions",
      language: "Python/C++",
      features: ["ML Integration", "LAMMPS Compatible", "High Accuracy"],
      githubUrl: "#",
      downloadUrl: "#"
    }
  ]

  const lammpsWork = [
    {
      title: "Custom Interatomic Potentials",
      description: "Development of machine-learned interatomic potentials (MLIPs) including SNAP and ACE for materials under extreme conditions",
      type: "Potential Development",
      applications: ["Shock Physics", "High Pressure", "Fusion Materials"]
    },
    {
      title: "Large-Scale MD Simulations",
      description: "Massively parallel molecular dynamics simulations on HPC clusters for studying material behavior at atomic scales",
      type: "Simulation Framework",
      applications: ["Spall Failure", "Void Collapse", "Deformation Mechanisms"]
    },
    {
      title: "Hybrid MD-Continuum Methods",
      description: "Integration of LAMMPS with continuum methods for multi-scale modeling from atoms to mesoscales",
      type: "Multi-scale Modeling",
      applications: ["Laser Processing", "Shock Loading", "Material Design"]
    }
  ]

  const mlWork = [
    {
      title: "SNAP MLIP",
      description: "Spectral Neighbor Analysis Potential Machine-Learned Interatomic Potentials for simulating materials under extreme conditions with quantum-level accuracy",
      accuracy: "DFT-level",
      methods: ["Spectral Analysis", "Neighbor Descriptors", "Linear Regression"],
      performance: "1000x faster than DFT"
    },
    {
      title: "NSF Track I: Sustainable Materials",
      description: "Adaptive system for informatics-assisted polymer recycling using machine learning to optimize material recovery and processing workflows",
      accuracy: "Recycling optimization",
      methods: ["Adaptive Learning", "Material Informatics", "Process Optimization"],
      performance: "Enhanced sustainability"
    },
    {
      title: "MLSI Models for Structure Identification",
      description: "Machine Learning Structure Identification models for automated recognition and classification of atomic structures and defects in materials",
      accuracy: "Structure classification",
      methods: ["Deep Learning", "Computer Vision", "Pattern Recognition"],
      performance: "Automated analysis"
    }
  ]

  const mdAnalysisCodes = [
    {
      title: "ADF_analysis1.py",
      description: "Analyses MD trajectory to determine RDF and position of 1st local minimum (r1, first coordination sphere). Within r1 cutoff, finds atomic triplets and calculates angles, averaging for all atoms and for N-coordinated atoms.",
      language: "Python",
      tags: ["angular distribution function", "partial ADF", "MD/QMD", "solids & liquids"],
      filePath: "/Codes/Python/ADF_analysis1.py",
      features: ["RDF Calculation", "Triplet Analysis", "Angle Distribution", "Coordination Analysis"]
    },
    {
      title: "RDF_analysis1.py",
      description: "Finds RDF and contribution from differently coordinated atoms within first coordination sphere (1st local minimum in RDF). Comprehensive analysis of radial distribution functions.",
      language: "Python",
      tags: ["MD/QMD", "RDF", "pRDF", "solids and liquids"],
      filePath: "/Codes/Python/RDF_analysis1.py",
      features: ["Partial RDF", "Coordination Numbers", "First Shell Analysis", "Statistical Analysis"]
    },
    {
      title: "Clapeyron_analysis.py",
      description: "Calculate properties of melting from solid/liquid trajectories at same PT conditions. Implements Clapeyron equation analysis for phase transitions.",
      language: "Python",
      tags: ["Clapeyron", "melting", "entropy of melting", "latent heat", "MD/QMD"],
      filePath: "/Codes/Python/Clapeyron_analysis.py",
      features: ["Phase Transitions", "Thermodynamic Properties", "Melting Analysis", "Entropy Calculation"]
    }
  ]

  return (
    <section id="work-samples" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work <span className="gradient-text">Samples</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore examples of my computational materials science work, including atomistic simulations, 
            custom codes, and LAMMPS implementations.
          </p>
        </div>

        {/* Atomistic Movies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Play className="mr-3 text-primary-600" size={28} />
            Atomistic Movies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {atomisticMovies.map((movie, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-purple-100 flex items-center justify-center">
                    <Play className="w-16 h-16 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {movie.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-primary-600 text-white px-2 py-1 rounded text-xs">
                    {movie.type}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{movie.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm">{movie.description}</p>
                  <button className="inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300">
                    <Play size={16} className="mr-2" />
                    Watch Simulation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Repositories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Code className="mr-3 text-primary-600" size={28} />
            Code Repositories
          </h3>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 bg-white p-1 rounded-lg shadow-sm">
            <button
              onClick={() => setActiveCodeTab('repositories')}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-300 flex items-center ${
                activeCodeTab === 'repositories'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              <Code size={16} className="mr-2" />
              Main Repositories
            </button>
            <button
              onClick={() => setActiveCodeTab('md-analysis')}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-300 flex items-center ${
                activeCodeTab === 'md-analysis'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              <BarChart3 size={16} className="mr-2" />
              MD Analysis Codes
            </button>
          </div>

          {/* Tab Content */}
          {activeCodeTab === 'repositories' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {codeRepositories.map((repo, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold text-gray-900">{repo.title}</h4>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {repo.language}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{repo.description}</p>
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h5>
                    <div className="flex flex-wrap gap-2">
                      {repo.features.map((feature, idx) => (
                        <span key={idx} className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="inline-flex items-center px-4 py-2 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition-colors duration-300">
                      <Code size={16} className="mr-2" />
                      View Code
                    </button>
                    <button className="inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300">
                      <Download size={16} className="mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeCodeTab === 'md-analysis' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {mdAnalysisCodes.map((code, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <Terminal className="mr-2 text-blue-600" size={20} />
                      <h4 className="text-lg font-semibold text-gray-900">{code.title}</h4>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {code.language}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{code.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Features:</h5>
                    <div className="flex flex-wrap gap-1">
                      {code.features.map((feature, idx) => (
                        <span key={idx} className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Tags:</h5>
                    <div className="flex flex-wrap gap-1">
                      {code.tags.map((tag, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => window.open(code.filePath, '_blank')}
                      className="inline-flex items-center px-3 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm flex-1"
                    >
                      <Code size={14} className="mr-2" />
                      View Code
                    </button>
                    <button 
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = code.filePath;
                        link.download = code.title;
                        link.click();
                      }}
                      className="inline-flex items-center px-3 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm"
                    >
                      <Download size={14} className="mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* LAMMPS Work */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <FileText className="mr-3 text-primary-600" size={28} />
            LAMMPS Implementations
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {lammpsWork.map((work, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {work.type}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{work.title}</h4>
                <p className="text-gray-600 mb-4">{work.description}</p>
                <div>
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Applications:</h5>
                  <ul className="space-y-1">
                    {work.applications.map((app, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start text-sm">
                        <span className="text-primary-600 mr-2 mt-1">•</span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Machine Learning Work */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Brain className="mr-3 text-primary-600" size={28} />
            Machine Learning & Material Informatics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mlWork.map((ml, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{ml.title}</h4>
                <p className="text-gray-600 mb-4">{ml.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Accuracy:</h5>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium">
                      {ml.accuracy}
                    </span>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Performance:</h5>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                      {ml.performance}
                    </span>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-medium text-gray-700 mb-2">ML Methods:</h5>
                  <div className="flex flex-wrap gap-2">
                    {ml.methods.map((method, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing research collaborations, sharing computational methods, 
              or providing technical consultation on materials science projects.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300"
            >
              Get In Touch
              <ExternalLink className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkSamples
