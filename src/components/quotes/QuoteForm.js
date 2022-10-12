import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addQuote } from "../../features/quotes-slice";
import { useLoader } from "../hooks/hooks";
import { Card } from "../UI/Card";

import { LoadingSpinner } from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = () => {
  const dispatch = useDispatch();
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isLoading, setIsLoading] = useLoader({
    closeAfter: 1.5,
    redirectTo: "/all-quotes",
  });

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here
    dispatch(addQuote({ author: enteredAuthor, text: enteredText }));
    setIsLoading(true);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {isLoading && <div className={classes.loading}>{<LoadingSpinner />}</div>}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows="5" ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export { QuoteForm };
