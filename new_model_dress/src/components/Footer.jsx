import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Footer({ onSelectCategory, onSelectCollection, onNavigateSection }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3500);
    }
  };

  return (
    <footer className="bg-white dark:bg-[#121413] text-[#1a1c1a] dark:text-[#eee9df] border-t border-neutral-200/70 dark:border-neutral-800/80 pt-20 pb-16 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* 5-Column Grid Layout matching Screenshot 3 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-16">
          
          {/* Logo Column */}
          <div className="md:col-span-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-3xl lg:text-4xl font-serif tracking-tight font-medium hover:opacity-85 transition-opacity"
            >
              Egoiste
            </a>
          </div>

          {/* Catalog Column */}
          <div className="md:col-span-2 space-y-3.5">
            <h4 className="text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-medium">
              Catalog
            </h4>
            <ul className="space-y-2 text-[14px] text-neutral-700 dark:text-neutral-300 font-normal">
              <li>
                <button
                  onClick={() => onSelectCategory('All')}
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Shop
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Sale')}
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Sale
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCollection('Signature Classics')}
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Collections
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection && onNavigateSection('lookbook')}
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Lookbook
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2 space-y-3.5">
            <h4 className="text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-medium">
              Company
            </h4>
            <ul className="space-y-2 text-[14px] text-neutral-700 dark:text-neutral-300 font-normal">
              <li>
                <button
                  onClick={() => onNavigateSection && onNavigateSection('story')}
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection && onNavigateSection('journal')}
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Journal
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
                  Stores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-2 space-y-3.5">
            <h4 className="text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-medium">
              Legal
            </h4>
            <ul className="space-y-2 text-[14px] text-neutral-700 dark:text-neutral-300 font-normal">
              <li>
                <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Dressed, Informed. Newsletter Column */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-neutral-900 dark:text-white">
              Dressed, Informed.
            </h3>

            {subscribed ? (
              <div className="py-2 text-xs font-medium text-forest-700 dark:text-luxegold flex items-center gap-1.5 animate-fade-in">
                <Check size={14} /> You're on the private mailing list.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative mt-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 pb-2.5 pt-1 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-white pr-8 tracking-wide transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1 text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white p-1 transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
            )}

            <p className="text-[11px] text-neutral-400 dark:text-neutral-500 leading-relaxed font-light">
              By subscribing, you agree to receive marketing communications from us and confirm your acceptance of our{' '}
              <a href="#" className="underline hover:text-neutral-700 dark:hover:text-neutral-300">
                Privacy Policy
              </a>
              .
            </p>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <div>© {new Date().getFullYear()} Egoiste Atelier. All rights reserved.</div>
          <div className="flex gap-6">
            <span>London</span>
            <span>•</span>
            <span>Paris</span>
            <span>•</span>
            <span>Milan</span>
            <span>•</span>
            <span>New York</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
