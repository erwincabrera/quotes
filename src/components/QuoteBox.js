import React, { useState } from "react";
import QuoteDisplay from "./QuoteDisplay";

const QuoteBox = (props) => {
  const [ind, setInd] = useState(0);

  const { quotes, id, textId, authorId, newQuoteId, tweetId } = props;
  const { text, author } = quotes[ind];

  const handleNewQuote = () => {
    setInd(ind < quotes.length - 1 ? ind + 1 : 0)
  }

  return (
    <div id={id}>
      <div className="quote-control">
        <button onClick={handleNewQuote} id={newQuoteId} className="quote-new-button">New Quote</button>
        <a href={`https://twitter.com/intent/tweet?text=${text}`} id={tweetId} className="quote-tweet-button">
          Tweet
        </a>
      </div>

      <QuoteDisplay
        text={text}
        author={author}
        textId={textId}
        authorId={authorId}
      ></QuoteDisplay>
    </div>
  );
};

export default QuoteBox;
