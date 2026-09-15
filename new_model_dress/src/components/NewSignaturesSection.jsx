import React, { useState, useRef } from 'react';
import { NEW_SIGNATURES_PRODUCTS } from '../data/flatlayProducts';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function NewSignaturesSection({ onOpenQuickView, onSelectCollection }) {
  const scrollContainerRef = useRef(null);
  const [selectedColorMap, setSelectedColorMap] = useState({});

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleColorClick = (e, productId, colorObj) => {
    e.stopPropagation();
    setSelectedColorMap(prev => ({
      ...prev,
      [productId]: colorObj
    }));
  };

  return (
    <section className="bg-white dark:bg-[#121413] py-20 sm:py-28 border-b border-neutral-100 dark:border-neutral-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3.5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-neutral-900 dark:text-neutral-100 tracking-tight">
            New Signatures
          </h2>
          <p className="text-xs sm:text-[14px] text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
            A curated selection shaped by clean silhouettes, muted tones, and premium materials — designed for understated sophistication and lasting wear. Styles that fit seamlessly into your day.
          </p>
          <div className="pt-1">
            <button
              onClick={() => onSelectCollection('Signature Classics')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-neutral-900 dark:text-neutral-200 hover:text-forest-700 dark:hover:text-luxegold transition-colors tracking-wide"
            >
              <span>•</span>
              <span className="underline underline-offset-4">Discover the Collection</span>
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          
          {/* Left Arrow Button */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-sm bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-lg border border-neutral-200/80 dark:border-neutral-700 flex items-center justify-center transition-all hover:scale-105 opacity-90 hover:opacity-100 focus:outline-none"
            aria-label="Previous pieces"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-sm bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-lg border border-neutral-200/80 dark:border-neutral-700 flex items-center justify-center transition-all hover:scale-105 opacity-90 hover:opacity-100 focus:outline-none"
            aria-label="Next pieces"
          >
            <ChevronRight size={20} />
          </button>

          {/* Horizontal Scrolling Card Track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {NEW_SIGNATURES_PRODUCTS.map((item) => {
              const activeColor = selectedColorMap[item.id] || item.colors[0];
              const displayImage = activeColor?.image || item.defaultImage;

              return (
                <div
                  key={item.id}
                  onClick={() => onOpenQuickView(item)}
                  className="w-[280px] sm:w-[320px] lg:w-[340px] flex-shrink-0 cursor-pointer group/card flex flex-col justify-between"
                >
                  {/* Flatlay Studio Image Box */}
                  <div className="relative aspect-square w-full bg-[#f6f6f4] dark:bg-[#1a1d1b] rounded-sm overflow-hidden flex items-center justify-center p-8 transition-colors duration-300">
                    <img
                      src={displayImage}
                      alt={item.name}
                      className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal group-hover/card:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3.5 py-1.5 bg-white/95 dark:bg-neutral-900 text-neutral-900 dark:text-white text-xs uppercase tracking-wider font-semibold rounded-sm shadow-md flex items-center gap-1.5">
                        <Eye size={13} /> Quick View
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom: Title, Price, and Color Swatch Squares */}
                  <div className="pt-4 flex items-end justify-between">
                    <div>
                      <h3 className="text-sm font-normal text-neutral-900 dark:text-neutral-100 group-hover/card:text-forest-700 dark:group-hover/card:text-luxegold transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-mono">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Color Swatch Squares on Right */}
                    <div className="flex items-center gap-1 pb-0.5">
                      {item.colors.map((c) => (
                        <button
                          key={c.name}
                          onClick={(e) => handleColorClick(e, item.id, c)}
                          className={`w-3.5 h-3.5 rounded-[1px] transition-all ${
                            activeColor?.name === c.name
                              ? 'ring-1 ring-offset-1 ring-neutral-800 dark:ring-white scale-110'
                              : 'opacity-85 hover:opacity-100'
                          }`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                          aria-label={`Select ${c.name}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
