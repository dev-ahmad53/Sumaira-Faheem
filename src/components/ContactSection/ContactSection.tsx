import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, CheckCircle2 } from "lucide-react";
import { Input } from "../lightswind/input";
import { Textarea } from "../lightswind/textarea";
import { Button } from "../lightswind/button";

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
        className="glass-panel p-8 md:p-12 rounded-[3rem] border border-2 border-[#0C0300] dark:border-[#FFF2EF]/30 relative overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-24">
          
          {/* Contact Info */}
          <div className="flex-1 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-2 border-[#0C0300] dark:border-[#FFF2EF]/30 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                <span>Let's Talk</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-serif">
                Let's <span className="text-gradient-primary">Connect</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Ready to elevate your brand visuals and social media presence? Reach out directly via WhatsApp, Phone, Email, or send a quick inquiry below!
              </p>
            </div>

            <div className="space-y-5">
              <a 
                href="https://wa.me/923242428418" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-emerald-400 transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform text-emerald-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block">Phone & WhatsApp:</span>
                  <span className="font-mono font-bold text-foreground group-hover:text-emerald-400">0324-2428418</span>
                </div>
              </a>

              <a 
                href="mailto:sumerabaig88@gmail.com" 
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block">Email Address:</span>
                  <span className="font-mono font-bold text-foreground group-hover:text-primary">sumerabaig88@gmail.com</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-foreground/80">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block">Location:</span>
                  <span className="font-bold text-foreground">Karachi, Pakistan (Global Remote)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 glass-panel p-8 rounded-[2rem] border border-2 border-[#0C0300] dark:border-[#FFF2EF]/30 relative">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Your Name</label>
                <Input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-2 border-[#0C0300] dark:border-[#FFF2EF]/30 text-foreground focus-visible:ring-primary placeholder:text-muted-foreground/50 text-sm"
                  placeholder="e.g. Fatima / Subhan"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Your Phone or Email</label>
                <Input 
                  type="text" 
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-2 border-[#0C0300] dark:border-[#FFF2EF]/30 text-foreground focus-visible:ring-primary placeholder:text-muted-foreground/50 text-sm"
                  placeholder="03xx-xxxxxxx or email"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Service Needed</label>
                <select 
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-xl py-2.5 px-3.5 bg-foreground/5 border border-2 border-[#0C0300] dark:border-[#FFF2EF]/30 text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm font-medium"
                >
                  <option value="Brand Identity & Logo" className="bg-background text-foreground">Logo & Brand Identity</option>
                  <option value="Social Media Posts & Grid" className="bg-background text-foreground">Social Media Posts & Feed Design</option>
                  <option value="Product Packaging & Labels" className="bg-background text-foreground">Product Packaging & Perfume Labels</option>
                  <option value="LinkedIn Carousels & Banners" className="bg-background text-foreground">LinkedIn Carousels & Ad Creatives</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Project Details</label>
                <Textarea 
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-2 border-[#0C0300] dark:border-[#FFF2EF]/30 text-foreground focus-visible:ring-primary resize-none placeholder:text-muted-foreground/50 min-h-[90px] text-sm"
                  placeholder="Tell me about your business and timeframe..."
                />
              </div>

              <Button size="lg" className="w-full rounded-xl bg-primary text-primary-foreground font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] mt-4 h-12 cursor-pointer">
                Send to WhatsApp / Inquire <Send className="w-4 h-4 ml-1" />
              </Button>

              {submitted && (
                <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold text-center flex items-center justify-center gap-2 animate-fade-in">
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
