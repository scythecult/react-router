import { useState } from "react";
import { useSelector } from "react-redux";
import { findItem } from "../../utils/utils";

import classes from "./Comments.module.css";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

const Comments = (props) => {
  const { quotes } = useSelector((state) => state.quotes);
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { comments = [] } = findItem(quotes, props.author);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const commentsContent = comments.length ? (
    <CommentsList comments={comments} />
  ) : (
    <p>Comments...</p>
  );

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      {commentsContent}
    </section>
  );
};

export { Comments };