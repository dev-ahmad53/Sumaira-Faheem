import { motion } from "framer-motion";
import { Sparkles, Video } from "lucide-react";

const technologies = [
  { 
    name: "Canva", 
    iconType: "image",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" 
  },
  { 
    name: "AI", 
    iconType: "lucide",
    IconComp: Sparkles 
  },
  { 
    name: "AI Video Creation", 
    iconType: "lucide",
    IconComp: Video 
  },
];

const TechStackSection = () => {
  // Repeat array multiple times for smooth infinite marquee loop
  const marqueeItems = [
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
  ];

  return (
    <div className="w-full py-5 border-t-2 border-b-2 border-[#2B1004] bg-[#2B1004]/[0.03] dark:bg-[#FFF2EF]/[0.02] flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full overflow-hidden relative flex items-center"
      >
        {/* Gradients to fade edges smoothly */}
        <div className="absolute left-0 w-24 md:w-36 h-full bg-gradient-to-r from-[#FFF2EF] dark:from-[#140702] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 w-24 md:w-36 h-full bg-gradient-to-l from-[#FFF2EF] dark:from-[#140702] to-transparent z-10 pointer-events-none" />
        
        {/* Marquee Animation */}
        <div className="flex w-max animate-[marquee_20s_linear_infinite] whitespace-nowrap items-center hover:[animation-play-state:paused] py-1">
          {marqueeItems.map((tech, i) => (
            <div 
              key={i} 
              className="mx-3.5 px-6 py-2.5 rounded-full border-2 border-[#2B1004] bg-[#2B1004] text-[#FFF2EF] font-bold text-sm md:text-base flex items-center gap-3 transition-all hover:scale-105 shadow-md cursor-default shrink-0 group"
            >
              {tech.iconType === "image" ? (
                <img 
                  src={tech.iconSrc} 
                  alt={tech.name} 
                  className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300" 
                  loading="lazy"
                  decoding="async" 
                />
              ) : (
                <tech.IconComp className="w-5 h-5 text-[#F3DB9A] group-hover:scale-110 transition-transform duration-300" />
              )}
              <span className="tracking-wide text-xs md:text-sm font-extrabold">{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
};

export default TechStackSection;
