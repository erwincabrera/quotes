import React, { useEffect, useState } from "react";
import QuoteBox from "./components/QuoteBox";
import axios from "axios";

const quotes = [
  {
    "id": 1,
    "text": "I am not a product of my circumstances. I am a product of my decisions.",
    "author": "Stephen Covey"
  },
  {
    "id": 2,
    "text": "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    "author": "Dalai Lama"
  },
  {
    "id": 3,
    "text": "Build your own dreams, or someone else will hire you to build theirs.",
    "author": "Farrah Gray"
  }
]

function App() {
  /*
  const [status, setStatus] = useState("LOADING");
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/quotes")
      .then((res) => {
        setQuotes(res.data);
        setStatus("READY");
      })
      .catch((e) => {
        setStatus("ERROR");
      });
  }, []);

  if (status === "LOADING") return <div>Loading...</div>;
  if (status === "ERROR") return <div>Error!</div>;

  */

  const props = {
    quotes: quotes,
    id: "quote-box",
    textId: "text",
    authorId: "author",
    newQuoteId: "new-quote",
    tweetId: "tweet-quote",
  };

  return <QuoteBox {...props}></QuoteBox>;
}

export default App;
