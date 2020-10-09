import React from "react";

const QuoteBox = (props) => {
  const { quotes, id } = props;

  return (
    <div id={id}>
      <div id="text">{quotes[0].text}</div>
      <div id="author">{quotes[0].author}</div>
      <button id="new-quote">New Quote</button>
      <a href="#quote-box" id="tweet-quote">
        Tweet
      </a>
    </div>
  );
};

export default QuoteBox;
