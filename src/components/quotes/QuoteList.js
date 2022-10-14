import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { HighlightedQuote } from "./HighlightedQuote";

import { QuoteItem } from "./QuoteItem";
import { Sorting } from "./Sorting";
import classes from "./QuoteList.module.css";
import { sortAscending, sortDescending } from "../../features/quotes-slice";
import { useState } from "react";

const QuoteList = () => {
  const dispatch = useDispatch();
  const { quotes } = useSelector((state) => state.quotes);
  const [isAscending, setIsAcending] = useState(true);

  const sortingHandler = () => {
    if (isAscending) {
      dispatch(sortAscending());
    } else {
      dispatch(sortDescending());
    }

    setIsAcending((isAscending) => (isAscending = !isAscending));
  };

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
  return (
    <Routes>
      <Route index element={<QuoteList />} />
      <Route path=":quoteAuthor" element={<HighlightedQuote />} />
    </Routes>
  );
};

export { Quotes };
