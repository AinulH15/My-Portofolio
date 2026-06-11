'use client'

import { createContext, useState, useContext, useEffect } from 'react'

const LanguageContext = createContext()

// Data translations
export const translations = {
  en: {
    // Navbar
    nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    
    // Hero
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
    
    // About
    about: {
      title: "Get to Know Me",
      p1: "I am a Fresh Graduate in Informatics from Makassar, South Sulawesi, with a strong interest in building efficient and scalable web applications.",
      p2: "My primary focus is full-stack web development, using Spring Boot for backend development and Next.js for modern frontend experiences. I also have experience working with PHP and MySQL to build web-based applications.",
      p3: "I enjoy writing clean and maintainable code while applying software engineering principles such as Clean Architecture and the MVC pattern. My goal is to create reliable, user-friendly, and impactful digital solutions."
    },
    
    // Skills (Cat Parade)
    skills: {
      title: "My Expertise",
      subtitle: "meow~ cats are walking! click them!",
      walking: "← they are walking →",
      clickMe: "✨ Click for details ✨",
    },
    
    // Projects
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
    
    // Contact
    contact: {
      title: "Let's Build Something Together",
      subtitle: "Have a project in mind? I'd love to hear about it!",
      email: "EMAIL",
      github: "GITHUB",
      linkedin: "LINKEDIN",
      downloadCv: "Download Resume"
    },
    
    // Footer
    footer: "BUILT WITH 🐱 AND ☕",
    
    // Popup
    popup: {
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      meow: "~ meow ~"
    },
    
    // Project Popup Details
    projectPopup: {
      description: "DESCRIPTION",
      techStack: "TECH STACK",
      github: "GitHub Repository",
      close: "Close"
    }
  },
  
  id: {
    // Navbar
    nav: { home: 'Beranda', about: 'Tentang', skills: 'Keahlian', projects: 'Proyek', contact: 'Kontak' },
    
    // Hero
    hero: {
      hi: "Halo, saya",
      name: "Ainul Hidayah",
      status: "Lulusan Baru Informatika",
      role: "Junior Full-Stack Developer",
      description: "Junior Full-Stack Developer dengan pengalaman mengembangkan aplikasi web menggunakan Spring Boot, Next.js, PHP, dan MySQL. Tertarik pada pengembangan aplikasi yang fungsional, mudah digunakan, dan memiliki tampilan yang menarik.",
      downloadCv: "Unduh CV",
      viewProjects: "Lihat Proyek",
      cvFile: "/asset/CV_Ainul_Hidayah_ID.pdf"
    },
    
    // About
    about: {
      title: "Kenali Saya",
      p1: "Halo! Saya Ainul Hidayah, seorang lulusan baru Informatika dari Makassar, Sulawesi Selatan, yang memiliki ketertarikan di bidang pengembangan web.",
      p2: "Saya terbiasa mengembangkan aplikasi web dari sisi frontend maupun backend menggunakan Spring Boot, Next.js, PHP, dan MySQL. Selain membuat aplikasi yang berfungsi dengan baik, saya juga senang memperhatikan tampilan dan pengalaman pengguna agar lebih nyaman digunakan.",
      p3: "Saya percaya bahwa kode yang rapi dan mudah dipelihara merupakan bagian penting dalam pengembangan perangkat lunak. Karena itu, saya berusaha menerapkan prinsip-prinsip seperti Clean Architecture dan pola MVC dalam setiap proyek yang saya kerjakan. Saat ini, saya terus belajar dan mengembangkan kemampuan untuk menciptakan aplikasi yang bermanfaat dan memberikan pengalaman terbaik bagi pengguna."
    },
    
    // Skills
    skills: {
      title: "Keahlian Saya",
      subtitle: "meow~ kucing sedang berjalan! klik mereka!",
      walking: "← mereka sedang berjalan →",
      clickMe: "✨ Klik untuk detail ✨",
    },
    
    // Projects
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
    
    // Contact
    contact: {
      title: "Mari Membangun Sesuatu Bersama",
      subtitle: "Ada proyek dalam pikiran? Saya ingin mendengarnya!",
      email: "EMAIL",
      github: "GITHUB",
      linkedin: "LINKEDIN",
      downloadCv: "Unduh CV"
    },
    
    // Footer
    footer: "DIBANGUN DENGAN 🐱 DAN ☕",
    
    // Popup
    popup: {
      skills: "Keahlian",
      projects: "Proyek",
      experience: "Pengalaman",
      meow: "~ meong ~"
    },
    
    // Project Popup Details
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