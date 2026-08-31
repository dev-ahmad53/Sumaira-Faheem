import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants, type MotionProps } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";

import { ThemeToggle } from "../lightswind/theme-toggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Career", href: "#career" },
  { name: "Skills", href: "#education" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    if (lenis) {
      lenis.scrollTo(id);
    } else {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const menuVariants: Variants = {
    open: {
      clipPath: "circle(1500px at 90% 5%)",
      transition: { type: "spring", stiffness: 20, restDelta: 2 },
    },
    closed: {
      clipPath: "circle(0px at 90% 5%)",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };

  const listVariants: Variants = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  const itemVariants: Variants = {
    open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
    closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } },
  };

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0, transition: { duration: 0.4 } }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        >
          <div className="glass-panel w-full max-w-7xl rounded-[2rem] flex items-center justify-between px-6 py-4 shadow-xl border border-primary/20">
            {/* Logo */}
            <a
              onClick={() => handleScrollTo("#hero")}
              className="cursor-pointer font-extrabold text-lg flex items-center gap-3 group select-none"
            >
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-[#A66E58] via-[#C48B71] to-[#F3DB9A] p-[1.5px] shadow-lg group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                <img 
                  src="/sumaira.jpg" 
                  alt="Sumaira Faheem" 
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold tracking-tight text-foreground text-sm leading-none group-hover:text-primary transition-colors font-serif">
                  Sumaira Faheem
                </span>
                <span className="text-[9px] font-bold text-muted-foreground tracking-widest uppercase mt-0.5">
                  Graphic Designer
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-1 justify-center">
              <ul className="flex space-x-7">
                {navItems.map((item) => (
                  <motion.li key={item.name} className="relative group text-sm font-medium text-muted-foreground transition-colors">
                    <a onClick={() => handleScrollTo(item.href)} className="cursor-pointer hover:text-foreground">
                      {item.name}
                    </a>
                    <motion.span
                      className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-primary rounded-full shadow-[0_0_8px_rgba(166,110,88,0.8)]"
                      initial={{ width: 0, x: "-50%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Actions: WhatsApp CTA, Theme & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/923242428418"
                target="_blank"
                rel="noreferrer"
                className="hidden lg:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold text-xs hover:bg-primary/20 transition-all"
              >
                <span>WhatsApp: 0324-2428418</span>
              </a>

              <ThemeToggle />

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden text-foreground hover:text-primary transition-colors p-2"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

          {/* Mobile Sidebar */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                {...({
                  initial: "closed",
                  animate: "open",
                  exit: "closed",
                  variants: menuVariants,
                } as MotionProps)}
                className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center"
              >
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-8 right-8 text-foreground"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <X size={32} />
                </motion.button>

                <motion.ul
                  {...({ variants: listVariants } as MotionProps)}
                  className="flex flex-col items-center justify-center h-full space-y-7"
                >
                  {navItems.map((item) => (
                    <motion.li key={item.name} {...({ variants: itemVariants } as MotionProps)}>
                      <a
                        onClick={() => handleScrollTo(item.href)}
                        className="text-3xl font-bold text-muted-foreground hover:text-primary hover:tracking-wider transition-all cursor-pointer font-serif"
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                  <motion.li {...({ variants: itemVariants } as MotionProps)}>
                    <a
                      href="https://wa.me/923242428418"
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-bold text-primary cursor-pointer"
                    >
                      📱 0324-2428418
                    </a>
                  </motion.li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
