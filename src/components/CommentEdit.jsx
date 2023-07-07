import { useState } from "react"
import axios from "axios"

const CommentEdit = ({ commentId, initialContent, onSave }) => {
  const [content, setContent] = useState(initialContent)
  const [editMode, setEditMode] = useState(false)

  const handleSave = async () => {
    try {
      await axios.put(
        `https://nebula-nav-api.vercel.app/comments/${commentId}`,
        { content }
      )

      
      onSave(content)
      setEditMode(false)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      {editMode ? ( 
        <>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <button onClick={() => setEditMode(true)}>Edit</button>
      )}
    </>
  )
}

export default CommentEdit
