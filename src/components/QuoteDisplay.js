import React from "react";

const QuoteDisplay = (props) => {
    const { text, author, textId, authorId} = props

    return (
        <div>
            <p id={textId}>{text}</p>
            <p id={authorId}>{author}</p>
        </div>
    )
}

export default QuoteDisplay;