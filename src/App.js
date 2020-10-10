import React, { useEffect, useState } from "react";
import QuoteBox from "./components/QuoteBox";
import axios from "axios";

function App() {
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
