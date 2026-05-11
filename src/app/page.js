'use client'

import Navbar from './components/Navbar'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)
  
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
              {/* SVG Animated Border */}
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
              
              {/* Content */}
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

          {/* ============ ABOUT SECTION - VERSI BARU ============ */}
          <section id="about" className="mt-32">
            <h2 className="text-3xl font-bold text-black text-center mb-12">
              About <span className="text-[#E99B9B]">Me</span>
            </h2>
            
            <div className="relative bg-white/50 rounded-3xl p-8 shadow-xl overflow-hidden min-h-[300px] max-w-4xl mx-auto">
              {/* Bola Gambar 1 - coding.png (bergerak random memantul dan bergelinding) */}
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
              
              {/* Bola Gambar 2 - laptop.png (bergerak random memantul dan bergelinding) */}
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
              
              {/* Konten Teks - VERSI BARU */}
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

           {/* ============ SKILLS SECTION - 4x2 GRID DENGAN HOVER PINK ============ */}
           <section id="skills" className="mt-32">
            <h2 className="text-3xl font-bold text-black text-center mb-12">
              My <span className="text-[#E99B9B]">Skills</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                
                {/* CSS */}
                <div className="bg-white p-4 rounded-xl text-center shadow-md  hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/asset/css.svg" alt="CSS" className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert" />
                  </div>
                  <p className="text-black font-semibold group-hover:text-white">CSS</p>
                </div>
                
                {/* Figma */}
                <div className="bg-white p-4 rounded-xl text-center shadow-md  hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/asset/figma.png" alt="Figma" className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert" />
                  </div>
                  <p className="text-black font-semibold group-hover:text-white">Figma</p>
                </div>
                
                {/* Git */}
                <div className="bg-white p-4 rounded-xl text-center shadow-md hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/asset/git.png" alt="Git" className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert" />
                  </div>
                  <p className="text-black font-semibold group-hover:text-white">Git</p>
                </div>
                
                {/* HTML */}
                <div className="bg-white p-4 rounded-xl text-center shadow-md hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/asset/html.png" alt="HTML" className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert" />
                  </div>
                  <p className="text-black font-semibold group-hover:text-white">HTML</p>
                </div>
                
                {/* Java */}
                <div className="bg-white p-4 rounded-xl text-center shadow-md  hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/asset/java.png" alt="Java" className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert" />
                  </div>
                  <p className="text-black font-semibold group-hover:text-white">Java</p>
                </div>
                
                {/* JavaScript */}
                <div className="bg-white p-4 rounded-xl text-center shadow-md  hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/asset/js.webp" alt="JavaScript" className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert" />
                  </div>
                  <p className="text-black font-semibold group-hover:text-white">JavaScript</p>
                </div>
                
                {/* Next.js */}
                <div className="bg-white p-4 rounded-xl text-center shadow-md hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/asset/nextjs.png" alt="Next.js" className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert" />
                  </div>
                  <p className="text-black font-semibold group-hover:text-white">Next.js</p>
                </div>
                
                {/* PHP */}
                <div className="bg-white p-4 rounded-xl text-center shadow-md hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img src="/asset/php.png" alt="PHP" className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert" />
                  </div>
                  <p className="text-black font-semibold group-hover:text-white">PHP</p>
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
              
              {/* Project 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="h-48 bg-gradient-to-r from-[#E99B9B] to-[#ffb6b6] relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-2">Medipulse</h3>
                  <p className="text-black opacity-70 mb-4">UI/UX Design with Figma</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-[#E99B9B]/20 text-[#E99B9B] px-3 py-1 rounded-full text-sm">UI/UX</span>
                    <span className="bg-[#E99B9B]/20 text-[#E99B9B] px-3 py-1 rounded-full text-sm">Figma</span>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="h-48 bg-gradient-to-r from-[#E99B9B] to-[#ffb6b6] relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-2">Sistem Pencarian Buku Tanah</h3>
                  <p className="text-black opacity-70 mb-4">Java Spring Boot Web App</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-[#E99B9B]/20 text-[#E99B9B] px-3 py-1 rounded-full text-sm">Java Spring Boot</span>
                    <span className="bg-[#E99B9B]/20 text-[#E99B9B] px-3 py-1 rounded-full text-sm">HTML/CSS/JS</span>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="h-48 bg-gradient-to-r from-[#E99B9B] to-[#ffb6b6] relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-2">Pooling Wisata Favorit</h3>
                  <p className="text-black opacity-70 mb-4">Interactive Web App</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-[#E99B9B]/20 text-[#E99B9B] px-3 py-1 rounded-full text-sm">HTML</span>
                    <span className="bg-[#E99B9B]/20 text-[#E99B9B] px-3 py-1 rounded-full text-sm">CSS</span>
                    <span className="bg-[#E99B9B]/20 text-[#E99B9B] px-3 py-1 rounded-full text-sm">JS</span>
                  </div>
                </div>
              </div>
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

      <style jsx global>{`
        /* Cursor berkedip */
        .blinking-cursor {
          animation: blink 0.7s infinite;
          font-weight: normal;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        /* Animasi bola random - path tidak beraturan seperti memantul acak */
        .bouncing-ball-1 {
          position: absolute;
          bottom: 10px;
          left: 10px;
          animation: randomBounce1 7s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
          z-index: 5;
        }
        
        @keyframes randomBounce1 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          15% {
            transform: translate(80px, -60px) rotate(120deg);
          }
          30% {
            transform: translate(160px, 20px) rotate(240deg);
          }
          45% {
            transform: translate(100px, -80px) rotate(400deg);
          }
          60% {
            transform: translate(200px, 30px) rotate(550deg);
          }
          75% {
            transform: translate(250px, -40px) rotate(700deg);
          }
          90% {
            transform: translate(180px, 50px) rotate(850deg);
          }
          100% {
            transform: translate(0, 0) rotate(1000deg);
          }
        }
        
        /* Animasi bola random 2 - path berbeda dan lebih acak */
        .bouncing-ball-2 {
          position: absolute;
          top: 10px;
          right: 10px;
          animation: randomBounce2 9s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
          z-index: 5;
        }
        
        @keyframes randomBounce2 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          12% {
            transform: translate(-60px, 50px) rotate(100deg);
          }
          25% {
            transform: translate(-120px, -30px) rotate(200deg);
          }
          37% {
            transform: translate(-180px, 60px) rotate(320deg);
          }
          50% {
            transform: translate(-100px, -50px) rotate(450deg);
          }
          62% {
            transform: translate(-220px, 20px) rotate(580deg);
          }
          75% {
            transform: translate(-150px, 70px) rotate(720deg);
          }
          87% {
            transform: translate(-80px, -20px) rotate(860deg);
          }
          100% {
            transform: translate(0, 0) rotate(1000deg);
          }
        }
        
        /* Hover effect - bola membesar sedikit saat dihover */
        .bouncing-ball-1:hover, .bouncing-ball-2:hover {
          animation-play-state: paused;
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }
        
        /* Responsive: sembunyikan bola di layar sangat kecil */
        @media (max-width: 640px) {
          .bouncing-ball-1,
          .bouncing-ball-2 {
            display: none;
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  )
}