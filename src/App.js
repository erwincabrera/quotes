import React from "react";

const quotes = [
  {
    text:
      "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey",
  },
  {
    text:
      "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    author: "Dalai Lama",
  },
  {
    text:
      "Build your own dreams, or someone else will hire you to build theirs.",
    author: "Farrah Gray",
  },
];

function App() {
  return (
    <main id="quote-box">
      <div id="text">{quotes[0].text}</div>
      <div id="author">{quotes[0].author}</div>
      <button id="new-quote">New Quote</button>
      <a href="#quote-box" id="tweet-quote">
        Tweet
      </a>
    </main>
  );
}

export default App;
