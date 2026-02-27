"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MobileNavbar from "./MobileNavbar";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/booking" }, // changed to #booking for consistency
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll position for navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80); // threshold at 80px for smoother transition
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Observe sections to highlight active nav link
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4, rootMargin: "-80px 0px 0px 0px" } // offset for sticky navbar
    );

    // Observe all sections with id
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "bg-cream-50/95 backdrop-blur-xl border-b border-sand-100/40 shadow-sm"
            : "bg-transparent backdrop-blur-none"
        )}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex flex-col">
              <span className="text-3xl font-light tracking-tight text-obsidian font-cormorant">
                Inspire Me
              </span>
              <span className="text-gold text-sm tracking-[0.25em] uppercase font-light opacity-80 group-hover:opacity-100 transition-opacity">
                Hair Artistry
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-10">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "nav-link-luxury relative text-lg font-light transition-colors",
                      isActive ? "text-gold" : "text-obsidian hover:text-gold"
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-px bg-gold transition-all duration-500",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              {/* Book Now button - desktop only */}
              <Link href="/booking">
                <Button
                  className={cn(
                    "hidden lg:inline-flex items-center gap-2",
                    "bg-obsidian text-cream-50 hover:bg-gold hover:text-obsidian",
                    "px-8 py-5 uppercase tracking-[0.2rem] text-sm font-light transition-all duration-500 rounded-sm"
                  )}
                >
                  Book Now
                </Button>
              </Link>

              {/* Mobile toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-obsidian hover:bg-sand-100/20"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu (unchanged) */}
      <MobileNavbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    </>
  );
}