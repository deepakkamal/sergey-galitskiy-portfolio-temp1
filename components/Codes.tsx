'use client'

import { useState } from 'react'
import { Code, Terminal, Download, ExternalLink, FileText, Folder, Play } from 'lucide-react'

const Codes = () => {
  const [activeTab, setActiveTab] = useState('python')

  const codeCategories = [
    {
      id: 'python',
      name: 'Python',
      icon: <Terminal className="w-5 h-5" />,
      description: 'Analysis tools for atomistic data and MD simulations'
    },
    {
      id: 'ovito',
      name: 'Ovito',
      icon: <Play className="w-5 h-5" />,
      description: 'Visualization and analysis scripts for atomistic systems'
    },
    {
      id: 'fortran',
      name: 'Fortran',
      icon: <Code className="w-5 h-5" />,
      description: 'High-performance scientific computing codes'
    },
    {
      id: 'cpp',
      name: 'C++',
      icon: <Code className="w-5 h-5" />,
      description: 'Optimized computational physics implementations'
    }
  ]

  const pythonCodes = [
    {
      title: "ADF_analysis1.py",
      description: "Analyses MD trajectory to determine RDF and position of 1st local minimum (r1, first coordination sphere). Within r1 cutoff, finds atomic triplets and calculates angles, averaging for all atoms and for N-coordinated atoms.",
      tags: ["angular distribution function", "partial ADF", "MD/QMD", "solids & liquids"],
      features: ["RDF Calculation", "Triplet Analysis", "Angle Distribution", "Coordination Analysis"],
      filePath: "/Codes/Python/ADF_analysis1.py"
    },
    {
      title: "RDF_analysis1.py",
      description: "Finds RDF and contribution from differently coordinated atoms within first coordination sphere (1st local minimum in RDF). Comprehensive analysis of radial distribution functions.",
      tags: ["MD/QMD", "RDF", "pRDF", "solids and liquids"],
      features: ["Partial RDF", "Coordination Numbers", "First Shell Analysis", "Statistical Analysis"],
      filePath: "/Codes/Python/RDF_analysis1.py"
    },
    {
      title: "Clapeyron_analysis.py",
      description: "Calculate properties of melting from solid/liquid trajectories at same PT conditions. Implements Clapeyron equation analysis for phase transitions.",
      tags: ["Clapeyron", "melting", "entropy of melting", "latent heat", "MD/QMD"],
      features: ["Phase Transitions", "Thermodynamic Properties", "Melting Analysis", "Entropy Calculation"],
      filePath: "/Codes/Python/Clapeyron_analysis.py"
    }
  ]

  const ovitoCodes = [
    {
      title: "Structure_Analysis.py",
      description: "Ovito modifier for advanced structure identification and defect analysis in crystalline materials.",
      tags: ["structure analysis", "defects", "crystalline", "visualization"],
      features: ["Defect Detection", "Structure ID", "Grain Boundaries", "Dislocation Analysis"],
      filePath: "/Codes/Ovito/Structure_Analysis.py"
    },
    {
      title: "Stress_Tensor.py",
      description: "Calculate and visualize local stress tensors in atomistic simulations using Ovito framework.",
      tags: ["stress analysis", "mechanical properties", "visualization"],
      features: ["Stress Calculation", "Tensor Visualization", "Mechanical Analysis", "Color Mapping"],
      filePath: "/Codes/Ovito/Stress_Tensor.py"
    }
  ]

  const fortranCodes = [
    {
      title: "MD_Engine.f90",
      description: "High-performance molecular dynamics engine with MPI parallelization for large-scale simulations.",
      tags: ["molecular dynamics", "MPI", "parallel computing", "HPC"],
      features: ["MPI Parallelization", "Force Calculations", "Integrators", "Thermostats"],
      filePath: "/Codes/Fortran/MD_Engine.f90"
    },
    {
      title: "DFT_Interface.f90",
      description: "Interface module for coupling molecular dynamics with density functional theory calculations.",
      tags: ["DFT", "quantum mechanics", "hybrid methods", "ab-initio"],
      features: ["QM/MM Interface", "Electronic Structure", "Force Coupling", "Energy Calculations"],
      filePath: "/Codes/Fortran/DFT_Interface.f90"
    }
  ]

  const cppCodes = [
    {
      title: "MLIP_Trainer.cpp",
      description: "Machine learning interatomic potential trainer with support for SNAP and ACE descriptors.",
      tags: ["machine learning", "MLIP", "SNAP", "ACE", "training"],
      features: ["ML Training", "Descriptor Calculation", "Optimization", "Cross-validation"],
      filePath: "/Codes/C++/MLIP_Trainer.cpp"
    },
    {
      title: "Shock_Simulator.cpp",
      description: "Specialized code for shock wave simulations with advanced boundary conditions and analysis.",
      tags: ["shock physics", "wave propagation", "extreme conditions"],
      features: ["Shock Generation", "Wave Analysis", "Boundary Conditions", "Post-processing"],
      filePath: "/Codes/C++/Shock_Simulator.cpp"
    }
  ]

  const getCodesForTab = (tabId: string) => {
    switch (tabId) {
      case 'python': return pythonCodes
      case 'ovito': return ovitoCodes
      case 'fortran': return fortranCodes
      case 'cpp': return cppCodes
      default: return pythonCodes
    }
  }

  return (
    <section id="codes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Code <span className="gradient-text">Repository</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Open-source scientific codes and analysis tools for computational materials science, 
            molecular dynamics, and quantum mechanical simulations.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-gray-50 p-2 rounded-xl">
          {codeCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-white'
              }`}
            >
              {category.icon}
              <span className="ml-2">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {codeCategories.find(cat => cat.id === activeTab)?.description}
          </p>
        </div>

        {/* Code Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {getCodesForTab(activeTab).map((code, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-2 bg-primary-100 rounded-lg mr-3">
                    <FileText className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{code.title}</h3>
                </div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                  {activeTab.toUpperCase()}
                </span>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">{code.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {code.features.map((feature, idx) => (
                    <span key={idx} className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {code.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => window.open(code.filePath, '_blank')}
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300"
                >
                  <Code size={16} className="mr-2" />
                  View Code
                </button>
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = code.filePath;
                    link.download = code.title;
                    link.click();
                  }}
                  className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <Download size={16} className="mr-2" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Repository Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary-50 to-purple-50 p-8 rounded-xl">
            <div className="flex items-center justify-center mb-4">
              <Folder className="w-8 h-8 text-primary-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                Complete Repository
              </h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              All codes are available in the project repository. Each script includes comprehensive 
              documentation, usage examples, and implementation details for computational materials science research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300">
                <ExternalLink className="mr-2" size={20} />
                View Full Repository
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors duration-300">
                <Download className="mr-2" size={20} />
                Download All Codes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Codes
