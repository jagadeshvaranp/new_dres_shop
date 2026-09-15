import React, { useState, useEffect } from 'react';
import { HERO_COLLECTIONS } from '../data/collections';

export default function HeroSlider({ onSelectHeroCTA }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto advance hero every 7 seconds if not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_COLLECTIONS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentSlide = HERO_COLLECTIONS[activeIndex];

  return (
    <section
      className="relative w-full h-[92vh] min-h-[660px] max-h-[960px] overflow-hidden bg-neutral-950 text-white select-none -mt-16 sm:-mt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with smooth crossfade */}
      {HERO_COLLECTIONS.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform', transitionDuration: '1.2s' }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            style={{ objectPosition: slide.objectPosition || 'center 30%' }}
          />
          {/* Balanced cinematic gradient overlays allowing full model visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/20" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-10 flex flex-col justify-end pb-12 sm:pb-16 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Left: Editorial Headline, Subtitle, and CTA Button */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[1.1] text-white drop-shadow-md animate-fade-in"
              key={`title-${currentSlide.id}`}
            >
              {currentSlide.title}
            </h1>

            <p
              className="text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed text-neutral-200/90 max-w-xl drop-shadow animate-fade-in"
              key={`desc-${currentSlide.id}`}
            >
              {currentSlide.subtitle}
            </p>

            <div className="pt-2">
              <button
                onClick={() => onSelectHeroCTA(currentSlide)}
                className="group inline-flex items-center gap-2 text-sm sm:text-[15px] font-medium tracking-wide text-white hover:text-luxegold transition-all drop-shadow"
              >
                <span className="text-white/80 group-hover:text-luxegold transition-colors">•</span>
                <span className="border-b border-transparent group-hover:border-luxegold transition-all pb-0.5">
                  {currentSlide.ctaText || 'Shop Now'}
                </span>
              </button>
            </div>
          </div>

          {/* Right: 4-Tab Collection Switcher */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 lg:pt-0">
            {HERO_COLLECTIONS.map((tab, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveIndex(idx)}
                  className="group text-left focus:outline-none transition-all"
                >
                  {/* Progress / Indicator line */}
                  <div className="w-full h-[2px] mb-2.5 bg-white/25 overflow-hidden rounded-full">
                    <div
                      className={`h-full transition-all duration-500 ${
                        isActive ? 'w-full bg-white shadow-sm' : 'w-0 group-hover:w-full group-hover:bg-white/50'
                      }`}
                    />
                  </div>

                  {/* Tab Title and "Collection" label */}
                  <div className="space-y-0.5">
                    <div
                      className={`text-[13px] sm:text-[13.5px] font-medium leading-snug transition-colors ${
                        isActive ? 'text-white' : 'text-neutral-300/80 group-hover:text-white'
                      }`}
                    >
                      {tab.tag}
                    </div>
                    <div
                      className={`text-[11px] uppercase tracking-wider transition-colors ${
                        isActive ? 'text-neutral-300' : 'text-neutral-400/70 group-hover:text-neutral-300'
                      }`}
                    >
                      Collection
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
