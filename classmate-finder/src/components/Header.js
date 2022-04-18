import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { AuthContext } from '../AuthContext'
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";



const Header = () => {
    let navigate = useNavigate()
    const {authState} = useContext(AuthContext)
    const {setAuthState} = useContext(AuthContext)

    const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState(false)
        navigate("/login", {replace: true});
    }

    const profileClick = () => {
        const token = localStorage.getItem('accessToken')
        const decoded = jwt_decode(token);
        navigate(`/profile/${decoded.id}`, {replace: true});
    }

    const preferencesClick = () => {
        const token = localStorage.getItem('accessToken')
        const decoded = jwt_decode(token);
        navigate(`/preferences/${decoded.id}`, {replace: true});
    }

    const chatClick = () => {
        const token = localStorage.getItem('accessToken')
        const decoded = jwt_decode(token);
        navigate(`/rooms/${decoded.username}`, {replace: true});

    }
    const matchesClick = () => {
        const token = localStorage.getItem('accessToken')
        const decoded = jwt_decode(token);
        navigate(`/matches/${decoded.id}`, {replace: true});
    }
   
    return (
        <div className = "header">
            <h1>Classmate Finder</h1>
           
            <div className="links"> 
                
                {!authState ? (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </>
                ): (
                    <>
                       
                        {/* <Link to="/profile/:id">Profile</Link> */}
                        <Link to="/posts">Posts</Link>
                        <a onClick ={chatClick}>Messages</a>
                        <a onClick ={profileClick}>Profile</a>
                        <a onClick ={preferencesClick}>Preference Form</a>
                        <a onClick={matchesClick}>View Matches</a>
                        <button onClick={logout}>Logout</button>
                    </>
                )}
                
            </div>
        </div>
    )
}

export default Header