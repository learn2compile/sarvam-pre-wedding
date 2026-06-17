import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { businessInfo } from '../../data';

export default function Location() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="kicker mb-4 inline-block">Visit Us</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              Our{''}
              <span className="text-[#D4AF37]"> Location</span>
            </h2>

            {/* Address */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white text-lg font-medium mb-2">Address</h3>
                  <p className="text-[#A0A0A0]">
                    {businessInfo.address.street},<br />
                    {businessInfo.address.village},<br />
                    {businessInfo.address.area},<br />
                    {businessInfo.address.city}, {businessInfo.address.state} – {businessInfo.address.pincode}
                  </p>
                  <p className="text-[#D4AF37] mt-2">{businessInfo.landmark}</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <Phone size={24} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white text-lg font-medium mb-2">Phone</h3>
                  {businessInfo.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\D/g, '')}`}
                      className="block text-[#A0A0A0] hover:text-[#D4AF37] transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <Clock size={24} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white text-lg font-medium mb-2">Working Hours</h3>
                  <p className="text-[#A0A0A0]">Open All Days</p>
                  <p className="text-[#A0A0A0]">6:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <motion.button
              onClick={openWhatsApp}
              className="btn-gold btn-gold-hover flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </motion.button>
          </motion.div>

          {/* Map Embed - OpenStreetMap */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[450px] w-full overflow-hidden rounded-2xl border-2 border-[#D4AF37]"
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sarvam - The Venue Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=78.417%2C17.235%2C78.450%2C17.265&layer=mapnik&marker=17.2500%2C78.4335"
            />

            {/* Get Directions Button */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sarvam+The+Venue+Shamshabad"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 btn-gold btn-gold-hover flex items-center gap-2 z-10"
            >
              <MapPin size={18} />
              Get Directions
            </a>

            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37] pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37] pointer-events-none" style={{ left: 'calc(50% - 60px)' }} />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none" style={{ right: 'calc(50% - 60px)' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}