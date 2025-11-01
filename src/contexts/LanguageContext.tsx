import { createContext, useContext, useState } from "react";

type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.team": "Team",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",

    // Hero
    "hero.badge": "Transforming Ideas Into Digital Reality",
    "hero.title1": "Build Your",
    "hero.title2": "Digital Future",
    "hero.title3": "With Expert Solutions",
    "hero.description": "We craft stunning websites and powerful mobile applications that drive growth and innovation for businesses worldwide.",
    "hero.viewWork": "View Our Work",
    "hero.startProject": "Start a Project",
    "hero.stats.projects": "Projects Completed",
    "hero.stats.satisfaction": "Client Satisfaction",
    "hero.stats.team": "Team Members",

    // Services
    "services.badge": "Our Services",
    "services.title": "What We",
    "services.titleHighlight": "Deliver",
    "services.description": "Comprehensive digital solutions tailored to your business needs",
    "services.web.title": "Web Development",
    "services.web.desc": "Custom websites built with modern technologies like React, Next.js, and TypeScript for optimal performance and SEO.",
    "services.mobile.title": "Mobile App Development",
    "services.mobile.desc": "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
    "services.design.title": "UI/UX Design",
    "services.design.desc": "Beautiful, intuitive interfaces designed with user-centered approach to maximize engagement and conversions.",
    "services.software.title": "Custom Software",
    "services.software.desc": "Tailored software solutions that solve complex business challenges and streamline your operations.",
    "services.backend.title": "Backend Development",
    "services.backend.desc": "Robust, scalable backend systems with secure APIs and efficient database architectures.",
    "services.cloud.title": "Cloud Solutions",
    "services.cloud.desc": "Cloud infrastructure setup, migration, and optimization for scalability and reliability.",

    // Portfolio
    "portfolio.badge": "Our Portfolio",
    "portfolio.title": "Featured",
    "portfolio.titleHighlight": "Projects",
    "portfolio.description": "Explore our latest work and success stories",
    "portfolio.filter.all": "All Projects",
    "portfolio.filter.web": "Web Apps",
    "portfolio.filter.mobile": "Mobile Apps",
    "portfolio.viewLive": "View Live",
    "portfolio.details": "Details",

    // Tech Stack
    "tech.badge": "Technology Stack",
    "tech.title": "Powered By",
    "tech.titleHighlight": "Modern Tech",
    "tech.description": "We use cutting-edge technologies to build scalable and performant applications",
    "tech.stats.mastered": "Technologies Mastered",
    "tech.stats.experience": "Years of Experience",
    "tech.stats.certifications": "Certifications",
    "tech.stats.success": "Success Rate",

    // Team
    "team.badge": "Our Team",
    "team.title": "Meet The",
    "team.titleHighlight": "Experts",
    "team.description": "Talented individuals passionate about creating exceptional digital experiences",

    // Testimonials
    "testimonials.badge": "Testimonials",
    "testimonials.title": "What Our",
    "testimonials.titleHighlight": "Clients Say",
    "testimonials.description": "Don't just take our word for it - hear from our satisfied clients",
    "testimonials.stats.satisfaction": "Client Satisfaction",
    "testimonials.stats.delivered": "Projects Delivered",
    "testimonials.stats.rating": "Average Rating",

    // Contact
    "contact.badge": "Get In Touch",
    "contact.title": "Let's Build",
    "contact.titleHighlight": "Together",
    "contact.description": "Have a project in mind? Let's discuss how we can help bring your vision to life",
    "contact.info.title": "Contact Information",
    "contact.info.description": "Reach out to us through any of these channels, or fill out the form and we'll get back to you within 24 hours.",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.office": "Office",
    "contact.consultation.title": "Free Consultation",
    "contact.consultation.desc": "Schedule a free 30-minute consultation to discuss your project requirements and get expert advice.",
    "contact.form.name": "Your Name",
    "contact.form.email": "Email Address",
    "contact.form.company": "Company Name",
    "contact.form.message": "Project Details",
    "contact.form.placeholder.name": "John Doe",
    "contact.form.placeholder.email": "john@example.com",
    "contact.form.placeholder.company": "Your Company",
    "contact.form.placeholder.message": "Tell us about your project...",
    "contact.form.send": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.privacy": "We respect your privacy. Your information will never be shared.",
    "contact.form.success": "Message sent successfully! We'll get back to you soon.",

    // Footer
    "footer.description": "Transforming ideas into exceptional digital experiences through innovative web and mobile solutions.",
    "footer.services": "Services",
    "footer.company": "Company",
    "footer.getInTouch": "Get In Touch",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookie": "Cookie Policy",
  },
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.services": "Layanan",
    "nav.portfolio": "Portfolio",
    "nav.team": "Tim",
    "nav.testimonials": "Testimoni",
    "nav.contact": "Kontak",
    "nav.getStarted": "Mulai Sekarang",

    // Hero
    "hero.badge": "Mengubah Ide Menjadi Realitas Digital",
    "hero.title1": "Bangun",
    "hero.title2": "Masa Depan Digital",
    "hero.title3": "Anda Bersama Solusi Ahli",
    "hero.description": "Kami menciptakan website menakjubkan dan aplikasi mobile yang powerful untuk mendorong pertumbuhan dan inovasi bisnis di seluruh dunia.",
    "hero.viewWork": "Lihat Karya Kami",
    "hero.startProject": "Mulai Proyek",
    "hero.stats.projects": "Proyek Selesai",
    "hero.stats.satisfaction": "Kepuasan Klien",
    "hero.stats.team": "Anggota Tim",

    // Services
    "services.badge": "Layanan Kami",
    "services.title": "Apa Yang Kami",
    "services.titleHighlight": "Tawarkan",
    "services.description": "Solusi digital komprehensif yang disesuaikan dengan kebutuhan bisnis Anda",
    "services.web.title": "Pengembangan Web",
    "services.web.desc": "Website custom yang dibangun dengan teknologi modern seperti React, Next.js, dan TypeScript untuk performa optimal dan SEO.",
    "services.mobile.title": "Pengembangan Aplikasi Mobile",
    "services.mobile.desc": "Aplikasi mobile native dan cross-platform untuk iOS dan Android yang memberikan pengalaman pengguna yang luar biasa.",
    "services.design.title": "Desain UI/UX",
    "services.design.desc": "Interface yang indah dan intuitif yang dirancang dengan pendekatan user-centered untuk memaksimalkan engagement dan konversi.",
    "services.software.title": "Software Custom",
    "services.software.desc": "Solusi software yang disesuaikan untuk menyelesaikan tantangan bisnis kompleks dan mengoptimalkan operasi Anda.",
    "services.backend.title": "Pengembangan Backend",
    "services.backend.desc": "Sistem backend yang robust dan scalable dengan API yang aman dan arsitektur database yang efisien.",
    "services.cloud.title": "Solusi Cloud",
    "services.cloud.desc": "Setup infrastruktur cloud, migrasi, dan optimasi untuk skalabilitas dan reliabilitas.",

    // Portfolio
    "portfolio.badge": "Portfolio Kami",
    "portfolio.title": "Proyek",
    "portfolio.titleHighlight": "Unggulan",
    "portfolio.description": "Jelajahi karya terbaru dan kisah sukses kami",
    "portfolio.filter.all": "Semua Proyek",
    "portfolio.filter.web": "Aplikasi Web",
    "portfolio.filter.mobile": "Aplikasi Mobile",
    "portfolio.viewLive": "Lihat Live",
    "portfolio.details": "Detail",

    // Tech Stack
    "tech.badge": "Stack Teknologi",
    "tech.title": "Didukung Oleh",
    "tech.titleHighlight": "Teknologi Modern",
    "tech.description": "Kami menggunakan teknologi terdepan untuk membangun aplikasi yang scalable dan performan",
    "tech.stats.mastered": "Teknologi Dikuasai",
    "tech.stats.experience": "Tahun Pengalaman",
    "tech.stats.certifications": "Sertifikasi",
    "tech.stats.success": "Tingkat Sukses",

    // Team
    "team.badge": "Tim Kami",
    "team.title": "Temui Para",
    "team.titleHighlight": "Ahli",
    "team.description": "Individu berbakat yang passionate dalam menciptakan pengalaman digital yang luar biasa",

    // Testimonials
    "testimonials.badge": "Testimoni",
    "testimonials.title": "Apa Kata",
    "testimonials.titleHighlight": "Klien Kami",
    "testimonials.description": "Jangan hanya percaya kata kami - dengarkan dari klien kami yang puas",
    "testimonials.stats.satisfaction": "Kepuasan Klien",
    "testimonials.stats.delivered": "Proyek Terkirim",
    "testimonials.stats.rating": "Rating Rata-rata",

    // Contact
    "contact.badge": "Hubungi Kami",
    "contact.title": "Mari Bangun",
    "contact.titleHighlight": "Bersama",
    "contact.description": "Punya proyek dalam pikiran? Mari diskusikan bagaimana kami dapat membantu mewujudkan visi Anda",
    "contact.info.title": "Informasi Kontak",
    "contact.info.description": "Hubungi kami melalui salah satu channel ini, atau isi formulir dan kami akan menghubungi Anda dalam 24 jam.",
    "contact.info.email": "Email",
    "contact.info.phone": "Telepon",
    "contact.info.office": "Kantor",
    "contact.consultation.title": "Konsultasi Gratis",
    "contact.consultation.desc": "Jadwalkan konsultasi gratis 30 menit untuk mendiskusikan kebutuhan proyek Anda dan dapatkan saran ahli.",
    "contact.form.name": "Nama Anda",
    "contact.form.email": "Alamat Email",
    "contact.form.company": "Nama Perusahaan",
    "contact.form.message": "Detail Proyek",
    "contact.form.placeholder.name": "John Doe",
    "contact.form.placeholder.email": "john@example.com",
    "contact.form.placeholder.company": "Perusahaan Anda",
    "contact.form.placeholder.message": "Ceritakan tentang proyek Anda...",
    "contact.form.send": "Kirim Pesan",
    "contact.form.sending": "Mengirim...",
    "contact.form.privacy": "Kami menghormati privasi Anda. Informasi Anda tidak akan pernah dibagikan.",
    "contact.form.success": "Pesan berhasil dikirim! Kami akan segera menghubungi Anda.",

    // Footer
    "footer.description": "Mengubah ide menjadi pengalaman digital yang luar biasa melalui solusi web dan mobile yang inovatif.",
    "footer.services": "Layanan",
    "footer.company": "Perusahaan",
    "footer.getInTouch": "Hubungi Kami",
    "footer.rights": "Hak cipta dilindungi.",
    "footer.privacy": "Kebijakan Privasi",
    "footer.terms": "Syarat Layanan",
    "footer.cookie": "Kebijakan Cookie",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language") as Language;
    return saved || "id";
  });

  const toggleLanguage = () => {
    const newLang = language === "id" ? "en" : "id";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
