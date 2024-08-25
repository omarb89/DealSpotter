import React from "react";
import "./DealCard.css";

const DealCard = ({ deal }) => {
  return (
    <div className="deal-card">
      <img src={deal.image} alt={deal.title} className="deal-image" />
      <h3>{deal.title}</h3>
      <p>{deal.description}</p>
      <div className="deal-price">
        <span>{deal.price} €</span>
        <button className="deal-button">Voir le deal</button>
      </div>
    </div>
  );
};

export default DealCard;
