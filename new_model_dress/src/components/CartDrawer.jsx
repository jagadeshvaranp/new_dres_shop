import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Tag, Check } from 'lucide-react';
import { useCart, FREE_SHIPPING_THRESHOLD } from '../context/CartContext';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    promoCode,
    setPromoCode,
    promoApplied,
    promoError,
    applyPromo,
    removePromo,
    totalItemsCount,
    subtotal,
    discountAmount,
    shipping,
    total,
    isFreeShipping,
    freeShippingRemaining,
    freeShippingProgress,
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (inputCoupon) {
      applyPromo(inputCoupon);
      setInputCoupon('');
    }
  };

  const handleSimulateCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      setTimeout(() => {
        setCheckoutComplete(false);
        setIsCartOpen(false);
      }, 2500);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-over Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-[#151816] text-neutral-900 dark:text-neutral-100 shadow-2xl flex flex-col justify-between animate-fade-in">
          
          {/* Header */}
          <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-serif font-medium">Shopping Bag</h2>
              <span className="text-xs uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-semibold">
                {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping Meter Bar */}
          <div className="bg-[#f7f5ef] dark:bg-[#1a1d1b] px-6 py-3 border-b border-neutral-200/70 dark:border-neutral-800">
            <div className="text-xs font-normal text-neutral-700 dark:text-neutral-300 mb-1.5 flex items-center justify-between">
              {isFreeShipping ? (
                <span className="text-forest-700 dark:text-luxegold font-medium flex items-center gap-1">
                  <Check size={13} /> You've unlocked Complimentary Express Delivery!
                </span>
              ) : (
                <span>
                  Add <strong className="font-semibold text-forest-700 dark:text-luxegold">${freeShippingRemaining}</strong> more for Free Shipping
                </span>
              )}
              <span className="text-[11px] text-neutral-400 font-mono">
                ${subtotal} / ${FREE_SHIPPING_THRESHOLD}
              </span>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-forest-700 dark:bg-luxegold transition-all duration-500 rounded-full"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {cartItems.length === 0 ? (
              <div className="text-center py-20 text-neutral-400">
                <p className="text-lg font-serif italic mb-3">Your shopping bag is empty</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-xs uppercase tracking-widest font-semibold text-neutral-900 dark:text-white underline underline-offset-4"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 pb-5 border-b border-neutral-100 dark:border-neutral-800/80"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-neutral-100 dark:bg-neutral-800 rounded-sm overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 line-clamp-1">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-neutral-400 hover:text-red-500 transition-colors p-1 -mr-1"
                          aria-label="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="text-xs text-neutral-500 mt-1 flex gap-2">
                        {item.size && <span>Size: {item.size}</span>}
                        {item.color && <span>• {item.color}</span>}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-neutral-200 dark:border-neutral-700 rounded-sm text-xs">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                        >
                          -
                        </button>
                        <span className="px-2 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <span className="font-serif font-semibold text-sm">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 space-y-4">
              
              {/* Promo Code Input */}
              {promoApplied ? (
                <div className="flex items-center justify-between p-2.5 bg-forest-50 dark:bg-forest-950/60 border border-forest-200 dark:border-forest-900 rounded-sm text-xs">
                  <div className="flex items-center gap-2 text-forest-800 dark:text-forest-200 font-medium">
                    <Tag size={13} />
                    <span>25% Private Sale Applied ({promoCode})</span>
                  </div>
                  <button
                    onClick={removePromo}
                    className="text-neutral-400 hover:text-neutral-700 dark:hover:text-white text-xs underline"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={inputCoupon}
                    onChange={(e) => setInputCoupon(e.target.value)}
                    placeholder="Enter Promo Code (e.g. PRIVATE25)"
                    className="flex-1 px-3 py-2 text-xs border border-neutral-300 dark:border-neutral-700 rounded-sm bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors"
                  >
                    Apply
                  </button>
                </form>
              )}

              {promoError && <p className="text-[11px] text-red-500">{promoError}</p>}

              {/* Price Calculation Breakdown */}
              <div className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono">${subtotal}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-forest-700 dark:text-luxegold font-medium">
                    <span>Private Sale Discount (25%)</span>
                    <span className="font-mono">-${discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span>{shipping === 0 ? 'Complimentary' : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between text-sm font-serif font-semibold text-neutral-900 dark:text-white pt-2 border-t border-neutral-200 dark:border-neutral-800">
                  <span>Order Total</span>
                  <span className="font-mono">${total}</span>
                </div>
              </div>

              {/* Checkout CTA Button */}
              {checkoutComplete ? (
                <div className="py-3.5 bg-forest-700 text-white text-center text-xs uppercase tracking-widest font-semibold rounded-sm flex items-center justify-center gap-2 animate-fade-in">
                  <Check size={16} /> Order Reserved Successfully!
                </div>
              ) : (
                <button
                  onClick={handleSimulateCheckout}
                  disabled={isCheckingOut}
                  className="w-full py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-100 dark:text-neutral-900 text-xs uppercase tracking-widest font-semibold rounded-sm transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isCheckingOut ? (
                    <span>Processing Private Checkout...</span>
                  ) : (
                    <>
                      <span>Proceed to Checkout</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              )}

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-400 text-center">
                <ShieldCheck size={13} />
                <span>Encrypted 256-Bit Luxury Checkout</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
