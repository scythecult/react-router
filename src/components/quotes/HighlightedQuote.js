import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import classes from "./HighlightedQuote.module.css";

const getQuote = (quotes = [], author = "") => {
  return quotes.find((quote) => quote.author.toLowerCase() === author);
};

const HighlightedQuote = () => {
  const { quotes } = useSelector((state) => state.quotes);
  const { quoteAuthor } = useParams();
  const { author, text } = getQuote(quotes, quoteAuthor);

  return (
    <figure className={classes.quote}>
      <p>{text}</p>
      <figcaption>{author}</figcaption>
    </figure>
  );
};

export { HighlightedQuote };
