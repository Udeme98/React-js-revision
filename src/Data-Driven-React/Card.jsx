import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={`src/assets/images/${props.img}`}
        className="card-image"
        alt="Card Image"
      />
      <div className="card-info">
        <p>{props.title}</p>
        <p>
          <span className="bold">From ${props.price} </span>/ person
        </p>
      </div>
    </div>
  );
};

export default Card;
