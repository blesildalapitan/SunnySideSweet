import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'motion/react';
import { LogIn } from 'lucide-react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const success = login(email, password);
    if (success) {
      const redirect = searchParams.get('redirect') || '/';
      navigate(redirect);
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--golden-yellow)] to-[var(--muted-tan)] rounded-full flex items-center justify-center">
              <LogIn className="w-8 h-8 text-[var(--dark-text)]" />
            </div>
          </div>

          <h1 className="font-['Crimson_Pro'] text-3xl sm:text-4xl font-bold text-[var(--dark-text)] text-center mb-2">
            Welcome Back
          </h1>
          <p className="text-[var(--dark-text)]/60 text-center mb-8">
            Sign in to continue your order
          </p>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6"
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[var(--dark-text)] font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--dark-text)]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--golden-yellow)] transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-[var(--dark-text)] font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--dark-text)]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--golden-yellow)] transition-all"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[var(--golden-yellow)] text-[var(--dark-text)] rounded-xl font-bold text-lg hover:bg-[var(--golden-yellow)]/90 transition-all hover:shadow-lg active:scale-95"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[var(--dark-text)]/60">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-[var(--dark-text)] font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
