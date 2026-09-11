import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Award, FolderArchive, ArrowRight } from "lucide-react";

export const ProjectsSection = ({ onOpenArchive }: { onOpenArchive?: () => void }) => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2B1004]/10 border-2 border-[#2B1004] text-[#2B1004] dark:text-[#FFF2EF] text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#A66E58]" />
          <span>Real Projects • Portfolio 2024–2025</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#2B1004] dark:text-[#FFF2EF] font-serif">
          Featured Client Works
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Handpicked signature projects. You can also explore the complete 120+ asset Google Drive archive below!
        </p>
      </motion.div>

      {/* 12-Column Full-Width Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
        
        {/* Card 1: Hayat Fragrance (7 Cols) */}
        <motion.div
          className="md:col-span-7 rounded-[2.5rem] p-8 bg-[#2B1004] text-[#FFF2EF] border-2 border-[#2B1004] shadow-2xl relative overflow-hidden group flex flex-col justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#FFF2EF] text-xs font-bold uppercase tracking-wider">
              Luxury Fragrance Branding
            </span>
            <span className="text-[#F3DB9A] text-xs font-bold">2024 Edition</span>
          </div>

          <div className="my-4">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#FFF2EF] mb-3 font-serif">
              Hayat Fragrance • Complete Brand & Packaging Kit
            </h3>
            <p className="text-[#FFF2EF]/85 leading-relaxed text-sm md:text-base mb-6">
              Full visual identity crafted for a premium perfume house: gold-foil vector logos, bespoke perfume box packaging, bottle stickers, and luxury social launch creatives.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Brand Identity", "Box Packaging", "Adobe Illustrator", "Bottle Mockups", "Gold Foil Vector"].map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-lg bg-white/10 text-[#FFF2EF] font-medium border border-white/15">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/15 flex items-center justify-between mt-4">
            <span className="text-xs font-bold text-[#F3DB9A]">Client: Hayat Fragrance PK</span>
            <a href="https://wa.me/923242428418?text=Hello%20Sumaira,%20I%20loved%20the%20Hayat%20Fragrance%20branding%20project!" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-[#FFF2EF] hover:text-[#F3DB9A] transition-colors">
              <span>Order Similar</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Card 2: Infinity Touch Award Winner (5 Cols) */}
        <motion.div
          className="md:col-span-5 rounded-[2.5rem] p-8 bg-[#2B1004] text-[#FFF2EF] border-2 border-[#2B1004] shadow-2xl relative overflow-hidden group flex flex-col justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold">
              <Award className="w-3.5 h-3.5" />
              1st Prize Winner 🏆
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold text-[#FFF2EF] mb-3 font-serif">
              Infinity Touch • 14th August Laptop Campaign
            </h3>
            <p className="text-[#FFF2EF]/85 leading-relaxed text-sm mb-4">
              Awarded 1st place in the national Graphic Design Contest for crafting patriotic, high-converting promotional banners and social media ads.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Contest Winner", "Social Ads", "Photoshop", "Typography"].map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-lg bg-white/10 text-[#FFF2EF] font-medium border border-white/15">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/15 flex items-center justify-between">
            <span className="text-xs font-bold text-[#F3DB9A]">Client: Infinity Touch</span>
            <span className="text-xs font-bold text-emerald-400">Awarded #1</span>
          </div>
        </motion.div>

        {/* Card 3: Secret Glow Skincare (5 Cols) */}
        <motion.div
          className="md:col-span-5 rounded-[2.5rem] p-8 bg-[#2B1004] text-[#FFF2EF] border-2 border-[#2B1004] shadow-2xl relative overflow-hidden group flex flex-col justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#FFF2EF] text-xs font-bold uppercase tracking-wider">
              Beauty & Cosmetics Suite
            </span>
            <span className="text-xs font-bold text-[#F3DB9A]">29 Assets</span>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#FFF2EF] mb-2 font-serif">
              Secret Glow • Organic Skincare
            </h3>
            <p className="text-[#FFF2EF]/85 leading-relaxed text-sm mb-4">
              Aesthetic natural beauty product feature kits, Instagram promotional grids, and glowing skin marketing creatives.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Skincare Posts", "Canva Pro", "Packaging", "Cosmetics"].map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-lg bg-white/10 text-[#FFF2EF] font-medium border border-white/15">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/15 flex items-center justify-between mt-4">
            <span className="text-xs font-bold text-[#F3DB9A]">Client: Secret Glow</span>
            <a href="https://drive.google.com/drive/folders/1nBpqQLJabeVnpS4mB-vCAv3gfi_8UqpZ" target="_blank" rel="noreferrer" className="text-xs font-bold text-[#FFF2EF] hover:text-[#F3DB9A] flex items-center gap-1">
              <span>View Folder</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Card 4: Linksols & Personal Branding (7 Cols) */}
        <motion.div
          className="md:col-span-7 rounded-[2.5rem] p-8 bg-[#2B1004] text-[#FFF2EF] border-2 border-[#2B1004] shadow-2xl relative overflow-hidden group flex flex-col justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#FFF2EF] text-xs font-bold uppercase tracking-wider">
              Tech Agency & Viral Carousels
            </span>
            <span className="text-[#F3DB9A] text-xs font-bold">Multi-Brand</span>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#FFF2EF] mb-2 font-serif">
              Linksols IT & Rahma Tariq Personal Branding
            </h3>
            <p className="text-[#FFF2EF]/85 leading-relaxed text-sm md:text-base mb-4">
              Website creatives for linksols.com and thought-leadership educational carousels for educator Rahma Tariq with high organic audience engagement.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Tech Creatives", "LinkedIn Carousels", "Brand Guidelines", "Story Banners"].map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-lg bg-white/10 text-[#FFF2EF] font-medium border border-white/15">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/15 flex items-center justify-between mt-4">
            <span className="text-xs font-bold text-[#F3DB9A]">Clients: Linksols • Rahma Tariq</span>
            <span className="text-xs font-bold text-emerald-400">Verified Client Work</span>
          </div>
        </motion.div>

      </div>

      {/* Prominent Full Archive CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 md:p-10 rounded-[2.5rem] bg-[#2B1004] text-[#FFF2EF] border-2 border-[#2B1004] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
      >
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#F3DB9A] shrink-0">
            <FolderArchive className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-2xl font-extrabold text-[#FFF2EF] font-serif mb-1">
              Explore Full 120+ Google Drive Project Archive
            </h4>
            <p className="text-sm text-[#FFF2EF]/80 font-medium">
              Browse all 8 project folders including Deen Schooling (40+ posters), The Learning Club, B2B Digital Solutions & Tutor Dock.
            </p>
          </div>
        </div>

        <button
          onClick={onOpenArchive}
          className="px-8 py-4 rounded-full bg-[#C48B71] text-[#2B1004] font-extrabold text-sm hover:bg-[#F3DB9A] transition-all shadow-xl flex items-center gap-2 cursor-pointer shrink-0"
        >
          <span>Open Full Drive Showcase</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>

    </section>
  );
};
