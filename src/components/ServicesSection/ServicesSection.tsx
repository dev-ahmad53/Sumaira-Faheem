import { motion } from "framer-motion";
import { PenTool, Sparkles, Megaphone, Package } from "lucide-react";
import { MagicCard } from "../lightswind/magic-card";

const services = [
  {
    icon: PenTool,
    title: "Social Media Post Design",
    description: "Custom Instagram & Facebook feed posts, story banners, YouTube covers, and promotional flyers tailored to engage audience and drive conversions.",
  },
  {
    icon: Sparkles,
    title: "Logo & Complete Brand Kits",
    description: "Memorable vector logos, monograms, harmonious brand color palettes, font pairings, visiting cards, and luxury brand identity guides.",
  },
  {
    icon: Megaphone,
    title: "Carousels & Ad Creatives",
    description: "Multi-slide swipeable educational carousels, billboard designs for international clients, and high-converting ad visuals.",
  },
  {
    icon: Package,
    title: "Product Packaging & Labels",
    description: "Classy perfume packaging boxes, cosmetic bottle labels, stickers, and thank-you cards for luxury e-commerce stores.",
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2B1004]/10 border-2 border-[#2B1004] text-[#2B1004] dark:text-[#FFF2EF] text-xs font-bold uppercase tracking-wider mb-3">
          <span>What I Offer</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#2B1004] dark:text-[#FFF2EF] font-serif">
          Signature Design Services
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Cohesive design and organic marketing solutions crafted to boost your brand's authority and visibility.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <MagicCard
                className="h-full p-8 rounded-[2.25rem] border-2 border-[#2B1004] bg-[#2B1004] text-[#FFF2EF] shadow-2xl transition-all hover:border-[#C48B71]"
                gradientSize={280}
                gradientColor="rgba(196, 139, 113, 0.22)"
                gradientFrom="#C48B71"
                gradientTo="#F3DB9A"
              >
                <div className="flex flex-col h-full justify-between gap-6">
                  <div>
                    {/* Icon Box with contrast border */}
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 text-[#FFF2EF] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#C48B71] group-hover:text-[#2B1004] transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#FFF2EF] tracking-tight font-serif">
                      {service.title}
                    </h3>
                    <p className="text-[#FFF2EF]/80 leading-relaxed text-base font-sans">
                      {service.description}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
