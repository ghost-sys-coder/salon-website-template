"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
  { Icon: Instagram, href: "https://instagram.com/maisonelara" },
  { Icon: Facebook, href: "https://facebook.com/maisonelara" },
  { Icon: Twitter, href: "https://x.com/maisonelara" },
  { Icon: Linkedin, href: "https://linkedin.com/company/maisonelara" },
];

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Book Now", href: "#booking" },
];

const contactInfo = [
  { Icon: MapPin, text: "61 Errol Street, North Melbourne, North Melbourne, VIC, Australia, 3051" },
  { Icon: Phone, text: "0491 570 159" },
  { Icon: Mail, text: "support@saloon.com" },
];

export function VariantFooter() {
  return (
    <footer className="relative bg-obsidian text-cream-50 overflow-hidden">
      {/* Subtle noise overlay */}
      <div className="absolute inset-0 noise-overlay opacity-[0.015] pointer-events-none" />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 py-16 lg:py-20 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand & Tagline */}
          <div className="space-y-6">
            <h3 className="text-3xl sm:text-4xl font-light font-cormorant text-gold">
              Inspire Me
            </h3>
            <p className="text-sand-300/80 text-base font-light leading-relaxed max-w-xs">
              Where luxury meets artistry. A sanctuary of refined beauty crafted with precision and care.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-gold text-lg font-light font-cormorant tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sand-300/80 hover:text-gold transition-colors duration-300 text-sm font-light tracking-wide flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-gold text-lg font-light font-cormorant tracking-wide">
              Get in Touch
            </h4>
            <ul className="space-y-5">
              {contactInfo.map(({ Icon, text }, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-9 h-9 flex items-center justify-center rounded-sm border border-gold/30 text-gold shrink-0">
                    <Icon size={16} />
                  </div>
                  <span className="text-sand-300/80 text-sm font-light leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Hours */}
          <div className="space-y-6">
            <h4 className="text-gold text-lg font-light font-cormorant tracking-wide">
              Stay Connected
            </h4>
            <p className="text-sand-300/70 text-sm font-light">
              Subscribe for exclusive offers, seasonal inspirations, and first access to new services.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className={cn(
                  "px-5 py-3 bg-obsidian border border-sand-300/20 text-cream-50",
                  "placeholder:text-sand-300/40 focus:border-gold/50 focus:outline-none transition-all duration-300 rounded-sm text-sm"
                )}
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={cn(
                  "py-3 px-6 bg-transparent border-2 border-gold/60 text-gold",
                  "hover:bg-gold hover:text-obsidian transition-all duration-500",
                  "uppercase tracking-[0.2rem] text-xs font-light rounded-sm"
                )}
              >
                Subscribe
              </motion.button>
            </form>

            <div className="pt-4">
              <p className="text-sand-300/60 text-xs font-light">
                © {new Date().getFullYear()} Inspire Me. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-10 border-t border-sand-200/10 text-center text-sand-300/60 text-xs tracking-wide font-light">
          Crafted with precision • Designed for elegance • Inspired by beauty
        </div>
      </div>
    </footer>
  );
}