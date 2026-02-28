import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

interface ServiceCardItemProps {
  category: string;
  categoryServices: {
    name: string;
    description: string;
    startingPrice: string;
  }[];
}

const ServiceCardItem = ({ category, categoryServices } : ServiceCardItemProps) => {
  return (
    <div key={category} className="mb-24 last:mb-0">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="text-4xl sm:text-5xl font-light text-obsidian font-cormorant mb-12 text-center"
                  >
                    {category}
                  </motion.h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {categoryServices.map((service, idx) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        className={cn(
                          "group relative bg-white/5 backdrop-blur-sm border border-sand-200/20 rounded-lg p-8",
                          "hover:border-gold/40 hover:shadow-gold/10 transition-all duration-500"
                        )}
                      >
                        <h3 className="text-cream-50 text-2xl font-light font-cormorant mb-4 group-hover:text-gold transition-colors">
                          {service.name}
                        </h3>

                        <p className="text-sand-300/80 text-base leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-gold text-xl font-light font-cormorant">
                            {service.startingPrice}
                          </span>

                          <a
                            href="/booking"
                            className={cn(
                              "inline-flex items-center gap-2 px-6 py-3 border border-gold/40 text-gold",
                              "hover:bg-gold hover:text-obsidian transition-all duration-500",
                              "text-sm uppercase tracking-[0.2rem] font-light rounded-sm"
                            )}
                          >
                            Book Now
                            <ArrowRight size={14} />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
  )
}

export default ServiceCardItem