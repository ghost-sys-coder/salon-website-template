"use client";

import { cubicBezier, motion } from "framer-motion";
import { ArrowRight, Award, Users, Clock, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import PillarCard from "./PillarCard";
import Image from "next/image";

const pillars = [
  { Icon: Award, label: "Award Winning", desc: "Recognised by industry leaders" },
  { Icon: Users, label: "Expert Team", desc: "Internationally trained stylists" },
  { Icon: Clock, label: "Since 2008", desc: "15+ years of excellence" },
  { Icon: Star, label: "5-Star Rated", desc: "Consistently outstanding reviews" },
];

const values = [
  "Internationally Trained Artisans",
  "Luxury Product Lines Only",
  "Fully Personalised Consultations",
  "Serene & Exclusive Environment",
];


// Variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="relative py-28 overflow-hidden bg-cream-50">
      {/* Decorative large letterform */}
      <div
        className={cn(
          "absolute -top-10 -right-8 pointer-events-none select-none opacity-[0.04] leading-none",
          "font-cormorant text-[clamp(20rem,35vw,40rem)] font-light text-obsidian"
        )}
      >
        M
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left — Image composition (hidden on mobile for better UX) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Main placeholder image area -- I need to place an image here */}
            <div className="relative w-full shadow-luxury overflow-hidden aspect-4/5 group">

              {/* Background Image */}
              <Image
                src="/assets/image-8.jpg" // replace with your real image
                alt="Maison Élara Team"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Luxury gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-obsidian/60 via-obsidian/20 to-transparent" />

              {/* Optional subtle gold tint */}
              <div className="absolute inset-0 bg-gold/5 mix-blend-overlay" />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">

                <div className="w-16 h-16 rounded-full border border-gold/40 bg-obsidian/40 backdrop-blur-sm flex items-center justify-center">
                  <Users size={22} className="text-gold" />
                </div>

                <span className="text-cream-50 text-sm font-light tracking-widest uppercase">
                  Our Team
                </span>

              </div>

              {/* Gold corner accents */}
              <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-gold/40" />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-gold/40" />

            </div>

            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 0.68, 0, 1.2], delay: 0.4 }}
              className={cn(
                "absolute -bottom-8 -right-8 bg-cream-50 p-6 shadow-luxury max-w-55",
                "border-t-4 border-gold"
              )}
            >
              <p className="text-obsidian text-base italic leading-snug mb-3 font-cormorant">
                Beauty is not in the face; it is a light in the heart.
              </p>
              <span className="text-gold text-[0.6rem] tracking-[0.25em] uppercase font-light">
                Our Philosophy
              </span>
            </motion.div>

            {/* Accent offset square */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 0.68, 0, 1.2], delay: 0.2 }}
              className="absolute -top-6 -left-6 w-36 h-44 bg-linear-to-br from-cream-300 to-sand-200 shadow-card flex items-center justify-center"
            >
              <span className="text-warm-gray/40 text-xs tracking-widest uppercase font-light">
                Interior
              </span>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* Custom Section Header (reusable pattern you can extract later) */}
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-block text-gold/70 text-sm tracking-[0.3em] uppercase font-light mb-3">
                Our Story
              </span>
              <h2 className="text-5xl sm:text-6xl font-light text-obsidian leading-tight font-cormorant">
                Artisans of
                <br />
                <em className="italic">Beauty</em>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-warm-gray text-sm leading-[1.9] mb-5"
            >
              Founded in 2008, <strong>Inspire Me</strong> was born from a singular passion — to create a
              sanctuary where luxury and artistry converge. We believe that true beauty
              emerges when expert craft meets genuine care for the individual.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-warm-gray text-sm leading-[1.9] mb-10"
            >
              Our team of internationally trained stylists and therapists brings a collective
              80+ years of expertise, continually refining their craft at the world&apos;s most
              prestigious academies in Paris, Milan, and New York.
            </motion.p>

            {/* Values list */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
              {values.map((v) => (
                <div key={v} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span className="text-obsidian text-sm font-light tracking-wide">{v}</span>
                </div>
              ))}
            </motion.div>

            {/* Pillars grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-px bg-sand-100 mb-12"
            >
              {pillars.map((pillar) => (
                <motion.div key={pillar.label} variants={itemVariants}>
                  <PillarCard {...pillar} />
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              variants={itemVariants}
              href="#booking"
              className={cn(
                "btn-luxury self-start inline-flex items-center gap-3",
                "uppercase tracking-[0.2rem] text-sm text-cream-50 bg-obsidian px-8 py-4"
              )}
            >
              <span>Meet Our Team</span>
              <ArrowRight size={14} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}