'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ]

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#FFF8E7]/90 backdrop-blur-sm border-b-2 border-[#E99B9B]' : 'bg-[#FFF8E7] border-b-2 border-[#E99B9B]/30'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold tracking-tight group flex items-center gap-1">
            <span className="text-[#2C2C2C]">ainul</span>
            <span className="text-[#E99B9B]">.</span>
            <span className="text-[#2C2C2C]">dev</span> 
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[#4A4A4A] hover:text-[#2C2C2C] transition-colors duration-300 py-2 text-sm font-mono-pixel group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E99B9B] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="ml-2 px-3 py-1 text-sm font-mono-pixel border-2 border-[#E99B9B] rounded-full hover:bg-[#E99B9B] hover:text-white transition-all duration-300"
            >
              {language === 'en' ? '🇮🇩 ID' : '🇬🇧 EN'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 text-xs font-mono-pixel border-2 border-[#E99B9B] rounded-full"
            >
              {language === 'en' ? 'ID' : 'EN'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none text-[#2C2C2C]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-[#E99B9B]/30 mt-2 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-[#4A4A4A] hover:text-[#E99B9B] transition-colors duration-300 font-mono-pixel text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}