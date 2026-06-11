'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

// Warna
const COLORS = {
  pink: '#FF9AA2',
  softPink: '#FFB7B2',
  peach: '#FFDAC1',
  mint: '#E2F0CB',
  sage: '#B5EAD7',
  lavender: '#C7CEEA',
  dark: '#1A1A1D'
}

// Warna kucing
const catColors = {
  leader: { body: COLORS.lavender, dark: '#A8B4D4', light: '#D8E0F5', ear: '#A8B4D4' },
  frontend: { body: COLORS.pink, dark: '#E5858E', light: '#FFC0C8', ear: '#E5858E' },
  backend: { body: COLORS.softPink, dark: '#E5A39E', light: '#FFD0CC', ear: '#E5A39E' },
  database: { body: COLORS.sage, dark: '#A1C9B5', light: '#C8E8D8', ear: '#A1C9B5' },
  tools: { body: COLORS.mint, dark: '#9FCCB0', light: '#C8EED8', ear: '#9FCCB0' },
  uiux: { body: COLORS.peach, dark: '#E5B99E', light: '#FFE0CC', ear: '#E5B99E' }
}

// Data kucing dengan terjemahan
const getCatData = (t) => [
  { id: 0, name: 'SKILL', isLeader: true, skills: null, projects: null, description: null },
  { id: 1, name: 'Front-end', 
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Responsive Design'],
    projects: ['Portfolio', 'Medipulse', 'Jokkaki'],
    descriptionEn: 'Experienced in creating responsive, modern, and user-friendly web interfaces.',
    descriptionId: 'Berpengalaman membuat antarmuka web yang responsif, modern, dan user friendly.' },
  { id: 2, name: 'Back-end',
    skills: ['Java', 'Spring Boot', 'PHP', 'REST API', 'JWT', 'MVC', 'Clean Architecture'],
    projects: ['PADI', 'Jokkaki'],
    descriptionEn: 'Building scalable, secure, and maintainable backend APIs and architecture.',
    descriptionId: 'Membangun API dan arsitektur backend yang scalable, aman, dan maintainable.' },
  { id: 3, name: 'Database',
    skills: ['MySQL', 'MariaDB', 'SQL Query', 'Database Design', 'Indexing'],
    projects: ['PADI', 'Jokkaki'],
    descriptionEn: 'Efficient database design and optimized queries for best performance.',
    descriptionId: 'Desain database yang efisien, normalized, dan query yang dioptimasi.' },
  { id: 4, name: 'Tools',
    skills: ['Git', 'GitHub', 'Figma', 'Postman', 'VS Code', 'Vercel'],
    projects: ['All projects'],
    descriptionEn: 'Familiar with various modern development tools for effective workflow.',
    descriptionId: 'Terbiasa dengan berbagai tools development modern untuk workflow yang efektif.' },
  { id: 5, name: 'UI/UX',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'User Research', 'Accessibility'],
    projects: ['Medipulse', 'Portfolio'],
    descriptionEn: 'Designing intuitive, aesthetic, and enjoyable interfaces to use.',
    descriptionId: 'Mendesain antarmuka yang intuitif, estetis, dan menyenangkan untuk digunakan.' }
]

