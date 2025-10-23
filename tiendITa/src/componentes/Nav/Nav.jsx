import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useCartContext as useCart } from "../../context/CartContext/UseCartContext.js";
export const Nav = () => {
  
  const { getTotalItems } = useCart();

  return (
    <nav className="navbar">
      <h1 className="nav-title">tiendITa.</h1>
      <ul className="nav-links">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/category/dulce">Dulce</Link>
        </li>
        <li>
          <Link to="/category/salado">Salado</Link>
        </li>
        <li>
          <Link > Carrito </Link>
          {getTotalItems() > 0 &&
          <span className="in-cart">{getTotalItems()}</span>
          }
           {/* {total > 0 && <span className="in-cart">{total}</span>} */}
          </li>
      </ul>
    </nav>
  );
};
