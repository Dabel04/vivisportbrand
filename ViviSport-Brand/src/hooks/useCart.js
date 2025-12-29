import { useAtom } from 'jotai';
import { productAtom } from '../App';

export function useCart() {
  const [cart, setCart] = useAtom(productAtom);

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(p =>
        p.id === item.id &&
        p.size === item.size &&
        p.color?.value === item.color?.value
      );
      if (existing) {
        return prev.map(p =>
          p.id === item.id &&
            p.size === item.size &&
            p.color?.value === item.color?.value
            ? { ...p, quantity: p.quantity + (item.quantity || 1) }
            : p
        );
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    });
  };

  const removeFromCart = (id, size, colorValue) => {
    setCart(prev => prev.filter(p =>
      !(p.id === id && p.size === size && p.color?.value === colorValue)
    ));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    getCartTotal,
    getCartCount
  };
}