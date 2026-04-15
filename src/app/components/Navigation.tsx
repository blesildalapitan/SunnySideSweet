import { Link, useLocation } from 'react-router';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

export function Navigation() {
  const location = useLocation();
  const { getItemCount } = useCart();
  const { isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/menu', label: 'Menu' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--dark-text)]/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[var(--golden-yellow)] to-[var(--muted-tan)] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="font-['Crimson_Pro'] font-bold text-[var(--dark-text)]">SS</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-['Crimson_Pro'] text-xl font-bold text-[var(--dark-text)] leading-none">
                Sunny Side Sweet
              </h1>
              <p className="text-xs text-[var(--dark-text)]/60">Freshly Baked Daily</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-['Nunito'] transition-all duration-200 relative ${
                  isActive(link.path)
                    ? 'text-[var(--dark-text)] font-bold'
                    : 'text-[var(--dark-text)]/70 hover:text-[var(--dark-text)]'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--golden-yellow)] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/cart"
              className="relative p-2 hover:bg-[var(--cream)] rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--dark-text)]" />
              {getItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--cherry-red)] text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {getItemCount()}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <button
                onClick={logout}
                className="hidden sm:block px-4 py-2 bg-[var(--dark-text)] text-white rounded-lg hover:bg-[var(--dark-text)]/90 transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="p-2 hover:bg-[var(--cream)] rounded-lg transition-colors"
              >
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--dark-text)]" />
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-[var(--cream)] rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[var(--dark-text)]" />
              ) : (
                <Menu className="w-6 h-6 text-[var(--dark-text)]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--dark-text)]/10 py-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-[var(--golden-yellow)] text-[var(--dark-text)] font-bold'
                      : 'text-[var(--dark-text)]/70 hover:bg-[var(--cream)]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {isAuthenticated && (
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-2 bg-[var(--dark-text)] text-white rounded-lg hover:bg-[var(--dark-text)]/90 transition-colors text-left"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
