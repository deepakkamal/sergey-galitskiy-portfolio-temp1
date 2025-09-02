'use client'

import { ExternalLink, FileText, Calendar, Users } from 'lucide-react'

const Publications = () => {
  // Real publications from Google Scholar profile
  const publications = [
    {
      title: "Hartree-Fock calculation of the differential photoionization cross sections of small Li clusters",
      authors: "SA Galitskiy, AN Artemyev, K Jänkälä, BM Lagutin, PV Demekhin",
      journal: "The Journal of chemical physics",
      year: "2015",
      volume: "142 (3)",
      pages: "034304",
      doi: "10.1063/1.4906072",
      url: "https://pubs.aip.org/aip/jcp/article/142/3/034304/196790/Hartree-Fock-calculation-of-the-differential",
      citations: 51,
      type: "Journal Article",
      illustration: "/images/li_clusters_2015.jpg"
    },
    {
      title: "Dynamic evolution of microstructure during laser shock loading and spall failure of single crystal Al at the atomic scales",
      authors: "S Galitskiy, DS Ivanov, AM Dongare",
      journal: "Journal of Applied Physics",
      year: "2018",
      volume: "124 (20)",
      pages: "205901",
      doi: "10.1063/1.5051618",
      url: "https://doi.org/10.1063/1.5051618",
      citations: 49,
      type: "Journal Article",
      coverImage: "/images/jap_2018_cover.jpg",
      illustration: "/images/al_shock_2018.jpg"
    },
    {
      title: "Modeling the damage evolution and recompression behavior during laser shock loading of aluminum microstructures at the mesoscales",
      authors: "S Galitskiy, AM Dongare",
      journal: "Journal of Materials Science",
      year: "2021",
      volume: "56 (6)",
      pages: "4446-4469",
      doi: "10.1007/s10853-020-05523-4",
      url: "https://doi.org/10.1007/s10853-020-05523-4",
      citations: 30,
      type: "Journal Article",
      coverImage: "/images/jms_2021_cover.jpg",
      illustration: "/images/al_mesoscale_2021.jpg"
    },
    {
      title: "Shock-induced deformation twinning and softening in magnesium single crystals",
      authors: "TJ Flanagan, S Vijayan, S Galitskiy, J Davis, BA Bedard, CL Williams, et al.",
      journal: "Materials & Design",
      year: "2020",
      volume: "194",
      pages: "108884",
      doi: "10.1016/j.matdes.2020.108884",
      url: "https://doi.org/10.1016/j.matdes.2020.108884",
      citations: 29,
      type: "Journal Article",
      illustration: "/images/mg_twinning_2020.jpg"
    },
    {
      title: "Understanding the plasticity contributions during laser-shock loading and spall failure of Cu microstructures at the atomic scales",
      authors: "MJ Echeverria, S Galitskiy, A Mishra, R Dingreville, AM Dongare",
      journal: "Computational Materials Science",
      year: "2021",
      volume: "198",
      pages: "110668",
      doi: "10.1016/j.commatsci.2021.110668",
      url: "https://doi.org/10.1016/j.commatsci.2021.110668",
      citations: 26,
      type: "Journal Article",
      illustration: "/images/cu_plasticity_2021.jpg"
    },
    {
      title: "Virtual texture analysis to investigate the deformation mechanisms in metal microstructures at the atomic scale",
      authors: "A Mishra, MJ Echeverria, K Ma, S Parida, C Chen, S Galitskiy, et al.",
      journal: "Journal of Materials Science",
      year: "2022",
      volume: "57 (23)",
      pages: "10549-10568",
      doi: "10.1007/s10853-022-07388-0",
      url: "https://link.springer.com/article/10.1007/s10853-022-07388-0",
      citations: 17,
      type: "Journal Article",
      illustration: "/images/virtual_texture_2022.jpg"
    },
    {
      title: "Modeling shock-induced void collapse in single-crystal Ta systems at the mesoscales",
      authors: "S Galitskiy, A Mishra, AM Dongare",
      journal: "International Journal of Plasticity",
      year: "2023",
      volume: "164",
      pages: "103596",
      doi: "10.1016/j.ijplas.2023.103596",
      url: "https://doi.org/10.1016/j.ijplas.2023.103596",
      citations: 16,
      type: "Journal Article",
      illustration: "/images/ta_void_2023.jpg"
    },
    {
      title: "The structure of liquid carbon elucidated by in situ X-ray diffraction",
      authors: "D Kraus, J Rips, M Schörner, MG Stevenson, J Vorberger, D Ranjan, S Galitskiy, et al.",
      journal: "Nature",
      year: "2025",
      volume: "637",
      pages: "1-5",
      doi: "10.1038/s41586-024-08303-2",
      url: "https://www.nature.com/articles/s41586-024-08303-2",
      citations: 0,
      type: "Journal Article",
      illustration: "/images/liquid_carbon_2025.jpg"
    }
  ]

  const stats = [
    { label: "Total Publications", value: "18+" },
    { label: "Citations", value: "255" },
    { label: "H-Index", value: "8" },
    { label: "i10-Index", value: "8" }
  ]

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Publications & <span className="gradient-text">Research</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contributing to the advancement of scientific knowledge through peer-reviewed research and academic publications.
          </p>
        </div>

        {/* Research Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <FileText className="mr-3 text-primary-600" size={28} />
              Recent Publications
            </h3>
            <a
              href="https://scholar.google.com/citations?user=eK1bg80AAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300"
            >
              View All on Google Scholar
              <ExternalLink className="ml-2" size={16} />
            </a>
          </div>

          <div className="grid gap-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-gradient-to-r from-white to-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-primary-600">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                  {(pub.coverImage || pub.illustration) && (
                    <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-6">
                      <div className="w-full lg:w-32 h-40 lg:h-40 rounded-lg overflow-hidden shadow-md">
                        <img 
                          src={pub.coverImage || pub.illustration} 
                          alt={pub.coverImage ? `Cover of ${pub.journal} ${pub.year}` : `Illustration from ${pub.title}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight break-words">
                        {pub.title}
                      </h4>
                      <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap self-start">
                        {pub.type}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start text-gray-600">
                        <Users size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                        <span className="break-words text-sm sm:text-base">{pub.authors}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FileText size={16} className="mr-2" />
                        <span className="italic">{pub.journal}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        <span>{pub.year} • {pub.volume} • Pages {pub.pages}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm">
                      <span className="text-gray-500 break-all">
                        DOI: {pub.doi}
                      </span>
                      <span className="text-primary-600 font-medium">
                        {pub.citations} citations
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 lg:ml-4">
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-white text-primary-600 font-medium rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors duration-300"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Paper
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Interests */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Research Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Molecular Dynamics (MD)",
              "Shock Physics",
              "Ab-initio methods (DFT and beyond)",
              "Fusion Materials",
              "Machine Learning and Material Informatics",
              "Laser-Matter Interactions",
              "Atomic Scale Modeling",
              "Computational Materials Science",
              "Finite Element Methods (FEM)",
              "Scientific Code Development"
            ].map((interest, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-primary-700 font-medium rounded-full shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Publications
