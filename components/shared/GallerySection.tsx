"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { GalleryCard } from "./GalleryCard";
import Link from "next/link";

const filters = ["All", "Hair", "Nails", "Skin", "Bridal"] as const;

type Category = (typeof filters)[number];



const items: GalleryItem[] = [
  { category: "Hair", aspect: "portrait", label: "Color & Cut", image: "/assets/image-1.jpg" },
  { category: "Bridal", aspect: "landscape", label: "Bridal Style", image: "/assets/image-2.jpg" },
  { category: "Skin", aspect: "portrait", label: "Glow Treatment", image: "/assets/image-3.jpg" },
  { category: "Nails", aspect: "square", label: "Nail Art", image: "/assets/image-4.jpg" },
  { category: "Hair", aspect: "square", label: "Balayage", image: "/assets/image-5.jpg" },
  { category: "Bridal", aspect: "portrait", label: "Wedding Look", image: "/assets/image-6.jpg" },
];


export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered =
    activeFilter === "All"
      ? items
      : items.filter((i) => i.category === activeFilter);

  return (
    <section
      id="gallery"
      className="relative py-28 bg-linear-to-br from-cream-50 to-cream-100 overflow-hidden"
    >
      <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
        {/* Header + Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block text-gold/70 text-sm tracking-[0.3em] uppercase font-light mb-4">
              Portfolio
            </span>
            <h2 className="text-5xl sm:text-6xl font-light text-obsidian leading-tight font-cormorant">
              Our
              <br />
              <em className="italic">Work</em>
            </h2>
            <div className="w-20 h-px bg-gold/50 mx-auto lg:mx-0 mt-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={cn(
                    "px-5 py-2.5 text-xs sm:text-[0.7rem] tracking-[0.2em] uppercase font-light rounded-sm transition-all duration-400",
                    activeFilter === f
                      ? "bg-obsidian text-cream-50 border border-obsidian"
                      : "bg-transparent text-warm-gray border border-sand-200 hover:border-gold hover:text-obsidian"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Masonry grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <GalleryCard key={`${item.label}-${i}`} item={item} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <Link
            href="/gallery"
            className={cn(
              "inline-flex items-center gap-3 px-8 py-4 bg-obsidian text-cream-50 uppercase tracking-[0.2rem] text-sm font-light transition-all duration-500 hover:bg-gold hover:text-obsidian rounded-sm",
              "btn-luxury" // if you have this class, keep it
            )}
          >
            <span>View Full Gallery</span>
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}