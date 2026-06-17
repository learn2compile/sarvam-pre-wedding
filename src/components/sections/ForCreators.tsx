import { motion } from 'framer-motion';
import { Camera, Users, Building, Film } from 'lucide-react';

export default function ForCreators() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const creatorTypes = [
    { icon: Camera, title: 'Photographers', description: 'Premium settings designed for capturing perfect frames' },
    { icon: Film, title: 'Filmmakers', description: 'Versatile locations for video productions of all scales' },
    { icon: Users, title: 'Influencers', description: 'Dynamic concepts for content that stands out' },
    { icon: Building, title: 'Brands', description: 'Professional environments for brand storytelling' },
  ];

  return (
    <section id="creators" className="py-24 lg:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="kicker mb-4 inline-block">For Creators</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Built For{''}
              <span className="text-[#D4AF37]"> Creators</span>
            </h2>
            <p className="text-lg text-[#A0A0A0] leading-relaxed mb-8">
              Whether you're a photographer, filmmaker, influencer, fashion brand or production house, Sarvam provides versatile environments designed for creative excellence.
            </p>

            {/* Creator Types */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {creatorTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-[#0D0D0D] border border-[rgba(212,175,55,0.15)]"
                >
                  <type.icon size={20} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">{type.title}</h4>
                    <p className="text-[#A0A0A0] text-sm">{type.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="btn-gold btn-gold-hover"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Creating
            </motion.button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden h-[400px] lg:h-[500px]">
              <img
                src="/src/assets/gallery-4.jpg"
                alt="Creator at Sarvam"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
            {/* Decorative overlay */}
            <div className="absolute inset-0 border border-[#D4AF37]/30 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}