import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { ServicesSection } from "./components/ServicesSection/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection";
import { EducationSection } from "./components/EducationSection/EducationSection";
import { CareerTimeline } from "./components/CareerSection/CareerTimeline";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { Footer } from "./components/Footer/Footer";
import { ProjectsPage } from "./components/ProjectsPage/ProjectsPage";
import ReactLenis from "lenis/react";
import { Home, User, GraduationCap, Briefcase, FolderKanban, Send, MessageSquare, Grid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Dock from "./components/lightswind/dock";
import { SmoothCursor } from "./components/lightswind/smooth-cursor";

function App() {
  const [showDock, setShowDock] = useState(false);
  const [currentPage, setCurrentPage] = useState<"home" | "projects">("home");

  useEffect(() => {
    // Check initial hash
    if (window.location.hash === "#all-projects" || window.location.pathname === "/projects") {
      setCurrentPage("projects");
    }

    const handlePopState = () => {
      if (window.location.hash === "#all-projects" || window.location.pathname === "/projects") {
        setCurrentPage("projects");
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const shouldShow = currentScrollY > lastScrollY && currentScrollY > window.innerHeight * 0.4;
      const isTop = currentScrollY < window.innerHeight * 0.4;

      if (shouldShow) {
        setShowDock(true);
      } else if (isTop) {
        setShowDock(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToHome = () => {
    setCurrentPage("home");
    window.location.hash = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToProjects = () => {
    setCurrentPage("projects");
    window.location.hash = "all-projects";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    if (currentPage === "projects") {
      setCurrentPage("home");
      window.location.hash = "";
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const dockItems = [
    { icon: <Home size={20} />, label: "Home", onClick: () => scrollToSection("hero") },
    { icon: <User size={20} />, label: "About", onClick: () => scrollToSection("about") },
    { icon: <FolderKanban size={20} />, label: "Projects", onClick: () => scrollToSection("projects") },
    { icon: <Grid size={20} />, label: "Gallery", onClick: navigateToProjects },
    { icon: <Briefcase size={20} />, label: "Career", onClick: () => scrollToSection("career") },
    { icon: <GraduationCap size={20} />, label: "Skills", onClick: () => scrollToSection("education") },
    { icon: <MessageSquare size={20} />, label: "Reviews", onClick: () => scrollToSection("testimonials") },
    { icon: <Send size={20} />, label: "Contact", onClick: () => scrollToSection("contact") },
  ];

  return (
    <div className="bg-[#FFF2EF] dark:bg-[#0C0300] min-h-screen relative overflow-x-hidden selection:bg-primary/30 selection:text-foreground transition-colors duration-300">
      <SmoothCursor glowEffect showTrail trailLength={4} color="#C48B71" />
      <ReactLenis root options={{ smoothWheel: true, duration: 1.2 }}>
        
        {currentPage === "projects" ? (
          <ProjectsPage onBackToHome={navigateToHome} />
        ) : (
          <>
            <Header onOpenProjectsPage={navigateToProjects} />

            <main className="w-full flex flex-col pt-10 border-none">
              <HeroSection onOpenProjectsPage={navigateToProjects} />
              <AboutSection />
              <ServicesSection />
              <ProjectsSection onOpenProjectsPage={navigateToProjects} />
              <CareerTimeline />
              <EducationSection />
              <TestimonialsSection />
              <ContactSection />
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating Dock */}
            <AnimatePresence>
              {showDock && (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="fixed bottom-3 left-0 right-0 z-[999] hidden md:block"
                >
                  <Dock
                    items={dockItems}
                    panelHeight={58}
                    baseItemSize={46}
                    magnification={68}
                    distance={180}
                    itemBorderColor="rgba(196,139,113,0.3)"
                    multiBorder
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </ReactLenis>
    </div>
  );
}

export default App;
