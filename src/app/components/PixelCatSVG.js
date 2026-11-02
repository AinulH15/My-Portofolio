'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Skema Warna Soft Cute Pastel
const CAT_PALETTES = {
  pink: { body: '#FFB7C5', dark: '#E58A9F', light: '#FFE4E8', ear: '#FF8DA1' },
  blue: { body: '#A2C4C9', dark: '#6A9298', light: '#E0EEF0', ear: '#7FA8AE' },
  green: { body: '#B5EAD7', dark: '#73B8A0', light: '#E8F8F3', ear: '#84CAAF' },
  purple: { body: '#C7CEEA', dark: '#8C97C6', light: '#EEF0FB', ear: '#9CA6D6' },
  orange: { body: '#FFDAC1', dark: '#E2A27A', light: '#FFF0E5', ear: '#FFA97A' }
}

// Single Cute Walking Cat Component
const CuteWalkingCat = ({ cat, onClick, isActive }) => {
  const palette = CAT_PALETTES[cat.color]

  return (
    <div className="relative inline-block cursor-pointer group" onClick={onClick}>
      {/* Container Animasi Naik-Turun Saat Melangkah */}
      <motion.div
        className="relative"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          width="130"
          height="110"
          viewBox="0 0 160 130"
          className="drop-shadow-md hover:scale-105 transition-transform duration-200"
        >
          {/* EKOR */}
          <motion.path
            d="M 130 65 Q 155 55 150 35 Q 145 20 135 25"
            stroke={palette.dark}
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
            animate={{ rotate: [-8, 12, -8] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '130px 65px' }}
          />

          {/* KAKI BELAKANG KIRI */}
          <motion.g
            animate={{ rotate: [18, -18, 18] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '115px 85px' }}
          >
            <rect x="110" y="85" width="12" height="24" rx="6" fill={palette.dark} />
          </motion.g>

          {/* KAKI DEPAN KIRI */}
          <motion.g
            animate={{ rotate: [-18, 18, -18] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '55px 85px' }}
          >
            <rect x="50" y="85" width="12" height="24" rx="6" fill={palette.dark} />
          </motion.g>

          {/* BADAN */}
          <rect x="40" y="45" width="90" height="48" rx="24" fill={palette.body} stroke={palette.dark} strokeWidth="3" />
          <rect x="55" y="55" width="60" height="30" rx="15" fill={palette.light} opacity="0.8" />

          {/* NAMA KATEGORI SKILL */}
          <text
            x="85"
            y="74"
            textAnchor="middle"
            fontSize="11"
            fontWeight="800"
            fill={palette.dark}
            fontFamily="sans-serif"
          >
            {cat.name}
          </text>

          {/* KAKI BELAKANG KANAN */}
          <motion.g
            animate={{ rotate: [-18, 18, -18] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '100px 85px' }}
          >
            <rect x="95" y="85" width="12" height="24" rx="6" fill={palette.body} stroke={palette.dark} strokeWidth="2" />
          </motion.g>

          {/* KAKI DEPAN KANAN */}
          <motion.g
            animate={{ rotate: [18, -18, 18] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '70px 85px' }}
          >
            <rect x="65" y="85" width="12" height="24" rx="6" fill={palette.body} stroke={palette.dark} strokeWidth="2" />
          </motion.g>

          {/* KEPALA */}
          <g>
            <circle cx="42" cy="48" r="26" fill={palette.body} stroke={palette.dark} strokeWidth="3" />

            {/* TELINGA */}
            <path d="M 22 34 L 16 12 L 34 26 Z" fill={palette.body} stroke={palette.dark} strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M 23 31 L 18 16 L 32 25 Z" fill={palette.ear} />

            <path d="M 50 26 L 64 12 L 58 34 Z" fill={palette.body} stroke={palette.dark} strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M 52 25 L 62 16 L 57 31 Z" fill={palette.ear} />

            {/* MATA (ANIMASI KEDIP) */}
            <motion.g
              animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.9, 0.93, 0.96, 1] }}
              style={{ transformOrigin: '42px 46px' }}
            >
              <circle cx="31" cy="46" r="4.5" fill="#2C2C2C" />
              <circle cx="32.5" cy="44.5" r="1.5" fill="white" />
              <circle cx="49" cy="46" r="4.5" fill="#2C2C2C" />
              <circle cx="50.5" cy="44.5" r="1.5" fill="white" />
            </motion.g>

            {/* HIDUNG & PIPISHUSH */}
            <polygon points="39,52 41,52 40,54" fill="#FF8DA1" />
            <path d="M 37 55 Q 40 58 40 55 Q 40 58 43 55" stroke={palette.dark} strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <circle cx="26" cy="53" r="4" fill="#FF8DA1" opacity="0.5" />
            <circle cx="52" cy="53" r="4" fill="#FF8DA1" opacity="0.5" />

            {/* KUMIS */}
            <line x1="22" y1="48" x2="10" y2="46" stroke={palette.dark} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="22" y1="52" x2="11" y2="53" stroke={palette.dark} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="58" y1="48" x2="70" y2="46" stroke={palette.dark} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="58" y1="52" x2="69" y2="53" stroke={palette.dark} strokeWidth="1.5" strokeLinecap="round" />
          </g>
        </svg>

        {/* BAYANGAN */}
        <motion.div
          className="w-20 h-2 bg-black/10 rounded-full mx-auto -mt-2 blur-[1px]"
          animate={{ scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Label Indikator Aktif */}
      {isActive && (
        <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-white border-2 border-pink-400 rounded-full px-2 py-0.5 shadow-sm text-[10px] font-bold text-pink-500 whitespace-nowrap animate-bounce">
          🐾 Clicked!
        </div>
      )}
    </div>
  )
}

