// ============================================================
// KNOWLEDGE BASE - Berdasarkan CV Ainul Hidayah
// ============================================================

// Data personal
export const personalData = {
  name: "Ainul Hidayah, S.Kom",
  birthDate: "15 Oktober 2000",
  age: () => {
    const birth = new Date(2000, 9, 15) // 15 Oktober 2000
    const now = new Date()
    let age = now.getFullYear() - birth.getFullYear()
    const monthDiff = now.getMonth() - birth.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
      age--
    }
    return age
  },
  address: "Perum Hasri Residence 2 Blok E/14, Makassar, Sulawesi Selatan",
  city: "Makassar, Sulawesi Selatan, Indonesia",
  email: "ainulhidayah16@gmail.com",
  phone: "+62 852-4100-3966",
  github: "github.com/AinulH15",
  linkedin: "linkedin.com/in/ainul-hidayah-519507149",
  portfolio: "https://ainul-porto.vercel.app/",
  gpa: "3.98/4.00",
  university: "Universitas Ichsan Sidenreng Rappang",
  previousUniversity: "Institut Teknologi Amanna Gappa (pindah)",
  major: "Informatika",
  graduationYear: "2026",
  thesis: "Penerapan Clean Architecture pada Website Manajemen Arsip Digital di Kantor Pertanahan Kabupaten Sidenreng Rappang"
}

// ============================================================
// KNOWLEDGE BASE dengan keyword yang lebih kaya
// ============================================================

