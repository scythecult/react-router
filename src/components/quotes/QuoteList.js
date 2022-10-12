import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { HighlightedQuote } from "./HighlightedQuote";

import { QuoteItem } from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = () => {
  const { quotes } = useSelector((state) => state.quotes);

  return (
    <ul className={classes.list}>
      {quotes.map((quote) => (
        <QuoteItem key={quote.id} {...quote} />
      ))}
    </ul>
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
