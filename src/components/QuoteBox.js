import React, { useState } from "react";
import QuoteControl from "./QuoteControl";
import QuoteDisplay from "./QuoteDisplay";

const QuoteBox = (props) => {
  const [ind, setInd] = useState(0);

  const { quotes, id, textId, authorId, newQuoteId, tweetId } = props;
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
