'use client'

import Navbar from './components/Navbar'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)
  
  // Popup states
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeTab, setActiveTab] = useState('wireframe')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [lightboxImage, setLightboxImage] = useState(null)
  const [showPictureGrid, setShowPictureGrid] = useState(false)
  
  const fullName = 'Ainul Hidayah'
  
  // Animasi huruf muncul 1 per 1 (repeat terus)
  useEffect(() => {
    if (isAnimating && currentIndex < fullName.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullName[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 150)
      return () => clearTimeout(timer)
    } else if (isAnimating && currentIndex === fullName.length) {
      const resetTimer = setTimeout(() => {
        setDisplayText('')
        setCurrentIndex(0)
      }, 1000)
      return () => clearTimeout(resetTimer)
    }
  }, [currentIndex, isAnimating, fullName])

  // Project data
  const projects = [
    {
      id: 1,
      title: 'Medipulse',
      image: '/asset/medipulse.png',
      role: 'UI/UX Designer',
      year: '2024',
      description: 'Medipulse is a medication reminder website interface designed with a clean and user-friendly approach to help users manage medication schedules and monitor daily health activities.',
      tags: ['Figma', 'UI/UX Design', 'Healthcare', 'Responsive Design'],
      type: 'medipulse',
      hasTabs: true,
      wireframeImages: Array.from({ length: 27 }, (_, i) => `/asset/wireframe/${i + 1}.png`),
      mockupImages: Array.from({ length: 23 }, (_, i) => `/asset/medipulse${i + 1}.png`),
      implementationImages: Array.from({ length: 22 }, (_, i) => `/asset/implementasi/${i + 1}.png`)
    },
    {
      id: 2,
      title: 'PADI (Pencarian Arsip dan Dokumen Informasi)',
      image: '/asset/padi.png',
      role: 'Fullstack Developer',
      year: '2025',
      description: 'Web-based land book search system designed to simplify document searching and borrowing processes.',
      tags: ['html', 'css', 'javascript', 'java spring boot', 'mariadb'],
      type: 'padi',
      hasTabs: false,
      pictureImages: ['/asset/padi1.png', '/asset/padi2.png', '/asset/padi3.png']
    },
    {
      id: 3,
      title: 'Jokkaki',
      image: '/asset/jokkaki.png',
      role: 'Fullstack Developer',
      year: '2025',
      description: 'Interactive tourism polling website that allows users to vote for tourist destinations and view polling results.',
      tags: ['html', 'css', 'javascript', 'php', 'mariadb'],
      type: 'jokkaki',
      hasTabs: false,
      pictureImages: Array.from({ length: 16 }, (_, i) => `/asset/jokkaki${i + 1}.png`)
    }
  ]

  // Close popup
  const closePopup = () => {
    setSelectedProject(null)
    setActiveTab('wireframe')
    setCurrentImageIndex(0)
    setShowPictureGrid(false)
  }

  // Open lightbox
  const openLightbox = (image) => {
    setLightboxImage(image)
  }

  // Close lightbox
  const closeLightbox = () => {
    setLightboxImage(null)
  }

  // Get current images based on active tab
  const getCurrentImages = () => {
    if (!selectedProject) return []
    if (selectedProject.type === 'medipulse') {
      if (activeTab === 'wireframe') return selectedProject.wireframeImages
      if (activeTab === 'mockup') return selectedProject.mockupImages
      if (activeTab === 'implementation') return selectedProject.implementationImages
    }
    return []
  }

  return (
    <>
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-20 min-h-screen bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* ============ HOME SECTION ============ */}
          <section id="home" className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Left Side - Text Content with SVG Animated Border */}
            <div className="flex-1 relative">
              <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                <rect
                  x="4"
                  y="4"
                  width="calc(100% - 8px)"
                  height="calc(100% - 8px)"
                  rx="20"
                  ry="20"
                  fill="none"
                  stroke="#E99B9B"
                  strokeWidth="3"
                  strokeDasharray="1200"
                  strokeDashoffset="1200"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="1200"
                    to="0"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
              
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg relative z-0">
                <div className="content-wrapper">
                  <h3 className="text-black text-xl md:text-2xl font-semibold mb-3">
                    Hi, I'm
                  </h3>
                  
                  <h1 className="text-[#E99B9B] text-4xl md:text-6xl font-bold mb-4 min-h-[5rem]">
                    {displayText}
                    {isAnimating && currentIndex < fullName.length && (
                      <span className="blinking-cursor">|</span>
                    )}
                  </h1>
                  
                  <p className="text-black text-base md:text-lg mb-4 font-semibold">
                    Final Year Informatics Student &amp; Aspiring Front-End Developer
                  </p>
                  
                  <p className="text-black text-sm md:text-base opacity-80">
                    Interested in web development and UI/UX design, with experience in building academic web projects and modern user interfaces.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Circular Photo */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#E99B9B] shadow-2xl">
                  <Image
                    src="/asset/me.png"
                    alt="Ainul Hidayah"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            
          </section>

          {/* ============ ABOUT SECTION ============ */}
          <section id="about" className="mt-32">
            <h2 className="text-3xl font-bold text-black text-center mb-12">
              About <span className="text-[#E99B9B]">Me</span>
            </h2>
            
            <div className="relative bg-white/40 rounded-3xl p-8 shadow-xl overflow-hidden min-h-[450px] max-w-4xl mx-auto">
              <div className="absolute bouncing-ball-1">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/asset/coding.png"
                    alt="Coding"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <div className="absolute bouncing-ball-2">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/asset/laptop.png"
                    alt="Laptop"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <div className="relative z-10 text-left">
                <p className="text-black text-base md:text-lg leading-relaxed mb-5">
                  I am an Informatics student from Makassar, South Sulawesi, currently studying at Universitas Ichsan Sidenreng Rappang.
                </p>
                
                <p className="text-black text-base md:text-lg leading-relaxed mb-5">
                  I enjoy building clean and responsive web interfaces while exploring modern frontend technologies such as Next.js and Tailwind CSS. I also have experience developing academic systems using PHP, Java Spring Boot and MySQL.
                </p>
                
                <p className="text-black text-base md:text-lg leading-relaxed">
                  My goal is to become a frontend developer who can combine aesthetic design with functional user experiences.
                </p>
              </div>
            </div>
          </section>

          {/* ============ SKILLS SECTION ============ */}
          <section id="skills" className="mt-32">
            <h2 className="text-3xl font-bold text-black text-center mb-12">
              My <span className="text-[#E99B9B]">Skills</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                
                <div className="bg-white p-4 rounded-xl text-center shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/asset/css.svg" alt="CSS" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-black font-semibold">CSS</p>
                </div>
                
                <div className="bg-white p-4 rounded-xl text-center shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/asset/figma.png" alt="Figma" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-black font-semibold">Figma</p>
                </div>
                
                <div className="bg-white p-4 rounded-xl text-center shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/asset/git.png" alt="Git" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-black font-semibold">Git</p>
                </div>
                
                <div className="bg-white p-4 rounded-xl text-center shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/asset/html.png" alt="HTML" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-black font-semibold">HTML</p>
                </div>
                
                <div className="bg-white p-4 rounded-xl text-center shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/asset/java.png" alt="Java" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-black font-semibold">Java</p>
                </div>
                
                <div className="bg-white p-4 rounded-xl text-center shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/asset/js.webp" alt="JavaScript" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-black font-semibold">JavaScript</p>
                </div>
                
                <div className="bg-white p-4 rounded-xl text-center shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/asset/nextjs.png" alt="Next.js" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-black font-semibold">Next.js</p>
                </div>
                
                <div className="bg-white p-4 rounded-xl text-center shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/asset/php.png" alt="PHP" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-black font-semibold">PHP</p>
                </div>
                
              </div>
            </div>
          </section>

          {/* ============ PROJECTS SECTION ============ */}
          <section id="projects" className="mt-32">
            <h2 className="text-3xl font-bold text-black text-center mb-12">
              My <span className="text-[#E99B9B]">Projects</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-black mb-2">{project.title}</h3>
                    <p className="text-black opacity-70 mb-4 line-clamp-2">{project.description.substring(0, 100)}...</p>
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="bg-[#E99B9B] hover:bg-black text-white px-6 py-2 rounded-full transition-all duration-300"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              ))}
              
            </div>
          </section>

          {/* ============ CONTACT SECTION ============ */}
          <section id="contact" className="mt-32 mb-20">
            <h2 className="text-3xl font-bold text-black text-center mb-12">
              Contact <span className="text-[#E99B9B]">Me</span>
            </h2>
            <div className="max-w-2xl mx-auto bg-white/50 rounded-2xl p-8 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300">
                  <div className="w-10 h-10 bg-[#E99B9B] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-black opacity-60">Email</p>
                    <p className="text-black font-medium">ainulhidayah16@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300">
                  <div className="w-10 h-10 bg-[#E99B9B] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-black opacity-60">GitHub</p>
                    <p className="text-black font-medium">github.com/ainulhidayah</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Ainul Hidayah. All rights reserved.</p>
        </div>
      </footer>

      {/* ============ POPUP MODAL ============ */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={closePopup}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            
            {/* Header Popup */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-black">{selectedProject.title}</h2>
                <p className="text-[#E99B9B] mt-1">{selectedProject.role} | {selectedProject.year}</p>
              </div>
              <button onClick={closePopup} className="text-gray-500 hover:text-black text-3xl">&times;</button>
            </div>
            
            {/* Body Popup */}
            <div className="p-6">
              
              {/* Medipulse Tabs */}
              {selectedProject.type === 'medipulse' && (
                <div className="mb-6">
                  <div className="flex gap-3 border-b pb-3">
                    <button 
                      onClick={() => { setActiveTab('wireframe'); setShowPictureGrid(true); }}
                      className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'wireframe' ? 'bg-[#E99B9B] text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
                    >
                      Wireframe
                    </button>
                    <button 
                      onClick={() => { setActiveTab('mockup'); setShowPictureGrid(true); }}
                      className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'mockup' ? 'bg-[#E99B9B] text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
                    >
                      Mockup
                    </button>
                    <button 
                      onClick={() => { setActiveTab('implementation'); setShowPictureGrid(true); }}
                      className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'implementation' ? 'bg-[#E99B9B] text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
                    >
                      Implementation
                    </button>
                  </div>
                  
                  {/* Image Grid */}
                  <div className="mt-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {getCurrentImages().map((img, idx) => (
                        <div 
                          key={idx} 
                          className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group hover:shadow-xl transition-all"
                          onClick={() => openLightbox(img)}
                        >
                          <img 
                            src={img} 
                            alt={`${activeTab} ${idx + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 text-white text-sm bg-black/50 px-2 py-1 rounded">Click to enlarge</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* PADI or Jokkaki Picture Grid */}
              {(selectedProject.type === 'padi' || selectedProject.type === 'jokkaki') && (
                <div className="mb-6">
                  <button 
                    onClick={() => setShowPictureGrid(!showPictureGrid)}
                    className="bg-[#E99B9B] hover:bg-black text-white px-6 py-2 rounded-full transition-all duration-300 mb-4"
                  >
                    {showPictureGrid ? 'Hide Pictures' : 'Show Pictures'}
                  </button>
                  
                  {showPictureGrid && (
                    <div className="mt-4">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {selectedProject.pictureImages.map((img, idx) => (
                          <div 
                            key={idx} 
                            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group hover:shadow-xl transition-all"
                            onClick={() => openLightbox(img)}
                          >
                            <img 
                              src={img} 
                              alt={`Picture ${idx + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 text-white text-sm bg-black/50 px-2 py-1 rounded">Click to enlarge</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-black mb-3">Description</h3>
                <p className="text-black leading-relaxed">{selectedProject.description}</p>
              </div>
              
              {/* Tags */}
              <div>
                <h3 className="text-xl font-bold text-black mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="bg-[#E99B9B]/20 text-[#E99B9B] px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}

      {/* ============ LIGHTBOX FULLSCREEN ============ */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-[#E99B9B] transition-colors"
            >
              &times;
            </button>
            <img 
              src={lightboxImage} 
              alt="Fullscreen preview"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        .blinking-cursor {
          animation: blink 0.7s infinite;
          font-weight: normal;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .bouncing-ball-1 {
          position: absolute;
          bottom: 10px;
          left: 10px;
          animation: randomBounce1 7s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
          z-index: 5;
        }
        
        @keyframes randomBounce1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          15% { transform: translate(80px, -60px) rotate(120deg); }
          30% { transform: translate(160px, 20px) rotate(240deg); }
          45% { transform: translate(100px, -80px) rotate(400deg); }
          60% { transform: translate(200px, 30px) rotate(550deg); }
          75% { transform: translate(250px, -40px) rotate(700deg); }
          90% { transform: translate(180px, 50px) rotate(850deg); }
          100% { transform: translate(0, 0) rotate(1000deg); }
        }
        
        .bouncing-ball-2 {
          position: absolute;
          top: 10px;
          right: 10px;
          animation: randomBounce2 9s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
          z-index: 5;
        }
        
        @keyframes randomBounce2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          12% { transform: translate(-60px, 50px) rotate(100deg); }
          25% { transform: translate(-120px, -30px) rotate(200deg); }
          37% { transform: translate(-180px, 60px) rotate(320deg); }
          50% { transform: translate(-100px, -50px) rotate(450deg); }
          62% { transform: translate(-220px, 20px) rotate(580deg); }
          75% { transform: translate(-150px, 70px) rotate(720deg); }
          87% { transform: translate(-80px, -20px) rotate(860deg); }
          100% { transform: translate(0, 0) rotate(1000deg); }
        }
        
        .bouncing-ball-1:hover, .bouncing-ball-2:hover {
          animation-play-state: paused;
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }
        
        @media (max-width: 640px) {
          .bouncing-ball-1,
          .bouncing-ball-2 {
            display: none;
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  )
}