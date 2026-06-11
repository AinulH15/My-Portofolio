'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Komponen kucing pixel SVG dengan animasi
const PixelCatSVG = ({ 
  name, 
  color, 
  isLeader = false, 
  onClick, 
  isActive,
  index 
}) => {
  const [blink, setBlink] = useState(false)
  const [walkCycle, setWalkCycle] = useState(0)
  const [tailAngle, setTailAngle] = useState(0)
  const [lookDown, setLookDown] = useState(false)
  const audioRef = useRef(null)

  // Warna kucing berdasarkan kategori (seperti gambar referensi)
  const catColors = {
    orange: { body: '#F5A623', dark: '#D4891A', light: '#F7B84D', ear: '#E8921A' },
    pink: { body: '#E99B9B', dark: '#D48484', light: '#F0B8B8', ear: '#D48484' },
    blue: { body: '#6BA3C7', dark: '#4A7A9B', light: '#8BBBD9', ear: '#4A7A9B' },
    green: { body: '#7CB342', dark: '#5A7D2E', light: '#9BC75A', ear: '#5A7D2E' },
    purple: { body: '#9B59B6', dark: '#7D3C98', light: '#B87DCC', ear: '#7D3C98' },
    yellow: { body: '#F1C40F', dark: '#D4A30A', light: '#F4D45A', ear: '#D4A30A' },
    leader: { body: '#E99B9B', dark: '#D48484', light: '#F0B8B8', ear: '#D48484' }
  }

  const colors = isLeader ? catColors.leader : catColors[color]

  // Animasi jalan
  useEffect(() => {
    const interval = setInterval(() => {
      setWalkCycle(prev => (prev + 1) % 4)
      setTailAngle(prev => Math.sin(Date.now() / 300) * 15)
    }, 150)
    return () => clearInterval(interval)
  }, [])

  // Random blink
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true)
      setTimeout(() => setBlink(false), 100)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Mata melihat ke bawah saat popup aktif
  useEffect(() => {
    setLookDown(isActive)
  }, [isActive])

  const handleClick = () => {
    // Suara meow
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(e => console.log('Audio error:', e))
    }
    if (onClick) onClick()
  }

  // Posisi kaki berdasarkan siklus jalan
  const legOffset = walkCycle < 2 ? 2 : -2

  return (
    <div className="relative inline-block cursor-pointer group" onClick={handleClick}>
      {/* Kucing SVG - bentuk horizontal/kesamping */}
      <svg 
        width="120" 
        height="100" 
        viewBox="0 0 200 140" 
        className="drop-shadow-md hover:scale-105 transition-transform duration-200"
      >
        {/* EKOR (bergoyang) */}
        <g transform={`rotate(${tailAngle}, 170, 50)`}>
          <path 
            d="M170 50 Q190 40 185 25 Q182 15 175 18" 
            stroke={colors.dark} 
            strokeWidth="6" 
            fill="none" 
            strokeLinecap="round"
          />
          <circle cx="175" cy="18" r="5" fill={colors.body} stroke={colors.dark} strokeWidth="2"/>
        </g>
        
        {/* KAKI BELAKANG */}
        <g transform={`translate(0, ${walkCycle < 2 ? -1 : 1})`}>
          <rect x="125" y="105" width="20" height="18" rx="8" fill={colors.body} stroke={colors.dark} strokeWidth="2"/>
          <rect x="135" y="118" width="12" height="8" rx="4" fill={colors.dark}/>
        </g>
        
        <g transform={`translate(0, ${walkCycle >= 2 ? -1 : 1})`}>
          <rect x="105" y="105" width="20" height="18" rx="8" fill={colors.body} stroke={colors.dark} strokeWidth="2"/>
          <rect x="115" y="118" width="12" height="8" rx="4" fill={colors.dark}/>
        </g>
        
        {/* BADAN */}
        <rect x="60" y="70" width="100" height="50" rx="12" fill={colors.body} stroke={colors.dark} strokeWidth="3"/>
        
        {/* Perut */}
        <rect x="75" y="80" width="70" height="30" rx="8" fill={colors.light} stroke={colors.dark} strokeWidth="1.5"/>
        
        {/* TULISAN di BADAN */}
        <text 
          x="110" 
          y="100" 
          textAnchor="middle" 
          fontSize="14" 
          fontWeight="bold" 
          fill="#2C2C2C" 
          fontFamily="'Space Mono', monospace"
        >
          {isLeader ? '✦ SKILL ✦' : name}
        </text>
        
        {/* KAKI DEPAN */}
        <g transform={`translate(0, ${walkCycle < 2 ? 1 : -1})`}>
          <rect x="65" y="105" width="18" height="16" rx="7" fill={colors.body} stroke={colors.dark} strokeWidth="2"/>
          <rect x="72" y="116" width="10" height="7" rx="4" fill={colors.dark}/>
        </g>
        
        <g transform={`translate(0, ${walkCycle >= 2 ? 1 : -1})`}>
          <rect x="45" y="105" width="18" height="16" rx="7" fill={colors.body} stroke={colors.dark} strokeWidth="2"/>
          <rect x="52" y="116" width="10" height="7" rx="4" fill={colors.dark}/>
        </g>
        
        {/* KEPALA */}
        <circle cx="55" cy="65" r="30" fill={colors.body} stroke={colors.dark} strokeWidth="3"/>
        
        {/* TELINGA KIRI */}
        <polygon points="30,45 20,20 45,35" fill={colors.body} stroke={colors.dark} strokeWidth="3" strokeLinejoin="round"/>
        <polygon points="32,42 26,27 42,37" fill={colors.ear} stroke={colors.dark} strokeWidth="1.5"/>
        
        {/* TELINGA KANAN */}
        <polygon points="70,45 85,25 80,40" fill={colors.body} stroke={colors.dark} strokeWidth="3" strokeLinejoin="round"/>
        <polygon points="72,43 82,30 78,40" fill={colors.ear} stroke={colors.dark} strokeWidth="1.5"/>
        
        {/* MATA KIRI */}
        <g transform="translate(40, 58)">
          <circle cx="0" cy="0" r="7" fill="white" stroke={colors.dark} strokeWidth="2"/>
          <circle cx={lookDown ? 0 : 2} cy={lookDown ? 4 : 0} r="3.5" fill="#2C2C2C"/>
          <circle cx={lookDown ? 1 : 3} cy={lookDown ? 3 : -1} r="1.2" fill="white"/>
        </g>
        
        {/* MATA KANAN */}
        <g transform="translate(68, 58)">
          <circle cx="0" cy="0" r="7" fill="white" stroke={colors.dark} strokeWidth="2"/>
          <circle cx={lookDown ? 0 : 2} cy={lookDown ? 4 : 0} r="3.5" fill="#2C2C2C"/>
          <circle cx={lookDown ? 1 : 3} cy={lookDown ? 3 : -1} r="1.2" fill="white"/>
        </g>
        
        {/* BLINK EFFECT */}
        {blink && (
          <>
            <rect x="33" y="55" width="14" height="4" rx="2" fill={colors.body} stroke={colors.dark} strokeWidth="1.5"/>
            <rect x="61" y="55" width="14" height="4" rx="2" fill={colors.body} stroke={colors.dark} strokeWidth="1.5"/>
          </>
        )}
        
        {/* HIDUNG */}
        <polygon points="54,72 56,75 52,75" fill="#E99B9B" stroke={colors.dark} strokeWidth="1"/>
        
        {/* MULUT */}
        <path d="M54 75 Q54 80 50 80" stroke={colors.dark} strokeWidth="1.5" fill="none"/>
        <path d="M54 75 Q54 80 58 80" stroke={colors.dark} strokeWidth="1.5" fill="none"/>
        
        {/* KUMIS */}
        <line x1="28" y1="68" x2="12" y2="65" stroke={colors.dark} strokeWidth="1.5"/>
        <line x1="28" y1="72" x2="10" y2="72" stroke={colors.dark} strokeWidth="1.5"/>
        <line x1="80" y1="68" x2="96" y2="65" stroke={colors.dark} strokeWidth="1.5"/>
        <line x1="80" y1="72" x2="98" y2="72" stroke={colors.dark} strokeWidth="1.5"/>
        
        {/* BLUSH PIPI */}
        <circle cx="35" cy="72" r="4" fill="#E99B9B" opacity="0.4"/>
        <circle cx="73" cy="72" r="4" fill="#E99B9B" opacity="0.4"/>
      </svg>
      
      {/* Hover effect "click me" */}
      {index === 0 && !isActive && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white border-2 border-[#E99B9B] rounded-full px-2 py-0.5 shadow-md animate-bounce whitespace-nowrap">
          <p className="text-[7px] text-[#2C2C2C] font-mono-pixel">✨ click me! ✨</p>
        </div>
      )}
    </div>
  )
}

