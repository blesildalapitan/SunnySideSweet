import { Product } from '../contexts/CartContext';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-5">
        <h3 className="font-['Crimson_Pro'] text-xl font-bold text-[var(--dark-text)] mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-[var(--dark-text)]/70 text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-[var(--dark-text)] font-['Crimson_Pro']">
              ₱{product.price}
            </span>
            <span className="text-sm text-[var(--dark-text)]/50 ml-1">.00</span>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 px-4 py-2.5 bg-[var(--golden-yellow)] text-[var(--dark-text)] rounded-xl font-semibold hover:bg-[var(--golden-yellow)]/90 transition-all hover:shadow-md active:scale-95"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
