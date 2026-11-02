'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

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

// Skema Warna Kucing Gemoy
const catColors = {
  leader: { body: COLORS.lavender, dark: '#8B97C6', light: '#EEF0FB', ear: '#9CA6D6' },
  frontend: { body: COLORS.pink, dark: '#E5858E', light: '#FFE4E8', ear: '#FF8DA1' },
  backend: { body: COLORS.softPink, dark: '#E5A39E', light: '#FFF0E5', ear: '#FFA97A' },
  database: { body: COLORS.sage, dark: '#73B8A0', light: '#E8F8F3', ear: '#84CAAF' },
  tools: { body: COLORS.mint, dark: '#9FCCB0', light: '#E8F8F3', ear: '#B3D385' },
  uiux: { body: COLORS.peach, dark: '#E2A27A', light: '#FFF0E5', ear: '#FFDAC1' }
}

const isMobile = () => {
  if (typeof window === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768
}

const getCatData = () => [
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

const MiniCat = ({ color = COLORS.pink }) => (
  <svg width="36" height="32" viewBox="0 0 120 100" className="drop-shadow-sm">
    <ellipse cx="60" cy="65" rx="36" ry="24" fill={color} stroke={COLORS.dark} strokeWidth="3"/>
    <circle cx="60" cy="42" r="24" fill={color} stroke={COLORS.dark} strokeWidth="3"/>
    <polygon points="40,25 30,5 50,18" fill={color} stroke={COLORS.dark} strokeWidth="2.5" strokeLinejoin="round"/>
    <polygon points="80,25 90,5 70,18" fill={color} stroke={COLORS.dark} strokeWidth="2.5" strokeLinejoin="round"/>
    <circle cx="51" cy="40" r="3.5" fill={COLORS.dark}/>
    <circle cx="69" cy="40" r="3.5" fill={COLORS.dark}/>
  </svg>
)

const WalkingCat = ({ cat, onClick, isActive, isLeader = false, shouldWalk = true }) => {
  const [blink, setBlink] = useState(false)
  const [eyeX, setEyeX] = useState(0)
  const [eyeY, setEyeY] = useState(0)
  const catRef = useRef(null)
  const { t } = useLanguage()

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
    colors = colorMap[cat?.name] || catColors.frontend
  }
  
  const scale = isLeader ? 1 : 0.9

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true)
      setTimeout(() => setBlink(false), 120)
    }, 3000 + Math.random() * 2000)
    return () => clearInterval(interval)
  }, [])

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

  const handleClick = (e) => {
    e.stopPropagation()
    if (onClick) onClick(cat)
  }

  return (
    <div ref={catRef} className="relative inline-block cursor-pointer group" onClick={handleClick}>
      <motion.div
        animate={shouldWalk ? { y: [0, -5, 0] } : { y: 0 }}
        transition={{ duration: 0.4, repeat: shouldWalk ? Infinity : 0, ease: 'easeInOut' }}
        style={{ transform: `scale(${scale})`, transformOrigin: 'center center', display: 'inline-block' }}
      >
        <svg width="130" height="110" viewBox="0 0 160 130" className="drop-shadow-md hover:scale-105 transition-transform">
          
          {/* EKOR BERGOYANG */}
          <motion.path
            d="M 130 65 Q 155 50 145 30 Q 140 15 130 20"
            stroke={colors.dark}
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
            animate={shouldWalk ? { rotate: [-15, 20, -15] } : { rotate: 0 }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '130px 65px' }}
          />

          {/* KAKI BELAKANG KANAN (BACKGROUND LEG) */}
          <motion.g
            animate={shouldWalk ? { rotate: [-22, 22, -22] } : { rotate: 0 }}
            transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '105px 82px' }}
          >
            <rect x="98" y="80" width="13" height="25" rx="6.5" fill={colors.dark} />
          </motion.g>

          {/* KAKI DEPAN KANAN (BACKGROUND LEG) */}
          <motion.g
            animate={shouldWalk ? { rotate: [22, -22, 22] } : { rotate: 0 }}
            transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '58px 82px' }}
          >
            <rect x="51" y="80" width="13" height="25" rx="6.5" fill={colors.dark} />
          </motion.g>

          {/* BADAN UTAMA CHIBI */}
          <rect x="40" y="45" width="90" height="46" rx="23" fill={colors.body} stroke={colors.dark} strokeWidth="3" />
          <rect x="55" y="53" width="60" height="26" rx="13" fill={colors.light} opacity="0.8" />

          {/* TEKS NAMA SKILL */}
          <text 
            x="85" 
            y="71" 
            textAnchor="middle" 
            fontSize={isLeader ? "11" : "10"} 
            fontWeight="900" 
            fill={colors.dark} 
            fontFamily="'Space Mono', monospace"
          >
            {isLeader ? 'SKILL' : cat?.name}
          </text>

          {/* KAKI BELAKANG KIRI (FOREGROUND LEG - MENGAYUN AKTIF) */}
          <motion.g
            animate={shouldWalk ? { rotate: [22, -22, 22] } : { rotate: 0 }}
            transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '95px 82px' }}
          >
            <rect x="88" y="80" width="14" height="26" rx="7" fill={colors.body} stroke={colors.dark} strokeWidth="2.5" />
            <circle cx="95" cy="103" r="3" fill={colors.dark} />
          </motion.g>

          {/* KAKI DEPAN KIRI (FOREGROUND LEG - MENGAYUN AKTIF) */}
          <motion.g
            animate={shouldWalk ? { rotate: [-22, 22, -22] } : { rotate: 0 }}
            transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '68px 82px' }}
          >
            <rect x="61" y="80" width="14" height="26" rx="7" fill={colors.body} stroke={colors.dark} strokeWidth="2.5" />
            <circle cx="68" cy="103" r="3" fill={colors.dark} />
          </motion.g>

          {/* KEPALA KUCING */}
          <g>
            <circle cx="42" cy="48" r="26" fill={colors.body} stroke={colors.dark} strokeWidth="3" />

            {/* TELINGA */}
            <path d="M 22 34 L 16 12 L 34 26 Z" fill={colors.body} stroke={colors.dark} strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M 23 31 L 18 16 L 32 25 Z" fill={colors.ear} />

            <path d="M 50 26 L 64 12 L 58 34 Z" fill={colors.body} stroke={colors.dark} strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M 52 25 L 62 16 L 57 31 Z" fill={colors.ear} />

            {/* MATA */}
            {!blink ? (
              <>
                <g transform="translate(31, 46)">
                  <circle cx="0" cy="0" r="5" fill="white" stroke={colors.dark} strokeWidth="1.5" />
                  <circle cx={eyeX} cy={eyeY} r="2.2" fill={COLORS.dark} />
                  <circle cx={eyeX + 0.8} cy={eyeY - 0.8} r="0.8" fill="white" />
                </g>
                <g transform="translate(49, 46)">
                  <circle cx="0" cy="0" r="5" fill="white" stroke={colors.dark} strokeWidth="1.5" />
                  <circle cx={eyeX} cy={eyeY} r="2.2" fill={COLORS.dark} />
                  <circle cx={eyeX + 0.8} cy={eyeY - 0.8} r="0.8" fill="white" />
                </g>
              </>
            ) : (
              <>
                <path d="M 26 46 Q 31 50 36 46" stroke={colors.dark} strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M 44 46 Q 49 50 54 46" stroke={colors.dark} strokeWidth="2" fill="none" strokeLinecap="round" />
              </>
            )}

            {/* HIDUNG & MULUT */}
            <polygon points="39,52 43,52 41,55" fill="#FF8DA1" stroke={colors.dark} strokeWidth="0.8" />
            <path d="M 38 56 Q 41 59 41 56 Q 41 59 44 56" stroke={colors.dark} strokeWidth="1.5" fill="none" strokeLinecap="round" />

            {/* BLUSH PIPI */}
            <circle cx="26" cy="53" r="4" fill="#FF8DA1" opacity="0.6" />
            <circle cx="56" cy="53" r="4" fill="#FF8DA1" opacity="0.6" />

            {/* KUMIS */}
            <line x1="20" y1="48" x2="8" y2="45" stroke={colors.dark} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="20" y1="53" x2="7" y2="54" stroke={colors.dark} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="62" y1="48" x2="74" y2="45" stroke={colors.dark} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="62" y1="53" x2="75" y2="54" stroke={colors.dark} strokeWidth="1.5" strokeLinecap="round" />
          </g>
        </svg>

        {/* BAYANGAN */}
        <motion.div
          className="w-24 h-2.5 bg-black/15 rounded-full mx-auto -mt-3 blur-[2px]"
          animate={shouldWalk ? { scale: [0.85, 1.15, 0.85] } : { scale: 1 }}
          transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
      
      {isLeader && !isActive && t?.skills?.clickMe && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white border-2 rounded-full px-2.5 py-0.5 shadow-md animate-bounce whitespace-nowrap z-20" style={{ borderColor: COLORS.lavender }}>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border-b-2 border-r-2 rotate-45" style={{ borderColor: COLORS.lavender }}></div>
          <p className="text-[8px] font-mono-pixel whitespace-nowrap font-bold" style={{ color: COLORS.dark }}>{t.skills.clickMe}</p>
        </div>
      )}
    </div>
  )
}

