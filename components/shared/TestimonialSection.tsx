"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
    id: number;
    name: string;
    role?: string;
    location?: string;
    quote: string;
    rating: number;
    image?: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Amara N.",
        role: "Bride",
        location: "Sydney",
        quote:
            "The bridal suite experience was nothing short of magical. My updo and makeup were perfection — I felt like royalty on my wedding day. Every detail was handled with such care and artistry.",
        rating: 5,
    },
    {
        id: 2,
        name: "Sophia K.",
        role: "Regular Client",
        location: "Queensland",
        quote:
            "I've been coming here for three years and the consistency is unmatched. The colour work is always precise, the products are truly luxurious, and the atmosphere makes every visit feel like a retreat.",
        rating: 5,
    },
    {
        id: 3,
        name: "Elena M.",
        role: "First-Time Visitor",
        location: "Canberra",
        quote:
            "I was hesitant about trying a new salon, but this place exceeded every expectation. The facial left my skin glowing for days, and the team made me feel so welcome and understood.",
        rating: 5,
    },
    {
        id: 4,
        name: "Victoria L.",
        role: "Corporate Executive",
        location: "Melbourne",
        quote:
            "In a busy schedule, this is my sanctuary. The precision cuts and relaxing scalp massage are exactly what I need to reset. The entire experience feels elevated and intentional.",
        rating: 5,
    },
    {
        id: 5,
        name: "Isabella R.",
        role: "Wedding Party",
        location: "Canberra",
        quote:
            "We brought the whole bridal party here — hair, makeup, nails. Everyone left feeling beautiful and confident. The attention to detail and calm environment made the morning stress-free.",
        rating: 5,
    },
];

export function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setActiveIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="relative py-28 bg-obsidian overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 noise-overlay opacity-[0.03]" />

            {/* Decorative vertical gold line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gold/30" />

            <div className="relative z-10 container mx-auto px-6 sm:px-8 max-w-5xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-gold/70 text-sm tracking-[0.3em] uppercase font-light mb-4">
                        Client Stories
                    </span>
                    <h2 className="text-5xl sm:text-6xl font-light text-cream-50 leading-tight font-cormorant">
                        Voices of
                        <br />
                        <em className="italic">Elegance</em>
                    </h2>
                    <div className="w-24 h-px bg-gold/40 mx-auto mt-8" />
                </motion.div>

                {/* Carousel */}
                <div className="relative">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={activeIndex}
                            custom={direction}
                            variants={{
                                enter: (dir: number) => ({
                                    x: dir > 0 ? 100 : -100,
                                    opacity: 0,
                                }),
                                center: {
                                    zIndex: 1,
                                    x: 0,
                                    opacity: 1,
                                },
                                exit: (dir: number) => ({
                                    zIndex: 0,
                                    x: dir < 0 ? 100 : -100,
                                    opacity: 0,
                                }),
                            }}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 },
                            }}
                            className="px-4 sm:px-12"
                        >
                            <div className="bg-cream-50/5 backdrop-blur-sm border border-sand-200/20 rounded-lg p-10 sm:p-14 relative">
                                {/* Large decorative quote mark */}
                                <Quote className="absolute -top-6 left-10 w-16 h-16 text-gold/20" />

                                <div className="flex flex-col items-center text-center">
                                    {/* Rating stars */}
                                    <div className="flex gap-1.5 mb-8">
                                        {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                                            <Star key={i} size={20} className="text-gold fill-gold" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <blockquote className="text-cream-100 text-xl sm:text-2xl leading-relaxed font-light mb-10 max-w-3xl italic font-cormorant">
                                        {testimonials[activeIndex].quote}
                                    </blockquote>

                                    {/* Author info */}
                                    <div className="space-y-1">
                                        <p className="text-gold text-xl font-light font-cormorant">
                                            {testimonials[activeIndex].name}
                                        </p>
                                        <p className="text-sand-300/80 text-sm tracking-wide font-light">
                                            {testimonials[activeIndex].role}
                                            {testimonials[activeIndex].location && ` • ${testimonials[activeIndex].location}`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation arrows */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-obsidian/90 text-gold p-4 rounded-full hover:bg-gold hover:text-obsidian transition-all duration-300 border border-gold/40 shadow-md"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-obsidian/90 text-gold p-4 rounded-full hover:bg-gold hover:text-obsidian transition-all duration-300 border border-gold/40 shadow-md"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > activeIndex ? 1 : -1);
                                setActiveIndex(i);
                            }}
                            className={cn(
                                "w-3 h-3 rounded-full transition-all duration-400",
                                i === activeIndex
                                    ? "bg-gold scale-125 shadow-gold/40"
                                    : "bg-sand-300/50 hover:bg-sand-300/80"
                            )}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-center mt-20"
                >
                    <a
                        href="#booking"
                        className={cn(
                            "inline-flex items-center gap-3 px-10 py-5 border-2 border-gold/60 text-gold hover:bg-gold hover:text-obsidian",
                            "transition-all duration-500 uppercase tracking-[0.25rem] text-sm font-light rounded-sm shadow-gold/10 hover:shadow-gold/30"
                        )}
                    >
                        <span>Share Your Experience</span>
                        <ArrowRight size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}