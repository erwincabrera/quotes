import "./styles/main.scss";

const quotes = [
  {
    text:
      "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey",
  },
  {
    text:
      "Build your own dreams, or someone else will hire you to build theirs.",
    author: "Farrah Gray",
  },
];
let quoteInd = 0;
const updateQuote = () => {
  const text = quotes[quoteInd].text;
  const author = quotes[quoteInd].author;

  document.querySelector("#text").innerHTML = text;
  document.querySelector("#author").innerHTML = author;
  document.querySelector(
    "#tweet-quote"
  ).href = `https://twitter.com/intent/tweet?text=${text}`;

  quoteInd = (quoteInd + 1) % quotes.length;
};

document.querySelector("#new-quote").addEventListener("click", updateQuote);
updateQuote();
