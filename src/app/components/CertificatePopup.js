'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function CertificatePopup({ item, onClose }) {
  const { t } = useLanguage()
  const isCertificate = item.type === 'certificate'

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ duration: 0.25 }}
        className="relative bg-white border-4 rounded-2xl shadow-2xl w-[95%] max-w-2xl max-h-[90vh] overflow-hidden"
        style={{ borderColor: '#FF9AA2' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="p-4 md:p-5 rounded-t-xl flex justify-between items-start" style={{ backgroundColor: '#FF9AA2' }}>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">{isCertificate ? '📜' : '🏆'}</span>
              <h2 className="text-lg md:text-xl font-black text-white font-mono-pixel">{item.title}</h2>
            </div>
            <p className="text-white/80 mt-1 font-mono-pixel text-[10px] md:text-xs font-bold">
              {isCertificate ? t.certificates.certificate : t.certificates.achievement} | {item.year}
            </p>
          </div>
          <button onClick={onClose} className="text-white hover:text-[#1A1A1D] text-xl md:text-2xl transition-colors">✕</button>
        </div>

        {/* BODY */}
        <div className="p-4 md:p-5 max-h-[calc(90vh-130px)] overflow-y-auto">
          <div className="mb-5 bg-[#F5F0E8] rounded-xl overflow-hidden flex items-center justify-center p-4 border border-[#EDE5D8]">
            <img src={item.image} alt={item.title} className="w-full h-auto max-h-[400px] object-contain rounded-lg" />
          </div>

          {item.description && (
            <div className="mb-5">
              <h3 className="text-sm md:text-base font-black text-[#1A1A1D] mb-2 flex items-center gap-2 font-mono-pixel">
                <span className="w-1 h-3 md:h-4 bg-[#FF9AA2] rounded-full"></span>
                {t.certificates.descriptionLabel}
              </h3>
              <p className="text-[#4A4A4A] text-xs md:text-sm leading-relaxed font-mono-pixel">{item.description}</p>
            </div>
          )}

          <div className="mb-5">
            <h3 className="text-sm md:text-base font-black text-[#1A1A1D] mb-2 flex items-center gap-2 font-mono-pixel">
              <span className="w-1 h-3 md:h-4 bg-[#FF9AA2] rounded-full"></span>
              {isCertificate ? t.certificates.certDetails : t.certificates.achDetails}
            </h3>
            <div className="space-y-1.5 text-xs font-mono-pixel">
              <p><span className="font-bold text-[#8B7355]">{isCertificate ? t.certificates.provider : t.certificates.organization}</span> {item.issuer || item.organization}</p>
              {item.program && <p><span className="font-bold text-[#8B7355]">{t.certificates.program}</span> {item.program}</p>}
              {item.period && <p><span className="font-bold text-[#8B7355]">{t.certificates.period}</span> {item.period}</p>}
              {item.date && <p><span className="font-bold text-[#8B7355]">{t.certificates.date}</span> {item.date}</p>}
              <p><span className="font-bold text-[#8B7355]">{t.certificates.year}</span> {item.year}</p>
              {item.category && <p><span className="font-bold text-[#8B7355]">{t.certificates.category}</span> {item.category}</p>}
              {item.credential && <p><span className="font-bold text-[#8B7355]">{t.certificates.credential}</span> {item.credential}</p>}
            </div>
          </div>

          {item.skills && item.skills.length > 0 && (
            <div className="mb-5">
              <h3 className="text-sm md:text-base font-black text-[#1A1A1D] mb-2 flex items-center gap-2 font-mono-pixel">
                <span className="w-1 h-3 md:h-4 bg-[#FF9AA2] rounded-full"></span>
                {isCertificate ? t.certificates.whatLearned : t.certificates.skillsDemonstrated}
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
        </div>

        {/* FOOTER */}
        <div className="p-3 rounded-b-xl flex justify-between items-center" style={{ backgroundColor: '#E2F0CB', borderTop: '2px solid #FF9AA2' }}>
          <div className="flex items-center gap-2">
            <span className="text-sm">🐱</span>
            <span className="text-[9px] font-mono-pixel animate-pulse" style={{ color: '#B5EAD7' }}>{t.skills.meow}</span>
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