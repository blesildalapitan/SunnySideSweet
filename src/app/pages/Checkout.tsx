import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'motion/react';
import { CreditCard, MapPin, CheckCircle } from 'lucide-react';

export function Checkout() {
  const { items, getTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [deliveryInfo, setDeliveryInfo] = useState({
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const deliveryFee = 50;
  const subtotal = getTotal();
  const total = subtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);

    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md bg-white rounded-3xl p-10 shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-green-600" />
          </motion.div>
          <h2 className="font-['Crimson_Pro'] text-3xl font-bold text-[var(--dark-text)] mb-4">
            Order Placed!
          </h2>
          <p className="text-[var(--dark-text)]/70 mb-2">
            Thank you for your order, {user?.name}!
          </p>
          <p className="text-[var(--dark-text)]/70">
            Your delicious treats will be on their way soon.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-['Crimson_Pro'] text-4xl sm:text-5xl font-bold text-[var(--dark-text)] mb-10">
            Checkout
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Delivery & Payment Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Delivery Information */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[var(--golden-yellow)] rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[var(--dark-text)]" />
                    </div>
                    <h2 className="font-['Crimson_Pro'] text-2xl font-bold text-[var(--dark-text)]">
                      Delivery Information
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-[var(--dark-text)] font-semibold mb-2">
                        Street Address
                      </label>
                      <input
                        type="text"
                        required
                        value={deliveryInfo.address}
                        onChange={(e) =>
                          setDeliveryInfo({ ...deliveryInfo, address: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--dark-text)]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--golden-yellow)] transition-all"
                        placeholder="123 Main Street"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[var(--dark-text)] font-semibold mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          required
                          value={deliveryInfo.city}
                          onChange={(e) =>
                            setDeliveryInfo({ ...deliveryInfo, city: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--dark-text)]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--golden-yellow)] transition-all"
                          placeholder="Manila"
                        />
                      </div>

                      <div>
                        <label className="block text-[var(--dark-text)] font-semibold mb-2">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          required
                          value={deliveryInfo.postalCode}
                          onChange={(e) =>
                            setDeliveryInfo({ ...deliveryInfo, postalCode: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--dark-text)]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--golden-yellow)] transition-all"
                          placeholder="1000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[var(--dark-text)] font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={deliveryInfo.phone}
                        onChange={(e) =>
                          setDeliveryInfo({ ...deliveryInfo, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--dark-text)]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--golden-yellow)] transition-all"
                        placeholder="+63 912 345 6789"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[var(--golden-yellow)] rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-[var(--dark-text)]" />
                    </div>
                    <h2 className="font-['Crimson_Pro'] text-2xl font-bold text-[var(--dark-text)]">
                      Payment Method
                    </h2>
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 bg-[var(--cream)] rounded-xl cursor-pointer hover:bg-[var(--golden-yellow)]/20 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={paymentMethod === 'cash'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5 text-[var(--golden-yellow)]"
                      />
                      <span className="font-semibold">Cash on Delivery</span>
                    </label>

                    <label className="flex items-center gap-3 p-4 bg-[var(--cream)] rounded-xl cursor-pointer hover:bg-[var(--golden-yellow)]/20 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="gcash"
                        checked={paymentMethod === 'gcash'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5 text-[var(--golden-yellow)]"
                      />
                      <span className="font-semibold">GCash</span>
                    </label>

                    <label className="flex items-center gap-3 p-4 bg-[var(--cream)] rounded-xl cursor-pointer hover:bg-[var(--golden-yellow)]/20 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5 text-[var(--golden-yellow)]"
                      />
                      <span className="font-semibold">Credit/Debit Card</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                  <h2 className="font-['Crimson_Pro'] text-2xl font-bold text-[var(--dark-text)] mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-3 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-[var(--dark-text)]/70">
                          {item.name} × {item.quantity}
                        </span>
                        <span className="font-semibold">₱{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 border-t border-[var(--dark-text)]/10 pt-4 mb-6">
                    <div className="flex justify-between text-[var(--dark-text)]/70">
                      <span>Subtotal</span>
                      <span className="font-semibold">₱{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-[var(--dark-text)]/70">
                      <span>Delivery Fee</span>
                      <span className="font-semibold">₱{deliveryFee}</span>
                    </div>
                    <div className="flex justify-between border-t border-[var(--dark-text)]/10 pt-3">
                      <span className="font-['Crimson_Pro'] text-xl font-bold text-[var(--dark-text)]">
                        Total
                      </span>
                      <span className="font-['Crimson_Pro'] text-2xl font-bold text-[var(--dark-text)]">
                        ₱{total}
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[var(--cherry-red)] text-white rounded-xl font-bold text-lg hover:bg-[var(--cherry-red)]/90 transition-all hover:shadow-xl active:scale-95"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
