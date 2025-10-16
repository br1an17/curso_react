import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

export const Nav = () => {
  return (
    <nav className="navbar">   
      <h1 className="nav-title">tiendITa.</h1>
      <ul className="nav-links">
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
             <Link to="/category/dulce">dulce</Link>
             </li>
            <li>
             <Link to="/category/salado">salado</Link>
              </li>   
            <li>
               </li> 
        </ul>


    </nav>
  );
}   