import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'motion/react';
import { UserPlus } from 'lucide-react';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    const success = register(name, email, password);
    if (success) {
      navigate('/');
    } else {
      setError('Registration failed');
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
              <UserPlus className="w-8 h-8 text-[var(--dark-text)]" />
            </div>
          </div>

          <h1 className="font-['Crimson_Pro'] text-3xl sm:text-4xl font-bold text-[var(--dark-text)] text-center mb-2">
            Create Account
          </h1>
          <p className="text-[var(--dark-text)]/60 text-center mb-8">
            Join us and start your sweet journey
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
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--dark-text)]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--golden-yellow)] transition-all"
                placeholder="Juan Dela Cruz"
              />
            </div>

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

            <div>
              <label className="block text-[var(--dark-text)] font-semibold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--dark-text)]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--golden-yellow)] transition-all"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[var(--golden-yellow)] text-[var(--dark-text)] rounded-xl font-bold text-lg hover:bg-[var(--golden-yellow)]/90 transition-all hover:shadow-lg active:scale-95"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[var(--dark-text)]/60">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-[var(--dark-text)] font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
