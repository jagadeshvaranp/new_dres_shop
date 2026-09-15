import React, { useState } from 'react';
import { SHOWCASE_SLIDES } from '../data/journal';
import { ArrowRight } from 'lucide-react';

export default function CuratedShowcaseSection({ onOpenQuickView, onSelectCategory }) {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const slide = SHOWCASE_SLIDES[activeSlideIdx];

  const handleProductCardClick = () => {
    onOpenQuickView({
      id: slide.product.id,
      name: slide.product.name,
      price: slide.product.price,
      image: slide.product.image,
      category: 'Tops',
      collection: slide.collection,
      description: slide.text,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: slide.product.colors
    });
  };

  return (
    <section className="relative w-full h-[640px] sm:h-[760px] overflow-hidden bg-neutral-900 text-white select-none transition-all">
      {/* Background with crossfade */}
      {SHOWCASE_SLIDES.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeSlideIdx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform', transitionDuration: '1.2s' }}
        >
          <img
            src={s.bgImage}
            alt={s.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />
        </div>
      ))}

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-12 flex flex-col justify-between pt-14 pb-12">
        
        {/* Top Row: Left Narrative & Right Floating Product Card */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
          
          {/* Top-Left Narrative */}
          <div className="max-w-md sm:max-w-lg space-y-4">
            <p className="text-base sm:text-lg font-serif font-normal text-white/95 leading-relaxed drop-shadow">
              {slide.text}
            </p>
            <div>
              <button
                onClick={() => onSelectCategory('All')}
                className="text-xs sm:text-sm font-medium tracking-wide text-neutral-200 hover:text-white transition-colors flex items-center gap-1.5 drop-shadow"
              >
                <span>•</span>
                <span className="underline underline-offset-4">Discover All</span>
              </button>
            </div>
          </div>

          {/* Top-Right Floating Product Tag / Card (matching screenshot 1) */}
          <div
            onClick={handleProductCardClick}
            className="group cursor-pointer bg-white dark:bg-[#181a18] text-neutral-900 dark:text-white p-3 sm:p-3.5 rounded-sm shadow-2xl flex items-center gap-3.5 border border-white/80 dark:border-neutral-700 hover:scale-105 transition-all duration-300 transform"
          >
            {/* Flatlay Thumbnail */}
            <div className="w-14 h-16 bg-[#f4f4f2] dark:bg-neutral-800 rounded-sm overflow-hidden flex items-center justify-center p-1 flex-shrink-0">
              <img
                src={slide.product.image}
                alt={slide.product.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Info & Swatches */}
            <div className="pr-3">
              <h4 className="text-xs sm:text-[13px] font-medium text-neutral-900 dark:text-white leading-tight group-hover:text-forest-700 dark:group-hover:text-luxegold transition-colors">
                {slide.product.name}
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 font-mono">
                ${slide.product.price.toFixed(2)}
              </p>

              {/* Color Square Swatches */}
              <div className="flex items-center gap-1 mt-1.5">
                {slide.product.colors.map((c) => (
                  <span
                    key={c.name}
                    className="w-2.5 h-2.5 rounded-[1px] inline-block border border-black/10 shadow-xs"
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/15">
          {SHOWCASE_SLIDES.map((item, idx) => {
            const isActive = idx === activeSlideIdx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSlideIdx(idx)}
                className="group text-left focus:outline-none transition-all"
              >
                {/* Progress bar line */}
                <div className="w-full h-[2px] mb-2 bg-white/20 overflow-hidden rounded-full">
                  <div
                    className={`h-full transition-all duration-500 ${
                      isActive ? 'w-full bg-white shadow-sm' : 'w-0 group-hover:w-full group-hover:bg-white/40'
                    }`}
                  />
                </div>

                {/* Tab Label */}
                <div>
                  <div
                    className={`text-xs sm:text-[13px] font-medium leading-snug transition-colors ${
                      isActive ? 'text-white' : 'text-neutral-300/80 group-hover:text-white'
                    }`}
                  >
                    {item.collection}
                  </div>
                  <div className="text-[10.5px] uppercase tracking-wider text-neutral-400/80">
                    Collection
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
