import { motion } from "framer-motion";
import { Award, CheckCircle2, Layout, Users, Sparkles } from "lucide-react";

const stats = [
  { icon: <Layout className="w-6 h-6" />, label: "Designs Completed", value: "350+" },
  { icon: <Award className="w-6 h-6" />, label: "Contest Winning", value: "🏆 1st" },
  { icon: <Users className="w-6 h-6" />, label: "Client Satisfaction", value: "100%" },
  { icon: <CheckCircle2 className="w-6 h-6" />, label: "Brand Projects", value: "25+" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        className="flex flex-col lg:flex-row gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left: Sumaira Faheem Portrait Image Card */}
        <motion.div 
          className="w-full lg:w-5/12 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative group rounded-[2.5rem] p-3 bg-gradient-to-tr from-[#A66E58] via-[#E8D4C8] to-[#F3DB9A] shadow-2xl">
            <div className="relative rounded-[2.25rem] overflow-hidden bg-card aspect-[4/5] max-w-sm w-full">
              <img 
                src="/sumaira_hero.jpg" 
                alt="Sumaira Faheem - Graphic Designer & Brand Specialist"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider shadow">
                    Verified Designer
                  </span>
                  <span className="text-[11px] text-[#FFF2EF]/90 font-medium">Karachi, PK</span>
                </div>
                <h4 className="text-xl font-serif font-bold text-[#FFF2EF]">Sumaira Faheem</h4>
                <p className="text-xs text-[#E8D4C8] font-medium">Graphic Designer & Visual Brand Marketer</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Bio & Stats */}
        <div className="w-full lg:w-7/12 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Me • Portfolio 2025</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 font-serif">
              Turning Simple Ideas into <span className="text-gradient-primary">Memorable Brands</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I'm a graphic designer who enjoys turning simple ideas into designs that connect with people. 
              I specialize in branding, social media, and marketing visuals, keeping my style clean and creative. 
              For me, design isn't just about looking good — it's about making your brand memorable.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              I also use modern AI & design tools to generate fresh concepts and speed up delivery. Based in 
              Karachi, Pakistan, serving e-commerce brands, medical clinics, and creators globally.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="p-5 rounded-2xl border-2 border-[#2B1004] bg-[#2B1004] text-[#FFF2EF] shadow-xl hover:border-[#C48B71] transition-all group relative overflow-hidden text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-primary mb-3 p-2.5 bg-white/10 border border-white/20 text-[#FFF2EF] w-max rounded-xl mx-auto">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#FFF2EF] mb-1 font-serif">{stat.value}</h3>
                <p className="text-[11px] font-semibold text-[#FFF2EF]/75 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
