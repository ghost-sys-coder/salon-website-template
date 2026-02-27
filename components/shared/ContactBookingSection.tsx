"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Clock, ArrowRight, CheckCircle2, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    "Hair Design",
    "Skin & Facial",
    "Nail Artistry",
    "Bridal Suite",
    "Massage & Body",
    "Lash & Brow",
];

const contactInfo = [
    { Icon: Phone, text: "0491 570 159" },
    { Icon: MapPin, text: "61 Errol Street, North Melbourne, North Melbourne, VIC, Australia, 3051" },
    { Icon: Clock, text: "Mon–Sat: 9:00 AM – 8:00 PM | Sun: By appointment" },
];

interface FormState {
    name: string;
    email: string;
    phone: string;
    service: string;
    date: string;
    notes: string;
}

const initialForm: FormState = {
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    notes: "",
};

// Reusable Form Input
function FormInput({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    focusedField,
    setFocused,
}: {
    label: string;
    type?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    focusedField: string | null;
    setFocused: (field: string | null) => void;
}) {
    const isFocused = focusedField === name;

    return (
        <div>
            <label className="block text-[0.65rem] tracking-[0.25em] uppercase text-sand-300/60 mb-2 font-light">
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                onFocus={() => setFocused(name)}
                onBlur={() => setFocused(null)}
                className={cn(
                    "w-full px-5 py-4 bg-obsidian border text-cream-50 text-sm font-light placeholder:text-sand-300/30 transition-all duration-300 rounded-sm",
                    isFocused ? "border-gold/60" : "border-sand-300/20"
                )}
            />
        </div>
    );
}

// Reusable Contact Item
function ContactItem({ Icon, text }: { Icon: LucideIcon; text: string }) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center border border-gold/30 text-gold shrink-0 rounded-sm">
                <Icon size={16} />
            </div>
            <span className="text-sand-300/80 text-sm font-light tracking-wide">
                {text}
            </span>
        </div>
    );
}

// Reusable Trust Badge
function TrustBadge({ value, label }: { value: string; label: string }) {
    return (
        <div className="bg-obsidian p-6 flex flex-col items-center gap-2">
            <span className="text-gold text-3xl font-light font-cormorant">
                {value}
            </span>
            <span className="text-sand-300/60 text-xs tracking-[0.25em] uppercase font-light">
                {label}
            </span>
        </div>
    );
}

