import React from "react";
import memesData from "./memesData";

const MainContent = () => {
  const memeFunc = (e) => {
    e.preventDefault();

    const memeArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    console.log(memeArray[randomNumber].box);
  };

  return (
    <main>
      <form className="form">
        <section className="meme-inputs">
          <input type="text" className="meme-input" />
          <input type="text" className="meme-input" />
        </section>
        <button type="button" onClick={memeFunc} className="meme-btn">
          Send
        </button>
      </form>
    </main>
  );
};

export default MainContent;
