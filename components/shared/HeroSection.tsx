"use client";

import { motion, cubicBezier } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "2.4k", label: "Happy Clients" },
  { value: "8", label: "Expert Artisans" },
];

// Stagger variants for hero content
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: cubicBezier(0.22, 0.68, 0, 1.2) },
  },
};

const lineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: cubicBezier(0.77, 0, 0.18, 1), delay: 0.6 },
  },
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-linear-to-br from-cream-50 via-cream-200 to-cream-300"
    >
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Large decorative background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none luxury-watermark"
      >
        Élara
      </div>

      {/* Decorative circles */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-[15%] right-[5%] w-72 h-72 rounded-full border border-gold/15 pointer-events-none"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        className="absolute top-[20%] right-[8%] w-44 h-44 rounded-full border border-gold/10 pointer-events-none"
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full pointer-events-none bg-luxury-radial"
      />

      {/* Main layout */}
      <div className="relative z-10 px-8 min-h-screen grid lg:grid-cols-2 gap-8 items-center pt-28 pb-16">
        {/* Left — Copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          <motion.div variants={itemVariants}>
            <Badge variant={"secondary"} className="mb-8 inline-flex">
              Est. 2008 · Sydney-Inspired
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-obsidian mb-6 font-cormorant text-7xl font-medium leading-[0.95] tracking-[-0.02em]"
          >
            Where Beauty
            <br />
            <em className="italic text-gold">Meets</em>
            <br />
            Artistry
          </motion.h1>

          {/* Animated gold line */}
          <motion.div
            variants={lineVariants}
            className="gold-divider mb-7"
          />

          <motion.p
            variants={itemVariants}
            className="text-warm-gray text-base leading-[1.85] max-w-md mb-10"
          >
            An elevated experience where every detail is curated for the
            discerning individual. Luxury hair, skin, and beauty treatments
            crafted by master artisans in a serene Parisian-inspired sanctuary.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <a href="#booking" className="btn-luxury">
              <span>Book Your Experience</span>
              <ArrowRight size={14} />
            </a>
            <a href="#services" className="btn-ghost-luxury">
              <span>Explore Services</span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex gap-10 pt-8 border-t border-sand-200/70"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span
                  className="gold-shimmer-text leading-none font-cormorant text-4xl font-medium"
                >
                  {stat.value}
                </span>
                <span className="text-[0.68rem] uppercase tracking-[0.18em] text-warm-muted font-light">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Visual composition */}
        <div className="hidden lg:flex items-center justify-center relative h-150">
          {/* Primary image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 0.68, 0, 1.2], delay: 0.5 }}
            className="animate-float absolute"
            style={{ top: "5%", left: "10%", width: "280px", height: "380px" }}
          >
            <div className="w-full h-full bg-linear-to-br from-sand-100 to-sand-300 relative overflow-hidden shadow-luxury">
              {/* Placeholder for real image */}
              <Image
                src="/assets/image-1.jpg"
                alt="Salon Interior"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center">
                  <span className="text-gold text-xl font-cormorant">✦</span>
                </div>
                <span className="text-warm-gray text-sm font-light tracking-wide font-cormorant">Salon Image</span>
              </div>
              {/* Bottom gold bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-gold to-gold-light" />
            </div>
          </motion.div>

          {/* Secondary image card */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 0.68, 0, 1.2], delay: 0.7 }}
            className="absolute"
            style={{ bottom: "8%", right: "5%", width: "200px", height: "260px" }}
          >
            <div className="w-full h-full bg-linear-to-br from-cream-300 to-sand-200 relative overflow-hidden shadow-card">
              <Image
                src="/assets/image-2.jpg"
                alt="Gallery Image"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="text-warm-gray/60 text-xs font-light tracking-widest uppercase">Gallery</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-gold to-transparent" />
            </div>
          </motion.div>

          {/* Award badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 0.68, 0, 1.2], delay: 1.0 }}
            className="absolute bottom-[18%] left-0 bg-cream-50 p-5 shadow-luxury border-l-[3px] border-gold min-w-47.5"
          >
            <div className="text-gold text-[0.6rem] tracking-[0.25em] uppercase mb-1">Award Winning</div>
            <div
              className="text-obsidian text-lg mb-0.5 font-cormorant font-medium"
            >
              Best Luxury Salon
            </div>
            <div className="text-warm-muted text-xs tracking-wide">City Style Awards 2024</div>
          </motion.div>

          {/* Rotating decorative ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="absolute top-[10%] right-[10%] w-20 h-20 rounded-full"
            style={{ border: "1px dashed rgba(184,151,90,0.3)" }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.6rem] tracking-[0.3em] uppercase text-warm-muted font-light">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
