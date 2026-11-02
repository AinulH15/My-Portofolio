'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Warna Pastel Cantik & Konsisten
const COLORS = {
  pink: '#FF9AA2',
  softPink: '#FFB7B2',
  peach: '#FFDAC1',
  mint: '#E2F0CB',
  sage: '#B5EAD7',
  lavender: '#C7CEEA',
  dark: '#2C2C2C'
}

// Komponen kucing SVG horizontal yang berjalan (Gaya Chibi Gemoy)
const WalkingCat = ({ cat, index, totalCats, onClick, isActive }) => {
  const [blink, setBlink] = useState(false)
  const [eyeX, setEyeX] = useState(0)
  const [eyeY, setEyeY] = useState(0)
  const [showDialog, setShowDialog] = useState(false)
  const catRef = useRef(null)
  const audioRef = useRef(null)

  // Skema Warna Kucing Gemoy
  const catColors = {
    leader: { body: COLORS.lavender, dark: '#8B97C6', light: '#EEF0FB', ear: '#9CA6D6' },
    frontend: { body: COLORS.pink, dark: '#E5858E', light: '#FFE4E8', ear: '#FF8DA1' },
    backend: { body: COLORS.softPink, dark: '#E5A39E', light: '#FFF0E5', ear: '#FFA97A' },
    database: { body: COLORS.sage, dark: '#73B8A0', light: '#E8F8F3', ear: '#84CAAF' },
    tools: { body: COLORS.mint, dark: '#9FCCB0', light: '#E8F8F3', ear: '#B3D385' },
    uiux: { body: COLORS.peach, dark: '#E2A27A', light: '#FFF0E5', ear: '#FFDAC1' },
    orange: { body: '#FFDAC1', dark: '#E2A27A', light: '#FFF0E5', ear: '#FFDAC1' }
  }

  const colors = cat.isLeader ? catColors.leader : (catColors[cat.color] || catColors.frontend)

  useEffect(() => {
    audioRef.current = new Audio('/asset/sounds/meow.mp3')
    audioRef.current.volume = 0.2
  }, [])

  // Random blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true)
      setTimeout(() => setBlink(false), 120)
    }, 3000 + Math.random() * 2000)
    return () => clearInterval(interval)
  }, [])

  // Mouse follow eyes
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!catRef.current) return
      const rect = catRef.current.getBoundingClientRect()
      const catX = rect.left + rect.width / 2
      const catY = rect.top + rect.height / 2
      const deltaX = (e.clientX - catX) / 40
      const deltaY = (e.clientY - catY) / 40
      setEyeX(Math.max(-2, Math.min(2, deltaX)))
      setEyeY(Math.max(-1.5, Math.min(1.5, deltaY)))
    }
    
    const isTouchDevice = 'ontouchstart' in window
    if (!isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(e => console.log(e))
    }
    setShowDialog(true)
    if (onClick) onClick(cat)
    
    // Auto close after 4 seconds
    setTimeout(() => {
      setShowDialog(false)
      if (onClick) onClick(null)
    }, 4000)
  }

  const closeDialog = () => {
    setShowDialog(false)
    if (onClick) onClick(null)
  }

  return (
    <div ref={catRef} className="relative inline-block cursor-pointer group" onClick={handleClick}>
      {/* SVG KUCING - Bentuk Chibi Gemoy & Animasi Naik Turun */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="130" height="110" viewBox="0 0 160 130" className="drop-shadow-md hover:scale-105 transition-transform">
          {/* EKOR BERGOYANG */}
          <motion.path 
            d="M 130 65 Q 155 55 150 35 Q 145 20 135 25" 
            stroke={colors.dark} 
            strokeWidth="7" 
            fill="none" 
            strokeLinecap="round"
            animate={{ rotate: [-10, 15, -10] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '130px 65px' }}
          />
          
          {/* KAKI BELAKANG */}
          <motion.g
            animate={{ rotate: [15, -15, 15] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '110px 85px' }}
          >
            <rect x="100" y="80" width="14" height="26" rx="7" fill={colors.dark}/>
          </motion.g>
          <motion.g
            animate={{ rotate: [-15, 15, -15] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '95px 85px' }}
          >
            <rect x="90" y="80" width="14" height="26" rx="7" fill={colors.body} stroke={colors.dark} strokeWidth="2.5"/>
          </motion.g>
          
          {/* BADAN UTAMA */}
          <rect x="40" y="45" width="90" height="48" rx="24" fill={colors.body} stroke={colors.dark} strokeWidth="3"/>
          <rect x="55" y="55" width="60" height="28" rx="14" fill={colors.light} opacity="0.8"/>
          
          {/* TULISAN DI BADAN */}
          <text x="85" y="72" textAnchor="middle" fontSize={cat.isLeader ? "11" : "10"} fontWeight="900" fill={colors.dark} fontFamily="'Space Mono', monospace">
            {cat.isLeader ? '✦ SKILL ✦' : cat.name}
          </text>
          
          {/* KAKI DEPAN */}
          <motion.g
            animate={{ rotate: [-15, 15, -15] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '55px 85px' }}
          >
            <rect x="48" y="80" width="14" height="26" rx="7" fill={colors.dark}/>
          </motion.g>
          <motion.g
            animate={{ rotate: [15, -15, 15] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '70px 85px' }}
          >
            <rect x="63" y="80" width="14" height="26" rx="7" fill={colors.body} stroke={colors.dark} strokeWidth="2.5"/>
          </motion.g>
          
          {/* KEPALA */}
          <circle cx="42" cy="48" r="26" fill={colors.body} stroke={colors.dark} strokeWidth="3"/>
          
          {/* TELINGA */}
          <path d="M 22 34 L 16 12 L 34 26 Z" fill={colors.body} stroke={colors.dark} strokeWidth="2.5" strokeLinejoin="round"/>
          <path d="M 23 31 L 18 16 L 32 25 Z" fill={colors.ear}/>
          <path d="M 50 26 L 64 12 L 58 34 Z" fill={colors.body} stroke={colors.dark} strokeWidth="2.5" strokeLinejoin="round"/>
          <path d="M 52 25 L 62 16 L 57 31 Z" fill={colors.ear}/>
          
          {/* MATA */}
          {!blink ? (
            <>
              <g transform="translate(31, 46)">
                <circle cx="0" cy="0" r="5" fill="white" stroke={colors.dark} strokeWidth="1.5"/>
                <circle cx={eyeX} cy={eyeY} r="2.2" fill={COLORS.dark}/>
                <circle cx={eyeX + 0.8} cy={eyeY - 0.8} r="0.8" fill="white"/>
              </g>
              <g transform="translate(49, 46)">
                <circle cx="0" cy="0" r="5" fill="white" stroke={colors.dark} strokeWidth="1.5"/>
                <circle cx={eyeX} cy={eyeY} r="2.2" fill={COLORS.dark}/>
                <circle cx={eyeX + 0.8} cy={eyeY - 0.8} r="0.8" fill="white"/>
              </g>
            </>
          ) : (
            <>
              <path d="M 26 46 Q 31 50 36 46" stroke={colors.dark} strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M 44 46 Q 49 50 54 46" stroke={colors.dark} strokeWidth="2" fill="none" strokeLinecap="round"/>
            </>
          )}
          
          {/* HIDUNG & MULUT */}
          <polygon points="39,52 43,52 41,55" fill="#FF8DA1" stroke={colors.dark} strokeWidth="0.8"/>
          <path d="M 38 56 Q 41 59 41 56 Q 41 59 44 56" stroke={colors.dark} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          
          {/* KUMIS */}
          <line x1="20" y1="48" x2="8" y2="45" stroke={colors.dark} strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="20" y1="53" x2="7" y2="54" stroke={colors.dark} strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="62" y1="48" x2="74" y2="45" stroke={colors.dark} strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="62" y1="53" x2="75" y2="54" stroke={colors.dark} strokeWidth="1.5" strokeLinecap="round"/>
          
          {/* BLUSH PIPI */}
          <circle cx="26" cy="53" r="4" fill="#FF8DA1" opacity="0.6"/>
          <circle cx="56" cy="53" r="4" fill="#FF8DA1" opacity="0.6"/>
        </svg>

        {/* BAYANGAN DI BAWAH */}
        <motion.div
          className="w-24 h-2.5 bg-black/15 rounded-full mx-auto -mt-3 blur-[2px]"
          animate={{ scale: [0.85, 1.15, 0.85] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
      
      {/* POPUP DIALOG */}
      <AnimatePresence>
        {showDialog && !cat.isLeader && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute left-1/2 transform -translate-x-1/2 top-28 w-64 bg-white border-4 border-[#FF9AA2] rounded-2xl shadow-[8px_8px_0_0_#FF9AA2] z-30"
          >
            <div className="absolute -top-2 left-3 w-4 h-3 bg-[#FF9AA2] border-2 border-black rounded-t-full"></div>
            <div className="absolute -top-2 right-3 w-4 h-3 bg-[#FF9AA2] border-2 border-black rounded-t-full"></div>
            
            <div className="bg-[#FF9AA2] p-3 rounded-t-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🐱</span>
                  <h4 className="text-sm font-black text-white font-mono-pixel">{cat.name} Skills</h4>
                </div>
                <button onClick={closeDialog} className="text-white text-lg font-bold">✕</button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="mb-4">
                <p className="text-[10px] font-black text-[#8B7355] mb-2 font-mono-pixel">✦ SKILLS</p>
                <div className="space-y-1">
                  {cat.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-mono-pixel"><span className="text-[#FF9AA2]">-</span><span>{skill}</span></div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <p className="text-[10px] font-black text-[#8B7355] mb-2 font-mono-pixel">✦ PROJECTS</p>
                <div className="space-y-1">
                  {cat.projects.map((project, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-mono-pixel"><span className="text-[#FF9AA2]">•</span><span>{project}</span></div>
                  ))}
                </div>
              </div>
              <p className="text-[#4A4A4A] text-xs leading-relaxed font-mono-pixel border-t border-[#F0E8DC] pt-3">{cat.description}</p>
            </div>
            
            <div className="bg-[#FFF8E7] p-2 rounded-b-xl border-t border-[#FF9AA2] flex justify-between">
              <span className="text-[8px] text-[#8B7355] font-mono-pixel">~ meow ~</span>
              <span className="text-xs">🐾</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Click me indicator */}
      {index === 0 && !showDialog && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white border-2 border-[#FF9AA2] rounded-full px-2 py-0.5 shadow-md animate-bounce whitespace-nowrap">
          <p className="text-[7px] text-[#2C2C2C] font-mono-pixel">✨ click me! ✨</p>
        </div>
      )}
    </div>
  )
}

// Data parade kucing
const paradeCats = [
  { id: 0, name: 'SKILL', color: 'leader', isLeader: true, skills: null, projects: null, description: null },
  { id: 1, name: 'Front-end', color: 'pink', 
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
    projects: ['Portfolio', 'Medipulse', 'Jokkaki'],
    description: 'Berpengalaman membuat antarmuka web yang responsif, modern, dan user friendly.' },
  { id: 2, name: 'Back-end', color: 'blue',
    skills: ['Java', 'Spring Boot', 'PHP', 'REST API', 'JWT', 'MVC'],
    projects: ['PADI', 'Jokkaki'],
    description: 'Membangun API dan arsitektur backend yang scalable dan maintainable.' },
  { id: 3, name: 'Database', color: 'green',
    skills: ['MySQL', 'MariaDB', 'SQL Query', 'Database Design'],
    projects: ['PADI', 'Jokkaki'],
    description: 'Desain database yang efisien dan query yang dioptimasi.' },
  { id: 4, name: 'Tools', color: 'purple',
    skills: ['Git', 'GitHub', 'Figma', 'Postman', 'VS Code', 'Vercel'],
    projects: ['Semua project'],
    description: 'Terbiasa dengan berbagai tools development modern.' },
  { id: 5, name: 'UI/UX', color: 'yellow',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'User Research'],
    projects: ['Medipulse', 'Portfolio'],
    description: 'Mendesain antarmuka yang intuitif dan menyenangkan.' }
]

export default function CatParade() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCat, setActiveCat] = useState(null)
  const sectionRef = useRef(null)
  const containerRef = useRef(null)

  // Detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        if (!entry.isIntersecting) setActiveCat(null)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Infinite scroll effect for horizontal walking
  useEffect(() => {
    if (!isVisible) return
    
    let animationId
    let position = 0
    const speed = 0.8 // pixels per frame
    
    const animate = () => {
      // Jeda pergerakan jika ada kucing yang diklik/aktif
      if (!activeCat) {
        position = (position + speed) % (paradeCats.length * 160)
        if (containerRef.current) {
          containerRef.current.style.transform = `translateX(${-position}px)`
        }
      }
      animationId = requestAnimationFrame(animate)
    }
    
    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isVisible, activeCat])

  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-24 bg-[#FFF8E7] overflow-hidden">
      <div className="max-w-full mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-[#FF9AA2]"></div>
            <span className="text-[#FF9AA2] text-xs font-mono-pixel">✦ MEET MY CATS ✦</span>
            <div className="w-12 h-px bg-[#FF9AA2]"></div>
          </div>
          <p className="text-[#8B7355] text-xs font-mono-pixel mt-2 animate-pulse">→ scroll down to see them walk! ←</p>
        </div>
        
        {/* Horizontal Walking Parade */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative overflow-hidden py-8"
            >
              {/* Container yang bergerak */}
              <div 
                ref={containerRef}
                className="flex items-center gap-8 md:gap-12 whitespace-nowrap"
                style={{ willChange: 'transform' }}
              >
                {/* Loop kucing 3 kali untuk infinite effect */}
                {[...paradeCats, ...paradeCats, ...paradeCats].map((cat, idx) => (
                  <div key={`${cat.id}-${idx}`} className="flex-shrink-0">
                    <WalkingCat
                      cat={cat}
                      index={idx % paradeCats.length}
                      totalCats={paradeCats.length}
                      onClick={(c) => setActiveCat(activeCat?.id === c?.id ? null : c)}
                      isActive={activeCat?.id === cat.id}
                    />
                  </div>
                ))}
              </div>
              
              {/* Gradient fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FFF8E7] to-transparent pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FFF8E7] to-transparent pointer-events-none"></div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Placeholder */}
        {!isVisible && (
          <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
            <div className="bg-white/80 border-2 border-dashed border-[#FF9AA2] rounded-2xl p-8">
              <div className="text-5xl mb-3 animate-bounce">🐱</div>
              <p className="text-[#8B7355] text-xs font-mono-pixel">scroll down to meet my cats!</p>
              <p className="text-[#C4B4A4] text-[9px] mt-2 font-mono-pixel">(they are walking from right to left)</p>
            </div>
          </div>
        )}
        
        {/* Instruction */}
        {isVisible && (
          <div className="text-center mt-6">
            <p className="text-[9px] text-[#8B7355] font-mono-pixel">✨ click any cat to see their skills! ✨</p>
            <div className="flex justify-center gap-1 mt-2 text-[#FF9AA2]">
              <span>🐾</span> <span>🐾</span> <span>🐾</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}