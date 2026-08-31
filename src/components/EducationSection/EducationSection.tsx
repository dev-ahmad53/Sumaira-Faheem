import { motion } from "framer-motion";
import { Award, Sparkles, Building2, Calendar, CheckCircle2 } from "lucide-react";
import { MagicCard } from "../lightswind/magic-card";
import SkillCategory from "./SkillCategory";

const education = [
  {
    degree: "Professional Graphic Design Certification",
    school: "Canva & Adobe Masterclass",
    year: "2023 - 2024",
    badge: "Verified Specialist",
    badgeIcon: Award,
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    icon: Sparkles,
    details: [
      "Advanced vector illustration, layout composition, typography pairings, and brand color psychology.",
      "Commercial packaging box dielines, luxury perfume label design, and photorealistic 3D mockups.",
      "High-engagement multi-slide educational carousels and conversion-driven social media ads."
    ]
  },
  {
    degree: "Digital Marketing & Brand Strategy",
    school: "Meta & Google Certified Digital Skills",
    year: "2022 - 2023",
    badge: "Certified Marketer",
    badgeIcon: Award,
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    icon: Award,
    details: [
      "Meta Ads creative optimization, visual funnel marketing, and brand audience targeting.",
      "E-commerce visual asset management, product listing graphics, and brand guideline generation.",
      "Client communication protocols, design brief analysis, and fast revision cycles."
    ]
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-24">
      {/* Top Header */}
      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2B1004]/10 border-2 border-[#2B1004] text-[#2B1004] dark:text-[#FFF2EF] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Expertise & Credentials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#2B1004] dark:text-[#FFF2EF] font-serif">
            Certifications & Design Mastery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and design mastery powering high-converting creative visuals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, i) => {
            const DegreeIcon = edu.icon;
            const BadgeIcon = edu.badgeIcon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <MagicCard
                  className="h-full p-8 rounded-[2.5rem] border-2 border-[#2B1004] bg-[#2B1004] text-[#FFF2EF] shadow-2xl"
                  gradientSize={300}
                  gradientColor="rgba(196, 139, 113, 0.18)"
                  gradientFrom="#C48B71"
                  gradientTo="#F3DB9A"
                >
                  <div className="flex flex-col h-full justify-between gap-6">
                    <div>
                      {/* Header with Icon and Distinction Badge */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 text-[#F3DB9A] flex items-center justify-center shadow-sm">
                          <DegreeIcon className="w-7 h-7" />
                        </div>
                        <span className={`px-3.5 py-1.5 rounded-full border text-xs font-extrabold flex items-center gap-1.5 shadow-sm ${edu.badgeColor}`}>
                          <BadgeIcon className="w-3.5 h-3.5" />
                          {edu.badge}
                        </span>
                      </div>

                      {/* Degree Title & Institution Meta */}
                      <h3 className="text-2xl font-extrabold text-[#FFF2EF] tracking-tight mb-2 font-serif">
                        {edu.degree}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#FFF2EF]/80 mb-6 pb-4 border-b border-white/15">
                        <span className="flex items-center gap-1.5 text-[#FFF2EF] font-bold">
                          <Building2 className="w-3.5 h-3.5 text-[#F3DB9A]" /> {edu.school}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5 font-mono text-[#F3DB9A] font-bold">
                          <Calendar className="w-3.5 h-3.5" /> {edu.year}
                        </span>
                      </div>

                      {/* Key Highlights List */}
                      <ul className="space-y-3.5">
                        {edu.details.map((detail, j) => (
                          <li key={j} className="text-sm text-[#FFF2EF]/85 flex items-start gap-3 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#F3DB9A] shrink-0 mt-0.5" />
                            <span className="text-[#FFF2EF]/90 font-medium">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Skill Arsenal Bars */}
        <SkillCategory />
      </div>
    </section>
  );
};
