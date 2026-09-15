import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const FREE_SHIPPING_THRESHOLD = 250;

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const local = localStorage.getItem('egoiste_cart');
      return local ? JSON.parse(local) : [
        {
          id: 'initial-item-1',
          productId: 'prod-1',
          name: 'Wellness Club Quarter-Zip Pullover',
          price: 185,
          image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
          size: 'L',
          color: 'Mocha Brown',
          quantity: 1,
        }
      ];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('PRIVATE25');
  const [promoApplied, setPromoApplied] = useState(true);
  const [promoError, setPromoError] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('egoiste_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const addToCart = (product, size, color, quantity = 1) => {
    const selectedSize = size || product.sizes[0];
    const selectedColor = color || product.colors[0]?.name;
    const cartItemId = `${product.id}-${selectedSize}-${selectedColor}`;

    setCartItems(prev => {
      const existing = prev.find(item => item.id === cartItemId);
      if (existing) {
        return prev.map(item =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size: selectedSize,
          color: selectedColor,
          quantity,
        }
      ];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.id === cartItemId ? { ...item, quantity: newQty } : item))
    );
  };

  const removeFromCart = (cartItemId) => {
    setCartItems(prev => prev.filter(item => item.id !== cartItemId));
  };

  const applyPromo = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'PRIVATE25' || clean === 'EGOISTE25' || clean === 'SALE25') {
      setPromoCode(clean);
      setPromoApplied(true);
      setPromoError('');
      return true;
    } else {
      setPromoError('Invalid promo code. Try "PRIVATE25" for 25% off.');
      return false;
    }
  };

  const removePromo = () => {
    setPromoApplied(false);
    setPromoCode('');
    setPromoError('');
  };

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = promoApplied ? Math.round(subtotal * 0.25) : 0;
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shipping = subtotal > 0 ? (isFreeShipping ? 0 : 20) : 0;
  const total = Math.max(0, subtotal - discountAmount + shipping);
  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
