import React from "react";
import QuoteControl from "./QuoteControl";
import QuoteDisplay from "./QuoteDisplay";

const QuoteBox = (props) => {
  const { quotes, id, textId, authorId, newQuoteId, tweetId } = props;
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
      <QuoteControl text={text} tweetId={tweetId} newQuoteId={newQuoteId}></QuoteControl>
    </div>
  );
};

export default QuoteBox;
