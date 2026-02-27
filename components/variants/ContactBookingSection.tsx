"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export function VariantContactBookingSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app: send to backend / email service
    console.log("Booking request:", formState);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // reset after 5s
    setFormState({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: "",
    });
  };

  return (
    <section
      id="booking"
      className="relative py-28 bg-obsidian overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 noise-overlay opacity-[0.025]" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gold/20" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold/70 text-sm tracking-[0.3em] uppercase font-light mb-4">
            Reserve Your Moment
          </span>
          <h2 className="text-5xl sm:text-6xl font-light text-cream-50 leading-tight font-cormorant">
            Book Your
            <br />
            <em className="italic">Experience</em>
          </h2>
          <div className="w-24 h-px bg-gold/40 mx-auto mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-cream-50/5 backdrop-blur-sm border border-sand-200/20 rounded-lg p-10 sm:p-12"
          >
            <h3 className="text-cream-50 text-2xl font-light font-cormorant mb-8">
              Schedule Your Visit
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sand-300/80 text-sm mb-2 font-light"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className={cn(
                      "w-full px-5 py-3 bg-obsidian/60 border border-sand-200/30",
                      "text-cream-50 placeholder:text-sand-300/50",
                      "focus:border-gold/50 focus:outline-none transition-all duration-300 rounded-sm"
                    )}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sand-300/80 text-sm mb-2 font-light"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    className={cn(
                      "w-full px-5 py-3 bg-obsidian/60 border border-sand-200/30",
                      "text-cream-50 placeholder:text-sand-300/50",
                      "focus:border-gold/50 focus:outline-none transition-all duration-300 rounded-sm"
                    )}
                    placeholder="+256 ..."
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sand-300/80 text-sm mb-2 font-light"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className={cn(
                      "w-full px-5 py-3 bg-obsidian/60 border border-sand-200/30",
                      "text-cream-50 placeholder:text-sand-300/50",
                      "focus:border-gold/50 focus:outline-none transition-all duration-300 rounded-sm"
                    )}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-sand-300/80 text-sm mb-2 font-light"
                  >
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formState.date}
                    onChange={handleChange}
                    required
                    className={cn(
                      "w-full px-5 py-3 bg-obsidian/60 border border-sand-200/30",
                      "text-cream-50 placeholder:text-sand-300/50",
                      "focus:border-gold/50 focus:outline-none transition-all duration-300 rounded-sm"
                    )}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sand-300/80 text-sm mb-2 font-light"
                >
                  Preferred Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full px-5 py-3 bg-obsidian/60 border border-sand-200/30",
                    "text-cream-50 placeholder:text-sand-300/50",
                    "focus:border-gold/50 focus:outline-none transition-all duration-300 rounded-sm"
                  )}
                >
                  <option value="">Select service</option>
                  <option value="hair">Hair Design & Colour</option>
                  <option value="skin">Skin & Facial Treatments</option>
                  <option value="nails">Nail Artistry</option>
                  <option value="bridal">Bridal Suite</option>
                  <option value="massage">Massage & Body</option>
                  <option value="lash">Lash & Brow</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sand-300/80 text-sm mb-2 font-light"
                >
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className={cn(
                    "w-full px-5 py-3 bg-obsidian/60 border border-sand-200/30",
                    "text-cream-50 placeholder:text-sand-300/50",
                    "focus:border-gold/50 focus:outline-none transition-all duration-300 rounded-sm resize-none"
                  )}
                  placeholder="Any specific requests or preferences..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={cn(
                  "w-full mt-4 py-5 bg-transparent border-2 border-gold/60 text-gold",
                  "hover:bg-gold hover:text-obsidian transition-all duration-500",
                  "uppercase tracking-[0.25rem] text-sm font-light rounded-sm flex items-center justify-center gap-3"
                )}
              >
                <span>Request Booking</span>
                <Send size={16} />
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-gold mt-4 text-sm"
                >
                  Thank you — your request has been received. We&apos;ll contact you shortly.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center space-y-10"
          >
            <div className="space-y-8">
              <h3 className="text-cream-50 text-2xl font-light font-cormorant">
                Maison Élara
              </h3>

              <div className="space-y-6 text-sand-300/90">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-gold mt-1 shrink-0" />
                  <div>
                    <p className="text-cream-50 font-light">Kampala, Uganda</p>
                    <p className="text-sm mt-1">Plot 12, Kololo Hill – Luxury District</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone size={20} className="text-gold" />
                  <div>
                    <p className="text-cream-50 font-light">+256 700 123 456</p>
                    <p className="text-sm text-sand-300/70 mt-1">Mon–Sat: 9:00 AM – 8:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail size={20} className="text-gold" />
                  <div>
                    <p className="text-cream-50 font-light">hello@maisonelara.com</p>
                    <p className="text-sm text-sand-300/70 mt-1">Bookings & Inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={20} className="text-gold mt-1" />
                  <div>
                    <p className="text-cream-50 font-light">Opening Hours</p>
                    <p className="text-sm mt-1">
                      Monday – Saturday: 9:00 AM – 8:00 PM
                      <br />
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder / future integration */}
            <div className="mt-6">
              <div className="w-full h-64 bg-linear-to-br from-sand-200/20 to-cream-300/10 rounded-lg border border-sand-200/30 flex items-center justify-center">
                <span className="text-sand-300/60 text-sm tracking-widest uppercase font-light">
                  Map Integration Coming Soon
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}