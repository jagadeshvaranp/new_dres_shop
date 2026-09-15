import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { SEARCH_SUGGESTIONS } from '../../data/collections';
import { PRODUCTS } from '../../data/products';

export default function SearchOverlay({ isOpen, onClose, onSelectProduct, onSelectCategory }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredProducts = query.trim()
    ? PRODUCTS.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.collection.toLowerCase().includes(q) ||
          (p.keywords && p.keywords.some((k) => k.toLowerCase().includes(q)))
        );
      })
    : [];

  return (
    <div className="absolute top-full left-0 w-full bg-white dark:bg-[#151816] text-[#1a1c1a] dark:text-[#f4f2eb] border-b border-neutral-200/80 dark:border-neutral-800 shadow-2xl z-40 animate-fade-in transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-8">
        
        {/* Search Bar Input */}
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4 mb-8">
          <div className="flex items-center flex-1 gap-3.5">
            <Search size={22} className="text-neutral-400 dark:text-neutral-500 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search anything"
              className="w-full text-xl sm:text-2xl font-light bg-transparent text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none tracking-wide"
            />
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors rounded-full"
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Section: Trending vs Results */}
        {query.trim() === '' ? (
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Left Column: Trending Searches */}
            <div className="col-span-12 sm:col-span-3 space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-medium">
                Trending Searches
              </h3>
              <div className="space-y-2.5">
                {SEARCH_SUGGESTIONS.trending.map((trend) => (
                  <button
                    key={trend}
                    onClick={() => setQuery(trend)}
                    className="block text-left text-[15px] text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition-colors"
                  >
                    {trend}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Category Cards */}
            <div className="col-span-12 sm:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {SEARCH_SUGGESTIONS.quickCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => {
                    onSelectCategory(card.category);
                    onClose();
                  }}
                  className="group relative cursor-pointer overflow-hidden rounded-sm aspect-[4/5] bg-neutral-100 dark:bg-neutral-800 shadow-sm"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white text-base font-normal tracking-wide flex items-center gap-1.5 drop-shadow">
                      <span className="text-white/80">•</span>
                      <span>{card.title}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Live Search Results */
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest text-neutral-500">
                Found {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'} for "{query}"
              </span>
              {filteredProducts.length > 0 && (
                <button
                  onClick={() => setQuery('')}
                  className="text-xs text-neutral-400 hover:text-neutral-800 dark:hover:text-white underline"
                >
                  Clear search
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-12 text-center text-neutral-500">
                <p className="text-lg font-serif italic mb-2">No matching pieces found</p>
                <p className="text-sm text-neutral-400">Try searching for "hoodie", "sneaker", "tops", or "trousers".</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-h-[380px] overflow-y-auto pr-2">
                {filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => {
                      onSelectProduct(prod);
                      onClose();
                    }}
                    className="group cursor-pointer rounded-sm overflow-hidden bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 p-2.5 transition-all hover:shadow-md"
                  >
                    <div className="aspect-[4/5] rounded-sm overflow-hidden bg-neutral-200 dark:bg-neutral-800 mb-2.5">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">{prod.category}</p>
                    <h4 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate group-hover:text-forest-700 dark:group-hover:text-luxegold transition-colors">
                      {prod.name}
                    </h4>
                    <p className="text-sm font-serif mt-1 font-semibold text-neutral-800 dark:text-neutral-200">
                      ${prod.price}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
