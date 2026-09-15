export const HERO_COLLECTIONS = [
  {
    id: 'signature-classics',
    tag: 'Signature Classics',
    title: 'Signature Classics',
    subtitle: 'Timeless staples defined by clean lines, premium materials and refined tailoring — crafted with precision, worn with ease, and built to anchor a confident wardrobe season after season.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=2600&q=85',
    objectPosition: 'center 35%',
    ctaText: 'Shop Now',
    category: 'Clothing'
  },
  {
    id: 'court-and-country',
    tag: 'Court & Country',
    title: 'Court & Country',
    subtitle: 'Relaxed tailoring and clean silhouettes inspired by the court and the countryside. Natural fabrics, refined cuts — a complete wardrobe that moves between both worlds without effort.',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=2600&q=85',
    objectPosition: 'center 30%',
    ctaText: 'Explore Court & Country',
    category: 'Collections'
  },
  {
    id: 'heritage-tailoring',
    tag: 'Heritage Tailoring',
    title: 'Heritage Tailoring',
    subtitle: 'Meticulously structured jackets, fluid pleated trousers, and unconstructed blazers cut from the finest Italian wool and Irish linen. Crafted for enduring distinction.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=2600&q=85',
    objectPosition: 'center 25%',
    ctaText: 'Discover Tailoring',
    category: 'Collections'
  },
  {
    id: 'clubhouse-edit',
    tag: 'The Clubhouse Edit',
    title: 'The Clubhouse Edit',
    subtitle: 'Understated off-duty sophistication. Heavyweight organic cottons, embroidered crests, and washed terry toweling pieces engineered for effortless leisure.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=2600&q=85',
    objectPosition: 'center 30%',
    ctaText: 'View Clubhouse Edit',
    category: 'Collections'
  }
];

export const SHOP_MENU_CATEGORIES = {
  Clothing: {
    name: 'Clothing',
    items: ['Tops', 'Bottoms', 'Shoes', 'Accessories'],
  },
  'New Arrivals': {
    name: 'New Arrivals',
    items: ['Outerwear', 'Sunglasses', 'Caps'],
  },
  Collections: {
    name: 'Collections',
    items: ['Heritage Tailoring', 'Court & Country', 'Signature Classics', 'The Clubhouse Edit'],
  },
  Sale: {
    name: 'Sale',
    items: ['Core Runner', 'Motion Runner', 'Gradient Lens Sunglasses', 'Signature Script Cap'],
  }
};

export const SHOP_FEATURED_CARDS = [
  {
    id: 'court-country-card',
    title: 'Court & Country',
    category: 'Court & Country',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80',
    description: 'Navy zip-hoodie & collegiate cap ensemble'
  },
  {
    id: 'clubhouse-edit-card',
    title: 'The Clubhouse Edit',
    category: 'The Clubhouse Edit',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    description: 'Terry towel, organic crest tee & classic duffle'
  }
];

export const COLLECTIONS_GRID_CARDS = [
  {
    id: 'tops',
    title: 'Tops',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    filterCategory: 'Tops'
  },
  {
    id: 'bottoms',
    title: 'Bottoms',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80',
    filterCategory: 'Bottoms'
  },
  {
    id: 'shoes',
    title: 'Shoes',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80',
    filterCategory: 'Shoes'
  },
  {
    id: 'accessories',
    title: 'Accessories',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
    filterCategory: 'Accessories'
  },
  {
    id: 'new-in',
    title: 'New In',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
    filterCategory: 'New In'
  },
  {
    id: 'sale',
    title: 'Sale',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    filterCategory: 'Sale'
  }
];

export const SEARCH_SUGGESTIONS = {
  trending: ['Hoodie', 'Sneaker', 'T-Shirt', 'Cap', 'Sunglasses', 'Zip Pullover'],
  quickCards: [
    {
      id: 'search-tops',
      title: 'Tops',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
      category: 'Tops'
    },
    {
      id: 'search-bottoms',
      title: 'Bottoms',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80',
      category: 'Bottoms'
    },
    {
      id: 'search-shoes',
      title: 'Shoes',
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80',
      category: 'Shoes'
    }
  ]
};
