import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const translations = {
  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      resume: "Resume",
      contact: "Contact"
    },

    // Home
    home: {
      greeting: "Hi, I'm Busra",
      description: "Software Engineering graduate building full-stack web applications, mobile products, AI-integrated tools, and IoT systems. Experienced with React, React Native, Django REST Framework, Flask, Firebase, and ESP32.",
      viewResume: "View Resume",
      myProjects: "My Projects"
    },

    // About
    about: {
      title: "About Me",
      intro1: "I am a",
      student: "Software Engineering graduate and Full-Stack Developer",
      intro2: " with a BSc in Software Engineering from Hasan Kalyoncu University (",
      scholarship: "100% English Program, Full Scholarship",
      intro3: ", graduated in June 2026). I build end-to-end products — from REST APIs and relational databases to mobile apps, AI-integrated tools, and IoT systems.",
      experience: "My experience spans ",
      pm: "Project Management at Sca Social",
      software: "Mobile Application Development CO-OP at Logicute",
      lead: "Campus Lead at Google DSC HKU",
      international: ", plus international professional experience",
      usa: " in the USA (Work and Travel).",
      researchTitle: "Research & Technical Interests",
      researchIntro: "My current interests connect software engineering practice with applied research directions in intelligent, connected, and user-centered systems.",
      research1: "IoT and cyber-physical systems",
      research2: "Mobile-cloud applications",
      research3: "Software engineering",
      research4: "AI-assisted software development",
      research5: "Human-centered intelligent applications",
      skills: {
        webMobile: "Frontend & Mobile",
        webMobileDesc: "React · React Native (Expo) · Component Architecture · Navigation",
        backend: "Backend & APIs",
        backendDesc: "Django REST Framework · Flask · Node.js · JWT Auth · CRUD",
        data: "Database & Cloud",
        dataDesc: "PostgreSQL · SQLite · Firebase Firestore · Data Modeling",
        iot: "IoT & Embedded",
        iotDesc: "ESP32 · Arduino · Sensor Integration · Real-time Systems",
        deploy: "Deployment & Tools",
        deployDesc: "Netlify · Render · Google Play Store · Git · Figma",
        leadership: "Leadership",
        leadershipDesc: "Google DSC · Hackathons · Team Projects"
      },
      languages: "Languages",
      native: "Native",
      turkish: "Turkish",
      english: "English",
      german: "German",
      greek: "Greek",
      certificates: "Certificates",
      cert1: "Project Management Intern — Sca Social (2025)",
      cert2: "Google DSC Campus Representative (2024)",
      cert3: "Work and Travel — USA (2023)",
      cert4: "B2 English — ST Giles, UK (2022)"
    },

    // Projects — unchanged content, titles same
    projects: {
      title: "Projects",
      subtitle: "A selection of full-stack web, mobile, and IoT projects — from REST API design and database modeling to Play Store deployment.",
      lilithia: {
        title: "📖 Lilithia – Story & Content Reader App",
        desc: `Lilithia is a mobile application for reading stories and content. Users can explore, save favorites, and read offline. It features a clean UI with interactive elements to enhance the reading experience.\n\nThe app was built with React Native (Expo) and showcases my skills in mobile development.\n\nDemo video available below.`,
        liveUrl: "https://play.google.com/store/apps/details?id=com.busrwa.lilithia"
      },
      hataDefteri: {
        title: "📝 Smurfia – Mistake Notebook (English Learning)",
        desc: `Smurfia is a practical learning tool designed for anyone learning English. Record your mistakes, review them, and close your gaps by practicing in a goal-oriented way. Smurfia offers a fast, simple, and effective method for exam preparation or daily practice.

With the Mistake Notebook feature, you can save mistakes encountered during your English learning journey, add explanations and correct answers, and filter mistakes by topic. You can delete or edit your saved mistakes at any time.

The Flashcards feature lets you create your own vocabulary list. Review the words in card format to strengthen your vocabulary memory. By repeating through flashcards, you can systematically improve your vocabulary.

The Test Creation feature generates automatic tests based on the data in your Mistake Notebook. This helps you quickly identify your weaknesses and create a study plan tailored to your strengths and weaknesses. Smurfia is an ideal support tool for exam preparation and daily English practice.

All user data is securely stored on Firebase Firestore. You can delete only your mistake records or vocabulary records without deleting your account. Use the in-app Data Deletion section for data removal.
`
      },
      smartBin: {
        title: "🗑️ Smart Bin – Smart Waste Management System",
        desc: `Smart Bin is an end-to-end IoT waste management system that combines embedded hardware, real-time cloud data, a web dashboard, and a mobile application.

The system uses an ESP32 microcontroller with ultrasonic sensors to measure bin fill level and detect hand/foot movement for touchless lid control. A servo motor opens the lid automatically, while LED indicators and a buzzer provide local status alerts.

Fill-level data is transmitted to Firebase in real time and visualized through a React web dashboard and a React Native mobile application. This allows users to remotely monitor bin status and receive a clearer view of waste collection needs.

My work included designing the system flow, integrating ESP32 sensor data with Firebase, developing the React dashboard, building the React Native mobile interface, and connecting the hardware/software components into a working prototype.

Tech Stack:
• Hardware: ESP32, ultrasonic sensors, servo motor, LEDs, buzzer
• Frontend: React
• Mobile: React Native (Expo)
• Cloud/Data: Firebase Realtime Database

This project reflects my interest in IoT systems, mobile-cloud applications, real-time monitoring, and smart city technologies. Future directions include scalable IoT data pipelines, anomaly detection, and intelligent decision-support systems for urban waste management.`
      },
      dsc: {
        title: "🎓 DSC HKU Website",
        desc: `DSC HKU Website is a full-stack community platform developed for Developer Student Clubs Hasan Kalyoncu University.

The platform was built to manage events, blog posts, sponsors, archives, and community content through a dynamic admin panel. It includes responsive public pages, content management features, image upload support, contact/FAQ sections, and SEO-focused page structure.

My work included developing the React frontend, building and integrating the Django REST Framework backend, designing the content management flow, connecting PostgreSQL data models, and deploying the frontend and backend through Netlify and Render.

Tech Stack:
• Frontend: React, React Router, CSS3, Axios
• Backend: Django REST Framework
• Database: PostgreSQL
• Media Storage: Cloudinary
• Deployment: Netlify, Render

This project strengthened my experience in full-stack architecture, REST API integration, admin panel development, database-backed content systems, and production deployment.`,
        liveUrl: "https://dschku.com/"
      },
      swipeIt: {
        title: "📖 SwipeBooks - Book Recommendation App",
        desc: "A React Native (Expo) mobile app that allows users to swipe through books and movies to discover their favorites.\n\nFeatures:\n- Swipe-based recommendation system (like Tinder)\n- Users can like, dislike, or add items to favorites\n- Firebase Auth for secure user login\n- Firestore database for storing user preferences and top items\n- Detailed view for each book\n- Weekly popularity ranking based on user interactions\n- Bad word filtering and rate-limiting for user submissions\n\nScreenshots are provided to showcase the app functionality and user flow."
      },
      mindCaps: {
        title: "🌿 MindCaps - AI-Powered Emotional Reflection App",
        desc: `MindCaps is an AI-powered emotional reflection app built with React Native (Expo) and a Flask backend. Users can write about how they feel, and the app returns structured emotional insights and supportive, non-clinical reflection prompts.

Features:
- Free-text emotional input from users
- AI-generated emotional insight in structured JSON format
- Emotion categories such as joy, sadness, fear, anger, disgust, and surprise
- Supportive reflection messages generated by the backend
- "Future self" style motivational prompts
- Turkish and English language support
- React Native frontend integrated with a Flask REST API
- Server-side AI processing to keep API credentials outside the mobile app

MindCaps is designed as a software engineering and AI integration project, not as a medical, diagnostic, or therapy tool.`
      },
      fridge: {
        title: "🧊 What's in Your Fridge? - Recipe App",
        desc: "A React Native (Expo) application that helps users discover recipes based on the ingredients available in their fridge or pantry.\n\nFeatures:\n- Input ingredients manually\n- Fetches recipes using TheMealDB API\n- Displays recipe details:\n  • Ingredients listed at the top\n  • Step-by-step instructions shown below\n- Clean UI with professional food images"
      },
      email: {
        title: "📧 Automatic Email Sender",
        desc: "A Python Flask application that automatically sends emails at scheduled times.\n\nFeatures:\n- Input sender & receiver email, subject, message, and schedule\n- Supports one-time, weekly, monthly, and yearly sending\n- Success modal confirms email sent\n- Secure sending via SMTP"
      },
      smartHome: {
        title: "🏠 Smart Home Security System",
        desc: "A smart home security system using ESP32, Arduino IDE, and Flask, providing real-time motion detection alerts with voice notifications.\n\nFeatures:\n- Motion detection via ultrasonic sensor\n- Real-time alerts through Flask web interface\n- Voice and visual notifications\n- Remote access via web or mobile\n- Data management using SQLite"
      }
    },

    // Resume
    resume: {
      title: "Resume",
      download: "Download CV",
      education: "Education",
      edu1: "Hasan Kalyoncu University — Gaziantep",
      edu1Desc: "BSc in Software Engineering",
      edu1Note: "100% English Program · Full Scholarship",
      edu1Grad: "Graduated: June 2026",
      edu2: "St Giles International School — UK",
      edu2Desc: "B2 English Language Certificate",
      edu2Note: "Completed in 2022",
      experience: "Experience",
      exp1: "— Project Management Intern (Jun–Aug 2025)",
      exp2: "— Software Engineering Intern",
      exp3: "— Campus Lead (2023–2024)",
      exp4: "— Front Desk Associate (Summer 2023)",
      skills: "Technical Skills",
      skillsLang: "Languages & Frameworks",
      skillsTools: "Tools & Platforms",
      skillsOther: "Other",
      certificates: "Certificates"
    },

    // Contact
    contact: {
      title: "Get In Touch",
      subtitle: "Open to full-stack, mobile, and software engineering roles, as well as graduate research opportunities in IoT, mobile-cloud systems, and software engineering.",
      button: "Send Message"
    },

    // Footer
    footer: {
      rights: "All rights reserved."
    },

    // Project Detail
    projectDetail: {
      back: "Back",
      notFound: "Project not found!",
      goBack: "Go Back",
      liveDemo: "Live Demo 🚀",
      demoVideo: "System Demo",
      hardwareDemo: "Hardware Demo",
      githubWeb: "GitHub (Web)",
      githubMobile: "GitHub (Mobile)",
      viewHardware: "Hardware",
      viewWeb: "Web",
      viewMobile: "Mobile",
      videoError: "Oops… Your browser does not support the video tag."
    },
    notFound: {
      title: "Page Not Found",
      description: "The page you are looking for doesn't exist or the URL is incorrect.",
      button: "Go Back Home"
    }
  },

  tr: {
    // Navbar
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımda",
      projects: "Projeler",
      resume: "Özgeçmiş",
      contact: "İletişim"
    },

    // Home
    home: {
      greeting: "Merhaba, Ben Büşra",
      description: "React, React Native, Django REST Framework, Flask, Firebase ve ESP32 ile full-stack web uygulamaları, mobil ürünler, yapay zeka entegreli araçlar ve IoT sistemleri geliştiren Yazılım Mühendisliği mezunuyum.",
      viewResume: "Özgeçmişi Görüntüle",
      myProjects: "Projelerim"
    },

    // About
    about: {
      title: "Hakkımda",
      intro1: "Ben",
      student: "Yazılım Mühendisliği mezunu ve Full-Stack Geliştiriciyim",
      intro2: "; Hasan Kalyoncu Üniversitesi Yazılım Mühendisliği bölümünden mezun oldum (",
      scholarship: "%100 İngilizce Program, Tam Burs",
      intro3: ", mezuniyet: Haziran 2026). REST API tasarımından ilişkisel veritabanlarına, Play Store'daki mobil uygulamalara, yapay zeka entegreli araçlara ve IoT sistemlerine kadar uçtan uca ürünler geliştiriyorum.",
      experience: "Deneyimlerim arasında ",
      pm: "Sca Social'da Proje Yönetimi Stajyerliği",
      software: "Logicute'ta Mobil Uygulama Geliştirici CO-OP stajı",
      lead: "Google DSC HKU Kampüs Liderliği",
      international: " ve uluslararası profesyonel deneyim",
      usa: " bulunuyor (ABD Work and Travel programı).",
      researchTitle: "Araştırma & Teknik İlgi Alanları",
      researchIntro: "Güncel ilgi alanlarım, yazılım mühendisliği pratiğini akıllı, bağlantılı ve kullanıcı odaklı sistemler üzerine uygulanabilir araştırma yönleriyle birleştiriyor.",
      research1: "IoT ve siber-fiziksel sistemler",
      research2: "Mobil-bulut uygulamaları",
      research3: "Yazılım mühendisliği",
      research4: "Yapay zeka destekli yazılım geliştirme",
      research5: "Kullanıcı odaklı akıllı uygulamalar",
      skills: {
        webMobile: "Frontend & Mobil",
        webMobileDesc: "React · React Native (Expo) · Bileşen Mimarisi · Navigasyon",
        backend: "Backend & API",
        backendDesc: "Django REST Framework · Flask · Node.js · JWT Auth · CRUD",
        data: "Veritabanı & Bulut",
        dataDesc: "PostgreSQL · SQLite · Firebase Firestore · Veri Modelleme",
        iot: "IoT & Gömülü",
        iotDesc: "ESP32 · Arduino · Sensör Entegrasyonu · Gerçek Zamanlı Sistemler",
        deploy: "Deployment & Araçlar",
        deployDesc: "Netlify · Render · Google Play Store · Git · Figma",
        leadership: "Liderlik",
        leadershipDesc: "Google DSC · Hackathonlar · Takım Projeleri"
      },
      languages: "Diller",
      native: "Ana Dil",
      turkish: "Türkçe",
      english: "İngilizce",
      german: "Almanca",
      greek: "Yunanca",
      certificates: "Sertifikalar",
      cert1: "Proje Yönetimi Stajı — Sca Social (2025)",
      cert2: "Google DSC Kampüs Temsilcisi (2024)",
      cert3: "Work and Travel — ABD (2023)",
      cert4: "B2 İngilizce — ST Giles, İngiltere (2022)"
    },

    // Projects
    projects: {
      title: "Projeler",
      subtitle: "REST API tasarımı ve veritabanı modellemesinden Play Store deployment'a uzanan full-stack web, mobil ve IoT projelerinden bir seçki.",
      lilithia: {
        title: "📖 Lilithia – Hikaye & İçerik Okuma Uygulaması",
        desc: `Lilithia, kullanıcıların hikaye ve içerikleri okuyabileceği bir mobil uygulamadır. Kullanıcılar içerik keşfedebilir, favorilere ekleyebilir ve çevrimdışı okuyabilir. Okuma deneyimini geliştiren temiz bir arayüz ve etkileşimli öğeler sunar.\n\nUygulama React Native (Expo) ile geliştirilmiş olup mobil geliştirme becerilerimi sergiler.\n\nDemo video aşağıda mevcuttur.`,
      },
      hataDefteri: {
        title: "📝 Smurfia – Hata Defteri (İngilizce Öğrenme)",
        desc: `Smurfia, İngilizce öğrenen herkes için hazırlanmış pratik bir öğrenme aracıdır. Hatalarınızı kaydedin, tekrar edin ve eksiklerinizi hedef odaklı çalışarak kapatın. Sınav hazırlığı ya da günlük çalışma için Smurfia hızlı, basit ve etkili bir yöntem sunar.

Smurfia Hata Defteri bölümü sayesinde İngilizce çalışma sürecinizde karşılaştığınız hataları kayıt altına alabilir, bu hatalara açıklama ve doğru cevap ekleyebilir, kaydettiğiniz hatalara konuya göre filtreleme uygulayabilirsiniz. Hatalarınızı dilediğiniz zaman silebilir ya da düzenleyebilirsiniz.

Kelime Kartları özelliği ile kendi kelime listenizi oluşturabilirsiniz. Eklediğiniz kelimeleri kart formatında tekrar ederek kelime hafızanızı güçlendirebilirsiniz. Kelime kartları üzerinden tekrar yaparak kelime hazinenizi sistematik olarak geliştirebilirsiniz.

Test Oluşturma özelliği ile hata defterinizdeki verilerden otomatik testler oluşturabilirsiniz. Bu sayede eksiklerinizi hızlıca görüp güçlü ve zayıf yönlerinize göre çalışma planı yapabilirsiniz. Smurfia sınavlara hazırlık ve günlük İngilizce pratiği için ideal bir destek sağlar.

Tüm kullanıcı verileriniz Firebase Firestore üzerinde güvenli bir şekilde saklanır. Hesap silmeden sadece hata ve kelime kayıtlarınızı ayrı ayrı silebilirsiniz. Veri silme işlemleri için uygulama içi Veri Silme bölümünü kullanabilirsiniz.

`
      },
      smartBin: {
        title: "🗑️ Smart Bin – Akıllı Atık Yönetim Sistemi",
        desc: `Smart Bin, gömülü donanım, gerçek zamanlı bulut verisi, web dashboard ve mobil uygulamayı bir araya getiren uçtan uca bir IoT tabanlı akıllı atık yönetim sistemidir.

Sistem, ESP32 mikrodenetleyici ve ultrasonik sensörler kullanarak çöp kutusunun doluluk seviyesini ölçer ve el/ayak hareketini algılayarak temassız kapak kontrolü sağlar. Servo motor kapağı otomatik olarak açarken, LED göstergeler ve buzzer yerel durum uyarıları verir.

Doluluk verileri Firebase’e gerçek zamanlı olarak aktarılır ve React ile geliştirilen web dashboard ile React Native mobil uygulama üzerinden görselleştirilir. Böylece kullanıcılar çöp kutusunun durumunu uzaktan takip edebilir ve atık toplama ihtiyacını daha net görebilir.

Bu projede sistem akışının tasarlanması, ESP32 sensör verilerinin Firebase ile entegre edilmesi, React dashboard’un geliştirilmesi, React Native mobil arayüzün oluşturulması ve donanım-yazılım bileşenlerinin çalışan bir prototipte birleştirilmesi üzerine çalıştım.

Teknoloji Stack:
• Donanım: ESP32, ultrasonik sensörler, servo motor, LED’ler, buzzer
• Frontend: React
• Mobil: React Native (Expo)
• Bulut/Veri: Firebase Realtime Database

Bu proje; IoT sistemleri, mobil-bulut uygulamaları, gerçek zamanlı izleme ve akıllı şehir teknolojilerine olan ilgimi yansıtmaktadır. Gelecek geliştirme yönleri arasında ölçeklenebilir IoT veri akışları, anomali tespiti ve şehir atık yönetimi için akıllı karar destek sistemleri yer almaktadır.`
      },
      dsc: {
        title: "🎓 DSC HKU Web Sitesi",
        desc: `DSC HKU Web Sitesi, Developer Student Clubs Hasan Kalyoncu University için geliştirilmiş full-stack bir topluluk platformudur.

Platform; etkinlikler, blog yazıları, sponsorlar, arşiv içerikleri ve topluluk duyurularının dinamik bir admin paneli üzerinden yönetilebilmesi için tasarlanmıştır. Responsive public sayfalar, içerik yönetimi özellikleri, görsel yükleme desteği, iletişim/SSS bölümleri ve SEO odaklı sayfa yapısı içerir.

Bu projede React frontend’in geliştirilmesi, Django REST Framework backend’in oluşturulması ve entegre edilmesi, içerik yönetimi akışının tasarlanması, PostgreSQL veri modellerinin bağlanması ve frontend/backend deployment süreçleri üzerine çalıştım.

Teknoloji Stack:
• Frontend: React, React Router, CSS3, Axios
• Backend: Django REST Framework
• Veritabanı: PostgreSQL
• Medya Depolama: Cloudinary
• Deployment: Netlify, Render

Bu proje; full-stack mimari, REST API entegrasyonu, admin panel geliştirme, veritabanı destekli içerik sistemleri ve production deployment alanlarındaki deneyimimi güçlendirdi.`,
        liveUrl: "https://dschku.com/"
      },
      swipeIt: {
        title: "📖 SwipeBooks - Kitap Öneri Uygulaması",
        desc: "Kullanıcıların kitaplar ve filmler arasında kaydırarak favorilerini keşfetmelerini sağlayan React Native (Expo) mobil uygulaması.\n\nÖzellikler:\n- Kaydırma tabanlı öneri sistemi (Tinder benzeri)\n- Beğenme, beğenmeme veya favorilere ekleme\n- Güvenli kullanıcı girişi için Firebase Auth\n- Kullanıcı tercihlerini ve popüler öğeleri saklamak için Firestore\n- Her kitap için detaylı görünüm\n- Kullanıcı etkileşimlerine göre haftalık popülerlik sıralaması\n- Kötü sözcük filtreleme ve kullanıcı gönderileri için hız sınırlama\n\nEkran görüntüleri, uygulamanın işlevselliğini ve kullanıcı akışını göstermek için sağlanmıştır."
      },
      mindCaps: {
        title: "🌿 MindCaps - Yapay Zeka Destekli Duygusal Farkındalık Uygulaması",
        desc: `MindCaps, React Native (Expo) ve Flask backend ile geliştirilmiş yapay zeka destekli bir duygusal farkındalık uygulamasıdır. Kullanıcılar nasıl hissettiklerini serbest metin olarak yazabilir; uygulama ise yapılandırılmış duygu içgörüleri ve klinik olmayan destekleyici düşünme mesajları üretir.

Özellikler:
- Kullanıcıdan serbest metin duygu girişi
- JSON formatında yapay zeka destekli duygu içgörüsü
- Neşe, üzüntü, korku, öfke, tiksinme ve şaşkınlık gibi duygu kategorileri
- Backend tarafından üretilen destekleyici yansıtma mesajları
- "Gelecekteki benlik" tarzında motivasyon mesajları
- Türkçe ve İngilizce dil desteği
- Flask REST API ile entegre React Native frontend
- API bilgilerinin mobil uygulama dışında kalması için server-side AI işleme

MindCaps; tıbbi, tanısal veya terapi amaçlı bir araç değil, yazılım mühendisliği ve yapay zeka entegrasyonu odaklı bir projedir.`
      },
      fridge: {
        title: "🧊 Buzdolabında Ne Var? - Tarif Uygulaması",
        desc: "Kullanıcıların buzdolabı veya kilerdeki malzemelere göre tarifler keşfetmelerine yardımcı olan React Native (Expo) uygulaması.\n\nÖzellikler:\n- Manuel malzeme girişi\n- TheMealDB API kullanarak tarif getirme\n- Tarif detaylarını gösterme:\n  • En üstte listelenen malzemeler\n  • Adım adım talimatlar aşağıda gösterilir\n- Profesyonel yemek görselleriyle temiz arayüz"
      },
      email: {
        title: "📧 Otomatik E-posta Gönderici",
        desc: "Belirlenen zamanlarda otomatik olarak e-posta gönderen Python Flask uygulaması.\n\nÖzellikler:\n- Gönderici ve alıcı e-posta, konu, mesaj ve program girişi\n- Tek seferlik, haftalık, aylık ve yıllık gönderimi destekler\n- Başarı modalı e-posta gönderimini onaylar\n- SMTP ile güvenli gönderim"
      },
      smartHome: {
        title: "🏠 Akıllı Ev Güvenlik Sistemi",
        desc: "Sesli bildirimlerle gerçek zamanlı hareket algılama uyarıları sağlayan ESP32, Arduino IDE ve Flask kullanan akıllı ev güvenlik sistemi.\n\nÖzellikler:\n- Ultrasonik sensör ile hareket algılama\n- Flask web arayüzü ile gerçek zamanlı uyarılar\n- Sesli ve görsel bildirimler\n- Web veya mobil üzerinden uzaktan erişim\n- SQLite ile veri yönetimi"
      }
    },

    // Resume
    resume: {
      title: "Özgeçmiş",
      download: "CV İndir",
      education: "Eğitim",
      edu1: "Hasan Kalyoncu Üniversitesi — Gaziantep",
      edu1Desc: "Yazılım Mühendisliği Lisans",
      edu1Note: "%100 İngilizce Program · Tam Burs",
      edu1Grad: "Mezuniyet: Haziran 2026",
      edu2: "St Giles International School — İngiltere",
      edu2Desc: "B2 İngilizce Sertifikası",
      edu2Note: "Tamamlandı: 2022",
      experience: "Deneyim",
      exp1: "— Proje Yönetimi Stajyeri (Haz–Ağu 2025)",
      exp2: "— Yazılım Mühendisliği Stajyeri",
      exp3: "— Kampüs Lideri (2023–2024)",
      exp4: "— Resepsiyonist (Yaz 2023)",
      skills: "Teknik Beceriler",
      skillsLang: "Diller & Framework'ler",
      skillsTools: "Araçlar & Platformlar",
      skillsOther: "Diğer",
      certificates: "Sertifikalar"
    },

    // Contact
    contact: {
      title: "İletişime Geçin",
      subtitle: "Full-stack, mobil ve yazılım mühendisliği rollerine; ayrıca IoT, mobile-cloud systems ve software engineering alanlarında yüksek lisans araştırma fırsatlarına açığım.",
      button: "Mesaj Gönder"
    },

    // Footer
    footer: {
      rights: "Tüm hakları saklıdır."
    },

    // Project Detail
    projectDetail: {
      back: "Geri",
      notFound: "Proje bulunamadı!",
      goBack: "Geri Dön",
      liveDemo: "Canlı Demo 🚀",
      demoVideo: "Sistem Demosu",
      hardwareDemo: "Donanım Demosu",
      githubWeb: "GitHub (Web)",
      githubMobile: "GitHub (Mobil)",
      viewHardware: "Donanım",
      viewWeb: "Web",
      viewMobile: "Mobil",
      videoError: "Üzgünüz… Tarayıcınız video etiketini desteklemiyor."
    },
    notFound: {
      title: "Sayfa Bulunamadı",
      description: "Aradığınız sayfa mevcut değil veya URL yanlış yazıldı.",
      button: "Ana Sayfaya Dön"
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en');
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};