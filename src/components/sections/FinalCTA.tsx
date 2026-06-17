import { motion } from 'framer-motion';

export default function FinalCTA() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="kicker mb-4 inline-block">Let's Create</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight">
            Ready To Create Something{''}
            <span className="text-[#D4AF37]"> Extraordinary?</span>
          </h2>
          <p className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl mx-auto mb-10">
            Discover Hyderabad's most creative shoot destination. Your vision, our spaces — together we create magic.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="btn-gold btn-gold-hover"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book A Shoot
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="btn-ghost btn-ghost-hover"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}