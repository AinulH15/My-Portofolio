'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import CertificatePopup from './CertificatePopup'

const certificatesData = [
  {
    id: 1,
    title: 'IT Full Stack Developer: Mastering Web Development Blending With Data Science',
    issuer: 'PT Rakamin Kolektif Madani',
    program: 'MSIB Angkatan 7',
    period: '6 September – 31 Desember 2024',
    year: '2024',
    category: 'Full Stack Development',
    image: '/asset/certificate/rakamin.jpg',
    description: 'Completed intensive full-stack development program covering modern web development, data science integration, and industry best practices.',
    skills: ['Full Stack Development', 'Data Science', 'Web Development', 'Industry Best Practices'],
    type: 'certificate'
  },
  {
    id: 2,
    title: 'Web Development Pemula – Special Challenge',
    issuer: 'Skillvul',
    date: '14 Juli 2023',
    year: '2023',
    category: 'Web Development',
    image: '/asset/certificate/skilvull.jpg',
    description: 'Completed special challenge in beginner web development, demonstrating proficiency in HTML, CSS, and JavaScript fundamentals.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    type: 'certificate'
  },
  {
    id: 3,
    title: 'Cloud Computing PBK',
    issuer: 'BBPVP Makassar – Kementerian Ketenagakerjaan RI',
    period: 'Oktober – Desember 2024',
    year: '2024',
    category: 'Cloud Computing',
    image: '/asset/certificate/Pelatihan_cloudcomputing.jpeg',
    description: 'Completed cloud computing training program covering cloud infrastructure, deployment, and modern cloud services.',
    skills: ['Cloud Computing', 'Cloud Infrastructure', 'Deployment', 'Cloud Services'],
    type: 'certificate'
  },
  {
    id: 4,
    title: 'Bank Muamalat Business Intelligence Analyst',
    issuer: 'PT Rakamin Kolektif Madani & Bank Muamalat',
    program: 'Project-Based Internship',
    period: '6 Januari – 3 Februari 2025',
    year: '2025',
    category: 'Business Intelligence',
    image: '/asset/certificate/pbi.jpg',
    description: 'Successfully completed the Bank Muamalat Business Intelligence Analyst Project Based Internship Program at Bank Muamalat. Skills learned include Business Acumen, Data Visualization, and Excel Data Processing.',
    skills: ['Business Acumen', 'Data Visualization', 'Excel Data Processing', 'Business Intelligence'],
    credential: '325104IAPAGIB122025',
    type: 'certificate'
  }
]

const achievementsData = [
  {
    id: 101,
    title: 'Rancang Bangun Sistem Terbaik',
    organization: 'Universitas Ichsan Sidenreng Rappang',
    year: '2026',
    category: 'Achievement',
    image: '/asset/certificate/Sertifikat_penghargaan_kampus.jpg',
    description: 'Recognition for successfully formulating an innovative, structured, and applicable technology solution through the final thesis project titled "Penerapan Clean Architecture pada Website Manajemen Arsip Digital di Kantor Pertanahan Kabupaten Sidenreng Rappang".',
    skills: ['Clean Architecture', 'Web Application Development', 'Digital Archive Management', 'System Design', 'Software Development'],
    type: 'achievement'
  },
  {
    id: 102,
    title: 'Piagam Aplikasi PADI',
    organization: 'Kantor Pertanahan Kabupaten Sidenreng Rappang',
    year: '2025',
    category: 'Achievement',
    image: '/asset/certificate/Piagam_penghargaan.png',
    description: 'Recognition for contribution to the development of PADI (Pencarian Arsip dan Dokumen Informasi) during an internship at the Land Office of Sidenreng Rappang. The contribution involved innovation, dedication, and collaboration in developing a digital archive management solution.',
    skills: ['Web Application Development', 'Digital Archive Management', 'System Development', 'Problem Solving', 'Collaboration'],
    type: 'achievement'
  }
]

export default function CertificateSection() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('all')
  const [selectedItem, setSelectedItem] = useState(null)

  const allItems = [...certificatesData, ...achievementsData]

  const filteredItems = filter === 'all'
    ? allItems
    : allItems.filter(item => item.type === filter)

  return (
    <section id="certificates" className="mt-16 md:mt-24">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-8 md:mb-10"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-8 md:w-10 h-px bg-[#E99B9B]"></div>
          <span className="text-[#E99B9B] text-[10px] md:text-xs font-mono-pixel tracking-wide">
            ✦ {t.certificates.title.toUpperCase()} ✦
          </span>
          <div className="w-8 md:w-10 h-px bg-[#E99B9B]"></div>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-[#2C2C2C] tracking-tight font-mono-pixel">
          {t.certificates.title}
        </h2>
        <p className="text-[#6B6B6B] text-sm mt-3 font-mono-pixel">
          {t.certificates.subtitle}
        </p>
      </motion.div>

      {/* Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
        className="flex justify-center gap-3 mb-10"
      >
        {[
          { key: 'all', label: t.certificates.all },
          { key: 'certificate', label: t.certificates.certificates },
          { key: 'achievement', label: t.certificates.achievements }
        ].map((category) => (
          <button
            key={category.key}
            onClick={() => setFilter(category.key)}
            className={`
              px-5 py-2.5 rounded-full text-xs md:text-sm font-mono-pixel font-bold 
              transition-all duration-300 flex items-center gap-2
              border-2 cursor-pointer
              ${
                filter === category.key
                  ? 'bg-[#E99B9B] text-white border-[#E99B9B] shadow-[3px_3px_0_0_#d48484]'
                  : 'bg-white text-[#6B6B6B] border-[#E99B9B]/30 hover:border-[#E99B9B] hover:bg-[#FFF5F0]'
              }
            `}
          >
            {category.label}
            {filter === category.key && (
              <span className="ml-1 text-white/80 text-xs">✦</span>
            )}
          </button>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <p className="text-[10px] text-[#8B7355] font-mono-pixel">
          {filteredItems.length} {filteredItems.length === 1 ? t.certificates.itemFound : t.certificates.found}
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            viewport={{ once: true, margin: "-80px" }}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-[#F0E8DC]"
            onClick={() => setSelectedItem(item)}
          >
            <div className="h-40 md:h-48 relative overflow-hidden bg-gradient-to-br from-[#F5F0E8] to-[#EDE5D8]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className={`absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[9px] md:text-[10px] font-mono-pixel font-bold shadow-sm ${
                item.type === 'certificate' ? 'bg-[#E99B9B] text-white' : 'bg-[#FFDAC1] text-[#2C2C2C]'
              }`}>
                {item.type === 'certificate' ? t.certificates.certificate : t.certificates.achievement}
              </div>
              <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 md:px-2 md:py-0.5 rounded-md text-[9px] md:text-[10px] font-mono-pixel text-[#8B7355] shadow-sm">
                {item.year}
              </div>
            </div>
            <div className="p-4 md:p-5">
              <h3 className="text-base md:text-lg font-black text-[#2C2C2C] mb-1 font-mono-pixel line-clamp-2">{item.title}</h3>
              <p className="text-[10px] md:text-xs text-[#8B7355] font-mono-pixel">{item.issuer || item.organization}</p>
              <button className="inline-flex items-center gap-1 text-[#E99B9B] font-bold hover:text-[#d48484] transition-colors group/btn text-[10px] md:text-xs font-mono-pixel mt-3">
                <span>{t.certificates.view}</span>
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <CertificatePopup item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}