// SVG Kucing Mini
const MiniCat = ({ color = COLORS.pink }) => (
  <svg width="40" height="35" viewBox="0 0 40 35" className="drop-shadow-sm">
    <ellipse cx="20" cy="22" rx="14" ry="10" fill={color} stroke={COLORS.dark} strokeWidth="1.5"/>
    <circle cx="15" cy="16" r="8" fill={color} stroke={COLORS.dark} strokeWidth="1.5"/>
    <polygon points="9,10 6,2 13,7" fill={color} stroke={COLORS.dark} strokeWidth="1"/>
    <polygon points="21,10 24,2 17,7" fill={color} stroke={COLORS.dark} strokeWidth="1"/>
    <circle cx="12" cy="14" r="2" fill={COLORS.dark}/>
    <circle cx="18" cy="14" r="2" fill={COLORS.dark}/>
    <polygon points="14,18 15,20 13,20" fill={COLORS.dark}/>
    <path d="M14 20 Q15 22 13 22" stroke={COLORS.dark} strokeWidth="0.8" fill="none"/>
    <path d="M14 20 Q15 22 16 22" stroke={COLORS.dark} strokeWidth="0.8" fill="none"/>
    <line x1="7" y1="15" x2="3" y2="13" stroke={COLORS.dark} strokeWidth="0.8"/>
    <line x1="7" y1="17" x2="3" y2="16" stroke={COLORS.dark} strokeWidth="0.8"/>
    <line x1="23" y1="15" x2="27" y2="13" stroke={COLORS.dark} strokeWidth="0.8"/>
    <line x1="23" y1="17" x2="27" y2="16" stroke={COLORS.dark} strokeWidth="0.8"/>
    <path d="M27 22 Q30 25 28 28" stroke={COLORS.dark} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
)

