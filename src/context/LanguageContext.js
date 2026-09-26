'use client'

import { createContext, useState, useContext, useEffect } from 'react'

const LanguageContext = createContext()

export const translations = {
  en: {
    nav: {
      home: 'Home',
      skills: 'Skills',
      projects: 'Projects',
      certificates: 'Certificates',
      contact: 'Contact'
    },
    hero: {
      hi: "Hi, I'm",
      status: "Fresh Graduate Informatics",
      role: "Junior Full-Stack Web Developer",
      description: "Junior Full-Stack Developer with experience building web applications using Spring Boot, Next.js, PHP, and MySQL. Interested in creating functional, user-friendly applications with appealing interfaces.",
      downloadCv: "Download Resume",
      viewProjects: "View Projects",
      cvFile: "/asset/CV_Ainul_Hidayah_EN.pdf"
    },
    projects: {
      title: "Featured Work",
      viewDetails: "VIEW DETAILS",
      wireframe: "wireframe",
      mockup: "mockup",
      implementation: "implementation",
      hideGallery: "− HIDE GALLERY",
      showGallery: "+ SHOW GALLERY",
      clickToView: "✦ Click Wireframe, Mockup, or Implementation to view images ✦",
      figmaDesign: "FIGMA DESIGN",
      figmaButton: "View Design on Figma",
      description: "DESCRIPTION",
      techStack: "TECH STACK",
      moreImages: "more images"
    },
    certificates: {
      title: "Certificates & Achievements",
      subtitle: "Continuous learning, certifications, and milestones throughout my journey.",
      all: "All",
      certificates: "Certificates",
      achievements: "Achievements",
      view: "View Details",
      found: "items found",
      itemFound: "item found",
      certificate: "Certificate",
      achievement: "Achievement",
      certDetails: "CERTIFICATE DETAILS",
      achDetails: "ACHIEVEMENT DETAILS",
      provider: "Provider:",
      organization: "Organization:",
      program: "Program:",
      period: "Period:",
      date: "Date:",
      year: "Year:",
      category: "Category:",
      credential: "Credential:",
      whatLearned: "WHAT I LEARNED",
      skillsDemonstrated: "SKILLS DEMONSTRATED",
      descriptionLabel: "DESCRIPTION"
    },
    contact: {
      title: "Let's Build Something Together",
      subtitle: "Have a project in mind? I'd love to hear about it!",
      email: "EMAIL",
      github: "GITHUB",
      linkedin: "LINKEDIN",
      downloadCv: "Download Resume"
    },
    skills: {
      subtitle: "meow~ cats are walking! click them!",
      walking: "← they are walking →",
      clickMe: "✨ Click for details ✨",
      popupTitle: "Skills",
      projectsLabel: "Projects",
      meow: "~ meow ~"
    },
    footer: "BUILT WITH 🐱 AND ☕"
  },
  id: {
    nav: {
      home: 'Beranda',
      skills: 'Keahlian',
      projects: 'Proyek',
      certificates: 'Sertifikat',
      contact: 'Kontak'
    },
    hero: {
      hi: "Halo, saya",
      status: "Lulusan Baru Informatika",
      role: "Junior Full-Stack Web Developer",
      description: "Junior Full-Stack Developer dengan pengalaman mengembangkan aplikasi web menggunakan Spring Boot, Next.js, PHP, dan MySQL. Tertarik pada pengembangan aplikasi yang fungsional, mudah digunakan, dan memiliki tampilan yang menarik.",
      downloadCv: "Unduh CV",
      viewProjects: "Lihat Proyek",
      cvFile: "/asset/CV_Ainul_Hidayah_ID.pdf"
    },
    projects: {
      title: "Karya Unggulan",
      viewDetails: "LIHAT DETAIL",
      wireframe: "wireframe",
      mockup: "mockup",
      implementation: "implementasi",
      hideGallery: "− SEMBUNYIKAN GALERI",
      showGallery: "+ TAMPILKAN GALERI",
      clickToView: "✦ Klik Wireframe, Mockup, atau Implementation untuk melihat gambar ✦",
      figmaDesign: "DESAIN FIGMA",
      figmaButton: "Lihat Desain di Figma",
      description: "DESKRIPSI",
      techStack: "TEKNOLOGI",
      moreImages: "gambar lainnya"
    },
    certificates: {
      title: "Sertifikat & Pencapaian",
      subtitle: "Pembelajaran berkelanjutan, sertifikasi, dan pencapaian sepanjang perjalanan saya.",
      all: "Semua",
      certificates: "Sertifikat",
      achievements: "Pencapaian",
      view: "Lihat Detail",
      found: "item ditemukan",
      itemFound: "item ditemukan",
      certificate: "Sertifikat",
      achievement: "Pencapaian",
      certDetails: "DETAIL SERTIFIKAT",
      achDetails: "DETAIL PENCAPAIAN",
      provider: "Penyelenggara:",
      organization: "Organisasi:",
      program: "Program:",
      period: "Periode:",
      date: "Tanggal:",
      year: "Tahun:",
      category: "Kategori:",
      credential: "Kredensial:",
      whatLearned: "YANG SAYA PELAJARI",
      skillsDemonstrated: "KETERAMPILAN YANG DITUNJUKKAN",
      descriptionLabel: "DESKRIPSI"
    },
    contact: {
      title: "Mari Membangun Sesuatu Bersama",
      subtitle: "Ada proyek dalam pikiran? Saya ingin mendengarnya!",
      email: "EMAIL",
      github: "GITHUB",
      linkedin: "LINKEDIN",
      downloadCv: "Unduh CV"
    },
    skills: {
      subtitle: "meow~ kucing sedang berjalan! klik mereka!",
      walking: "← mereka sedang berjalan →",
      clickMe: "✨ Klik untuk detail ✨",
      popupTitle: "Keahlian",
      projectsLabel: "Proyek",
      meow: "~ meong ~"
    },
    footer: "DIBANGUN DENGAN 🐱 DAN ☕"
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const savedLang = localStorage.getItem('language')
    if (savedLang && (savedLang === 'en' || savedLang === 'id')) {
      setLanguage(savedLang)
    }
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'id' : 'en'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}