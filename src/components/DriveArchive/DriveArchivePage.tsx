import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ExternalLink, 
  Folder, 
  Sparkles, 
  Search, 
  Layers, 
  Share2, 
  DownloadCloud, 
  CheckCircle2, 
  ArrowUpRight,
  Eye,
  FileImage,
  Tag
} from "lucide-react";

export interface DriveFolderData {
  id: string;
  name: string;
  category: string;
  fileCount: number;
  featuredBadge?: string;
  description: string;
  driveUrl: string;
  sampleItems: string[];
  tags: string[];
}

export const driveFolders: DriveFolderData[] = [
  {
    id: "1Lk4YINhT1AgK5AasQMFlZr6T92Aow8OU",
    name: "B2B Digital Solutions",
    category: "Corporate & B2B",
    fileCount: 11,
    featuredBadge: "Corporate Marketing",
    description: "High-impact B2B marketing creatives, acquisition flyers ('That's your Marketing', 'Your Business'), and professional Instagram growth templates for corporate clients.",
    driveUrl: "https://drive.google.com/drive/folders/1Lk4YINhT1AgK5AasQMFlZr6T92Aow8OU",
    sampleItems: [
      "That's your Marketing Campaign",
      "B2B Corporate Strategy Posts",
      "Visit Now Promotional Banners",
      "High-Converting Acquisition Visuals",
      "Instagram Commercial Feed Posts"
    ],
    tags: ["B2B Marketing", "Instagram Ads", "Corporate Banners", "Canva Pro"]
  },
  {
    id: "1nBpqQLJabeVnpS4mB-vCAv3gfi_8UqpZ",
    name: "Secret Glow Skincare",
    category: "Beauty & Cosmetics",
    fileCount: 29,
    featuredBadge: "E-Commerce Suite",
    description: "Aesthetic skincare product feature kits ('Grey & Green Natural Beauty'), promotional sales creatives ('Want Glowing & Radiant Skin'), and cosmetic Instagram feed branding.",
    driveUrl: "https://drive.google.com/drive/folders/1nBpqQLJabeVnpS4mB-vCAv3gfi_8UqpZ",
    sampleItems: [
      "Grey & Green Natural Beauty Features",
      "Want a Glowing & Radiant Skin Series",
      "Cosmetic Bottle Label & Box Mockups",
      "E-Commerce Product Highlights",
      "Story Promotional Banners"
    ],
    tags: ["Skincare Branding", "Product Mockups", "Social Media Posts", "Canva Pro"]
  },
  {
    id: "1Qba9EJnZkhiETqnQhZi_Sj5SG9vXZn7B",
    name: "Linksols IT & Tech",
    category: "Technology & Software",
    fileCount: 16,
    featuredBadge: "Agency Branding",
    description: "Modern technology & software solutions agency creatives for linksols.com, tech promotional social ads, and IT services launch campaigns.",
    driveUrl: "https://drive.google.com/drive/folders/1Qba9EJnZkhiETqnQhZi_Sj5SG9vXZn7B",
    sampleItems: [
      "linksols.com Website Hero Graphics",
      "IT Software Solutions Ad Creatives",
      "Tech Agency Social Media Suite",
      "Service Launch Visuals",
      "Corporate Tech Flyers"
    ],
    tags: ["Tech Branding", "Ad Creatives", "AI Generation", "Website Graphics"]
  },
  {
    id: "14IlywyC5L7Qw7Ki1segc-YjzfsaZdTeI",
    name: "Personal Branding — Rahma Tariq",
    category: "Personal Branding",
    fileCount: 26,
    featuredBadge: "Viral Carousels",
    description: "Thought-leadership educational carousels ('Just take a break was good advice until I experienced burnout myself'), author story layouts, and YouTube session graphics.",
    driveUrl: "https://drive.google.com/drive/folders/14IlywyC5L7Qw7Ki1segc-YjzfsaZdTeI",
    sampleItems: [
      "Burnout & Self-Care Carousel Series",
      "Homeschooling Educator Banners",
      "LinkedIn Thought-Leadership Slides",
      "Personal Branding Story Templates",
      "YouTube Live Session Covers"
    ],
    tags: ["LinkedIn Carousels", "Personal Branding", "Storytelling", "Typography"]
  },
  {
    id: "1g38xzUnuOB9uFgrtppA7z7MhT517StZK",
    name: "Deen Schooling Academy",
    category: "Education & Academy",
    fileCount: 41,
    featuredBadge: "40+ Posters Suite",
    description: "Comprehensive educational poster series ('The Best Education for Effective Muslim Leaders'), academy admission banners, and 30+ story graphics with layout balance.",
    driveUrl: "https://drive.google.com/drive/folders/1g38xzUnuOB9uFgrtppA7z7MhT517StZK",
    sampleItems: [
      "Effective Muslim Leaders Poster Series",
      "Academy Admission & Event Banners",
      "Educational Story Graphics Pack (30+)",
      "Typographic Awareness Flyers",
      "Class Schedule & Announcement Visuals"
    ],
    tags: ["Poster Design", "Educational Graphics", "Story Banners", "Vector Art"]
  },
  {
    id: "1cVozo30QPeCo_LRSIoK-PCKVicj7-0EI",
    name: "The Learning Club & Muslim Kids",
    category: "Kids & EdTech",
    fileCount: 24,
    featuredBadge: "Children Series",
    description: "Engaging children's visual storytelling materials, Muslim Kids activity workbooks, engaging learning templates, and playful educational graphics.",
    driveUrl: "https://drive.google.com/drive/folders/1cVozo30QPeCo_LRSIoK-PCKVicj7-0EI",
    sampleItems: [
      "The Muslim Kids Visual Series",
      "Children Activity & Learning Sheets",
      "Workbook Cover & Page Layouts",
      "Engaging Illustrated Templates",
      "Kids Learning Club Story Posts"
    ],
    tags: ["Kids Branding", "Educational Worksheets", "Color Schemes", "Canva"]
  },
  {
    id: "1ajGm6cV-ENj84boxEornEW1HoHv2VbB8",
    name: "Tutor Dock Online Tutoring",
    category: "EdTech & Tutoring",
    fileCount: 8,
    featuredBadge: "EdTech Visuals",
    description: "Online tutoring platform marketing suite, student onboarding graphics, course announcement flyers, and interactive tutoring feed designs.",
    driveUrl: "https://drive.google.com/drive/folders/1p2k04rJ_nCzlGzgNbYaCbuEb8mfmeUjj",
    sampleItems: [
      "Tutor Dock Platform Promotional Banners",
      "Student Enrollment Flyers",
      "Subject Specialist Social Posts",
      "Online Class Schedule Graphics"
    ],
    tags: ["Tutoring Ads", "Online Education", "Social Media", "Vector Layouts"]
  },
  {
    id: "1p2k04rJ_nCzlGzgNbYaCbuEb8mfmeUjj_hayat",
    name: "Hayat Fragrance & Infinity Touch",
    category: "Signature Luxury & Awards",
    fileCount: 15,
    featuredBadge: "🏆 Award Winning",
    description: "National 1st Prize Winning 14th August Campaign (Infinity Touch) and complete luxury packaging suite for Hayat Fragrance with gold-foil vector dielines.",
    driveUrl: "https://drive.google.com/drive/folders/1p2k04rJ_nCzlGzgNbYaCbuEb8mfmeUjj",
    sampleItems: [
      "14th August Laptop Contest Winning Ad 🏆",
      "Hayat Fragrance Gold Foil Box Packaging",
      "Perfume Bottle Label Mockups",
      "Luxury Brand Identity Guidelines",
      "Dr. Waqas A. Khan Clinic Medical Kit"
    ],
    tags: ["Packaging Design", "Contest Winner", "Gold Foil Vector", "Medical Kit"]
  }
];

