import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Hayat Fragrance — Luxury Perfumes",
      subtitle: "Complete branding design, packaging boxes, bottle labels & promotional feed series",
      link: "https://wa.me/923242428418?text=Hi%20Sumaira,%20I%20am%20interested%20in%20Hayat%20Fragrance%20style%20branding",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      gridClass: "md:col-span-7 h-[420px]",
      tag: "Client Branding",
    },
    {
      id: 2,
      title: "Infinity Touch — 14th Aug Laptop Campaign",
      subtitle: "🏆 1st Prize Winner in promotional competition for laptops campaign",
      link: "https://wa.me/923242428418?text=Hi%20Sumaira,%20I%20am%20interested%20in%20Contest%20Winning%20style%20promotional%20ads",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
      gridClass: "md:col-span-5 h-[420px]",
      tag: "🏆 Contest Winner",
    },
    {
      id: 3,
      title: "Dr. Waqas A. Khan — Clinic Branding",
      subtitle: "Healthcare patient awareness flyers, social media kit & launch creatives",
      link: "https://wa.me/923242428418?text=Hi%20Sumaira,%20I%20need%20medical%20healthcare%20branding",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
      gridClass: "md:col-span-5 h-[380px]",
      tag: "Healthcare",
    },
    {
      id: 4,
      title: "EmpowerHer Store — Launch Campaign",
      subtitle: "Brand identity, 14th August promotional offers, and product display banners",
      link: "https://wa.me/923242428418?text=Hi%20Sumaira,%20I%20need%20store%20launch%20graphics",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
      gridClass: "md:col-span-7 h-[380px]",
      tag: "E-Commerce",
    },
    {
      id: 5,
      title: "USA Billboard & B2B Digital Solution",
      subtitle: "Large format outdoor billboard design for USA international clients & corporate covers",
      link: "https://wa.me/923242428418?text=Hi%20Sumaira,%20I%20need%20Billboard%20and%20banner%20design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      gridClass: "md:col-span-6 h-[360px]",
      tag: "USA Billboard",
    },
    {
      id: 6,
      title: "LinkedIn Carousels & Homeschooling Kit",
      subtitle: "Swipeable educational carousels & YouTube live session graphics for Rahma Tariq",
      link: "https://wa.me/923242428418?text=Hi%20Sumaira,%20I%20need%20LinkedIn%20Carousels%20and%20YouTube%20covers",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
      gridClass: "md:col-span-6 h-[360px]",
      tag: "Multi-Slide Deck",
    },
  ];

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
          <span>Real Projects • Portfolio 2024–2025</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left font-serif">
          Featured <span className="text-gradient-primary">Client Works</span>
        </h2>
        <p className="text-muted-foreground text-center md:text-left max-w-2xl text-lg">
          Authentic brand identities, packaging suites, and marketing campaigns designed for businesses across Pakistan and globally.
        </p>
      </motion.div>

      {/* 12-Column Full-Width Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        {projects.map((project, i) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className={`group relative overflow-hidden rounded-[2.25rem] block shadow-xl border-2 border-[#0C0300]/25 dark:border-[#FFF2EF]/25 hover:border-[#0C0300] dark:hover:border-[#FFF2EF] ${project.gridClass}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 bg-neutral-950">
              <img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 transform-gpu"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Tag Badge */}
            <div className="absolute top-6 left-6 z-10">
              <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                {project.tag}
              </span>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
              <div className="flex items-end justify-between gap-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 transform-gpu">
                <div className="z-10 max-w-lg">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md font-serif">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base font-medium text-white/80 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {project.subtitle}
                  </p>
                </div>
                
                {/* Arrow Action Icon */}
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 opacity-80 group-hover:opacity-100 group-hover:bg-white group-hover:text-black transition-all duration-300 rotate-45 group-hover:rotate-0 z-10 shadow-lg">
                  <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
