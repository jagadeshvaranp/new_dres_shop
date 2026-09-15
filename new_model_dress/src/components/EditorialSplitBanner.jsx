import React, { useState } from 'react';

export default function EditorialSplitBanner({ onSelectCategory }) {
  const [hoveredSide, setHoveredSide] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, side) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    setMousePos({ x, y });
  };

  return (
    <section className="w-full bg-neutral-900 text-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Card: New In */}
        <div
          onClick={() => onSelectCategory('New In')}
          onMouseEnter={() => setHoveredSide('new-in')}
          onMouseLeave={() => {
            setHoveredSide(null);
            setMousePos({ x: 0, y: 0 });
          }}
          onMouseMove={(e) => handleMouseMove(e, 'new-in')}
          className="group relative h-[560px] sm:h-[680px] overflow-hidden cursor-pointer bg-neutral-900 border-r border-white/10 flex flex-col justify-end p-8 sm:p-12 select-none"
        >
          {/* Main Background Photo */}
          <img
            src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=85"
            alt="New In Collection"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />

          {/* Floating Picture-in-Picture Box (ONLY SHOWS ON HOVER) */}
          <div
            className="absolute top-8 left-8 sm:top-12 sm:left-12 w-40 sm:w-48 aspect-[3/4] rounded-sm overflow-hidden border-2 border-white/95 shadow-2xl z-20 opacity-0 scale-90 translate-y-3 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-500 ease-out pointer-events-none"
            style={{
              transform: hoveredSide === 'new-in'
                ? `translate3d(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px, 0) scale(1)`
                : undefined
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85"
              alt="New In Alternate Look"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
              <span className="text-white text-xs font-medium tracking-wide flex items-center gap-1.5 drop-shadow-md">
                <span className="text-white/80">•</span>
                <span>New In</span>
              </span>
            </div>
          </div>

          {/* Bottom Narrative Text */}
          <div className="relative z-20 space-y-3 max-w-lg">
            <h3 className="text-2xl sm:text-3xl font-serif font-normal flex items-center gap-2 group-hover:text-luxegold transition-colors">
              <span className="transition-transform group-hover:translate-x-1 duration-300">→</span>
              <span>New In</span>
            </h3>
            <p className="text-xs sm:text-[13.5px] text-neutral-200/90 font-light leading-relaxed">
              The pieces a wardrobe returns to. Focused on simplicity and precision, this collection highlights foundational pieces shaped by minimal design, balanced proportions, and quiet, modern refinement.
            </p>
          </div>
        </div>

        {/* Right Card: Sale */}
        <div
          onClick={() => onSelectCategory('Sale')}
          onMouseEnter={() => setHoveredSide('sale')}
          onMouseLeave={() => {
            setHoveredSide(null);
            setMousePos({ x: 0, y: 0 });
          }}
          onMouseMove={(e) => handleMouseMove(e, 'sale')}
          className="group relative h-[560px] sm:h-[680px] overflow-hidden cursor-pointer bg-neutral-900 flex flex-col justify-end p-8 sm:p-12 select-none"
        >
          {/* Main Background Photo */}
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=85"
            alt="Private Sale Collection"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />

          {/* Floating Picture-in-Picture Box (ONLY SHOWS ON HOVER) */}
          <div
            className="absolute top-8 left-8 sm:top-12 sm:left-12 w-40 sm:w-48 aspect-[3/4] rounded-sm overflow-hidden border-2 border-white/95 shadow-2xl z-20 opacity-0 scale-90 translate-y-3 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-500 ease-out pointer-events-none"
            style={{
              transform: hoveredSide === 'sale'
                ? `translate3d(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px, 0) scale(1)`
                : undefined
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=700&q=85"
              alt="Sale Alternate Look"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
              <span className="text-white text-xs font-medium tracking-wide flex items-center gap-1.5 drop-shadow-md">
                <span className="text-white/80">•</span>
                <span>Sale</span>
              </span>
            </div>
          </div>

          {/* Bottom Narrative Text */}
          <div className="relative z-20 space-y-3 max-w-lg">
            <h3 className="text-2xl sm:text-3xl font-serif font-normal flex items-center gap-2 group-hover:text-luxegold transition-colors">
              <span>•</span>
              <span>Sale</span>
            </h3>
            <p className="text-xs sm:text-[13.5px] text-neutral-200/90 font-light leading-relaxed">
              Designed with ease in mind, this collection embraces softer structure, fluid movement and carefully considered muted tones, creating a calm and composed approach to everyday dressing.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
