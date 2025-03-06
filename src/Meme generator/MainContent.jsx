import React from "react";
import memesData from "./memesData";

const MainContent = () => {
  return (
    <main>
      <form className="form">
        <section className="meme-inputs">
          <input type="text" className="meme-input" />
          <input type="text" className="meme-input" />
        </section>
        <button
          onClick={() => console.log("Button clicked")}
          className="meme-btn"
        >
          Send
        </button>
      </form>
    </main>
  );
};

export default MainContent;
