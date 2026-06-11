'use client'

import Navbar from './components/Navbar'
import HorizontalCatParade from './components/HorizontalCatParade'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function Home() {
  const { language, t } = useLanguage()
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)
  
  // Popup states
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeTab, setActiveTab] = useState('wireframe')
  const [lightboxImage, setLightboxImage] = useState(null)
  const [showPictureGrid, setShowPictureGrid] = useState(false)
  
  const fullName = 'Ainul Hidayah'
  
  // Animasi huruf
  useEffect(() => {
    if (isAnimating && currentIndex < fullName.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullName[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timer)
    } else if (isAnimating && currentIndex === fullName.length) {
      const resetTimer = setTimeout(() => {
        setDisplayText('')
        setCurrentIndex(0)
      }, 3000)
      return () => clearTimeout(resetTimer)
    }
  }, [currentIndex, isAnimating, fullName])

  // Project data dengan BAHASA INGGRIS DAN INDONESIA
  const getProjects = () => {
    const projectsData = {
      en: [
        {
          id: 1,
          title: 'Medipulse',
          image: '/asset/Medipulse.png',
          role: 'UI/UX Designer',
          year: '2024',
          techStack: ['Figma', 'UI/UX Design', 'Prototyping'],
          github: 'https://github.com/ainulh15/medipulse',
          description: 'Medipulse is a medication reminder website interface designed with a clean and user-friendly approach to help users manage medication schedules and monitor daily health activities.',
          tags: ['Figma', 'UI/UX Design', 'Healthcare', 'Responsive Design'],
          type: 'medipulse',
          hasTabs: true,
          wireframeImages: Array.from({ length: 27 }, (_, i) => `/asset/Wireframe/${i + 1}.png`),
          mockupImages: Array.from({ length: 23 }, (_, i) => `/asset/Medipulse${i + 1}.png`),
          implementationImages: Array.from({ length: 22 }, (_, i) => `/asset/Implementasi/${i + 1}.png`)
        },
        {
          id: 2,
          title: 'PADI',
          subtitle: 'Pencarian Arsip dan Dokumen Informasi',
          image: '/asset/Padi.png',
          role: 'Fullstack Developer',
          year: '2025',
          techStack: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/ainulh15/padi',
          description: 'Web-based land book search system designed to simplify document searching and borrowing processes.',
          tags: ['HTML', 'CSS', 'JavaScript', 'Java Spring Boot', 'MariaDB'],
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
          techStack: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
          github: 'https://github.com/ainulh15/jokkaki',
          description: 'Interactive tourism polling website that allows users to vote for tourist destinations and view polling results.',
          tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MariaDB'],
          type: 'jokkaki',
          hasTabs: false,
          pictureImages: Array.from({ length: 16 }, (_, i) => `/asset/jokkaki${i + 1}.png`)
        }
      ],
      id: [
        {
          id: 1,
          title: 'Medipulse',
          image: '/asset/medipulse.png',
          role: 'UI/UX Designer',
          year: '2024',
          techStack: ['Figma', 'UI/UX Design', 'Prototyping'],
          github: 'https://github.com/ainulh15/medipulse',
          description: 'Medipulse adalah antarmuka website pengingat obat yang dirancang dengan pendekatan bersih dan ramah pengguna untuk membantu mengelola jadwal minum obat dan memantau aktivitas kesehatan harian.',
          tags: ['Figma', 'UI/UX Design', 'Healthcare', 'Responsive Design'],
          type: 'medipulse',
          hasTabs: true,
          wireframeImages: Array.from({ length: 27 }, (_, i) => `/asset/wireframe/${i + 1}.png`),
          mockupImages: Array.from({ length: 23 }, (_, i) => `/asset/medipulse${i + 1}.png`),
          implementationImages: Array.from({ length: 22 }, (_, i) => `/asset/implementasi/${i + 1}.png`)
        },
        {
          id: 2,
          title: 'PADI',
          subtitle: 'Pencarian Arsip dan Dokumen Informasi',
          image: '/asset/padi.png',
          role: 'Fullstack Developer',
          year: '2025',
          techStack: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/ainulh15/padi',
          description: 'Sistem pencarian buku tanah berbasis web yang dirancang untuk menyederhanakan proses pencarian dan peminjaman dokumen.',
          tags: ['HTML', 'CSS', 'JavaScript', 'Java Spring Boot', 'MariaDB'],
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
          techStack: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
          github: 'https://github.com/ainulh15/jokkaki',
          description: 'Website polling wisata interaktif yang memungkinkan pengguna untuk memilih destinasi wisata dan melihat hasil polling.',
          tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MariaDB'],
          type: 'jokkaki',
          hasTabs: false,
          pictureImages: Array.from({ length: 16 }, (_, i) => `/asset/jokkaki${i + 1}.png`)
        }
      ]
    }
    return projectsData[language]
  }

  const projects = getProjects()

  const closePopup = () => {
    setSelectedProject(null)
    setActiveTab('wireframe')
    setShowPictureGrid(false)
  }

  const openLightbox = (image) => {
    setLightboxImage(image)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

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
      
      <main className="min-h-screen bg-[#FFF8E7] pt-16 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          
          {/* ============ HERO SECTION ============ */}
          <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 min-h-[calc(100vh-8rem)]">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 w-full"
            >
              <div className="bg-white rounded-2xl p-5 md:p-8 shadow-lg border border-[#F0E8DC]">
                <div className="space-y-4 md:space-y-5">
                  
                  <h3 className="text-[#8B7355] text-xs md:text-sm font-mono-pixel">{t.hero.hi}</h3>
                  
                  <h1 className="text-[#E99B9B] text-3xl md:text-5xl lg:text-6xl font-black font-mono-pixel tracking-tight">
                    {displayText}
                    {isAnimating && currentIndex < fullName.length && (
                      <span className="inline-block w-0.5 h-8 md:h-10 bg-[#E99B9B] ml-1 animate-pulse"></span>
                    )}
                  </h1>
                  
                  <div className="space-y-1">
                    <p className="text-[#2C2C2C] text-lg md:text-xl font-bold font-mono-pixel tracking-tight">
                      {t.hero.status}
                    </p>
                    <p className="text-[#2C2C2C] text-base md:text-lg font-mono-pixel">
                      {t.hero.role}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-6 md:w-8 h-px bg-[#E99B9B]"></div>
                    <p className="text-[#E99B9B] text-[10px] md:text-xs font-mono-pixel">✦</p>
                    <div className="w-6 md:w-8 h-px bg-[#E99B9B]"></div>
                  </div>
                  
                  <p className="text-[#6B6B6B] text-xs md:text-sm max-w-lg leading-relaxed font-mono-pixel">
                    {t.hero.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a 
                      href={t.hero.cvFile} 
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#E99B9B] border-2 border-[#E99B9B] text-white rounded-full hover:bg-white hover:text-[#E99B9B] transition-all duration-300 font-bold text-xs md:text-sm font-mono-pixel shadow-[3px_3px_0_0_#d48484] hover:shadow-none"
                    >
                      <span>📄</span>
                      {t.hero.downloadCv}
                    </a>
                    <a 
                      href="#projects"
                      className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#E99B9B] text-[#E99B9B] rounded-full hover:bg-[#E99B9B] hover:text-white transition-all duration-300 font-bold text-xs md:text-sm font-mono-pixel"
                    >
                      {t.hero.viewProjects}
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 flex justify-center w-full"
            >
              <div className="relative group">
                <div className="absolute -inset-3 md:-inset-4 rounded-full animate-float">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#E99B9B] animate-spin-slow"></div>
                </div>
                <div className="absolute -top-2 -left-2 w-4 h-4 md:w-5 md:h-5 border-t-2 border-l-2 border-[#E99B9B]"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 md:w-5 md:h-5 border-b-2 border-r-2 border-[#E99B9B]"></div>
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl animate-float">
                  <Image src="/asset/me.png" alt="Ainul Hidayah" fill className="object-cover" priority />
                </div>
                <div className="absolute -bottom-2 -left-2 text-xl opacity-60">🐾</div>
              </div>
            </motion.div>
          </section>

          {/* PARADE KUCING - HOME */}
          <HorizontalCatParade sectionId="home" />

          {/* ============ ABOUT SECTION ============ */}
          <motion.section 
            id="about" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 md:mt-24"
          >
            <div className="text-center mb-8 md:mb-10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-8 md:w-10 h-px bg-[#E99B9B]"></div>
                <span className="text-[#E99B9B] text-[10px] md:text-xs font-mono-pixel tracking-wide">✦ {t.about.title.toUpperCase()} ✦</span>
                <div className="w-8 md:w-10 h-px bg-[#E99B9B]"></div>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-[#2C2C2C] tracking-tight font-mono-pixel">{t.about.title}</h2>
            </div>
            
            <div className="bg-white rounded-2xl p-5 md:p-8 shadow-lg max-w-4xl mx-auto border border-[#F0E8DC]">
              <div className="space-y-4 text-justify">
                <p className="text-[#2C2C2C] text-xs md:text-base leading-relaxed font-mono-pixel">{t.about.p1}</p>
                <p className="text-[#2C2C2C] text-xs md:text-base leading-relaxed font-mono-pixel">{t.about.p2}</p>
                <p className="text-[#2C2C2C] text-xs md:text-base leading-relaxed font-mono-pixel">{t.about.p3}</p>
              </div>
            </div>
          </motion.section>

          {/* PARADE KUCING - ABOUT */}
          <HorizontalCatParade sectionId="about" />

          {/* ============ PROJECTS SECTION ============ */}
          <motion.section 
            id="projects" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 md:mt-24"
          >
            <div className="text-center mb-8 md:mb-10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-8 md:w-10 h-px bg-[#E99B9B]"></div>
                <span className="text-[#E99B9B] text-[10px] md:text-xs font-mono-pixel tracking-wide">✦ {t.projects.title.toUpperCase()} ✦</span>
                <div className="w-8 md:w-10 h-px bg-[#E99B9B]"></div>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-[#2C2C2C] tracking-tight font-mono-pixel">{t.projects.title}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
              {projects.map((project, idx) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-[#F0E8DC]"
                >
                  <div className="h-40 md:h-48 relative overflow-hidden bg-gradient-to-br from-[#F5F0E8] to-[#EDE5D8]">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 md:px-2 md:py-0.5 rounded-md text-[9px] md:text-[10px] font-mono-pixel text-[#E99B9B] font-bold shadow-sm">
                      {project.year}
                    </div>
                  </div>
                  <div className="p-4 md:p-5">
                    <h3 className="text-base md:text-lg font-black text-[#2C2C2C] mb-1 font-mono-pixel">{project.title}</h3>
                    {project.subtitle && (
                      <p className="text-[9px] md:text-[10px] text-[#8B7355] mb-2 font-mono-pixel">{project.subtitle}</p>
                    )}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-[8px] bg-[#F5F0E8] px-1.5 py-0.5 rounded text-[#8B7355] font-mono-pixel">{tech}</span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-[8px] text-[#8B7355] font-mono-pixel">+{project.techStack.length - 3}</span>
                      )}
                    </div>
                    <p className="text-[#6B6B6B] text-[10px] md:text-xs mb-3 line-clamp-2 font-mono-pixel">{project.description.substring(0, 100)}...</p>
                    <div className="flex items-center justify-between">
                      <button onClick={() => setSelectedProject(project)} className="inline-flex items-center gap-1 text-[#E99B9B] font-bold hover:text-[#d48484] transition-colors group/btn text-[10px] md:text-xs font-mono-pixel">
                        <span>{t.projects.viewDetails}</span>
                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                      </button>
                      {project.github !== '#' && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#8B7355] hover:text-[#E99B9B] transition-colors text-sm" onClick={(e) => e.stopPropagation()}>🔗</a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* PARADE KUCING - PROJECTS */}
          <HorizontalCatParade sectionId="projects" />

          {/* ============ CONTACT SECTION ============ */}
          <motion.section 
            id="contact" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 md:mt-24 mb-12 md:mb-20"
          >
            <div className="text-center mb-8 md:mb-10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-8 md:w-10 h-px bg-[#E99B9B]"></div>
                <span className="text-[#E99B9B] text-[10px] md:text-xs font-mono-pixel tracking-wide">✦ CONTACT ✦</span>
                <div className="w-8 md:w-10 h-px bg-[#E99B9B]"></div>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-[#2C2C2C] tracking-tight font-mono-pixel">{t.contact.title}</h2>
              <p className="text-[#6B6B6B] text-sm mt-3 font-mono-pixel">{t.contact.subtitle}</p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#F0E8DC]">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (<div key={i} className="w-1 h-1 bg-[#E99B9B] rounded-full"></div>))}
                </div>
                <div className="space-y-3">
                  <a href="mailto:ainulhidayah16@gmail.com" className="flex items-center gap-3 md:gap-4 p-3 bg-[#F5F0E8] rounded-xl hover:shadow-md transition-all duration-300 group border border-transparent hover:border-[#E99B9B]">
                    <div className="w-10 h-10 flex items-center justify-center text-2xl">📧</div>
                    <div>
                      <p className="text-[8px] md:text-[9px] text-[#8B7355] font-mono-pixel tracking-wide">{t.contact.email}</p>
                      <p className="text-[#2C2C2C] font-medium text-xs md:text-sm font-mono-pixel">ainulhidayah16@gmail.com</p>
                    </div>
                  </a>
                  <a href="https://github.com/ainulh15" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-4 p-3 bg-[#F5F0E8] rounded-xl hover:shadow-md transition-all duration-300 group border border-transparent hover:border-[#E99B9B]">
                    <div className="w-10 h-10 flex items-center justify-center text-2xl">🐙</div>
                    <div>
                      <p className="text-[8px] md:text-[9px] text-[#8B7355] font-mono-pixel tracking-wide">{t.contact.github}</p>
                      <p className="text-[#2C2C2C] font-medium text-xs md:text-sm font-mono-pixel">github.com/ainulh15</p>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/ainul-hidayah-519507149/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-4 p-3 bg-[#F5F0E8] rounded-xl hover:shadow-md transition-all duration-300 group border border-transparent hover:border-[#E99B9B]">
                    <div className="w-10 h-10 flex items-center justify-center text-2xl">🔗</div>
                    <div>
                      <p className="text-[8px] md:text-[9px] text-[#8B7355] font-mono-pixel tracking-wide">{t.contact.linkedin}</p>
                      <p className="text-[#2C2C2C] font-medium text-xs md:text-sm font-mono-pixel">linkedin.com/in/ainul-hidayah</p>
                    </div>
                  </a>
                </div>
                <div className="mt-6 pt-4 border-t border-[#F0E8DC] text-center">
                  <a href={t.hero.cvFile} download className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E99B9B] text-white rounded-full hover:bg-[#d48484] transition-all duration-300 font-bold text-sm font-mono-pixel">📄 {t.contact.downloadCv}</a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PARADE KUCING - CONTACT */}
          <HorizontalCatParade sectionId="contact" />

        </div>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="bg-[#2C2C2C] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-1 mb-3">{[...Array(5)].map((_, i) => (<div key={i} className="w-1 h-1 bg-[#E99B9B] rounded-full"></div>))}</div>
          <p className="text-[9px] md:text-[10px] text-white/50 font-mono-pixel tracking-wide">© 2024 AINUL HIDAYAH — {t.footer}</p>
        </div>
      </footer>

      {/* ============ POPUP PROJECT ============ */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={closePopup}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative border-4 rounded-2xl shadow-2xl w-[95%] max-w-3xl bg-white mt-14"
            style={{ borderColor: '#FF9AA2' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Dua kucing SVG di atas popup */}
            <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
              <div className="bg-white rounded-full p-2 shadow-md border-2" style={{ borderColor: '#FF9AA2' }}>
                <svg width="36" height="30" viewBox="0 0 40 35">
                  <ellipse cx="20" cy="22" rx="14" ry="10" fill="#FF9AA2" stroke="#1A1A1D" strokeWidth="1.5" />
                  <circle cx="15" cy="16" r="8" fill="#FF9AA2" stroke="#1A1A1D" strokeWidth="1.5" />
                  <polygon points="9,10 6,2 13,7" fill="#FF9AA2" stroke="#1A1A1D" strokeWidth="1" />
                  <polygon points="21,10 24,2 17,7" fill="#FF9AA2" stroke="#1A1A1D" strokeWidth="1" />
                  <circle cx="12" cy="14" r="2" fill="#1A1A1D" />
                  <circle cx="18" cy="14" r="2" fill="#1A1A1D" />
                  <polygon points="14,18 15,20 13,20" fill="#1A1A1D" />
                  <path d="M14 20 Q15 22 13 22" stroke="#1A1A1D" strokeWidth="0.8" fill="none" />
                  <path d="M14 20 Q15 22 16 22" stroke="#1A1A1D" strokeWidth="0.8" fill="none" />
                </svg>
              </div>
              <div className="bg-white rounded-full p-2 shadow-md border-2" style={{ borderColor: '#C7CEEA' }}>
                <svg width="36" height="30" viewBox="0 0 40 35">
                  <ellipse cx="20" cy="22" rx="14" ry="10" fill="#C7CEEA" stroke="#1A1A1D" strokeWidth="1.5" />
                  <circle cx="15" cy="16" r="8" fill="#C7CEEA" stroke="#1A1A1D" strokeWidth="1.5" />
                  <polygon points="9,10 6,2 13,7" fill="#C7CEEA" stroke="#1A1A1D" strokeWidth="1" />
                  <polygon points="21,10 24,2 17,7" fill="#C7CEEA" stroke="#1A1A1D" strokeWidth="1" />
                  <circle cx="12" cy="14" r="2" fill="#1A1A1D" />
                  <circle cx="18" cy="14" r="2" fill="#1A1A1D" />
                  <polygon points="14,18 15,20 13,20" fill="#1A1A1D" />
                  <path d="M14 20 Q15 22 13 22" stroke="#1A1A1D" strokeWidth="0.8" fill="none" />
                  <path d="M14 20 Q15 22 16 22" stroke="#1A1A1D" strokeWidth="0.8" fill="none" />
                </svg>
              </div>
            </div>
            
            {/* Telinga popup */}
            <div className="absolute -top-2 left-6 w-5 h-3 rounded-t-full" style={{ backgroundColor: '#FF9AA2', border: '2px solid #1A1A1D' }}></div>
            <div className="absolute -top-2 right-6 w-5 h-3 rounded-t-full" style={{ backgroundColor: '#FF9AA2', border: '2px solid #1A1A1D' }}></div>
            
            {/* HEADER */}
            <div className="pt-10 pb-4 px-5 rounded-t-xl" style={{ backgroundColor: '#FF9AA2' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg width="28" height="24" viewBox="0 0 40 35">
                    <ellipse cx="20" cy="22" rx="14" ry="10" fill="white" stroke="#1A1A1D" strokeWidth="1.5" />
                    <circle cx="15" cy="16" r="8" fill="white" stroke="#1A1A1D" strokeWidth="1.5" />
                    <polygon points="9,10 6,2 13,7" fill="white" stroke="#1A1A1D" strokeWidth="1" />
                    <polygon points="21,10 24,2 17,7" fill="white" stroke="#1A1A1D" strokeWidth="1" />
                    <circle cx="12" cy="14" r="2" fill="#1A1A1D" />
                    <circle cx="18" cy="14" r="2" fill="#1A1A1D" />
                  </svg>
                  <h3 className="text-lg md:text-xl font-black text-white font-mono-pixel">{selectedProject.title}</h3>
                </div>
                <button onClick={closePopup} className="text-white text-2xl hover:text-[#1A1A1D] transition-colors">✕</button>
              </div>
              <p className="text-white/80 mt-1 font-mono-pixel text-[10px] md:text-xs font-bold ml-8">{selectedProject.role} | {selectedProject.year}</p>
            </div>
            
            {/* BODY */}
            <div className="p-5 max-h-[55vh] overflow-y-auto">
              {/* DESCRIPTION */}
              <div className="mb-4">
                <p className="text-[11px] font-black mb-2 font-mono-pixel" style={{ color: '#B5EAD7' }}>✦ {t.projectPopup.description.toUpperCase()} ✦</p>
                <p className="text-xs font-mono-pixel leading-relaxed" style={{ backgroundColor: '#FF9AA220', color: '#1A1A1D', padding: '8px 12px', borderRadius: '12px' }}>
                  {selectedProject.description}
                </p>
              </div>
              
              {/* TECH STACK */}
              <div className="mb-4">
                <p className="text-[11px] font-black mb-2 font-mono-pixel" style={{ color: '#B5EAD7' }}>✦ {t.projectPopup.techStack.toUpperCase()} ✦</p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 text-[10px] font-mono-pixel rounded-full" style={{ backgroundColor: '#FF9AA220', color: '#1A1A1D' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* GALLERY SECTION - MEDIPULSE */}
              {selectedProject.type === 'medipulse' && (
                <div className="mb-4 border-t border-[#F0E8DC] pt-3">
                  <div className="flex gap-2 flex-wrap">
                    {['wireframe', 'mockup', 'implementation'].map((tab) => {
                      let tabLabel = ''
                      if (tab === 'wireframe') tabLabel = t.projects.wireframe
                      else if (tab === 'mockup') tabLabel = t.projects.mockup
                      else tabLabel = t.projects.implementation
                      return (
                        <button 
                          key={tab}
                          onClick={() => { setActiveTab(tab); setShowPictureGrid(true); }}
                          className={`px-2.5 py-1.5 rounded-lg transition-all font-bold capitalize text-[10px] ${activeTab === tab ? 'bg-[#FF9AA2] text-white' : 'bg-[#F5F0E8] text-[#2C2C2C] hover:bg-[#EDE5D8]'}`}
                        >
                          {tabLabel}
                        </button>
                      )
                    })}
                  </div>
                  {showPictureGrid && (
                    <div className="mt-3">
                      <div className="grid grid-cols-3 gap-2">
                        {getCurrentImages().slice(0, 6).map((img, idx) => (
                          <div key={idx} className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group shadow-sm" onClick={() => openLightbox(img)}>
                            <img src={img} alt={`${activeTab} ${idx + 1}`} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                      {getCurrentImages().length > 6 && (
                        <p className="text-[9px] text-center mt-2 text-[#8B7355] font-mono-pixel">+{getCurrentImages().length - 6} more images</p>
                      )}
                    </div>
                  )}
                  {!showPictureGrid && (
                    <div className="mt-3 p-3 text-center bg-[#F5F0E8] rounded-lg">
                      <p className="text-[9px] text-[#8B7355] font-mono-pixel">{t.projects.clickToView}</p>
                    </div>
                  )}
                </div>
              )}
              
              {/* GALLERY SECTION - PADI and JOKKAKI */}
              {(selectedProject.type === 'padi' || selectedProject.type === 'jokkaki') && (
                <div className="mb-4 border-t border-[#F0E8DC] pt-3">
                  <button 
                    onClick={() => setShowPictureGrid(!showPictureGrid)}
                    className="bg-[#FF9AA2] hover:bg-[#d48484] text-white px-2.5 py-1.5 rounded-lg transition-all duration-300 font-bold text-[10px]"
                  >
                    {showPictureGrid ? t.projects.hideGallery : t.projects.showGallery}
                  </button>
                  {showPictureGrid && (
                    <div className="mt-3">
                      <div className="grid grid-cols-3 gap-2">
                        {selectedProject.pictureImages.slice(0, 6).map((img, idx) => (
                          <div key={idx} className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group shadow-sm" onClick={() => openLightbox(img)}>
                            <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                      {selectedProject.pictureImages.length > 6 && (
                        <p className="text-[9px] text-center mt-2 text-[#8B7355] font-mono-pixel">+{selectedProject.pictureImages.length - 6} more images</p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* FOOTER */}
            <div className="p-3 rounded-b-xl flex justify-between items-center" style={{ backgroundColor: '#E2F0CB', borderTop: '2px solid #FF9AA2' }}>
              <div className="flex items-center gap-2">
                <span className="text-sm">🐱</span>
                <span className="text-[9px] font-mono-pixel animate-pulse" style={{ color: '#B5EAD7' }}>{t.popup.meow}</span>
              </div>
              <div className="flex gap-1">
                <span className="text-xs">🐾</span>
                <span className="text-xs">🐾</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* LIGHTBOX */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeLightbox} className="absolute -top-8 md:-top-10 right-0 text-white/70 hover:text-white text-xl md:text-2xl transition-colors">✕</button>
            <img src={lightboxImage} alt="Preview" className="w-full h-auto rounded-lg shadow-2xl" />
          </div>
        </div>
      )}

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        * { font-family: 'Space Mono', monospace; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin 10s linear infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </>
  )
}