export const knowledgeBase = [
  // ==========================================
  // TENTANG DIRI / ABOUT
  // ============================================
  {
    id: 'about',
    keywords: [
      'who are you', 'who is ainul', 'about', 'tentang', 'siapa', 'profile', 'biodata',
      'perkenalan', 'introduce', 'kenalan', 'diri kamu', 'tell me about yourself',
      'ceritakan tentang', 'deskripsi diri', 'background', 'latar belakang'
    ],
    answer: {
      en: "I'm Ainul Hidayah, S.Kom — a Fresh Graduate in Informatics from Universitas Ichsan Sidenreng Rappang with a GPA of 3.98/4.00. I'm a Junior Full-Stack Web Developer based in Makassar, South Sulawesi, with experience in web-based information system development, database management, and digital document archiving.",
      id: "Saya Ainul Hidayah, S.Kom — lulusan baru S1 Informatika dari Universitas Ichsan Sidenreng Rappang dengan IPK 3,98/4,00. Saya seorang Junior Full-Stack Web Developer yang berdomisili di Makassar, Sulawesi Selatan, dengan pengalaman dalam pengembangan sistem informasi berbasis web, pengelolaan database, dan digitalisasi dokumen."
    }
  },

  // ==========================================
  // NAMA
  // ==========================================
  {
    id: 'name',
    keywords: ['nama', 'name', 'siapa nama', 'what is your name', 'panggil', 'nama lengkap', 'full name'],
    answer: {
      en: "My full name is Ainul Hidayah, with the title S.Kom (Bachelor of Computer Science).",
      id: "Nama lengkap saya Ainul Hidayah, dengan gelar S.Kom (Sarjana Komputer)."
    }
  },

  // ==========================================
  // UMUR
  // ==========================================
  {
    id: 'age',
    keywords: ['umur', 'usia', 'age', 'berapa tahun', 'how old', 'birthday', 'ulang tahun', 'lahir', 'tanggal lahir', 'birth'],
    answer: {
      en: `I was born on October 15, 2000, so I'm currently ${personalData.age()} years old.`,
      id: `Saya lahir pada 15 Oktober 2000, jadi saat ini saya berusia ${personalData.age()} tahun.`
    }
  },

  // ==========================================
  // LOKASI / DOMISILI
  // ==========================================
  {
    id: 'location',
    keywords: ['lokasi', 'location', 'dimana', 'where', 'tinggal', 'domisili', 'alamat', 'address', 'based', 'kota', 'city', 'asal'],
    answer: {
      en: "I live at Perum Hasri Residence 2 Blok E/14, Makassar, South Sulawesi, Indonesia.",
      id: "Saya tinggal di Perum Hasri Residence 2 Blok E/14, Makassar, Sulawesi Selatan, Indonesia."
    }
  },

  // ==========================================
  // RELOKASI
  // ==========================================
  {
    id: 'relocation',
    keywords: ['relokasi', 'relocate', 'pindah', 'bersedia pindah', 'willing to relocate', 'luar kota', 'luar daerah'],
    answer: {
      en: "Yes, I'm willing to relocate to other cities for work opportunities.",
      id: "Ya, saya bersedia relokasi ke kota lain untuk peluang kerja."
    }
  },

  // ==========================================
  // REMOTE / HYBRID / WFO
  // ==========================================
  {
    id: 'workmode',
    keywords: ['remote', 'hybrid', 'wfo', 'wfh', 'kerja dari rumah', 'on-site', 'onsite', 'work from office', 'mode kerja'],
    answer: {
      en: "I'm open to all work arrangements: Remote, Hybrid, or Work From Office (WFO).",
      id: "Saya terbuka untuk semua pengaturan kerja: Remote, Hybrid, atau Work From Office (WFO)."
    }
  },

  // ==========================================
  // PENDIDIKAN
  // ==========================================
  {
    id: 'education',
    keywords: ['pendidikan', 'education', 'kuliah', 'universitas', 'university', 'kampus', 'campus', 'sekolah', 'school', 'sarjana', 'degree', 'study', 'studi'],
    answer: {
      en: "Education:\n🎓 Universitas Ichsan Sidenreng Rappang — Bachelor of Informatics (2024–2026), GPA: 3.98/4.00\n🎓 Institut Teknologi Amanna Gappa — Informatics (2022–2024, transferred)",
      id: "Pendidikan:\n🎓 Universitas Ichsan Sidenreng Rappang — S1 Informatika (2024–2026), IPK: 3,98/4,00\n🎓 Institut Teknologi Amanna Gappa — Informatika (2022–2024, pindah)"
    }
  },

  // ==========================================
  // JURUSAN
  // ==========================================
  {
    id: 'major',
    keywords: ['jurusan', 'major', 'prodi', 'program studi', 'informatika', 'informatics', 'kuliah jurusan'],
    answer: {
      en: "I studied Informatics (Bachelor of Computer Science).",
      id: "Saya mengambil jurusan Informatika (S1 Komputer)."
    }
  },

  // ==========================================
  // IPK
  // ==========================================
  {
    id: 'gpa',
    keywords: ['ipk', 'gpa', 'nilai', 'grade', 'ipk berapa', 'gpa berapa', 'prestasi akademik', 'academic score', 'cumlaude'],
    answer: {
      en: "My GPA is 3.98 out of 4.00 — near-perfect! 🎓",
      id: "IPK saya 3,98 dari 4,00 — hampir sempurna! 🎓"
    }
  },

  // ==========================================
  // TAHUN LULUS
  // ==========================================
  {
    id: 'graduation',
    keywords: ['lulus', 'graduation', 'graduate', 'tahun lulus', 'kapan lulus', 'when graduate', 'wisuda'],
    answer: {
      en: "I graduated in 2026 with a Bachelor's degree in Informatics.",
      id: "Saya lulus pada tahun 2026 dengan gelar Sarjana Informatika."
    }
  },

  // ==========================================
  // SKRIPSI
  // ==========================================
  {
    id: 'thesis',
    keywords: ['skripsi', 'thesis', 'tugas akhir', 'final project', 'judul skripsi', 'penelitian', 'research'],
    answer: {
      en: "My thesis title: \"Penerapan Clean Architecture pada Website Manajemen Arsip Digital di Kantor Pertanahan Kabupaten Sidenreng Rappang\" (Implementation of Clean Architecture for Digital Archive Management at the Land Office of Sidenreng Rappang).",
      id: "Judul skripsi saya: \"Penerapan Clean Architecture pada Website Manajemen Arsip Digital di Kantor Pertanahan Kabupaten Sidenreng Rappang\"."
    }
  },

  // ==========================================
  // SKILL / KEAHLIAN
  // ==========================================
  {
    id: 'skills',
    keywords: ['skill', 'keahlian', 'kemampuan', 'bisa apa', 'tech stack', 'teknologi', 'programming', 'coding', 'tech', 'tools'],
    answer: {
      en: "My skills:\n💻 Programming: Java, PHP, JavaScript, HTML, CSS\n🌐 Web Dev: Spring Boot, REST API, Responsive Web\n🗄️ Database: MySQL, MariaDB\n🎨 UI/UX: Figma, Wireframing, Prototyping\n🛠️ Tools: Git, GitHub, VS Code, Microsoft Office, Google Workspace\n🔧 IT Support: Troubleshooting, Software Installation\n📊 Data: Data Entry, Validation, Processing, Digital Archiving",
      id: "Keahlian saya:\n💻 Programming: Java, PHP, JavaScript, HTML, CSS\n🌐 Web Dev: Spring Boot, REST API, Responsive Web\n🗄️ Database: MySQL, MariaDB\n🎨 UI/UX: Figma, Wireframing, Prototyping\n🛠️ Tools: Git, GitHub, VS Code, Microsoft Office, Google Workspace\n🔧 IT Support: Troubleshooting, Instalasi Software\n📊 Data: Data Entry, Validasi, Processing, Digital Archiving"
    }
  },

  // ==========================================
  // BACKEND SKILL
  // ==========================================
  {
    id: 'backend',
    keywords: ['backend', 'back-end', 'server', 'api', 'spring boot', 'java', 'php'],
    answer: {
      en: "Backend skills: Java 17, Spring Boot, PHP, REST API, Thymeleaf. I have experience building scalable backend systems with clean architecture.",
      id: "Keahlian backend: Java 17, Spring Boot, PHP, REST API, Thymeleaf. Saya berpengalaman membangun sistem backend yang scalable dengan clean architecture."
    }
  },

  // ==========================================
  // FRONTEND SKILL
  // ==========================================
  {
    id: 'frontend',
    keywords: ['frontend', 'front-end', 'ui', 'ux', 'tampilan', 'interface', 'javascript', 'react', 'next.js', 'tailwind'],
    answer: {
      en: "Frontend skills: JavaScript, HTML, CSS, React, Next.js, Tailwind CSS, Responsive Web Development, Figma for UI/UX design.",
      id: "Keahlian frontend: JavaScript, HTML, CSS, React, Next.js, Tailwind CSS, Responsive Web Development, Figma untuk desain UI/UX."
    }
  },

  // ==========================================
  // DATABASE SKILL
  // ==========================================
  {
    id: 'database',
    keywords: ['database', 'db', 'mysql', 'mariadb', 'sql', 'query'],
    answer: {
      en: "Database skills: MySQL, MariaDB, Database Management, SQL Query, Data Processing.",
      id: "Keahlian database: MySQL, MariaDB, Database Management, SQL Query, Data Processing."
    }
  },

  // ==========================================
  // PENGALAMAN KERJA
  // ==========================================
  {
    id: 'experience',
    keywords: ['pengalaman', 'experience', 'kerja', 'work', 'magang', 'intern', 'internship', 'karir', 'career'],
    answer: {
      en: "My experience:\n💼 Financial Consultant — PT Asuransi BRI Life (Sep 2019 – Mar 2020)\n💼 Online Administrator — Mimi Collection (Dec 2021 – Feb 2023)\n💼 Freelance Typing Editor (2014 – present)\n\n🎓 Internships:\n• MSIB Batch 7 — Rakamin Academy (Sep–Dec 2024)\n• Bank Muamalat — Business Intelligence Analyst (Jan–Feb 2025)\n• Kantor Pertanahan Kab. Sidenreng Rappang (Jan–Apr 2025)",
      id: "Pengalaman saya:\n💼 Financial Consultant — PT Asuransi BRI Life (Sep 2019 – Mar 2020)\n💼 Administrator Online — Mimi Collection (Des 2021 – Feb 2023)\n💼 Freelance Typing Editor (2014 – sekarang)\n\n🎓 Magang:\n• MSIB Batch 7 — Rakamin Academy (Sep–Des 2024)\n• Bank Muamalat — Business Intelligence Analyst (Jan–Feb 2025)\n• Kantor Pertanahan Kab. Sidenreng Rappang (Jan–Apr 2025)"
    }
  },

  // ==========================================
  // MAGANG / INTERNSHIP
  // ==========================================
  {
    id: 'internship',
    keywords: ['magang', 'internship', 'intern', 'msib', 'rakamin', 'studi independen', 'kantor pertanahan', 'bank muamalat'],
    answer: {
      en: "Internships:\n1️⃣ MSIB Batch 7 — Rakamin Academy (Sep–Dec 2024): Full-Stack Developer program, worked in 10-person team\n2️⃣ Bank Muamalat × Rakamin (Jan 6 – Feb 3, 2025): Business Intelligence Analyst — Excel, data processing, business acumen\n3️⃣ Kantor Pertanahan Kab. Sidenreng Rappang (Jan–Apr 2025): Developed PADI web system for land document search",
      id: "Magang:\n1️⃣ MSIB Batch 7 — Rakamin Academy (Sep–Des 2024): Program Full-Stack Developer, kerja dalam tim 10 orang\n2️⃣ Bank Muamalat × Rakamin (6 Jan – 3 Feb 2025): Business Intelligence Analyst — Excel, pengolahan data, business acumen\n3️⃣ Kantor Pertanahan Kab. Sidenreng Rappang (Jan–Apr 2025): Mengembangkan sistem web PADI untuk pencarian dokumen pertanahan"
    }
  },

  // ==========================================
  // PROJECT PADI
  // ==========================================
  {
    id: 'padi',
    keywords: ['padi', 'arsip', 'buku tanah', 'pertanahan', 'archive', 'dokumen', 'document', 'skripsi project', 'main project', 'project utama'],
    answer: {
      en: "PADI (Pencarian Arsip dan Dokumen Informasi) — my main project!\n\n📋 A web-based digital archive management system for land documents at Kantor Pertanahan Kab. Sidenreng Rappang.\n\n🔧 Tech: HTML, CSS, JavaScript, Java 17, Spring Boot, Thymeleaf, MariaDB\n✨ Features:\n• Archive search & borrowing\n• Role-based authentication\n• Speech-to-Text & Text-to-Speech\n• Archive storage visualization\n• Clean Architecture implementation",
      id: "PADI (Pencarian Arsip dan Dokumen Informasi) — proyek utama saya!\n\n📋 Sistem manajemen arsip digital berbasis web untuk dokumen pertanahan di Kantor Pertanahan Kab. Sidenreng Rappang.\n\n🔧 Teknologi: HTML, CSS, JavaScript, Java 17, Spring Boot, Thymeleaf, MariaDB\n✨ Fitur:\n• Pencarian & peminjaman arsip\n• Autentikasi berbasis role\n• Speech-to-Text & Text-to-Speech\n• Visualisasi penyimpanan arsip\n• Implementasi Clean Architecture"
    }
  },

  // ==========================================
  // PROJECT MEDIPULSE
  // ==========================================
  {
    id: 'medipulse',
    keywords: ['medipulse', 'medi pulse', 'obat', 'medicine', 'medication', 'reminder', 'pengingat obat', 'bmi'],
    answer: {
      en: "Medipulse — Medication Reminder Website\n\n🎨 Role: UI/UX Designer\n🔧 Tech: Figma, Canva\n✨ Features:\n• Medication reminder interface\n• Wireframe, prototype, interactive design\n• Medication schedule\n• BMI calculator",
      id: "Medipulse — Website Pengingat Obat\n\n🎨 Peran: UI/UX Designer\n🔧 Teknologi: Figma, Canva\n✨ Fitur:\n• Antarmuka pengingat obat\n• Wireframe, prototipe, desain interaktif\n• Jadwal minum obat\n• Kalkulator BMI"
    }
  },

  // ==========================================
  // PROJECT JOKKAKI
  // ==========================================
  {
    id: 'jokkaki',
    keywords: ['jokkaki', 'wisata', 'tourism', 'polling', 'voting', 'travel', 'destinasi'],
    answer: {
      en: "Jokkaki — Tourism Polling Website\n\n💻 Role: Full-Stack Developer\n🔧 Tech: HTML, CSS, JavaScript, PHP, MySQL\n✨ Features:\n• Full-stack tourism polling app\n• Responsive UI + backend functionality\n• Polling & database management",
      id: "Jokkaki — Website Polling Wisata\n\n💻 Peran: Full-Stack Developer\n🔧 Teknologi: HTML, CSS, JavaScript, PHP, MySQL\n✨ Fitur:\n• Aplikasi polling wisata full-stack\n• UI responsif + fungsionalitas backend\n• Fitur polling & manajemen database"
    }
  },

  // ==========================================
  // PROJECT PORTFOLIO
  // ==========================================
  {
    id: 'portfolio',
    keywords: ['portfolio', 'portofolio', 'website pribadi', 'personal website', 'web portofolio'],
    answer: {
      en: "Personal Portfolio Website — this website you're on!\n\n💻 Role: Full-Stack Developer\n🔧 Tech: Next.js, Tailwind CSS, JavaScript\n✨ Features:\n• Responsive design\n• Interactive animations\n• Project & skill showcase",
      id: "Website Portofolio Pribadi — website yang sedang Anda lihat!\n\n💻 Peran: Full-Stack Developer\n🔧 Teknologi: Next.js, Tailwind CSS, JavaScript\n✨ Fitur:\n• Desain responsif\n• Animasi interaktif\n• Showcase proyek & skill"
    }
  },

  // ==========================================
  // SEMUA PROJECT
  // ==========================================
  {
    id: 'projects',
    keywords: ['project', 'proyek', 'karya', 'works', 'portfolio projects', 'apa saja project', 'list project'],
    answer: {
      en: "My projects:\n1️⃣ PADI — Digital Archive Management System (Java, Spring Boot, MariaDB)\n2️⃣ Medipulse — Medication Reminder Website (Figma, Canva)\n3️⃣ Jokkaki — Tourism Polling Website (PHP, MySQL)\n4️⃣ Personal Portfolio Website (Next.js, Tailwind CSS)",
      id: "Proyek saya:\n1️⃣ PADI — Sistem Manajemen Arsip Digital (Java, Spring Boot, MariaDB)\n2️⃣ Medipulse — Website Pengingat Obat (Figma, Canva)\n3️⃣ Jokkaki — Website Polling Wisata (PHP, MySQL)\n4️⃣ Website Portofolio Pribadi (Next.js, Tailwind CSS)"
    }
  },

  // ==========================================
  // SERTIFIKAT
  // ==========================================
  {
    id: 'certificates',
    keywords: ['sertifikat', 'certificate', 'sertifikasi', 'certification', 'kursus', 'course', 'pelatihan', 'training'],
    answer: {
      en: "My certificates:\n📜 IT Full Stack Developer: Mastering Web Development Blending With Data Science — PT Rakamin Kolektif Madani (2024)\n📜 Web Development Pemula – Special Challenge — Skillvul (2023)\n📜 Cloud Computing PBK — BBPVP Makassar (2024)\n📜 Bank Muamalat Business Intelligence Analyst — Bank Muamalat (2025)",
      id: "Sertifikat saya:\n📜 IT Full Stack Developer: Mastering Web Development Blending With Data Science — PT Rakamin Kolektif Madani (2024)\n📜 Web Development Pemula – Special Challenge — Skillvul (2023)\n📜 Cloud Computing PBK — BBPVP Makassar (2024)\n📜 Bank Muamalat Business Intelligence Analyst — Bank Muamalat (2025)"
    }
  },

  // ==========================================
  // PENGHARGAAN
  // ==========================================
  {
    id: 'achievements',
    keywords: ['penghargaan', 'achievement', 'prestasi', 'award', 'piagam', 'reward', 'pencapaian'],
    answer: {
      en: "My achievements:\n🏆 Rancang Bangun Sistem Terbaik — Universitas Ichsan Sidenreng Rappang (Juli 2026)\n   Awarded for my thesis: Clean Architecture implementation for digital archive management\n\n🏆 Piagam Penghargaan Aplikasi PADI — Kantor Pertanahan Kabupaten Sidenreng Rappang (April 2025)\n   Recognition for contribution to PADI development during internship",
      id: "Penghargaan saya:\n🏆 Rancang Bangun Sistem Terbaik — Universitas Ichsan Sidenreng Rappang (Juli 2026)\n   Diberikan atas skripsi: Penerapan Clean Architecture pada manajemen arsip digital\n\n🏆 Piagam Penghargaan Aplikasi PADI — Kantor Pertanahan Kabupaten Sidenreng Rappang (April 2025)\n   Apresiasi atas kontribusi pengembangan PADI selama magang"
    }
  },

  // ==========================================
  // KONTAK
  // ==========================================
  {
    id: 'contact',
    keywords: ['kontak', 'contact', 'hubungi', 'reach', 'email', 'whatsapp', 'wa', 'telepon', 'phone', 'nomor', 'linkedin', 'github'],
    answer: {
      en: "You can reach me at:\n📧 Email: ainulhidayah16@gmail.com\n📱 Phone/WA: +62 852-4100-3966\n🐙 GitHub: github.com/AinulH15\n🔗 LinkedIn: linkedin.com/in/ainul-hidayah-519507149\n🌐 Portfolio: https://ainul-porto.vercel.app/",
      id: "Anda bisa menghubungi saya di:\n📧 Email: ainulhidayah16@gmail.com\n📱 Telepon/WA: +62 852-4100-3966\n🐙 GitHub: github.com/AinulH15\n🔗 LinkedIn: linkedin.com/in/ainul-hidayah-519507149\n🌐 Portfolio: https://ainul-porto.vercel.app/"
    }
  },

  // ==========================================
  // OPEN TO WORK
  // ==========================================
  {
    id: 'opentowork',
    keywords: ['open to work', 'hire', 'recruit', 'lowongan', 'rekrut', 'tersedia', 'available', 'cari kerja', 'job', 'freelance', 'kesempatan'],
    answer: {
      en: "Yes! I'm actively looking for opportunities as a Junior Full-Stack Web Developer. I'm open to:\n✅ Full-time positions\n✅ Remote / Hybrid / WFO\n✅ Freelance projects\n✅ Willing to relocate\n\nLet's connect! 🚀",
      id: "Ya! Saya sedang aktif mencari peluang sebagai Junior Full-Stack Web Developer. Saya terbuka untuk:\n✅ Posisi full-time\n✅ Remote / Hybrid / WFO\n✅ Proyek freelance\n✅ Bersedia relokasi\n\nMari terhubung! 🚀"
    }
  },

  // ==========================================
  // CV / RESUME
  // ==========================================
  {
    id: 'cv',
    keywords: ['cv', 'resume', 'unduh', 'download', 'curriculum vitae', 'daftar riwayat hidup'],
    answer: {
      en: "You can download my CV from the hero section or contact section of this website. Available in English and Indonesian versions.",
      id: "Anda bisa mengunduh CV saya dari bagian hero atau contact di website ini. Tersedia dalam versi Bahasa Inggris dan Indonesia."
    }
  },

  // ==========================================
  // BAHASA
  // ==========================================
  {
    id: 'language',
    keywords: ['bahasa', 'language', 'english', 'inggris', 'indonesia', 'toefl', 'ielts'],
    answer: {
      en: "I speak Indonesian (native) and English (professional working proficiency).",
      id: "Saya berbicara Bahasa Indonesia (native) dan Bahasa Inggris (profesional)."
    }
  },

  // ==========================================
  // CLEAN ARCHITECTURE
  // ==========================================
  {
    id: 'cleanarchitecture',
    keywords: ['clean architecture', 'arsitektur', 'architecture', 'mvc', 'design pattern', 'layer'],
    answer: {
      en: "I apply Clean Architecture by separating concerns into layers:\n• Presentation — UI/Controllers\n• Application — Use Cases\n• Domain — Business Logic\n• Infrastructure — Database, External Services\n\nThis makes code maintainable, testable, and scalable.",
      id: "Saya menerapkan Clean Architecture dengan memisahkan tanggung jawab ke dalam layer:\n• Presentation — UI/Controller\n• Application — Use Case\n• Domain — Business Logic\n• Infrastructure — Database, External Services\n\nIni membuat kode lebih mudah dipelihara, diuji, dan dikembangkan."
    }
  },

  // ==========================================
  // KELEBIHAN
  // ==========================================
  {
    id: 'strengths',
    keywords: ['kelebihan', 'strength', 'kuat', 'unggul', 'keunggulan', 'why hire', 'kenapa harus', 'alasan'],
    answer: {
      en: "My strengths:\n✅ GPA 3.98/4.00 — consistently high achiever\n✅ Systematic and detail-oriented\n✅ Strong teamwork and collaboration\n✅ Fast learner of new technologies\n✅ Structured problem-solving\n✅ Awarded \"Best System Design\" for thesis",
      id: "Kelebihan saya:\n✅ IPK 3,98/4,00 — konsisten berprestasi\n✅ Sistematis dan detail-oriented\n✅ Kuat dalam teamwork dan kolaborasi\n✅ Cepat belajar teknologi baru\n✅ Problem-solving terstruktur\n✅ Meraih \"Rancang Bangun Sistem Terbaik\" untuk skripsi"
    }
  },

  // ==========================================
  // KEKURANGAN
  // ==========================================
  {
    id: 'weaknesses',
    keywords: ['kekurangan', 'weakness', 'kurang', 'lemah', 'kelemahan'],
    answer: {
      en: "I'm still growing in cloud technologies (AWS/GCP) and Docker — currently learning and improving these skills.",
      id: "Saya masih berkembang dalam teknologi cloud (AWS/GCP) dan Docker — saat ini sedang belajar dan meningkatkan skill tersebut."
    }
  },

  // ==========================================
  // HOBI
  // ==========================================
  {
    id: 'hobby',
    keywords: ['hobi', 'hobby', 'suka', 'interest', 'minat', 'fun', 'free time', 'waktu luang'],
    answer: {
      en: "Outside coding, I enjoy learning new web technologies, exploring UI/UX design trends, and working on personal projects. I also love cats! 🐱 That's why my portfolio has a cat mascot.",
      id: "Di luar coding, saya suka mempelajari teknologi web baru, mengeksplorasi tren desain UI/UX, dan mengerjakan proyek pribadi. Saya juga suka kucing! 🐱 Itulah kenapa portfolio saya punya maskot kucing."
    }
  },

  // ==========================================
  // CARA KERJA
  // ==========================================
  {
    id: 'workflow',
    keywords: ['cara kerja', 'workflow', 'process', 'proses', 'metodologi', 'how do you work', 'pendekatan'],
    answer: {
      en: "My development workflow:\n1. 💡 Understand requirements\n2. 📋 Plan architecture\n3. 🎨 Design UI/UX\n4. 💻 Develop\n5. 🧪 Test & troubleshoot\n6. 🚀 Deploy & improve\n\nI follow structured problem-solving and collaborate well in teams.",
      id: "Alur kerja pengembangan saya:\n1. 💡 Memahami kebutuhan\n2. 📋 Merencanakan arsitektur\n3. 🎨 Mendesain UI/UX\n4. 💻 Mengembangkan\n5. 🧪 Menguji & troubleshooting\n6. 🚀 Deploy & perbaiki\n\nSaya mengikuti problem-solving terstruktur dan berkolaborasi baik dalam tim."
    }
  },

  // ==========================================
  // GREETING
  // ==========================================
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'hai', 'halo', 'pagi', 'siang', 'sore', 'malam', 'assalamualaikum', 'salam'],
    answer: {
      en: "Hi there! 👋 I'm Ainul's virtual assistant. Ask me anything about her skills, projects, experience, or how to contact her!",
      id: "Hai! 👋 Saya asisten virtual Ainul. Tanyakan apa saja tentang keahlian, proyek, pengalaman, atau cara menghubunginya!"
    }
  },

  // ==========================================
  // TERIMA KASIH
  // ==========================================
  {
    id: 'thanks',
    keywords: ['thank', 'thanks', 'terima kasih', 'makasih', 'thx', 'tq'],
    answer: {
      en: "You're welcome! 😊 Feel free to ask anything else about Ainul. Don't forget to check out her projects and download her CV!",
      id: "Sama-sama! 😊 Jangan ragu untuk bertanya lagi tentang Ainul. Jangan lupa lihat proyek-proyeknya dan unduh CV-nya!"
    }
  }
]

