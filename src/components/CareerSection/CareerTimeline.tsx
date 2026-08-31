import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Award, Sparkles, Users, Globe } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "2024 – Present",
      title: "Lead Brand Strategist & Visual Designer",
      subtitle: "Sumaira Faheem Creative Studio (Karachi & Remote)",
      description:
        "Crafting end-to-end branding identity kits, luxury packaging designs (Hayat Fragrance), and high-growth organic social media content for clients across Pakistan, USA, and GCC.",
      icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2025",
      title: "14th August Design Competition Winner",
      subtitle: "Infinity Touch Store Promotional Campaign",
      description:
        "Won 1st prize for designing the official Independence Day promotional ad campaign for laptops, recognized for outstanding visual hierarchy, conversion-driven typography, and patriotic branding.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2023 – 2024",
      title: "Social Media Creative Specialist",
      subtitle: "Freelance & B2B Digital Solution",
      description:
        "Designed 200+ Instagram carousels, Facebook ad banners, and e-commerce launch graphics. Delivered complete YouTube visual identity for Rahma Tariq's homeschooling live sessions.",
      icon: <Sparkles className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2021 – 2023",
      title: "Graphic & Brand Identity Designer",
      subtitle: "Digital Media & Brand Agency",
      description:
        "Created memorable vector logos, product box packaging, visiting cards, and social media post templates using Canva Pro, Adobe Illustrator, and Photoshop.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="Key milestones, competition wins, and brand collaborations"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
