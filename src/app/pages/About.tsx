import { motion } from 'motion/react';
import { Heart, Award, Users } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-['Crimson_Pro'] text-5xl sm:text-6xl font-bold text-[var(--dark-text)] mb-6">
            Our Story
          </h1>
          <p className="text-[var(--dark-text)]/70 text-xl max-w-3xl mx-auto leading-relaxed">
            A family tradition of baking happiness, one pastry at a time
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 mb-20 items-center"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=800&q=80"
              alt="Bakery Interior"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-text)]/30 to-transparent" />
          </div>

          <div className="space-y-6">
            <h2 className="font-['Crimson_Pro'] text-3xl sm:text-4xl font-bold text-[var(--dark-text)]">
              Where It All Began
            </h2>
            <p className="text-[var(--dark-text)]/80 leading-relaxed">
              Sunny Side Sweet was born from a simple dream: to bring the warmth of homemade baking to our community. What started as a small family kitchen has grown into a beloved neighborhood bakery.
            </p>
            <p className="text-[var(--dark-text)]/80 leading-relaxed">
              Every morning before dawn, our bakers arrive to prepare fresh loaves, delicate pastries, and sweet treats that have become a cherished part of our customers' daily routines.
            </p>
            <p className="text-[var(--dark-text)]/80 leading-relaxed">
              We believe in using only the finest ingredients, traditional techniques, and a generous helping of love in everything we bake.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-['Crimson_Pro'] text-3xl sm:text-4xl font-bold text-[var(--dark-text)] text-center mb-12">
            What We Stand For
          </h2>

          <div className="grid sm:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--golden-yellow)] to-[var(--cream)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-[var(--dark-text)]" />
              </div>
              <h3 className="font-['Crimson_Pro'] text-2xl font-bold text-[var(--dark-text)] mb-4">
                Passion
              </h3>
              <p className="text-[var(--dark-text)]/70 leading-relaxed">
                Every recipe is crafted with heart and dedication, ensuring each bite brings joy and comfort.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--golden-yellow)] to-[var(--cream)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-[var(--dark-text)]" />
              </div>
              <h3 className="font-['Crimson_Pro'] text-2xl font-bold text-[var(--dark-text)] mb-4">
                Quality
              </h3>
              <p className="text-[var(--dark-text)]/70 leading-relaxed">
                We source the finest ingredients and never compromise on freshness or taste.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--golden-yellow)] to-[var(--cream)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[var(--dark-text)]" />
              </div>
              <h3 className="font-['Crimson_Pro'] text-2xl font-bold text-[var(--dark-text)] mb-4">
                Community
              </h3>
              <p className="text-[var(--dark-text)]/70 leading-relaxed">
                We're more than a bakery—we're your neighbors, dedicated to serving our community with warmth.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[var(--cream)] to-[var(--golden-yellow)] rounded-3xl p-8 sm:p-12 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-['Crimson_Pro'] text-3xl font-bold text-[var(--dark-text)] mb-4">
                Our Mission
              </h3>
              <p className="text-[var(--dark-text)]/80 leading-relaxed">
                To create moments of happiness through exceptional baked goods, fostering connections and spreading warmth in every interaction.
              </p>
            </div>

            <div>
              <h3 className="font-['Crimson_Pro'] text-3xl font-bold text-[var(--dark-text)] mb-4">
                Our Vision
              </h3>
              <p className="text-[var(--dark-text)]/80 leading-relaxed">
                To become the heart of our community, where traditions are honored, memories are made, and every visit feels like coming home.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
