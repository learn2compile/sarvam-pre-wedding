import { motion } from 'framer-motion';
import { Heart, Sparkles, Shirt, Building, Megaphone, Music } from 'lucide-react';
import { experiences } from '../../data';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Heart,
  Sparkles,
  Shirt,
  Building,
  Megaphone,
  Music,
};

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 lg:py-32 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="kicker mb-4 inline-block">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            Curated{''}
            <span className="text-[#D4AF37]"> Experiences</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => {
            const Icon = iconMap[exp.icon] || Heart;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-[#050505] border border-[rgba(212,175,55,0.15)] overflow-hidden"
              >
                {/* Card Content */}
                <div className="p-8">
                  <div className="w-14 h-14 bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                    <Icon size={28} className="text-[#D4AF37]" />
                  </div>
                  <h3 className="font-display text-2xl mb-3 text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-[#A0A0A0] leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}