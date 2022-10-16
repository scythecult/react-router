import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { QuoteItem } from "./QuoteItem";
import { Sorting } from "./Sorting";
import classes from "./QuoteList.module.css";
import { addQuotes, sortAscending, sortDescending } from "../../features/quotes-slice";
import { useEffect, useState } from "react";
import NoQuotesFound from "./NoQuotesFound";
import { useHttp } from "../hooks/hooks";
import { FIRE_DB_QUOTES } from "../../constants/fire-db";
import { transformResponse } from "../../utils/utils";
import { LoadingSpinner } from "../UI/LoadingSpinner";

export const QuoteList = () => {
  const dispatch = useDispatch();
  const { quotes } = useSelector((state) => state.quotes);
  const [isAscending, setIsAscending] = useState(true);
  const [getQuotes, { isLoading }] = useHttp({
    url: FIRE_DB_QUOTES,
  });

  const sortingHandler = () => {
    if (isAscending) {
      dispatch(sortAscending());
    } else {
      dispatch(sortDescending());
    }

    setIsAscending((isAscending) => (isAscending = !isAscending));
  };

  useEffect(() => {
    getQuotes().then((response) => {
      if (response) {
        const quotes = transformResponse(response);
        dispatch(addQuotes(quotes));
      }
    });
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const sorting = isAscending ? (
    <Sorting handler={sortingHandler} text={"Sort Ascending"} />
  ) : (
    <Sorting handler={sortingHandler} text={"Sort Descending"} />
  );

  const quotesContent = quotes.length ? (
    <>
      {sorting}
      <ul className={classes.list}>
        {quotes.map((quote) => (
          <QuoteItem key={quote.id} {...quote} />
        ))}
      </ul>
    </>
  ) : (
    <NoQuotesFound />
  );

  return quotesContent;
};

const Quotes = () => {
  return <Outlet />;
};

export { Quotes };
