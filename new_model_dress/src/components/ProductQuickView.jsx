import React, { useState, useEffect } from 'react';
import { X, Check, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductQuickView({ product, isOpen, onClose }) {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(product?.image || '');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      setSelectedSize(product.sizes[0] || 'M');
      setSelectedColor(product.colors[0]?.name || '');
      setQuantity(1);
      setIsSuccess(false);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const allImages = [product.image, ...(product.additionalImages || [])];

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#151816] text-neutral-900 dark:text-neutral-100 rounded-sm shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white bg-white/80 dark:bg-black/80 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Left Column: Image Gallery */}
        <div className="md:w-1/2 flex flex-col bg-neutral-100 dark:bg-neutral-800/60 p-6">
          <div className="aspect-[4/5] overflow-hidden rounded-sm mb-3 bg-neutral-200 dark:bg-neutral-900">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
            ) : null}
          </div>

          {/* Thumbnails */}
          {allImages.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-20 rounded-sm overflow-hidden border-2 transition-all flex-shrink-0 ${
                    selectedImage === img
                      ? 'border-neutral-900 dark:border-white opacity-100'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Specs & Actions */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[90vh]">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-forest-700 dark:text-luxegold font-semibold mb-1">
              <span>{product.collection}</span>
              <span>•</span>
              <span>{product.category}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-normal leading-snug mb-3">
              {product.name}
            </h2>

            {/* Price */}
            <div className="flex items-center gap-3 font-serif text-2xl mb-4">
              <span className="font-semibold text-neutral-900 dark:text-white">
                ${product.price}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-neutral-400 line-through text-base font-sans">
                  ${product.originalPrice}
                </span>
              )}
              {product.isSale && (
                <span className="text-xs font-sans uppercase tracking-wider px-2 py-0.5 bg-[#1c3424] text-white rounded font-medium">
                  Private Sale 25% Off
                </span>
              )}
            </div>

            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Fabric Highlight */}
            {product.fabric && (
              <div className="mb-6 p-3 bg-neutral-50 dark:bg-neutral-900/80 border border-neutral-200/60 dark:border-neutral-800 rounded-sm text-xs">
                <span className="font-semibold text-neutral-900 dark:text-white">Crafted From: </span>
                <span className="text-neutral-600 dark:text-neutral-400">{product.fabric}</span>
              </div>
            )}

            {/* Color Swatches */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-5">
                <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2 font-medium">
                  Color: <span className="text-neutral-900 dark:text-white">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-2.5">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-7 h-7 rounded-full border-2 transition-all p-0.5 ${
                        selectedColor === c.name
                          ? 'border-neutral-900 dark:border-white scale-110'
                          : 'border-transparent opacity-80 hover:opacity-100'
                      }`}
                      title={c.name}
                    >
                      <div
                        className="w-full h-full rounded-full border border-black/10"
                        style={{ backgroundColor: c.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                    Select Size: <span className="text-neutral-900 dark:text-white">{selectedSize}</span>
                  </label>
                  <span className="text-xs text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 cursor-pointer underline">
                    Size Guide
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`py-2 text-xs font-medium rounded-sm border transition-all ${
                        selectedSize === s
                          ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-black font-semibold'
                          : 'border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-500'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Stepper & Add to Bag */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center border border-neutral-300 dark:border-neutral-700 rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                >
                  -
                </button>
                <span className="px-3 text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex-1 py-3 px-6 rounded-sm text-xs uppercase tracking-widest font-semibold transition-all shadow-md flex items-center justify-center gap-2 ${
                  isSuccess
                    ? 'bg-forest-700 text-white'
                    : 'bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-100 dark:text-neutral-900'
                }`}
              >
                {isSuccess ? (
                  <>
                    <Check size={16} /> Added to Shopping Bag
                  </>
                ) : (
                  <>Add to Bag • ${(product.price * quantity).toFixed(0)}</>
                )}
              </button>
            </div>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-[11px] text-neutral-500">
            <div className="flex items-center gap-1.5">
              <Truck size={14} className="text-forest-700 dark:text-luxegold" />
              <span>Free Express Delivery</span>
            </div>
            <div className="flex items-center gap-1.5">
              <RefreshCw size={14} className="text-forest-700 dark:text-luxegold" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-forest-700 dark:text-luxegold" />
              <span>Guaranteed Quality</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
