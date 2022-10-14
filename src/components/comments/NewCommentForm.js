import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../features/quotes-slice";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const { author } = props;

  const commentChangeHandler = (evt) => {
    setComment(evt.target.value.trim());
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    dispatch(addComment({ author, comment }));
    setComment("");
    // optional: Could validate here

    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea
          id="comment"
          rows="5"
          onChange={commentChangeHandler}
          value={comment}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
