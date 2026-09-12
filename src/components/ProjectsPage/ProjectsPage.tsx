import { useState, useEffect } from "react";
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
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Image as ImageIcon,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";

export interface FolderImageItem {
  title: string;
  file_id: string;
  image: string;
  driveUrl: string;
}

export interface ProjectFolder {
  id: string;
  name: string;
  category: string;
  client: string;
  description: string;
  coverImage: string;
  driveUrl: string;
  tags: string[];
  images: FolderImageItem[];
}

export const projectFolders: ProjectFolder[] = [
  // 1. Secret Glow Skincare
  {
    id: "secret-glow",
    name: "Secret Glow Skincare & Cosmetics",
    category: "Skincare & Beauty",
    client: "Secret Glow Natural Beauty",
    description: "Complete organic skincare marketing collection: product feature breakdowns, radiant skin tone sales banners, vitamin C facial kit promotions, and aesthetic Instagram feed grids.",
    coverImage: "/projects/secret-glow/Grey_and_Green_Natural_Beauty_Skin_Care_Product_Features_Instagram_Post__10_20250905_160850_0000.png",
    driveUrl: "https://drive.google.com/drive/folders/1nBpqQLJabeVnpS4mB-vCAv3gfi_8UqpZ",
    tags: ["Skincare Branding", "Product Features", "Canva Pro", "Instagram Grid", "Organic Cosmetics"],
    images: [
      {
        title: "Natural Beauty Skincare Product Features (Cover)",
        file_id: "18YcwlS8pK5MqPI1yTlJP4onqq5soV0rS",
        image: "/projects/secret-glow/Grey_and_Green_Natural_Beauty_Skin_Care_Product_Features_Instagram_Post__10_20250905_160850_0000.png",
        driveUrl: "https://drive.google.com/file/d/18YcwlS8pK5MqPI1yTlJP4onqq5soV0rS/view"
      },
      {
        title: "Want Glowing & Radiant Skin Series",
        file_id: "1URNWJJEYetARFu6kU4t6rEuw7bxfT2Hu",
        image: "/projects/secret-glow/Grey_and_Green_Natural_Beauty_Skin_Care_Product_Features_Instagram_Post__10_20250907_145006_0000.png",
        driveUrl: "https://drive.google.com/file/d/1URNWJJEYetARFu6kU4t6rEuw7bxfT2Hu/view"
      },
      {
        title: "Organic Serum & Moisturizer Feature Breakdown",
        file_id: "1XqNsy6feBMVRcsWP6XcTx-scdhCAOhVU",
        image: "/projects/secret-glow/Grey_and_Green_Natural_Beauty_Skin_Care_Product_Features_Instagram_Post__10_20250913_143304_0000.png",
        driveUrl: "https://drive.google.com/file/d/1XqNsy6feBMVRcsWP6XcTx-scdhCAOhVU/view"
      },
      {
        title: "Natural Skincare Ingredient Spotlight",
        file_id: "1b22JrPAkO2w3mUqnE_7P3gRum1mTfJsd",
        image: "/projects/secret-glow/Grey_and_Green_Natural_Beauty_Skin_Care_Product_Features_Instagram_Post__10_20250921_010837_0000.jpg",
        driveUrl: "https://drive.google.com/file/d/1b22JrPAkO2w3mUqnE_7P3gRum1mTfJsd/view"
      },
      {
        title: "Radiant Skin Tone Night Cream Banner",
        file_id: "1XsaHRk1OWerd2OUgu8GbFL0B7gUB0luV",
        image: "/projects/secret-glow/1_20251024_152005_0000.jpg",
        driveUrl: "https://drive.google.com/file/d/1XsaHRk1OWerd2OUgu8GbFL0B7gUB0luV/view"
      },
      {
        title: "Cosmetic Jar & Bottle Aesthetic Mockup",
        file_id: "1uWTWdXy5myYYZtUZ0ZDnhOdCRJufg-_Z",
        image: "/projects/secret-glow/2_20251024_152005_0001.jpg",
        driveUrl: "https://drive.google.com/file/d/1uWTWdXy5myYYZtUZ0ZDnhOdCRJufg-_Z/view"
      },
      {
        title: "Vitamin C Brightening Facial Kit Bundle",
        file_id: "1F0m1NtkgmX2jYnifNN8UmHqma4Hj35qA",
        image: "/projects/secret-glow/3_20251023_022455_0002.jpg",
        driveUrl: "https://drive.google.com/file/d/1F0m1NtkgmX2jYnifNN8UmHqma4Hj35qA/view"
      },
      {
        title: "Hydrating Beauty Gel Promotional Banner",
        file_id: "1uDqJ9OUPcGQHpkmDHZ-zyJas4_ZycJpv",
        image: "/projects/secret-glow/5_20251030_154236_0002.jpg",
        driveUrl: "https://drive.google.com/file/d/1uDqJ9OUPcGQHpkmDHZ-zyJas4_ZycJpv/view"
      }
    ]
  },

  // 2. B2B Digital Solutions
  {
    id: "b2b",
    name: "B2B Digital Solutions",
    category: "Corporate & B2B",
    client: "B2B Agency & Consultants",
    description: "Corporate marketing campaign series: ROI growth visual flyers, business scaling acquisition posts, corporate consulting flyers, and lead generation ad creative suites.",
    coverImage: "/projects/b2b/That__39_s_your_Marketing_20250601_211938_0000.jpg",
    driveUrl: "https://drive.google.com/drive/folders/1Lk4YINhT1AgK5AasQMFlZr6T92Aow8OU",
    tags: ["B2B Marketing", "Corporate Posts", "Illustrator", "Lead Generation", "Agency Ads"],
    images: [
      {
        title: "That's Your Marketing Strategy Visual (Cover)",
        file_id: "1D0TuLOI9VV7DZnwm9yGyF3Ceuy7RNShV",
        image: "/projects/b2b/That__39_s_your_Marketing_20250601_211938_0000.jpg",
        driveUrl: "https://drive.google.com/file/d/1D0TuLOI9VV7DZnwm9yGyF3Ceuy7RNShV/view"
      },
      {
        title: "Corporate Growth & Scaling Strategy",
        file_id: "16A9YPAIdfgvBZIY78R8so3VVtrkdcljc",
        image: "/projects/b2b/Untitled__Instagram_Post__20250518_232420_0000.jpg",
        driveUrl: "https://drive.google.com/file/d/16A9YPAIdfgvBZIY78R8so3VVtrkdcljc/view"
      },
      {
        title: "Lead Generation & Acquisition Funnel Post",
        file_id: "1g0GB_r_aSFHohCFF2iSGjoPRO0TmGMH6",
        image: "/projects/b2b/Untitled__Instagram_Post__20250523_013601_0000.jpg",
        driveUrl: "https://drive.google.com/file/d/1g0GB_r_aSFHohCFF2iSGjoPRO0TmGMH6/view"
      },
      {
        title: "Business Consulting & Digital Services Banner",
        file_id: "10feav1sHJhCt3agXCaj_I_vndT6qbnF-",
        image: "/projects/b2b/Untitled__Instagram_Post__20250701_003540_0000.jpg",
        driveUrl: "https://drive.google.com/file/d/10feav1sHJhCt3agXCaj_I_vndT6qbnF-/view"
      },
      {
        title: "Digital Agency Conversion Creative",
        file_id: "18g_N-aIyGlfbg4beIjnHPtx0I5rpzp9B",
        image: "/projects/b2b/Untitled__Instagram_Post__20251011_001243_0000.png",
        driveUrl: "https://drive.google.com/file/d/18g_N-aIyGlfbg4beIjnHPtx0I5rpzp9B/view"
      },
      {
        title: "Enterprise Revenue Scaling Post",
        file_id: "1I_VnXRQQqGYJumwV8TXZB2nS5V_M0ZPs",
        image: "/projects/b2b/Untitled__Instagram_Post__20251011_001332_0000.png",
        driveUrl: "https://drive.google.com/file/d/1I_VnXRQQqGYJumwV8TXZB2nS5V_M0ZPs/view"
      },
      {
        title: "Client Acquisition Funnel Poster",
        file_id: "12nGFWJBiWI2gyuVFO19imZyj4crBE1vv",
        image: "/projects/b2b/7_20250518_004022_0006.jpg",
        driveUrl: "https://drive.google.com/file/d/12nGFWJBiWI2gyuVFO19imZyj4crBE1vv/view"
      },
      {
        title: "Market Analysis & ROI Insights Graphic",
        file_id: "1de9HZP-YfSRfG3MFkCxDC2vgHgnZHLR7",
        image: "/projects/b2b/9_20250518_004022_0008.jpg",
        driveUrl: "https://drive.google.com/file/d/1de9HZP-YfSRfG3MFkCxDC2vgHgnZHLR7/view"
      }
    ]
  },

  // 3. Linksols IT Solutions
  {
    id: "linksols",
    name: "Linksols IT & Software Solutions",
    category: "Technology & IT",
    client: "Linksols Tech Agency",
    description: "Enterprise tech & digital agency creative suite: website hero graphics for linksols.com, software launch posts, cloud infrastructure banners, and cyber IT service announcements.",
    coverImage: "/projects/linksols/www__linksols.com_20260706_233628_0000.png",
    driveUrl: "https://drive.google.com/drive/folders/1Qba9EJnZkhiETqnQhZi_Sj5SG9vXZn7B",
    tags: ["Tech Branding", "Website Graphics", "Software Ads", "Cloud IT", "Photoshop"],
    images: [
      {
        title: "linksols.com Modern Tech Web Creatives (Cover)",
        file_id: "196_xx-D-eFDbEDaQ3QUBSdubzHVmE00T",
        image: "/projects/linksols/www__linksols.com_20260706_233628_0000.png",
        driveUrl: "https://drive.google.com/file/d/196_xx-D-eFDbEDaQ3QUBSdubzHVmE00T/view"
      },
      {
        title: "IT Services & Software Launch Suite",
        file_id: "1AFAbEswArYZOd94dVH_nSlwiUNUynFZD",
        image: "/projects/linksols/www__linksols.com_20260713_172435_0000.png",
        driveUrl: "https://drive.google.com/file/d/1AFAbEswArYZOd94dVH_nSlwiUNUynFZD/view"
      },
      {
        title: "Digital Tech Transformation Banners",
        file_id: "1NW_mv7DSmodTqujETs65rjQa14j8kdpT",
        image: "/projects/linksols/5_20260819_135002_0000.png",
        driveUrl: "https://drive.google.com/file/d/1NW_mv7DSmodTqujETs65rjQa14j8kdpT/view"
      },
      {
        title: "Cloud Infrastructure & Cybersecurity Creative",
        file_id: "1Q3tQuRsO2wF2z-BoJo5-0oIwQi5ocASv",
        image: "/projects/linksols/4_20260809_235711_0000.png",
        driveUrl: "https://drive.google.com/file/d/1Q3tQuRsO2wF2z-BoJo5-0oIwQi5ocASv/view"
      },
      {
        title: "Enterprise Custom Software Solutions Flyer",
        file_id: "1gE7774cXcCFI8pg-t505kDDa01gO5Lg1",
        image: "/projects/linksols/4_20260818_164757_0001.png",
        driveUrl: "https://drive.google.com/file/d/1gE7774cXcCFI8pg-t505kDDa01gO5Lg1/view"
      },
      {
        title: "Full-Stack Development Social Campaign",
        file_id: "1KUriQaGY6XFcET8YQu3RRKWHAtm-CPnG",
        image: "/projects/linksols/5_20260809_235712_0001.png",
        driveUrl: "https://drive.google.com/file/d/1KUriQaGY6XFcET8YQu3RRKWHAtm-CPnG/view"
      },
      {
        title: "Tech Innovation & Data Analytics Banner",
        file_id: "1C5JZqOQ32JvpM1DO5NpAedZevA97NrjH",
        image: "/projects/linksols/www__linksols.com_20260709_155241_0000.png",
        driveUrl: "https://drive.google.com/file/d/1C5JZqOQ32JvpM1DO5NpAedZevA97NrjH/view"
      },
      {
        title: "Corporate IT Support & Consulting Creative",
        file_id: "1fFRv94UWxSlM_qV1O5UHBhg2mw6oKuFQ",
        image: "/projects/linksols/www__linksols.com_20260710_232014_0000.png",
        driveUrl: "https://drive.google.com/file/d/1fFRv94UWxSlM_qV1O5UHBhg2mw6oKuFQ/view"
      }
    ]
  },

  // 4. Personal Branding — Rahma Tariq
  {
    id: "rahma-tariq",
    name: "Personal Branding — Rahma Tariq",
    category: "Personal Branding",
    client: "Rahma Tariq (Homeschooling Educator)",
    description: "Thought-leadership viral educational carousels: complete 9-slide swipeable series on burnout, educator guidance, YouTube session banners, and personal branding story layouts.",
    coverImage: "/projects/rahma-tariq/1_20260817_151134_0000.png",
    driveUrl: "https://drive.google.com/drive/folders/14IlywyC5L7Qw7Ki1segc-YjzfsaZdTeI",
    tags: ["LinkedIn Carousels", "Personal Branding", "Storytelling", "Typography", "Educator Series"],
    images: [
      {
        title: "Burnout & Self-Care Viral Carousel (Slide 1 Cover)",
        file_id: "1ea01xsHq6BYbB6qBG4_587qSUzXbkk6x",
        image: "/projects/rahma-tariq/1_20260817_151134_0000.png",
        driveUrl: "https://drive.google.com/file/d/1ea01xsHq6BYbB6qBG4_587qSUzXbkk6x/view"
      },
      {
        title: "Overcoming Overwhelm & Finding Balance (Slide 2)",
        file_id: "1ZSY0apSOjZHfI_0LUh5tpUJKeZCHwZ61",
        image: "/projects/rahma-tariq/2_20260817_151134_0001.png",
        driveUrl: "https://drive.google.com/file/d/1ZSY0apSOjZHfI_0LUh5tpUJKeZCHwZ61/view"
      },
      {
        title: "Actionable Productivity Frameworks (Slide 3)",
        file_id: "1iyI2sQDr9Gxe-1NcvF7-GY8mw3yNeK2W",
        image: "/projects/rahma-tariq/3_20260817_151134_0002.png",
        driveUrl: "https://drive.google.com/file/d/1iyI2sQDr9Gxe-1NcvF7-GY8mw3yNeK2W/view"
      },
      {
        title: "Homeschooling Mindset & Philosophy (Slide 4)",
        file_id: "1ugJKAfZEQs572cIJIXSrAWgW1QLB0C35",
        image: "/projects/rahma-tariq/1_20260806_235512_0000.png",
        driveUrl: "https://drive.google.com/file/d/1ugJKAfZEQs572cIJIXSrAWgW1QLB0C35/view"
      },
      {
        title: "Parenting Wisdom & Empathy Insights (Slide 5)",
        file_id: "1KknWX0wfDnwgWcDu-V1wiyfJSIQJGOZ4",
        image: "/projects/rahma-tariq/2_20260806_235512_0001.png",
        driveUrl: "https://drive.google.com/file/d/1KknWX0wfDnwgWcDu-V1wiyfJSIQJGOZ4/view"
      },
      {
        title: "Daily Educational Routines & Tips (Slide 6)",
        file_id: "1lAYbLsaefZsGdzaMhgQLua4HMVYmZJCC",
        image: "/projects/rahma-tariq/3_20260806_235512_0002.png",
        driveUrl: "https://drive.google.com/file/d/1lAYbLsaefZsGdzaMhgQLua4HMVYmZJCC/view"
      },
      {
        title: "Homeschooling Community Live Q&A Session (Slide 7)",
        file_id: "1484MKrYypdBSwvGUDGTIeoyT4j3MpPYX",
        image: "/projects/rahma-tariq/3_20260726_223004_0002.png",
        driveUrl: "https://drive.google.com/file/d/1484MKrYypdBSwvGUDGTIeoyT4j3MpPYX/view"
      },
      {
        title: "YouTube & Podcast Episode Cover Banner (Slide 8)",
        file_id: "1RHeCcqJrZ20elI3yeBsVzupoy_oV9Mpo",
        image: "/projects/rahma-tariq/4_20260726_223004_0003.png",
        driveUrl: "https://drive.google.com/file/d/1RHeCcqJrZ20elI3yeBsVzupoy_oV9Mpo/view"
      }
    ]
  },

  // 5. Deen Schooling Posters
  {
    id: "deen-schooling",
    name: "Deen Schooling Academy Posters",
    category: "Posters & Education",
    client: "Deen Schooling Academy",
    description: "Extensive 40+ educational poster series: 'The Best Education for Effective Muslim Leaders', academy admissions, character building flyers, and print-ready event banners.",
    coverImage: "/projects/deen-schooling/1_20260511_122743_0000.png",
    driveUrl: "https://drive.google.com/drive/folders/1g38xzUnuOB9uFgrtppA7z7MhT517StZK",
    tags: ["Poster Series", "Academy Graphics", "Typography", "Islamic EdTech", "Print Ready"],
    images: [
      {
        title: "Effective Muslim Leaders Poster Series (Cover)",
        file_id: "1My-RJAsyJpF9J0gwv_z83rSOnvYA6kvu",
        image: "/projects/deen-schooling/1_20260511_122743_0000.png",
        driveUrl: "https://drive.google.com/file/d/1My-RJAsyJpF9J0gwv_z83rSOnvYA6kvu/view"
      },
      {
        title: "Islamic Leadership & Values Campaign (Poster 2)",
        file_id: "1Hg5koulrmspcMq0LffAO3ZvTyplJFqt0",
        image: "/projects/deen-schooling/1_20260624_124007_0000.png",
        driveUrl: "https://drive.google.com/file/d/1Hg5koulrmspcMq0LffAO3ZvTyplJFqt0/view"
      },
      {
        title: "Academy Admission Announcement Poster",
        file_id: "10ywDQVDcJFjb6VeONfdBknmipwlJtIq2",
        image: "/projects/deen-schooling/1_20260712_000212_0000.png",
        driveUrl: "https://drive.google.com/file/d/10ywDQVDcJFjb6VeONfdBknmipwlJtIq2/view"
      },
      {
        title: "Youth Character Building Classroom Flyer",
        file_id: "1Pu2ytuvjzS2zU7yg2_oxUGvusmXdv1b9",
        image: "/projects/deen-schooling/2_20260619_202903_0001.png",
        driveUrl: "https://drive.google.com/file/d/1Pu2ytuvjzS2zU7yg2_oxUGvusmXdv1b9/view"
      },
      {
        title: "Holistic Education & Moral Excellence Banner",
        file_id: "1G9z-Va1LuWMd6R8K9HJbRh8oFH6mVfpj",
        image: "/projects/deen-schooling/2_20260624_124007_0001.png",
        driveUrl: "https://drive.google.com/file/d/1G9z-Va1LuWMd6R8K9HJbRh8oFH6mVfpj/view"
      },
      {
        title: "Academic Excellence & Spiritual Growth Poster",
        file_id: "1uZlZhOptIaF1drSjNcsCRqpwEA5gD3kP",
        image: "/projects/deen-schooling/2_20260712_000212_0001.png",
        driveUrl: "https://drive.google.com/file/d/1uZlZhOptIaF1drSjNcsCRqpwEA5gD3kP/view"
      },
      {
        title: "Islamic Values in Modern Education Series",
        file_id: "11sqyJuE2IoISQTLAGj0E93G7hrX9c-G5",
        image: "/projects/deen-schooling/3_20260511_122743_0002.png",
        driveUrl: "https://drive.google.com/file/d/11sqyJuE2IoISQTLAGj0E93G7hrX9c-G5/view"
      },
      {
        title: "Annual Student Registration & Open Day Banner",
        file_id: "1sIFnau9bCKXR9vcWyNbDT-11b1EtO5fA",
        image: "/projects/deen-schooling/11_20260523_114137_0010.png",
        driveUrl: "https://drive.google.com/file/d/1sIFnau9bCKXR9vcWyNbDT-11b1EtO5fA/view"
      }
    ]
  },

  // 6. The Learning Club
  {
    id: "learning-club",
    name: "The Learning Club & Muslim Kids",
    category: "Kids & EdTech",
    client: "The Learning Club",
    description: "Engaging children's educational series: interactive activity sheets, illustrated vocabulary flashcards, workbook layouts, and visual storytelling kits for young learners.",
    coverImage: "/projects/learning-club/12_20260428_223617_0011.jpg",
    driveUrl: "https://drive.google.com/drive/folders/1cVozo30QPeCo_LRSIoK-PCKVicj7-0EI",
    tags: ["Kids EdTech", "Activity Sheets", "Flashcards", "Canva", "Playful Visuals"],
    images: [
      {
        title: "The Muslim Kids Activity Workbook (Cover)",
        file_id: "1m7cspM0oAThCGsMiViPzVo54pReW5kPU",
        image: "/projects/learning-club/12_20260428_223617_0011.jpg",
        driveUrl: "https://drive.google.com/file/d/1m7cspM0oAThCGsMiViPzVo54pReW5kPU/view"
      },
      {
        title: "Interactive Children's Illustrated Flashcards",
        file_id: "1XVkT3ckEY3HOFkOy7wFjk5LG5AVGSWAy",
        image: "/projects/learning-club/17_20260428_223618_0016.jpg",
        driveUrl: "https://drive.google.com/file/d/1XVkT3ckEY3HOFkOy7wFjk5LG5AVGSWAy/view"
      },
      {
        title: "Vocabulary Building Learning Sheets",
        file_id: "1p5ePWFOZDt3U8NB7tMuziDpO8QYo14St",
        image: "/projects/learning-club/18_20260428_223619_0017.jpg",
        driveUrl: "https://drive.google.com/file/d/1p5ePWFOZDt3U8NB7tMuziDpO8QYo14St/view"
      },
      {
        title: "Illustrated Islamic Story Cards for Kids",
        file_id: "1TuG6tA2Z-2TJCpXtLuPBkimHmtdNRqH5",
        image: "/projects/learning-club/19_20260428_223619_0018.jpg",
        driveUrl: "https://drive.google.com/file/d/1TuG6tA2Z-2TJCpXtLuPBkimHmtdNRqH5/view"
      },
      {
        title: "Creative Drawing & Coloring Activity Page",
        file_id: "1Sam1Nak7NuRZtILbqXjR2yzigjkXhHNw",
        image: "/projects/learning-club/21_20260428_223619_0020.jpg",
        driveUrl: "https://drive.google.com/file/d/1Sam1Nak7NuRZtILbqXjR2yzigjkXhHNw/view"
      },
      {
        title: "Early Childhood Educational Puzzle Layout",
        file_id: "1I3YFT5gvxlpXk2TqRohz2gfmR9mE_a3C",
        image: "/projects/learning-club/22_20260428_223619_0021.jpg",
        driveUrl: "https://drive.google.com/file/d/1I3YFT5gvxlpXk2TqRohz2gfmR9mE_a3C/view"
      },
      {
        title: "Good Deeds & Character Activity Cards",
        file_id: "1RFBpmKhOLLCoT5flDjgRCq1Wn_mvSP6v",
        image: "/projects/learning-club/25_20260428_223619_0024.jpg",
        driveUrl: "https://drive.google.com/file/d/1RFBpmKhOLLCoT5flDjgRCq1Wn_mvSP6v/view"
      },
      {
        title: "Alphabet & Phonics Learning Poster",
        file_id: "1xZehQteuiBP8gOY97FaMep2boagnWIIN",
        image: "/projects/learning-club/10_20260428_223614_0009.jpg",
        driveUrl: "https://drive.google.com/file/d/1xZehQteuiBP8gOY97FaMep2boagnWIIN/view"
      }
    ]
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
  
  // Active Folder Gallery Modal State
  const [activeFolder, setActiveFolder] = useState<ProjectFolder | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openFolderModal = (folder: ProjectFolder, startIndex: number = 0) => {
    setActiveFolder(folder);
    setActiveImageIndex(startIndex);
  };

  const closeFolderModal = () => {
    setActiveFolder(null);
    setActiveImageIndex(0);
  };

  const nextImage = () => {
    if (!activeFolder) return;
    setActiveImageIndex((prev) => (prev + 1) % activeFolder.images.length);
  };

  const prevImage = () => {
    if (!activeFolder) return;
    setActiveImageIndex((prev) => (prev - 1 + activeFolder.images.length) % activeFolder.images.length);
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeFolder) return;
      if (e.key === "Escape") closeFolderModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeFolder]);

  const filteredFolders = projectFolders.filter((folder) => {
    const matchesCategory = selectedCategory === "All Projects" || folder.category === selectedCategory;
    const matchesSearch = 
      folder.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      folder.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      folder.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      folder.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalAssetsCount = projectFolders.reduce((acc, f) => acc + f.images.length, 0);

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
              {totalAssetsCount}+ Verified Google Drive Assets
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
            <span>Multi-Image Project Galleries • 2024–2025</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 font-serif text-[#2B1004] dark:text-[#FFF2EF]">
            Project Folders & Galleries
          </h1>

          <p className="text-lg md:text-xl text-[#2B1004]/80 dark:text-[#FFF2EF]/80 max-w-3xl mx-auto leading-relaxed font-sans font-medium mb-8">
            Click any project folder to open the full interactive gallery modal and browse every single image and deliverable inside!
          </p>
        </motion.div>

        {/* Search & Filter Controls */}
        <div className="max-w-4xl mx-auto space-y-5">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-[#2B1004]/60 dark:text-[#FFF2EF]/60" />
            <input
              type="text"
              placeholder="Search by client, folder name, or skill (e.g. Skincare, Carousels, B2B, Posters, Linksols)..."
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

      {/* Grid of Folder Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <AnimatePresence>
          {filteredFolders.map((folder, index) => (
            <motion.div
              key={folder.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="p-6 rounded-[2.25rem] border-2 border-[#2B1004] bg-[#2B1004] text-[#FFF2EF] shadow-2xl flex flex-col justify-between group hover:border-[#C48B71] transition-all duration-300"
            >
              <div>
                {/* Cover Image with Multi-Image Stack Badge */}
                <div 
                  onClick={() => openFolderModal(folder, 0)}
                  className="relative w-full h-64 rounded-2xl overflow-hidden mb-5 bg-black/40 border border-white/15 cursor-pointer group/img"
                >
                  <img
                    src={folder.coverImage}
                    alt={folder.name}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 filter contrast-105"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-center p-4">
                    <span className="px-4 py-2 rounded-full bg-[#C48B71] text-[#2B1004] font-extrabold text-xs flex items-center gap-2 shadow-lg scale-95 group-hover/img:scale-100 transition-transform">
                      <Eye className="w-4 h-4" />
                      <span>Open Folder Gallery ({folder.images.length} Images)</span>
                    </span>
                  </div>

                  {/* Top Left: Category */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-bold text-[#F3DB9A] border border-white/20">
                      {folder.category}
                    </span>
                  </div>

                  {/* Top Right: Multi-Image Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-[#C48B71] text-[#2B1004] text-[11px] font-extrabold flex items-center gap-1.5 shadow-md">
                      <Layers className="w-3.5 h-3.5" />
                      <span>{folder.images.length} Images</span>
                    </span>
                  </div>
                </div>

                {/* Folder Meta & Name */}
                <span className="text-xs font-bold text-[#F3DB9A] uppercase tracking-wider block mb-1">
                  Client: {folder.client}
                </span>

                <h3 className="text-xl font-extrabold text-[#FFF2EF] mb-2 font-serif group-hover:text-[#F3DB9A] transition-colors leading-snug">
                  {folder.name}
                </h3>

                <p className="text-xs text-[#FFF2EF]/80 leading-relaxed mb-4 font-sans line-clamp-2">
                  {folder.description}
                </p>

                {/* Mini Image Preview Strip */}
                <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1">
                  {folder.images.slice(0, 4).map((img, idx) => (
                    <div 
                      key={idx}
                      onClick={() => openFolderModal(folder, idx)}
                      className="w-12 h-12 rounded-lg overflow-hidden bg-black/30 border border-white/20 cursor-pointer shrink-0 hover:border-[#F3DB9A] transition-colors"
                      title={img.title}
                    >
                      <img src={img.image} alt={img.title} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  {folder.images.length > 4 && (
                    <div 
                      onClick={() => openFolderModal(folder, 4)}
                      className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-[11px] font-bold text-[#F3DB9A] cursor-pointer shrink-0 hover:bg-white/20"
                    >
                      +{folder.images.length - 4}
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {folder.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2.5 py-0.5 rounded-md bg-white/10 text-[#FFF2EF] font-semibold border border-white/15">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-white/15 flex items-center justify-between gap-2">
                <button
                  onClick={() => openFolderModal(folder, 0)}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#F3DB9A] hover:text-white transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View All {folder.images.length} Images</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/923242428418?text=Hello%20Sumaira,%20I%20want%20to%20order%20designs%20similar%20to%20${encodeURIComponent(folder.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-[#C48B71] text-[#2B1004] font-extrabold text-xs hover:bg-[#F3DB9A] transition-colors shadow flex items-center gap-1"
                  >
                    <span>Inquire</span>
                    <Send className="w-3 h-3" />
                  </a>

                  <a
                    href={folder.driveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FFF2EF] border border-white/20 transition-colors"
                    title="View Folder on Google Drive"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Interactive Multi-Image Folder Gallery Modal */}
      <AnimatePresence>
        {activeFolder && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-lg">
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="max-w-4xl w-full p-6 md:p-8 rounded-[2.5rem] bg-[#2B1004] text-[#FFF2EF] border-2 border-[#2B1004] shadow-2xl relative max-h-[94vh] flex flex-col justify-between overflow-hidden"
            >
              {/* Modal Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-[#F3DB9A] uppercase tracking-wider">
                      {activeFolder.category} • Client: {activeFolder.client}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-[11px] font-extrabold text-[#FFF2EF]">
                      Image {activeImageIndex + 1} of {activeFolder.images.length}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#FFF2EF] font-serif">
                    {activeFolder.name}
                  </h3>
                </div>

                <button
                  onClick={closeFolderModal}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#FFF2EF] font-bold cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image Stage with Next / Prev Navigation */}
              <div className="relative w-full my-4 flex-1 min-h-[35vh] max-h-[50vh] rounded-2xl overflow-hidden bg-black/60 border border-white/15 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    src={activeFolder.images[activeImageIndex].image}
                    alt={activeFolder.images[activeImageIndex].title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full object-contain max-h-[50vh]"
                  />
                </AnimatePresence>

                {/* Left Arrow */}
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#C48B71] hover:text-[#2B1004] text-[#FFF2EF] flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg z-10"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#C48B71] hover:text-[#2B1004] text-[#FFF2EF] flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg z-10"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Image Title & Caption */}
              <div className="text-center mb-3">
                <h4 className="text-sm md:text-base font-bold text-[#FFF2EF]">
                  {activeFolder.images[activeImageIndex].title}
                </h4>
              </div>

              {/* Thumbnail Strip (Click to Jump) */}
              <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 mb-3 max-w-full">
                {activeFolder.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      activeImageIndex === idx
                        ? "border-[#F3DB9A] scale-105 shadow-md"
                        : "border-white/20 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img.image} alt={img.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Modal Bottom Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/15">
                <a
                  href={`https://wa.me/923242428418?text=Hello%20Sumaira,%20I%20want%20to%20order%20designs%20from%20${encodeURIComponent(activeFolder.name)}%20(Image:%20${encodeURIComponent(activeFolder.images[activeImageIndex].title)})`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#C48B71] text-[#2B1004] font-extrabold text-xs md:text-sm hover:bg-[#F3DB9A] transition-colors shadow-md flex items-center gap-2"
                >
                  <span>Order on WhatsApp</span>
                  <Send className="w-4 h-4" />
                </a>

                <a
                  href={activeFolder.images[activeImageIndex].driveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#FFF2EF] font-bold text-xs md:text-sm transition-colors"
                >
                  <span>Open Image in Drive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
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