const GlobalPopup = ({ cat, onClose }) => {
  const { language, t } = useLanguage()
  if (!cat || !cat.skills) return null
  
  const description = language === 'en' ? cat.descriptionEn : cat.descriptionId
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        className="relative w-[95%] max-w-md bg-white border-4 rounded-2xl shadow-2xl mt-14"
        style={{ borderColor: COLORS.pink }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
          <div className="bg-white rounded-full p-2 shadow-md border-2" style={{ borderColor: COLORS.pink }}>
            <MiniCat color={COLORS.pink} />
          </div>
          <div className="bg-white rounded-full p-2 shadow-md border-2" style={{ borderColor: COLORS.lavender }}>
            <MiniCat color={COLORS.lavender} />
          </div>
        </div>
        
        <div className="absolute -top-2 left-6 w-5 h-3 rounded-t-full" style={{ backgroundColor: COLORS.pink, border: `2px solid ${COLORS.dark}` }}></div>
        <div className="absolute -top-2 right-6 w-5 h-3 rounded-t-full" style={{ backgroundColor: COLORS.pink, border: `2px solid ${COLORS.dark}` }}></div>
        
        <div className="pt-10 pb-4 px-5 rounded-t-xl" style={{ backgroundColor: COLORS.pink }}>
          <div className="flex items-center justify-between">
            <h3 className="text-lg md:text-xl font-black text-white font-mono-pixel">{cat.name} {t?.popup?.skills || 'Skills'}</h3>
            <button onClick={onClose} className="text-white text-2xl hover:text-[#2C2C2C] transition-colors">✕</button>
          </div>
        </div>
        
        <div className="p-5 max-h-[55vh] overflow-y-auto">
          <div className="mb-4">
            <p className="text-[11px] font-black mb-2 font-mono-pixel" style={{ color: COLORS.sage }}>✦ {t?.popup?.skills?.toUpperCase() || 'SKILLS'} ✦</p>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((s, i) => (
                <span key={i} className="px-2.5 py-1 text-[10px] font-mono-pixel rounded-full" style={{ backgroundColor: `${COLORS.pink}20`, color: COLORS.dark }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-[11px] font-black mb-2 font-mono-pixel" style={{ color: COLORS.sage }}>✦ {t?.popup?.projects?.toUpperCase() || 'PROJECTS'} ✦</p>
            <div className="flex flex-wrap gap-1.5">
              {cat.projects.map((p, i) => (
                <span key={i} className="px-2.5 py-1 text-[10px] font-mono-pixel font-bold rounded-full" style={{ backgroundColor: COLORS.mint, color: COLORS.dark }}>
                  ✓ {p}
                </span>
              ))}
            </div>
          </div>
          
          <p className="text-xs leading-relaxed font-mono-pixel pt-2" style={{ color: COLORS.dark, borderTop: `1.5px solid ${COLORS.mint}` }}>
            {description}
          </p>
        </div>
        
        <div className="p-3 rounded-b-xl flex justify-between items-center" style={{ backgroundColor: COLORS.mint, borderTop: `2px solid ${COLORS.pink}` }}>
          <div className="flex items-center gap-2">
            <MiniCat color={COLORS.mint} />
            <span className="text-[9px] font-mono-pixel animate-pulse" style={{ color: COLORS.sage }}>{t?.popup?.meow || '~ meow ~'}</span>
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
  const [activeCatKey, setActiveCatKey] = useState(null)
  const [selectedCat, setSelectedCat] = useState(null)
  const containerRef = useRef(null)
  const sectionRef = useRef(null)
  const { t } = useLanguage()
  
  const paradeCats = getCatData()
  const mobile = isMobile()
  const horizontalSpeed = mobile ? 2.0 : 1.2

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        if (!entry.isIntersecting) {
          setActiveCatKey(null)
          setSelectedCat(null)
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    let animationId
    let currentPos = 0
    const animate = () => {
      if (!activeCatKey) {
        currentPos = (currentPos + horizontalSpeed) % (paradeCats.length * 150)
        if (containerRef.current) {
          containerRef.current.style.transform = `translateX(${-currentPos}px)`
        }
      }
      animationId = requestAnimationFrame(animate)
    }
    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isVisible, paradeCats.length, horizontalSpeed, activeCatKey])

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
              <p className="text-[9px] font-mono-pixel animate-pulse" style={{ color: '#1A1A1D' }}>{t?.skills?.subtitle || 'meow~ cats are walking! click them!'}</p>
            </div>
            
            <div className="relative overflow-hidden py-3">
              <div 
                ref={containerRef}
                className="flex items-center gap-4 md:gap-6"
                style={{ willChange: 'transform' }}
              >
                {[...paradeCats, ...paradeCats, ...paradeCats].map((cat, idx) => {
                  const uniqueKey = `${cat.id}-${idx}`
                  const isActive = activeCatKey === uniqueKey

                  return (
                    <div key={`${sectionId}-${uniqueKey}`} className="flex-shrink-0">
                      <WalkingCat
                        cat={cat}
                        index={cat.id}
                        onClick={(c) => {
                          if (c.isLeader) return
                          if (isActive) {
                            setActiveCatKey(null)
                            setSelectedCat(null)
                          } else {
                            setActiveCatKey(uniqueKey)
                            setSelectedCat(c)
                          }
                        }}
                        isActive={isActive}
                        isLeader={cat.isLeader}
                        shouldWalk={!activeCatKey}
                      />
                    </div>
                  )
                })}
              </div>
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FFF8E7] to-transparent pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FFF8E7] to-transparent pointer-events-none"></div>
            </div>
            
            <div className="text-center mt-2">
              <p className="text-[7px] font-mono-pixel" style={{ color: '#1A1A1D' }}>{t?.skills?.walking || '← they are walking →'}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {selectedCat && !selectedCat.isLeader && (
          <GlobalPopup 
            cat={selectedCat} 
            onClose={() => {
              setActiveCatKey(null)
              setSelectedCat(null)
            }} 
          />
        )}
      </AnimatePresence>
    </div>
  )
}