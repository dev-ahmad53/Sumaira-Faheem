import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, ArrowUp, Heart } from "lucide-react";
import { MorphingText } from "../lightswind/morphing-text";

export const Footer = () => {
  const morphingTexts = [
    "Graphic Designer",
    "Brand Identity Specialist",
    "Social Media Marketer",
    "Canva & Adobe Pro",
    "Sumaira Faheem",
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Career", href: "#career" },
    { name: "Skills", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Phone, href: "https://wa.me/923242428418", label: "WhatsApp: 0324-2428418" },
    { icon: Mail, href: "mailto:sumerabaig88@gmail.com", label: "Email: sumerabaig88@gmail.com" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="w-full relative z-10 pt-16 pb-28 md:pb-36 bg-[#2B1004]/[0.03] dark:bg-[#160804]/90 backdrop-blur-2xl border-t-2 border-[#2B1004]/25 dark:border-[#FFF2EF]/25 shadow-2xl rounded-t-[3rem] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-10">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#2B1004]/20 dark:border-[#FFF2EF]/20">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[#A66E58] via-[#C48B71] to-[#F3DB9A] p-[1.5px] shadow-lg overflow-hidden">
              <img 
                src="/sumaira.jpg" 
                alt="Sumaira Faheem" 
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold tracking-tight text-foreground text-base leading-none font-serif">
                Sumaira Faheem
              </span>
              <span className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase mt-0.5">
                Graphic Designer • Karachi, PK
              </span>
            </div>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel border-2 border-[#2B1004]/20 dark:border-[#FFF2EF]/20 text-xs font-bold text-foreground hover:text-primary hover:border-primary/40 transition-all shadow-sm cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Center Banner: Morphing Text Container */}
        <div className="py-12 px-6 rounded-3xl bg-black/[0.015] dark:bg-white/[0.02] border-2 border-[#2B1004]/20 dark:border-[#FFF2EF]/20 text-center flex flex-col items-center justify-center my-2 shadow-sm">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary mb-3 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 shadow-sm">
            "Don't Just Create Content, Create Impact."
          </span>

          <MorphingText
            texts={morphingTexts}
            morphTime={1.6}
            cooldownTime={0.8}
            className="text-3xl md:text-5xl lg:text-6xl text-foreground font-extrabold min-h-[70px] text-center font-serif"
          />
        </div>

        {/* Quick Navigation Links */}
        <div className="py-6 border-t border-[#2B1004]/20 dark:border-[#FFF2EF]/20 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm font-semibold text-muted-foreground">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="hover:text-foreground transition-colors hover:scale-105 transform duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Bottom Row: Social Icons & Copyright */}
        <div className="pt-6 border-t border-[#2B1004]/20 dark:border-[#FFF2EF]/20 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full glass-panel border-2 border-[#2B1004]/20 dark:border-[#FFF2EF]/20 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:scale-110 transition-all shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Copyright notice */}
          <div className="flex items-center gap-1.5 font-medium text-center md:text-right">
            <span>© {new Date().getFullYear()} Sumaira Faheem. Portfolio 2025.</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline-block" />
            <span>Karachi, PK</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
