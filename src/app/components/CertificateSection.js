'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import CertificatePopup from './CertificatePopup'

// Data Certificates
const certificatesData = [
  {
    id: 1,
    title: 'IT Full Stack Developer: Mastering Web Development Blending With Data Science',
    issuer: 'PT Rakamin Kolektif Madani',
    program: 'MSIB Angkatan 7',
    period: '6 September – 31 Desember 2024',
    year: '2024',
    category: 'Full Stack Development',
    image: '/asset/certificate/rakamin-fullstack.png',
    description: 'Completed intensive full-stack development program covering modern web development, data science integration, and industry best practices.',
    type: 'certificate'
  },
  {
    id: 2,
    title: 'Web Development Pemula – Special Challenge',
    issuer: 'Skillvul',
    date: '14 Juli 2023',
    year: '2023',
    category: 'Web Development',
    image: '/asset/certificate/skillvul-webdev.png',
    description: 'Completed special challenge in beginner web development, demonstrating proficiency in HTML, CSS, and JavaScript fundamentals.',
    type: 'certificate'
  },
  {
    id: 3,
    title: 'Cloud Computing PBK',
    issuer: 'BBPVP Makassar – Kementerian Ketenagakerjaan RI',
    period: 'Oktober – Desember 2024',
    year: '2024',
    category: 'Cloud Computing',
    image: '/asset/certificate/bbpvp-cloud.png',
    description: 'Completed cloud computing training program covering cloud infrastructure, deployment, and modern cloud services.',
    type: 'certificate'
  }
]

// Data Achievements
const achievementsData = [
  {
    id: 1,
    title: 'Piagam Aplikasi PADI',
    organization: 'Universitas Ichsan Sidenreng Rappang',
    year: '2025',
    category: 'Achievement',
    image: '/asset/certificate/achievement-padi.png',
    description: 'Achievement for the development of PADI (Pencarian Arsip dan Dokumen Informasi) digital archive management system using Clean Architecture and Spring Boot.',
    type: 'achievement'
  }
]

export default function CertificateSection() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)
  
  const allItems = [...certificatesData, ...achievementsData]
  
  const filteredItems = filter === 'All' 
    ? allItems 
    : allItems.filter(item => item.type === filter.toLowerCase())

  const handleItemClick = (item) => {
    setSelectedItem(item)
  }

  const closePopup = () => {
    setSelectedItem(null)
  }

  // Text translations
  const texts = {
    title: t?.certificates?.title || 'Certificates & Achievements',
    subtitle: t?.certificates?.subtitle || 'Continuous learning, certifications, and milestones throughout my journey.',
    all: t?.certificates?.all || 'All',
    view: t?.certificates?.view || 'View Details'
  }

  return (
    <section id="certificates" className="mt-16 md:mt-24">
      <div className="text-center mb-8 md:mb-10">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-8 md:w-10 h-px bg-[#E99B9B]"></div>
          <span className="text-[#E99B9B] text-[10px] md:text-xs font-mono-pixel tracking-wide">✦ {texts.title.toUpperCase()} ✦</span>
          <div className="w-8 md:w-10 h-px bg-[#E99B9B]"></div>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-[#2C2C2C] tracking-tight font-mono-pixel">
          {texts.title}
        </h2>
        <p className="text-[#6B6B6B] text-sm mt-3 font-mono-pixel">
          {texts.subtitle}
        </p>
      </div>

      {/* Filter */}
      <div className="flex justify-center gap-2 mb-8 md:mb-10">
        {['All', 'Certificates', 'Achievements'].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-3 py-1.5 rounded-full text-xs font-mono-pixel transition-all duration-300 ${
              filter === category
                ? 'bg-[#E99B9B] text-white'
                : 'bg-[#F5F0E8] text-[#6B6B6B] hover:bg-[#EDE5D8]'
            }`}
          >
            {category === 'All' ? texts.all : category}
          </button>
        ))}
      </div>

      {/* Grid Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-[#F0E8DC]"
            onClick={() => handleItemClick(item)}
          >
            <div className="h-40 md:h-48 relative overflow-hidden bg-gradient-to-br from-[#F5F0E8] to-[#EDE5D8]">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className={`absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[9px] md:text-[10px] font-mono-pixel font-bold shadow-sm ${
                item.type === 'certificate' 
                  ? 'bg-[#E99B9B] text-white' 
                  : 'bg-[#FFDAC1] text-[#2C2C2C]'
              }`}>
                {item.type === 'certificate' ? '📜 Certificate' : '🏆 Achievement'}
              </div>
              <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 md:px-2 md:py-0.5 rounded-md text-[9px] md:text-[10px] font-mono-pixel text-[#8B7355] shadow-sm">
                {item.year}
              </div>
            </div>
            <div className="p-4 md:p-5">
              <h3 className="text-base md:text-lg font-black text-[#2C2C2C] mb-1 font-mono-pixel line-clamp-2">{item.title}</h3>
              <p className="text-[10px] md:text-xs text-[#8B7355] font-mono-pixel">{item.issuer || item.organization}</p>
              <button className="inline-flex items-center gap-1 text-[#E99B9B] font-bold hover:text-[#d48484] transition-colors group/btn text-[10px] md:text-xs font-mono-pixel mt-3">
                <span>{texts.view}</span>
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup */}
      <AnimatePresence>
        {selectedItem && (
          <CertificatePopup item={selectedItem} onClose={closePopup} />
        )}
      </AnimatePresence>
    </section>
  )
}