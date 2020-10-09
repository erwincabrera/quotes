import React from "react";
import QuoteDisplay from "./QuoteDisplay";

const QuoteBox = (props) => {
  const { quotes, id, textId, authorId } = props;
  const ind = 0;
  const { text, author } = quotes[ind];

  return (
    <div id={id}>
      <QuoteDisplay
        text={text}
        author={author}
        textId={textId}
        authorId={authorId}
      ></QuoteDisplay>
      <button id="new-quote">New Quote</button>
      <a href="#quote-box" id="tweet-quote">
        Tweet
      </a>
    </div>
  );
};

export default QuoteBox;
