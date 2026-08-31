import { motion, AnimatePresence } from "framer-motion";
import {
  PenTool,
  Sparkles,
  Layers,
  Palette,
  Crown,
  Brain,
  Lightbulb,
  Users,
  Rocket,
  CheckCircle2,
} from "lucide-react";

export default function ProfessionalProfile() {
  const technicalSkills = [
    { name: "Canva Pro Mastery", level: 98, icon: Sparkles, color: "text-[#F3DB9A]" },
    { name: "Adobe Illustrator (Logos & Vectors)", level: 92, icon: PenTool, color: "text-[#C48B71]" },
    { name: "Adobe Photoshop (Banners & Mockups)", level: 90, icon: Palette, color: "text-[#E8D4C8]" },
    { name: "Meta Suite & Social Advertising", level: 88, icon: Layers, color: "text-emerald-400" },
    { name: "Brand Identity & Palette Architecture", level: 95, icon: Crown, color: "text-[#F3DB9A]" },
  ];

  const softSkills = [
    { name: "100% On-Time Delivery", icon: CheckCircle2, color: "text-emerald-300 border-emerald-400/40 bg-emerald-500/15" },
    { name: "Creative Problem Solving", icon: Brain, color: "text-[#F3DB9A] border-[#F3DB9A]/40 bg-white/10" },
    { name: "Client-Centric Revision Loop", icon: Users, color: "text-[#C48B71] border-[#C48B71]/40 bg-white/10" },
    { name: "Visual Hierarchy & Typography", icon: Lightbulb, color: "text-[#E8D4C8] border-[#E8D4C8]/40 bg-white/10" },
    { name: "Brand Storytelling", icon: Crown, color: "text-amber-300 border-amber-400/40 bg-amber-500/15" },
  ];

  return (
    <motion.section
      id="skills"
      className="space-y-8"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-[#2B1004] border-2 border-[#2B1004] flex items-center justify-center text-[#FFF2EF] shadow-md">
          <PenTool className="w-5 h-5" />
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight font-serif text-[#2B1004] dark:text-[#FFF2EF]">
          Software & Design Skills
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Technical Skills Card */}
        <div className="p-8 rounded-[2.5rem] border-2 border-[#2B1004] bg-[#2B1004] text-[#FFF2EF] shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/15">
            <h4 className="text-xl font-bold text-[#FFF2EF] flex items-center gap-2 font-serif">
              <Sparkles className="w-5 h-5 text-[#F3DB9A]" /> Design Arsenal
            </h4>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F3DB9A] bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
              Mastery
            </span>
          </div>

          <div className="space-y-6">
            {technicalSkills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div key={i} className="space-y-2.5">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-[#FFF2EF] flex items-center gap-2.5 font-bold">
                      <div className="p-1.5 rounded-lg bg-white/10 border border-white/20">
                        <Icon className={`w-4 h-4 ${skill.color}`} />
                      </div>
                      {skill.name}
                    </span>
                    <span className="font-mono font-bold text-[#F3DB9A] bg-white/10 px-2.5 py-0.5 rounded-full text-xs border border-white/20">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden border border-white/15 p-[1px]">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#A66E58] via-[#C48B71] to-[#F3DB9A] rounded-full relative shadow-[0_0_12px_rgba(243,219,154,0.5)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_8px_#fff]" />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills & Traits Card */}
        <div className="p-8 rounded-[2.5rem] border-2 border-[#2B1004] bg-[#2B1004] text-[#FFF2EF] shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/15">
              <h4 className="text-xl font-bold text-[#FFF2EF] flex items-center gap-2 font-serif">
                <Brain className="w-5 h-5 text-[#F3DB9A]" /> Professional Competencies
              </h4>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F3DB9A] bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
                Core Strengths
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <AnimatePresence>
                {softSkills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.08 }}
                      viewport={{ once: true }}
                      className={`px-4 py-2.5 rounded-2xl border font-bold text-sm flex items-center gap-2 shadow-sm hover:scale-105 transition-transform cursor-default ${skill.color}`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{skill.name}</span>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/15">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/15 flex items-start gap-3.5 shadow-sm">
              <div className="p-2 rounded-xl bg-white/10 text-[#F3DB9A] shrink-0 mt-0.5 border border-white/20">
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-[#FFF2EF] font-bold text-sm block mb-0.5 font-serif">
                  "Don't Just Create Content, Create Impact."
                </strong>
                <p className="text-xs text-[#FFF2EF]/80 leading-relaxed">
                  Dedicated to delivering high-impact, pixel-perfect visual brand identities that attract real clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
