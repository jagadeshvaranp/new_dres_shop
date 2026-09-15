import React, { useState } from 'react';
import { LOOKBOOK_STORIES } from '../data/products';
import { PRODUCTS } from '../data/products';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function LookbookSection({ onOpenQuickView }) {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const story = LOOKBOOK_STORIES[activeStoryIdx];

  const handleHotspotClick = (productId) => {
    const prod = PRODUCTS.find((p) => p.id === productId);
    if (prod) {
      onOpenQuickView(prod);
    }
  };

  return (
    <section id="lookbook-section" className="bg-[#f5f2eb] dark:bg-[#111311] py-20 sm:py-28 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-forest-700 dark:text-luxegold font-semibold">
            <Sparkles size={13} />
            <span>Editorial Lookbook</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-neutral-900 dark:text-white">
            Quiet Distinction in Motion
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
            Hover or tap the interactive pins on our editorial series to explore and shop individual pieces crafted for refined ease.
          </p>
        </div>

        {/* Lookbook Stage */}
        <div className="relative rounded-sm overflow-hidden bg-neutral-900 shadow-2xl max-w-5xl mx-auto aspect-[16/10] min-h-[460px]">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

          {/* Interactive Hotspot Pins */}
          {story.hotspots.map((hs, i) => (
            <div
              key={i}
              className="absolute z-20 group"
              style={{ top: `${hs.y}%`, left: `${hs.x}%` }}
            >
              <button
                onClick={() => handleHotspotClick(hs.productId)}
                className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/90 text-neutral-900 shadow-lg group-hover:scale-125 transition-transform"
                aria-label={`Shop ${hs.label}`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-forest-700 dark:bg-luxegold animate-ping absolute" />
                <span className="w-2.5 h-2.5 rounded-full bg-forest-700 dark:bg-luxegold" />
              </button>

              {/* Tooltip Card */}
              <div
                onClick={() => handleHotspotClick(hs.productId)}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 hidden group-hover:flex items-center gap-2 px-3.5 py-2 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-xs font-medium rounded-sm shadow-xl whitespace-nowrap cursor-pointer z-30"
              >
                <span>{hs.label}</span>
                <ArrowRight size={12} className="text-forest-700 dark:text-luxegold" />
              </div>
            </div>
          ))}

          {/* Bottom Card Story Caption */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-300 font-medium">
                {story.location}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif mt-1">{story.title}</h3>
            </div>

            {/* Story Switcher Tabs */}
            <div className="flex items-center gap-2">
              {LOOKBOOK_STORIES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setActiveStoryIdx(idx)}
                  className={`text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full border transition-all ${
                    idx === activeStoryIdx
                      ? 'border-white bg-white text-neutral-900 font-semibold shadow'
                      : 'border-white/40 text-white hover:border-white'
                  }`}
                >
                  Series 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
