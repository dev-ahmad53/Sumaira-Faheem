import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Mail, Phone } from "lucide-react";
import TechStackSection from "../TechStackSection/TechStackSection";
import { Button } from "../lightswind/button";
import { Badge } from "../lightswind/badge";
import { HangingIdCard } from "../lightswind/HangingIdCard";
import { AuroraTextEffect } from "../lightswind/aurora-text-effect";
import { DotPattern } from "../lightswind/dot-pattern";

export const HeroSection = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[100vh] flex flex-col pt-12 md:pt-16 overflow-hidden bg-background">
      {/* Background Dot Pattern with Radial Vignette Shade */}
      <DotPattern width={16} height={16} cx={1} cy={1} cr={1} glow />
      
      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 pb-12">
        
        {/* Left Content */}
        <motion.div 
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <Badge variant="outline" size="lg" className="gap-2.5 py-1.5 px-4 glass-panel border-primary/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs font-semibold text-foreground/80">Available for Brand & Social Media Projects</span>
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2 font-serif text-foreground">
              Hi, I'm
            </h1>
            
            {/* Light Theme: Clean Vibrant Terracotta/Espresso Gradient Text */}
            <div className="block dark:hidden">
              <span className="bg-gradient-to-r from-[#8A4F3D] via-[#A66E58] to-[#D4AF37] bg-clip-text text-transparent font-extrabold text-[clamp(2.75rem,6vw,5.2rem)] leading-none tracking-tight block pb-2 select-none font-serif">
                Sumaira Faheem
              </span>
            </div>

            {/* Dark Theme: Rich Terracotta Rose Gold Aurora Text Effect */}
            <div className="hidden dark:block">
              <AuroraTextEffect
                text="Sumaira Faheem"
                fontSize="clamp(2.75rem, 6vw, 5.2rem)"
                className="bg-transparent overflow-visible p-0 justify-start font-serif"
                textClassName="bg-gradient-to-r from-[#C48B71] via-[#E8D4C8] to-[#F3DB9A] bg-clip-text text-transparent pb-2 font-extrabold font-serif"
              />
            </div>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed w-full font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Turning simple ideas into memorable designs that connect with people. Specializing in branding, social media posts, carousel graphics, and creative marketing visuals.
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="rounded-full px-7 h-12 bg-primary text-white font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(166,110,88,0.35)] hover:shadow-[0_0_30px_rgba(166,110,88,0.55)] hover:-translate-y-1 cursor-pointer"
            >
              View Portfolio <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToContact}
              className="rounded-full px-7 h-12 glass-panel text-foreground font-bold flex items-center gap-2 hover:bg-primary/10 transition-all hover:-translate-y-1 border-primary/30 cursor-pointer"
            >
              Contact Me <Download className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center gap-5 justify-center md:justify-start w-full md:w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a href="https://wa.me/923242428418" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-emerald-500 transition-colors hover:-translate-y-1 transform duration-200" title="WhatsApp: 0324-2428418">
              <Phone className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/SumairaFaheemDigitalMarketer" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200" title="Facebook Profile">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="mailto:sumerabaig88@gmail.com" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200" title="Email: sumerabaig88@gmail.com">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200" title="LinkedIn Profile">
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Visual Hanging ID Card in Chocolate & Terracotta */}
        <motion.div 
          className="flex-1 w-full max-w-md relative flex justify-center items-center py-2"
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <HangingIdCard
            name="Sumaira Faheem"
            role="Graphic Designer & Brand Specialist"
            badgeId="SF-2025-PRO"
            accentColor="#A66E58"
            ropeLength={75}
            ropeColor="#3A2724"
            cardWidth="w-72 sm:w-80 md:w-84"
          >
            <div className="flex flex-col h-full bg-card w-full border border-primary/25 rounded-3xl overflow-hidden shadow-2xl">
              {/* Card Header Banner with Avatar */}
              <div className="relative px-5 pt-7 pb-6 flex flex-col items-center bg-gradient-to-br from-[#180F0E] via-[#241715] to-[#3A2724] text-white overflow-hidden">
                {/* Circuit background overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

                {/* Profile Photo with Dual Glowing Ring */}
                <div className="mt-1 relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-[#A66E58] via-[#E8D4C8] to-[#F3DB9A] backdrop-blur-md shadow-2xl border border-white/40 overflow-hidden group">
                  <img 
                    src="/sumaira.jpg" 
                    alt="Sumaira Faheem" 
                    className="w-full h-full object-cover rounded-full filter contrast-105"
                    loading="eager"
                  />
                  <div className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-md" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col items-center text-center bg-card text-card-foreground flex-1 gap-3">
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight text-foreground font-serif">Sumaira Faheem</h3>
                  <div className="inline-flex items-center gap-1.5 mt-1 px-3 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold">
                    <span>Graphic Designer & Visual Marketer</span>
                  </div>
                </div>

                <div className="w-full border-t border-border/60 my-0.5" />

                {/* Details 2x2 Grid */}
                <div className="grid grid-cols-2 gap-2.5 w-full text-left bg-muted/40 p-3 rounded-xl border border-border/50">
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Specialty</span>
                    <span className="font-bold text-foreground text-xs">Branding & Social Ads</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Location</span>
                    <span className="font-bold text-foreground text-xs">Karachi, Pakistan</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Projects</span>
                    <span className="font-bold text-foreground text-xs">350+ Completed</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Status</span>
                    <span className="font-bold text-emerald-500 text-xs flex items-center gap-1">
                      ● Available
                    </span>
                  </div>
                </div>

                {/* HD Barcode & Auth Tag */}
                <div className="flex flex-col items-center mt-1 w-full gap-1">
                  <div className="flex gap-[2.5px] items-end h-7 px-3 py-0.5 bg-white/90 dark:bg-black/40 rounded-lg border border-border/40 w-full justify-center">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-foreground rounded-[1px]"
                        style={{
                          width: i % 4 === 0 ? "3.5px" : i % 2 === 0 ? "2px" : "1px",
                          height: `${50 + Math.sin(i * 1.4) * 45}%`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between w-full px-1 text-[10px]">
                    <span className="font-mono font-bold tracking-widest text-primary">
                      SF-2025-PRO
                    </span>
                    <span className="text-muted-foreground font-semibold text-[9px] uppercase tracking-wider">
                      CANVA & ADOBE PRO
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </HangingIdCard>
        </motion.div>

      </div>

      {/* Marquee appended natively to the bottom to span Full Width */}
      <div className="w-full relative z-10 mt-auto">
        <TechStackSection />
      </div>
    </section>
  );
};