const categories = [
  "All Projects",
  "Corporate & B2B",
  "Beauty & Cosmetics",
  "Technology & Software",
  "Personal Branding",
  "Education & Academy",
  "Kids & EdTech",
  "Signature Luxury & Awards"
];

interface DriveArchivePageProps {
  onBackToHome: () => void;
}

export const DriveArchivePage = ({ onBackToHome }: DriveArchivePageProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFolderModal, setActiveFolderModal] = useState<DriveFolderData | null>(null);

  const filteredFolders = driveFolders.filter((folder) => {
    const matchesCategory = selectedCategory === "All Projects" || folder.category === selectedCategory;
    const matchesSearch = 
      folder.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      folder.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      folder.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalFiles = driveFolders.reduce((acc, curr) => acc + curr.fileCount, 0);

  return (
    <div className="min-h-screen bg-[#FFF2EF] dark:bg-[#140702] text-[#2B1004] dark:text-[#FFF2EF] py-12 px-6 relative overflow-x-hidden">
      
      {/* Top Floating Navigation Bar */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 md:p-6 rounded-[2rem] bg-[#2B1004] text-[#FFF2EF] border-2 border-[#2B1004] shadow-2xl">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#FFF2EF] font-bold text-xs md:text-sm transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Main Portfolio</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs md:text-sm font-semibold text-[#F3DB9A]">
              120+ Verified Drive Assets
            </span>
            <a
              href="https://drive.google.com/drive/folders/1p2k04rJ_nCzlGzgNbYaCbuEb8mfmeUjj"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C48B71] text-[#2B1004] font-extrabold text-xs hover:bg-[#F3DB9A] transition-all shadow-md"
            >
              <span>Open Google Drive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B1004]/10 border-2 border-[#2B1004] text-[#2B1004] dark:text-[#FFF2EF] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#A66E58]" />
            <span>Official Google Drive Archive • 2024–2025</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 font-serif text-[#2B1004] dark:text-[#FFF2EF]">
            Comprehensive Project Archive
          </h1>

          <p className="text-lg md:text-xl text-[#2B1004]/80 dark:text-[#FFF2EF]/80 max-w-3xl mx-auto leading-relaxed font-sans font-medium mb-8">
            Explore the complete gallery of client branding kits, educational carousels, cosmetic packaging, and B2B marketing creatives organized by project folders.
          </p>
        </motion.div>

        {/* Search & Category Filter Bar */}
        <div className="max-w-4xl mx-auto space-y-5">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-[#2B1004]/60 dark:text-[#FFF2EF]/60" />
            <input
              type="text"
              placeholder="Search by client, project type, or skill (e.g. Skincare, Carousels, B2B, Logo)..."
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
                    : "bg-white/60 dark:bg-white/5 border border-[#2B1004]/30 dark:border-white/20 text-[#2B1004] dark:text-[#FFF2EF] hover:bg-[#2B1004]/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Folders & Project Suites */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredFolders.map((folder, index) => (
          <motion.div
            key={folder.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="p-8 rounded-[2.5rem] border-2 border-[#2B1004] bg-[#2B1004] text-[#FFF2EF] shadow-2xl flex flex-col justify-between relative group hover:border-[#C48B71] transition-all duration-300"
          >
            {/* Top Row: Category & Badges */}
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#F3DB9A]">
                    <Folder className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F3DB9A]">
                    {folder.category}
                  </span>
                </div>

                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold text-[#FFF2EF]">
                  {folder.fileCount} Assets
                </span>
              </div>

              {/* Folder Title */}
              <h3 className="text-2xl font-extrabold text-[#FFF2EF] mb-3 font-serif tracking-tight group-hover:text-[#F3DB9A] transition-colors">
                {folder.name}
              </h3>

              <p className="text-sm text-[#FFF2EF]/85 leading-relaxed mb-6 font-sans">
                {folder.description}
              </p>

              {/* Sample Files / Content Pills */}
              <div className="space-y-2 mb-6 bg-white/5 p-4 rounded-2xl border border-white/10">
                <span className="text-[10px] font-bold text-[#F3DB9A] uppercase tracking-wider block mb-1">
                  Key Contents & Slides:
                </span>
                {folder.sampleItems.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#FFF2EF]/90 font-medium">
                    <FileImage className="w-3.5 h-3.5 text-[#C48B71] shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
                {folder.sampleItems.length > 3 && (
                  <span className="text-[11px] text-[#F3DB9A] font-semibold block pt-1">
                    +{folder.sampleItems.length - 3} more files inside
                  </span>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {folder.tags.map((t, idx) => (
                  <span key={idx} className="text-[10px] px-2.5 py-0.5 rounded-md bg-white/10 text-[#FFF2EF] font-medium border border-white/15">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 border-t border-white/15 flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveFolderModal(folder)}
                className="flex items-center gap-1.5 text-xs font-bold text-[#FFF2EF] hover:text-[#F3DB9A] transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Breakdown</span>
              </button>

              <a
                href={folder.driveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#C48B71] text-[#2B1004] font-extrabold text-xs hover:bg-[#F3DB9A] transition-colors shadow"
              >
                <span>Drive Link</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {activeFolderModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-2xl w-full p-8 rounded-[2.5rem] bg-[#2B1004] text-[#FFF2EF] border-2 border-[#2B1004] shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/15">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#F3DB9A]">
                    <Folder className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#FFF2EF] font-serif">
                      {activeFolderModal.name}
                    </h3>
                    <span className="text-xs text-[#F3DB9A] font-bold uppercase">
                      {activeFolderModal.category} • {activeFolderModal.fileCount} Assets
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveFolderModal(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#FFF2EF] font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="text-base text-[#FFF2EF]/90 leading-relaxed mb-6">
                {activeFolderModal.description}
              </p>

              <div className="space-y-3 mb-6 bg-white/5 p-5 rounded-2xl border border-white/10">
                <h4 className="text-xs font-bold text-[#F3DB9A] uppercase tracking-wider mb-2">
                  Complete File List / Deliverables:
                </h4>
                {activeFolderModal.sampleItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-[#FFF2EF] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/15">
                <a
                  href={`https://wa.me/923242428418?text=Hello%20Sumaira,%20I%20want%20to%20order%20designs%20similar%20to%20${encodeURIComponent(activeFolderModal.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full bg-[#C48B71] text-[#2B1004] font-extrabold text-sm hover:bg-[#F3DB9A] transition-colors shadow-md"
                >
                  Order Similar via WhatsApp
                </a>

                <a
                  href={activeFolderModal.driveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#FFF2EF] font-bold text-sm transition-colors"
                >
                  <span>Open Folder in Google Drive</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom CTA to Return */}
      <div className="max-w-4xl mx-auto text-center pt-8 border-t-2 border-[#2B1004]/20 dark:border-[#FFF2EF]/20">
        <h3 className="text-2xl font-bold font-serif mb-3">Want custom branding crafted for your business?</h3>
        <p className="text-sm text-muted-foreground mb-6">Let's discuss your custom color palette, packaging, and high-converting marketing creatives.</p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={onBackToHome}
            className="px-8 py-3.5 rounded-full bg-[#2B1004] text-[#FFF2EF] font-extrabold text-sm border-2 border-[#2B1004] shadow-lg hover:bg-[#C48B71] hover:text-[#2B1004] transition-all cursor-pointer"
          >
            Back to Home Overview
          </button>
          <a
            href="https://wa.me/923242428418"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3.5 rounded-full bg-[#C48B71] text-[#2B1004] font-extrabold text-sm shadow-lg hover:bg-[#F3DB9A] transition-all"
          >
            WhatsApp: 0324-2428418
          </a>
        </div>
      </div>

    </div>
  );
};

export default DriveArchivePage;
