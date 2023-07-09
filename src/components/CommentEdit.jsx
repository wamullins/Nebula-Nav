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
    } catch (error) {
      console.log(error);
    }
  };

  const buttonStyles = {
    background: "transparent",
    border: "1px solid white",
    color: "white",
    padding: "0.5rem 1rem",
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
