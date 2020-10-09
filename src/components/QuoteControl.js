import React from "react";

const QuoteControl = (props) => {
  const { newQuoteId } = props
    
  return (
    <div>
      <button id={newQuoteId}>New Quote</button>
      <a href="#quote-box" id="tweet-quote">
        Tweet
      </a>
    </div>
  );
};

export default QuoteControl;
