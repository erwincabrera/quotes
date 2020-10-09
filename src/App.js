import React from "react";
import QuoteBox from "./components/QuoteBox";

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
  const props = {
    quotes: quotes,
    id: "quote-box",
    textId: "text",
    authorId: "author",
    newQuoteId: "new-quote",
  };

  return <QuoteBox {...props}></QuoteBox>;
}

export default App;
