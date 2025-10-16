import React from 'react';


export const Item = ({ name,price,description,imageUrl,children }) => {
  return (
   <article className="product-item">
    <img src="{imageUrl}" alt="{description}" />
    <h2 class="product-title">{name}</h2>
    <p class="product-price">Precio:${price}</p>
    <p class="product-description">{description}</p>
    {children}
   </article>
 
  );
}


