import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '../../data';

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="kicker mb-4 inline-block">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            What{''}
            <span className="text-[#D4AF37]"> They Say</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-8 group hover:border-[#D4AF37]/30 transition-all duration-300"
            >
              <Quote size={32} className="text-[#D4AF37]/30 mb-4" />
              <p className="text-[#A0A0A0] leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#D4AF37]/20 flex items-center justify-center">
                  <span className="text-[#D4AF37] font-display text-xl">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-[#A0A0A0] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}