import React from 'react';
import SignUpForm from '../components/SignUpForm';
import LogInForm from '../components/LogInForm';
import {useState} from 'react';

function AuthPage({setUser}) {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div>
            <h2>Determining whether to show LogInForm or SignUpForm</h2>
            {showLogin ?
                <LogInForm setUser={setUser} />
                :
                <SignUpForm setUser={setUser} />
            }
            <h3 onClick={() => setShowLogin(!showLogin)}>
                {showLogin ?
                    'Go sign up'
                    :
                    'Go log in'    
                }
            </h3>
        </div>
    )
}

export default AuthPage;