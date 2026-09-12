import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ExternalLink, 
  Sparkles, 
  Search, 
  Eye, 
  Send, 
  X, 
  Folder, 
  Award,
  ArrowUpRight,
  Filter
} from "lucide-react";

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
  driveUrl: string;
}

export const allDriveProjects: ProjectItem[] = [
  // 1. Secret Glow Skincare
  {
    id: "sg-1",
    title: "Natural Beauty Skincare Product Features",
    category: "Skincare & Beauty",
    client: "Secret Glow Skincare",
    description: "Aesthetic grey & green organic skincare product highlights, ingredient breakdowns, and social promotional creatives.",
    image: "/projects/secret-glow/Grey_and_Green_Natural_Beauty_Skin_Care_Product_Features_Instagram_Post__10_20250905_160850_0000.png",
    tags: ["Skincare", "Product Features", "Canva Pro", "Instagram Grid"],
    featured: true,
    driveUrl: "https://drive.google.com/drive/folders/1nBpqQLJabeVnpS4mB-vCAv3gfi_8UqpZ"
  },
  {
    id: "sg-2",
    title: "Want Glowing & Radiant Skin Series",
    category: "Skincare & Beauty",
    client: "Secret Glow Skincare",
    description: "High-converting social sales banners for organic radiant skin care products with beauty aesthetics.",
    image: "/projects/secret-glow/Grey_and_Green_Natural_Beauty_Skin_Care_Product_Features_Instagram_Post__10_20250907_145006_0000.png",
    tags: ["Beauty Ads", "Social Media", "Canva Pro"],
    driveUrl: "https://drive.google.com/drive/folders/1nBpqQLJabeVnpS4mB-vCAv3gfi_8UqpZ"
  },
  {
    id: "sg-3",
    title: "Organic Serum & Moisturizer Showcase",
    category: "Skincare & Beauty",
    client: "Secret Glow Skincare",
    description: "Minimalist product highlights showcasing organic formulations, benefits, and client reviews.",
    image: "/projects/secret-glow/Grey_and_Green_Natural_Beauty_Skin_Care_Product_Features_Instagram_Post__10_20250913_143304_0000.png",
    tags: ["Product Mockup", "Organic Cosmetics", "Branding"],
    driveUrl: "https://drive.google.com/drive/folders/1nBpqQLJabeVnpS4mB-vCAv3gfi_8UqpZ"
  },
  {
    id: "sg-4",
    title: "Radiant Skin Tone Night Cream Banner",
    category: "Skincare & Beauty",
    client: "Secret Glow Skincare",
    description: "Luxury night cream social post with soft pastel tones, gold typography, and premium product jar visuals.",
    image: "/projects/secret-glow/1_20251024_152005_0000.jpg",
    tags: ["Night Cream", "Beauty Banner", "Canva Pro"],
    driveUrl: "https://drive.google.com/drive/folders/1nBpqQLJabeVnpS4mB-vCAv3gfi_8UqpZ"
  },
  {
    id: "sg-5",
    title: "Vitamin C Brightening Facial Kit",
    category: "Skincare & Beauty",
    client: "Secret Glow Skincare",
    description: "Multi-product facial bundle promotion featuring botanical elements, benefit icons, and CTA badges.",
    image: "/projects/secret-glow/3_20251023_022455_0002.jpg",
    tags: ["Facial Kit", "Bundle Promo", "Photoshop"],
    driveUrl: "https://drive.google.com/drive/folders/1nBpqQLJabeVnpS4mB-vCAv3gfi_8UqpZ"
  },

  // 2. B2B Digital Solutions
  {
    id: "b2b-1",
    title: "That's Your Marketing Campaign",
    category: "Corporate & B2B",
    client: "B2B Digital Solutions",
    description: "Bold corporate marketing acquisition visual series explaining digital agency solutions and ROI growth.",
    image: "/projects/b2b/That__39_s_your_Marketing_20250601_211938_0000.jpg",
    tags: ["B2B Strategy", "Agency Ad", "Typography"],
    featured: true,
    driveUrl: "https://drive.google.com/drive/folders/1Lk4YINhT1AgK5AasQMFlZr6T92Aow8OU"
  },
  {
    id: "b2b-2",
    title: "Corporate Growth Strategy Posts",
    category: "Corporate & B2B",
    client: "B2B Digital Solutions",
    description: "Modern business flyers with sharp layout architecture, color theory, and corporate call-to-actions.",
    image: "/projects/b2b/Untitled__Instagram_Post__20250518_232420_0000.jpg",
    tags: ["Corporate Posts", "Illustrator", "Ad Design"],
    driveUrl: "https://drive.google.com/drive/folders/1Lk4YINhT1AgK5AasQMFlZr6T92Aow8OU"
  },
  {
    id: "b2b-3",
    title: "Digital Business Scaling Creatives",
    category: "Corporate & B2B",
    client: "B2B Digital Solutions",
    description: "Conversion-focused promotional creatives tailored for digital agencies and business consultants.",
    image: "/projects/b2b/Untitled__Instagram_Post__20251011_001332_0000.png",
    tags: ["Business Creatives", "Social Funnel", "Photoshop"],
    driveUrl: "https://drive.google.com/drive/folders/1Lk4YINhT1AgK5AasQMFlZr6T92Aow8OU"
  },
  {
    id: "b2b-4",
    title: "B2B Lead Generation Visual Banner",
    category: "Corporate & B2B",
    client: "B2B Digital Solutions",
    description: "Strategic lead generation post focused on corporate LinkedIn and Meta sponsored campaigns.",
    image: "/projects/b2b/Untitled__Instagram_Post__20250523_013601_0000.jpg",
    tags: ["Lead Gen", "Corporate Banners", "Marketing"],
    driveUrl: "https://drive.google.com/drive/folders/1Lk4YINhT1AgK5AasQMFlZr6T92Aow8OU"
  },

  // 3. Linksols IT Solutions
  {
    id: "ls-1",
    title: "linksols.com Modern Tech Web Creatives",
    category: "Technology & IT",
    client: "Linksols IT Solutions",
    description: "Hero banners, tech service highlights, and software solution social media feed designs for linksols.com.",
    image: "/projects/linksols/www__linksols.com_20260706_233628_0000.png",
    tags: ["Tech Branding", "Website Graphics", "Software Ads"],
    featured: true,
    driveUrl: "https://drive.google.com/drive/folders/1Qba9EJnZkhiETqnQhZi_Sj5SG9vXZn7B"
  },
  {
    id: "ls-2",
    title: "IT Services & Software Launch Suite",
    category: "Technology & IT",
    client: "Linksols IT Solutions",
    description: "Professional software agency social campaign showcasing enterprise cloud solutions and custom code development.",
    image: "/projects/linksols/www__linksols.com_20260713_172435_0000.png",
    tags: ["Software Launch", "Social Suite", "Illustrator"],
    driveUrl: "https://drive.google.com/drive/folders/1Qba9EJnZkhiETqnQhZi_Sj5SG9vXZn7B"
  },
  {
    id: "ls-3",
    title: "Digital Tech Transformation Banners",
    category: "Technology & IT",
    client: "Linksols IT Solutions",
    description: "Modern gradient IT banners with cyber vector accents and high-contrast typography.",
    image: "/projects/linksols/5_20260819_135002_0000.png",
    tags: ["Tech Ads", "Modern Gradients", "Canva Pro"],
    driveUrl: "https://drive.google.com/drive/folders/1Qba9EJnZkhiETqnQhZi_Sj5SG9vXZn7B"
  },
  {
    id: "ls-4",
    title: "Cloud Infrastructure & Cybersecurity Creative",
    category: "Technology & IT",
    client: "Linksols IT Solutions",
    description: "High-tech visual post detailing security architecture and corporate cloud services.",
    image: "/projects/linksols/4_20260809_235711_0000.png",
    tags: ["Cybersecurity", "Cloud IT", "Vector Art"],
    driveUrl: "https://drive.google.com/drive/folders/1Qba9EJnZkhiETqnQhZi_Sj5SG9vXZn7B"
  },

  // 4. Personal Branding — Rahma Tariq
  {
    id: "rt-1",
    title: "Burnout & Self-Care Viral Carousel",
    category: "Personal Branding",
    client: "Rahma Tariq (Homeschooling Educator)",
    description: "Multi-slide educational swipeable series ('Just take a break was good advice until I experienced burnout myself').",
    image: "/projects/rahma-tariq/1_20260817_151134_0000.png",
    tags: ["LinkedIn Carousel", "Storytelling", "Typography"],
    featured: true,
    driveUrl: "https://drive.google.com/drive/folders/14IlywyC5L7Qw7Ki1segc-YjzfsaZdTeI"
  },
  {
    id: "rt-2",
    title: "Homeschooling Thought-Leadership Slides",
    category: "Personal Branding",
    client: "Rahma Tariq (Homeschooling Educator)",
    description: "Engaging educational advice slides designed for Instagram carousels and YouTube live sessions.",
    image: "/projects/rahma-tariq/3_20260817_151134_0002.png",
    tags: ["Educational Slides", "Carousel Design", "Brand Identity"],
    driveUrl: "https://drive.google.com/drive/folders/14IlywyC5L7Qw7Ki1segc-YjzfsaZdTeI"
  },
  {
    id: "rt-3",
    title: "Parenting & Live Session Cover Graphics",
    category: "Personal Branding",
    client: "Rahma Tariq (Homeschooling Educator)",
    description: "Minimalist branded YouTube thumbnails and Instagram live announcement banners with soft color harmony.",
    image: "/projects/rahma-tariq/4_20260726_223004_0003.png",
    tags: ["YouTube Cover", "Live Session", "Parenting"],
    driveUrl: "https://drive.google.com/drive/folders/14IlywyC5L7Qw7Ki1segc-YjzfsaZdTeI"
  },

  // 5. Deen Schooling Posters
  {
    id: "ds-1",
    title: "Effective Muslim Leaders Poster Series",
    category: "Posters & Education",
    client: "Deen Schooling Academy",
    description: "Comprehensive 40+ poster campaign focusing on Islamic leadership, youth character building, and academy admissions.",
    image: "/projects/deen-schooling/1_20260511_122743_0000.png",
    tags: ["Poster Series", "Academy Graphics", "Typography"],
    featured: true,
    driveUrl: "https://drive.google.com/drive/folders/1g38xzUnuOB9uFgrtppA7z7MhT517StZK"
  },
  {
    id: "ds-2",
    title: "Academy Admission & Event Posters",
    category: "Posters & Education",
    client: "Deen Schooling Academy",
    description: "High-resolution printed flyers and social story posters with clean visual hierarchy.",
    image: "/projects/deen-schooling/1_20260712_000212_0000.png",
    tags: ["Event Posters", "Print Ready", "Vector Layout"],
    driveUrl: "https://drive.google.com/drive/folders/1g38xzUnuOB9uFgrtppA7z7MhT517StZK"
  },
  {
    id: "ds-3",
    title: "Youth Character Building Educational Banner",
    category: "Posters & Education",
    client: "Deen Schooling Academy",
    description: "Typographic educational poster series designed for classroom display and social media community sharing.",
    image: "/projects/deen-schooling/2_20260619_202903_0001.png",
    tags: ["Classroom Poster", "Character Building", "Islamic EdTech"],
    driveUrl: "https://drive.google.com/drive/folders/1g38xzUnuOB9uFgrtppA7z7MhT517StZK"
  },

  // 6. The Learning Club
  {
    id: "tlc-1",
    title: "The Muslim Kids Activity Series",
    category: "Kids & EdTech",
    client: "The Learning Club",
    description: "Interactive visual learning sheets, workbook pages, and playful educational graphics for young learners.",
    image: "/projects/learning-club/12_20260428_223617_0011.jpg",
    tags: ["Kids EdTech", "Activity Sheets", "Playful Colors"],
    featured: true,
    driveUrl: "https://drive.google.com/drive/folders/1cVozo30QPeCo_LRSIoK-PCKVicj7-0EI"
  },
  {
    id: "tlc-2",
    title: "Interactive Storytelling Templates",
    category: "Kids & EdTech",
    client: "The Learning Club",
    description: "Creative illustrated flashcards and story slides designed to captivate early childhood learners.",
    image: "/projects/learning-club/17_20260428_223618_0016.jpg",
    tags: ["Flashcards", "Story Slides", "Child Learning"],
    driveUrl: "https://drive.google.com/drive/folders/1cVozo30QPeCo_LRSIoK-PCKVicj7-0EI"
  },
  {
    id: "tlc-3",
    title: "Early Learning Illustrated Flashcard Pack",
    category: "Kids & EdTech",
    client: "The Learning Club",
    description: "Colorful educational cards with clear vector icons, Arabic/English vocabulary, and engaging illustrations.",
    image: "/projects/learning-club/18_20260428_223619_0017.jpg",
    tags: ["Vocabulary Cards", "Early Learning", "Canva"],
    driveUrl: "https://drive.google.com/drive/folders/1cVozo30QPeCo_LRSIoK-PCKVicj7-0EI"
  }
];

