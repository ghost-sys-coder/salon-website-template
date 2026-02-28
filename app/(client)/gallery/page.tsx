"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { galleryImages } from "@/constants/images";
import { VariantTestimonialsSection } from "@/components/variants/VariantTestimonialSection";


export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-cream-50">
            {/* Hero */}
            <section className="relative py-32 md:py-40 bg-obsidian overflow-hidden">
                <div className="absolute inset-0 noise-overlay opacity-[0.025]" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-obsidian/60 to-obsidian pointer-events-none" />

                <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-light text-cream-50 font-cormorant mb-6 leading-tight"
                    >
                        Capturing Moments
                        <br />
                        <span className="italic text-gold">of Transformation</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-sand-300/90 text-xl sm:text-2xl max-w-3xl mx-auto font-light"
                    >
                        Every look tells a story of artistry, precision, and confidence rediscovered.
                    </motion.p>
                </div>
            </section>

            {/* Main Gallery – Masonry + Before/After */}
            <section className="py-16 sm:py-24 bg-cream-50" id="gallery">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {galleryImages.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="group break-inside-avoid mb-6 relative overflow-hidden rounded-lg shadow-subtle hover:shadow-gold/20 transition-shadow duration-500"
                            >
                                {item.isBeforeAfter ? (
                                    <div className="relative aspect-4/5 bg-black/20">
                                        {/* Before/After toggle effect */}
                                        <div className="absolute inset-0">
                                            <Image
                                                src={item.after ?? "/images/placeholder-after.jpg"}
                                                alt={`${item.title} - After`}
                                                className="w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                                                width={400}
                                                height={500}
                                            />
                                            <Image
                                                src={item.before ?? "/images/placeholder-before.jpg"}
                                                alt={`${item.title} - Before`}
                                                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                                width={400}
                                                height={500}
                                            />
                                        </div>

                                        <div className="absolute inset-0 bg-linear-to-t from-obsidian/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                            <div className="text-white">
                                                <p className="text-gold text-sm tracking-wider uppercase mb-1">Before / After</p>
                                                <h3 className="text-xl font-light font-cormorant">{item.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative aspect-square sm:aspect-4/5">
                                        <Image
                                            src={item.after ?? "/images/placeholder.jpg"}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            width={400}
                                            height={500}
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                            <p className="text-gold text-sm tracking-wider uppercase mb-2">{item.category}</p>
                                            <h3 className="text-xl font-light font-cormorant text-cream-50">{item.title}</h3>
                                        </div>
                                    </div>
                                )}

                                {/* Social overlay */}
                                <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <button type="button" className="w-9 h-9 rounded-full bg-obsidian/80 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-gold hover:text-obsidian transition-colors">
                                        <Heart size={16} />
                                        <span className="sr-only">Like</span>
                                    </button>
                                    <button type="button" className="w-9 h-9 rounded-full bg-obsidian/80 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-gold hover:text-obsidian transition-colors">
                                        <Share2 size={16} />
                                        <span className="sr-only">Share</span>
                                    </button>
                                </div>

                                <div className="absolute bottom-4 left-4 text-xs text-cream-50/70 font-light">
                                    {item.likes} likes
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Instagram-style feed teaser  -- I need to fetch instagram images for an account and feed them in*/}
            <section className="py-16 sm:py-24 bg-obsidian">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
                        <h2 className="text-4xl sm:text-5xl font-light text-cream-50 font-cormorant">
                            Follow Us on Instagram
                        </h2>
                        <a
                            href="https://instagram.com/inspiremehairartistry"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "mt-4 sm:mt-0 inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-gold",
                                "hover:bg-gold hover:text-obsidian transition-all duration-500",
                                "uppercase tracking-[0.2rem] text-sm font-light rounded-sm"
                            )}
                        >
                            @inspiremehairartistry <ArrowRight size={16} />
                        </a>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
                        {galleryImages.map((item, i) => (
                            <motion.a
                                key={i}
                                href="https://www.instagram.com/urbanluxe256"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="group relative aspect-square overflow-hidden rounded-lg"
                            >
                                <Image
                                    src={item.before ?? "/images/placeholder.jpg"}
                                    alt={`Instagram post ${i + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    width={400}
                                    height={400}
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-obsidian/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                                    <Heart size={18} className="text-gold" />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            <VariantTestimonialsSection />

            {/* Final CTA */}
            <section className="py-20 bg-linear-to-b from-obsidian to-obsidian/90 text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-light text-cream-50 font-cormorant mb-6"
                    >
                        Your Transformation Awaits
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sand-300/80 text-lg mb-10"
                    >
                        See yourself in our next story.
                    </motion.p>
                    <motion.a
                        href="/booking"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={cn(
                            "inline-flex items-center gap-3 px-10 py-5 border-2 border-gold text-gold",
                            "hover:bg-gold hover:text-obsidian transition-all duration-500",
                            "uppercase tracking-[0.25rem] text-sm font-light rounded-sm"
                        )}
                    >
                        Book Your Session
                        <ArrowRight size={18} />
                    </motion.a>
                </div>
            </section>
        </div>
    );
}