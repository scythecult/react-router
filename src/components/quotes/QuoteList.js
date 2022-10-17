import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { QuoteItem } from "./QuoteItem";
import { Sorting } from "./Sorting";
import classes from "./QuoteList.module.css";
import { addQuotes, sortAscending, sortDescending } from "../../features/quotes-slice";
import { useEffect, useState } from "react";
import NoQuotesFound from "./NoQuotesFound";
import { useQuotes } from "../hooks/hooks";
import { LoadingSpinner } from "../UI/LoadingSpinner";

export const QuoteList = () => {
  const dispatch = useDispatch();
  const { quotes } = useSelector((state) => state.quotes);
  const [isAscending, setIsAscending] = useState(true);
  const [recievedQuotes, isLoading] = useQuotes();

  const sortingHandler = () => {
    if (isAscending) {
      dispatch(sortAscending());
    } else {
      dispatch(sortDescending());
    }

    setIsAscending((isAscending) => (isAscending = !isAscending));
  };

  useEffect(() => {
    if (quotes.length) return;

    dispatch(addQuotes(recievedQuotes));
  }, [dispatch, recievedQuotes, quotes]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!quotes.length) {
    return <NoQuotesFound />;
  }

  const sorting = isAscending ? (
    <Sorting handler={sortingHandler} text={"Sort Ascending"} />
  ) : (
    <Sorting handler={sortingHandler} text={"Sort Descending"} />
  );

  return (
    <>
      {sorting}
      <ul className={classes.list}>
        {quotes.map((quote) => (
          <QuoteItem key={quote.id} {...quote} />
        ))}
      </ul>
    </>
  );
};

const Quotes = () => {
  return <Outlet />;
};

export { Quotes };