// Data parade kucing dengan warna sesuai referensi
const paradeCats = [
  { id: 0, name: 'SKILL', color: 'leader', isLeader: true, skills: null },
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

// Popup dialog
const SkillPopup = ({ cat, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 10 }}
      className="absolute left-1/2 transform -translate-x-1/2 top-32 w-64 bg-white border-4 border-[#E99B9B] rounded-2xl shadow-[8px_8px_0_0_#E99B9B] z-30"
    >
      {/* Telinga kucing */}
      <div className="absolute -top-2 left-3 w-4 h-3 bg-[#E99B9B] border-2 border-black rounded-t-full"></div>
      <div className="absolute -top-2 right-3 w-4 h-3 bg-[#E99B9B] border-2 border-black rounded-t-full"></div>
      
      {/* Header */}
      <div className="bg-[#E99B9B] p-3 rounded-t-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">🐱</span>
            <h4 className="text-sm font-black text-white font-mono-pixel">{cat.name} Skills</h4>
          </div>
          <button onClick={onClose} className="text-white text-lg">✕</button>
        </div>
      </div>
      
      {/* Body */}
      <div className="p-4">
        <div className="mb-4">
          <p className="text-[10px] font-black text-[#8B7355] mb-2 font-mono-pixel">✦ SKILLS</p>
          <div className="space-y-1">
            {cat.skills.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-mono-pixel">
                <span className="text-[#E99B9B]">-</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-[10px] font-black text-[#8B7355] mb-2 font-mono-pixel">✦ PROJECTS</p>
          <div className="space-y-1">
            {cat.projects.map((project, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-mono-pixel">
                <span className="text-[#E99B9B]">•</span>
                <span>{project}</span>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-[#4A4A4A] text-xs leading-relaxed font-mono-pixel border-t border-[#F0E8DC] pt-3">
          {cat.description}
        </p>
      </div>
      
      {/* Footer */}
      <div className="bg-[#F5F0E8] p-2 rounded-b-xl border-t border-[#E99B9B] flex justify-between">
        <span className="text-[8px] text-[#8B7355] font-mono-pixel">~ meow ~</span>
        <span className="text-xs">🐾</span>
      </div>
    </motion.div>
  )
}

// Komponen utama
export default function CatParade() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCat, setActiveCat] = useState(null)
  const sectionRef = useRef(null)
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current = new Audio('/asset/sounds/meow.mp3')
    audioRef.current.volume = 0.2
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
        else {
          setIsVisible(false)
          setActiveCat(null)
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleCatClick = (cat) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(e => console.log(e))
    }
    setActiveCat(activeCat?.id === cat.id ? null : cat)
  }

  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-24 bg-[#FFF8E7] overflow-hidden min-h-[550px]">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-[#E99B9B]"></div>
            <span className="text-[#E99B9B] text-xs font-mono-pixel">✦ MEET MY CATS ✦</span>
            <div className="w-12 h-px bg-[#E99B9B]"></div>
          </div>
          <p className="text-[#8B7355] text-xs font-mono-pixel mt-2">scroll down to see them walk!</p>
        </div>
        
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-5 py-6"
            >
              {paradeCats.map((cat, idx) => (
                <div key={cat.id} className="relative">
                  <PixelCatSVG
                    name={cat.name}
                    color={cat.color}
                    isLeader={cat.isLeader}
                    index={idx}
                    isActive={activeCat?.id === cat.id}
                    onClick={() => !cat.isLeader && handleCatClick(cat)}
                  />
                  
                  <AnimatePresence>
                    {activeCat?.id === cat.id && !cat.isLeader && (
                      <SkillPopup cat={cat} onClose={() => setActiveCat(null)} />
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <p className="text-[9px] text-[#8B7355] font-mono-pixel mt-4 animate-pulse">
                ✨ click any cat to see their skills! ✨
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isVisible && (
          <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
            <div className="bg-white/80 border-2 border-dashed border-[#E99B9B] rounded-2xl p-8">
              <div className="text-5xl mb-3 animate-bounce">🐱</div>
              <p className="text-[#8B7355] text-xs font-mono-pixel">scroll down to meet my cats!</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}