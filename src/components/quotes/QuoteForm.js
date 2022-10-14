import { useDispatch } from "react-redux";
import { addQuote } from "../../features/quotes-slice";
import { useLoader, useValidation } from "../hooks/hooks";
import { Card } from "../UI/Card";

import { LoadingSpinner } from "../UI/LoadingSpinner";
import { ValidationMessage } from "../UI/ValidationMessage";
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
    setAuthorValue(evt.target.value);
  };

  const textInputHandler = (evt) => {
    setTextValue(evt.target.value);
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
    dispatch(addQuote({ author: authorValue.trim(), text: textValue.trim() }));
    setIsAuthorTouched(false);
    setIsTextTouched(false);
  }

  const authorClasses = hasAuthorError
    ? `${classes.control} ${classes.error}`
    : classes.control;

  const textClasses = hasTextError
    ? `${classes.control} ${classes.error}`
    : classes.control;

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
          {hasAuthorError && (
            <ValidationMessage minValue={MIN_VALUE_LENGTH} value={authorValue.length} />
          )}
        </div>
        <div className={textClasses}>
          <label htmlFor="text">Text</label>
          <textarea
            id="text"
            rows="5"
            value={textValue}
            onBlur={textBlurHandler}
            onChange={textInputHandler}></textarea>
          {hasTextError && (
            <ValidationMessage minValue={MIN_VALUE_LENGTH} value={textValue.length} />
          )}
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export { QuoteForm };