const categories = [
  "All Projects",
  "Skincare & Beauty",
  "Corporate & B2B",
  "Technology & IT",
  "Personal Branding",
  "Posters & Education",
  "Kids & EdTech"
];

interface ProjectsPageProps {
  onBackToHome: () => void;
}

export const ProjectsPage = ({ onBackToHome }: ProjectsPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");
  const [previewProject, setPreviewProject] = useState<ProjectItem | null>(null);

  const filteredProjects = allDriveProjects.filter((project) => {
    const matchesCategory = selectedCategory === "All Projects" || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FFF2EF] dark:bg-[#140702] text-[#2B1004] dark:text-[#FFF2EF] py-10 px-6 relative overflow-x-hidden">
      
      {/* Top Floating Navigation Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 md:p-6 rounded-[2.5rem] bg-[#2B1004] text-[#FFF2EF] border-2 border-[#2B1004] shadow-2xl">
          
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#FFF2EF] font-bold text-xs md:text-sm transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>← Back to Home</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs md:text-sm font-semibold text-[#F3DB9A] hidden sm:inline">
              Official Google Drive Showcase
            </span>
            <a
              href="https://drive.google.com/drive/folders/1p2k04rJ_nCzlGzgNbYaCbuEb8mfmeUjj"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C48B71] text-[#2B1004] font-extrabold text-xs hover:bg-[#F3DB9A] transition-all shadow-md"
            >
              <span>Open Drive Folder</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B1004]/10 border-2 border-[#2B1004] text-[#2B1004] dark:text-[#FFF2EF] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#A66E58]" />
            <span>Complete Project Gallery • 2024–2025</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 font-serif text-[#2B1004] dark:text-[#FFF2EF]">
            All Client Projects & Visuals
          </h1>

          <p className="text-lg md:text-xl text-[#2B1004]/80 dark:text-[#FFF2EF]/80 max-w-3xl mx-auto leading-relaxed font-sans font-medium mb-8">
            High-resolution visual brand identities, skincare marketing kits, B2B corporate graphics, educational posters, and viral carousels extracted directly from Google Drive.
          </p>
        </motion.div>

        {/* Search & Filter Controls */}
        <div className="max-w-4xl mx-auto space-y-5">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-[#2B1004]/60 dark:text-[#FFF2EF]/60" />
            <input
              type="text"
              placeholder="Search by client, project type, or skill (e.g. Skincare, Carousels, B2B, Posters, Linksols)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-13 pr-6 py-4 rounded-2xl bg-white/80 dark:bg-[#1C0B05] border-2 border-[#2B1004] text-[#2B1004] dark:text-[#FFF2EF] font-semibold text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-[#C48B71] placeholder:text-[#2B1004]/50 dark:placeholder:text-[#FFF2EF]/50"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#2B1004] text-[#FFF2EF] border-2 border-[#2B1004] shadow-md scale-105"
                    : "bg-white/70 dark:bg-white/5 border border-[#2B1004]/25 dark:border-white/20 text-[#2B1004] dark:text-[#FFF2EF] hover:bg-[#2B1004]/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Real Project Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              className="p-6 rounded-[2.25rem] border-2 border-[#2B1004] bg-[#2B1004] text-[#FFF2EF] shadow-2xl flex flex-col justify-between group hover:border-[#C48B71] transition-all duration-300"
            >
              <div>
                {/* Image Showcase Container */}
                <div 
                  onClick={() => setPreviewProject(project)}
                  className="relative w-full h-64 rounded-2xl overflow-hidden mb-5 bg-black/40 border border-white/15 cursor-pointer group/img"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 filter contrast-105"
                    loading="lazy"
                  />
                  
                  {/* Hover overlay with zoom icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#C48B71] text-[#2B1004] font-extrabold text-xs flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Click to Zoom</span>
                    </span>
                  </div>

                  {/* Category Pill on Image */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-bold text-[#F3DB9A] border border-white/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Meta & Title */}
                <span className="text-xs font-bold text-[#F3DB9A] uppercase tracking-wider block mb-1">
                  Client: {project.client}
                </span>

                <h3 className="text-xl font-extrabold text-[#FFF2EF] mb-2 font-serif group-hover:text-[#F3DB9A] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-[#FFF2EF]/80 leading-relaxed mb-4 font-sans line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2.5 py-0.5 rounded-md bg-white/10 text-[#FFF2EF] font-semibold border border-white/15">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-white/15 flex items-center justify-between gap-2">
                <button
                  onClick={() => setPreviewProject(project)}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#FFF2EF] hover:text-[#F3DB9A] transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/923242428418?text=Hello%20Sumaira,%20I%20want%20to%20order%20designs%20like%20${encodeURIComponent(project.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-full bg-[#C48B71] text-[#2B1004] font-extrabold text-xs hover:bg-[#F3DB9A] transition-colors shadow flex items-center gap-1"
                  >
                    <span>Inquire</span>
                    <Send className="w-3 h-3" />
                  </a>

                  <a
                    href={project.driveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FFF2EF] border border-white/20 transition-colors"
                    title="View on Google Drive"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox Preview Modal */}
      <AnimatePresence>
        {previewProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-3xl w-full p-6 md:p-8 rounded-[2.5rem] bg-[#2B1004] text-[#FFF2EF] border-2 border-[#2B1004] shadow-2xl relative max-h-[92vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/15">
                <div>
                  <span className="text-xs font-bold text-[#F3DB9A] uppercase tracking-wider block">
                    {previewProject.category} • Client: {previewProject.client}
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#FFF2EF] font-serif">
                    {previewProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setPreviewProject(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#FFF2EF] font-bold cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Full Image Preview */}
              <div className="w-full max-h-[55vh] rounded-2xl overflow-hidden bg-black/50 border border-white/15 mb-5 flex items-center justify-center">
                <img
                  src={previewProject.image}
                  alt={previewProject.title}
                  className="w-full h-full object-contain max-h-[55vh]"
                />
              </div>

              <p className="text-sm text-[#FFF2EF]/90 leading-relaxed mb-6">
                {previewProject.description}
              </p>

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/15">
                <a
                  href={`https://wa.me/923242428418?text=Hello%20Sumaira,%20I%20am%20interested%20in%20ordering%20designs%20like%20${encodeURIComponent(previewProject.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full bg-[#C48B71] text-[#2B1004] font-extrabold text-sm hover:bg-[#F3DB9A] transition-colors shadow-md flex items-center gap-2"
                >
                  <span>Order on WhatsApp</span>
                  <Send className="w-4 h-4" />
                </a>

                <a
                  href={previewProject.driveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#FFF2EF] font-bold text-sm transition-colors"
                >
                  <span>Open Folder on Drive</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom Return Button */}
      <div className="max-w-4xl mx-auto text-center pt-8 border-t-2 border-[#2B1004]/20 dark:border-[#FFF2EF]/20">
        <button
          onClick={onBackToHome}
          className="px-8 py-3.5 rounded-full bg-[#2B1004] text-[#FFF2EF] font-extrabold text-sm border-2 border-[#2B1004] shadow-lg hover:bg-[#C48B71] hover:text-[#2B1004] transition-all cursor-pointer"
        >
          ← Return to Main Portfolio Home
        </button>
      </div>

    </div>
  );
};

export default ProjectsPage;
