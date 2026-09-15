import React, { useState } from 'react';
import { SHOP_MENU_CATEGORIES, SHOP_FEATURED_CARDS } from '../../data/collections';

export default function ShopMegaMenu({ isOpen, onClose, onSelectCategory, onSelectCollection }) {
  const [activeTab, setActiveTab] = useState('Clothing');

  if (!isOpen) return null;

  const currentCategoryData = SHOP_MENU_CATEGORIES[activeTab] || SHOP_MENU_CATEGORIES.Clothing;

  return (
    <div
      className="absolute top-full left-0 w-full bg-white dark:bg-[#151816] text-[#1a1c1a] dark:text-[#f4f2eb] border-b border-neutral-200/80 dark:border-neutral-800 shadow-2xl z-40 animate-fade-in transition-all"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-10">
        <div className="grid grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Primary Categories */}
          <div className="col-span-3 space-y-4 border-r border-neutral-100 dark:border-neutral-800/80 pr-6">
            {Object.keys(SHOP_MENU_CATEGORIES).map((catName) => {
              const isActive = activeTab === catName;
              return (
                <div key={catName}>
                  <button
                    onClick={() => setActiveTab(catName)}
                    onMouseEnter={() => setActiveTab(catName)}
                    className={`group text-left text-2xl md:text-3xl font-serif tracking-tight transition-all block ${
                      isActive
                        ? 'text-neutral-900 dark:text-white font-medium underline underline-offset-8 decoration-1 decoration-neutral-800 dark:decoration-neutral-200'
                        : 'text-neutral-400 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-300'
                    }`}
                  >
                    {catName}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Middle Column: Sub-items List based on active tab */}
          <div className="col-span-3 space-y-3.5 pt-2 pl-2">
            {currentCategoryData.items.map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (activeTab === 'Collections') {
                    onSelectCollection(item);
                  } else {
                    onSelectCategory(item);
                  }
                  onClose();
                }}
                className="block text-left text-[15px] font-normal text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors duration-150 tracking-wide"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right Column: 2 Visual Editorial Cards */}
          <div className="col-span-6 grid grid-cols-2 gap-5 pl-4">
            {SHOP_FEATURED_CARDS.map((card) => (
              <div
                key={card.id}
                onClick={() => {
                  onSelectCollection(card.category);
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/90" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center">
                  <span className="text-white text-sm md:text-base font-normal tracking-wide flex items-center gap-1.5 drop-shadow">
                    <span className="text-white/80">•</span>
                    <span>{card.title}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