// ============================================================
// SMART MATCHING FUNCTION
// ============================================================

// Synonym mapping untuk menangkap makna yang sama
const synonyms = {
  'umur': ['usia', 'age', 'berapa tahun', 'old'],
  'nama': ['name', 'panggil', 'siapa'],
  'lokasi': ['dimana', 'where', 'tinggal', 'alamat', 'domisili', 'kota'],
  'skill': ['keahlian', 'kemampuan', 'bisa apa', 'tech', 'teknologi'],
  'pengalaman': ['experience', 'kerja', 'magang', 'intern', 'karir'],
  'pendidikan': ['education', 'kuliah', 'universitas', 'kampus', 'sarjana'],
  'project': ['proyek', 'karya', 'portofolio', 'buat apa'],
  'kontak': ['contact', 'hubungi', 'email', 'wa', 'telepon'],
  'sertifikat': ['certificate', 'sertifikasi', 'kursus', 'pelatihan'],
  'penghargaan': ['achievement', 'prestasi', 'award', 'piagam'],
  'ipk': ['gpa', 'nilai', 'grade', 'prestasi akademik'],
  'open to work': ['hire', 'recruit', 'lowongan', 'tersedia', 'cari kerja']
}

// Fungsi untuk normalisasi pesan
function normalizeMessage(message) {
  return message
    .toLowerCase()
    .replace(/[?!.,;:'"]/g, '') // Hapus tanda baca
    .replace(/\s+/g, ' ') // Normalisasi spasi
    .trim()
}

// Fungsi untuk mengecek apakah pesan mengandung keyword
function matchesKeywords(message, keywords) {
  const normalized = normalizeMessage(message)
  return keywords.some(keyword => {
    const normalizedKeyword = normalizeMessage(keyword)
    return normalized.includes(normalizedKeyword)
  })
}

// Fungsi untuk mencari sinonim
function expandWithSynonyms(message) {
  const normalized = normalizeMessage(message)
  const expanded = [normalized]
  
  for (const [mainWord, syns] of Object.entries(synonyms)) {
    for (const syn of syns) {
      if (normalized.includes(syn)) {
        expanded.push(mainWord)
      }
    }
  }
  
  return expanded
}

// Fungsi utama untuk mencari jawaban
export function findAnswer(userMessage, language = 'en') {
  if (!userMessage || !userMessage.trim()) {
    return language === 'en' 
      ? "Please type a question! 😊" 
      : "Silakan ketik pertanyaan! 😊"
  }

  const normalized = normalizeMessage(userMessage)
  const expanded = expandWithSynonyms(normalized)

  // Cari di knowledge base - PRIORITASKAN YANG PALING SPESIFIK
  let bestMatch = null
  let bestScore = 0

  for (const item of knowledgeBase) {
    // Hitung berapa keyword yang cocok
    let score = 0
    for (const keyword of item.keywords) {
      const normalizedKeyword = normalizeMessage(keyword)
      
      // Cek di pesan asli
      if (normalized.includes(normalizedKeyword)) {
        score += normalizedKeyword.split(' ').length * 2 // Keyword panjang = lebih spesifik
      }
      
      // Cek di expanded
      for (const exp of expanded) {
        if (exp.includes(normalizedKeyword) && exp !== normalized) {
          score += 1
        }
      }
    }

    if (score > bestScore) {
      bestScore = score
      bestMatch = item
    }
  }

  // Jika ada match dengan skor bagus
  if (bestMatch && bestScore > 0) {
    return bestMatch.answer[language]
  }

  // Default response
  return language === 'en'
    ? "Hmm, I'm not sure about that. 🤔 Try asking about:\n• Skills & tech stack\n• Projects (PADI, Medipulse, Jokkaki)\n• Experience & internship\n• Education & GPA\n• Certificates & achievements\n• How to contact Ainul\n• Whether she's open to work"
    : "Hmm, saya tidak yakin tentang itu. 🤔 Coba tanyakan tentang:\n• Keahlian & tech stack\n• Proyek (PADI, Medipulse, Jokkaki)\n• Pengalaman & magang\n• Pendidikan & IPK\n• Sertifikat & penghargaan\n• Cara menghubungi Ainul\n• Apakah dia open to work"
}

// Suggested questions
export const suggestedQuestions = {
  en: [
    "What are your skills?",
    "Tell me about PADI project",
    "What's your experience?",
    "How can I contact you?",
    "Are you open to work?",
    "What's your GPA?"
  ],
  id: [
    "Apa keahlian kamu?",
    "Ceritakan proyek PADI",
    "Apa pengalamanmu?",
    "Bagaimana cara menghubungimu?",
    "Apakah kamu open to work?",
    "Berapa IPK kamu?"
  ]
}