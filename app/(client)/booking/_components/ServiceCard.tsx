import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    service: {
        id: string;
        name: string;
        duration: string;
        price: string;
    };
    handleServiceSelect: (serviceId: string) => void;
    selectedService: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, handleServiceSelect, selectedService}) => (
        <motion.button
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleServiceSelect(service.id)}
            className={cn(
                "w-full p-6 text-left rounded-lg border transition-all duration-300",
                selectedService === service.id
                    ? "border-gold bg-gold/5 shadow-gold/10"
                    : "border-sand-200/30 hover:border-gold/40 hover:shadow-gold/5 bg-white/5 backdrop-blur-sm"
            )}
        >
            <h3 className="text-xl font-light font-cormorant text-cream-50 mb-2">{service.name}</h3>
            <p className="text-sand-300/80 text-sm mb-3">{service.duration}</p>
            <p className="text-gold font-light">{service.price}</p>
        </motion.button>
);
    
export default ServiceCard;