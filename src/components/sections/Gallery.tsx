import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import { gallery } from '../../data';

const categories = ['all', 'pre-wedding', 'fashion', 'commercial', 'brands', 'creative'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredGallery = activeCategory === 'all'
    ? gallery
    : gallery.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="kicker mb-4 inline-block">Our Work</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            Captured{''}
            <span className="text-[#D4AF37]"> Moments</span>
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm uppercase tracking-wider transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                  : 'text-[#A0A0A0] border-[rgba(255,255,255,0.15)] hover:border-[#D4AF37] hover:text-white'
              }`}
            >
              {cat.replace('-', ' ')}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(item.image)}
                className="group relative overflow-hidden cursor-pointer"
              >
                <div className={`relative ${index % 3 === 1 ? 'h-[350px]' : 'h-[280px]'}`}>
                  <img
                    src={item.image}
                    alt={`Gallery ${item.id}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn size={32} className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            >
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[90vh] object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white text-lg"
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}