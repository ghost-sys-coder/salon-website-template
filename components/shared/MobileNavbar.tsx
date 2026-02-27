import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Contact", href: "/contact" },
]

interface MobileNavbarProps {
    mobileOpen: boolean;
    setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ mobileOpen, setMobileOpen }) => {
    return (
        <AnimatePresence>
            {mobileOpen && (
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 0.68, 0, 1.2] }}
                    className='fixed inset-0 z-40 bg-cream-100/90 flex flex-col justify-center items-center gap-4'
                >
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08 }}
                            onClick={() => setMobileOpen(false)}
                            className="text-obsidian hover:text-gold transition-colors tracking-wide"
                            style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.2rem", fontWeight: 300 }}
                        >
                            {link.label}
                        </motion.a>
                    ))}
                    <motion.a
                        href="#booking"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        onClick={() => setMobileOpen(false)}
                        className="btn-luxury mt-4"
                    >
                        <span>Book Now</span>
                    </motion.a>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default MobileNavbar