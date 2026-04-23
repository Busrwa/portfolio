// src/pages/ProjectDetail.jsx
import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useLanguage } from "../contexts/LanguageContext";

// ─────────────────────────────────────────────────────────────────────────────
// TECHNICAL METADATA — one object per project, en + tr
// ─────────────────────────────────────────────────────────────────────────────
const projectMeta = {

  // ── LILITHIA ───────────────────────────────────────────────────────────────
  lilithia: {
    stack: ["React Native", "Expo", "Firebase Firestore", "Firebase Auth", "AsyncStorage", "Expo AV", "Google Play Store"],
    en: {
      overview:
        "Lilithia is a cross-platform mobile reading application built for long-form story and content consumption. The problem it addresses: readers lack a dedicated, distraction-free mobile environment with offline access and personal libraries. The app targets casual readers who want a curated reading experience without noise — published on Google Play Store.",
      architecture:
        "Single-codebase mobile architecture built with React Native (Expo). The UI layer is composed of reusable functional components managed through React Context for global state (auth session, theme, reading progress). Navigation is handled via Expo Router with tab and stack navigators. Firebase serves as the entire backend: Firestore for content and user data, Firebase Auth for identity management. Offline reading is enabled through AsyncStorage, which caches fetched content locally so users can read without an active connection.",
      database:
        "Firebase Firestore is structured as a NoSQL document database. Key collections: `users/{uid}` stores profile data and a `favorites` subcollection holding saved content references. The `content` collection stores story metadata and chapter payloads. This denormalized structure minimizes read operations — the home feed loads from a single collection query and favorite checks resolve from the user's subcollection without full collection scans.",
      security:
        "Authentication is managed entirely through Firebase Auth (email/password and anonymous sign-in). Firestore Security Rules enforce that users can only read/write their own `users/{uid}` documents. The content collection is read-only for all authenticated users. No sensitive user data beyond email is stored; no credentials are transmitted through a custom backend — all auth tokens are managed by the Firebase SDK.",
      performance:
        "Lazy loading is applied to image assets and chapter content — chapters are fetched on demand rather than pre-loaded. AsyncStorage caching eliminates redundant Firestore reads for already-fetched content. FlatList virtualization keeps memory usage stable across long content lists. Expo's managed workflow ensures bundle size optimization at build time for Play Store distribution.",
      challenges:
        "The primary technical challenge was implementing reliable offline reading without a custom sync layer. The solution was a cache-first strategy: content is written to AsyncStorage on first fetch and served from cache on subsequent opens, with a background refresh only when network is available. A second challenge was navigating the Play Store submission pipeline — app signing, versioning, OTA update configuration, and store listing requirements were managed through EAS Build (eas.json) and Expo's managed workflow.",
      role: "Sole developer — designed the data model, built all UI components, configured Firebase backend, managed the full Play Store submission and release pipeline.",
    },
    tr: {
      overview:
        "Lilithia, uzun form hikaye ve içerik tüketimi için tasarlanmış çapraz platform bir mobil okuma uygulamasıdır. Çözdüğü sorun: okuyucuların çevrimdışı erişim ve kişisel kütüphanelerle birlikte özel, dikkat dağıtmayan bir mobil ortamdan yoksun olması. Google Play Store'da yayınlanan uygulama, gürültüsüz bir okuma deneyimi isteyen günlük okuyucuları hedefler.",
      architecture:
        "React Native (Expo) ile oluşturulmuş tek kod tabanı mimarisi. UI katmanı, global durum yönetimi (auth oturumu, tema, okuma ilerlemesi) için React Context kullanan yeniden kullanılabilir fonksiyonel bileşenlerden oluşur. Navigasyon, tab ve stack navigatörlerle Expo Router aracılığıyla yönetilir. Firebase tüm backend'i oluşturur: içerik ve kullanıcı verileri için Firestore, kimlik yönetimi için Firebase Auth. Çevrimdışı okuma, kullanıcıların aktif bağlantı olmadan okuyabilmesi için getirilen içerikleri yerel olarak önbelleğe alan AsyncStorage aracılığıyla sağlanır.",
      database:
        "Firebase Firestore, NoSQL doküman veritabanı olarak yapılandırılmıştır. Temel koleksiyonlar: `users/{uid}` profil verilerini ve kaydedilmiş içerik referanslarını tutan `favorites` alt koleksiyonunu barındırır. `content` koleksiyonu hikaye meta verilerini ve bölüm yüklerini depolar. Bu denormalize yapı okuma işlemlerini minimize eder.",
      security:
        "Kimlik doğrulama tamamen Firebase Auth aracılığıyla yönetilir. Firestore Güvenlik Kuralları, kullanıcıların yalnızca kendi `users/{uid}` dokümanlarını okuyup yazabilmesini sağlar. İçerik koleksiyonu tüm kimlik doğrulamalı kullanıcılar için salt okunurdur.",
      performance:
        "Resim öğelerine ve bölüm içeriklerine lazy loading uygulanır. AsyncStorage önbelleği gereksiz Firestore okumalarını ortadan kaldırır. FlatList sanallaştırması uzun içerik listelerinde bellek kullanımını sabit tutar.",
      challenges:
        "Temel teknik zorluk, özel senkronizasyon katmanı olmadan güvenilir çevrimdışı okuma uygulamaktı. Çözüm, önbellek öncelikli strateji oldu: içerik ilk getirildiğinde AsyncStorage'a yazılır, sonraki açılışlarda önbellekten sunulur ve yalnızca ağ mevcut olduğunda arka planda yenilenir. İkinci zorluk Play Store süreciydi — uygulama imzalama, sürümleme ve OTA güncelleme yapılandırması EAS Build ile yönetildi.",
      role: "Tek geliştirici — veri modeli tasarımı, tüm UI bileşenlerinin geliştirilmesi, Firebase backend yapılandırması, Play Store gönderimi ve yayın pipeline'ı.",
    },
  },

  // ── SMURFIA / HATA DEFTERİ ────────────────────────────────────────────────
  hataDefteri: {
    stack: ["React Native", "Expo", "Firebase Firestore", "Firebase Auth", "REST API", "Google Play Store"],
    en: {
      overview:
        "Smurfia is a language-learning productivity app for Turkish speakers learning English. It addresses a specific gap: learners have no structured system to track personal mistakes over time and convert them into active practice. The app provides three interlocking modules — Mistake Notebook, Flashcard System, and Auto-Test Generator — all powered by the user's own error history. Additionally, the app integrates a backend REST API that serves a curated database of pre-built vocabulary words and practice questions, so users can study from ready-made content alongside their personal records. Published on Google Play Store.",
      architecture:
        "React Native (Expo) with a component-based architecture. State is managed locally with React hooks for UI state and via Firebase for all persistent user data. The three feature modules (Mistake Notebook, Flashcards, Test Generator) are self-contained screen groups that share a common Firebase service layer. A separate REST API layer handles requests to the pre-built content database — vocabulary words and questions curated by topic — allowing users to import ready-made entries into their personal notebook or study directly from the API-served content.",
      database:
        "Firestore is structured with per-user subcollections: `users/{uid}/mistakes` and `users/{uid}/vocabulary`. Each mistake document contains: word/sentence, correct form, explanation, topic tag, and timestamp. The external REST API serves a static content database of categorized vocabulary and multiple-choice questions, enabling users to complement their personal mistake records with pre-built study material.",
      api:
        "The backend REST API exposes endpoints for retrieving pre-built learning content: word lists organized by topic/level and pre-authored practice questions. Responses are consumed by the mobile app to populate the study interface. This dual-content model — user-generated mistakes + curated API content — allows learners to get value from the app immediately, before they've built up a personal error history.",
      security:
        "Firestore Security Rules enforce complete data isolation — users can only access documents within their own `users/{uid}` namespace. An explicit in-app data deletion flow batch-deletes all subcollection documents before removing the Firebase Auth record, ensuring no orphaned data persists.",
      challenges:
        "The test generation algorithm required constructing balanced multiple-choice questions from a potentially small and uneven dataset. The solution applies reservoir sampling to ensure question variety across topics and falls back gracefully when the dataset is insufficient — prompting the user to add more entries or switch to API-served question content rather than generating poor-quality tests.",
      role: "Sole developer — product design, full implementation, Firebase configuration, REST API integration, Play Store submission.",
    },
    tr: {
      overview:
        "Smurfia, İngilizce öğrenen Türkçe konuşucuları için bir dil öğrenme verimlilik uygulamasıdır. Belirli bir boşluğu giderir: öğrencilerin kişisel hatalarını zaman içinde takip edecek ve aktif pratiğe dönüştürecek yapılandırılmış sistemi yoktur. Uygulama üç birbirine bağlı modül sunar: Hata Defteri, Kelime Kartları ve Otomatik Test Oluşturucu. Bunlara ek olarak, uygulama bir backend REST API ile entegre edilmiştir; bu API, hazır kelime ve soru veritabanı sunar — kullanıcılar kendi kayıtlarının yanı sıra bu hazır içerikten de çalışabilir. Google Play Store'da yayınlanmıştır.",
      architecture:
        "Bileşen tabanlı mimariyle React Native (Expo). Üç özellik modülü (Hata Defteri, Kelime Kartları, Test Oluşturucu) ortak bir Firebase hizmet katmanını paylaşan bağımsız ekran gruplarıdır. Ayrı bir REST API katmanı, konuya göre kategorize edilmiş hazır kelimeler ve sorular için istekleri yönetir; kullanıcılar hazır içerikleri kişisel defterlerine aktarabilir veya doğrudan API içeriğinden çalışabilir.",
      database:
        "Firestore, kullanıcı başına alt koleksiyonlarla yapılandırılmıştır: `users/{uid}/mistakes` ve `users/{uid}/vocabulary`. Harici REST API, kullanıcıların kişisel hata kayıtlarını hazır çalışma materyalleriyle tamamlayabilmesi için kategorize edilmiş kelime ve çoktan seçmeli soru veritabanı sunar.",
      api:
        "Backend REST API, hazır öğrenme içeriklerini almak için uç noktalar sunar: konuya/seviyeye göre düzenlenmiş kelime listeleri ve önceden hazırlanmış alıştırma soruları. Bu çift içerik modeli — kullanıcı kaynaklı hatalar + hazır API içeriği — öğrencilerin kişisel hata geçmişi oluşturmadan önce uygulamadan hemen faydalanmasını sağlar.",
      security:
        "Firestore Güvenlik Kuralları tam veri izolasyonu sağlar. Hesap silme işleminde tüm alt koleksiyon dokümanları toplu silinir.",
      challenges:
        "Test oluşturma algoritması küçük ve dengesiz veri setlerinden dengeli sorular oluşturmayı gerektiriyordu. Çözüm, rezervuar örneklemesi kullanır ve veri seti yetersiz olduğunda kullanıcıyı API kaynaklı soru içeriğine yönlendirir.",
      role: "Tek geliştirici — ürün tasarımı, tam uygulama, Firebase yapılandırması, REST API entegrasyonu, Play Store gönderimi.",
    },
  },

  // ── SMART BIN ─────────────────────────────────────────────────────────────
  smartBin: {
    stack: ["ESP32", "C++", "Arduino IDE", "React", "React Native", "Expo", "Firebase Realtime Database", "Netlify", "Servo Motor", "HC-SR04 Ultrasonic Sensors"],
    en: {
      overview:
        "Smart Bin is a full-stack IoT waste management system and graduation project (BSc Software Engineering, 2026), documented in an 80-page final report. It demonstrates real-time hardware-software-cloud integration and solves two problems simultaneously: (1) manual monitoring of bin fill levels in facilities, and (2) unhygienic manual lid operation. The project spans four distinct technical layers — embedded firmware, cloud backend, web dashboard, and mobile app — all communicating in real time. The web, mobile, and cloud layers were developed solely by me; the IoT hardware assembly and firmware were built in collaboration with a teammate.",
      architecture:
        "The system consists of four integrated layers. The hardware layer runs C++ firmware on an ESP32, reading two HC-SR04 ultrasonic sensors and controlling a servo motor and LED/buzzer actuators. The ESP32 publishes fill-level data to Firebase Realtime Database over Wi-Fi using the Firebase Arduino SDK. The cloud layer uses Firebase as a real-time data broker — values written by the ESP32 are immediately available to all connected clients. The web client is a React SPA deployed on Netlify; the mobile client is React Native (Expo). Both use Firebase SDK push listeners for live updates, eliminating polling entirely.",
      database:
        "Firebase Realtime Database stores a single flat JSON tree representing device state: fill level percentage (0–100), lid status (open/closed), LED state, and alert flags. This flat structure is optimal for the high-frequency write pattern — the ESP32 writes sensor data every 2 seconds. Push-based sync delivers state changes to all connected clients within milliseconds.",
      security:
        "Firebase Realtime Database rules restrict write access to the ESP32 device path only, using a service account token embedded in firmware. Client apps have read-only access to the device node. No user authentication is required for dashboard monitoring in this version, keeping the system accessible for facility operators.",
      performance:
        "The ESP32 firmware uses a non-blocking loop design with millis()-based timing rather than delay() calls, ensuring servo motor response to the proximity trigger maintains sub-100ms latency independent of Wi-Fi operations. On the client side, Firebase push listeners eliminate polling overhead — clients receive state changes within the Firebase SDK's average 150ms push latency.",
      challenges:
        "The main firmware challenge was false triggers on the proximity sensor caused by vibration and RF interference from the ESP32's Wi-Fi radio. The solution was a median filter over 5 consecutive sensor readings before any actuation decision, reducing false positives to near-zero. On the software side, synchronizing view state between web and mobile clients required careful Firebase listener lifecycle management to prevent memory leaks on component unmount.",
      role: "Web & mobile lead developer — React web app (Netlify), React Native mobile app, Firebase Realtime Database architecture. IoT hardware assembly and ESP32 firmware developed in collaboration with a teammate. Graduation project with an 80-page technical report.",
    },
    tr: {
      overview:
        "Smart Bin, gerçek zamanlı donanım-yazılım-bulut entegrasyonunu gösteren tam yığın bir IoT atık yönetim sistemi ve bitirme projesidir (Yazılım Mühendisliği Lisans, 2026); proje 80 sayfalık kapsamlı bir final raporu ile belgelenmiştir. Aynı anda iki sorunu çözer: (1) tesislerde doluluk seviyelerinin manuel izlenmesi ve (2) hijyenik olmayan manuel kapak kullanımı. Web, mobil ve bulut katmanlarını tek başıma geliştirdim; IoT donanım montajı ve ESP32 firmware'i bir ekip arkadaşıyla iş birliği içinde oluşturuldu.",
      architecture:
        "Sistem dört entegre katmandan oluşur. Donanım katmanı ESP32 üzerinde C++ firmware çalıştırır. ESP32, Firebase Arduino SDK'sını kullanarak Wi-Fi üzerinden Firebase Realtime Database'e veri yayınlar. Web istemcisi Netlify'da dağıtılan React SPA'dır; mobil istemci React Native (Expo)'dur. Her ikisi de canlı güncellemeler için Firebase SDK push dinleyicileri kullanır.",
      database:
        "Firebase Realtime Database, cihaz durumunu temsil eden tek bir düz JSON ağacı depolar: doluluk yüzdesi, kapak durumu, LED durumu ve uyarı bayrakları. Bu yapı, ESP32'nin 2 saniyede bir veri yazdığı yüksek frekanslı yazma modeli için optimaldir.",
      security:
        "Firebase Realtime Database kuralları yazma erişimini yalnızca ESP32 cihaz yoluyla kısıtlar. İstemci uygulamalar cihaz düğümüne salt okunur erişime sahiptir.",
      performance:
        "ESP32 firmware'i, servo motor yanıtının Wi-Fi işlemlerinden bağımsız olarak 100ms altında gecikme sürdürmesini sağlayan millis() tabanlı zamanlamayla blok olmayan döngü tasarımı kullanır.",
      challenges:
        "Ana firmware zorluğu, ESP32'nin Wi-Fi radyosundan kaynaklanan titreşim ve RF paraziti nedeniyle yakınlık sensöründeki yanlış tetiklemelerdi. Çözüm, herhangi bir aktüasyon kararından önce 5 ardışık okumanın medyan filtresi oldu.",
      role: "Web & mobil baş geliştirici — React web uygulaması (Netlify), React Native mobil uygulama, Firebase Realtime Database mimarisi. IoT donanım montajı ve ESP32 firmware bir ekip arkadaşıyla iş birliği içinde geliştirildi. 80 sayfalık teknik raporla belgelenmiş bitirme projesi.",
    },
  },

  // ── DSC HKU ───────────────────────────────────────────────────────────────
  dsc: {
    stack: ["React", "React Router", "Axios", "Django", "Django REST Framework", "PostgreSQL", "Cloudinary", "Quill.js", "Netlify", "Render"],
    en: {
      overview:
        "DSC HKU is the official website for the Developer Student Clubs chapter at Hasan Kalyoncu University. The challenge was building a platform that serves both public visitors (events, blog, sponsors) and an internal admin team managing dynamic content without engineering involvement. The solution is a decoupled full-stack application with a headless CMS-style admin panel, deployed across Netlify and Render.",
      architecture:
        "Decoupled architecture: React SPA on the frontend communicating with a Django REST Framework API on the backend. The frontend (Netlify) sends all data requests via Axios to the DRF API (Render + PostgreSQL). Cloudinary handles all image storage and transformation — uploads flow through a custom DRF serializer that converts file data to Cloudinary URLs before persistence, keeping the backend fully stateless. Quill.js rich text editor is integrated as a controlled React component for blog and event content.",
      database:
        "PostgreSQL relational database managed via Django ORM. Core tables: `events` (id, title, date, description, image_url, is_archived), `posts` (id, title, content_html, category, author, published_at), `sponsors` (id, name, logo_url, tier), `faq` (id, question, answer, order). Foreign keys and constraints enforce data integrity. All migrations are version-controlled alongside the codebase.",
      api:
        "Django REST Framework exposes separate public and admin endpoint groups. Public endpoints (read-only, no auth): `GET /api/events/`, `GET /api/posts/`, `GET /api/sponsors/`. Admin endpoints (write-enabled, token auth required): `POST /api/events/`, `PATCH /api/posts/{id}/`, `DELETE /api/sponsors/{id}/`. Quill HTML output is stored as sanitized HTML strings and rendered on the frontend via dangerouslySetInnerHTML with DOMPurify sanitization.",
      security:
        "Admin endpoints use DRF Token Authentication — tokens issued on login must be included in the Authorization header for all write operations. CORS is configured to allow requests only from the production Netlify domain. All secrets (database URL, Cloudinary credentials, Django secret key) are managed via environment variables on Render. No credentials are committed to version control.",
      challenges:
        "The main challenge was integrating Quill.js as a reliable controlled component in React — Quill's internal state doesn't always sync with React's render cycle. The solution wraps Quill in a custom hook with a debounced onChange handler, ensuring the stored HTML value stays in sync with the editor state. A second challenge was preventing XSS from rich text content: Quill output is sanitized server-side before storage and re-sanitized client-side with DOMPurify before rendering.",
      role: "Sole developer — system design, full-stack implementation, Cloudinary integration, deployment configuration on Netlify and Render.",
    },
    tr: {
      overview:
        "DSC HKU, Hasan Kalyoncu Üniversitesi Developer Student Clubs şubesi için resmi web sitesidir. Zorluk, hem kamuya açık ziyaretçilere (etkinlikler, blog, sponsorlar) hem de mühendislik müdahalesi olmadan dinamik içerik yöneten iç admin ekibine hizmet eden bir platform oluşturmaktı. Çözüm, Netlify ve Render'a dağıtılmış headless CMS tarzı admin panelli ayrıştırılmış tam yığın bir uygulamadır.",
      architecture:
        "Ayrıştırılmış mimari: backend'deki Django REST Framework API ile iletişim kuran frontend'de React SPA. Cloudinary tüm resim depolama ve dönüştürmeyi yönetir. Quill.js zengin metin editörü, blog ve etkinlik içerikleri için kontrollü React bileşeni olarak entegre edilmiştir.",
      database:
        "Django ORM aracılığıyla yönetilen PostgreSQL ilişkisel veritabanı. Temel tablolar: `events`, `posts` (içerik_html olarak içerik), `sponsors`, `faq`. Yabancı anahtarlar ve kısıtlamalar veri bütünlüğünü sağlar.",
      api:
        "Django REST Framework ayrı kamuya açık ve admin uç nokta grupları sunar. Kamuya açık uç noktalar (salt okunur, auth yok): GET istekleri. Admin uç noktaları (yazma özellikli, token auth gerekli): POST, PATCH, DELETE işlemleri.",
      security:
        "Admin uç noktaları DRF Token Authentication kullanır. CORS yalnızca üretim Netlify alanından isteklere izin verecek şekilde yapılandırılmıştır. Tüm sırlar Render'daki ortam değişkenleri aracılığıyla yönetilir.",
      challenges:
        "Ana zorluk, Quill.js'i güvenilir bir kontrollü bileşen olarak entegre etmekti. Çözüm, saklanan HTML değerinin editör durumuyla senkronize kalmasını sağlayan debounce'lu onChange işleyicisiyle özel bir hook'a Quill'i sarar. XSS önleme için Quill çıktısı hem sunucu tarafında hem de DOMPurify ile istemci tarafında temizlenir.",
      role: "Tek geliştirici — sistem tasarımı, tam yığın uygulama, Cloudinary entegrasyonu, Netlify ve Render'da dağıtım yapılandırması.",
    },
  },

  // ── SWIPE IT ──────────────────────────────────────────────────────────────
  swipeIt: {
    stack: ["React Native", "Expo", "Firebase Auth", "Firebase Firestore", "Reanimated 2", "react-native-deck-swiper"],
    en: {
      overview:
        "SwipeBooks is a mobile book and movie discovery app using a Tinder-style swipe interaction model. The problem: traditional recommendation lists have low engagement — users scroll past items without actively deciding. By forcing a binary left/right decision per item, the app drives deliberate preference expression, which accumulates into a weekly popularity ranking system.",
      architecture:
        "React Native (Expo) frontend with Firebase as the backend. User sessions are managed via Firebase Auth. Swipe decisions (like/dislike/save) are written to Firestore asynchronously — the swipe animation completes without blocking on the write confirmation, keeping the UI at 60fps. A weekly ranking algorithm aggregates like counts from the `items` collection and runs client-side to avoid requiring cloud functions.",
      database:
        "Firestore structure: `items` collection (content metadata, total_likes, weekly_likes), `users/{uid}/favorites` subcollection (saved items), `users/{uid}/history` subcollection (swipe decisions per item ID). Weekly like counts are stored as a separate field, reset by a client-side scheduled counter, enabling popularity ranking without backend infrastructure.",
      security:
        "Firebase Auth gates all Firestore access. Security rules ensure users can only write to their own `users/{uid}` subcollections. The `items` collection is read-only for all authenticated users. A client-side profanity filter validates any user-submitted content before Firestore writes.",
      challenges:
        "The swipe card animation initially suffered from dropped frames on Android because gesture handling and transform calculations were running on the JavaScript thread. The fix moved card transform calculations to the UI thread using Reanimated 2's `useSharedValue` and `runOnUI`, achieving smooth 60fps swipe animations even on mid-range devices.",
      role: "Sole developer — UI/UX design, swipe gesture implementation, Firebase architecture, ranking algorithm.",
    },
    tr: {
      overview:
        "SwipeBooks, Tinder tarzı kaydırma etkileşim modeli kullanan mobil kitap ve film keşif uygulamasıdır. Geleneksel öneri listelerinin düşük etkileşim sorununu çözer: her öğe için zorunlu sol/sağ kararı kasıtlı tercih ifadesini yönlendirir ve haftalık popülerlik sıralamasına birikir.",
      architecture:
        "Firebase backend ile React Native (Expo) frontend. Kaydırma kararları (beğenme/beğenmeme/kaydetme) Firestore'a asenkron yazılır — kaydırma animasyonu yazma onayını beklemeden tamamlanır, UI'yi 60fps'te tutar.",
      database:
        "Firestore yapısı: `items` koleksiyonu (içerik meta verileri, toplam_beğeniler, haftalık_beğeniler), `users/{uid}/favorites` ve `users/{uid}/history` alt koleksiyonları.",
      security:
        "Firebase Auth tüm Firestore erişimini kapıya kilitler. Güvenlik kuralları kullanıcıların yalnızca kendi `users/{uid}` alt koleksiyonlarına yazabilmesini sağlar.",
      challenges:
        "Kaydırma kartı animasyonu başlangıçta Android'de kare düşüşü yaşadı çünkü jest işleme ve dönüşüm hesaplamalar JavaScript thread'inde çalışıyordu. Düzeltme, Reanimated 2'nin `useSharedValue` ve `runOnUI` kullanarak kart dönüşüm hesaplamalarını UI thread'ine taşıdı.",
      role: "Tek geliştirici — UI/UX tasarımı, kaydırma jest uygulaması, Firebase mimarisi, sıralama algoritması.",
    },
  },

  // ── MINDCAPS ──────────────────────────────────────────────────────────────
  mindCaps: {
    stack: ["React Native", "Expo", "Flask", "Python", "OpenAI API", "REST API", "JSON"],
    en: {
      overview:
        "MindCaps is an AI-powered mobile application providing empathetic psychological support through natural language. Users describe their emotional state in free text; the app responds with structured emotional analysis and a supportive message generated by a language model. The system is architected to keep all AI processing server-side — the mobile app is a thin client that handles input and presentation only.",
      architecture:
        "Two-tier architecture. The React Native (Expo) frontend handles user input, local state, and rendering. All AI processing is delegated to a Flask REST API backend. The mobile app sends user text to a POST endpoint; the Flask server constructs a structured prompt, calls the OpenAI API, parses the JSON response, validates the schema, and returns formatted emotional analysis to the client. This separation keeps the API key fully server-side and allows the model to be swapped without any client updates.",
      api:
        "The Flask API exposes a single primary endpoint: `POST /analyze` accepting `{text: string, language: 'tr'|'en'}`. The server builds a system prompt instructing the model to return a strict JSON object with fields: `emotions` (object with 0–1 scores for joy, sadness, fear, anger, disgust, surprise), `support_message` (empathetic response text), and `future_self_message` (motivational note). The response is schema-validated before being returned to the client.",
      security:
        "The OpenAI API key is stored as a server-side environment variable — never exposed to the mobile client. User text is processed in memory only and not persisted or logged. The Flask API enforces CORS restricted to the mobile app's origin in production.",
      challenges:
        "The main challenge was prompt engineering for consistent JSON output. The language model occasionally returned explanatory prose around the JSON block, breaking the parser. The solution was a strict system prompt with an explicit JSON schema example, plus a regex-based extraction fallback that isolates the JSON block even when surrounded by model-generated prose.",
      role: "Full-stack developer — React Native UI, Flask API design, prompt engineering, OpenAI integration.",
    },
    tr: {
      overview:
        "MindCaps, doğal dil aracılığıyla empatik psikolojik destek sağlayan yapay zeka destekli mobil uygulamadır. Kullanıcılar duygusal durumlarını serbest metin olarak tanımlar; uygulama bir dil modeli tarafından üretilen yapılandırılmış duygusal analiz ve destekleyici mesajla yanıt verir.",
      architecture:
        "İki katmanlı mimari. React Native (Expo) frontend kullanıcı girişi, yerel durum ve görüntülemeyi yönetir. Tüm AI işleme Flask REST API backend'ine devredilir. Ayrım, API anahtarını tamamen sunucu tarafında tutar ve modelin istemci güncellemesi olmadan değiştirilmesine olanak sağlar.",
      api:
        "Flask API tek birincil uç nokta sunar: `{text, language}` kabul eden `POST /analyze`. Sunucu, modele kesin bir JSON nesnesi döndürmesini söyleyen bir sistem istemi oluşturur: `emotions` (0–1 skorlar), `support_message` ve `future_self_message`.",
      security:
        "OpenAI API anahtarı sunucu tarafı ortam değişkeni olarak saklanır. Kullanıcı metni yalnızca bellekte işlenir, kalıcı hale getirilmez veya kaydedilmez.",
      challenges:
        "Ana zorluk, tutarlı JSON çıktısı için hızlı mühendislikti. Model bazen JSON bloğunun etrafında açıklayıcı nesir döndürüyordu. Çözüm, nesir tarafından çevrildiğinde bile JSON bloğunu izole eden regex tabanlı çıkarma geri dönüşüyle desteklenen açık JSON şeması örneği içeren sıkı sistem istemiydi.",
      role: "Full-stack geliştirici — React Native UI, Flask API tasarımı, hızlı mühendislik, OpenAI entegrasyonu.",
    },
  },

  // ── FRIDGE ────────────────────────────────────────────────────────────────
  fridge: {
    stack: ["React Native", "Expo", "TheMealDB API", "REST API", "Fetch API"],
    en: {
      overview:
        "A utility mobile app solving the everyday problem of deciding what to cook with available ingredients. Users input ingredients they have on hand; the app queries TheMealDB's public REST API and returns matching recipes with full step-by-step instructions. Architectural focus was on clean API integration, UI clarity, and graceful error handling with a zero-backend footprint.",
      architecture:
        "Stateless React Native (Expo) app with no custom backend. Ingredient state is managed locally with useState. On search, a GET request hits TheMealDB's `/filter.php?i={ingredient}` endpoint, returning an array of meal IDs. Each ID is then resolved to full recipe detail via `/lookup.php?i={id}`. API calls use the Fetch API with async/await. Responses are normalized into a consistent recipe object shape before being passed to the UI layer.",
      api:
        "TheMealDB public REST API (free tier). Two-stage call chain: (1) ingredient filter returns meal summary list, (2) detail lookup fetches full recipe per ID including ingredient list and instructions. Error handling covers empty result sets, network failures, malformed responses, and API rate limits.",
      challenges:
        "TheMealDB's free tier doesn't support multi-ingredient AND-filtering in a single query. The workaround: filter by the primary ingredient server-side, then perform client-side intersection against the remaining entered ingredients. This yields a ranked best-match list where recipes matching more of the entered ingredients appear first.",
      role: "Sole developer — UI design, API integration, state management, error handling.",
    },
    tr: {
      overview:
        "Mevcut malzemelerle ne pişireceğine karar verme sorununu çözen pratik bir mobil uygulama. Kullanıcılar ellerindeki malzemeleri girer; uygulama TheMealDB'nin kamuya açık REST API'sini sorgular ve tam adım adım talimatlarla eşleşen tarifleri döndürür.",
      architecture:
        "Özel backend olmayan durumsuz React Native (Expo) uygulaması. Malzeme durumu useState ile yerel olarak yönetilir. Aramada iki aşamalı API çağrı zinciri: TheMealDB filtre uç noktası → her ID için detay araması.",
      api:
        "TheMealDB kamuya açık REST API (ücretsiz katman). İki aşamalı çağrı zinciri: (1) malzeme filtresi yemek özeti listesi döndürür, (2) detay araması ID başına tam tarif getirir.",
      challenges:
        "TheMealDB'nin ücretsiz katmanı tek sorguda çoklu malzeme AND filtrelemesini desteklemiyor. Geçici çözüm: birincil malzemeye göre sunucu tarafında filtrele, ardından kalan girilen malzemelere karşı istemci tarafı kesişim gerçekleştir.",
      role: "Tek geliştirici — UI tasarımı, API entegrasyonu, durum yönetimi, hata işleme.",
    },
  },

  // ── EMAIL ─────────────────────────────────────────────────────────────────
  email: {
    stack: ["Python", "Flask", "smtplib", "APScheduler", "HTML/CSS"],
    en: {
      overview:
        "A scheduled email automation tool built as a Flask web application. It addresses the need for recurring email delivery (weekly reports, reminders, follow-ups) without a commercial platform. Users configure sender, recipient, subject, body, and send schedule through a web form; the server handles SMTP delivery via APScheduler at the configured interval.",
      architecture:
        "Single-server Flask application. The web form POSTs configuration data to a Flask route, which validates input and registers the job with APScheduler — a Python scheduling library running in-process. APScheduler maintains an in-memory job store and triggers the smtplib send function at the configured interval (one-time, weekly, monthly, or yearly). No frontend framework — all UI is server-rendered Jinja2.",
      security:
        "SMTP credentials are read from environment variables and never hardcoded. SSL is enforced for all SMTP connections via smtplib.SMTP_SSL. Input validation prevents empty recipient fields and malformed email addresses before job scheduling.",
      challenges:
        "APScheduler's default in-memory job store means scheduled jobs are lost on server restart. For production, this would be addressed with a SQLAlchemy-backed persistent job store or a proper task queue (Celery + Redis). The current implementation targets local and demo use cases where persistence across restarts is not required.",
      role: "Sole developer — Flask architecture, SMTP integration, APScheduler configuration, frontend form.",
    },
    tr: {
      overview:
        "Flask web uygulaması olarak oluşturulmuş zamanlanmış e-posta otomasyon aracı. Tekrarlayan e-posta teslimi ihtiyacını ticari platform olmadan karşılar. Kullanıcılar bir web formu aracılığıyla gönderici, alıcı, konu, içerik ve gönderme zamanlamasını yapılandırır.",
      architecture:
        "Tek sunucu Flask uygulaması. Web formu yapılandırma verilerini bir Flask rotasına POST eder; bu rota girişi doğrular ve APScheduler'a iş kaydeder. APScheduler bellek içi iş deposu tutar ve yapılandırılan aralıkta smtplib gönderme fonksiyonunu tetikler.",
      security:
        "SMTP kimlik bilgileri ortam değişkenlerinden okunur, sabit kodlanmaz. Tüm SMTP bağlantıları için smtplib.SMTP_SSL aracılığıyla SSL zorunludur.",
      challenges:
        "APScheduler'ın varsayılan bellek içi iş deposu, sunucu yeniden başlatmalarında zamanlanmış işlerin kaybolduğu anlamına gelir. Üretim için SQLAlchemy destekli kalıcı iş deposu veya Celery + Redis gerekir.",
      role: "Tek geliştirici — Flask mimarisi, SMTP entegrasyonu, APScheduler yapılandırması, frontend formu.",
    },
  },

  // ── PDF MERGER ────────────────────────────────────────────────────────────
  pdf: {
    stack: ["Python", "PyPDF2", "Tkinter"],
    en: {
      overview:
        "A desktop GUI utility for merging multiple PDF files into a single document. Targets non-technical users who need PDF merging without online tools or paid software. Distributed as a standalone Python application with a Tkinter GUI — no installation required beyond Python.",
      architecture:
        "Single-file Python application. Tkinter provides the GUI layer (file selection dialog, reorder list, output path selector). PyPDF2's PdfMerger class handles the PDF manipulation layer — it appends pages from each selected file sequentially and writes the merged output to the user-chosen path. The two layers are connected by a simple event handler on the merge button.",
      challenges:
        "Handling PDFs with inconsistent page orientations and embedded fonts without corruption. PyPDF2 preserves page metadata during merge, but some landscape-orientation pages required explicit rotation normalization before appending to prevent incorrect rendering in the output document.",
      role: "Sole developer.",
    },
    tr: {
      overview:
        "Birden fazla PDF dosyasını tek bir belgede birleştirmek için masaüstü GUI yardımcı programı. Çevrimiçi araçlar veya ücretli yazılım olmadan PDF birleştirmeye ihtiyaç duyan teknik olmayan kullanıcıları hedefler.",
      architecture:
        "Tek dosya Python uygulaması. Tkinter GUI katmanını sağlar. PyPDF2'nin PdfMerger sınıfı PDF manipülasyon katmanını yönetir — seçilen her dosyadan sayfaları sırayla ekler ve birleştirilmiş çıktıyı kullanıcının seçtiği yola yazar.",
      challenges:
        "Tutarsız sayfa yönlendirmeleri ve gömülü yazı tipleriyle PDF'leri bozulmadan işlemek. Bazı yatay yönlendirmeli sayfalar açık döndürme normalleştirmesi gerektirdi.",
      role: "Tek geliştirici.",
    },
  },

  // ── BLOG ──────────────────────────────────────────────────────────────────
  blog: {
    stack: ["Python", "Flask", "SQLite", "Jinja2", "Werkzeug", "HTML/CSS"],
    en: {
      overview:
        "A multi-user blog platform with category-based post organization, built as a full-stack Flask application. The project demonstrates server-side rendering with Jinja2, session-based authentication, and relational data modeling with SQLite — covering the complete web development lifecycle from schema design to deployed feature.",
      architecture:
        "Flask MVC-pattern application. Routes handle HTTP requests, delegate business logic to SQLite via Python's sqlite3 module, and pass data to Jinja2 templates for server-side rendering. User sessions are managed with Flask's signed cookie session object. No frontend framework — all rendering is server-side, keeping the stack self-contained.",
      database:
        "SQLite two-table schema: `users` (id INTEGER PK, username TEXT UNIQUE, password_hash TEXT) and `posts` (id INTEGER PK, title TEXT, content TEXT, category TEXT, author_id INTEGER FK → users.id, created_at DATETIME). The foreign key relationship between posts and users enforces authorship integrity. Category filtering runs as a WHERE clause on the posts query.",
      security:
        "Passwords are hashed with Werkzeug's `generate_password_hash` (PBKDF2-HMAC-SHA256) before storage — plaintext passwords are never persisted. Session tokens use Flask's secret key for HMAC signing. Write-operation routes are protected with a login_required decorator that redirects unauthenticated requests.",
      role: "Sole developer — full-stack implementation, schema design, auth system.",
    },
    tr: {
      overview:
        "Kategori tabanlı gönderi organizasyonuyla çok kullanıcılı blog platformu. Proje, Jinja2 ile sunucu tarafı render, oturum tabanlı kimlik doğrulama ve SQLite ile ilişkisel veri modellemeyi gösterir.",
      architecture:
        "Flask MVC-deseni uygulaması. Rotalar HTTP isteklerini yönetir, iş mantığını sqlite3 modülü aracılığıyla SQLite'a delege eder ve sunucu tarafı render için Jinja2 şablonlarına veri iletir.",
      database:
        "SQLite iki tablo şeması: `users` ve `posts` (yazar_id FK ile). Yabancı anahtar ilişkisi yazarlık bütünlüğünü sağlar.",
      security:
        "Parolalar Werkzeug'un `generate_password_hash` (PBKDF2-HMAC-SHA256) ile hash'lenir. Oturum token'ları Flask'ın gizli anahtarıyla HMAC imzalama kullanır.",
      role: "Tek geliştirici — tam yığın uygulama, şema tasarımı, auth sistemi.",
    },
  },

  // ── TO-DO ─────────────────────────────────────────────────────────────────
  todo: {
    stack: ["Python", "Flask", "SQLite", "Jinja2", "Werkzeug"],
    en: {
      overview:
        "A personal task management web application with user accounts and fully isolated per-user data. Built to demonstrate user-scoped data access, CRUD operations, and authentication in a Flask/SQLite stack.",
      architecture:
        "Server-side rendered Flask application. User authentication uses Flask sessions. All database operations go through Python's sqlite3 module. Notes are user-scoped — every query filters by the logged-in user's ID, enforcing data isolation at the query level rather than relying solely on application-layer access control.",
      database:
        "Two-table SQLite schema: `users` (id, username, password_hash) and `notes` (id, content, user_id FK → users.id, created_at). Every CRUD query on notes includes `WHERE user_id = ?` parameterized with the session user ID, preventing cross-user data access.",
      security:
        "Passwords hashed with Werkzeug. All note queries are parameterized to prevent SQL injection. Session-based auth with Flask's HMAC-signed cookie ensures user ID cannot be tampered with client-side.",
      role: "Sole developer.",
    },
    tr: {
      overview:
        "Kullanıcı hesapları ve tamamen izole edilmiş kullanıcı başına veriye sahip kişisel görev yönetimi web uygulaması.",
      architecture:
        "Sunucu tarafı render Flask uygulaması. Tüm not sorguları `WHERE user_id = ?` içerir.",
      database:
        "İki tablo SQLite şeması: `users` ve `notes` (user_id FK ile). Her CRUD sorgusu çapraz kullanıcı veri erişimini engelleyen `WHERE user_id = ?` içerir.",
      security:
        "Werkzeug ile hash'lenmiş parolalar. Tüm not sorguları SQL enjeksiyonunu önlemek için parametrelendirilmiştir.",
      role: "Tek geliştirici.",
    },
  },

  // ── TV ────────────────────────────────────────────────────────────────────
  tv: {
    stack: ["React Native", "Expo", "WebView", "React Navigation"],
    en: {
      overview:
        "A mobile TV channel browser that aggregates live stream sources into a clean, minimal interface. Solves the fragmentation of multiple stream URLs across different sources — users browse a curated channel list in one place and watch streams via an embedded WebView player.",
      architecture:
        "React Native (Expo) with React Navigation for tab/stack structure. Channel data is stored as a local JSON configuration file — no backend required. The channel list uses FlatList for performant rendering. The WebView component renders the selected stream URL in a full-screen player view with standard media controls.",
      challenges:
        "WebView stream compatibility varies significantly by source — some streams require custom User-Agent headers to bypass bot-detection or geo-restrictions. These were handled via WebView's injectedJavaScript and userAgent props, configuring each channel entry in the JSON config with any required headers.",
      role: "Sole developer.",
    },
    tr: {
      overview:
        "Canlı yayın kaynaklarını temiz, minimal bir arayüzde toplayan mobil TV kanal tarayıcısı. Kullanıcılar seçilmiş kanal listesini tek bir yerden tarar ve gömülü WebView oynatıcısı aracılığıyla yayınları izler.",
      architecture:
        "Tab/stack yapısı için React Navigation ile React Native (Expo). Kanal verileri yerel JSON yapılandırma dosyası olarak saklanır. WebView bileşeni seçilen yayın URL'sini tam ekran oynatıcı görünümünde render eder.",
      challenges:
        "WebView yayın uyumluluğu kaynağa göre önemli ölçüde değişir. Bazı yayınlar özel User-Agent başlıkları gerektirir; bunlar WebView'ın injectedJavaScript ve userAgent özellikleri aracılığıyla yönetildi.",
      role: "Tek geliştirici.",
    },
  },

  // ── SMART HOME ────────────────────────────────────────────────────────────
  smartHome: {
    stack: ["ESP32", "C++", "Arduino IDE", "Flask", "Python", "SQLite", "HC-SR04", "Web Speech API"],
    en: {
      overview:
        "A home security prototype that detects motion via ultrasonic sensor and delivers real-time alerts through a Flask web dashboard with browser-based voice notifications. Demonstrates end-to-end IoT integration: embedded firmware, HTTP communication over a local network, server-side event logging, and a live-updating web interface.",
      architecture:
        "Two-component system. The ESP32 runs C++ firmware continuously polling an HC-SR04 ultrasonic sensor. When motion is detected (distance threshold crossed for a debounce window), it sends an HTTP POST to the Flask server's `/alert` endpoint over the local Wi-Fi network. Flask logs the event to SQLite and serves the web dashboard. The dashboard polls `/api/alerts` every 2 seconds for new events and uses the browser's SpeechSynthesis API to deliver voice notifications when new alerts arrive.",
      database:
        "SQLite single-table schema: `alerts` (id INTEGER PK, timestamp DATETIME, distance_cm REAL, location_label TEXT). Indexed on timestamp for efficient recency-ordered queries on the dashboard feed.",
      security:
        "The system operates on a local network — no public internet exposure. The Flask server binds to the local IP and the ESP32 is configured with the server's static local address. No authentication is implemented in this prototype; production deployment would require network-level access control.",
      challenges:
        "The ESP32 HTTP client occasionally timed out during Flask server restarts, causing silent alert loss. The firmware implements an exponential backoff retry loop (max 3 attempts, 500ms/1s/2s delays) for failed POST requests, ensuring no motion events are silently dropped.",
      role: "Full system developer — C++ firmware, Flask backend, SQLite schema, web dashboard, hardware assembly.",
    },
    tr: {
      overview:
        "Ultrasonik sensör aracılığıyla hareketi algılayan ve tarayıcı tabanlı sesli bildirimlerle Flask web panosu üzerinden gerçek zamanlı uyarılar sunan akıllı ev güvenlik prototipi.",
      architecture:
        "İki bileşenli sistem. ESP32, HC-SR04 ultrasonik sensörü sürekli yoklayan C++ firmware çalıştırır. Hareket algılandığında Flask sunucusunun `/alert` uç noktasına HTTP POST gönderir. Flask olayı SQLite'a kaydeder ve web panosuna hizmet eder.",
      database:
        "SQLite tek tablo şeması: `alerts` (id, zaman_damgası, mesafe_cm, konum_etiketi). Zaman damgasına göre indekslendi.",
      security:
        "Sistem yerel ağda çalışır — kamuya açık internet maruziyeti yok. Bu prototipte kimlik doğrulama uygulanmamıştır.",
      challenges:
        "ESP32 HTTP istemcisi Flask sunucu yeniden başlatmaları sırasında zaman zaman timeout oluyordu. Firmware üstel geri çekilme yeniden deneme döngüsü uygular (max 3 deneme).",
      role: "Tam sistem geliştiricisi — C++ firmware, Flask backend, SQLite şeması, web panosu, donanım montajı.",
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// UI COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

const TechBadge = ({ label }) => (
  <span
    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border"
    style={{
      background: "rgba(20,184,166,0.08)",
      borderColor: "rgba(20,184,166,0.25)",
      color: "#2dd4bf",
      fontFamily: "'DM Sans', sans-serif",
    }}
  >
    {label}
  </span>
);

const Section = ({ icon, title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="mb-5"
  >
    <h3
      className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-2.5"
      style={{ color: "#14b8a6", fontFamily: "'Syne', sans-serif" }}
    >
      <span>{icon}</span>
      {title}
    </h3>
    <div
      className="rounded-xl p-4 text-sm leading-relaxed"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        color: "#9ca3af",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {children}
    </div>
  </motion.div>
);

// ─────────────────────────────────────────────────────────────────────────────
// LIGHTBOX COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const Lightbox = ({ src, onClose, onPrev, onNext, total, current }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ background: "rgba(0,0,0,0.92)" }}
        onClick={onClose}
      >
        {/* Prev button */}
        {total > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 md:left-8 z-10 flex items-center justify-center rounded-full transition-all"
            style={{
              width: 44, height: 44,
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              fontSize: 20,
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(20,184,166,0.4)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
          >
            ‹
          </button>
        )}

        {/* Image */}
        <motion.img
          key={src}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          src={src}
          alt="enlarged"
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: "90vw",
            maxHeight: "90vh",
            objectFit: "contain",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.1)",
            imageRendering: "high-quality",
          }}
        />

        {/* Next button */}
        {total > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 md:right-8 z-10 flex items-center justify-center rounded-full transition-all"
            style={{
              width: 44, height: 44,
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              fontSize: 20,
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(20,184,166,0.4)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
          >
            ›
          </button>
        )}

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex items-center justify-center rounded-full transition-all"
          style={{
            width: 36, height: 36,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#9ca3af",
            fontSize: 18,
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#14b8a6"}
          onMouseLeave={(e) => e.currentTarget.style.color = "#9ca3af"}
        >
          ×
        </button>

        {/* Counter */}
        {total > 1 && (
          <div
            className="absolute bottom-6 text-sm"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}
          >
            {current + 1} / {total}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const ProjectDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { t, language } = useLanguage();

  const {
    projectId,
    screenshots: stateScreenshots = {},
    demoVideo: stateDemoVideo,
    hardwareDemoVideo: stateHardwareDemoVideo,
    github: stateGithub,
    liveUrl: stateLiveUrl,
  } = location.state || {};

  const projectData = t.projects?.[id];
  const projectIdToUse = projectId || id;
  const meta = projectMeta[id];
  const metaLang = meta?.[language] || meta?.en;

  const normalizeScreenshots = (s) => {
    if (!s) return {};
    if (Array.isArray(s)) return { web: s };
    return { hardware: s.hardware || [], web: s.web || [], mobile: s.mobile || [] };
  };

  const screenshots = useMemo(() => {
    return Object.keys(stateScreenshots).length
      ? normalizeScreenshots(stateScreenshots)
      : normalizeScreenshots(projectData?.screenshots);
  }, [stateScreenshots, projectData]);

  const demoVideo = stateDemoVideo || projectData?.demoVideo;
  const hardwareDemoVideo = stateHardwareDemoVideo || projectData?.hardwareDemoVideo;
  const github = stateGithub || projectData?.github;
  const liveUrl = stateLiveUrl || projectData?.liveUrl;
  const title = projectData?.title || "";

  const [showVideo, setShowVideo] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState("mobile");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Custom nav refs for Swiper
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperInstanceRef = useRef(null);

  useEffect(() => {
    if (!projectIdToUse || !projectData) navigate("/", { replace: true });
  }, [projectIdToUse, projectData, navigate]);

  const hasViews =
    screenshots &&
    (screenshots.hardware?.length > 0 ||
      screenshots.web?.length > 0 ||
      screenshots.mobile?.length > 0);

  useEffect(() => {
    if (!hasViews) return;
    if (screenshots.mobile?.length > 0) setViewMode("mobile");
    else if (screenshots.web?.length > 0) setViewMode("web");
    else if (screenshots.hardware?.length > 0) setViewMode("hardware");
  }, [screenshots, hasViews]);

  useEffect(() => {
    setActiveIndex(0);
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.slideToLoop(0);
    }
  }, [viewMode]);

  const currentScreenshots =
    hasViews && screenshots[viewMode] ? screenshots[viewMode] : [];

  // Lightbox handlers
  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const lightboxPrev = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + currentScreenshots.length) % currentScreenshots.length);
  }, [currentScreenshots.length]);

  const lightboxNext = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % currentScreenshots.length);
  }, [currentScreenshots.length]);

  // Section labels
  const labels =
    language === "tr"
      ? {
          overview: "Proje Tanımı",
          architecture: "Sistem Mimarisi",
          database: "Veritabanı Tasarımı",
          api: "API Yapısı",
          security: "Güvenlik",
          performance: "Performans",
          challenges: "Zorluklar & Çözümler",
          role: "Rolüm",
        }
      : {
          overview: "Project Overview",
          architecture: "System Architecture",
          database: "Database Design",
          api: "API Structure",
          security: "Security",
          performance: "Performance Optimization",
          challenges: "Challenges & Solutions",
          role: "My Role",
        };

  const icons = {
    overview: "🎯",
    architecture: "🏗️",
    database: "🗄️",
    api: "🔌",
    security: "🔒",
    performance: "⚡",
    challenges: "🧩",
    role: "👤",
  };

  return (
    <div style={{ backgroundColor: "#0b1120", minHeight: "100vh" }}>
      {/* Swiper custom nav styles */}
      <style>{`
        .custom-swiper-prev,
        .custom-swiper-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(20,184,166,0.15);
          border: 1px solid rgba(20,184,166,0.4);
          color: #2dd4bf;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          user-select: none;
        }
        .custom-swiper-prev { left: 8px; }
        .custom-swiper-next { right: 8px; }
        .custom-swiper-prev:hover,
        .custom-swiper-next:hover {
          background: rgba(20,184,166,0.35);
          color: #fff;
        }
        .custom-swiper-prev.swiper-button-disabled,
        .custom-swiper-next.swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .screenshot-slide {
          cursor: zoom-in;
        }
        .screenshot-slide img {
          transition: transform 0.2s;
        }
        .screenshot-slide:hover img {
          transform: scale(1.01);
        }
      `}</style>

      <section
        className="px-4 md:px-10 max-w-7xl mx-auto pb-20"
        style={{ paddingTop: "88px" }}
      >
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-sm transition-colors group"
          style={{ color: "#6b7280" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#14b8a6")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
        >
          <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
          {t.projectDetail?.back || "Back"}
        </button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {title}
          </h1>

          {meta?.stack && (
            <div className="flex flex-wrap gap-2 mb-5">
              {meta.stack.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: "#14b8a6",
                  color: "#111827",
                  boxShadow: "0 4px 20px rgba(20,184,166,0.25)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#2dd4bf")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#14b8a6")}
              >
                {t.projectDetail?.liveDemo || "Live Demo 🚀"}
              </a>
            )}
            {github && typeof github === "object" && (
              <>
                {github.web && (
                  <a href={github.web} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-sm transition-all border"
                    style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", color: "#9ca3af" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(20,184,166,0.4)"; e.currentTarget.style.color = "#14b8a6"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#9ca3af"; }}
                  >
                    {t.projectDetail.githubWeb}
                  </a>
                )}
                {github.mobile && (
                  <a href={github.mobile} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-sm transition-all border"
                    style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", color: "#9ca3af" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(20,184,166,0.4)"; e.currentTarget.style.color = "#14b8a6"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#9ca3af"; }}
                  >
                    {t.projectDetail.githubMobile}
                  </a>
                )}
              </>
            )}
            {github && typeof github === "string" && (
              <a href={github} target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-sm transition-all border"
                style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", color: "#9ca3af" }}
              >
                GitHub
              </a>
            )}
            {demoVideo && (
              <button onClick={() => setShowVideo("system")}
                className="px-4 py-2 rounded-xl text-sm transition-all border"
                style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", color: "#9ca3af" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(20,184,166,0.4)"; e.currentTarget.style.color = "#14b8a6"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#9ca3af"; }}
              >
                {t.projectDetail.demoVideo}
              </button>
            )}
            {hardwareDemoVideo && (
              <button onClick={() => setShowVideo("hardware")}
                className="px-4 py-2 rounded-xl text-sm transition-all border"
                style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", color: "#9ca3af" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(20,184,166,0.4)"; e.currentTarget.style.color = "#14b8a6"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#9ca3af"; }}
              >
                {t.projectDetail.hardwareDemo}
              </button>
            )}
          </div>
        </motion.div>

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">

          {/* LEFT — Screenshots */}
          <div className="xl:sticky xl:top-24">
            {/* View toggle */}
            {hasViews &&
              (screenshots.hardware?.length > 0 || screenshots.web?.length > 0) &&
              screenshots.mobile?.length > 0 && (
              <div
                className="flex mb-4 rounded-xl overflow-hidden w-fit border"
                style={{ background: "#111827", borderColor: "rgba(255,255,255,0.06)" }}
              >
                {screenshots.hardware?.length > 0 && (
                  <button type="button" onClick={() => setViewMode("hardware")}
                    className="px-4 py-2 text-sm transition-colors"
                    style={viewMode === "hardware" ? { background: "#0d9488", color: "#fff" } : { color: "#6b7280" }}>
                    {t.projectDetail.viewHardware}
                  </button>
                )}
                {screenshots.web?.length > 0 && (
                  <button type="button" onClick={() => setViewMode("web")}
                    className="px-4 py-2 text-sm transition-colors"
                    style={viewMode === "web" ? { background: "#0d9488", color: "#fff" } : { color: "#6b7280" }}>
                    {t.projectDetail.viewWeb}
                  </button>
                )}
                {screenshots.mobile?.length > 0 && (
                  <button type="button" onClick={() => setViewMode("mobile")}
                    className="px-4 py-2 text-sm transition-colors"
                    style={viewMode === "mobile" ? { background: "#0d9488", color: "#fff" } : { color: "#6b7280" }}>
                    {t.projectDetail.viewMobile}
                  </button>
                )}
              </div>
            )}

            {currentScreenshots.length > 0 && (
              <>
                <div className="relative" style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <Swiper
                    key={`${projectIdToUse}-${viewMode}`}
                    modules={[Navigation, Autoplay]}
                    autoplay={{ delay: 3200, disableOnInteraction: false }}
                    loop
                    navigation={{
                      prevEl: prevRef.current,
                      nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                      swiper.params.navigation.prevEl = prevRef.current;
                      swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    onSwiper={(swiper) => {
                      swiperInstanceRef.current = swiper;
                    }}
                    onSlideChange={(s) => setActiveIndex(s.realIndex)}
                  >
                    {currentScreenshots.map((src, i) => (
                      <SwiperSlide key={i} className="screenshot-slide">
                        <img
                          src={src}
                          alt={`screenshot-${i}`}
                          onClick={() => openLightbox(i)}
                          style={{
                            width: "100%",
                            objectFit: "contain",
                            maxHeight: "600px",
                            background: "#0b1120",
                            display: "block",
                          }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Custom navigation arrows */}
                  <button ref={prevRef} className="custom-swiper-prev">‹</button>
                  <button ref={nextRef} className="custom-swiper-next">›</button>
                </div>

                {/* Zoom hint */}
                <p className="text-center mt-2 text-xs" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "'DM Sans', sans-serif" }}>
                  {language === "tr" ? "Büyütmek için resme tıklayın" : "Click image to enlarge"}
                </p>

                {/* Dots */}
                <div className="flex justify-center mt-2 gap-2 flex-wrap">
                  {currentScreenshots.map((_, i) => (
                    <span
                      key={i}
                      onClick={() => {
                        if (swiperInstanceRef.current) swiperInstanceRef.current.slideToLoop(i);
                      }}
                      className="cursor-pointer transition-all rounded-full"
                      style={{
                        width: i === activeIndex ? "20px" : "8px",
                        height: "8px",
                        background: i === activeIndex ? "#14b8a6" : "rgba(255,255,255,0.2)",
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* RIGHT — Technical sections */}
          <div>
            {metaLang ? (
              <>
                {metaLang.overview     && <Section icon={icons.overview}     title={labels.overview}>     {metaLang.overview}</Section>}
                {metaLang.architecture && <Section icon={icons.architecture} title={labels.architecture}> {metaLang.architecture}</Section>}
                {metaLang.database     && <Section icon={icons.database}     title={labels.database}>     {metaLang.database}</Section>}
                {metaLang.api          && <Section icon={icons.api}          title={labels.api}>          {metaLang.api}</Section>}
                {metaLang.security     && <Section icon={icons.security}     title={labels.security}>     {metaLang.security}</Section>}
                {metaLang.performance  && <Section icon={icons.performance}  title={labels.performance}>  {metaLang.performance}</Section>}
                {metaLang.challenges   && <Section icon={icons.challenges}   title={labels.challenges}>   {metaLang.challenges}</Section>}
                {metaLang.role         && <Section icon={icons.role}         title={labels.role}>         {metaLang.role}</Section>}
              </>
            ) : (
              <Section icon="📋" title="Description">
                <p className="whitespace-pre-wrap">{projectData?.desc}</p>
              </Section>
            )}
          </div>
        </div>
      </section>

      {/* Video modal */}
      {showVideo && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 px-4"
          style={{ background: "rgba(0,0,0,0.88)" }}
          onClick={() => setShowVideo(null)}
        >
          <div
            className="relative rounded-xl p-4"
            style={{ background: "#111827", border: "1px solid rgba(255,255,255,0.1)", maxWidth: "90vw" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(null)}
              className="absolute -top-4 -right-4 rounded-full w-9 h-9 flex items-center justify-center text-lg font-bold transition-colors"
              style={{ background: "#1f2937", border: "1px solid rgba(255,255,255,0.1)", color: "#9ca3af" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#14b8a6")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              ×
            </button>
            <video controls autoPlay className="rounded-lg" style={{ maxWidth: "85vw", maxHeight: "80vh" }}>
              <source src={showVideo === "system" ? demoVideo : hardwareDemoVideo} type="video/mp4" />
              {t.projectDetail?.videoError}
            </video>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          src={currentScreenshots[lightboxIndex]}
          current={lightboxIndex}
          total={currentScreenshots.length}
          onClose={closeLightbox}
          onPrev={lightboxPrev}
          onNext={lightboxNext}
        />
      )}
    </div>
  );
};

export default ProjectDetail;