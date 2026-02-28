"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarIcon, Clock, CheckCircle2, ArrowRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

import { bookingServices } from "@/constants";
import ServiceCard from "./_components/ServiceCard";

const generateFakeSlots = (date: string) => {
    console.log("Generating slots for", date);
    // Fake availability — in real app this would come from backend
    return [
        "09:00 AM", "09:45 AM", "10:30 AM", "11:15 AM",
        "01:00 PM", "01:45 PM", "02:30 PM", "03:15 PM",
        "04:00 PM", "04:45 PM", "05:30 PM",
    ].filter((_, i) => i % 2 === 0 || Math.random() > 0.4); // simulate some booked slots
};

export default function BookingPage() {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [form, setForm] = useState({ name: "", phone: "" });

    const currentDate = new Date();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const handleServiceSelect = (id: string) => {
        setSelectedService(id);
        setStep(2);
    };

    const handleDateSelect = (day: number) => {
        const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        setSelectedDate(dateStr);
        setStep(3);
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
        setStep(4);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Fake submission
        console.log("Booking:", { service: selectedService, date: selectedDate, time: selectedTime, ...form });
        setStep(5);
    };

    

    const renderCalendar = () => {
        const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
        const blanks = Array.from({ length: firstDayOfMonth }, () => null);

        return (
            <div className="grid grid-cols-7 gap-2 text-center">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                    <div key={d} className="text-sand-300/60 text-xs font-light">{d}</div>
                ))}
                {blanks.map((_, i) => <div key={`blank-${i}`} />)}
                {days.map((day) => {
                    const isToday =
                        day === currentDate.getDate() &&
                        currentDate.getMonth() === currentDate.getMonth() &&
                        currentDate.getFullYear() === currentDate.getFullYear();

                    return (
                        <motion.button
                            key={day}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleDateSelect(day)}
                            disabled={day < currentDate.getDate()}
                            className={cn(
                                "h-12 rounded-full text-sm font-light transition-colors",
                                day < currentDate.getDate()
                                    ? "text-sand-300/30 cursor-not-allowed"
                                    : selectedDate?.endsWith(String(day).padStart(2, "0"))
                                        ? "bg-gold text-obsidian"
                                        : isToday
                                            ? "border border-gold/60 text-gold"
                                            : "hover:bg-gold/10 text-cream-50"
                            )}
                        >
                            {day}
                        </motion.button>
                    );
                })}
            </div>
        );
    };

    const renderTimeSlots = () => {
        const slots = selectedDate ? generateFakeSlots(selectedDate) : [];
        return (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {slots.length === 0 ? (
                    <p className="col-span-full text-center text-sand-300/60">No slots available</p>
                ) : (
                    slots.map((time) => (
                        <motion.button
                            key={time}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => handleTimeSelect(time)}
                            className={cn(
                                "py-4 px-6 rounded-lg border text-center transition-all duration-300",
                                selectedTime === time
                                    ? "bg-gold text-obsidian border-gold"
                                    : "border-sand-300/30 hover:border-gold/50 hover:bg-gold/5 text-cream-50"
                            )}
                        >
                            {time}
                        </motion.button>
                    ))
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-obsidian text-cream-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl sm:text-5xl font-light font-cormorant text-center mb-4"
                >
                    Book Your Experience
                </motion.h1>
                <p className="text-center text-sand-300/80 mb-16 max-w-2xl mx-auto">
                    Choose your service, preferred date & time, and let us prepare everything for your arrival.
                </p>

                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="service"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            className="space-y-10"
                        >
                            <h2 className="text-2xl font-light font-cormorant text-center mb-8">Select Service</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {bookingServices.map((s) => (
                                    <ServiceCard
                                        key={s.id}
                                        service={s}
                                        handleServiceSelect={handleServiceSelect}
                                        selectedService={selectedService ?? ""}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="date"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => setStep(1)}
                                    className="flex items-center gap-2 text-sand-300 hover:text-gold transition-colors"
                                >
                                    <ChevronLeft size={18} /> Back to Services
                                </button>
                                <h2 className="text-2xl font-light font-cormorant">Choose Date</h2>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm border border-sand-200/20 rounded-xl p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-light">{currentDate.toLocaleString("default", { month: "long", year: "numeric" })}</h3>
                                    <CalendarIcon className="text-gold" />
                                </div>
                                {renderCalendar()}
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="time"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => setStep(2)}
                                    className="flex items-center gap-2 text-sand-300 hover:text-gold transition-colors"
                                >
                                    <ChevronLeft size={18} /> Back to Date
                                </button>
                                <h2 className="text-2xl font-light font-cormorant">Available Times</h2>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm border border-sand-200/20 rounded-xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <Clock className="text-gold" />
                                    <span className="text-lg font-light">{selectedDate ? new Date(selectedDate).toLocaleDateString() : ""}</span>
                                </div>
                                {renderTimeSlots()}
                            </div>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="details"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            className="space-y-10 max-w-lg mx-auto"
                        >
                            <div className="text-center">
                                <h2 className="text-2xl font-light font-cormorant mb-2">Almost There</h2>
                                <p className="text-sand-300/80">
                                    {selectedService && bookingServices.find(s => s.id === selectedService)?.name} <br />
                                    {selectedDate} at {selectedTime}
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm text-sand-300/80 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        required
                                        className="w-full px-5 py-4 bg-white/5 border border-sand-300/20 rounded-lg text-cream-50 placeholder:text-sand-300/40 focus:border-gold/60 focus:outline-none transition-all"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-sand-300/80 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                        required
                                        className="w-full px-5 py-4 bg-white/5 border border-sand-300/20 rounded-lg text-cream-50 placeholder:text-sand-300/40 focus:border-gold/60 focus:outline-none transition-all"
                                        placeholder="+61 7XX XXX XXX"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={cn(
                                        "w-full py-5 mt-6 bg-transparent border-2 border-gold text-gold",
                                        "hover:bg-gold hover:text-obsidian transition-all duration-500",
                                        "uppercase tracking-[0.2rem] text-sm font-light rounded-sm flex items-center justify-center gap-3"
                                    )}
                                >
                                    Confirm Booking
                                    <ArrowRight size={16} />
                                </button>
                            </form>
                        </motion.div>
                    )}

                    {step === 5 && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-16 max-w-lg mx-auto"
                        >
                            <CheckCircle2 className="w-20 h-20 text-gold mx-auto mb-8" />
                            <h2 className="text-3xl font-light font-cormorant mb-4">Booking Confirmed!</h2>
                            <p className="text-sand-300/90 mb-8 leading-relaxed">
                                Thank you, {form.name}.<br />
                                Your appointment for {selectedService && bookingServices.find(s => s.id === selectedService)?.name} on{" "}
                                {selectedDate} at {selectedTime} is reserved.<br /><br />
                                We will send a confirmation via WhatsApp/SMS shortly.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => {
                                        setStep(1);
                                        setSelectedService(null);
                                        setSelectedDate(null);
                                        setSelectedTime(null);
                                        setForm({ name: "", phone: "" });
                                    }}
                                    className="px-8 py-4 border border-sand-300/40 text-sand-300 hover:border-gold hover:text-gold transition-colors rounded-sm text-sm uppercase tracking-wider"
                                >
                                    Book Another Appointment
                                </button>

                                <Link
                                    href="/"
                                    className="px-8 py-4 bg-gold/10 text-gold hover:bg-gold hover:text-obsidian transition-colors rounded-sm text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                                >
                                    Return Home <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}