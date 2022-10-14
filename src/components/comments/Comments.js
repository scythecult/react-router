import { useState } from "react";

import classes from "./Comments.module.css";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

const Comments = (props) => {
  const { author, comments } = props;
  const [isAddingComment, setIsAddingComment] = useState(false);

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
      {isAddingComment && <NewCommentForm author={author} />}
      {commentsContent}
    </section>
  );
};

export { Comments };
