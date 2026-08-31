import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Syeda Brina Adnan",
      role: "Branding & Business Client",
      content: "Sumaira created complete branding for my business, including the logo, Facebook cover, and designs. Her work is creative, consistent, and gave my brand a professional identity.",
      initials: "SB",
    },
    {
      name: "Rahma Tariq",
      role: "Homeschooling Educator & Creator",
      content: "Sumaira designed creative social media posts and YouTube banners for my homeschooling live sessions. Her work is professional, aligned with my vision, and truly enhanced my brand presence.",
      initials: "RT",
    },
    {
      name: "Hayaat Fragrance",
      role: "Luxury Perfumes Brand",
      content: "Sumaira Faheem gave Hayat Fragrance a classy and professional branding look. She is so cooperative and understanding.",
      initials: "HF",
    },
    {
      name: "Subhan Rashed",
      role: "Business Founder",
      content: "Clear and professional Designs, Delivered before timeline. I recommend her for any serious branding and graphic design work.",
      initials: "SR",
    },
  ];

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-2 border-[#2B1004] dark:border-[#FFF2EF]/30 text-primary text-xs font-bold uppercase tracking-wider mb-3">
          <span>Happy Clients Say</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 font-serif">
          Client <span className="text-gradient-primary">Testimonials</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Verified feedback from real brands and founders featured in my official portfolio.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((test, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-panel p-8 rounded-3xl border border-2 border-[#2B1004] dark:border-[#FFF2EF]/30 flex flex-col relative overflow-hidden group hover:border-primary/30 transition-colors duration-500 justify-between"
          >
            {/* Subtle glow orb */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none" />
            
            {/* Quote Icon Background */}
            <div className="absolute top-6 right-8 text-primary/10 select-none">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11l-2 2v-3H4V4h6v7zm10 0l-2 2v-3h-4V4h6v7z" />
              </svg>
            </div>

            <p className="text-muted-foreground leading-relaxed flex-grow relative z-10 italic mb-8 text-sm">
              "{test.content}"
            </p>

            <div className="flex items-center gap-3.5 relative z-10 mt-auto pt-4 border-t border-border/50">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center font-bold text-primary text-xs shrink-0 font-serif">
                {test.initials}
              </div>
              <div>
                <h4 className="text-foreground font-bold text-sm font-serif">{test.name}</h4>
                <p className="text-primary text-xs font-medium">{test.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