// Popup Card Modal Component
const SkillModal = ({ cat, onClose }) => {
  const palette = CAT_PALETTES[cat.color]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: 15 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border-4 border-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: `0 20px 25px -5px ${palette.dark}33` }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-16 opacity-20"
          style={{ backgroundColor: palette.body }}
        />

        <div className="relative flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐱</span>
            <h3 className="text-lg font-black text-gray-800">{cat.name} Stack</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 font-bold hover:bg-gray-200 transition-colors"
          >
            ✕
          </button>
        </div>

        <p className="text-xs text-gray-600 mb-4 leading-relaxed">{cat.description}</p>

        <div className="space-y-3">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400">Skills</span>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {cat.skills.map((s, i) => (
                <span key={i} className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-gray-100 text-gray-700">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400">Projects</span>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {cat.projects.map((p, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-xl text-xs font-semibold text-white"
                  style={{ backgroundColor: palette.dark }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Data Kucing & Skill
const catsData = [
  {
    id: 1,
    name: 'Frontend',
    color: 'pink',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
    projects: ['Portfolio', 'Medipulse', 'Jokkaki'],
    description: 'Fokus membuat antarmuka web yang modern, user friendly, dan responsif.'
  },
  {
    id: 2,
    name: 'Backend',
    color: 'blue',
    skills: ['Java', 'Spring Boot', 'PHP', 'Laravel', 'REST API', 'JWT'],
    projects: ['PADI', 'Jokkaki'],
    description: 'Membangun arsitektur backend, RESTful API, dan sistem otentikasi yang scalable.'
  },
  {
    id: 3,
    name: 'Database',
    color: 'green',
    skills: ['MySQL', 'MariaDB', 'SQL Query', 'Database Design'],
    projects: ['PADI', 'Jokkaki', 'Bima Connect'],
    description: 'Merancang skema relasi basis data yang efektif dan terstruktur.'
  },
  {
    id: 4,
    name: 'Tools',
    color: 'purple',
    skills: ['Git', 'GitHub', 'Figma', 'Postman', 'Vercel'],
    projects: ['All Projects'],
    description: 'Terbiasa dengan tools pendukung pengembangan perangkat lunak modern.'
  }
]

// Main Section Component
export default function CatParade() {
  const [selectedCat, setSelectedCat] = useState(null)
  const [containerWidth, setContainerWidth] = useState(800)

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(Math.min(window.innerWidth - 64, 900))
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="py-16 bg-[#FAF7F2] overflow-hidden min-h-[420px] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-black text-gray-800 tracking-tight">✦ MY SKILL PARADE ✦</h2>
          <p className="text-xs text-gray-500 mt-1 font-medium">Klik kucing untuk melihat detail skill!</p>
        </div>

        {/* Dynamic Track Area - Jalan Kucing */}
        <div className="relative h-44 w-full border-b-2 border-dashed border-gray-300 flex items-end">
          {catsData.map((cat, index) => {
            const distance = containerWidth - 120
            const duration = 12 + index * 2.5

            return (
              <motion.div
                key={cat.id}
                className="absolute bottom-0 left-0"
                initial={{ x: 0, scaleX: 1 }}
                animate={{
                  x: [0, distance, distance, 0, 0],
                  scaleX: [1, 1, -1, -1, 1]
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: 'linear',
                  times: [0, 0.45, 0.5, 0.95, 1]
                }}
              >
                <CuteWalkingCat
                  cat={cat}
                  isActive={selectedCat?.id === cat.id}
                  onClick={() => setSelectedCat(cat)}
                />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedCat && (
          <SkillModal cat={selectedCat} onClose={() => setSelectedCat(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}