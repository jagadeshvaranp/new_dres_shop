import React from 'react';
import { Layers, Sparkles, Gem, Globe } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Gem,
      title: 'Long-Staple Supima & French Terry',
      description: 'Ultra-dense 460gsm cotton custom-knitted for an unmatched tactile drape, resisting wear for decades.'
    },
    {
      icon: Layers,
      title: 'Architectural Heritage Tailoring',
      description: 'Double reverse pleats, unconstructed shoulders, and brass hardware engineered for effortless elegance.'
    },
    {
      icon: Sparkles,
      title: 'Handcrafted in Portugal & Italy',
      description: 'Produced in family-operated ateliers with generational expertise in shoemaking and sartorial cutting.'
    },
    {
      icon: Globe,
      title: 'Conscious Small-Batch Curation',
      description: 'Limited seasonal volumes ensuring minimal environmental footprint and true wardrobe exclusivity.'
    }
  ];

  return (
    <section id="features-section" className="bg-[#1c3424] text-[#faf9f5] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        <div className="max-w-xl mx-auto text-center mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
            Hallmarks of Quality
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white">
            Engineered for Enduring Distinction
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-light">
            Every stitch, seam, and contour is designed to outlive ephemeral trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-sm bg-white/5 border border-white/10 hover:border-[#c5a880]/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-sm bg-[#c5a880]/20 flex items-center justify-center text-[#c5a880] mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-serif text-white mb-2.5 font-medium">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-300 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
