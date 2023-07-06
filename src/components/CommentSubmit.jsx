import React, { useState } from 'react'
import axios from "axios";

const CommentSubmit = ({ objectId }) => {
    
    const initialState = {
        sender: '',
        content: '',
        object: objectId,
    }

    const [formState, setFormState] = useState(initialState)

    const handleChange = (e) => {
        setFormState({...formState, [e.target.id]: e.target.value})
        console.log(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formState)

        // await axios.post("https://nebula-nav-api.vercel.app/comments", {formState});

        setFormState(initialState)
    }

    return (
        <div id="submit-comment-box" className="hidden">
            <form onSubmit={handleSubmit}>
                <div className="submit-comment-title">Submit Comment</div>
                <div>Sender:</div>
                <input className="sender-input" id="sender" type="text" placeholder="Name" onChange={handleChange} value={formState.sender}/>
                <div>Comment:</div>
                <input className="comment-input" id="content" type="text" placeholder="Comment Here" onChange={handleChange} value={formState.content}/>
                <button className="comment-submit" type="submit">Submit</button>
            </form>
            {/* <div id="thankYou" class="hidden">Thank you for your comment</div> */}
            {/* <button id="closeSubmit">Close</button> */}
        </div>
    )
}

export default CommentSubmit