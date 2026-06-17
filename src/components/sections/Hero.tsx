import { motion } from 'framer-motion';
import { Heart, Shirt, Building, Music } from 'lucide-react';
import sarvamHero from '../../assets/sarvam-hero.jpg';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const badges = [
    { icon: Heart, label: 'Pre-Wedding' },
    { icon: Shirt, label: 'Fashion' },
    { icon: Building, label: 'Commercial' },
    { icon: Music, label: 'Music Videos' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={sarvamHero}
          alt="Sarvam - The Venue"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Floating Glow Effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#D4AF37]/8 rounded-full blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="kicker mb-6 inline-block">Hyderabad's Premier Creative Destination</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6"
        >
          Where Every Frame{''}
          <span className="block text-[#D4AF37]">Tells A Story</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl mx-auto mb-10"
        >
          Hyderabad's Premier Destination For Pre-Wedding, Fashion, Commercial & Cinematic Productions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            onClick={() => scrollToSection('#experiences')}
            className="btn-gold btn-gold-hover"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Experiences
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('#contact')}
            className="btn-ghost btn-ghost-hover"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book A Shoot
          </motion.button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="flex items-center gap-2 text-[#A0A0A0] text-sm"
            >
              <badge.icon size={16} className="text-[#D4AF37]" />
              <span>{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}