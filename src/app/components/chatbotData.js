// ============================================================
// PERSONAL DATA
// ============================================================

export const personalData = {
  name: "Ainul Hidayah, S.Kom",
  gender: "Perempuan (Female)",
  birthDate: "15 Oktober 2000",

  age: function () {
    const birth = new Date(2000, 9, 15);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
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
  thesis:
    "Penerapan Clean Architecture pada Website Manajemen Arsip Digital di Kantor Pertanahan Kabupaten Sidenreng Rappang",
};

// ============================================================
// KNOWLEDGE BASE
// ============================================================

export const knowledgeBase = [
  {
    id: "about",
    keywords: [
      "about", "who", "introduce", "yourself", "profile", "bio", "background",
      "tentang", "siapa", "perkenalan", "perkenalkan", "diri", "profil", "biodata",
    ],
    answer: {
      en: "Hi! I'm Ainul Hidayah, S.Kom, a fresh graduate in Informatics from Universitas Ichsan Sidenreng Rappang with a GPA of 3.98/4.00. I'm a Junior Full-Stack Web Developer based in Makassar, Sulawesi Selatan. I love building clean, well-structured web apps and I'm passionate about UI/UX too. Feel free to explore my projects!",
      id: "Hai! Saya Ainul Hidayah, S.Kom, fresh graduate Informatika dari Universitas Ichsan Sidenreng Rappang dengan IPK 3.98/4.00. Saya Junior Full-Stack Web Developer yang berdomisili di Makassar, Sulawesi Selatan. Saya senang membangun aplikasi web yang rapi dan terstruktur, serta tertarik juga di bidang UI/UX. Silakan jelajahi proyek-proyek saya!",
    },
  },
  {
    id: "name",
    keywords: ["name", "called", "nama", "panggil", "siapa nama"],
    answer: {
      en: "My full name with title is Ainul Hidayah, S.Kom. You can just call me Ainul!",
      id: "Nama lengkap saya beserta gelar adalah Ainul Hidayah, S.Kom. Panggil saja Ainul!",
    },
  },
  {
    id: "gender",
    keywords: ["gender", "female", "male", "woman", "man", "jenis kelamin", "perempuan", "laki"],
    answer: {
      en: "I'm a female (Perempuan).",
      id: "Saya perempuan.",
    },
  },
  {
    id: "age",
    keywords: ["age", "old", "years", "birthday", "born", "umur", "usia", "lahir", "tanggal lahir"],
    get answer() {
      return {
        en: `I was born on October 15, 2000, so I'm currently ${personalData.age()} years old.`,
        id: `Saya lahir pada 15 Oktober 2000, jadi umur saya sekarang ${personalData.age()} tahun.`,
      };
    },
  },
  {
    id: "location",
    keywords: [
      "location", "where", "live", "city", "address", "domicile", "based",
      "lokasi", "dimana", "tinggal", "kota", "alamat", "domisili",
    ],
    answer: {
      en: "I live at Perum Hasri Residence 2 Blok E/14, Makassar, Sulawesi Selatan, Indonesia.",
      id: "Saya berdomisili di Perum Hasri Residence 2 Blok E/14, Makassar, Sulawesi Selatan, Indonesia.",
    },
  },
  {
    id: "relocation",
    keywords: ["relocate", "relocation", "move", "out of town", "relokasi", "pindah", "luar kota"],
    answer: {
      en: "Yes, I'm willing to relocate for the right opportunity. I'm open to working in other cities or provinces.",
      id: "Ya, saya bersedia relokasi untuk kesempatan yang tepat. Saya terbuka untuk bekerja di kota atau provinsi lain.",
    },
  },
  {
    id: "workmode",
    keywords: [
      "remote", "hybrid", "wfo", "onsite", "work from office", "work mode", "arrangement",
      "kerja", "mode kerja", "kantor", "dari rumah",
    ],
    answer: {
      en: "I'm flexible with work arrangements: Remote, Hybrid, or WFO (Work From Office). I can adapt to whatever the team needs.",
      id: "Saya fleksibel dengan pengaturan kerja: Remote, Hybrid, atau WFO (Work From Office). Saya bisa menyesuaikan dengan kebutuhan tim.",
    },
  },
  {
    id: "education",
    keywords: [
      "education", "study", "university", "college", "campus", "school", "degree", "major",
      "pendidikan", "kuliah", "universitas", "kampus", "sekolah", "gelar", "jurusan",
    ],
    answer: {
      en: "I studied Informatics and earned my degree (S.Kom) from Universitas Ichsan Sidenreng Rappang (2024-2026). Before that, I studied at Institut Teknologi Amanna Gappa (2022-2024) before transferring.",
      id: "Saya kuliah di Jurusan Informatika dan meraih gelar S.Kom dari Universitas Ichsan Sidenreng Rappang (2024-2026). Sebelumnya saya kuliah di Institut Teknologi Amanna Gappa (2022-2024) sebelum pindah.",
    },
  },
  {
    id: "gpa",
    keywords: ["gpa", "ipk", "grade", "score", "academic", "nilai", "indeks prestasi"],
    answer: {
      en: "My GPA is 3.98/4.00. I'm really proud of it because it reflects my consistency and hard work.",
      id: "IPK saya 3.98/4.00. Saya cukup bangga karena itu mencerminkan konsistensi dan kerja keras saya.",
    },
  },
  {
    id: "graduation",
    keywords: ["graduate", "graduation", "lulus", "kelulusan", "wisuda", "tahun lulus"],
    answer: {
      en: "I graduated in 2026 from Universitas Ichsan Sidenreng Rappang. I'm a fresh graduate ready to jump into the industry!",
      id: "Saya lulus pada tahun 2026 dari Universitas Ichsan Sidenreng Rappang. Saya fresh graduate yang siap terjun ke industri!",
    },
  },
  {
    id: "thesis",
    keywords: [
      "thesis", "skripsi", "final project", "research", "clean architecture", "archive",
      "tugas akhir", "penelitian", "arsip",
    ],
    answer: {
      en: "My thesis is titled 'Penerapan Clean Architecture pada Website Manajemen Arsip Digital di Kantor Pertanahan Kabupaten Sidenreng Rappang' (Applying Clean Architecture to a Digital Archive Management Website at the Sidenreng Rappang Land Office). It won the Best System Design award!",
      id: "Judul skripsi saya 'Penerapan Clean Architecture pada Website Manajemen Arsip Digital di Kantor Pertanahan Kabupaten Sidenreng Rappang'. Skripsi ini meraih penghargaan Rancang Bangun Sistem Terbaik!",
    },
  },
  {
    id: "skills",
    keywords: [
      "skill", "skills", "tech", "technology", "stack", "programming", "coding", "language",
      "keahlian", "kemampuan", "teknologi", "pemrograman", "bahasa pemrograman",
    ],
    answer: {
      en: "My skills include:\n• Programming: Java, PHP, JavaScript, HTML, CSS\n• Web Dev: Spring Boot, REST API\n• Database: MySQL, MariaDB\n• UI/UX: Figma\n• Tools: Git, GitHub, VS Code\n• Also: IT Support & basic Data handling",
      id: "Keahlian saya meliputi:\n• Pemrograman: Java, PHP, JavaScript, HTML, CSS\n• Web Dev: Spring Boot, REST API\n• Database: MySQL, MariaDB\n• UI/UX: Figma\n• Tools: Git, GitHub, VS Code\n• Lainnya: IT Support & pengolahan Data dasar",
    },
  },
  {
    id: "experience",
    keywords: [
      "experience", "work", "job", "employment", "career", "internship experience",
      "pengalaman", "kerja", "pekerjaan", "karier", "riwayat kerja",
    ],
    answer: {
      en: "Work experience:\n• BRI Life (2019-2020)\n• Mimi Collection (2021-2023)\n• Freelance Typing (2014-present)\n\nInternships:\n• MSIB Rakamin Academy (Sep-Dec 2024)\n• Bank Muamalat (Jan-Feb 2025)\n• Kantor Pertanahan Kab. Sidenreng Rappang (Jan-Apr 2025)",
      id: "Pengalaman kerja:\n• BRI Life (2019-2020)\n• Mimi Collection (2021-2023)\n• Freelance Pengetikan (2014-sekarang)\n\nMagang:\n• MSIB Rakamin Academy (Sep-Des 2024)\n• Bank Muamalat (Jan-Feb 2025)\n• Kantor Pertanahan Kab. Sidenreng Rappang (Jan-Apr 2025)",
    },
  },
  {
    id: "internship",
    keywords: [
      "internship", "intern", "magang", "msib", "rakamin", "muamalat", "pertanahan",
    ],
    answer: {
      en: "I did 3 internships:\n1. MSIB at Rakamin Academy (Sep-Dec 2024) — IT Full Stack Developer program; final project was Medipulse (UI/UX).\n2. Bank Muamalat (Jan-Feb 2025) — Business Intelligence Analyst, learned data analysis & reporting.\n3. Kantor Pertanahan Kab. Sidenreng Rappang (Jan-Apr 2025) — built the PADI digital archive system as Full-Stack Developer.",
      id: "Saya menjalani 3 magang:\n1. MSIB di Rakamin Academy (Sep-Des 2024) — program IT Full Stack Developer; final project Medipulse (UI/UX).\n2. Bank Muamalat (Jan-Feb 2025) — Business Intelligence Analyst, belajar analisis data & pelaporan.\n3. Kantor Pertanahan Kab. Sidenreng Rappang (Jan-Apr 2025) — membangun sistem arsip digital PADI sebagai Full-Stack Developer.",
    },
  },
  {
    id: "padi",
    keywords: [
      "padi", "archive", "archives", "pertanahan", "land office", "voice search", "text to speech",
      "arsip", "pencarian", "dokumen", "pertanahan", "suara",
    ],
    answer: {
      en: "PADI (Pencarian Arsip dan Dokumen Informasi) is a digital archive management system I built at Kantor Pertanahan Kabupaten Sidenreng Rappang.\nRole: Full-Stack Developer.\nTech: HTML/CSS/JS, Java 17, Spring Boot, Thymeleaf, MariaDB.\nFeatures: Voice Search (RNN), Text-to-Speech (RNN), Location Visualization (CNN), role-based authentication. It's not publicly hosted for land-data privacy.\nMy contribution: full-stack development, Clean Architecture implementation, database design, and testing.",
      id: "PADI (Pencarian Arsip dan Dokumen Informasi) adalah sistem manajemen arsip digital yang saya bangun di Kantor Pertanahan Kabupaten Sidenreng Rappang.\nRole: Full-Stack Developer.\nTech: HTML/CSS/JS, Java 17, Spring Boot, Thymeleaf, MariaDB.\nFitur: Voice Search (RNN), Text-to-Speech (RNN), Visualisasi Lokasi (CNN), autentikasi berbasis role. Tidak di-hosting publik demi privasi data pertanahan.\nKontribusi saya: full-stack development, penerapan Clean Architecture, perancangan database, dan testing.",
    },
  },
  {
    id: "medipulse",
    keywords: [
      "medipulse", "medicine", "health", "reminder", "bmi", "google calendar", "pwa",
      "obat", "kesehatan", "pengingat", "kalender",
    ],
    answer: {
      en: "Medipulse is my final project from the MSIB Rakamin program (2024).\nRole: UI/UX Designer.\nTech: Figma, Canva, PWA, Google Calendar API.\nFeatures: medicine reminder, Google Calendar integration, and BMI calculator. I designed the UX flow and visual interface.",
      id: "Medipulse adalah final project saya dari program MSIB Rakamin (2024).\nRole: UI/UX Designer.\nTech: Figma, Canva, PWA, Google Calendar API.\nFitur: pengingat obat, integrasi Google Calendar, dan kalkulator BMI. Saya merancang alur UX dan tampilan visualnya.",
    },
  },
  {
    id: "jokkaki",
    keywords: [
      "jokkaki", "polling", "vote", "tourism", "wisata", "sulsel", "comment", "upvote", "badge",
    ],
    answer: {
      en: "Jokkaki is a tourism polling web app for South Sulawesi.\nRole: Full-Stack Developer.\nTech: PHP Native, HTML, CSS, JS, MySQL.\nFeatures: polling, comments, comment like/upvote, and user badges.",
      id: "Jokkaki adalah aplikasi web polling wisata Sulawesi Selatan.\nRole: Full-Stack Developer.\nTech: PHP Native, HTML, CSS, JS, MySQL.\nFitur: polling, komentar, like/upvote komentar, dan badge user.",
    },
  },
  {
    id: "portfolio",
    keywords: [
      "portfolio", "this website", "site", "website", "nextjs", "next.js", "framer", "cat",
      "portofolio", "situs", "web ini", "kucing",
    ],
    answer: {
      en: "This portfolio website is built with Next.js 14, Tailwind CSS, and Framer Motion, featuring a Neo-brutalism pastel design. It's bilingual (EN/ID), includes this AI ChatBot, and has a fun cat parade as a mascot!",
      id: "Website portofolio ini dibangun dengan Next.js 14, Tailwind CSS, dan Framer Motion, dengan desain Neo-brutalism pastel. Bilingual (EN/ID), dilengkapi ChatBot AI ini, dan ada parade kucing sebagai maskot!",
    },
  },
  {
    id: "projects",
    keywords: ["project", "projects", "work sample", "proyek", "portofolio proyek"],
    answer: {
      en: "I have 4 main projects:\n1. PADI — digital archive system (Full-Stack, Spring Boot).\n2. Medipulse — health reminder app (UI/UX, Figma).\n3. Jokkaki — tourism polling app (Full-Stack, PHP Native).\n4. This Portfolio — Next.js + Tailwind + Framer Motion + AI ChatBot.",
      id: "Saya punya 4 proyek utama:\n1. PADI — sistem arsip digital (Full-Stack, Spring Boot).\n2. Medipulse — aplikasi pengingat kesehatan (UI/UX, Figma).\n3. Jokkaki — aplikasi polling wisata (Full-Stack, PHP Native).\n4. Portofolio ini — Next.js + Tailwind + Framer Motion + AI ChatBot.",
    },
  },
  {
    id: "certificates",
    keywords: ["certificate", "certification", "certified", "course", "sertifikat", "sertifikasi", "kursus"],
    answer: {
      en: "I have 4 certificates:\n1. IT Full Stack Developer: Mastering Web Development Blending With Data Science — PT Rakamin Kolektif Madani (2024)\n2. Web Development Pemula – Special Challenge — Skillvul (2023)\n3. Cloud Computing PBK — BBPVP Makassar (2024)\n4. Bank Muamalat Business Intelligence Analyst — Bank Muamalat (2025)",
      id: "Saya punya 4 sertifikat:\n1. IT Full Stack Developer: Mastering Web Development Blending With Data Science — PT Rakamin Kolektif Madani (2024)\n2. Web Development Pemula – Special Challenge — Skillvul (2023)\n3. Cloud Computing PBK — BBPVP Makassar (2024)\n4. Bank Muamalat Business Intelligence Analyst — Bank Muamalat (2025)",
    },
  },
  {
    id: "achievements",
    keywords: ["award", "achievement", "honor", "prize", "penghargaan", "prestasi", "juara"],
    answer: {
      en: "I have 2 awards:\n1. Best System Design (Rancang Bangun Sistem Terbaik) — Universitas Ichsan Sidenreng Rappang (July 2026) for my Clean Architecture thesis.\n2. Certificate of Appreciation for the PADI Application — Kantor Pertanahan Kab. Sidenreng Rappang (April 2025).",
      id: "Saya punya 2 penghargaan:\n1. Rancang Bangun Sistem Terbaik — Universitas Ichsan Sidenreng Rappang (Juli 2026) untuk skripsi Clean Architecture saya.\n2. Piagam Penghargaan Aplikasi PADI — Kantor Pertanahan Kab. Sidenreng Rappang (April 2025).",
    },
  },
  {
    id: "contact",
    keywords: ["contact", "reach", "email", "phone", "whatsapp", "wa", "github", "linkedin", "hubungi", "kontak", "telepon"],
    answer: {
      en: "You can reach me through:\n• Email: ainulhidayah16@gmail.com\n• WhatsApp: +62 852-4100-3966\n• GitHub: github.com/AinulH15\n• LinkedIn: linkedin.com/in/ainul-hidayah-519507149\n• Portfolio: https://ainul-porto.vercel.app/",
      id: "Kamu bisa menghubungi saya melalui:\n• Email: ainulhidayah16@gmail.com\n• WhatsApp: +62 852-4100-3966\n• GitHub: github.com/AinulH15\n• LinkedIn: linkedin.com/in/ainul-hidayah-519507149\n• Portofolio: https://ainul-porto.vercel.app/",
    },
  },
  {
    id: "opentowork",
    keywords: ["open to work", "hiring", "available", "job", "vacancy", "freelance", "lowongan", "tersedia", "rekrut"],
    answer: {
      en: "Yes, I'm open to work! I'm available for full-time, remote, hybrid, WFO, freelance, and I'm willing to relocate.",
      id: "Ya, saya open to work! Saya tersedia untuk full-time, remote, hybrid, WFO, freelance, dan bersedia relokasi.",
    },
  },
  {
    id: "cv",
    keywords: ["cv", "resume", "curriculum vitae", "download", "unduh", "daftar riwayat hidup"],
    answer: {
      en: "You can download my CV from the hero section or the contact section of this website. There are two versions available: English and Indonesian.",
      id: "Kamu bisa mengunduh CV saya dari section hero atau section contact di website ini. Tersedia dua versi: Inggris dan Indonesia.",
    },
  },
  {
    id: "strengths",
    keywords: ["strength", "strong", "good at", "advantage", "kelebihan", "kekuatan", "unggulan"],
    answer: {
      en: "My strengths: GPA 3.98/4.00, systematic thinker, detail-oriented, good teamwork, fast learner, strong problem-solving, and I won the Best System Design award.",
      id: "Kelebihan saya: IPK 3.98/4.00, berpikir sistematis, detail-oriented, mampu bekerja dalam tim, cepat belajar, problem-solving kuat, dan meraih penghargaan Rancang Bangun Sistem Terbaik.",
    },
  },
  {
    id: "weaknesses",
    keywords: ["weakness", "weak", "improve", "learning", "kekurangan", "kelemahan", "belajar"],
    answer: {
      en: "I'm still learning cloud computing (AWS/GCP) and Docker. I'm actively improving these skills through courses and side projects.",
      id: "Saya masih belajar cloud computing (AWS/GCP) dan Docker. Saya aktif meningkatkan kemampuan ini lewat kursus dan side project.",
    },
  },
  {
    id: "hobby",
    keywords: ["hobby", "hobbies", "interest", "fun", "free time", "cat", "hobi", "kesukaan", "waktu luang", "kucing"],
    answer: {
      en: "I enjoy learning about web technologies, exploring UI/UX trends, and building side projects. And yes—I love cats! That's why this site has a cat mascot parade.",
      id: "Saya suka belajar teknologi web, mengeksplorasi tren UI/UX, dan mengerjakan side project. Dan ya—saya suka kucing! Makanya website ini punya parade maskot kucing.",
    },
  },
  {
    id: "greeting",
    keywords: [
      "hi", "hello", "hey", "hai", "halo", "pagi", "siang", "sore", "malam",
      "assalamualaikum", "greeting", "sapaan",
    ],
    answer: {
      en: "Hello! 👋 I'm Ainul's AI assistant. Ask me anything about her skills, projects, experience, or how to contact her!",
      id: "Halo! 👋 Saya asisten AI Ainul. Tanyakan apa saja tentang keahlian, proyek, pengalaman, atau cara menghubungi beliau!",
    },
  },
  {
    id: "thanks",
    keywords: ["thanks", "thank you", "thx", "makasih", "terima kasih", "thanks ya"],
    answer: {
      en: "You're welcome! 😊 Feel free to ask anything else about Ainul.",
      id: "Sama-sama! 😊 Silakan tanya lagi apa saja tentang Ainul.",
    },
  },
];

// ============================================================
// SUGGESTED QUESTIONS
// ============================================================

export const suggestedQuestions = {
  en: [
    "What are your skills?",
    "Tell me about PADI project",
    "What's your experience?",
    "How can I contact you?",
    "Are you open to work?",
    "What's your GPA?",
  ],
  id: [
    "Apa keahlian kamu?",
    "Ceritakan proyek PADI",
    "Apa pengalamanmu?",
    "Bagaimana cara menghubungimu?",
    "Apakah kamu open to work?",
    "Berapa IPK kamu?",
  ],
};

// ============================================================
// SYNONYMS
// ============================================================

const synonyms = {
  skill: ["skills", "kemampuan", "keahlian", "tech", "stack", "programming"],
  project: ["projects", "proyek", "portofolio", "karya"],
  work: ["experience", "job", "kerja", "pengalaman", "karier"],
  contact: ["reach", "hubungi", "kontak", "email", "wa", "whatsapp"],
  education: ["study", "kuliah", "pendidikan", "university", "kampus"],
  padi: ["arsip", "archive", "pertanahan", "voice", "suara"],
  medipulse: ["health", "kesehatan", "obat", "reminder", "bmi"],
  jokkaki: ["polling", "wisata", "tourism", "vote"],
  age: ["umur", "usia", "old", "birthday", "lahir"],
  location: ["lokasi", "alamat", "dimana", "tinggal", "city", "kota"],
};

// ============================================================
// FIND ANSWER (FIXED PRIORITY)
// ============================================================

function normalizeMessage(message) {
  return message
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function findAnswer(userMessage, language = "en") {
  if (!userMessage || !userMessage.trim()) {
    return language === "id" ? "Silakan ketik pertanyaan!" : "Please type a question!";
  }

  const normalized = normalizeMessage(userMessage);
  const words = normalized.split(" ").filter(Boolean);

  let bestMatch = null;
  let bestScore = 0;

  // Kata kunci spesifik yang harus diprioritaskan
  const specificKeywords = ["padi", "medipulse", "jokkaki", "portfolio"];

  for (const item of knowledgeBase) {
    let score = 0;

    // Skor dasar: keyword match
    for (const keyword of item.keywords) {
      const kw = keyword.toLowerCase();
      if (normalized.includes(kw)) {
        // Prioritas SUPER TINGGI untuk proyek spesifik
        if (specificKeywords.includes(kw)) {
          score += 100; 
        } else {
          score += kw.split(" ").length * 2 + kw.length;
        }
      }
    }

    // Skor ekspansi: sinonim (bobot sangat kecil agar tidak mengalahkan keyword utama)
    for (const word of words) {
      if (synonyms[word]) {
        for (const syn of synonyms[word]) {
          if (normalized.includes(syn) || word === syn) {
            score += 0.5;
          }
        }
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && bestScore > 0) {
    return bestMatch.answer[language] || bestMatch.answer.en;
  }

  return language === "id"
    ? "Maaf, saya belum menemukan jawaban untuk pertanyaan itu. 🙏\nKamu bisa tanyakan topik berikut:\n• Tentang Ainul (about)\n• Keahlian (skills)\n• Pengalaman kerja (experience)\n• Proyek: PADI, Medipulse, Jokkaki, Portfolio\n• Pendidikan & IPK\n• Sertifikat & penghargaan\n• Cara menghubungi (contact)\n• Open to work"
    : "Sorry, I couldn't find an answer for that. 🙏\nYou can ask about these topics:\n• About Ainul\n• Skills\n• Work experience\n• Projects: PADI, Medipulse, Jokkaki, Portfolio\n• Education & GPA\n• Certificates & achievements\n• Contact\n• Open to work";
}