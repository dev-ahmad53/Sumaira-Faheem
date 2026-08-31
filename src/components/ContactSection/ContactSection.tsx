import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, CheckCircle2 } from "lucide-react";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState("Brand Identity & Logo");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Direct WhatsApp message with pre-filled details
    const text = encodeURIComponent(
      `Hi Sumaira! My name is ${name}. I am looking for ${service}. Message: ${message}. Contact: ${contact}`
    );
    window.open(`https://wa.me/923242428418?text=${text}`, "_blank");

    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setContact("");
      setMessage("");
    }, 4000);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="p-8 md:p-12 rounded-[3rem] border-2 border-[#2B1004] bg-[#2B1004] text-[#FFF2EF] shadow-2xl relative overflow-hidden"
      >
        <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-20">
          
          {/* Left: Contact Details */}
          <div className="flex-1 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FFF2EF] text-xs font-bold uppercase tracking-wider mb-4">
                <span>Let's Talk</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-serif text-[#FFF2EF]">
                Let's <span className="brand-aurora-text font-serif">Connect</span>
              </h2>
              <p className="text-[#FFF2EF]/85 leading-relaxed text-base">
                Ready to elevate your brand visuals and social media presence? Reach out directly via WhatsApp, Phone, Email, or send a quick inquiry below!
              </p>
            </div>

            <div className="space-y-5">
              <a 
                href="https://wa.me/923242428418" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-4 text-[#FFF2EF]/90 hover:text-emerald-400 transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#FFF2EF]/70 block font-semibold">Phone & WhatsApp:</span>
                  <span className="font-mono font-bold text-[#FFF2EF] group-hover:text-emerald-400 text-sm">0324-2428418</span>
                </div>
              </a>

              <a 
                href="mailto:sumerabaig88@gmail.com" 
                className="flex items-center gap-4 text-[#FFF2EF]/90 hover:text-[#F3DB9A] transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform text-[#F3DB9A]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#FFF2EF]/70 block font-semibold">Email Address:</span>
                  <span className="font-mono font-bold text-[#FFF2EF] group-hover:text-[#F3DB9A] text-sm">sumerabaig88@gmail.com</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-[#FFF2EF]/90 group">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#FFF2EF]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#FFF2EF]/70 block font-semibold">Location:</span>
                  <span className="font-bold text-[#FFF2EF] text-sm">Karachi, Pakistan (Global Remote)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Form */}
          <div className="flex-1 p-8 rounded-[2.5rem] bg-white/5 border border-white/15 relative">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold text-[#F3DB9A] uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl py-3 px-4 bg-white/10 border border-white/20 text-[#FFF2EF] focus:outline-none focus:border-[#F3DB9A] placeholder:text-[#FFF2EF]/50 text-sm font-medium"
                  placeholder="e.g. Fatima / Subhan"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-[#F3DB9A] uppercase tracking-wider mb-1.5">
                  Your Phone or Email
                </label>
                <input 
                  type="text" 
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full rounded-xl py-3 px-4 bg-white/10 border border-white/20 text-[#FFF2EF] focus:outline-none focus:border-[#F3DB9A] placeholder:text-[#FFF2EF]/50 text-sm font-medium"
                  placeholder="03xx-xxxxxxx or email"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#F3DB9A] uppercase tracking-wider mb-1.5">
                  Service Needed
                </label>
                <select 
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-xl py-3 px-4 bg-white/10 border border-white/20 text-[#FFF2EF] focus:outline-none focus:border-[#F3DB9A] text-sm font-semibold"
                >
                  <option value="Brand Identity & Logo" className="bg-[#2B1004] text-[#FFF2EF]">Logo & Brand Identity</option>
                  <option value="Social Media Posts & Grid" className="bg-[#2B1004] text-[#FFF2EF]">Social Media Posts & Feed Design</option>
                  <option value="Product Packaging & Labels" className="bg-[#2B1004] text-[#FFF2EF]">Product Packaging & Perfume Labels</option>
                  <option value="LinkedIn Carousels & Banners" className="bg-[#2B1004] text-[#FFF2EF]">LinkedIn Carousels & Ad Creatives</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-[#F3DB9A] uppercase tracking-wider mb-1.5">
                  Project Details
                </label>
                <textarea 
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl py-3 px-4 bg-white/10 border border-white/20 text-[#FFF2EF] focus:outline-none focus:border-[#F3DB9A] resize-none placeholder:text-[#FFF2EF]/50 min-h-[90px] text-sm font-medium"
                  placeholder="Tell me about your business and timeframe..."
                />
              </div>

              <button 
                type="submit"
                className="w-full rounded-xl bg-[#C48B71] text-[#2B1004] font-extrabold text-sm tracking-wide shadow-lg hover:bg-[#F3DB9A] transition-colors mt-4 h-12 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send to WhatsApp / Inquire</span>
                <Send className="w-4 h-4" />
              </button>

              {submitted && (
                <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold text-center flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Message prepared! Opening WhatsApp inquiry...
                </div>
              )}
            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
