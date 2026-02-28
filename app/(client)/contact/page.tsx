"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, Send, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Fake delay (in real app → send to backend / Formspree / EmailJS)
    await new Promise((r) => setTimeout(r, 1200));

    setFormStatus("success");
    setTimeout(() => setFormStatus("idle"), 5000);
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero / Intro */}
      <section className="relative py-32 md:py-40 bg-obsidian overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-[0.025]" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-obsidian/70 to-obsidian pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-light text-cream-50 leading-tight font-cormorant mb-6"
          >
            Get in Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-sand-300/90 text-xl sm:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            We’d love to hear from you — whether it’s a question, a compliment, or just to say hello.
          </motion.p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left – Contact Information & Social */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-12 lg:sticky lg:top-24 lg:self-start"
            >
              <div className="space-y-8">
                <h2 className="text-3xl sm:text-4xl font-light text-obsidian font-cormorant">
                  Inspire Me
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-obsidian font-light text-lg">61 Errol Street, North Melbourne,</p>
                      <p className="text-sand-300/80 mt-1 text-sm leading-relaxed">
                        North Melbourne, VIC, Australia, 3051
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-obsidian font-light text-lg">+61 491 570 159</p>
                      <p className="text-sand-300/70 mt-1 text-sm">Mon–Sat 9:00 AM – 8:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-obsidian font-light text-lg">support@salon.com</p>
                      <p className="text-sand-300/70 mt-1 text-sm">General inquiries & feedback</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h3 className="text-xl font-light text-obsidian font-cormorant">
                  Connect With Us
                </h3>
                <div className="flex gap-4 flex-wrap">
                  {[
                    { Icon: Instagram, href: "https://instagram.com/maisonelara", label: "Instagram" },
                    // { Icon: WhatsApp, href: "https://wa.me/256700123456", label: "WhatsApp" },
                    { Icon: Facebook, href: "https://facebook.com/maisonelara", label: "Facebook" },
                  ].map(({ Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.12, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full border border-gold/30 text-gold flex items-center justify-center hover:bg-gold/10 transition-colors duration-300"
                      aria-label={label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right – Quick Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-white/5 backdrop-blur-sm border border-sand-200/20 rounded-xl p-8 sm:p-12"
            >
              <h2 className="text-3xl font-light text-cream-50 font-cormorant mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sand-300/80 text-sm mb-2 font-light">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-4 bg-obsidian border border-sand-300/20 rounded-lg text-cream-50 placeholder:text-sand-300/40 focus:border-gold/60 focus:outline-none transition-all"
                    placeholder="How should we address you?"
                  />
                </div>

                <div>
                  <label className="block text-sand-300/80 text-sm mb-2 font-light">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-5 py-4 bg-obsidian border border-sand-300/20 rounded-lg text-cream-50 placeholder:text-sand-300/40 focus:border-gold/60 focus:outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sand-300/80 text-sm mb-2 font-light">
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    className="w-full px-5 py-4 bg-obsidian border border-sand-300/20 rounded-lg text-cream-50 placeholder:text-sand-300/40 focus:border-gold/60 focus:outline-none transition-all"
                    placeholder="+61 0491 570 159"
                  />
                </div>

                <div>
                  <label className="block text-sand-300/80 text-sm mb-2 font-light">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-5 py-4 bg-obsidian border border-sand-300/20 rounded-lg text-cream-50 placeholder:text-sand-300/40 focus:border-gold/60 focus:outline-none transition-all resize-none"
                    placeholder="Tell us how we can assist you..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className={cn(
                    "w-full py-5 mt-4 border-2 border-gold text-gold",
                    "hover:bg-gold hover:text-obsidian transition-all duration-500",
                    "uppercase tracking-[0.2rem] text-sm font-light rounded-sm flex items-center justify-center gap-3",
                    formStatus === "submitting" && "opacity-70 cursor-wait"
                  )}
                >
                  {formStatus === "submitting" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {formStatus === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-center text-gold mt-4 text-sm"
                    >
                      Thank you — your message has been received. We’ll get back to you soon.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-20"
          >
            <h3 className="text-2xl font-light text-center text-obsidian font-cormorant mb-8">
              Find Us
            </h3>
            <div className="aspect-4/3 sm:aspect-video bg-linear-to-br from-sand-200/10 to-cream-300/5 border border-sand-200/20 rounded-xl flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
                <p className="text-sand-300/70 text-lg font-light">
                  Map Integration Coming Soon
                </p>
                <p className="text-sand-300/60 text-sm mt-2">
                 61 Errol Street, North Melbourne - North Melbourne, VIC, Australia, 3051
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-linear-to-b from-cream-50 to-cream-100 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl font-light text-obsidian font-cormorant mb-6"
          >
            Prefer to Speak Directly?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sand-300/80 text-lg mb-10"
          >
            Call or WhatsApp us — we’re happy to assist with any questions.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+256700123456"
              className={cn(
                "inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-gold text-gold",
                "hover:bg-gold hover:text-obsidian transition-all duration-500",
                "uppercase tracking-[0.2rem] text-sm font-light rounded-sm"
              )}
            >
              Call Us Now <Phone size={18} />
            </a>
            <a
              href="https://wa.me/256773539420"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent border-2 border-gold/60 text-gold",
                "hover:bg-gold hover:text-obsidian transition-all duration-500",
                "uppercase tracking-[0.2rem] text-sm font-light rounded-sm"
              )}
            >
              WhatsApp Us <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}