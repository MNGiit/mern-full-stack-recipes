import React from 'react';
import {useState} from 'react';
// import * as usersService from '../utilities/users-service';
// import * commentsAPI from '../utilities/comments-api';

function CommentForm({setUser}) {
    const [content, setContent] = useState("");

    const [error, setError] = useState('');

    const handleContentChange = (e) => {setContent(e.target.value);};


    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent form from being submitted to server

        try{
            //
            // const user = await usersService.login({email, password});
            // setUser(user.data);
            // setComment(content, user) // or get user from token
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>Content</label>
                <input type="textarea" name="content" onChange={(e) =>{return handleContentChange(e);}} value={content} required />

                <button type="submit">Create Comment</button>
            </form>
        </div>
    )
}

export default CommentForm;