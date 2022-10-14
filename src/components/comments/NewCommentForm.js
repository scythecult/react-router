import { useDispatch } from "react-redux";
import { addComment } from "../../features/quotes-slice";
import { useValidation } from "../hooks/hooks";
import { ValidationMessage } from "../UI/ValidationMessage";

import classes from "./NewCommentForm.module.css";

const MIN_VALUE_LENGTH = 5;

const isMore = (value) => value.length >= MIN_VALUE_LENGTH;

const NewCommentForm = (props) => {
  const dispatch = useDispatch();
  const [comment, hasError, commentIsValid, setComment, setIsTouched] =
    useValidation(isMore);
  const { author } = props;

  const commentChangeHandler = (evt) => {
    setComment(evt.target.value);
  };

  const commentBlurHandler = () => {
    setIsTouched(true);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (hasError) return;

    dispatch(addComment({ author, comment }));
    setComment("");
    setIsTouched(false);

    // send comment to server
  };

  const formClasses = hasError ? `${classes.form} ${classes.error}` : classes.form;

  return (
    <form className={formClasses} onSubmit={submitFormHandler}>
      <div className={classes.control}>
        <label htmlFor="comment">Your Comment</label>
        <textarea
          id="comment"
          rows="5"
          onChange={commentChangeHandler}
          onBlur={commentBlurHandler}
          value={comment}></textarea>
        {hasError && (
          <ValidationMessage minValue={MIN_VALUE_LENGTH} value={comment.length} />
        )}
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
