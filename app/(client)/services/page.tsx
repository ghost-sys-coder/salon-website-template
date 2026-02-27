"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceItem {
  category: string;
  name: string;
  description: string;
  startingPrice: string;
}

const services: ServiceItem[] = [
  // Hair Styling
  {
    category: "Hair Styling",
    name: "Precision Cut & Style",
    description:
      "Expertly tailored cuts with luxurious finishing touches for effortless elegance.",
    startingPrice: "From UGX 120,000",
  },
  {
    category: "Hair Styling",
    name: "Signature Balayage & Colour",
    description:
      "Hand-painted dimensional colour by master colourists trained in Paris and New York.",
    startingPrice: "From UGX 450,000",
  },
  {
    category: "Hair Styling",
    name: "Keratin Smoothing Treatment",
    description:
      "Transform frizz into silky, manageable hair with long-lasting results.",
    startingPrice: "From UGX 650,000",
  },

  // Braiding
  {
    category: "Braiding",
    name: "Classic Box Braids",
    description:
      "Neat, protective style with premium synthetic or human hair extensions.",
    startingPrice: "From UGX 280,000",
  },
  {
    category: "Braiding",
    name: "Cornrows & Feed-In Braids",
    description:
      "Intricate patterns and flawless execution for both protective and expressive looks.",
    startingPrice: "From UGX 180,000",
  },
  {
    category: "Braiding",
    name: "Knotless Braids",
    description:
      "Gentle, natural-looking installation with minimal tension on the scalp.",
    startingPrice: "From UGX 350,000",
  },

  // Nails
  {
    category: "Nails",
    name: "Couture Manicure",
    description:
      "Luxury nail shaping, cuticle care, and premium polish application.",
    startingPrice: "From UGX 80,000",
  },
  {
    category: "Nails",
    name: "Gel X / Acrylic Extensions",
    description:
      "Durable, lightweight extensions with custom nail art and 3D embellishments.",
    startingPrice: "From UGX 180,000",
  },
  {
    category: "Nails",
    name: "Spa Pedicure",
    description:
      "Deep exfoliation, hot stone massage, and long-lasting polish or gel finish.",
    startingPrice: "From UGX 120,000",
  },

  // Makeup
  {
    category: "Makeup",
    name: "Natural Glow Makeup",
    description:
      "Flawless, radiant base with soft definition for everyday elegance.",
    startingPrice: "From UGX 150,000",
  },
  {
    category: "Makeup",
    name: "Full Glam Bridal Makeup",
    description:
      "Airbrushed perfection, long-wear formula, and trial session included.",
    startingPrice: "From UGX 450,000",
  },
  {
    category: "Makeup",
    name: "Event / Editorial Makeup",
    description:
      "Bold, camera-ready looks tailored for photoshoots, galas, and special occasions.",
    startingPrice: "From UGX 250,000",
  },

  // Treatment Packages
  {
    category: "Treatment Packages",
    name: "Ultimate Relaxation Day",
    description:
      "60-min massage + luxury facial + scalp treatment + express manicure.",
    startingPrice: "From UGX 550,000",
  },
  {
    category: "Treatment Packages",
    name: "Bridal Beauty Prep Package",
    description:
      "Trial makeup + hair trial + pre-wedding facial + lash lift & tint.",
    startingPrice: "From UGX 1,200,000",
  },
  {
    category: "Treatment Packages",
    name: "Wellness Rejuvenation",
    description:
      "Deep tissue massage + hydrating facial + aromatherapy scalp massage.",
    startingPrice: "From UGX 380,000",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-obsidian overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-[0.025]" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-obsidian/60 to-obsidian" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-cream-50 leading-tight font-cormorant mb-6">
            Luxury Beauty Services
            <br />
            <span className="italic text-gold">Designed For You</span>
          </h1>
          <p className="text-sand-300/90 text-lg sm:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Each service is a ritual of precision, care, and artistry — crafted to reveal your most radiant self.
          </p>
          <motion.a
            href="#services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className={cn(
              "mt-10 inline-flex items-center gap-3 px-10 py-5 border-2 border-gold/60 text-gold",
              "hover:bg-gold hover:text-obsidian transition-all duration-500",
              "uppercase tracking-[0.25rem] text-sm font-light rounded-sm"
            )}
          >
            Explore Services
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 sm:py-32 bg-cream-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          {["Hair Styling", "Braiding", "Nails", "Makeup", "Treatment Packages"].map(
            (category) => {
              const categoryServices = services.filter((s) => s.category === category);

              return (
                <div key={category} className="mb-24 last:mb-0">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="text-4xl sm:text-5xl font-light text-obsidian font-cormorant mb-12 text-center"
                  >
                    {category}
                  </motion.h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {categoryServices.map((service, idx) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        className={cn(
                          "group relative bg-white/5 backdrop-blur-sm border border-sand-200/20 rounded-lg p-8",
                          "hover:border-gold/40 hover:shadow-gold/10 transition-all duration-500"
                        )}
                      >
                        <h3 className="text-cream-50 text-2xl font-light font-cormorant mb-4 group-hover:text-gold transition-colors">
                          {service.name}
                        </h3>

                        <p className="text-sand-300/80 text-base leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-gold text-xl font-light font-cormorant">
                            {service.startingPrice}
                          </span>

                          <a
                            href="#booking"
                            className={cn(
                              "inline-flex items-center gap-2 px-6 py-3 border border-gold/40 text-gold",
                              "hover:bg-gold hover:text-obsidian transition-all duration-500",
                              "text-sm uppercase tracking-[0.2rem] font-light rounded-sm"
                            )}
                          >
                            Book Now
                            <ArrowRight size={14} />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-obsidian text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-4xl sm:text-5xl font-light text-cream-50 font-cormorant mb-8"
          >
            Ready to Elevate Your Beauty?
          </motion.h2>
          <p className="text-sand-300/80 text-lg mb-10 max-w-2xl mx-auto">
            Book your appointment today and experience the Maison Élara difference.
          </p>
          <motion.a
            href="#booking"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={cn(
              "inline-flex items-center gap-3 px-12 py-6 bg-transparent border-2 border-gold text-gold",
              "hover:bg-gold hover:text-obsidian transition-all duration-500",
              "uppercase tracking-[0.25rem] text-base font-light rounded-sm shadow-gold/10 hover:shadow-gold/30"
            )}
          >
            Book Your Appointment
            <ArrowRight size={18} />
          </motion.a>
        </div>
      </section>
    </div>
  );
}