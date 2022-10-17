import { useDispatch } from "react-redux";
import { FIRE_DB_COMMENTS } from "../../constants/fire-db";
import { addComments } from "../../features/comments-slice";
import { useHttp, useValidation } from "../hooks/hooks";
import { ValidationMessage } from "../UI/ValidationMessage";

import classes from "./NewCommentForm.module.css";

const MIN_VALUE_LENGTH = 5;

const isMore = (value) => value.length >= MIN_VALUE_LENGTH;

const NewCommentForm = (props) => {
  const dispatch = useDispatch();
  const [postComment] = useHttp({ url: FIRE_DB_COMMENTS, method: "POST" });
  const [getComments] = useHttp({ url: FIRE_DB_COMMENTS });
  const [comment, hasError, commentIsValid, setComment, setIsTouched] =
    useValidation(isMore);
  const { author } = props;

  const commentChangeHandler = (evt) => {
    setComment(evt.target.value);
  };

  const commentBlurHandler = () => {
    setIsTouched(true);
  };

  const submitFormHandler = (evt) => {
    evt.preventDefault();

    if (!commentIsValid) return;

    postComment({ author, comment }).then((response) => {
      if (response) {
        getComments().then((response) => {
          if (response) {
            const comments = Object.values(response);
            dispatch(addComments(comments));
          }
        });
      }
    });
    setComment("");
    setIsTouched(false);
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
