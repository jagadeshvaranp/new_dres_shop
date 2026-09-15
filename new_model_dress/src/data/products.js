export const PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Wellness Club Quarter-Zip Pullover',
    category: 'Tops',
    collection: 'Court & Country',
    price: 185,
    originalPrice: 245,
    isSale: true,
    isNew: true,
    badge: 'Best Seller',
    description: 'Cut from heavyweight 460gsm brushed loopback cotton with a brushed brass half-zip and custom crest embroidery on the chest. Designed for timeless layering.',
    fabric: '100% Organic Cotton Fleece',
    colors: [
      { name: 'Mocha Brown', hex: '#634739' },
      { name: 'Forest Green', hex: '#1c3424' },
      { name: 'Ecru Cream', hex: '#eae5d8' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80'
    ],
    keywords: ['hoodie', 'pullover', 'quarter-zip', 'tops', 'sweater', 'wellness club']
  },
  {
    id: 'prod-2',
    name: 'Clubhouse Crest Off-White Tracksuit',
    category: 'Bottoms',
    collection: 'The Clubhouse Edit',
    price: 160,
    originalPrice: 195,
    isSale: false,
    isNew: true,
    badge: 'New Arrival',
    description: 'Tailored athletic trousers with an elasticated waistband, braided drawcords, and custom woven crest patch. Made from organic French terry cotton.',
    fabric: '100% French Terry Cotton (420gsm)',
    colors: [
      { name: 'Off-White Ecru', hex: '#f0ece1' },
      { name: 'Navy Blue', hex: '#1e2838' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80'
    ],
    keywords: ['bottoms', 'pants', 'tracksuit', 'sweatpants', 'joggers']
  },
  {
    id: 'prod-3',
    name: 'Heritage Court Sneaker — Forest & Gum',
    category: 'Shoes',
    collection: 'Signature Classics',
    price: 220,
    originalPrice: 280,
    isSale: true,
    isNew: false,
    badge: 'Iconic',
    description: 'Handcrafted in Portugal using premium Italian calfskin leather, forest green suede chevron accents, and a natural vulcanized gum rubber sole.',
    fabric: 'Italian Calfskin Leather & Suede',
    colors: [
      { name: 'Forest Green & White', hex: '#1f4532' },
      { name: 'All Cream', hex: '#ece7db' }
    ],
    sizes: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'],
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80'
    ],
    keywords: ['shoes', 'sneaker', 'runners', 'court sneaker', 'footwear']
  },
  {
    id: 'prod-4',
    name: 'Tortoiseshell Gradient Lens Sunglasses',
    category: 'Accessories',
    collection: 'Court & Country',
    price: 195,
    originalPrice: 225,
    isSale: false,
    isNew: false,
    badge: 'Handmade in Italy',
    description: 'Crafted from custom cellulose acetate with 100% UVA/UVB Carl Zeiss polarized green gradient lenses and gold-tone barrel hinges.',
    fabric: 'Custom Italian Mazzucchelli Acetate',
    colors: [
      { name: 'Havana Tortoise', hex: '#52341b' },
      { name: 'Midnight Black', hex: '#191919' }
    ],
    sizes: ['One Size'],
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80'
    ],
    keywords: ['sunglasses', 'accessories', 'eyewear', 'shades', 'tortoise']
  },
  {
    id: 'prod-5',
    name: 'Egoiste Crest Heavyweight T-Shirt',
    category: 'Tops',
    collection: 'Signature Classics',
    price: 85,
    originalPrice: 95,
    isSale: false,
    isNew: true,
    badge: 'Essential',
    description: 'The foundation of the Egoiste wardrobe. Spun from long-staple 240gsm Supima cotton with a relaxed drop-shoulder cut and subtle laurel crest embroidery.',
    fabric: '100% Supima Cotton',
    colors: [
      { name: 'Classic White', hex: '#ffffff' },
      { name: 'Navy Blue', hex: '#1c2838' },
      { name: 'Washed Sage', hex: '#879e8c' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80'
    ],
    keywords: ['t-shirt', 'tee', 'tops', 'shirt', 'crest']
  },
  {
    id: 'prod-6',
    name: 'The Country Club Embroidered Twill Cap',
    category: 'Accessories',
    collection: 'Court & Country',
    price: 65,
    originalPrice: 75,
    isSale: false,
    isNew: false,
    badge: 'Popular',
    description: 'Structured 6-panel unstructured dad cap made from washed cotton twill with an antique brass sliding buckle and tonal heraldic shield embroidery.',
    fabric: '100% Washed Chino Cotton Twill',
    colors: [
      { name: 'Vintage Ecru', hex: '#f2eee5' },
      { name: 'Deep Navy', hex: '#162232' },
      { name: 'Forest Green', hex: '#1c3424' }
    ],
    sizes: ['Adjustable'],
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=800&q=80'
    ],
    keywords: ['cap', 'hat', 'accessories', 'twill', 'headwear']
  },
  {
    id: 'prod-7',
    name: 'Italian Wool Relaxed Pleated Trouser',
    category: 'Bottoms',
    collection: 'Heritage Tailoring',
    price: 290,
    originalPrice: 340,
    isSale: true,
    isNew: false,
    badge: 'Tailored',
    description: 'Double reverse pleats with side adjusters and a gentle tapered leg. Woven by historic mills in Biella, Italy from breathable four-season fresco wool.',
    fabric: '100% Super 120s Italian Wool Fresco',
    colors: [
      { name: 'Charcoal Grey', hex: '#333735' },
      { name: 'Sand Khaki', hex: '#cbbeaa' }
    ],
    sizes: ['30', '32', '34', '36', '38'],
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80'
    ],
    keywords: ['bottoms', 'trousers', 'pants', 'pleated', 'tailoring', 'wool']
  },
  {
    id: 'prod-8',
    name: 'Clubhouse Full-Zip Fleece Hoodie',
    category: 'Tops',
    collection: 'The Clubhouse Edit',
    price: 210,
    originalPrice: 260,
    isSale: false,
    isNew: true,
    badge: 'Core Luxury',
    description: 'Deep navy heavyweight fleece hoodie featuring a two-way two-tone metal zip, reinforced kangaroo pocket, and tonal collegiate crest stitching.',
    fabric: '100% Heavy Organic Cotton (500gsm)',
    colors: [
      { name: 'Deep Navy', hex: '#141d2c' },
      { name: 'Olive Green', hex: '#2c3c2e' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80'
    ],
    keywords: ['hoodie', 'tops', 'zip hoodie', 'sweatshirt', 'navy']
  }
];

export const LOOKBOOK_STORIES = [
  {
    id: 'look-1',
    title: 'Autumn in the Country',
    location: 'Cotswolds, England',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85',
    hotspots: [
      { x: 48, y: 35, productId: 'prod-5', label: 'Heavyweight Crest Tee' },
      { x: 50, y: 72, productId: 'prod-2', label: 'Clubhouse French Terry Short' }
    ]
  },
  {
    id: 'look-2',
    title: 'Court & Clubhouse Elegance',
    location: 'St. Moritz Tennis Club',
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1200&q=85',
    hotspots: [
      { x: 45, y: 40, productId: 'prod-1', label: 'Quarter-Zip Fleece' },
      { x: 52, y: 80, productId: 'prod-3', label: 'Heritage Court Sneaker' }
    ]
  }
];
