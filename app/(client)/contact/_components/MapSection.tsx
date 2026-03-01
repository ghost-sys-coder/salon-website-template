import React from 'react'
import { motion } from "framer-motion";
import { MapPin } from 'lucide-react';


const MapSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-20"
        >
            <h3 className="text-2xl font-light text-center text-obsidian font-cormorant mb-8">
                Find Us
            </h3>
            <div className="aspect-4/3 sm:aspect-video bg-linear-to-br from-sand-200/10 to-cream-300/5 border border-sand-200/20 rounded-xl flex items-center justify-center overflow-hidden">
                <div className="text-center">
                    <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
                    <p className="text-sand-300/70 text-lg font-light">
                        Map Integration Coming Soon
                    </p>
                    <p className="text-sand-300/60 text-sm mt-2">
                        61 Errol Street, North Melbourne - North Melbourne, VIC, Australia, 3051
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default MapSection