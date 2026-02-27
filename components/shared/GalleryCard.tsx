import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const gradients = [
    "from-cream-100 to-sand-100",
    "from-sand-100 to-cream-200",
    "from-cream-200 to-sand-200",
    "from-sand-200 to-cream-300",
    "from-cream-300 to-sand-300",
    "from-sand-300 to-cream-100",
];

export function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
            className={cn(
                "group relative overflow-hidden cursor-pointer break-inside-avoid mb-4 rounded-sm",
                "hover:shadow-gold/20 transition-shadow duration-500 h-50"
            )}
        >
            <div className={cn("absolute inset-0 bg-linear-to-br", gradients[index % gradients.length])} />
            <div className={"absolute inset-0 noise-overlay opacity-40"} />
            <div className="absolute inset-0 flex items-center justify-center">
                {/* improve this the image and the text are flexed yet I need the image in the background  */}
                <Image 
                    src={item.image} 
                    alt={item.label} 
                    fill 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
                />
                <span className="text-white z-10 text-base sm:text-lg font-light tracking-widest uppercase font-cormorant">
                    {item.label}
                </span>
            </div>

            <div className="absolute inset-0 bg-obsidian/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <Plus size={18} />
                </div>
                <h3 className="text-cream-50 text-2xl font-light tracking-wide font-cormorant translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {item.label}
                </h3>
                <div className="w-8 h-px bg-gold/70 my-2 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-150" />
                <span className="text-gold text-xs tracking-[0.25em] uppercase font-light translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                    {item.category}
                </span>
            </div>
        </motion.div>
    );
}