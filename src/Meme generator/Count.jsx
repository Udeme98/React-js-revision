import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [isGoingOut, setIsGoingOut] = useState(true);

  const add = function () {
    setCount((prev) => prev + 1);
  };
  const sub = function () {
    setCount((prev) => prev - 1);
  };

  const toggle = () => {
    setIsGoingOut((prev) => !prev);
  };
  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={sub}>-</button>
        <h5>{count}</h5>
        <button onClick={add}>+</button>
      </div>

      <h2 onClick={toggle}>{isGoingOut ? "Yes" : "No"}</h2>
    </>
  );
};

export default Count;
