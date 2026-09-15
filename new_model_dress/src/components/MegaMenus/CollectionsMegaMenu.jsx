import React from 'react';
import { COLLECTIONS_GRID_CARDS } from '../../data/collections';

export default function CollectionsMegaMenu({ isOpen, onClose, onSelectCategory }) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-0 w-full bg-white dark:bg-[#151816] text-[#1a1c1a] dark:text-[#f4f2eb] border-b border-neutral-200/80 dark:border-neutral-800 shadow-2xl z-40 animate-fade-in transition-all"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5">
          {COLLECTIONS_GRID_CARDS.map((card) => (
            <div
              key={card.id}
              onClick={() => {
                onSelectCategory(card.filterCategory);
                onClose();
              }}
              className="group relative cursor-pointer overflow-hidden rounded-sm aspect-[3/4] bg-neutral-200 dark:bg-neutral-800 shadow-sm"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Vignette Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/95" />
              
              <div className="absolute bottom-3.5 left-3.5 right-3.5">
                <span className="text-white text-[14px] md:text-[15px] font-normal tracking-wide flex items-center gap-1.5 drop-shadow-md">
                  <span className="text-white/80">•</span>
                  <span>{card.title}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
