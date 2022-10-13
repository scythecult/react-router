import CommentItem from "./CommentItem";
import classes from "./CommentsList.module.css";

const CommentsList = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment, index) => (
        <CommentItem key={`${comment}${index}`} text={comment} />
      ))}
    </ul>
  );
};

export default CommentsList;
