import { use, useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart,setCart]=useState();

  const exist = (id) => {
    const exist = cart.some(p=> p.id === id);
    return exist;

  }
  const addItem = (item, quantity) => {
    if (exist(item.id)) {
     alert("El producto ya existe en el carrito")
     return;   
    } 
        setCart([...cart, { ...item, quantity }]);
    alert(`${item.name} agregado al carrito`);
  };



    return (
    <CartContext.Provider value={{}}>   
        {children}
    </CartContext.Provider>
  );
}