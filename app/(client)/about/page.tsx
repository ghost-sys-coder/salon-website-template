"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Award, Heart, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { VariantTestimonialsSection } from "@/components/variants/VariantTestimonialSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-obsidian overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-[0.025]" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-obsidian/70 to-obsidian pointer-events-none" />

        {/* Large decorative letter */}
        <div
          className={cn(
            "absolute bottom-0 right-0 select-none pointer-events-none opacity-[0.06]",
            "font-cormorant text-[clamp(30rem,50vw,60rem)] font-light leading-none text-gold"
          )}
        >
          É
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-light text-cream-50 leading-tight font-cormorant mb-8"
          >
            The Art of
            <br />
            <span className="italic text-gold">Timeless Beauty</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-sand-300/90 text-xl sm:text-2xl max-w-4xl mx-auto font-light leading-relaxed"
          >
            Maison Élara is more than a salon — it is a sanctuary where craftsmanship, luxury, and genuine care converge to celebrate the individual beauty of every client.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mt-12"
          >
            <a
              href="#story"
              className={cn(
                "inline-flex items-center gap-3 px-10 py-5 border-2 border-gold/60 text-gold",
                "hover:bg-gold hover:text-obsidian transition-all duration-500",
                "uppercase tracking-[0.25rem] text-sm font-light rounded-sm"
              )}
            >
              Discover Our Story
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="py-24 sm:py-32 bg-cream-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1 }}
              className="space-y-8"
            >
              <span className="inline-block text-gold/70 text-sm tracking-[0.3em] uppercase font-light">
                Our Journey
              </span>

              <h2 className="text-4xl sm:text-5xl font-light text-obsidian font-cormorant leading-tight">
                Founded in Pursuit of Perfection
              </h2>

              <div className="space-y-6 text-sand-300/90 text-lg leading-relaxed font-light">
                <p>
                  Maison Élara was born in 2018 from a deep passion for elevating beauty beyond trends — into something timeless, personal, and transformative.
                </p>
                <p>
                  Our founder, after years of training in the most prestigious salons of Paris, Milan, and New York, returned home with one mission: to create a space where world-class artistry meets genuine warmth and attention to the individual.
                </p>
                <p>
                  Today, every service is performed by internationally trained artisans who continue to refine their craft through ongoing education and collaboration with global luxury beauty houses.
                </p>
              </div>
            </motion.div>

            {/* Right - Values Grid */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.2 }}
              className="grid grid-cols-2 gap-px bg-sand-200/20"
            >
              {[
                { icon: Heart, label: "Personalised Care", desc: "Every client is unique — your experience is designed around you." },
                { icon: Award, label: "World-Class Craft", desc: "Trained in the finest academies across Europe and North America." },
                { icon: Sparkles, label: "Luxury Products", desc: "Exclusively using premium, clean, and high-performance lines." },
                { icon: Users, label: "Serene Sanctuary", desc: "A calm, private environment that feels like an escape." },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-cream-50/5 backdrop-blur-sm p-8 flex flex-col items-center text-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-gold">
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-gold text-xl font-light font-cormorant">{item.label}</h4>
                  <p className="text-sand-300/80 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Highlight */}
      <section className="py-24 sm:py-32 bg-obsidian">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-gold/70 text-sm tracking-[0.3em] uppercase font-light mb-4">
              Our Artisans
            </span>
            <h2 className="text-4xl sm:text-5xl font-light text-cream-50 font-cormorant">
              Masters of Their Craft
            </h2>
            <div className="w-24 h-px bg-gold/40 mx-auto mt-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { name: "Martha Courtney", title: "Creative Director & Master Colourist", origin: "Trained in Paris & London" },
              { name: "Alexadria Audrey", title: "Bridal & Editorial Specialist", origin: "Milan & New York" },
              { name: "Lena M.", title: "Luxury Nail Artist", origin: "International certifications" },
              { name: "Sarah O.", title: "Wellness & Facial Expert", origin: "European luxury spas" },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gold/30 bg-linear-to-br from-sand-200/20 to-cream-300/10 flex items-center justify-center">
                  <span className="text-gold/40 text-4xl font-cormorant font-light">
                    {member.name.split(" ")[0][0]}
                    {member.name.split(" ")[1][0]}
                  </span>
                </div>
                <h4 className="text-cream-50 text-xl font-light font-cormorant mb-2 group-hover:text-gold transition-colors">
                  {member.name}
                </h4>
                <p className="text-sand-300/80 text-sm mb-1">{member.title}</p>
                <p className="text-gold/60 text-xs tracking-wider uppercase font-light">
                  {member.origin}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <VariantTestimonialsSection />


      {/* Final CTA */}
      <section className="py-24 bg-linear-to-b from-obsidian to-obsidian/90 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl font-light text-cream-50 font-cormorant mb-8"
          >
            Ready to Experience Maison Élara?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sand-300/80 text-lg mb-12 max-w-3xl mx-auto"
          >
            Step into a world where beauty is treated as art, and every detail is crafted with intention.
          </motion.p>

          <motion.a
            href="#booking"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={cn(
              "inline-flex items-center gap-3 px-12 py-6 border-2 border-gold text-gold",
              "hover:bg-gold hover:text-obsidian transition-all duration-500",
              "uppercase tracking-[0.25rem] text-base font-light rounded-sm shadow-gold/10 hover:shadow-gold/30"
            )}
          >
            Book Your Journey
            <ArrowRight size={18} />
          </motion.a>
        </div>
      </section>
    </div>
  );
}