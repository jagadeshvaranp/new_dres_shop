import React, { useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const LOOKBOOK_ITEMS = [
  {
    id: 'lb-1',
    title: 'Athletic Club Quarter-Zip',
    category: 'The Clubhouse Edit',
    price: 78,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85',
    bgImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=2000&q=80',
    description: 'Off-white textured loopback quarter-zip pullover with athletic club crest and matching tailored joggers.'
  },
  {
    id: 'lb-2',
    title: 'Wellness Club Quarter-Zip',
    category: 'Court & Country',
    price: 85,
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=900&q=85',
    bgImage: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=2000&q=80',
    description: 'Sky blue fleece pullover with leather duffle bag and tortoiseshell sunglasses in Paris.'
  },
  {
    id: 'lb-3',
    title: 'Heritage Tailored Knitwear',
    category: 'Heritage Tailoring',
    price: 95,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85',
    bgImage: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=2000&q=80',
    description: 'Fine-gauge merino crewneck with relaxed linen trousers and unconstructed tailoring.'
  },
  {
    id: 'lb-4',
    title: 'Signature Varsity Crewneck',
    category: 'Signature Classics',
    price: 72,
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=85',
    bgImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=2000&q=80',
    description: 'Forest green crest crewneck with leather strap bag and Italian acetate eyewear.'
  }
];

export default function VerticalLookbookSection({ onOpenQuickView, onSelectCategory }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? LOOKBOOK_ITEMS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === LOOKBOOK_ITEMS.length - 1 ? 0 : prev + 1));
  };

  const currentItem = LOOKBOOK_ITEMS[currentIndex];
  const prevItem = LOOKBOOK_ITEMS[(currentIndex - 1 + LOOKBOOK_ITEMS.length) % LOOKBOOK_ITEMS.length];
  const nextItem = LOOKBOOK_ITEMS[(currentIndex + 1) % LOOKBOOK_ITEMS.length];

  const handleCardClick = (item) => {
    onOpenQuickView({
      id: item.id,
      name: item.title,
      price: item.price,
      image: item.image,
      collection: item.category,
      category: 'Tops',
      description: item.description,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [{ name: 'Default', hex: '#ffffff' }]
    });
  };

  return (
    <section
      id="lookbook-section"
      className="relative w-full h-[620px] sm:h-[720px] overflow-hidden bg-neutral-950 text-white select-none transition-colors"
    >
      {/* Background with subtle crossfade */}
      <div className="absolute inset-0">
        <img
          src={currentItem.bgImage}
          alt="Lookbook background"
          className="w-full h-full object-cover object-center filter blur-[2px] scale-105 transition-all duration-1000 ease-out brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-12 flex items-center justify-between">
        
        {/* Left: Serif Lookbook Title */}
        <div className="w-1/4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white drop-shadow-md">
            Lookbook
          </h2>
        </div>

        {/* Center: Vertical Stacked Reel */}
        <div className="w-2/4 flex flex-col items-center justify-center relative h-full py-6">
          
          {/* Top Peek Card (Previous Item) */}
          <div
            onClick={prevSlide}
            className="w-48 sm:w-60 h-24 sm:h-28 rounded-sm overflow-hidden opacity-30 blur-[1px] hover:opacity-60 cursor-pointer transition-all duration-500 transform -translate-y-2"
          >
            <img
              src={prevItem.image}
              alt={prevItem.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Active Center Card */}
          <div
            onClick={() => handleCardClick(currentItem)}
            className="w-64 sm:w-80 lg:w-96 aspect-[3/4] my-3 rounded-sm overflow-hidden border border-white/20 shadow-2xl relative cursor-pointer group transition-all duration-700 ease-out transform hover:scale-[1.02]"
          >
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-white text-xs sm:text-sm font-normal tracking-wide flex items-center gap-1.5 drop-shadow">
                <span className="text-white/80">•</span>
                <span>{currentItem.title}</span>
              </span>
            </div>
          </div>

          {/* Bottom Peek Card (Next Item) */}
          <div
            onClick={nextSlide}
            className="w-48 sm:w-60 h-24 sm:h-28 rounded-sm overflow-hidden opacity-30 blur-[1px] hover:opacity-60 cursor-pointer transition-all duration-500 transform translate-y-2"
          >
            <img
              src={nextItem.image}
              alt={nextItem.title}
              className="w-full h-full object-cover object-bottom"
            />
          </div>

        </div>

        {/* Right: Up / Down Capsule Arrow Controls + Discover All Link */}
        <div className="w-1/4 flex items-center justify-end gap-6 sm:gap-10">
          
          {/* Vertical Arrow Buttons (Capsule shaped as in screenshot 1 & 2) */}
          <div className="flex flex-col gap-2.5">
            <button
              onClick={prevSlide}
              className="w-10 sm:w-11 h-14 sm:h-16 rounded-full border border-white/30 bg-black/30 backdrop-blur-md text-white hover:bg-white hover:text-black hover:border-white transition-all flex items-center justify-center focus:outline-none"
              aria-label="Previous look"
              title="Previous look"
            >
              <ArrowUp size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 sm:w-11 h-14 sm:h-16 rounded-full border border-white/30 bg-black/30 backdrop-blur-md text-white hover:bg-white hover:text-black hover:border-white transition-all flex items-center justify-center focus:outline-none"
              aria-label="Next look"
              title="Next look"
            >
              <ArrowDown size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Discover All CTA Link */}
          <div>
            <button
              onClick={() => onSelectCategory('All')}
              className="text-xs sm:text-[13px] tracking-wide text-neutral-300 hover:text-white transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <span>•</span>
              <span className="underline underline-offset-4">Discover All</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
