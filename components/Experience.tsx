'use client'

import { Calendar, MapPin, Building, BookOpen } from 'lucide-react'

const Experience = () => {
  // Professional experience from actual CV
  const experiences = [
    {
      title: "Post Doctoral Researcher",
      company: "University of South Florida",
      location: "Tampa, FL",
      period: "08/2024 - Present",
      logo: "/images/University_of_South_Florida_seal.png",
      logoAlt: "University of South Florida Logo",
      description: [
        "Developed HPC workflows for predicting materials behavior under extreme conditions for planetary science and inertial confinement fusion (ICF), funded by DoE",
        "Performed large-scale Molecular Dynamics (MD) and quantum MD simulations to develop machine-learned interatomic potentials (MLIPs) for Carbon systems",
        "Analyzed large atomic datasets to tailor MLIPs to objective functions for elevated accuracy, in collaboration with LLNL",
        "Maintained and optimized computational codes across leading HPC clusters",
        "Published peer-reviewed articles for Carbon in extreme conditions"
      ]
    },
    {
      title: "Material Simulation Scientist II",
      company: "Stanley Black & Decker, Inc.",
      location: "New Britain, CT",
      period: "11/2021 - 02/2024",
      logo: "/images/Stanley-Black-Decker-logo.png",
      logoAlt: "Stanley Black & Decker Logo",
      logoSize: "large",
      description: [
        "Expedited new product development across 10+ product lines by combining Material Science, Engineering, and ML",
        "Provided comprehensive Finite Element Modeling (FEM) analyses for mechanical, modal, acoustic, and thermal management of steels and ceramics",
        "Secured and led funding exceeding $0.5M in interdisciplinary research grants, notably from NSF Convergence Accelerator program: Track I: sustainable materials",
        "Developed cutting-edge composite PVD-coated materials for high-performance tribological applications"
      ]
    },
    {
      title: "Graduate Assistant",
      company: "University of Connecticut",
      location: "Storrs, CT",
      period: "08/2016 - 10/2021",
      logo: "/images/University_of_connecticut.png",
      logoAlt: "University of Connecticut Logo",
      description: [
        "Completed PhD dissertation: 'Modeling the Laser-Induced Phenomena and Spall Failure of Metal Microstructures at the Atomic Scales and the Mesoscales'",
        "Led development of multi-processor scientific codes (Fortran+Python) employing MD and hybrid MD with FEM",
        "Enhanced MD-TTM scientific code for modeling metal-laser radiation interaction at nano-experimental scales",
        "Published multiple high-impact research manuscripts and presented at prestigious scientific conferences"
      ]
    },
    {
      title: "Graduate Assistant",
      company: "University of Kassel",
      location: "Kassel, Germany",
      period: "10/2013 - 02/2016",
      logo: "/images/University_of_Kassel.png",
      logoAlt: "University of Kassel Logo",
      logoSize: "medium",
      description: [
        "Researched neuro cell behavior through atomistic modeling of protein-membrane complexes interaction",
        "Developed ab-initio methods for predicting electron dynamics during electronic excitation-relaxation in small molecules",
        "Published articles for prediction of electron and photon spectra of single-photon excited small molecules",
        "Instructed students in mathematical methods for physics problems"
      ]
    }
  ]

  const education = [
    {
      degree: "Ph.D. in Materials Science and Engineering",
      institution: "University of Connecticut",
      location: "Storrs, CT",
      year: "2021",
      logo: "/images/University_of_connecticut.png",
      logoAlt: "University of Connecticut Logo",
      description: "Dissertation: 'Modeling the Laser-Induced Phenomena and Spall Failure of Metal Microstructures at the Atomic Scales and the Mesoscales'"
    },
    {
      degree: "M.S. in Physics",
      institution: "South Federal University",
      location: "Rostov-on-Don, Russia", 
      year: "2011",
      logo: "/images/University_of_south_federal_rostov.png",
      logoAlt: "South Federal University Logo",
      description: "Thesis: 'Local selection rules for construction of quasicrystal lattices'"
    },
    {
      degree: "B.S. in Physics",
      institution: "South Federal University",
      location: "Rostov-on-Don, Russia",
      year: "2009",
      logo: "/images/University_of_south_federal_rostov.png",
      logoAlt: "South Federal University Logo",
      description: "Thesis: 'EXAFS spectra of perovskite structures as a function of local atomic arrangement'"
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of academic excellence and professional growth in research and education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Building className="mr-3 text-primary-600" size={28} />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{exp.title}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-gray-600">
                          <div className="flex items-center">
                            <Building size={16} className="mr-2" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-2" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                      {exp.logo && (
                        <div className="ml-4 flex-shrink-0">
                          <div className={`${exp.logoSize === 'large' ? 'h-36 w-36' : exp.logoSize === 'medium' ? 'h-32 w-32' : 'h-24 w-24'} flex items-center justify-center`}>
                            <img 
                              src={exp.logo} 
                              alt={exp.logoAlt} 
                              className="h-full w-full object-contain"
                              onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `<div class="text-xs text-gray-500 text-center font-medium">${exp.company.split(' ')[0]}</div>`;
                                }
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start">
                          <span className="text-primary-600 mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <BookOpen className="mr-3 text-primary-600" size={28} />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3 text-gray-600">
                          <div className="flex items-center">
                            <Building size={16} className="mr-2" />
                            <span>{edu.institution}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-2" />
                            <span>{edu.year}</span>
                          </div>
                        </div>
                      </div>
                      {edu.logo && (
                        <div className="ml-4 flex-shrink-0">
                          <div className="h-24 w-24 flex items-center justify-center">
                            <img 
                              src={edu.logo} 
                              alt={edu.logoAlt} 
                              className="h-full w-full object-contain"
                              onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `<div class="text-xs text-gray-500 text-center font-medium">${edu.institution.split(' ')[0]}</div>`;
                                }
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-700">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
