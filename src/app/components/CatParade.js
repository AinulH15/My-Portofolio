'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Komponen kucing SVG horizontal yang berjalan
const WalkingCat = ({ cat, index, totalCats, onClick, isActive, onAnimationComplete }) => {
  const [blink, setBlink] = useState(false)
  const [walkCycle, setWalkCycle] = useState(0)
  const [tailAngle, setTailAngle] = useState(0)
  const [lookDown, setLookDown] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const audioRef = useRef(null)

  // Warna kucing
  const catColors = {
    orange: { body: '#F5A623', dark: '#D4891A', light: '#F7B84D', ear: '#E8921A' },
    pink: { body: '#E99B9B', dark: '#D48484', light: '#F0B8B8', ear: '#D48484' },
    blue: { body: '#6BA3C7', dark: '#4A7A9B', light: '#8BBBD9', ear: '#4A7A9B' },
    green: { body: '#7CB342', dark: '#5A7D2E', light: '#9BC75A', ear: '#5A7D2E' },
    purple: { body: '#9B59B6', dark: '#7D3C98', light: '#B87DCC', ear: '#7D3C98' },
    yellow: { body: '#F1C40F', dark: '#D4A30A', light: '#F4D45A', ear: '#D4A30A' },
    leader: { body: '#E99B9B', dark: '#D48484', light: '#F0B8B8', ear: '#D48484' }
  }

  const colors = cat.isLeader ? catColors.leader : catColors[cat.color]

  useEffect(() => {
    audioRef.current = new Audio('/asset/sounds/meow.mp3')
    audioRef.current.volume = 0.2
  }, [])

  // Animasi jalan (kaki)
  useEffect(() => {
    const interval = setInterval(() => {
      setWalkCycle(prev => (prev + 1) % 4)
      setTailAngle(prev => Math.sin(Date.now() / 250) * 20)
    }, 120)
    return () => clearInterval(interval)
  }, [])

  // Random blink
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true)
      setTimeout(() => setBlink(false), 100)
    }, 2800 + Math.random() * 1500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setLookDown(isActive)
  }, [isActive])

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

  const legOffset = walkCycle < 2 ? 3 : -3

  return (
    <div className="relative inline-block cursor-pointer group" onClick={handleClick}>
      {/* SVG KUCING - bentuk horizontal */}
      <motion.div
        animate={{ y: [0, -2, 0, -1, 0] }}
        transition={{ duration: 0.4, repeat: Infinity }}
      >
        <svg width="130" height="100" viewBox="0 0 200 130" className="drop-shadow-md hover:scale-105 transition-transform">
          {/* EKOR (bergoyang) */}
          <g transform={`rotate(${tailAngle}, 175, 50)`}>
            <path d="M175 50 Q195 35 190 20 Q187 12 180 15" stroke={colors.dark} strokeWidth="6" fill="none" strokeLinecap="round"/>
            <circle cx="180" cy="15" r="5" fill={colors.body} stroke={colors.dark} strokeWidth="2"/>
          </g>
          
          {/* KAKI BELAKANG */}
          <g transform={`translate(${walkCycle < 2 ? 0 : legOffset}, ${walkCycle < 2 ? -2 : 2})`}>
            <rect x="130" y="100" width="18" height="16" rx="7" fill={colors.body} stroke={colors.dark} strokeWidth="2"/>
            <rect x="138" y="112" width="10" height="7" rx="4" fill={colors.dark}/>
          </g>
          
          <g transform={`translate(${walkCycle >= 2 ? 0 : -legOffset}, ${walkCycle >= 2 ? -2 : 2})`}>
            <rect x="112" y="100" width="18" height="16" rx="7" fill={colors.body} stroke={colors.dark} strokeWidth="2"/>
            <rect x="120" y="112" width="10" height="7" rx="4" fill={colors.dark}/>
          </g>
          
          {/* BADAN */}
          <rect x="65" y="65" width="95" height="48" rx="12" fill={colors.body} stroke={colors.dark} strokeWidth="3"/>
          <rect x="78" y="75" width="68" height="28" rx="8" fill={colors.light} stroke={colors.dark} strokeWidth="1.5"/>
          
          {/* TULISAN DI BADAN */}
          <text x="112" y="95" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2C2C2C" fontFamily="'Space Mono', monospace">
            {cat.isLeader ? '✦ SKILL ✦' : cat.name}
          </text>
          
          {/* KAKI DEPAN */}
          <g transform={`translate(${walkCycle < 2 ? legOffset : 0}, ${walkCycle < 2 ? 2 : -2})`}>
            <rect x="70" y="100" width="16" height="15" rx="7" fill={colors.body} stroke={colors.dark} strokeWidth="2"/>
            <rect x="77" y="111" width="9" height="6" rx="4" fill={colors.dark}/>
          </g>
          
          <g transform={`translate(${walkCycle >= 2 ? -legOffset : 0}, ${walkCycle >= 2 ? 2 : -2})`}>
            <rect x="52" y="100" width="16" height="15" rx="7" fill={colors.body} stroke={colors.dark} strokeWidth="2"/>
            <rect x="59" y="111" width="9" height="6" rx="4" fill={colors.dark}/>
          </g>
          
          {/* KEPALA */}
          <circle cx="55" cy="62" r="28" fill={colors.body} stroke={colors.dark} strokeWidth="3"/>
          
          {/* TELINGA */}
          <polygon points="32,44 22,22 45,35" fill={colors.body} stroke={colors.dark} strokeWidth="3" strokeLinejoin="round"/>
          <polygon points="34,42 28,29 42,37" fill={colors.ear} stroke={colors.dark} strokeWidth="1.5"/>
          <polygon points="72,44 85,27 78,40" fill={colors.body} stroke={colors.dark} strokeWidth="3" strokeLinejoin="round"/>
          <polygon points="73,43 82,32 77,39" fill={colors.ear} stroke={colors.dark} strokeWidth="1.5"/>
          
          {/* MATA (melihat ke popup jika aktif) */}
          <g transform="translate(42, 56)">
            <circle cx="0" cy="0" r="6.5" fill="white" stroke={colors.dark} strokeWidth="2"/>
            <circle cx={lookDown ? 0 : 2} cy={lookDown ? 4 : 0} r="3" fill="#2C2C2C"/>
            <circle cx={lookDown ? 1 : 3} cy={lookDown ? 3 : -1} r="1" fill="white"/>
          </g>
          <g transform="translate(67, 56)">
            <circle cx="0" cy="0" r="6.5" fill="white" stroke={colors.dark} strokeWidth="2"/>
            <circle cx={lookDown ? 0 : 2} cy={lookDown ? 4 : 0} r="3" fill="#2C2C2C"/>
            <circle cx={lookDown ? 1 : 3} cy={lookDown ? 3 : -1} r="1" fill="white"/>
          </g>
          
          {/* BLINK */}
          {blink && (
            <>
              <rect x="35" y="54" width="14" height="4" rx="2" fill={colors.body} stroke={colors.dark} strokeWidth="1.5"/>
              <rect x="60" y="54" width="14" height="4" rx="2" fill={colors.body} stroke={colors.dark} strokeWidth="1.5"/>
            </>
          )}
          
          {/* HIDUNG & MULUT */}
          <polygon points="54,69 56,72 52,72" fill="#E99B9B" stroke={colors.dark} strokeWidth="1"/>
          <path d="M54 72 Q54 77 50 77" stroke={colors.dark} strokeWidth="1.5" fill="none"/>
          <path d="M54 72 Q54 77 58 77" stroke={colors.dark} strokeWidth="1.5" fill="none"/>
          
          {/* KUMIS */}
          <line x1="30" y1="65" x2="15" y2="62" stroke={colors.dark} strokeWidth="1.5"/>
          <line x1="30" y1="69" x2="13" y2="69" stroke={colors.dark} strokeWidth="1.5"/>
          <line x1="78" y1="65" x2="93" y2="62" stroke={colors.dark} strokeWidth="1.5"/>
          <line x1="78" y1="69" x2="95" y2="69" stroke={colors.dark} strokeWidth="1.5"/>
          
          {/* BLUSH */}
          <circle cx="36" cy="69" r="3.5" fill="#E99B9B" opacity="0.35"/>
          <circle cx="72" cy="69" r="3.5" fill="#E99B9B" opacity="0.35"/>
        </svg>
      </motion.div>
      
      {/* POPUP DIALOG */}
      <AnimatePresence>
        {showDialog && !cat.isLeader && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute left-1/2 transform -translate-x-1/2 top-28 w-64 bg-white border-4 border-[#E99B9B] rounded-2xl shadow-[8px_8px_0_0_#E99B9B] z-30"
          >
            <div className="absolute -top-2 left-3 w-4 h-3 bg-[#E99B9B] border-2 border-black rounded-t-full"></div>
            <div className="absolute -top-2 right-3 w-4 h-3 bg-[#E99B9B] border-2 border-black rounded-t-full"></div>
            
            <div className="bg-[#E99B9B] p-3 rounded-t-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🐱</span>
                  <h4 className="text-sm font-black text-white font-mono-pixel">{cat.name} Skills</h4>
                </div>
                <button onClick={closeDialog} className="text-white text-lg">✕</button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="mb-4">
                <p className="text-[10px] font-black text-[#8B7355] mb-2 font-mono-pixel">✦ SKILLS</p>
                <div className="space-y-1">
                  {cat.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-mono-pixel"><span className="text-[#E99B9B]">-</span><span>{skill}</span></div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <p className="text-[10px] font-black text-[#8B7355] mb-2 font-mono-pixel">✦ PROJECTS</p>
                <div className="space-y-1">
                  {cat.projects.map((project, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-mono-pixel"><span className="text-[#E99B9B]">•</span><span>{project}</span></div>
                  ))}
                </div>
              </div>
              <p className="text-[#4A4A4A] text-xs leading-relaxed font-mono-pixel border-t border-[#F0E8DC] pt-3">{cat.description}</p>
            </div>
            
            <div className="bg-[#F5F0E8] p-2 rounded-b-xl border-t border-[#E99B9B] flex justify-between">
              <span className="text-[8px] text-[#8B7355] font-mono-pixel">~ meow ~</span>
              <span className="text-xs">🐾</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Click me indicator */}
      {index === 0 && !showDialog && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white border-2 border-[#E99B9B] rounded-full px-2 py-0.5 shadow-md animate-bounce whitespace-nowrap">
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
  const [scrollPosition, setScrollPosition] = useState(0)
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
      position = (position + speed) % (paradeCats.length * 150)
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(${-position}px)`
      }
      animationId = requestAnimationFrame(animate)
    }
    
    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isVisible])

  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-24 bg-[#FFF8E7] overflow-hidden">
      <div className="max-w-full mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-[#E99B9B]"></div>
            <span className="text-[#E99B9B] text-xs font-mono-pixel">✦ MEET MY CATS ✦</span>
            <div className="w-12 h-px bg-[#E99B9B]"></div>
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
            <div className="bg-white/80 border-2 border-dashed border-[#E99B9B] rounded-2xl p-8">
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
            <div className="flex justify-center gap-1 mt-2 text-[#E99B9B]">
              <span>🐾</span> <span>🐾</span> <span>🐾</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}