import { motion } from 'framer-motion';
import sarvamAbout from '../../assets/sarvam-about.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="kicker mb-4 inline-block">About Sarvam</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              More Than A Venue.{' '}
              <span className="text-[#D4AF37]">A Creative Destination.</span>
            </h2>
            <p className="text-lg text-[#A0A0A0] leading-relaxed mb-6">
              Sarvam is Hyderabad's premier creative destination designed for pre-wedding shoots, fashion productions, commercial campaigns and cinematic storytelling.
            </p>
            <p className="text-lg text-[#A0A0A0] leading-relaxed mb-10">
              Located near Shamshabad Exit 16, we offer multiple themed environments crafted to elevate every visual experience. From royal backdrops to romantic gardens, traditional settings to luxury concepts — every corner of Sarvam is designed to inspire creativity and capture moments that last forever.
            </p>
            <div className="w-20 h-[1px] bg-[#D4AF37]" />
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={sarvamAbout}
                alt="Sarvam - Luxury Venue"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            {/* Decorative Frame */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-full h-full border border-[#D4AF37]/30 -z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}