// Komponen kucing BERJALAN
const WalkingCat = ({ cat, onClick, isActive, index, isLeader = false, shouldWalk = true }) => {
  const [blink, setBlink] = useState(false)
  const [walkCycle, setWalkCycle] = useState(0)
  const [tailAngle, setTailAngle] = useState(0)
  const [eyeX, setEyeX] = useState(0)
  const [eyeY, setEyeY] = useState(0)
  const audioRef = useRef(null)
  const catRef = useRef(null)
  const { language, t } = useLanguage()

  let colors
  if (isLeader) {
    colors = catColors.leader
  } else {
    const colorMap = {
      'Front-end': catColors.frontend,
      'Back-end': catColors.backend,
      'Database': catColors.database,
      'Tools': catColors.tools,
      'UI/UX': catColors.uiux
    }
    colors = colorMap[cat.name] || catColors.frontend
  }
  
  const scale = isLeader ? 1 : 0.85
  const width = 110
  const height = 90

  useEffect(() => {
    audioRef.current = new Audio('/asset/sounds/meow.mp3')
    audioRef.current.volume = 0.2
  }, [])

  // Animasi berjalan
  useEffect(() => {
    if (!shouldWalk) return
    const interval = setInterval(() => {
      setWalkCycle(prev => (prev + 1) % 4)
      setTailAngle(prev => Math.sin(Date.now() / 200) * 12)
    }, 130)
    return () => clearInterval(interval)
  }, [shouldWalk])

  // Random blink
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true)
      setTimeout(() => setBlink(false), 100)
    }, 3000 + Math.random() * 2000)
    return () => clearInterval(interval)
  }, [])

  // Mata ikuti cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!catRef.current) return
      const rect = catRef.current.getBoundingClientRect()
      const catX = rect.left + rect.width / 2
      const catY = rect.top + rect.height / 2
      const deltaX = (e.clientX - catX) / 35
      const deltaY = (e.clientY - catY) / 35
      setEyeX(Math.max(-2.5, Math.min(2.5, deltaX)))
      setEyeY(Math.max(-2, Math.min(2, deltaY)))
    }
    
    const isTouchDevice = 'ontouchstart' in window
    if (!isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleClick = (e) => {
    e.stopPropagation()
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(e => console.log(e))
    }
    if (onClick) onClick(cat)
  }

  const legOffset = walkCycle < 2 ? 2 : -2

  return (
    <div ref={catRef} className="relative inline-block cursor-pointer group" onClick={handleClick}>
      <motion.div
        animate={shouldWalk ? { y: [0, -1.5, 0, -1, 0] } : { y: 0 }}
        transition={{ duration: 0.35, repeat: shouldWalk ? Infinity : 0 }}
        style={{ transform: `scale(${scale})`, transformOrigin: 'center center', display: 'inline-block' }}
      >
        <svg width={width} height={height} viewBox="0 0 110 90" className="drop-shadow-md hover:scale-105 transition-transform">
          {/* EKOR */}
          <path d="M90 38 Q98 32 95 22 Q93 18 91 19 Q89 20 90 25 Q91 30 87 40" 
                stroke={colors.dark} strokeWidth="3" fill="none" strokeLinecap="round"/>
          <circle cx="92" cy="20" r="2.5" fill={colors.body} stroke={colors.dark} strokeWidth="1"/>
          
          {/* BADAN */}
          <rect x="20" y="45" width="70" height="30" rx="9" fill={colors.body} stroke={colors.dark} strokeWidth="2"/>
          <rect x="28" y="50" width="54" height="18" rx="5" fill={colors.light} stroke={colors.dark} strokeWidth="1"/>
          
          {/* TULISAN DI BADAN */}
          <text x="55" y="62" textAnchor="middle" fontSize={isLeader ? 9 : 7} fontWeight="bold" fill={COLORS.dark} fontFamily="'Space Mono', monospace">
            {isLeader ? 'SKILL' : cat.name}
          </text>
          
          {/* KAKI */}
          <g transform={`translate(${walkCycle < 2 && shouldWalk ? legOffset : 0}, 0)`}>
            <rect x="64" y="71" width="10" height="8" rx="4" fill={colors.body} stroke={colors.dark} strokeWidth="1.5"/>
            <rect x="66" y="76" width="5" height="3" rx="1.5" fill={colors.dark}/>
          </g>
          <g transform={`translate(${walkCycle >= 2 && shouldWalk ? -legOffset : 0}, 0)`}>
            <rect x="54" y="71" width="10" height="8" rx="4" fill={colors.body} stroke={colors.dark} strokeWidth="1.5"/>
            <rect x="56" y="76" width="5" height="3" rx="1.5" fill={colors.dark}/>
          </g>
          <g transform={`translate(${walkCycle < 2 && shouldWalk ? -legOffset : 0}, 0)`}>
            <rect x="26" y="71" width="9" height="8" rx="4" fill={colors.body} stroke={colors.dark} strokeWidth="1.5"/>
            <rect x="28" y="76" width="4" height="3" rx="1.5" fill={colors.dark}/>
          </g>
          <g transform={`translate(${walkCycle >= 2 && shouldWalk ? legOffset : 0}, 0)`}>
            <rect x="16" y="71" width="9" height="8" rx="4" fill={colors.body} stroke={colors.dark} strokeWidth="1.5"/>
            <rect x="18" y="76" width="4" height="3" rx="1.5" fill={colors.dark}/>
          </g>
          
          {/* KEPALA */}
          <circle cx="16" cy="37" r="16" fill={colors.body} stroke={colors.dark} strokeWidth="2"/>
          
          {/* TELINGA */}
          <polygon points="4,25 -2,10 10,20" fill={colors.body} stroke={colors.dark} strokeWidth="2" strokeLinejoin="round"/>
          <polygon points="5,24 0,16 9,21" fill={colors.ear} stroke={colors.dark} strokeWidth="1"/>
          <polygon points="26,25 32,10 22,20" fill={colors.body} stroke={colors.dark} strokeWidth="2" strokeLinejoin="round"/>
          <polygon points="25,24 29,16 21,21" fill={colors.ear} stroke={colors.dark} strokeWidth="1"/>
          
          {/* MATA */}
          <g transform="translate(8, 33)">
            <circle cx="0" cy="0" r="4.5" fill="white" stroke={colors.dark} strokeWidth="1.5"/>
            <circle cx={eyeX} cy={eyeY} r="2" fill={COLORS.dark}/>
            <circle cx={eyeX + 0.8} cy={eyeY - 0.8} r="0.6" fill="white"/>
          </g>
          <g transform="translate(22, 33)">
            <circle cx="0" cy="0" r="4.5" fill="white" stroke={colors.dark} strokeWidth="1.5"/>
            <circle cx={eyeX} cy={eyeY} r="2" fill={COLORS.dark}/>
            <circle cx={eyeX + 0.8} cy={eyeY - 0.8} r="0.6" fill="white"/>
          </g>
          
          {/* BLINK */}
          {blink && (
            <>
              <rect x="4" y="31" width="7" height="2.5" rx="1" fill={colors.body} stroke={colors.dark} strokeWidth="0.8"/>
              <rect x="18" y="31" width="7" height="2.5" rx="1" fill={colors.body} stroke={colors.dark} strokeWidth="0.8"/>
            </>
          )}
          
          {/* HIDUNG */}
          <polygon points="14,40 15.5,42 12.5,42" fill={COLORS.pink} stroke={colors.dark} strokeWidth="0.8"/>
          
          {/* MULUT */}
          <path d="M14 42 Q14 44 12 44" stroke={colors.dark} strokeWidth="0.8" fill="none"/>
          <path d="M14 42 Q14 44 16 44" stroke={colors.dark} strokeWidth="0.8" fill="none"/>
          
          {/* KUMIS */}
          <line x1="2" y1="38" x2="-4" y2="36" stroke={colors.dark} strokeWidth="0.7"/>
          <line x1="2" y1="40" x2="-4" y2="39" stroke={colors.dark} strokeWidth="0.7"/>
          <line x1="27" y1="38" x2="33" y2="36" stroke={colors.dark} strokeWidth="0.7"/>
          <line x1="27" y1="40" x2="33" y2="39" stroke={colors.dark} strokeWidth="0.7"/>
          
          {/* BLUSH */}
          <circle cx="4" cy="40" r="2" fill={COLORS.pink} opacity="0.35"/>
          <circle cx="24" cy="40" r="2" fill={COLORS.pink} opacity="0.35"/>
        </svg>
      </motion.div>
      
      {/* Bubble "Click for details" untuk kucing SKILL */}
      {isLeader && !isActive && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white border-2 rounded-full px-2 py-0.5 shadow-md animate-bounce whitespace-nowrap z-20" style={{ borderColor: COLORS.lavender }}>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border-b-2 border-r-2 rotate-45" style={{ borderColor: COLORS.lavender }}></div>
          <p className="text-[7px] font-mono-pixel whitespace-nowrap" style={{ color: COLORS.dark }}>{t.skills.clickMe}</p>
        </div>
      )}
    </div>
  )
}

