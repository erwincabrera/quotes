import React from "react";

const QuoteDisplay = (props) => {
    const { text, author, textId, authorId} = props

    return (
        <div className="quote-display">
            <p id={textId} className="quote-text">{text}</p>
            <p id={authorId} className="quote-author">{author}</p>
        </div>
    )
}

export default QuoteDisplay;