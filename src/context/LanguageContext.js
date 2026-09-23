'use client'

import { createContext, useState, useContext, useEffect } from 'react'

const LanguageContext = createContext()

export const translations = {
  en: {
    nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    hero: {
      hi: "Hi, I'm",
      name: "Ainul Hidayah",
      status: "Fresh Graduate Informatics",
      role: "Junior Full-Stack Web Developer",
      description: "Junior Full-Stack Developer with experience building web applications using Spring Boot, Next.js, PHP, and MySQL. Interested in creating functional, user-friendly applications with appealing interfaces.",
      downloadCv: "Download Resume",
      viewProjects: "View Projects",
      cvFile: "/asset/CV_Ainul_Hidayah_EN.pdf"
    },
    about: {
      title: "Get to Know Me",
      p1: "I am a Fresh Graduate in Informatics from Makassar, South Sulawesi, with a strong interest in building efficient and scalable web applications.",
      p2: "My primary focus is full-stack web development, using Spring Boot for backend development and Next.js for modern frontend experiences. I also have experience working with PHP and MySQL to build web-based applications.",
      p3: "I enjoy writing clean and maintainable code while applying software engineering principles such as Clean Architecture and the MVC pattern. My goal is to create reliable, user-friendly, and impactful digital solutions."
    },
    skills: {
      title: "My Expertise",
      subtitle: "meow~ cats are walking! click them!",
      walking: "← they are walking →",
      clickMe: "✨ Click for details ✨",
    },
    projects: {
      title: "Featured Work",
      viewDetails: "VIEW DETAILS",
      techStack: "TECH STACK",
      description: "DESCRIPTION",
      close: "Close",
      wireframe: "wireframe",
      mockup: "mockup",
      implementation: "implementation",
      hideGallery: "− HIDE GALLERY",
      showGallery: "+ SHOW GALLERY",
      clickToView: "✦ Click Wireframe, Mockup, or Implementation to view images ✦"
    },
    certificates: {
      title: 'Certificates & Achievements',
      subtitle: 'Continuous learning, certifications, and milestones throughout my journey.',
      all: 'All',
      view: 'View Details'
    },
    contact: {
      title: "Let's Build Something Together",
      subtitle: "Have a project in mind? I'd love to hear about it!",
      email: "EMAIL",
      github: "GITHUB",
      linkedin: "LINKEDIN",
      downloadCv: "Download Resume"
    },
    footer: "BUILT WITH 🐱 AND ☕",
    popup: {
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      meow: "~ meow ~"
    },
    projectPopup: {
      description: "DESCRIPTION",
      techStack: "TECH STACK",
      github: "GitHub Repository",
      close: "Close"
    }
  },
  id: {
    nav: { home: 'Beranda', about: 'Tentang', skills: 'Keahlian', projects: 'Proyek', contact: 'Kontak' },
    hero: {
      hi: "Halo, saya",
      name: "Ainul Hidayah",
      status: "Lulusan Baru Informatika",
      role: "Junior Full-Stack Developer",
      description: "Junior Full-Stack Developer dengan pengalaman mengembangkan aplikasi web menggunakan Spring Boot, Next.js, PHP, dan MySQL.",
      downloadCv: "Unduh CV",
      viewProjects: "Lihat Proyek",
      cvFile: "/asset/CV_Ainul_Hidayah_ID.pdf"
    },
    about: {
      title: "Kenali Saya",
      p1: "Halo! Saya Ainul Hidayah, seorang lulusan baru Informatika dari Makassar, Sulawesi Selatan, yang memiliki ketertarikan di bidang pengembangan web.",
      p2: "Saya terbiasa mengembangkan aplikasi web dari sisi frontend maupun backend menggunakan Spring Boot, Next.js, PHP, dan MySQL.",
      p3: "Saya percaya bahwa kode yang rapi dan mudah dipelihara merupakan bagian penting dalam pengembangan perangkat lunak."
    },
    skills: {
      title: "Keahlian Saya",
      subtitle: "meow~ kucing sedang berjalan! klik mereka!",
      walking: "← mereka sedang berjalan →",
      clickMe: "✨ Klik untuk detail ✨",
    },
    projects: {
      title: "Karya Unggulan",
      viewDetails: "LIHAT DETAIL",
      techStack: "TEKNOLOGI",
      description: "DESKRIPSI",
      close: "Tutup",
      wireframe: "wireframe",
      mockup: "mockup",
      implementation: "implementasi",
      hideGallery: "− SEMBUNYIKAN GALERI",
      showGallery: "+ TAMPILKAN GALERI",
      clickToView: "✦ Klik Wireframe, Mockup, atau Implementation untuk melihat gambar ✦"
    },
    certificates: {
      title: 'Sertifikat & Pencapaian',
      subtitle: 'Pembelajaran berkelanjutan, sertifikasi, dan pencapaian sepanjang perjalanan saya.',
      all: 'Semua',
      view: 'Lihat Detail'
    },
    contact: {
      title: "Mari Membangun Sesuatu Bersama",
      subtitle: "Ada proyek dalam pikiran? Saya ingin mendengarnya!",
      email: "EMAIL",
      github: "GITHUB",
      linkedin: "LINKEDIN",
      downloadCv: "Unduh CV"
    },
    footer: "DIBANGUN DENGAN 🐱 DAN ☕",
    popup: {
      skills: "Keahlian",
      projects: "Proyek",
      experience: "Pengalaman",
      meow: "~ meong ~"
    },
    projectPopup: {
      description: "DESKRIPSI",
      techStack: "TEKNOLOGI",
      github: "Repositori GitHub",
      close: "Tutup"
    }
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