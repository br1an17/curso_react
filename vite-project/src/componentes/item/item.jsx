import React from 'react';


export const Item = ({ title, description, price, image }) => {
  return (
    <div className="item">              

        <h2 className="item-title">{title}</h2>
        <p className="item-description">{description}</p>
        <p className="item-price">${price}</p>
    </div>
  );
}


