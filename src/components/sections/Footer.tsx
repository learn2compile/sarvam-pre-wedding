import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { businessInfo, navigation } from '../../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 bg-[#050505] border-t border-[rgba(212,175,55,0.15)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="inline-block cursor-pointer"
            >
              <span className="font-display text-3xl tracking-tight">
                <span className="text-white">Sarvam</span>
                <span className="text-[#D4AF37]"> — </span>
                <span className="text-[#D4AF37]">The Venue</span>
              </span>
            </a>
            <p className="text-[#A0A0A0] mt-4 max-w-md">
              Hyderabad's premier creative destination for pre-wedding shoots, fashion productions, commercial campaigns and cinematic storytelling.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href={`https://instagram.com/${businessInfo.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0D0D0D] border border-[rgba(212,175,55,0.15)] flex items-center justify-center hover:border-[#D4AF37] transition-colors"
              >
                <Instagram size={18} className="text-[#D4AF37]" />
              </a>
              <a
                href={`https://facebook.com/${businessInfo.facebook.replace(' ', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0D0D0D] border border-[rgba(212,175,55,0.15)] flex items-center justify-center hover:border-[#D4AF37] transition-colors"
              >
                <Facebook size={18} className="text-[#D4AF37]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                <span className="text-[#A0A0A0] text-sm">
                  {businessInfo.address.street}, {businessInfo.address.village}<br />
                  {businessInfo.address.area}, {businessInfo.address.city}
                </span>
              </li>
              {businessInfo.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\D/g, '')}`}
                    className="flex items-center gap-3 text-[#A0A0A0] hover:text-[#D4AF37] transition-colors"
                  >
                    <Phone size={16} className="text-[#D4AF37]" />
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[rgba(212,175,55,0.15)] text-center">
          <p className="text-[#A0A0A0] text-sm">
            © {currentYear} {businessInfo.name}. All rights reserved.
          </p>
          <p className="text-[#A0A0A0] text-sm mt-2">
            {businessInfo.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}