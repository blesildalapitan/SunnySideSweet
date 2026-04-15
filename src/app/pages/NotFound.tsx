import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="font-['Crimson_Pro'] text-9xl font-bold text-[var(--golden-yellow)] mb-4">
            404
          </h1>
          <h2 className="font-['Crimson_Pro'] text-3xl sm:text-4xl font-bold text-[var(--dark-text)] mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-[var(--dark-text)]/70 text-lg">
            Looks like this page went on a coffee break. Let's get you back to something delicious!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--golden-yellow)] text-[var(--dark-text)] rounded-xl font-semibold hover:bg-[var(--golden-yellow)]/90 transition-all hover:shadow-lg"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-[var(--dark-text)] rounded-xl font-semibold hover:bg-[var(--cream)] transition-all shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
