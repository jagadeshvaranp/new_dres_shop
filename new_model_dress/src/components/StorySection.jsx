import React from 'react';
import { Feather, Compass, Award } from 'lucide-react';

export default function StorySection() {
  return (
    <section id="story-section" className="py-24 max-w-7xl mx-auto px-6 sm:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Visual Showcase */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=85"
              alt="Atelier Tailoring"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden sm:block w-48 h-56 rounded-sm overflow-hidden border-4 border-white dark:border-[#151816] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80"
              alt="Fabric Detail"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Narrative Content */}
        <div className="lg:col-span-6 space-y-6">
          <div className="text-xs uppercase tracking-widest text-forest-700 dark:text-luxegold font-semibold">
            Our Story & Heritage
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-neutral-900 dark:text-white leading-[1.15]">
            Born Between the Court & the Metropolitan Wardrobe
          </h2>

          <p className="text-[15px] sm:text-[16px] text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
            Egoiste was established with a singular conviction: luxury menswear should embody uncompromising ease without sacrificing architectural precision.
          </p>

          <p className="text-[15px] sm:text-[16px] text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
            From historic mills in Biella weaving fresco wools to family-run ateliers in Guimarães crafting our heavyweight fleece, each garment reflects centuries of European sartorial mastery.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-medium text-neutral-900 dark:text-white">
                100%
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">
                Organic Long-Staple
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-medium text-neutral-900 dark:text-white">
                Porto
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">
                Handcrafted Footwear
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-medium text-neutral-900 dark:text-white">
                Biella
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">
                Italian Wool Mills
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
