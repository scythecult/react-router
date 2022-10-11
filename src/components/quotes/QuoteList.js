import { Fragment } from "react";
import { useSelector } from "react-redux";

import { QuoteItem } from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const { quotes } = useSelector((state) => state.quotes);

  return (
    <Fragment>
      <ul className={classes.list}>
        {quotes.map((quote) => (
          <QuoteItem key={quote.id} {...quote} />
        ))}
      </ul>
    </Fragment>
  );
};

export { QuoteList };
