import React, { useState } from "react";
import memesData from "./memesData";

const MainContent = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
  });
  const [allMemes, setAllMemes] = useState(memesData);

  const memeFunc = (e) => {
    e.preventDefault();

    const memeArray = allMemes.data.memes;
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
