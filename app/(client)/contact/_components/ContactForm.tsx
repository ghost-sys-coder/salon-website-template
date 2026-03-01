"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import axios from 'axios';
import { toast } from 'sonner';

const ContactForm = () => {
    const [success, setSuccess] = useState<"error" | "success" | "idle">("idle")
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [messageDetails, setMessageDetails] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setMessageDetails((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const { status, data } = await axios.post("/api/messages", messageDetails);

            if (status === 201 && data?.success) {
                console.log(data);
                toast.success(data?.message || "Message sent!");
                setMessageDetails({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                });
                setSuccess("success");
            }
        } catch (error) {
            // I am not getting the error console.logged in the browser
            console.log("Failed to submit message", error);
            toast.error((error as Error).message || "Something went wrong!");
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sand-300/80 text-sm mb-2 font-light">
                    Your Name
                </label>
                <input
                    type="text"
                    required
                    value={messageDetails.name}
                    name='name'
                    id='name'
                    className="w-full px-5 py-4 bg-obsidian border border-sand-300/20 rounded-lg text-cream-50 placeholder:text-sand-300/40 focus:border-gold/60 focus:outline-none transition-all"
                    placeholder="How should we address you?"
                    onChange={handleChange}
                />
            </div>

            <div>
                <label className="block text-sand-300/80 text-sm mb-2 font-light">
                    Email Address
                </label>
                <input
                    type="email"
                    value={messageDetails.email}
                    name='email'
                    id='email'
                    required
                    className="w-full px-5 py-4 bg-obsidian border border-sand-300/20 rounded-lg text-cream-50 placeholder:text-sand-300/40 focus:border-gold/60 focus:outline-none transition-all"
                    placeholder="you@example.com"
                    onChange={handleChange}
                />
            </div>

            <div>
                <label className="block text-sand-300/80 text-sm mb-2 font-light">
                    Phone Number (optional)
                </label>
                <input
                    type="tel"
                    value={messageDetails.phone}
                    id='phone'
                    name='phone'
                    className="w-full px-5 py-4 bg-obsidian border border-sand-300/20 rounded-lg text-cream-50 placeholder:text-sand-300/40 focus:border-gold/60 focus:outline-none transition-all"
                    placeholder="+61 0491 570 159"
                    onChange={handleChange}
                />
            </div>

            <div>
                <label className="block text-sand-300/80 text-sm mb-2 font-light">
                    Your Message
                </label>
                <textarea
                    rows={5}
                    required
                    value={messageDetails.message}
                    name='message'
                    id='message'
                    className="w-full px-5 py-4 bg-obsidian border border-sand-300/20 rounded-lg text-cream-50 placeholder:text-sand-300/40 focus:border-gold/60 focus:outline-none transition-all resize-none"
                    placeholder="Tell us how we can assist you..."
                    onChange={handleChange}
                />
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={cn(
                    "w-full py-5 mt-4 border-2 border-gold text-gold",
                    "hover:bg-gold hover:text-obsidian transition-all duration-500",
                    "uppercase tracking-[0.2rem] text-sm font-light rounded-sm flex items-center justify-center gap-3",
                    isSubmitting && "opacity-70 cursor-wait"
                )}
            >
                {isSubmitting ? (
                    "Sending..."
                ) : (
                    <>
                        Send Message <Send size={16} />
                    </>
                )}
            </motion.button>

            <AnimatePresence>
                {success === "success" && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-center text-gold mt-4 text-sm"
                    >
                        Thank you — your message has been received. We’ll get back to you soon.
                    </motion.p>
                )}
            </AnimatePresence>
        </form>
    )
}

export default ContactForm