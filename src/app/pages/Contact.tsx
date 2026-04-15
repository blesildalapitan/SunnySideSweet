import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-['Crimson_Pro'] text-5xl sm:text-6xl font-bold text-[var(--dark-text)] mb-4">
            Get in Touch
          </h1>
          <p className="text-[var(--dark-text)]/70 text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Visit us or reach out anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="font-['Crimson_Pro'] text-2xl font-bold text-[var(--dark-text)] mb-6">
                Contact Information
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--golden-yellow)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[var(--dark-text)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--dark-text)] mb-1">Address</h3>
                    <p className="text-[var(--dark-text)]/70">
                      123 Baker Street<br />
                      Manila, Philippines 1000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--golden-yellow)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[var(--dark-text)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--dark-text)] mb-1">Phone</h3>
                    <p className="text-[var(--dark-text)]/70">+63 912 345 6789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--golden-yellow)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[var(--dark-text)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--dark-text)] mb-1">Email</h3>
                    <p className="text-[var(--dark-text)]/70">hello@sunnysidesweet.ph</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--golden-yellow)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[var(--dark-text)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--dark-text)] mb-1">Hours</h3>
                    <p className="text-[var(--dark-text)]/70">
                      Monday - Sunday<br />
                      7:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h2 className="font-['Crimson_Pro'] text-2xl font-bold text-[var(--dark-text)] mb-6">
              Send us a Message
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-[var(--dark-text)] font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--dark-text)]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--golden-yellow)] transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-[var(--dark-text)] font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--dark-text)]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--golden-yellow)] transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-[var(--dark-text)] font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--dark-text)]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--golden-yellow)] transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[var(--golden-yellow)] text-[var(--dark-text)] rounded-xl font-bold hover:bg-[var(--golden-yellow)]/90 transition-all hover:shadow-lg active:scale-95"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-6 shadow-lg"
        >
          <h2 className="font-['Crimson_Pro'] text-2xl font-bold text-[var(--dark-text)] mb-6">
            Find Us
          </h2>
          <div className="w-full h-96 bg-[var(--cream)] rounded-xl flex items-center justify-center">
            <p className="text-[var(--dark-text)]/50">Google Maps Placeholder</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
