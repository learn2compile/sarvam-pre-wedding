import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { locations } from '../../data';

export default function SignatureLocations() {
  return (
    <section id="locations" className="py-24 lg:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="kicker mb-4 inline-block">Signature Locations</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            Explore{''}
            <span className="text-[#D4AF37]"> Signature Experiences</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-[#D4AF37] mb-2">
                    <MapPin size={14} />
                    <span className="text-sm uppercase tracking-wider">Location</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl mb-2 text-white">
                    {loc.title}
                  </h3>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {loc.description}
                  </p>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border border-[#D4AF37]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}