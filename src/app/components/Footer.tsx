import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--dark-text)] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-['Crimson_Pro'] text-2xl font-bold mb-4">Sunny Side Sweet</h3>
            <p className="text-white/80 leading-relaxed">
              Bringing warmth and happiness to every bite. Freshly baked with love, every single day.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Crimson_Pro'] text-xl font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>123 Baker Street, Manila, Philippines</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+63 912 345 6789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>hello@sunnysidesweet.ph</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-['Crimson_Pro'] text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[var(--golden-yellow)] rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[var(--golden-yellow)] rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[var(--golden-yellow)] rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-6 text-white/60 text-sm">
              Open Daily: 7:00 AM - 8:00 PM
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>&copy; 2026 Sunny Side Sweet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
