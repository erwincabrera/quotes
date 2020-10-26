import React, { useState } from "react";
import QuoteControl from "./QuoteControl";
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
      <QuoteControl text={text} handleNewQuote={handleNewQuote} tweetId={tweetId} newQuoteId={newQuoteId}></QuoteControl>
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
