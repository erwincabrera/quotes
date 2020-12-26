import React from "react";

const QuoteDisplay = (props) => {
  const { text, author, newQuoteId, textId, authorId, handleClick } = props;

  return (
    <div className="quote-display">
      <div id={newQuoteId} onClick={handleClick}>
        <p id={textId} className="quote-text">
          {text}
        </p>
      </div>
      <p id={authorId} className="quote-author">
        {author}
      </p>
    </div>
  );
};

export default QuoteDisplay;
