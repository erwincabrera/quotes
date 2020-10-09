import React from "react";

const QuoteControl = (props) => {
  const { text, handleNewQuote, newQuoteId, tweetId } = props
    
  return (
    <div>
      <button onClick={handleNewQuote} id={newQuoteId}>New Quote</button>
      <a href={`https://twitter.com/intent/tweet?text=${text}`} id={tweetId}>
        Tweet
      </a>
    </div>
  );
};

export default QuoteControl;
