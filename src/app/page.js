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
  const [lightboxImage, setLightboxImage] = useState(null)
  const [showPictureGrid, setShowPictureGrid] = useState(false)
  
  const fullName = 'Ainul Hidayah'
  
  // Animasi huruf muncul 1 per 1
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

  // Project data
  const projects = [
    {
      id: 1,
      title: 'Medipulse',
      image: '/asset/Medipulse.png',
      role: 'UI/UX Designer',
      year: '2024',
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
      description: 'Web-based land book search system designed to simplify document searching and borrowing processes.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Java Spring Boot', 'MariaDB'],
      type: 'padi',
      hasTabs: false,
      pictureImages: ['/asset/padi1.png', '/asset/padi2.png', '/asset/padi3.png']
    },
    {
      id: 3,
      title: 'Jokkaki',
      image: '/asset/Jokkaki.png',
      role: 'Fullstack Developer',
      year: '2025',
      description: 'Interactive tourism polling website that allows users to vote for tourist destinations and view polling results.',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MariaDB'],
      type: 'jokkaki',
      hasTabs: false,
      pictureImages: Array.from({ length: 16 }, (_, i) => `/asset/jokkaki${i + 1}.png`)
    }
  ]

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
      
      <main className="min-h-screen bg-[#FFF8E7] pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          
          {/* ============ HOME SECTION ============ */}
          <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
            
            {/* Left Side - Text Content */}
            <div className="flex-1 w-full">
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#E99B9B] via-[#d4a5a5] to-[#E99B9B] animate-borderMove"></div>
                  </div>
                </div>
                
                <div className="relative bg-white rounded-2xl p-5 md:p-8 shadow-lg">
                  <div className="absolute -top-3 -right-3 bg-[#2C2C2C] text-white text-[10px] font-mono-pixel px-2 py-1 rounded-full rotate-6 shadow-md">
                    ✦ PORTFOLIO 2026 ✦
                  </div>
                  
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-px bg-[#E99B9B]"></div>
                      <p className="text-[#8B7355] text-[11px] md:text-xs font-mono-pixel tracking-wide">&gt; INTRODUCTION_</p>
                    </div>
                    
                    <h3 className="text-[#8B7355] text-xs md:text-sm font-mono-pixel">Hi, I'm</h3>
                    
                    {/* Nama warna PINK */}
                    <h1 className="text-[#E99B9B] text-3xl md:text-5xl lg:text-6xl font-black font-mono-pixel tracking-tight">
                      {displayText}
                      {isAnimating && currentIndex < fullName.length && (
                        <span className="inline-block w-0.5 h-8 md:h-10 bg-[#E99B9B] ml-1 animate-pulse"></span>
                      )}
                    </h1>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-6 md:w-8 h-px bg-[#E99B9B]"></div>
                      <p className="text-[#E99B9B] text-[10px] md:text-xs font-mono-pixel">✦</p>
                      <div className="w-6 md:w-8 h-px bg-[#E99B9B]"></div>
                    </div>
                    
                    <p className="text-[#2C2C2C] text-sm md:text-base font-bold font-mono-pixel tracking-tight">
                      Final Year Informatics Student <br />
                      <span className="text-[#E99B9B]">&amp; Aspiring Full-Stack Web Developer</span>
                    </p>
                    
                    <p className="text-[#6B6B6B] text-xs md:text-sm max-w-lg leading-relaxed font-mono-pixel">
                    Interested in full-stack web development and UI/UX design, with experience in building academic web applications using both front-end and back-end technologies.
                    </p>
                    
                    <div className="pt-2">
                      <a 
                        href="/asset/CV ATS Ainul Hidayah.pdf" 
                        download
                        className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#E99B9B] text-[#E99B9B] rounded-full hover:bg-[#E99B9B] hover:text-white transition-all duration-300 font-bold text-xs md:text-sm font-mono-pixel"
                      >
                        <span>📄</span>
                        Check My CV
                        <span className="text-sm md:text-base">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Circular Profile Image */}
            <div className="flex-1 flex justify-center w-full">
              <div className="relative group">
                <div className="absolute -inset-3 md:-inset-4 rounded-full">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#E99B9B] animate-spin-slow"></div>
                </div>
                <div className="absolute -inset-6 md:-inset-8 rounded-full opacity-50">
                  <div className="absolute inset-0 rounded-full border border-[#E99B9B]/30 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }}></div>
                </div>
                
                <div className="absolute -top-2 -left-2 w-4 h-4 md:w-5 md:h-5 border-t-2 border-l-2 border-[#E99B9B]"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 md:w-5 md:h-5 border-b-2 border-r-2 border-[#E99B9B]"></div>
                
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/asset/me.png"
                    alt="Ainul Hidayah"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                <div className="absolute -top-2 -right-2 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#E99B9B] rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#E99B9B] rounded-full"></div>
              </div>
            </div>
            
          </section>

          {/* ============ ABOUT SECTION ============ */}
          <section id="about" className="mt-16 md:mt-24">
            <div className="text-center mb-8 md:mb-10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-8 md:w-10 h-px bg-[#E99B9B]"></div>
                <span className="text-[#E99B9B] text-[10px] md:text-xs font-mono-pixel tracking-wide">✦ ABOUT ✦</span>
                <div className="w-8 md:w-10 h-px bg-[#E99B9B]"></div>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-[#2C2C2C] tracking-tight font-mono-pixel">
                Get to <span className="text-[#E99B9B]">Know Me</span>
              </h2>
            </div>
            
            <div className="relative bg-white rounded-2xl p-5 md:p-8 shadow-lg max-w-4xl mx-auto border border-[#F0E8DC] overflow-hidden min-h-[320px]">
              {/* Bouncing Balls - tampil di semua ukuran, di belakang tulisan, tanpa border */}
                <div className="absolute bouncing-ball-1">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shadow-md">
                  <Image src="/asset/coding.png" alt="Coding" width={64} height={64} className="object-cover w-full h-full" />
                </div>
              </div>
              
              <div className="absolute bouncing-ball-2">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shadow-md">
                  <Image src="/asset/laptop.png" alt="Laptop" width={64} height={64} className="object-cover w-full h-full" />
                </div>
              </div>
              
              <div className="relative z-0 space-y-3 md:space-y-4 text-justify">
                <p className="text-[#2C2C2C] text-xs md:text-base leading-relaxed font-mono-pixel">
                  I am an Informatics student from Makassar, South Sulawesi, currently studying at <span className="text-[#E99B9B] font-bold">Universitas Ichsan Sidenreng Rappang</span>.
                </p>
                
                <p className="text-[#2C2C2C] text-xs md:text-base leading-relaxed font-mono-pixel">
                  I enjoy building clean and responsive web interfaces while exploring modern frontend technologies such as <span className="text-[#E99B9B] font-bold">Next.js and Tailwind CSS</span>. I also have experience developing academic systems using PHP, Java Spring Boot and MySQL.
                </p>
                
                <p className="text-[#2C2C2C] text-xs md:text-base leading-relaxed font-mono-pixel">
                  My goal is to become a frontend developer who can combine aesthetic design with functional user experiences.
                </p>
              </div>
            </div>
          </section>

          {/* ============ SKILLS SECTION ============ */}
          <section id="skills" className="mt-16 md:mt-24">
            <div className="text-center mb-8 md:mb-10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-8 md:w-10 h-px bg-[#E99B9B]"></div>
                <span className="text-[#E99B9B] text-[10px] md:text-xs font-mono-pixel tracking-wide">✦ SKILLS ✦</span>
                <div className="w-8 md:w-10 h-px bg-[#E99B9B]"></div>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-[#2C2C2C] tracking-tight font-mono-pixel">
                My <span className="text-[#E99B9B]">Expertise</span>
              </h2>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {[
                  { name: 'CSS', icon: '/asset/css.svg' },
                  { name: 'Figma', icon: '/asset/figma.png' },
                  { name: 'Git', icon: '/asset/git.png' },
                  { name: 'HTML', icon: '/asset/html.png' },
                  { name: 'Java', icon: '/asset/Java.png' },
                  { name: 'JavaScript', icon: '/asset/js.webp' },
                  { name: 'Next.js', icon: '/asset/nextjs.png' },
                  { name: 'PHP', icon: '/asset/PHP.png' }
                ].map((skill, idx) => (
                  <div key={idx} className="group bg-white rounded-xl p-3 md:p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#F0E8DC] hover:border-[#E99B9B] cursor-pointer">
                    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 flex items-center justify-center">
                      <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <p className="text-[#2C2C2C] font-bold text-[11px] md:text-xs tracking-wide font-mono-pixel">{skill.name}</p>
                    <div className="w-4 md:w-6 h-px bg-[#E99B9B] mx-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============ PROJECTS SECTION ============ */}
          <section id="projects" className="mt-16 md:mt-24">
            <div className="text-center mb-8 md:mb-10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-8 md:w-10 h-px bg-[#E99B9B]"></div>
                <span className="text-[#E99B9B] text-[10px] md:text-xs font-mono-pixel tracking-wide">✦ PROJECTS ✦</span>
                <div className="w-8 md:w-10 h-px bg-[#E99B9B]"></div>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-[#2C2C2C] tracking-tight font-mono-pixel">
                Featured <span className="text-[#E99B9B]">Work</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {projects.map((project) => (
                <div key={project.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-[#F0E8DC]">
                  <div className="h-40 md:h-48 relative overflow-hidden bg-gradient-to-br from-[#F5F0E8] to-[#EDE5D8]">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 md:px-2 md:py-0.5 rounded-md text-[9px] md:text-[10px] font-mono-pixel text-[#E99B9B] font-bold shadow-sm">
                      {project.year}
                    </div>
                  </div>
                  <div className="p-4 md:p-5">
                    <h3 className="text-base md:text-lg font-black text-[#2C2C2C] mb-1 font-mono-pixel">{project.title}</h3>
                    {project.subtitle && (
                      <p className="text-[9px] md:text-[10px] text-[#8B7355] mb-2 font-mono-pixel">{project.subtitle}</p>
                    )}
                    <p className="text-[#6B6B6B] text-[10px] md:text-xs mb-3 line-clamp-2 font-mono-pixel">{project.description.substring(0, 100)}...</p>
                    <button onClick={() => setSelectedProject(project)} className="inline-flex items-center gap-1 text-[#E99B9B] font-bold hover:text-[#d48484] transition-colors group/btn text-[10px] md:text-xs font-mono-pixel">
                      <span>VIEW DETAILS</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ============ CONTACT SECTION ============ */}
          <section id="contact" className="mt-16 md:mt-24 mb-12 md:mb-20">
            <div className="text-center mb-8 md:mb-10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-8 md:w-10 h-px bg-[#E99B9B]"></div>
                <span className="text-[#E99B9B] text-[10px] md:text-xs font-mono-pixel tracking-wide">✦ CONTACT ✦</span>
                <div className="w-8 md:w-10 h-px bg-[#E99B9B]"></div>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-[#2C2C2C] tracking-tight font-mono-pixel">
                Let's <span className="text-[#E99B9B]">Connect</span>
              </h2>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg border border-[#F0E8DC]">
                <div className="flex justify-center gap-1 mb-4 md:mb-5">
                  {[...Array(5)].map((_, i) => (<div key={i} className="w-1 h-1 bg-[#E99B9B] rounded-full"></div>))}
                </div>
                
                <div className="space-y-3">
                  {/* GMAIL */}
                  <a href="mailto:ainulhidayah16@gmail.com" className="flex items-center gap-3 md:gap-4 p-3 bg-[#F5F0E8] rounded-xl hover:shadow-md transition-all duration-300 group border border-transparent hover:border-[#E99B9B]">
                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                      <img src="/asset/Gmail.png" alt="Gmail" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[9px] text-[#8B7355] font-mono-pixel tracking-wide">EMAIL ADDRESS</p>
                      <p className="text-[#2C2C2C] font-medium text-xs md:text-sm font-mono-pixel">ainulhidayah16@gmail.com</p>
                    </div>
                  </a>
                  
                  {/* GITHUB */}
                  <a href="https://github.com/ainulh15" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-4 p-3 bg-[#F5F0E8] rounded-xl hover:shadow-md transition-all duration-300 group border border-transparent hover:border-[#E99B9B]">
                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                      <img src="/asset/github.png" alt="GitHub" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[9px] text-[#8B7355] font-mono-pixel tracking-wide">GITHUB PROFILE</p>
                      <p className="text-[#2C2C2C] font-medium text-xs md:text-sm font-mono-pixel">github.com/ainulh15</p>
                    </div>
                  </a>
                  
                  {/* LINKEDIN */}
                  <a href="https://www.linkedin.com/in/ainul-hidayah-519507149/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-4 p-3 bg-[#F5F0E8] rounded-xl hover:shadow-md transition-all duration-300 group border border-transparent hover:border-[#E99B9B]">
                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                      <img src="/asset/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[9px] text-[#8B7355] font-mono-pixel tracking-wide">LINKEDIN PROFILE</p>
                      <p className="text-[#2C2C2C] font-medium text-xs md:text-sm font-mono-pixel">linkedin.com/in/ainul-hidayah</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="bg-[#2C2C2C] text-white py-5 md:py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-1 mb-2 md:mb-3">
            {[...Array(5)].map((_, i) => (<div key={i} className="w-1 h-1 bg-[#E99B9B] rounded-full"></div>))}
          </div>
          <p className="text-[9px] md:text-[10px] text-white/50 font-mono-pixel tracking-wide">
            © 2024 AINUL HIDAYAH — ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>

      {/* ============ POPUP MODAL ============ */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={closePopup}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            
            <div className="sticky top-0 bg-white border-b border-[#F0E8DC] p-4 md:p-5 flex justify-between items-start">
              <div>
                <h2 className="text-lg md:text-xl font-black text-[#2C2C2C] font-mono-pixel">{selectedProject.title}</h2>
                <p className="text-[#E99B9B] mt-1 font-mono-pixel text-[10px] md:text-xs font-bold">{selectedProject.role} | {selectedProject.year}</p>
              </div>
              <button onClick={closePopup} className="text-[#8B7355] hover:text-[#2C2C2C] text-xl md:text-2xl transition-colors">&times;</button>
            </div>
            
            <div className="p-4 md:p-5">
              {/* DESCRIPTION - DI ATAS */}
              <div className="mb-4 md:mb-5">
                <h3 className="text-sm md:text-base font-black text-[#2C2C2C] mb-2 flex items-center gap-2 font-mono-pixel">
                  <span className="w-1 h-3 md:h-4 bg-[#E99B9B] rounded-full"></span>
                  DESCRIPTION
                </h3>
                <p className="text-[#4A4A4A] text-xs md:text-sm leading-relaxed font-mono-pixel">{selectedProject.description}</p>
              </div>
              
              {/* TECHNOLOGIES - DI ATAS */}
              <div className="mb-4 md:mb-5">
                <h3 className="text-sm md:text-base font-black text-[#2C2C2C] mb-2 flex items-center gap-2 font-mono-pixel">
                  <span className="w-1 h-3 md:h-4 bg-[#E99B9B] rounded-full"></span>
                  TECHNOLOGIES
                </h3>
                <div className="flex flex-wrap gap-1">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="bg-[#E99B9B]/10 text-[#E99B9B] px-1.5 py-0.5 md:px-2 md:py-0.5 rounded-full text-[9px] md:text-[10px] font-mono-pixel font-bold">
                      #{tag.toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* MEDIPULSE - TOMBOL & GAMBAR DI BAWAH */}
              {selectedProject.type === 'medipulse' && (
                <div className="mb-5 border-t border-[#F0E8DC] pt-4">
                  <div className="flex gap-2">
                    {['wireframe', 'mockup', 'implementation'].map((tab) => (
                      <button 
                        key={tab}
                        onClick={() => { setActiveTab(tab); setShowPictureGrid(true); }}
                        className={`px-2 py-1 md:px-3 md:py-1.5 rounded-lg transition-all font-bold capitalize text-[10px] md:text-xs font-mono-pixel ${activeTab === tab ? 'bg-[#E99B9B] text-white' : 'bg-[#F5F0E8] text-[#2C2C2C] hover:bg-[#EDE5D8]'}`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  
                  {/* Gambar muncul setelah klik tombol */}
                  {showPictureGrid && (
                    <div className="mt-4">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
                        {getCurrentImages().map((img, idx) => (
                          <div 
                            key={idx} 
                            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group shadow-sm hover:shadow-md transition-all"
                            onClick={() => openLightbox(img)}
                          >
                            <img 
                              src={img} 
                              alt={`${activeTab} ${idx + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 text-white text-[8px] md:text-[10px] bg-black/50 px-1 py-0.5 rounded-full font-mono-pixel">🔍</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Pesan jika belum klik tombol */}
                  {!showPictureGrid && (
                    <div className="mt-4 p-4 text-center bg-[#F5F0E8] rounded-lg">
                      <p className="text-[#8B7355] text-[10px] md:text-xs font-mono-pixel">✦ Click Wireframe, Mockup, or Implementation to view images ✦</p>
                    </div>
                  )}
                </div>
              )}
              
              {/* PADI & JOKKAKI - TOMBOL & GAMBAR DI BAWAH */}
              {(selectedProject.type === 'padi' || selectedProject.type === 'jokkaki') && (
                <div className="mb-5 border-t border-[#F0E8DC] pt-4">
                  <button 
                    onClick={() => setShowPictureGrid(!showPictureGrid)}
                    className="bg-[#E99B9B] hover:bg-[#d48484] text-white px-3 py-1 md:px-4 md:py-1.5 rounded-lg transition-all duration-300 font-bold text-[10px] md:text-xs font-mono-pixel"
                  >
                    {showPictureGrid ? '− HIDE GALLERY' : '+ SHOW GALLERY'}
                  </button>
                  
                  {showPictureGrid && (
                    <div className="mt-3">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
                        {selectedProject.pictureImages.map((img, idx) => (
                          <div 
                            key={idx} 
                            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group shadow-sm hover:shadow-md transition-all"
                            onClick={() => openLightbox(img)}
                          >
                            <img 
                              src={img} 
                              alt={`Gallery ${idx + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 text-white text-[8px] md:text-[10px] bg-black/50 px-1 py-0.5 rounded-full font-mono-pixel">🔍</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ============ LIGHTBOX ============ */}
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
        
        * {
          font-family: 'Space Mono', monospace !important;
        }
        
        @keyframes borderMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-borderMove {
          animation: borderMove 3s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        
        .animate-pulse {
          animation: blink 0.8s infinite;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        /* Animasi bola lebih luas dan memantul - TANPA BORDER, DI BELAKANG */
        @keyframes randomBounce1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          10% { transform: translate(-80px, -100px) rotate(90deg); }
          20% { transform: translate(-150px, 30px) rotate(180deg); }
          30% { transform: translate(-60px, 120px) rotate(270deg); }
          40% { transform: translate(80px, 80px) rotate(360deg); }
          50% { transform: translate(160px, -40px) rotate(450deg); }
          60% { transform: translate(100px, -120px) rotate(540deg); }
          70% { transform: translate(-40px, -60px) rotate(630deg); }
          80% { transform: translate(-120px, 60px) rotate(720deg); }
          90% { transform: translate(-30px, 100px) rotate(810deg); }
          100% { transform: translate(0, 0) rotate(900deg); }
        }
        
        @keyframes randomBounce2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          8% { transform: translate(60px, -80px) rotate(60deg); }
          16% { transform: translate(130px, 20px) rotate(120deg); }
          25% { transform: translate(80px, 100px) rotate(180deg); }
          33% { transform: translate(-50px, 120px) rotate(240deg); }
          41% { transform: translate(-140px, 40px) rotate(300deg); }
          50% { transform: translate(-120px, -70px) rotate(360deg); }
          58% { transform: translate(-40px, -130px) rotate(420deg); }
          66% { transform: translate(70px, -90px) rotate(480deg); }
          75% { transform: translate(140px, 10px) rotate(540deg); }
          83% { transform: translate(100px, 80px) rotate(600deg); }
          91% { transform: translate(20px, 110px) rotate(660deg); }
          100% { transform: translate(0, 0) rotate(720deg); }
        }
        
                .bouncing-ball-1 {
          position: absolute;
          bottom: 20px;
          left: 20px;
          animation: randomBounce1 12s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
          z-index: 5;
          opacity: 0.85;
        }
        
        .bouncing-ball-2 {
          position: absolute;
          top: 20px;
          right: 20px;
          animation: randomBounce2 14s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
          z-index: 5;
          opacity: 0.85;
        }
        
        .bouncing-ball-1:hover, .bouncing-ball-2:hover {
          animation-play-state: paused;
          transform: scale(1.05);
          transition: transform 0.3s ease;
          opacity: 1;
        }
      
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        @media (max-width: 640px) {
          .text-justify {
            text-align: justify;
          }
        }
      `}</style>
    </>
  )
}