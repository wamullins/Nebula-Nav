import { useState } from "react";
import useApi from "../useApi";
import axios from "axios";
import CommentEdit from "./CommentEdit";

const CommentSection = ({ objectId }) => {
  const { data: comments } = useApi("/comments");
  if (!comments) {
    return <h3>Loading Comments</h3>;
  }

  const filteredComments = comments.filter(
    (comment) => comment.object === objectId
  );

  const handleDelete = async (commentId) => {
    try {
      await axios.delete(
        `https://nebula-nav-api.vercel.app/comments/${commentId}`
      );
      localStorage.removeItem(`${commentId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (commentId, updatedContent) => {
    console.log(`updating comment with ID: ${commentId}`);
    console.log("updated content:", updatedContent);
  };

  const buttonStyles = {
    background: "transparent",
    border: "1px solid white",
    color: "white",
    padding:"0.1rem .3rem",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "border-color 0.3s ease",
  };

  const buttonHoverStyles = {
    ...buttonStyles,
    borderColor: "#F7CB15",
  };

  return (
    <div className="comments-div">
      {filteredComments.map((comment) => (
        <div className="single-comment" key={comment._id}>
          {localStorage.getItem(`${comment._id}`) && (
            <div className="edit-x-div">
              <CommentEdit
                commentId={comment._id}
                initialContent={comment.content}
                onSave={(updatedContent) =>
                  handleEdit(comment._id, updatedContent)
                }
              />
              <button
                onClick={() => handleDelete(comment._id)}
                style={buttonStyles}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "#F7CB15";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "white";
                }}
              >
                X
              </button>
            </div>
          )}
          <div className="comment-stuff" id={comment._id}>
            <p className="comment-content">{comment.content}</p>
            <p className="comment-sender"> - {comment.sender}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
