"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TeamMember {
    name: string;
    title: string;
    description: string;
    expertise: string[];
    initials: string;
    // You can later add: imageUrl?: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Aisha Nakato",
        title: "Creative Director & Master Colourist",
        description:
            "With over 12 years of experience in high-end salons across Paris and London, Aisha leads our creative vision and personally oversees all colour transformations.",
        expertise: ["Balayage & Dimensional Colour", "Global Colour Corrections", "Bridal Colour Design"],
        initials: "AN",
    },
    {
        name: "Fatima Kizza",
        title: "Bridal & Editorial Specialist",
        description:
            "Trained in Milan and New York, Fatima specializes in creating timeless bridal looks and editorial-ready hair & makeup for fashion shoots and red-carpet events.",
        expertise: ["Bridal Updos", "Airbrush Makeup", "Editorial Styling"],
        initials: "FK",
    },
    {
        name: "Lena Mbabazi",
        title: "Luxury Nail Artist",
        description:
            "Lena brings couture-level nail artistry to every client, blending intricate 3D designs with flawless gel and chrome finishes.",
        expertise: ["Chrome & Mirror Nails", "Hand-painted Art", "Sculpted Extensions"],
        initials: "LM",
    },
    {
        name: "Sarah Oromait",
        title: "Wellness & Advanced Facial Expert",
        description:
            "Certified in European luxury spas, Sarah combines clinical-grade treatments with holistic techniques to deliver visible, long-lasting skin results.",
        expertise: ["Hydrafacial", "Microcurrent Lifting", "Custom LED Therapy"],
        initials: "SO",
    },
    {
        name: "Grace Nansubuga",
        title: "Lash & Brow Architect",
        description:
            "Grace is known for creating natural-looking yet dramatic lash and brow enhancements that perfectly frame each client’s face.",
        expertise: ["Russian Volume Lashes", "Hybrid Lash Sets", "Brow Lamination & Tint"],
        initials: "GN",
    },
];

export function TeamSection() {
    return (
        <section className="relative py-24 sm:py-32 bg-obsidian overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 noise-overlay opacity-[0.02] pointer-events-none" />

            <div className="relative z-10 container mx-auto px-6 lg:px-8 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="inline-block text-gold/70 text-sm tracking-[0.3em] uppercase font-light mb-4">
                        Our Artisans
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-cream-50 leading-tight font-cormorant">
                        Masters of Craft & Care
                    </h2>
                    <div className="w-20 h-px bg-gold/40 mx-auto mt-8" />
                    <p className="mt-6 text-sand-300/80 text-lg max-w-3xl mx-auto font-light">
                        Each member of our team is internationally trained and deeply passionate about creating transformative, personalized beauty experiences.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-10">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group relative"
                        >
                            {/* Circular avatar / placeholder */}
                            <div className="relative mx-auto mb-6 w-40 h-40">
                                <div
                                    className={cn(
                                        "absolute inset-0 rounded-full border-2 border-gold/30 transition-all duration-500",
                                        "group-hover:border-gold/60 group-hover:scale-105 group-hover:shadow-gold/20"
                                    )}
                                />
                                <div className="absolute inset-2 rounded-full bg-linear-to-br from-gold/10 to-sand-200/10 flex items-center justify-center overflow-hidden">
                                    <span className="text-gold/70 text-5xl font-light font-cormorant tracking-wider">
                                        {member.initials}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="text-center space-y-4 px-4">
                                <h3 className="text-2xl font-light text-cream-50 font-cormorant group-hover:text-gold transition-colors">
                                    {member.name}
                                </h3>

                                <p className="text-gold/90 text-sm font-light tracking-wide uppercase">
                                    {member.title}
                                </p>

                                <p className="text-sand-300/80 text-sm leading-relaxed min-h-18">
                                    {member.description}
                                </p>

                                <div className="pt-2">
                                    <p className="text-gold/70 text-xs tracking-[0.15em] uppercase font-light mb-2">
                                        Signature Expertise
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {member.expertise.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-[0.65rem] px-3 py-1 rounded-full border border-gold/20 text-gold/80 bg-gold/5"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Final statement */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <p className="text-sand-300/70 text-lg max-w-3xl mx-auto font-light italic">
                        We don&apos;t just style hair or apply makeup — we craft moments of confidence, beauty, and self-love.
                    </p>
                    <p className="mt-6 text-gold/80 text-sm tracking-wider uppercase font-light">
                        — The Maison Élara Team
                    </p>
                </motion.div>
            </div>
        </section>
    );
}