import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FIRE_DB_COMMENTS } from "../../constants/fire-db";
import { addComments } from "../../features/comments-slice";
import { useHttp } from "../hooks/hooks";

import classes from "./Comments.module.css";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

const Comments = (props) => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);
  const { author } = props;
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [getComments] = useHttp({ url: FIRE_DB_COMMENTS });
  const filteredByAuthor = comments
    .filter((comment) => comment.author === author)
    .map((comment) => comment.comment);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  useEffect(() => {
    getComments().then((response) => {
      if (response) {
        const comments = Object.values(response);
        dispatch(addComments(comments));
      }
    });
  }, []);

  const commentsContent = filteredByAuthor.length ? (
    <CommentsList comments={filteredByAuthor} />
  ) : (
    <p>No comments were added yet!</p>
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
