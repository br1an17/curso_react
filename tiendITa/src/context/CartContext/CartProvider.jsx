import { use, useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const exist = (id) => {
    const exist = cart.some((p) => p.id === id);
    return exist;
  };
  const addItem = (item, quantity) => {
    if (exist(item.id)) {
      alert("El producto ya existe en el carrito");
      return;
    }
    setCart([...cart, { ...item, quantity }]);
    alert(`${item.name} agregado al carrito`);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    if (cart.length) {
      return cart.length;
    }
  };
//  const getTotalItems = () => {
//     return cart.reduce((total, item) => total + item.quantity, 0);
//   };

  const values = {
    cart,
    addItem,
    clearCart,
   getTotalItems,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
