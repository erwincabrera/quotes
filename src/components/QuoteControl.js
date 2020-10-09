import React from "react";

const QuoteControl = (props) => {
  const { text, newQuoteId } = props
    
  return (
    <div>
      <button id={newQuoteId}>New Quote</button>
      <a href={`https://twitter.com/intent/tweet?text=${text}`} id="tweet-quote">
        Tweet
      </a>
    </div>
  );
};

export default QuoteControl;
