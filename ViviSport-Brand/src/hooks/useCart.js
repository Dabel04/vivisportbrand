import { useAtom } from 'jotai';
import { productAtom } from '../App';

const API_BASE = 'http://localhost/backend/public';

export function useCart() {
  const [cart, setCart] = useAtom(productAtom);

  const addToCart = (item) => {
    // 1. Update local Jotai state instantly for responsive UI
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

    // 2. Sync with backend if user is logged in
    const token = localStorage.getItem('jwt');
    if (token) {
      fetch(`${API_BASE}/add_to_cart.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          product_id: item.id,
          quantity: item.quantity || 1,
          size: item.size,
          color_value: item.color?.value || null,
          color_name: item.color?.name || null
        })
      })
        .then(res => res.json())
        .then(data => {
          if (!data.success) {
            console.warn('Cart sync warning:', data.message);
          }
        })
        .catch(err => console.error('Cart sync error:', err));
    }
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