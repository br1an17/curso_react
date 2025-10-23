import React from 'react';
import './card.css';
export const Card = ({ titulo, descripcion, imagen }) => {
    return (
        <div className="card">       
            <img src={imagen} alt={titulo} />
            <h2>{titulo}</h2>
            <p>{descripcion}</p> 

        </div>

    )
}