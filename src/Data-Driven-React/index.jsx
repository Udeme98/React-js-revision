import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "./data";

const Data = () => {
  const cards = data.map((card) => {
    return <Card key={card.id} card={card} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards">{cards}</div>
    </div>
  );
};

export default Data;
