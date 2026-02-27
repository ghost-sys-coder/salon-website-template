import React from "react";
import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook } from "lucide-react";

const footerLinks = {
    Services: ["Hair Design", "Skin & Facial", "Nail Artistry", "Bridal Suite", "Massage & Body", "Lash & Brow"],
    Studio: ["Our Story", "Meet the Team", "Gallery", "Press & Awards", "Careers"],
    Policies: ["Gift Vouchers", "Cancellation Policy", "Privacy Policy", "Terms of Service"],
};

export function FooterSection() {
    return (
        <footer className="bg-obsidian relative overflow-hidden">
            <div className="noise-overlay" />

            {/* Subtle grid background */}
            <div
                className="
                    absolute inset-0
                    opacity-[0.04]
                    pointer-events-none
                    bg-[linear-gradient(#B8975A_1px,transparent_1px),linear-gradient(90deg,#B8975A_1px,transparent_1px)]
                    bg-size-[80px_80px]
                    "
            />

            <div className="relative z-10 container mx-auto px-8 pt-20 pb-10">
                {/* Main grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand col - spans 2 */}
                    <div className="lg:col-span-2">
                        <div className="flex flex-col mb-6">
                            <span
                                className="text-cream-50 leading-none tracking-[0.06em] font-cormorant text-4xl"
                            >
                                Maison Élara
                            </span>
                            <span className="text-gold text-[0.6rem] tracking-[0.4em] uppercase font-light mt-1">
                                Luxury Salon & Spa
                            </span>
                        </div>

                        <p className="text-sand-300/60 text-sm leading-relaxed max-w-xs mb-8">
                            An elevated sanctuary where luxury and artistry converge.
                            Every visit is a ritual crafted for the discerning individual.
                        </p>

                        {/* Social */}
                        <div className="flex gap-3">
                            {[
                                { Icon: Instagram, label: "Instagram" },
                                { Icon: Facebook, label: "Facebook" },
                            ].map(({ Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="w-10 h-10 flex items-center justify-center border border-sand-300/20 text-sand-300/50 hover:border-gold hover:text-gold transition-all duration-300"
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                            {/* Pinterest */}
                            <a
                                href="#"
                                aria-label="Pinterest"
                                className="w-10 h-10 flex items-center justify-center border border-sand-300/20 text-sand-300/50 hover:border-gold hover:text-gold transition-all duration-300 text-[0.65rem] tracking-wider font-light"
                            >
                                PT
                            </a>
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([col, items]) => (
                        <div key={col}>
                            <h4 className="text-gold text-[0.68rem] tracking-[0.3em] uppercase font-light mb-5">
                                {col}
                            </h4>
                            <ul className="flex flex-col gap-3">
                                {items.map((item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="text-sand-300/50 hover:text-cream-200 text-sm font-light tracking-wide transition-colors duration-300"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <Separator className="bg-sand-300/10 mb-8" />

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-sand-300/30 text-xs tracking-widest">
                        © {new Date().getFullYear()} Maison Élara. All rights reserved.
                    </span>
                    <div className="flex items-center gap-6">
                        {["Privacy", "Terms", "Cookies"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-sand-300/30 hover:text-sand-300/60 text-xs tracking-widest uppercase transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
