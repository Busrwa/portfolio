// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';

const VinesWrapper = () => {
  const location = useLocation();

  if (location.pathname === "/project-detail") return null;

  const [showVines, setShowVines] = useState(window.innerWidth >= 1500);

  useEffect(() => {
    const handleResize = () => setShowVines(window.innerWidth >= 1500);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!showVines) return null;

  return (
    <>
      <img src="/sarmasik.png" alt="Sarmaşık Sol" className="vine vine-left" />
      <img src="/sarmasik.png" alt="Sarmaşık Sağ" className="vine vine-right" />
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />

        <div className="bg-gray-900 text-gray-300 min-h-screen relative">
          <VinesWrapper />

          <div className="relative z-10">
            <Navbar />

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <About />
                    <Projects />
                    <Resume />
                    <Contact />
                  </>
                }
              />
              <Route path="/project-detail" element={<ProjectDetail />} />
            </Routes>

            <Footer />
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;