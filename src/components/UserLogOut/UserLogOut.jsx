import './UserLogOut.css'
import { logOut } from '../../utilities/users-service'
import * as userService from '../../utilities/users-service'

export default function UserLogOut({ user, setUser }) {
    function handleLogOut() {
        logOut();
        setUser(null);
        console.log(user.name)
        console.log(user.email)
    }

    return (
        <div className='UserLogOut'>
            <div>{user.name}</div>
            <div className='email'>{user.email}</div>
            <button className='btn-sm' onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

