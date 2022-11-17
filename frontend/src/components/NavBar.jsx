import React from 'react';
import {Link} from 'react-router-dom';
import * as userService from '../utilities/users-service';
import LogOutButton from './LogOutButton';

const NavBar = ({user, setUser}) => {
    // const handleShow = () => setShow(true);
    const handleLogOut = () => {
        userService.logOut(); // Call logout
        setUser(null); // Set user to null
    };

    return (
        <div>
            <nav>
                Home | Recipes |
                <LogOutButton user={user} setUser={setUser} />
            </nav>
        </div>
    )
}

export default NavBar;