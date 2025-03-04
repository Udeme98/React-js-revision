import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "./data";

const Data = () => {
  const cards = data.map((card) => {
    return (
      <Card id={card.id} img={card.img} title={card.title} price={card.price} />
    );
  });

  return (
    <div>
      <Navbar />
      {/* <Hero/> */}
      <div className="cards">{cards}</div>
    </div>
  );
};

export default Data;
