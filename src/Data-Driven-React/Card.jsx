import React from "react";

const Card = ({ card }) => {
  return (
    <div className="card">
      <img
        src={`src/assets/images/${card.img}`}
        className="card-image"
        alt="Card Image"
      />
      <div className="card-info">
        <p>{card.title}</p>
        <p>
          <span className="bold">From ${card.price} </span>/ person
        </p>
      </div>
    </div>
  );
};

export default Card;
