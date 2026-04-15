import { Link, useNavigate } from 'react-router';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export function Cart() {
  const { items, updateQuantity, removeFromCart, getTotal } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const deliveryFee = 50;
  const subtotal = getTotal();
  const total = subtotal + (items.length > 0 ? deliveryFee : 0);

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login?redirect=/checkout');
      return;
    }
    navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-24 h-24 bg-[var(--cream)] rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-[var(--dark-text)]/40" />
          </div>
          <h2 className="font-['Crimson_Pro'] text-3xl font-bold text-[var(--dark-text)] mb-4">
            Your cart is empty
          </h2>
          <p className="text-[var(--dark-text)]/70 mb-8">
            Start adding some delicious treats to your cart!
          </p>
          <Link
            to="/menu"
            className="inline-block px-8 py-3 bg-[var(--golden-yellow)] text-[var(--dark-text)] rounded-xl font-semibold hover:bg-[var(--golden-yellow)]/90 transition-all hover:shadow-lg"
          >
            Browse Menu
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-['Crimson_Pro'] text-4xl sm:text-5xl font-bold text-[var(--dark-text)] mb-2">
            Shopping Cart
          </h1>
          <p className="text-[var(--dark-text)]/70 mb-10">
            {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg flex flex-col sm:flex-row gap-4"
                >
                  <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-grow">
                    <h3 className="font-['Crimson_Pro'] text-xl font-bold text-[var(--dark-text)] mb-2">
                      {item.name}
                    </h3>
                    <p className="text-[var(--dark-text)]/60 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-[var(--cream)] rounded-lg flex items-center justify-center hover:bg-[var(--golden-yellow)] transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-bold text-lg w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-[var(--cream)] rounded-lg flex items-center justify-center hover:bg-[var(--golden-yellow)] transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="font-['Crimson_Pro'] text-xl font-bold text-[var(--dark-text)]">
                          ₱{item.price * item.quantity}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-[var(--cherry-red)] hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                <h2 className="font-['Crimson_Pro'] text-2xl font-bold text-[var(--dark-text)] mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-[var(--dark-text)]/70">
                    <span>Subtotal</span>
                    <span className="font-semibold">₱{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-[var(--dark-text)]/70">
                    <span>Delivery Fee</span>
                    <span className="font-semibold">₱{deliveryFee}</span>
                  </div>
                  <div className="border-t border-[var(--dark-text)]/10 pt-4">
                    <div className="flex justify-between">
                      <span className="font-['Crimson_Pro'] text-xl font-bold text-[var(--dark-text)]">
                        Total
                      </span>
                      <span className="font-['Crimson_Pro'] text-2xl font-bold text-[var(--dark-text)]">
                        ₱{total}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-4 bg-[var(--cherry-red)] text-white rounded-xl font-bold text-lg hover:bg-[var(--cherry-red)]/90 transition-all hover:shadow-xl active:scale-95"
                >
                  {isAuthenticated ? 'Proceed to Checkout' : 'Login to Checkout'}
                </button>

                <Link
                  to="/menu"
                  className="block text-center mt-4 text-[var(--dark-text)]/70 hover:text-[var(--dark-text)] transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
