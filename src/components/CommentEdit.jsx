import { useState } from "react";
import axios from "axios";

const CommentEdit = ({ commentId, initialContent, onSave }) => {
  const [content, setContent] = useState(initialContent);
  const [editMode, setEditMode] = useState(false);

  const handleSave = async () => {
    try {
      await axios.put(
        `https://nebula-nav-api.vercel.app/comments/${commentId}`,
        { content }
      );

      onSave(content);
      setEditMode(false);

      let editBtns = document.querySelector(`#${CSS.escape(commentId)} > .edit-x-div`)
      editBtns.style.alignSelf="flex-end"

      let newComment = document.querySelector(`#${CSS.escape(commentId)} > .comment-stuff`)
      newComment.style.display= "block" ;

    } catch (error) {
      console.log(error);
    }
  };

  if (editMode) { // if edting, hide the original comment
    let editBtns = document.querySelector(`#${CSS.escape(commentId)} > .edit-x-div`)
    editBtns.style.alignSelf="flex-start"

    let priorComment = document.querySelector(`#${CSS.escape(commentId)} > .comment-stuff`)
    priorComment.style.display= "none" ;
  }
  

  const buttonStyles = {
    background: "transparent",
    border: "1px solid white",
    color: "white",
    marginRight: "1vmin",
    padding: "0.1rem 1rem",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "border-color 0.3s ease",
  };

  const buttonHoverStyles = {
    ...buttonStyles,
    borderColor: "#F7CB15",
  };

  return (
    <>
      {editMode ? (
        <>
          <textarea 
            className= "text-area-edit"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button
            onClick={handleSave}
            style={buttonStyles}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#F7CB15";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "white";
            }}
          >
            Save
          </button>
        </>
      ) : (
        <button
          onClick={() => setEditMode(true)}
          style={buttonStyles}
          onMouseEnter={(e) => {
            e.target.style.borderColor = "#F7CB15";
          }}
          onMouseLeave={(e) => {
            e.target.style.borderColor = "white";
          }}
        >
          Edit
        </button>
      )}
    </>
  );
};

export default CommentEdit;
