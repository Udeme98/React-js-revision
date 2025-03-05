import React from "react";

const MainContent = () => {
  return (
    <main>
      <form className="form">
        <section className="meme-inputs">
          <input type="text" className="meme-input" />
          <input type="text" className="meme-input" />
        </section>
        <button className="meme-btn">Send</button>
      </form>
    </main>
  );
};

export default MainContent;
