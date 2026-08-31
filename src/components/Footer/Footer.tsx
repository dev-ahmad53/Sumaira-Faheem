import { motion } from "framer-motion";
import { ArrowUp, Heart, Linkedin, Mail, Phone } from "lucide-react";
import { MorphingText } from "../lightswind/morphing-text";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const morphingTexts = [
    "Sumaira Faheem",
    "Brand Specialist",
    "Visual Storyteller",
    "Canva & Adobe Pro",
    "Karachi, Pakistan",
  ];

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Career", href: "#career" },
    { name: "Skills", href: "#education" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Phone, href: "https://wa.me/923242428418", label: "WhatsApp: 0324-2428418" },
    { icon: () => <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>, href: "https://www.facebook.com/SumairaFaheemDigitalMarketer", label: "Facebook" },
    { icon: Mail, href: "mailto:sumerabaig88@gmail.com", label: "Email: sumerabaig88@gmail.com" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="w-full relative z-10 pt-16 pb-28 md:pb-36 bg-[#2B1004]/[0.04] dark:bg-[#140702]/90 backdrop-blur-2xl border-t-2 border-[#2B1004] shadow-2xl rounded-t-[3rem] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-10">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b-2 border-[#2B1004]/20 dark:border-[#FFF2EF]/20">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-[#A66E58] via-[#C48B71] to-[#F3DB9A] p-[1.5px] shadow-lg overflow-hidden">
              <img 
                src="/sumaira.jpg" 
                alt="Sumaira Faheem" 
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold tracking-tight text-[#2B1004] dark:text-[#FFF2EF] text-lg leading-none font-serif">
                Sumaira Faheem
              </span>
              <span className="text-[10px] font-bold text-[#A66E58] tracking-widest uppercase mt-1">
                Graphic Designer • Karachi, PK
              </span>
            </div>
          </div>

          {/* Back to top button with 100% visible text */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2B1004] border-2 border-[#2B1004] text-xs font-extrabold text-[#FFF2EF] hover:bg-[#C48B71] hover:text-[#2B1004] transition-all shadow-md cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Center Banner: Morphing Text Container */}
        <div className="py-12 px-6 rounded-[2.5rem] bg-[#2B1004] border-2 border-[#2B1004] text-center flex flex-col items-center justify-center my-2 shadow-2xl text-[#FFF2EF]">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#F3DB9A] mb-4 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 shadow-sm">
            "Don't Just Create Content, Create Impact."
          </span>

          <MorphingText
            texts={morphingTexts}
            morphTime={1.6}
            cooldownTime={0.8}
            className="text-3xl md:text-5xl lg:text-6xl text-[#FFF2EF] font-extrabold min-h-[70px] text-center font-serif"
          />
        </div>

        {/* Quick Navigation Links */}
        <div className="py-6 border-t-2 border-[#2B1004]/20 dark:border-[#FFF2EF]/20 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm font-bold text-[#2B1004] dark:text-[#FFF2EF]">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="hover:text-[#A66E58] transition-colors hover:scale-105 transform duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Bottom Row: Social Icons & Copyright */}
        <div className="pt-6 border-t-2 border-[#2B1004]/20 dark:border-[#FFF2EF]/20 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#2B1004] dark:text-[#FFF2EF] font-semibold">
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
                  className="w-10 h-10 rounded-full bg-[#2B1004] border-2 border-[#2B1004] flex items-center justify-center text-[#FFF2EF] hover:bg-[#C48B71] hover:text-[#2B1004] hover:scale-110 transition-all shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Copyright notice */}
          <div className="flex items-center gap-1.5 font-bold text-center md:text-right">
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