export function BookingSection() {
    const [form, setForm] = useState<FormState>(initialForm);
    const [submitted, setSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        // TODO: send to backend / email / WhatsApp API
        console.log("Booking request:", form);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setForm(initialForm);
        }, 6000);
    };

    return (
        <section id="booking" className="relative py-28 bg-obsidian overflow-hidden">
            <div className="noise-overlay" />

            {/* Grid background (fine gold lines) */}
            <div
            className="
                absolute inset-0 opacity-[0.04] pointer-events-none
                bg-[linear-gradient(rgba(184,151,90,1)_1px,transparent_1px),linear-gradient(90deg,rgba(184,151,90,1)_1px,transparent_1px)]
                bg-size-[70px_70px]
            "
            />

            {/* Radial glow */}
            <div
                className="
                    absolute top-0 right-1/4
                    w-150 h-150   {/* or use w-150 h-150 if you really want ~37.5rem */}
                    pointer-events-none
                    bg-[radial-gradient(circle,rgba(184,151,90,0.06)_0%,transparent_65%)]
                "
            />

            <div className="relative z-10 container mx-auto px-6 sm:px-8 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                    {/* Left Column – Info & Trust */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-12"
                    >
                        {/* Header */}
                        <div className="text-center lg:text-left">
                            <span className="inline-block text-gold/70 text-sm tracking-[0.3em] uppercase font-light mb-4">
                                Reserve Your Time
                            </span>
                            <h2 className="text-5xl sm:text-6xl font-light text-cream-50 leading-tight font-cormorant">
                                Book Your
                                <br />
                                <em className="italic">Experience</em>
                            </h2>
                            <p className="text-sand-300/70 mt-6 text-lg max-w-xl mx-auto lg:mx-0 font-light">
                                Reserve your appointment with one of our expert stylists. Complimentary consultation included with every booking.
                            </p>
                            <div className="w-24 h-px bg-gold/40 mt-8 mx-auto lg:mx-0" />
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-6">
                            {contactInfo.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                >
                                    <ContactItem {...item} />
                                </motion.div>
                            ))}
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-px bg-sand-300/10">
                            {[
                                { value: "100%", label: "Satisfaction" },
                                { value: "5★", label: "Rated" },
                                { value: "24hr", label: "Confirmation" },
                            ].map((badge, i) => (
                                <motion.div
                                    key={badge.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                >
                                    <TrustBadge {...badge} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column – Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <AnimatePresence mode="wait">
                            {submitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.7 }}
                                    className="bg-cream-50/5 backdrop-blur-sm border border-gold/30 rounded-lg p-12 flex flex-col items-center text-center gap-6"
                                >
                                    <CheckCircle2 size={48} className="text-gold" />
                                    <h3 className="text-cream-50 text-3xl font-light font-cormorant">
                                        Request Received
                                    </h3>
                                    <p className="text-sand-300/70 text-sm leading-relaxed max-w-sm">
                                        Thank you for choosing Maison Élara. Our team will confirm your appointment within 24 hours.
                                    </p>
                                    <div className="w-12 h-px bg-gold/40 my-4" />
                                    <span className="text-gold text-[0.65rem] tracking-[0.3em] uppercase font-light">
                                        We look forward to welcoming you
                                    </span>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    className="space-y-6 bg-cream-50/5 backdrop-blur-sm border border-sand-200/20 rounded-lg p-10 sm:p-12"
                                >
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <FormInput
                                            label="Full Name"
                                            name="name"
                                            placeholder="Your name"
                                            value={form.name}
                                            onChange={handleChange}
                                            focusedField={focusedField}
                                            setFocused={setFocusedField}
                                        />
                                        <FormInput
                                            label="Email Address"
                                            name="email"
                                            type="email"
                                            placeholder="your@email.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            focusedField={focusedField}
                                            setFocused={setFocusedField}
                                        />
                                    </div>

                                    <FormInput
                                        label="Phone Number"
                                        name="phone"
                                        type="tel"
                                        placeholder="+256 700 123 456"
                                        value={form.phone}
                                        onChange={handleChange}
                                        focusedField={focusedField}
                                        setFocused={setFocusedField}
                                    />

                                    {/* Service Select */}
                                    <div>
                                        <label className="block text-[0.65rem] tracking-[0.25em] uppercase text-sand-300/60 mb-2 font-light">
                                            Preferred Service
                                        </label>
                                        <div className="relative">
                                            <select
                                                title="service"
                                                name="service"
                                                value={form.service}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField("service")}
                                                onBlur={() => setFocusedField(null)}
                                                className={cn(
                                                    "w-full px-5 py-4 bg-obsidian border text-cream-50 text-sm font-light appearance-none cursor-pointer transition-all duration-300 rounded-sm",
                                                    focusedField === "service" ? "border-gold/60" : "border-sand-300/20"
                                                )}
                                            >
                                                <option value="" disabled>Select a service</option>
                                                {services.map((s) => (
                                                    <option key={s} value={s} className="bg-obsidian text-cream-50">
                                                        {s}
                                                    </option>
                                                ))}
                                            </select>
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-sand-300/50">
                                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                    <path d="M1 1L6 7L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Date Picker */}
                                    <FormInput
                                        label="Preferred Date"
                                        name="date"
                                        type="date"
                                        value={form.date}
                                        onChange={handleChange}
                                        focusedField={focusedField}
                                        setFocused={setFocusedField}
                                    />

                                    {/* Notes */}
                                    <div>
                                        <label className="block text-[0.65rem] tracking-[0.25em] uppercase text-sand-300/60 mb-2 font-light">
                                            Special Requests (Optional)
                                        </label>
                                        <textarea
                                            name="notes"
                                            value={form.notes}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField("notes")}
                                            onBlur={() => setFocusedField(null)}
                                            rows={4}
                                            placeholder="Any specific requests or preferences..."
                                            className={cn(
                                                "w-full px-5 py-4 bg-obsidian border text-cream-50 text-sm font-light placeholder:text-sand-300/30 focus:outline-none transition-all duration-300 resize-none rounded-sm",
                                                focusedField === "notes" ? "border-gold/60" : "border-sand-300/20"
                                            )}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className={cn(
                                            "w-full mt-4 py-5 bg-obsidian border-2 border-gold/60 text-gold",
                                            "hover:bg-gold hover:text-obsidian transition-all duration-500",
                                            "uppercase tracking-[0.25rem] text-sm font-light rounded-sm flex items-center justify-center gap-3"
                                        )}
                                    >
                                        <span>Request Appointment</span>
                                        <ArrowRight size={16} />
                                    </button>

                                    <p className="text-center text-sand-300/40 text-xs tracking-wide font-light mt-4">
                                        By booking you agree to our cancellation policy. Confirmation within 24 hours.
                                    </p>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}