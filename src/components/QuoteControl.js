import React from "react";

const QuoteControl = (props) => {
  const { text, handleNewQuote, newQuoteId, tweetId } = props
    
  return (
    <div className="quote-control">
      <button onClick={handleNewQuote} id={newQuoteId} className="quote-new-button">New Quote</button>
      <a href={`https://twitter.com/intent/tweet?text=${text}`} id={tweetId} className="quote-tweet-button">
        Tweet
      </a>
    </div>
  );
};

export default QuoteControl;
