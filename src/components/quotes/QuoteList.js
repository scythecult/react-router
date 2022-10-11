import { Fragment } from "react";

import { QuoteItem } from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QUOTES_MOCK = [
  { id: 1, author: "Check", text: "Privet" },
  { id: 2, author: "Zalupa", text: "Zdarove brat" },
];

const QuoteList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {QUOTES_MOCK.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export { QuoteList };
