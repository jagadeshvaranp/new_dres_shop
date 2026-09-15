import React from 'react';

export default function PhilosophySection() {
  const pillars = [
    {
      id: 'pillar-1',
      title: 'Materials and Quality',
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=85',
      text: 'We carefully select fabrics for their softness, durability, and refined texture. Each piece is designed to maintain its shape and color over time, ensuring long-lasting comfort. Quality is the foundation behind every item in our collection.'
    },
    {
      id: 'pillar-2',
      title: 'Classic Meets Modern',
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=85',
      text: 'Where classic sensibility meets modern construction. Timeless in its approach, current in the way it moves and fits. Familiar enough to feel considered, fresh enough to stay relevant.'
    },
    {
      id: 'pillar-3',
      title: 'Comfort & Fit',
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=85',
      text: 'Every design is crafted to provide effortless freedom of movement and a natural feel throughout the day. Thoughtful tailoring, clean lines, and a well-balanced fit make each piece comfortable from morning to night — without needing to adjust or compromise.'
    }
  ];

  return (
    <section className="bg-white dark:bg-[#121413] py-24 sm:py-32 border-b border-neutral-100 dark:border-neutral-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Top Centered Editorial Quote */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xl sm:text-2xl lg:text-[26px] font-serif font-normal text-neutral-800 dark:text-neutral-200 leading-relaxed sm:leading-[1.5]">
            Rooted in impeccable tailoring and an unwavering commitment to quality, we design for the everyday — clean silhouettes, premium materials, and a refined aesthetic that wears as good as it looks. Intention is sewn into everything we make.
          </p>
        </div>

        {/* 3 Columns with Editorial Photos & Copy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="flex flex-col space-y-5 group">
              {/* Photo Box */}
              <div className="aspect-[4/5] bg-neutral-100 dark:bg-neutral-800 rounded-sm overflow-hidden shadow-sm">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Title & Description */}
              <div className="space-y-2.5 pt-1">
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-neutral-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-[13.5px] text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
