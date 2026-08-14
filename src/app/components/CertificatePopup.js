'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function CertificatePopup({
  item,
  onClose
}) {
  const { t, language } = useLanguage()

  const isCertificate = item.type === 'certificate'

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  // Teks berdasarkan bahasa
  const typeLabel = isCertificate 
    ? (language === 'en' ? 'Certificate' : 'Sertifikat')
    : (language === 'en' ? 'Achievement' : 'Pencapaian')
  
  const detailTitle = isCertificate 
    ? (language === 'en' ? 'CERTIFICATE DETAILS' : 'DETAIL SERTIFIKAT')
    : (language === 'en' ? 'ACHIEVEMENT DETAILS' : 'DETAIL PENCAPAIAN')
  
  const descriptionLabel = language === 'en' ? 'DESCRIPTION' : 'DESKRIPSI'
  const whatLearnedLabel = language === 'en' ? 'WHAT I LEARNED' : 'YANG SAYA PELAJARI'
  const skillsLabel = language === 'en' ? 'SKILLS DEMONSTRATED' : 'KETERAMPILAN YANG DITUNJUKKAN'
  const providerLabel = isCertificate 
    ? (language === 'en' ? 'Provider:' : 'Penyelenggara:')
    : (language === 'en' ? 'Organization:' : 'Organisasi:')
  const meowText = language === 'en' ? '~ meow ~' : '~ meong ~'

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ duration: 0.25 }}
        className="relative bg-white border-4 rounded-2xl shadow-2xl w-[95%] max-w-2xl max-h-[90vh] overflow-hidden"
        style={{ borderColor: '#FF9AA2' }}
        onClick={(e) => e.stopPropagation()}
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="p-4 md:p-5 rounded-t-xl flex justify-between items-start"
          style={{ backgroundColor: '#FF9AA2' }}
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">{isCertificate ? '📜' : '🏆'}</span>
              <h2 className="text-lg md:text-xl font-black text-white font-mono-pixel">
                {item.title}
              </h2>
            </div>
            <p className="text-white/80 mt-1 font-mono-pixel text-[10px] md:text-xs font-bold">
              {typeLabel} | {item.year}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-[#1A1A1D] text-xl md:text-2xl transition-colors"
          >
            ✕
          </button>
        </div>

        {/* =================================================
            BODY
        ================================================= */}

        <div className="p-4 md:p-5 max-h-[calc(90vh-130px)] overflow-y-auto">

          {/* IMAGE */}
          <div className="mb-5 bg-[#F5F0E8] rounded-xl overflow-hidden flex items-center justify-center p-4 border border-[#EDE5D8]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto max-h-[400px] object-contain rounded-lg"
            />
          </div>

          {/* DESCRIPTION */}
          <div className="mb-5">
            <h3 className="text-sm md:text-base font-black text-[#1A1A1D] mb-2 flex items-center gap-2 font-mono-pixel">
              <span className="w-1 h-3 md:h-4 bg-[#FF9AA2] rounded-full"></span>
              {descriptionLabel}
            </h3>
            <p className="text-[#4A4A4A] text-xs md:text-sm leading-relaxed font-mono-pixel">
              {item.description || 'No description available.'}
            </p>
          </div>

          {/* DETAILS */}
          <div className="mb-5">
            <h3 className="text-sm md:text-base font-black text-[#1A1A1D] mb-2 flex items-center gap-2 font-mono-pixel">
              <span className="w-1 h-3 md:h-4 bg-[#FF9AA2] rounded-full"></span>
              {detailTitle}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              <span className="bg-[#FF9AA2]/10 text-[#FF9AA2] px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-[10px] font-mono-pixel font-bold">
                {item.issuer || item.organization}
              </span>
              <span className="bg-[#FF9AA2]/10 text-[#FF9AA2] px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-[10px] font-mono-pixel font-bold">
                {item.year}
              </span>
              {item.category && (
                <span className="bg-[#FF9AA2]/10 text-[#FF9AA2] px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-[10px] font-mono-pixel font-bold">
                  {item.category}
                </span>
              )}
              {item.credential && (
                <span className="bg-[#FF9AA2]/10 text-[#FF9AA2] px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-[10px] font-mono-pixel font-bold">
                  {language === 'en' ? 'Credential:' : 'Kredensial:'} {item.credential}
                </span>
              )}
            </div>
          </div>

          {/* WHAT I LEARNED / SKILLS DEMONSTRATED */}
          {item.skills && item.skills.length > 0 && (
            <div className="mb-5">
              <h3 className="text-sm md:text-base font-black text-[#1A1A1D] mb-2 flex items-center gap-2 font-mono-pixel">
                <span className="w-1 h-3 md:h-4 bg-[#FF9AA2] rounded-full"></span>
                {isCertificate ? whatLearnedLabel : skillsLabel}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {item.skills.map((skill, idx) => (
                  <span key={idx} className="bg-[#F5F0E8] border border-[#E99B9B] px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-[10px] font-mono-pixel text-[#2C2C2C]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* DATE */}
          {item.date && (
            <div className="mb-5">
              <h3 className="text-sm md:text-base font-black text-[#1A1A1D] mb-2 flex items-center gap-2 font-mono-pixel">
                <span className="w-1 h-3 md:h-4 bg-[#FF9AA2] rounded-full"></span>
                {language === 'en' ? 'DATE' : 'TANGGAL'}
              </h3>
              <p className="text-[#4A4A4A] text-xs md:text-sm leading-relaxed font-mono-pixel">
                {item.date}
              </p>
            </div>
          )}

          {/* PERIOD */}
          {item.period && (
            <div className="mb-5">
              <h3 className="text-sm md:text-base font-black text-[#1A1A1D] mb-2 flex items-center gap-2 font-mono-pixel">
                <span className="w-1 h-3 md:h-4 bg-[#FF9AA2] rounded-full"></span>
                {language === 'en' ? 'PERIOD' : 'PERIODE'}
              </h3>
              <p className="text-[#4A4A4A] text-xs md:text-sm leading-relaxed font-mono-pixel">
                {item.period}
              </p>
            </div>
          )}

          {/* PROGRAM */}
          {item.program && (
            <div className="mb-5">
              <h3 className="text-sm md:text-base font-black text-[#1A1A1D] mb-2 flex items-center gap-2 font-mono-pixel">
                <span className="w-1 h-3 md:h-4 bg-[#FF9AA2] rounded-full"></span>
                {language === 'en' ? 'PROGRAM' : 'PROGRAM'}
              </h3>
              <p className="text-[#4A4A4A] text-xs md:text-sm leading-relaxed font-mono-pixel">
                {item.program}
              </p>
            </div>
          )}

        </div>

        {/* =================================================
            FOOTER
        ================================================= */}

        <div
          className="p-3 rounded-b-xl flex justify-between items-center"
          style={{ backgroundColor: '#E2F0CB', borderTop: '2px solid #FF9AA2' }}
        >
          <div className="flex items-center gap-2">
            <span className="text-sm">🐱</span>
            <span className="text-[9px] font-mono-pixel animate-pulse" style={{ color: '#B5EAD7' }}>
              {meowText}
            </span>
          </div>
          <div className="flex gap-1">
            <span className="text-xs">🐾</span>
            <span className="text-xs">🐾</span>
          </div>
        </div>

      </motion.div>
    </div>
  )
}