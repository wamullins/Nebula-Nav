import React, { useState } from 'react';
import axios from "axios";

const CommentSubmit = ({ objectId }) => {
    
    const initialState = {
        sender: '',
        content: '',
        object: objectId,
    };

    const [formState, setFormState] = useState(initialState);

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formState);

        await axios.post("https://nebula-nav-api.vercel.app/comments", formState);

        setFormState(initialState);
    };

    const formContainerStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        marginLeft:'100px',
        borderRadius: '8px',
        
        fontFamily: 'Gravitas One', 
    };

    const inputStyles = {
        width: '190%',
        padding: '8px',
        marginBottom: '10px',
        borderRadius: '4px',
        border: '0.3vmin solid rgb(255, 255, 255)',
        borderRadius: '10px',
        backgroundColor: 'transparent'
        
    };

    const buttonStyles = {
        backgroundColor: 'transparent',
        color: 'white',
        padding: '10px 20px',
       
        borderRadius: '4px',
        cursor: 'pointer',
    };

    return (
        <div id="submit-comment-box" className="hidden">
            <form onSubmit={handleSubmit} style={formContainerStyles}>
                <div className="submit-comment-title">Add a Comment</div>
                <div>Sender:</div>
                <input className="sender-input" id="sender" type="text" placeholder="Name"
                    onChange={handleChange} value={formState.sender} style={inputStyles}/>
                <div>Comment:</div>
                <input className="comment-input" id="content" type="text" placeholder="Comment Here" onChange={handleChange} value={formState.content} style={inputStyles}/>
                <button className="comment-submit" type="submit" style={buttonStyles}>
                    Submit
                </button>
            </form>
            {/* <div id="thankYou" class="hidden">Thank you for your comment</div> */}
            {/* <button id="closeSubmit">Close</button> */}
        </div>
    );
};

export default CommentSubmit;
