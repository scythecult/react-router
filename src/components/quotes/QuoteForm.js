import { useDispatch } from "react-redux";
import { addQuote } from "../../features/quotes-slice";
import { useLoader, useValidation } from "../hooks/hooks";
import { Card } from "../UI/Card";

import { LoadingSpinner } from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const MIN_VALUE_LENGTH = 2;

const isTooShort = (value) => value.length >= MIN_VALUE_LENGTH;

const QuoteForm = () => {
  const dispatch = useDispatch();
  const [
    authorValue,
    hasAuthorError,
    authorValueIsValid,
    setAuthorValue,
    setIsAuthorTouched,
  ] = useValidation(isTooShort);
  const [textValue, hasTextError, textValueIsValid, setTextValue, setIsTextTouched] =
    useValidation(isTooShort);
  const [isLoading, setIsLoading] = useLoader({
    hideAfter: 1.5,
    redirectTo: "/all-quotes",
  });

  const authorInputHandler = (evt) => {
    setAuthorValue(evt.target.value.trim());
  };

  const textInputHandler = (evt) => {
    setTextValue(evt.target.value.trim());
  };

  const authorBlurHandler = () => {
    setIsAuthorTouched(true);
  };

  const textBlurHandler = () => {
    setIsTextTouched(true);
  };

  function submitFormHandler(event) {
    event.preventDefault();

    if (authorValueIsValid && textValueIsValid) {
      setIsLoading(true);
    }
    dispatch(addQuote({ author: authorValue, text: textValue }));
    setIsAuthorTouched(false);
    setIsTextTouched(false);
  }
  const authorRemainingChars = MIN_VALUE_LENGTH - authorValue.length;
  const authorClasses = hasAuthorError
    ? `${classes.control} ${classes.error}`
    : classes.control;
  const authorMessage = authorRemainingChars
    ? `${authorRemainingChars} more chars to type`
    : "ok!";

  const textRemainingChars = MIN_VALUE_LENGTH - textValue.length;
  const textClasses = hasTextError
    ? `${classes.control} ${classes.error}`
    : classes.control;
  const textMessage = textRemainingChars
    ? `${textRemainingChars} more chars to type`
    : "ok!";

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {isLoading && <div className={classes.loading}>{<LoadingSpinner />}</div>}

        <div className={authorClasses}>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={authorValue}
            onBlur={authorBlurHandler}
            onChange={authorInputHandler}
          />
          <p className={classes.info}>{authorMessage}</p>
        </div>
        <div className={textClasses}>
          <label htmlFor="text">Text</label>
          <textarea
            id="text"
            rows="5"
            value={textValue}
            onBlur={textBlurHandler}
            onChange={textInputHandler}></textarea>
          <p className={classes.info}>{textMessage}</p>
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export { QuoteForm };
