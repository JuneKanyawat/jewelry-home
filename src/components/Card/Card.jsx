import React from "react";
import "./Card.css";

function Card({ image, name, price }) {
  return (
    <div className="card">
      <figure className="gallery-item">
        <img src={image} alt={name} />
      </figure>

      <div className="card-content">
        <p className="card-name">{name}</p>
        <p className="card-price">{price}</p>
      </div>
    </div>
  );
}

export default Card;
