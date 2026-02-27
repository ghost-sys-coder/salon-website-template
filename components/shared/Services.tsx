"use client";

import { ArrowRight } from "lucide-react";
import { motion, cubicBezier } from "framer-motion";
import { cn } from "@/lib/utils";
import { services } from "@/constants";




// Staggered container variant
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Card entrance variant
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      className={cn(
        "group relative p-8 border border-sand-100/30 bg-obsidian",
        "hover:border-gold/30 transition-all duration-500 cursor-pointer",
        "overflow-hidden"
      )}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top border accent that grows on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Index number */}
      <div
        className={cn(
          "absolute top-6 right-8 text-sand-300/10 group-hover:text-gold/15 transition-colors duration-500",
          "text-[4rem] font-light leading-none font-cormorant"
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative z-10">
        {/* Symbol */}
        <div className="text-gold text-xl mb-5 font-light">{service.symbol}</div>

        {/* Tag */}
        {service.tag && (
          <span className="inline-block text-[0.6rem] tracking-[0.25em] uppercase text-gold border border-gold/40 px-2 py-0.5 mb-4">
            {service.tag}
          </span>
        )}

        <h3
          className={cn(
            "text-cream-100 text-2xl font-light mb-4 group-hover:text-cream-50 transition-colors",
            "font-cormorant"
          )}
        >
          {service.title}
        </h3>

        <p className="text-sand-300/55 text-sm leading-[1.8] mb-6 font-light">
          {service.description}
        </p>

        <div className="flex items-center justify-between">
          <span
            className={cn("text-gold font-light text-[1.1rem]", "font-cormorant")}
          >
            {service.price}
          </span>
          <span className="text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300">
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-28 bg-obsidian overflow-hidden">
      <div className="noise-overlay" />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
      />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 max-w-7xl">
        {/* Header - centered */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <span className="inline-block text-gold/70 text-sm tracking-[0.3em] uppercase font-light">
                Our Offerings
              </span>

              <h2
                className={cn(
                  "text-5xl sm:text-6xl font-light text-cream-50 leading-tight",
                  "font-cormorant"
                )}
              >
                Curated
                <br />
                <em className="italic">Services</em>
              </h2>

              <p className="text-sand-300/70 text-lg max-w-2xl mx-auto mt-6 font-light">
                Each service is a ritual — thoughtfully designed to restore, transform, and elevate.
              </p>
            </div>
          </motion.div>

          {/* Line separator */}
          <div className="w-24 h-px bg-gold/40 mt-10 mb-2" />

          {/* View Full Menu button - centered below separator */}
          <motion.a
            href="#booking"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={cn(
              "mt-8 inline-flex items-center gap-2 px-6 py-3 border border-sand-300/20",
              "text-cream-200 hover:text-cream-50 hover:border-sand-300/40",
              "transition-all duration-400 rounded-sm text-sm tracking-wide uppercase font-light"
            )}
          >
            <span>View Full Menu</span>
            <ArrowRight size={13} />
          </motion.a>
        </div>

        {/* Services grid with stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-sand-300/10"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}