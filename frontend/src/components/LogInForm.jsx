import React from 'react';
import {useState} from 'react';
import * as usersService from '../utilities/users-service';

function LogInForm({setUser}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState('');

    const handleEmailChange = (e) => {setEmail(e.target.value);};
    const handlePasswordChange = (e) => {setPassword(e.target.value);};

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent form from being submitted to server

        try{
            //
            const user = await usersService.login({email, password});
            setUser(user.data);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" name="email" onChange={(e) =>{return handleEmailChange(e);}} value={email} required />
                <input type="password" name="password" onChange={(e) =>{return handlePasswordChange(e);}} value={password} required />

                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default LogInForm;