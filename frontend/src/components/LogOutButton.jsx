// import {logOut} from '../../utilities/users-service';
import {logOut} from '../utilities/users-service';

export default function UserLogOut({user, setUser}) {
    function handleLogOut() {
        logOut();
        setUser(null);
    }

    return (
        <div>
            {/* <div>{user.newUser.name}</div> */}
            <button onClick={handleLogOut}>Log out</button>
        </div>
    );
}