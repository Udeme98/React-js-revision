import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";

const Data = () => {
  return (
    <div>
      <Navbar />
      {/* <Hero/> */}
      <Card
        img="black-swimmer.jpg"
        title="Life lessons with Sam Peter"
        price={136}
      />
    </div>
  );
};

export default Data;
