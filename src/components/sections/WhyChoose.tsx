import { motion } from 'framer-motion';
import { Palette, DoorOpen, Camera, Clapperboard, Sparkles, MapPin } from 'lucide-react';
import { features } from '../../data';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Palette,
  DoorOpen,
  Camera,
  Clapperboard,
  Sparkles,
  MapPin,
};

export default function WhyChoose() {
  return (
    <section className="py-24 lg:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="kicker mb-4 inline-block">Why Choose Us</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            The Sarvam{''}
            <span className="text-[#D4AF37]"> Advantage</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-[#0D0D0D] border border-[rgba(212,175,55,0.15)] hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#D4AF37]/10 flex items-center justify-center mb-5 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                  <Icon size={24} className="text-[#D4AF37]" />
                </div>
                <h3 className="font-display text-xl mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-[#A0A0A0] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}