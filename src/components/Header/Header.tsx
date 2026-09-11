import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants, type MotionProps } from "framer-motion";
import { Menu, X } from "lucide-react";
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

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const shouldShow = currentScrollY < lastScrollY || currentScrollY < 100;
      setShowHeader(shouldShow);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuVariants: Variants = {
    closed: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
    open: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const navListVariants: Variants = {
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
          <div className="w-full max-w-7xl rounded-[2rem] flex items-center justify-between px-6 py-4 shadow-2xl bg-[#2B1004] border-2 border-[#2B1004] text-[#FFF2EF] backdrop-blur-2xl">
            {/* Logo */}
            <a
              onClick={() => handleScrollTo("#hero")}
              className="cursor-pointer font-extrabold text-lg flex items-center gap-3 group select-none"
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[#A66E58] via-[#C48B71] to-[#F3DB9A] p-[1.5px] shadow-lg group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                <img 
                  src="/sumaira.jpg" 
                  alt="Sumaira Faheem" 
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold tracking-tight text-[#FFF2EF] text-sm leading-none group-hover:text-[#F3DB9A] transition-colors font-serif">
                  Sumaira Faheem
                </span>
                <span className="text-[9px] font-bold text-[#C48B71] tracking-widest uppercase mt-0.5">
                  Graphic Designer
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-1 justify-center">
              <ul className="flex space-x-7">
                {navItems.map((item) => (
                  <motion.li key={item.name} className="relative group text-sm font-semibold transition-colors">
                    <a 
                      onClick={() => handleScrollTo(item.href)} 
                      className="cursor-pointer text-[#FFF2EF]/85 hover:text-[#FFF2EF] transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                    <motion.span
                      className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-[#C48B71] rounded-full shadow-[0_0_8px_rgba(196,139,113,0.8)]"
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
                className="hidden lg:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#FFF2EF] font-bold text-xs transition-all shadow-sm"
              >
                <span>WhatsApp: 0324-2428418</span>
              </a>

              <div className="text-[#FFF2EF]">
                <ThemeToggle />
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden text-[#FFF2EF] hover:text-[#C48B71] transition-colors p-2 cursor-pointer"
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
                className="fixed inset-0 z-40 bg-[#2B1004]/98 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center text-[#FFF2EF]"
              >
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-8 right-8 text-[#FFF2EF] hover:text-[#C48B71] p-2"
                >
                  <X size={28} />
                </motion.button>
                <motion.ul
                  {...({
                    variants: navListVariants,
                    initial: "closed",
                    animate: "open",
                    exit: "closed",
                  } as MotionProps)}
                  className="space-y-6 text-center"
                >
                  {navItems.map((item) => (
                    <motion.li
                      key={item.name}
                      {...({ variants: itemVariants } as MotionProps)}
                    >
                      <a
                        onClick={() => handleScrollTo(item.href)}
                        className="text-2xl font-bold text-[#FFF2EF] hover:text-[#C48B71] transition-colors cursor-pointer"
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
                      className="inline-block mt-4 px-6 py-2.5 rounded-full bg-[#C48B71] text-[#2B1004] font-bold text-sm"
                    >
                      WhatsApp: 0324-2428418
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
};

export default Header;
