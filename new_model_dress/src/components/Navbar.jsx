import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { MoreVertical, Menu, X, ShoppingBag, Search as SearchIcon, User } from 'lucide-react';

export default function Navbar({
  activeMenu,
  setActiveMenu,
  onNavigateSection,
  onOpenAccount,
  isScrolled = false,
}) {
  const { isDark, toggleTheme } = useTheme();
  const { totalItemsCount, setIsCartOpen } = useCart();

  const toggleMenu = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  const isMenuOpen = Boolean(activeMenu);

  // Background and text styles depending on open menus / scroll state
  const navBgClass = isMenuOpen
    ? 'bg-white dark:bg-[#151816] text-[#1a1c1a] dark:text-[#f4f2eb] border-b border-neutral-200/80 dark:border-neutral-800'
    : isScrolled
    ? 'bg-white/95 dark:bg-[#121413]/95 backdrop-blur-md text-[#1a1c1a] dark:text-[#f4f2eb] shadow-sm'
    : 'bg-transparent text-white drop-shadow-sm';

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveMenu(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-2xl sm:text-3xl lg:text-4xl font-serif tracking-tight font-medium select-none hover:opacity-90 transition-opacity"
            style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif' }}
          >
            Egoiste
          </a>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-10 text-[14.5px] font-normal tracking-wide">
          {/* Shop with Mega Menu toggle */}
          <button
            onClick={() => toggleMenu('shop')}
            onMouseEnter={() => activeMenu && setActiveMenu('shop')}
            className={`flex items-center gap-1.5 transition-all py-2 hover:opacity-100 ${
              activeMenu === 'shop'
                ? 'font-medium opacity-100'
                : 'opacity-85 hover:opacity-100'
            }`}
          >
            {activeMenu === 'shop' && <span className="text-[11px] leading-none">▪</span>}
            <span>Shop</span>
          </button>

          {/* Collections with Mega Menu toggle */}
          <button
            onClick={() => toggleMenu('collections')}
            onMouseEnter={() => activeMenu && setActiveMenu('collections')}
            className={`flex items-center gap-1.5 transition-all py-2 hover:opacity-100 ${
              activeMenu === 'collections'
                ? 'font-medium opacity-100'
                : 'opacity-85 hover:opacity-100'
            }`}
          >
            {activeMenu === 'collections' && <span className="text-[11px] leading-none">▪</span>}
            <span>Collections</span>
          </button>

          {/* Lookbook */}
          <button
            onClick={() => {
              setActiveMenu(null);
              onNavigateSection('lookbook');
            }}
            className="opacity-85 hover:opacity-100 transition-opacity py-2"
          >
            Lookbook
          </button>

          {/* Our Story */}
          <button
            onClick={() => {
              setActiveMenu(null);
              onNavigateSection('story');
            }}
            className="opacity-85 hover:opacity-100 transition-opacity py-2"
          >
            Our Story
          </button>

          {/* Features */}
          <button
            onClick={() => {
              setActiveMenu(null);
              onNavigateSection('features');
            }}
            className="opacity-85 hover:opacity-100 transition-opacity py-2"
          >
            Features
          </button>
        </nav>

        {/* Right: Actions (Search, Account, Cart, Theme, More) */}
        <div className="flex items-center space-x-5 lg:space-x-7 text-[14.5px] tracking-wide">
          
          {/* Search Action */}
          <button
            onClick={() => toggleMenu('search')}
            className={`flex items-center gap-1.5 transition-all py-2 ${
              activeMenu === 'search'
                ? 'font-medium opacity-100'
                : 'opacity-85 hover:opacity-100'
            }`}
            aria-label="Search catalog"
          >
            {activeMenu === 'search' && <span className="text-[11px] leading-none">▪</span>}
            <span className="hidden sm:inline">Search</span>
            <SearchIcon size={17} className="sm:hidden" />
          </button>

          {/* Account Action */}
          <button
            onClick={() => {
              setActiveMenu(null);
              onOpenAccount();
            }}
            className="opacity-85 hover:opacity-100 transition-opacity py-2 hidden sm:inline-block"
          >
            Account
          </button>

          {/* Cart with Count */}
          <button
            onClick={() => {
              setActiveMenu(null);
              setIsCartOpen(true);
            }}
            className="relative flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity py-2"
            aria-label="View Shopping Cart"
          >
            <span>Cart</span>
            {totalItemsCount > 0 && (
              <span className="inline-flex items-center justify-center bg-forest text-white dark:bg-luxegold dark:text-black text-[11px] font-semibold w-5 h-5 rounded-full -ml-0.5">
                {totalItemsCount}
              </span>
            )}
          </button>

          {/* Theme Toggle (Half-filled circle icon as in screenshot) */}
          <button
            onClick={toggleTheme}
            className="opacity-80 hover:opacity-100 transition-opacity p-1 rounded-full focus:outline-none"
            aria-label="Toggle dark/light theme"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <div className="w-4 h-4 rounded-full border-[1.5px] border-current overflow-hidden relative flex">
              <div className="w-1/2 h-full bg-current"></div>
              <div className="w-1/2 h-full bg-transparent"></div>
            </div>
          </button>

          {/* Extra options / 3 dots */}
          <div className="relative hidden lg:block">
            <button
              onClick={() => toggleMenu('options')}
              className="opacity-75 hover:opacity-100 transition-opacity p-1"
              aria-label="More options"
            >
              <MoreVertical size={16} />
            </button>
            {activeMenu === 'options' && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#1b1e1c] border border-neutral-200 dark:border-neutral-800 shadow-xl rounded-sm py-2 text-sm text-neutral-800 dark:text-neutral-200 animate-fade-in z-50"
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={() => {
                    onNavigateSection('catalog');
                    setActiveMenu(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs uppercase tracking-wider"
                >
                  Full Catalog
                </button>
                <button
                  onClick={() => {
                    onNavigateSection('craftsmanship');
                    setActiveMenu(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs uppercase tracking-wider"
                >
                  Craftsmanship
                </button>
                <button
                  onClick={() => {
                    onNavigateSection('faq');
                    setActiveMenu(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs uppercase tracking-wider"
                >
                  Private Client Care
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => toggleMenu('mobile')}
            className="md:hidden opacity-90 hover:opacity-100 transition-opacity p-1"
            aria-label="Toggle mobile menu"
          >
            {activeMenu === 'mobile' ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {activeMenu === 'mobile' && (
        <div className="md:hidden bg-white dark:bg-[#151816] border-b border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-4 animate-fade-in text-neutral-900 dark:text-white">
          <button
            onClick={() => {
              setActiveMenu('shop');
            }}
            className="block text-xl font-serif w-full text-left py-1"
          >
            Shop Categories
          </button>
          <button
            onClick={() => {
              setActiveMenu('collections');
            }}
            className="block text-xl font-serif w-full text-left py-1"
          >
            Collections
          </button>
          <button
            onClick={() => {
              setActiveMenu(null);
              onNavigateSection('lookbook');
            }}
            className="block text-xl font-serif w-full text-left py-1"
          >
            Lookbook
          </button>
          <button
            onClick={() => {
              setActiveMenu(null);
              onNavigateSection('story');
            }}
            className="block text-xl font-serif w-full text-left py-1"
          >
            Our Story
          </button>
          <button
            onClick={() => {
              setActiveMenu(null);
              onNavigateSection('features');
            }}
            className="block text-xl font-serif w-full text-left py-1"
          >
            Features & Materials
          </button>
          <button
            onClick={() => {
              setActiveMenu(null);
              onOpenAccount();
            }}
            className="block text-base text-neutral-500 dark:text-neutral-400 pt-2 border-t border-neutral-100 dark:border-neutral-800"
          >
            Account & Preferences
          </button>
        </div>
      )}
    </header>
  );
}
