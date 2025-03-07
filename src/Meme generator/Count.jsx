import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const add = function () {
    console.log("add");
  };
  const sub = function () {
    console.log("sub");
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <button onClick={sub}>-</button>
      <h5>{count}</h5>
      <button onClick={add}>+</button>
    </div>
  );
};

export default Count;
