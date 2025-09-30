"brian ipsum dolor sit amet consectetur adipisicing elit. Nesciunt unde deleniti, consectetur ex eius, accusamus voluptate natus ipsam, molestias nulla impedit. Repellat explicabo nam dolor exercitationem, voluptas vero soluta praesentium!"
import React from "react";

const Item = ({ title, description, price, image }) => {
  return (
    <div className="item">              

        <img src={image} alt={title} className="item-image" />  
        <h2 className="item-title">{title}</h2>
        <p className="item-description">{description}</p>
        <p className="item-price">${price.toFixed(2)}</p>      
    </div>
  );
}



