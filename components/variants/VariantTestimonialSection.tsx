"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  initials: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Maison Élara is in a league of its own. The attention to detail, the luxurious atmosphere, and the absolute mastery of craft — I leave feeling like a completely transformed woman every single time.",
    author: "Sophie Laurent",
    role: "Regular Client since 2015",
    initials: "SL",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "I had my bridal preparation done here and it was the most beautiful experience. The team understood exactly the vision I had and delivered something beyond what I could have imagined. Pure artistry.",
    author: "Amara Osei",
    role: "Bridal Client, 2024",
    initials: "AO",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "As someone who has visited salons across London, Milan, and New York, I can confidently say that Maison Élara rivals the very best. Their colour work is extraordinary.",
    author: "Elena Marchetti",
    role: "VIP Client",
    initials: "EM",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "From the moment you walk in, you feel transported. The consultation process alone shows how much they genuinely care about each client. Truly an unmatched experience.",
    author: "Chloe Winters",
    role: "Client since 2019",
    initials: "CW",
    rating: 5,
  },
];

const variants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 60 : -60,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: cubicBezier(0.22, 0.68, 0, 1.2) },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -60 : 60,
    transition: { duration: 0.5, ease: cubicBezier(0.77, 0, 0.18, 1) },
  }),
};

export function VariantTestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const go = useCallback(
    (dir: 1 | -1) => {
      setDirection(dir);
      setCurrent((p) => (p + dir + testimonials.length) % testimonials.length);
    },
    []
  );

  useEffect(() => {
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [go]);

  return (
    <section
      id="testimonials"
      className="relative py-28 overflow-hidden bg-linear-to-br from-cream-50 to-cream-100"
    >
      {/* Giant decorative quote mark */}
      <div
        className={cn(
          "absolute top-0 left-10 select-none pointer-events-none",
          "font-cormorant text-[clamp(16rem,25vw,22rem)] font-light leading-none",
          "text-gold/7"
        )}
      >
        “
      </div>

      {/* Subtle horizontal line */}
      <div className="absolute inset-x-0 top-1/2 border-t border-sand-200/40 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold/70 text-sm tracking-[0.3em] uppercase font-light mb-4">
            Testimonials
          </span>
          <h2 className="text-5xl sm:text-6xl font-light text-obsidian leading-tight font-cormorant">
            Client
            <br />
            <em className="italic">Stories</em>
          </h2>
          <div className="w-24 h-px bg-gold/40 mx-auto mt-8" />
        </motion.div>

        {/* Carousel */}
        <div className="relative min-h-70 flex items-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full text-center px-4"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1.5 mb-8">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <p
                className={cn(
                  "text-obsidian italic mb-10 text-balance font-light",
                  "font-cormorant text-[clamp(1.2rem,2.4vw,1.7rem)] leading-[1.7]"
                )}
              >
                “{testimonials[current].quote}”
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center",
                    "text-cream-50 text-sm font-light tracking-wider font-cormorant",
                    "bg-linear-to-br from-gold to-gold-light"
                  )}
                >
                  {testimonials[current].initials}
                </div>
                <div className="text-left">
                  <div className="text-obsidian font-light tracking-wide text-sm">
                    {testimonials[current].author}
                  </div>
                  <div className="text-gold text-[0.65rem] tracking-[0.2em] uppercase mt-0.5 font-light">
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={() => go(-1)}
            className={cn(
              "w-11 h-11 flex items-center justify-center",
              "border border-sand-200 text-warm-gray",
              "hover:border-obsidian hover:bg-obsidian hover:text-cream-50",
              "transition-all duration-300 rounded-full"
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Progress dots (line style) */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={cn(
                  "h-px transition-all duration-500",
                  i === current ? "w-10 bg-gold" : "w-5 bg-sand-300 hover:bg-sand-400"
                )}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className={cn(
              "w-11 h-11 flex items-center justify-center",
              "border border-sand-200 text-warm-gray",
              "hover:border-obsidian hover:bg-obsidian hover:text-cream-50",
              "transition-all duration-300 rounded-full"
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}