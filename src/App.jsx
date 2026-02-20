// src/App.jsx
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes, Route, useLocation, Navigate,
} from "react-router-dom";

import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar  from "./components/Navbar.jsx";
import Footer  from "./components/Footer.jsx";

import Home          from "./pages/Home.jsx";
import About         from "./pages/About.jsx";
import Projects      from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Resume        from "./pages/Resume.jsx";
import Contact       from "./pages/Contact.jsx";
import NotFound      from "./pages/NotFound.jsx";

/* ─── Vines (only on wide screens, not on detail pages) ── */
const VinesWrapper = () => {
  const location = useLocation();
  const [showVines, setShowVines] = useState(window.innerWidth >= 1500);

  useEffect(() => {
    const fn = () => setShowVines(window.innerWidth >= 1500);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  if (location.pathname.startsWith("/project-detail") || !showVines) return null;

  return (
    <>
      <img src="/sarmasik.png" alt="" className="vine vine-left"  aria-hidden="true" />
      <img src="/sarmasik.png" alt="" className="vine vine-right" aria-hidden="true" />
    </>
  );
};

/* ─── Scroll to top on route change ─────────────────────── */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

/* ─── Main App ───────────────────────────────────────────── */
function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        {/* Root div — sets page background color */}
        <div
          className="relative min-h-screen text-gray-300"
          style={{ backgroundColor: "#0b1120" }}
        >
          {/* Vines sit at z-index:-1, purely decorative behind everything */}
          <VinesWrapper />

          {/* Content wrapper: solid bg so vines never bleed through text */}
          <div
            className="relative"
            style={{ zIndex: 1, backgroundColor: "#0b1120" }}
          >
            <Navbar />

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {/* Home has its own mesh-bg and NO solid bg — vines intentionally visible here */}
                    <Home />
                    {/* All other sections get solid bg via their wrapper */}
                    <div style={{ backgroundColor: "#0b1120" }}>
                      <About />
                      <Projects />
                      <Resume />
                      <Contact />
                    </div>
                  </>
                }
              />
              <Route path="/project-detail"     element={<Navigate to="/" replace />} />
              <Route path="/project-detail/:id" element={<ProjectDetail />} />
              <Route path="*"                   element={<NotFound />} />
            </Routes>

            <Footer />
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;