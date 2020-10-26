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
      <QuoteDisplay
        handleClick={handleNewQuote}
        text={text}
        author={author}
        newQuoteId={newQuoteId}
        textId={textId}
        authorId={authorId}
      ></QuoteDisplay>

      <div className="quote-control">
        <a href={`https://twitter.com/intent/tweet?text=${text}`} id={tweetId} className="quote-tweet-button">
          Tweet
        </a>
      </div>
    </div>
  );
};

export default QuoteBox;
