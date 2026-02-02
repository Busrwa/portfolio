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
      description: "I'm a 4th-year Software Engineering student passionate about developing modern web and mobile applications with React, React Native (Expo), Django/Flask, and building IoT solutions with Arduino and ESP32.",
      viewResume: "View Resume",
      myProjects: "My Projects"
    },

    // About
    about: {
      title: "About Me",
      intro1: "I am a 4th-year",
      student: "Software Engineering student",
      intro2: "at Hasan Kalyoncu University (",
      scholarship: "100% English Program, Full Scholarship",
      intro3: ", expected graduation: 2026). I am passionate about ",
      webMobile: "web & mobile development",
      iot: "IoT solutions",
      intro4: ", and projects that combine software and hardware.",
      experience: "My experience includes working as a ",
      pm: "Project Management Intern at Sca Social",
      software: "Software Intern at Rigelsan Defense & Security",
      lead: "University Campus Lead at Google DSC HKU",
      international: " international work experience",
      usa: " in the USA through the Work and Travel program.",
      skills: {
        webMobile: "Web & Mobile Development",
        webMobileDesc: "React · React Native (Expo) · Django · Firebase",
        iot: "IoT & Embedded Systems",
        iotDesc: "ESP32 · Arduino · Sensor Applications",
        leadership: "Leadership & Projects",
        leadershipDesc: "Google DSC · Hackathons · IoT Projects · Personal Apps"
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

    // Projects
    projects: {
      title: "My Projects",
      subtitle: "Here are a few of my personal and academic projects showcasing my skills in React, React Native (Expo), Django, and IoT development.",
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

⚠️ Project repositories (frontend & backend) are private due to security and organizational policies. Screenshots are provided to showcase the app functionality.`
      },
      smartBin: {
        title: "🗑️ Smart Bin – Smart Waste Management System",
        desc: `Smart Bin is an IoT-based smart waste management system that integrates hardware, software, and cloud technologies. The project is developed using an ESP32 microcontroller.

The system uses two ultrasonic sensors. The first sensor is placed on the lid of the bin and continuously measures the trash fill level. The second ultrasonic sensor is located on the outside of the bin and detects hand or foot movements to enable touchless operation. When this sensor is triggered, a servo motor is activated and the lid opens automatically.

The fill level of the bin is visually indicated using LEDs:
• Green LED: Empty or low fill level
• Yellow LED: Medium fill level
• Red LED: Fully filled

When the bin reaches full capacity, the red LED is activated together with a buzzer to provide an audible alert.

The fill level data collected by the ESP32 is sent to a Firebase database in real time. This data is displayed and monitored through a web application developed with React and a mobile application built using React Native (Expo), allowing remote and real-time tracking of the bin status.

Smart Bin provides a scalable and end-to-end solution for sustainable waste management, hygienic usage, and smart city applications.`
      },
      dsc: {
        title: "🎓 DSC HKU Website",
        desc: "Official website for Developer Student Clubs Hasan Kalyoncu University - A full-stack web application I developed.\n\nKey Features:\n• Admin panel for dynamic content management\n• Blog and event system with rich text editor (Quill)\n• Sponsor showcase with image upload capability\n• Responsive design optimized for all devices (desktop, tablet, mobile)\n• Contact form with FAQ section and validation\n• Archive system for past events and activities\n• SEO optimized pages with proper meta tags\n• Easter eggs and interactive elements for user engagement\n\nTech Stack:\n• Frontend: React, React Router, CSS3, Axios\n• Backend: Django REST Framework, PostgreSQL\n• Deployment: Netlify (Frontend), Render (Backend)\n• Storage: Cloudinary for image management\n\n⚠️ Project repositories (frontend & backend) are private due to security and organizational policies. Screenshots are provided to showcase the website functionality.",
        liveUrl: "https://dschkuu.netlify.app/"
      },
      swipeIt: {
        title: "📖 Swipe It - Book Recommendation App",
        desc: "A React Native (Expo) mobile app that allows users to swipe through books and movies to discover their favorites.\n\nFeatures:\n- Swipe-based recommendation system (like Tinder)\n- Users can like, dislike, or add items to favorites\n- Firebase Auth for secure user login\n- Firestore database for storing user preferences and top items\n- Detailed view for each book\n- Weekly popularity ranking based on user interactions\n- Bad word filtering and rate-limiting for user submissions\n\n⚠️ This project repository is private to comply with copyright rules. Screenshots are provided to showcase the app functionality."
      },
      mindCaps: {
        title: "🌿 MindCaps - AI-Powered Psychological Support App",
        desc: "A React Native (Expo) mobile app integrated with a Flask backend that provides empathetic psychological support.\n\nFeatures:\n- User text analysis and AI-generated supportive messages\n- Emotional analysis in JSON format (joy, sadness, fear, anger, disgust, surprise)\n- Motivational messages from the user's \"future self\"\n- Turkish and English support\n- Integrated React Native frontend and Flask backend\n- Secure handling of user inputs"
      },
      fridge: {
        title: "🧊 What's in Your Fridge? - Recipe App",
        desc: "A React Native (Expo) application that helps users discover recipes based on the ingredients available in their fridge or pantry.\n\nFeatures:\n- Input ingredients manually\n- Fetches recipes using TheMealDB API\n- Displays recipe details:\n  • Ingredients listed at the top\n  • Step-by-step instructions shown below\n- Clean UI with professional food images"
      },
      email: {
        title: "📧 Automatic Email Sender",
        desc: "A Python Flask application that automatically sends emails at scheduled times.\n\nFeatures:\n- Input sender & receiver email, subject, message, and schedule\n- Supports one-time, weekly, monthly, and yearly sending\n- Success modal confirms email sent\n- Secure sending via SMTP"
      },
      pdf: {
        title: "📝 PDF Merger",
        desc: "A Python desktop application with a GUI to merge multiple PDF files into one.\n\nFeatures:\n- Select multiple PDFs\n- Choose output location\n- User-friendly Tkinter interface\n- Success and error notifications"
      },
      blog: {
        title: "📚 Flask Blog App",
        desc: "A Flask-based blog application using SQLite.\n\nFeatures:\n- User registration and login\n- Add, view, and filter posts by category\n- Categories: News, Technology, Health, Education\n- Modern and responsive UI"
      },
      todo: {
        title: "📝 To-Do List App",
        desc: "A Python + Flask application to manage personal tasks and notes.\n\nFeatures:\n- User registration and login\n- Add, view, and delete notes\n- User-specific notes stored in SQLite\n- Modern and responsive web interface"
      },
      tv: {
        title: "📺 TV Channels - Live Stream App",
        desc: "A React Native (Expo) mobile app that displays TV channels in a clean interface.\n\nFeatures:\n- Browse TV channels\n- Watch live streams via embedded WebView\n- Clean and minimal UI for focused viewing\n\n⚠️ This project repository is private to comply with copyright rules. A demo video and screenshots are provided to showcase the app functionality."
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
      edu1Desc: "BSc in Software Engineering · 4th Year",
      edu1Note: "100% English Program · Full Scholarship",
      edu1Grad: "Expected Graduation: 2026",
      edu2: "St Giles International School — UK",
      edu2Desc: "B2 English Language Certificate - United Kingdom (UK)",
      edu2Note: "Completed in 2022",
      experience: "Experience",
      exp1: "— Project Management Intern (Jun–Aug 2025)",
      exp2: "— Campus Lead (2023–2024)",
      exp3: "— Front Desk Associate (Summer 2023)",
      exp4: "— Sales Consultant (Summer 2023)",
      skills: "Technical Skills",
      skillsLang: "Languages & Frameworks",
      skillsTools: "Tools & Platforms",
      skillsOther: "Other",
      certificates: "Certificates"
    },

    // Contact
    contact: {
      title: "Get In Touch",
      subtitle: "Feel free to reach out for collaborations or just a friendly chat!",
      button: "Say Hello"
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
      description: "Hasan Kalyoncu Üniversitesi Yazılım Mühendisliği 4. sınıf öğrencisiyim. React, React Native (Expo), Django/Flask ile modern web ve mobil uygulamalar geliştiriyor, Arduino ve ESP32 ile IoT çözümleri üretiyorum.",
      viewResume: "Özgeçmişi Görüntüle",
      myProjects: "Projelerim"
    },

    // About
    about: {
      title: "Hakkımda",
      intro1: "Hasan Kalyoncu Üniversitesi'nde",
      student: "Yazılım Mühendisliği",
      intro2: "4. sınıf öğrencisiyim (",
      scholarship: "%100 İngilizce Program, Tam Burs",
      intro3: ", mezuniyet: 2026). ",
      webMobile: "Web ve mobil geliştirme",
      iot: "IoT çözümleri",
      intro4: " ve yazılım-donanım entegrasyonu projelerine tutkuyla bağlıyım.",
      experience: "Deneyimlerim arasında ",
      pm: "Sca Social'da Proje Yönetimi Stajyerliği",
      software: "Rigelsan Savunma'da Yazılım Stajyerliği",
      lead: "Google DSC HKU Kampüs Lideri",
      international: " ve uluslararası çalışma deneyimi",
      usa: " bulunuyor (ABD Work and Travel programı).",
      skills: {
        webMobile: "Web & Mobil Geliştirme",
        webMobileDesc: "React · React Native (Expo) · Django · Firebase",
        iot: "IoT & Gömülü Sistemler",
        iotDesc: "ESP32 · Arduino · Sensör Uygulamaları",
        leadership: "Liderlik & Projeler",
        leadershipDesc: "Google DSC · Hackathonlar · IoT Projeleri · Kişisel Uygulamalar"
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
      title: "Projelerim",
      subtitle: "React, React Native (Expo), Django ve IoT geliştirme becerilerimi sergileyen kişisel ve akademik projelerim.",
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

⚠️ Proje depoları (frontend & backend) güvenlik ve kurumsal politikalar nedeniyle gizlidir. Uygulama işlevselliğini göstermek için ekran görüntüleri sağlanmıştır.`
      },
      smartBin: {
        title: "🗑️ Smart Bin – Akıllı Atık Yönetim Sistemi",
        desc: `Smart Bin, donanım, yazılım ve bulut teknolojilerini bir araya getiren IoT tabanlı akıllı bir çöp yönetim sistemidir. Proje, ESP32 mikrodenetleyici kullanılarak geliştirilmiştir.

Sistemde iki adet ultrasonik sensör bulunmaktadır. İlk sensör, çöp kutusunun kapağında konumlandırılmış olup çöp doluluk seviyesini sürekli olarak ölçmektedir. İkinci ultrasonik sensör ise çöp kutusunun dış kısmında yer almakta ve el veya ayak hareketlerini algılayarak temassız kullanım sağlamaktadır. Bu sensör tetiklendiğinde servo motor devreye girer ve çöp kapağı otomatik olarak açılır.

Çöp doluluk durumu LED’ler aracılığıyla kullanıcıya görsel olarak aktarılmaktadır:
• Yeşil LED: Düşük doluluk veya boş
• Sarı LED: Orta doluluk
• Kırmızı LED: Tam doluluk

Çöp kutusu tamamen dolduğunda kırmızı LED ile birlikte buzzer aktif hale gelerek sesli uyarı verir.

Doluluk verileri ESP32 üzerinden Firebase veritabanına gerçek zamanlı olarak gönderilmektedir. Bu veriler, React ile geliştirilen web uygulaması ve React Native (Expo) ile geliştirilen mobil uygulama üzerinden anlık olarak izlenebilmekte ve çöp kutusunun durumu uzaktan takip edilebilmektedir.

Smart Bin, sürdürülebilir atık yönetimi, hijyenik kullanım ve akıllı şehir uygulamaları için ölçeklenebilir ve bütüncül bir çözüm sunmaktadır.`
      },

      dsc: {
        title: "🎓 DSC HKU Web Sitesi",
        desc: "Developer Student Clubs Hasan Kalyoncu Üniversitesi resmi web sitesi - Geliştirdiğim full-stack web uygulaması.\n\nTemel Özellikler:\n• Dinamik içerik yönetimi için admin paneli\n• Zengin metin editörü (Quill) ile blog ve etkinlik sistemi\n• Resim yükleme özelliği ile sponsor vitrini\n• Tüm cihazlar için optimize edilmiş responsive tasarım (masaüstü, tablet, mobil)\n• Doğrulama özellikli iletişim formu ve SSS bölümü\n• Geçmiş etkinlikler ve aktiviteler için arşiv sistemi\n• Uygun meta etiketlerle SEO optimize edilmiş sayfalar\n• Kullanıcı etkileşimi için easter egg'ler ve interaktif öğeler\n\nTeknoloji Stack:\n• Frontend: React, React Router, CSS3, Axios\n• Backend: Django REST Framework, PostgreSQL\n• Deployment: Netlify (Frontend), Render (Backend)\n• Depolama: Görsel yönetimi için Cloudinary\n\n⚠️ Proje depoları (frontend & backend) güvenlik ve kurumsal politikalar nedeniyle gizlidir. Web sitesi işlevselliğini göstermek için ekran görüntüleri sağlanmıştır.",
        liveUrl: "https://dschkuu.netlify.app/"
      },
      swipeIt: {
        title: "📖 Swipe It - Kitap Öneri Uygulaması",
        desc: "Kullanıcıların kitaplar ve filmler arasında kaydırarak favorilerini keşfetmelerini sağlayan React Native (Expo) mobil uygulaması.\n\nÖzellikler:\n- Kaydırma tabanlı öneri sistemi (Tinder benzeri)\n- Beğenme, beğenmeme veya favorilere ekleme\n- Güvenli kullanıcı girişi için Firebase Auth\n- Kullanıcı tercihlerini ve popüler öğeleri saklamak için Firestore\n- Her kitap için detaylı görünüm\n- Kullanıcı etkileşimlerine göre haftalık popülerlik sıralaması\n- Kötü sözcük filtreleme ve kullanıcı gönderileri için hız sınırlama\n\n⚠️ Bu proje deposu telif kurallarına uyum için gizlidir. Uygulama işlevselliğini göstermek için ekran görüntüleri sağlanmıştır."
      },
      mindCaps: {
        title: "🌿 MindCaps - Yapay Zeka Destekli Psikolojik Destek Uygulaması",
        desc: "Empatik psikolojik destek sağlayan Flask backend entegreli React Native (Expo) mobil uygulaması.\n\nÖzellikler:\n- Kullanıcı metni analizi ve yapay zeka destekli destek mesajları\n- JSON formatında duygusal analiz (neşe, üzüntü, korku, öfke, tiksinme, şaşkınlık)\n- Kullanıcının \"gelecekteki benliğinden\" motivasyon mesajları\n- Türkçe ve İngilizce destek\n- Entegre React Native frontend ve Flask backend\n- Kullanıcı girdilerinin güvenli işlenmesi"
      },
      fridge: {
        title: "🧊 Buzdolabında Ne Var? - Tarif Uygulaması",
        desc: "Kullanıcıların buzdolabı veya kilerdeki malzemelere göre tarifler keşfetmelerine yardımcı olan React Native (Expo) uygulaması.\n\nÖzellikler:\n- Manuel malzeme girişi\n- TheMealDB API kullanarak tarif getirme\n- Tarif detaylarını gösterme:\n  • En üstte listelenen malzemeler\n  • Adım adım talimatlar aşağıda gösterilir\n- Profesyonel yemek görselleriyle temiz arayüz"
      },
      email: {
        title: "📧 Otomatik E-posta Gönderici",
        desc: "Belirlenen zamanlarda otomatik olarak e-posta gönderen Python Flask uygulaması.\n\nÖzellikler:\n- Gönderici ve alıcı e-posta, konu, mesaj ve program girişi\n- Tek seferlik, haftalık, aylık ve yıllık gönderimi destekler\n- Başarı modalı e-posta gönderimini onaylar\n- SMTP ile güvenli gönderim"
      },
      pdf: {
        title: "📝 PDF Birleştirici",
        desc: "Birden fazla PDF dosyasını tek bir dosyada birleştirmek için GUI'li Python masaüstü uygulaması.\n\nÖzellikler:\n- Birden fazla PDF seçimi\n- Çıktı konumu seçimi\n- Kullanıcı dostu Tkinter arayüzü\n- Başarı ve hata bildirimleri"
      },
      blog: {
        title: "📚 Flask Blog Uygulaması",
        desc: "SQLite kullanan Flask tabanlı blog uygulaması.\n\nÖzellikler:\n- Kullanıcı kaydı ve girişi\n- Kategori bazlı gönderi ekleme, görüntüleme ve filtreleme\n- Kategoriler: Haberler, Teknoloji, Sağlık, Eğitim\n- Modern ve duyarlı arayüz"
      },
      todo: {
        title: "📝 Yapılacaklar Listesi Uygulaması",
        desc: "Kişisel görevleri ve notları yönetmek için Python + Flask uygulaması.\n\nÖzellikler:\n- Kullanıcı kaydı ve girişi\n- Not ekleme, görüntüleme ve silme\n- SQLite'da saklanan kullanıcıya özel notlar\n- Modern ve duyarlı web arayüzü"
      },
      tv: {
        title: "📺 TV Kanalları - Canlı Yayın Uygulaması",
        desc: "Temiz bir arayüzde TV kanallarını gösteren React Native (Expo) mobil uygulaması.\n\nÖzellikler:\n- TV kanallarına göz atma\n- Gömülü WebView ile canlı yayın izleme\n- Odaklanmış izleme için temiz ve minimal arayüz\n\n⚠️ Bu proje deposu telif kurallarına uyum için gizlidir. Uygulama işlevselliğini göstermek için demo video ve ekran görüntüleri sağlanmıştır."
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
      edu1Desc: "Yazılım Mühendisliği Lisans · 4. Sınıf",
      edu1Note: "%100 İngilizce Program · Tam Burs",
      edu1Grad: "Tahmini Mezuniyet: 2026",
      edu2: "St Giles International School — İngiltere",
      edu2Desc: "B2 İngilizce Sertifikası - Birleşik Krallık",
      edu2Note: "Tamamlandı: 2022",
      experience: "Deneyim",
      exp1: "— Proje Yönetimi Stajyeri (Haz–Ağu 2025)",
      exp2: "— Kampüs Lideri (2023–2024)",
      exp3: "— Resepsiyonist (Yaz 2023)",
      exp4: "— Satış Danışmanı (Yaz 2023)",
      skills: "Teknik Beceriler",
      skillsLang: "Diller & Framework'ler",
      skillsTools: "Araçlar & Platformlar",
      skillsOther: "Diğer",
      certificates: "Sertifikalar"
    },

    // Contact
    contact: {
      title: "İletişime Geçin",
      subtitle: "İşbirliği veya sohbet için bana ulaşabilirsiniz!",
      button: "Merhaba De"
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