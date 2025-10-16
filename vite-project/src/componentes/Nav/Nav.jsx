import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

export const Nav = () => {
  return (
    <nav>   
        <ul>
          <h1>Este es mi nav</h1>
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