// Komponen Popup Skill Global
const GlobalPopup = ({ cat, onClose }) => {
  const { language, t } = useLanguage()
  if (!cat || !cat.skills) return null
  
  const description = language === 'en' ? cat.descriptionEn : cat.descriptionId
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        className="relative w-80 md:w-96 bg-white border-4 rounded-2xl shadow-2xl"
        style={{ borderColor: COLORS.pink }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Kucing di atas popup */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex gap-3">
          <div className="bg-white rounded-full p-1 shadow-md border-2" style={{ borderColor: COLORS.pink }}>
            <MiniCat color={COLORS.pink} />
          </div>
          <div className="bg-white rounded-full p-1 shadow-md border-2" style={{ borderColor: COLORS.lavender }}>
            <MiniCat color={COLORS.lavender} />
          </div>
        </div>
        
        {/* Telinga popup */}
        <div className="absolute -top-2 left-5 w-4 h-3 rounded-t-full" style={{ backgroundColor: COLORS.pink, border: `2px solid ${COLORS.dark}` }}></div>
        <div className="absolute -top-2 right-5 w-4 h-3 rounded-t-full" style={{ backgroundColor: COLORS.pink, border: `2px solid ${COLORS.dark}` }}></div>
        
        {/* Header */}
        <div className="p-4 rounded-t-xl" style={{ backgroundColor: COLORS.pink }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MiniCat color="white" />
              <h3 className="text-lg md:text-xl font-black text-white font-mono-pixel">{cat.name} {t.popup.skills}</h3>
            </div>
            <button onClick={onClose} className="text-white text-2xl hover:text-[#2C2C2C] transition-colors">✕</button>
          </div>
        </div>
        
        {/* Body */}
        <div className="p-5 max-h-[60vh] overflow-y-auto">
          <div className="mb-5">
            <p className="text-xs font-black mb-3 font-mono-pixel" style={{ color: COLORS.sage }}>✦ {t.popup.skills.toUpperCase()} ✦</p>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s, i) => (
                <span key={i} className="px-3 py-1.5 text-xs font-mono-pixel rounded-full" style={{ backgroundColor: `${COLORS.pink}20`, color: COLORS.dark }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-5">
            <p className="text-xs font-black mb-3 font-mono-pixel" style={{ color: COLORS.sage }}>✦ {t.popup.projects.toUpperCase()} ✦</p>
            <div className="flex flex-wrap gap-2">
              {cat.projects.map((p, i) => (
                <span key={i} className="px-3 py-1.5 text-xs font-mono-pixel font-bold rounded-full" style={{ backgroundColor: COLORS.mint, color: COLORS.dark }}>
                  ✓ {p}
                </span>
              ))}
            </div>
          </div>
          
          <p className="text-sm leading-relaxed font-mono-pixel pt-3" style={{ color: COLORS.dark, borderTop: `2px solid ${COLORS.mint}` }}>
            {description}
          </p>
        </div>
        
        {/* Footer */}
        <div className="p-3 rounded-b-xl flex justify-between items-center" style={{ backgroundColor: COLORS.mint, borderTop: `2px solid ${COLORS.pink}` }}>
          <div className="flex items-center gap-2">
            <MiniCat color={COLORS.mint} />
            <span className="text-[9px] font-mono-pixel animate-pulse" style={{ color: COLORS.sage }}>{t.popup.meow}</span>
          </div>
          <div className="flex gap-1">
            <span className="text-xs">🐾</span>
            <span className="text-xs">🐾</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function HorizontalCatParade({ sectionId }) {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCat, setActiveCat] = useState(null)
  const containerRef = useRef(null)
  const sectionRef = useRef(null)
  const { t } = useLanguage()
  
  const paradeCats = getCatData(t)

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

  // Animasi berjalan horizontal
  useEffect(() => {
    if (!isVisible) return
    let animationId
    let currentPos = 0
    const speed = 0.45
    const animate = () => {
      currentPos = (currentPos + speed) % (paradeCats.length * 120)
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(${-currentPos}px)`
      }
      animationId = requestAnimationFrame(animate)
    }
    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isVisible, paradeCats.length])

  return (
    <div ref={sectionRef} className="w-full overflow-hidden py-4 md:py-6">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="text-center mb-2">
              <p className="text-[9px] font-mono-pixel animate-pulse" style={{ color: COLORS.sage }}>{t.skills.subtitle}</p>
            </div>
            
            <div className="relative overflow-hidden py-2">
              <div 
                ref={containerRef}
                className="flex items-center gap-3 md:gap-4"
                style={{ willChange: 'transform' }}
              >
                {[...paradeCats, ...paradeCats, ...paradeCats].map((cat, idx) => (
                  <div key={`${sectionId}-${cat.id}-${idx}`} className="flex-shrink-0">
                    <WalkingCat
                      cat={cat}
                      index={idx % paradeCats.length}
                      onClick={(c) => setActiveCat(activeCat?.id === c?.id ? null : c)}
                      isActive={activeCat?.id === cat.id}
                      isLeader={cat.isLeader}
                      shouldWalk={!activeCat}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FFF8E7] to-transparent pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FFF8E7] to-transparent pointer-events-none"></div>
            </div>
            
            <div className="text-center mt-2">
              <p className="text-[7px] font-mono-pixel" style={{ color: COLORS.sage }}>{t.skills.walking}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Global Popup Skill */}
      <AnimatePresence>
        {activeCat && !activeCat.isLeader && (
          <GlobalPopup cat={activeCat} onClose={() => setActiveCat(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}