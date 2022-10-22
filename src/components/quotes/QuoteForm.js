import React from "react";
import { useNavigate } from "react-router-dom";
import { FIRE_DB_QUOTES } from "../../constants/fire-db";
import { useHttp, useValidation } from "../hooks/hooks";
import { Card } from "../UI/Card";

import { LoadingSpinner } from "../UI/LoadingSpinner";
import { ValidationMessage } from "../UI/ValidationMessage";
import classes from "./QuoteForm.module.css";

const MIN_VALUE_LENGTH = 2;

const isTooShort = (value) => value.length >= MIN_VALUE_LENGTH;

const QuoteForm = () => {
  const navigate = useNavigate();
  const [postQuote, { isLoading }] = useHttp({
    url: FIRE_DB_QUOTES,
    method: "POST",
  });
  const [
    authorValue,
    hasAuthorError,
    authorValueIsValid,
    setAuthorValue,
    setIsAuthorTouched,
  ] = useValidation(isTooShort);
  const [textValue, hasTextError, textValueIsValid, setTextValue, setIsTextTouched] =
    useValidation(isTooShort);

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

    if (!authorValueIsValid && !textValueIsValid) return;
    const newQuote = { author: authorValue.trim(), text: textValue.trim() };

    postQuote(newQuote).then(() => navigate("/all-quotes"));
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
