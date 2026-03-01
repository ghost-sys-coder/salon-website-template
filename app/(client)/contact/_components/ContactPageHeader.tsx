import React from 'react'
import { motion } from "framer-motion";

const ContactPageHeader = () => {
    return (
        <section className="relative py-32 md:py-40 bg-obsidian overflow-hidden">
            <div className="absolute inset-0 noise-overlay opacity-[0.025]" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-obsidian/70 to-obsidian pointer-events-none" />

            <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1 }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-light text-cream-50 leading-tight font-cormorant mb-6"
                >
                    Get in Touch
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-sand-300/90 text-xl sm:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
                >
                    We’d love to hear from you — whether it’s a question, a compliment, or just to say hello.
                </motion.p>
            </div>
        </section>
    )
}

export default ContactPageHeader