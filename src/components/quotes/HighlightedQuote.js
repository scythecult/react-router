import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findItem } from "../../utils/utils";
import { Comments } from "../comments/Comments";
import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = () => {
  const { quotes } = useSelector((state) => state.quotes);
  const { quoteAuthor } = useParams();
  const { author, text, comments } = findItem(quotes, quoteAuthor);

  return (
    <>
      <figure className={classes.quote}>
        <p>{text}</p>
        <figcaption>{author}</figcaption>
      </figure>

      <Comments author={author} comments={comments} />
    </>
  );
};

export { HighlightedQuote };
