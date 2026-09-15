import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { Eye, Plus, Check } from 'lucide-react';

export default function ProductGrid({
  selectedCategory,
  setSelectedCategory,
  selectedCollection,
  setSelectedCollection,
  onOpenQuickView,
}) {
  const { addToCart } = useCart();
  const [addedItem, setAddedItem] = useState(null);

  const categories = ['All', 'Tops', 'Bottoms', 'Shoes', 'Accessories', 'New In', 'Sale'];

  const filteredProducts = PRODUCTS.filter((product) => {
    // If collection filter is set
    if (selectedCollection && selectedCollection !== 'All') {
      if (product.collection !== selectedCollection) return false;
    }
    // If category filter is set
    if (selectedCategory && selectedCategory !== 'All') {
      if (selectedCategory === 'New In') return product.isNew;
      if (selectedCategory === 'Sale') return product.isSale;
      return product.category === selectedCategory;
    }
    return true;
  });

  const handleQuickAdd = (e, product) => {
    e.stopPropagation();
    addToCart(product, product.sizes[0], product.colors[0]?.name, 1);
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 1800);
  };

  return (
    <section id="catalog-section" className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-neutral-200 dark:border-neutral-800 gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-forest-700 dark:text-luxegold font-medium">
            The Current Wardrobe
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-neutral-900 dark:text-neutral-100 mt-1">
            {selectedCollection ? `${selectedCollection} Edition` : selectedCategory !== 'All' ? `${selectedCategory} Collection` : 'Curated Essentials'}
          </h2>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = (selectedCategory === cat && !selectedCollection) || (cat === 'All' && !selectedCategory && !selectedCollection);
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedCollection(null);
                }}
                className={`text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all ${
                  isActive
                    ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-medium shadow-sm'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800/80 dark:text-neutral-400 dark:hover:bg-neutral-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
          {selectedCollection && (
            <button
              onClick={() => setSelectedCollection(null)}
              className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-forest-900 text-white font-medium flex items-center gap-1.5"
            >
              <span>Collection: {selectedCollection}</span>
              <span className="text-xs">✕</span>
            </button>
          )}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-neutral-50 dark:bg-neutral-900/50 rounded-lg">
          <p className="text-xl font-serif italic text-neutral-500 mb-3">No pieces match your selected filter</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedCollection(null);
            }}
            className="text-sm font-medium text-neutral-900 dark:text-white underline underline-offset-4"
          >
            View All Pieces
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {filteredProducts.map((product) => {
            const isAdded = addedItem === product.id;
            return (
              <div
                key={product.id}
                onClick={() => onOpenQuickView(product)}
                className="group cursor-pointer flex flex-col"
              >
                {/* Image Container with Hover Overlay */}
                <div className="relative aspect-[3/4] bg-neutral-100 dark:bg-neutral-800 overflow-hidden rounded-sm mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/90 backdrop-blur-sm text-neutral-900 dark:text-white text-[10.5px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-sm shadow-sm">
                      {product.badge}
                    </div>
                  )}

                  {product.isSale && (
                    <div className="absolute top-3 right-3 bg-[#1c3424] text-white text-[10.5px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-sm shadow-sm">
                      25% Off
                    </div>
                  )}

                  {/* Quick Action Button Bar on Hover */}
                  <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button
                      onClick={(e) => handleQuickAdd(e, product)}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all shadow-md ${
                        isAdded
                          ? 'bg-forest-700 text-white'
                          : 'bg-white/95 hover:bg-white text-neutral-900 dark:bg-neutral-900/95 dark:hover:bg-neutral-900 dark:text-white'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check size={14} /> Added
                        </>
                      ) : (
                        <>
                          <Plus size={14} /> Quick Add
                        </>
                      )}
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuickView(product);
                      }}
                      className="p-2.5 bg-white/95 hover:bg-white text-neutral-900 dark:bg-neutral-900/95 dark:hover:bg-neutral-900 dark:text-white rounded-sm shadow-md transition-colors"
                      title="Quick View Details"
                    >
                      <Eye size={15} />
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-neutral-400 uppercase tracking-wider mb-1">
                      <span>{product.collection}</span>
                      <span>{product.category}</span>
                    </div>
                    <h3 className="text-[15px] font-normal text-neutral-900 dark:text-neutral-100 group-hover:text-forest-700 dark:group-hover:text-luxegold transition-colors leading-snug">
                      {product.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 pt-1 font-serif text-[15px]">
                    <span className="font-semibold text-neutral-900 dark:text-white">
                      ${product.price}
                    </span>
                    {product.originalPrice && product.originalPrice > product.price && (
                      <span className="text-neutral-400 line-through text-xs font-sans">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
