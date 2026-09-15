import React, { useState } from 'react';
import { X, User, Lock, Mail, Check, ShieldCheck, Crown } from 'lucide-react';

export default function AccountModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('signin');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-md bg-white dark:bg-[#151816] text-neutral-900 dark:text-white rounded-sm shadow-2xl p-8 border border-neutral-200 dark:border-neutral-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {isLoggedIn ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#1c3424] text-[#c5a880] mx-auto flex items-center justify-center shadow-lg">
              <Crown size={32} />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
                VIP Private Member
              </span>
              <h3 className="text-2xl font-serif mt-1">Welcome back, {email.split('@')[0]}</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Egoiste Private Circle Tier: Gold
              </p>
            </div>

            <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded border border-neutral-200 dark:border-neutral-800 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-500">Private Sale Access:</span>
                <span className="text-forest-700 dark:text-luxegold font-medium">Unlocked (25% Off)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Complimentary Tailoring:</span>
                <span className="text-neutral-900 dark:text-white font-medium">Available</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Concierge WhatsApp:</span>
                <span className="text-neutral-900 dark:text-white font-medium">+44 20 7946 0991</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsLoggedIn(false);
                setEmail('');
              }}
              className="text-xs text-neutral-400 hover:text-neutral-900 dark:hover:text-white underline"
            >
              Sign out
            </button>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6 space-y-1">
              <span className="text-xs uppercase tracking-widest text-forest-700 dark:text-luxegold font-semibold">
                Private Client Portal
              </span>
              <h3 className="text-2xl font-serif">Sign in to Egoiste</h3>
              <p className="text-xs text-neutral-500">
                Access your orders, private sales, and personal styling archive.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-1 font-medium">
                  Email Address
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-3 text-neutral-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="client@egoiste-atelier.com"
                    className="w-full pl-9 pr-3 py-2.5 text-sm border border-neutral-300 dark:border-neutral-700 rounded-sm bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                    Password
                  </label>
                  <a href="#" className="text-[11px] text-neutral-400 hover:underline">
                    Forgot?
                  </a>
                </div>
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-3 text-neutral-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2.5 text-sm border border-neutral-300 dark:border-neutral-700 rounded-sm bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-100 dark:text-neutral-900 text-xs uppercase tracking-widest font-semibold rounded-sm transition-all shadow-md mt-2"
              >
                Access Account
              </button>
            </form>

            <div className="mt-6 text-center text-xs text-neutral-500">
              <span>New to Egoiste? </span>
              <button
                onClick={() => alert('VIP invitations sent to new registered emails.')}
                className="text-neutral-900 dark:text-white font-medium underline"
              >
                Request Private Invitation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
