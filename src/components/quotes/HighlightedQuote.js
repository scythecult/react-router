import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FIRE_DB_QUOTES } from "../../constants/fire-db";
import { addQuotes } from "../../features/quotes-slice";
import { findItem, transformResponse } from "../../utils/utils";
import { Comments } from "../comments/Comments";
import { useFireDb } from "../hooks/hooks";
import { LoadingSpinner } from "../UI/LoadingSpinner";
import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = () => {
  const dispatch = useDispatch();
  const { quotes } = useSelector((state) => state.quotes);
  const [recievedQuotes, isLoading] = useFireDb({
    url: FIRE_DB_QUOTES,
    transform: transformResponse,
  });
  const { quoteAuthor } = useParams();
  const { author, text } = findItem(quotes, quoteAuthor);

  useEffect(() => {
    if (quotes.length) return;
    dispatch(addQuotes(recievedQuotes));
  }, [dispatch, recievedQuotes, quotes]);

  const figureContent = isLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      <p>{text}</p>
      <figcaption>{author}</figcaption>
    </>
  );

  return (
    <>
      <figure className={classes.quote}>{figureContent}</figure>
      <Comments author={author} />
    </>
  );
};

export { HighlightedQuote };
