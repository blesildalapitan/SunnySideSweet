import { Link } from 'react-router';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1600&q=80"
            alt="Bakery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--dark-text)]/70 to-[var(--dark-text)]/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-['Crimson_Pro'] text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Freshly Baked<br />Happiness Every Day
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl mb-10 text-white/90 leading-relaxed"
          >
            Where every bite tells a story of warmth and passion
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/menu"
              className="px-8 py-4 bg-[var(--golden-yellow)] text-[var(--dark-text)] rounded-xl font-bold text-lg hover:bg-[var(--golden-yellow)]/90 transition-all hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              Order Now
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/menu"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              View Menu
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--muted-tan)] to-transparent" />
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--muted-tan)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-['Crimson_Pro'] text-4xl sm:text-5xl font-bold text-[var(--dark-text)] mb-4">
              Our Bestsellers
            </h2>
            <p className="text-[var(--dark-text)]/70 text-lg max-w-2xl mx-auto">
              Discover our most-loved treats, baked fresh daily with the finest ingredients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--dark-text)] text-white rounded-xl font-semibold hover:bg-[var(--dark-text)]/90 transition-all hover:shadow-lg"
            >
              View All Products
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--cream)] to-[var(--golden-yellow)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-['Crimson_Pro'] text-4xl sm:text-5xl font-bold text-[var(--dark-text)] mb-6">
            Start Your Day Right
          </h2>
          <p className="text-[var(--dark-text)]/80 text-lg mb-8 leading-relaxed">
            Join us every morning for the finest pastries and coffee. Pre-order now for pickup!
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--dark-text)] text-white rounded-xl font-bold text-lg hover:bg-[var(--dark-text)]/90 transition-all hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Order Now
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
