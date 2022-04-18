import React, {useState} from 'react'
import axios from 'axios'
import './ChangeUsername.css'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'

const ChangeUsername = () => {
    let navigate = useNavigate()
    const [newUsername, setNewUsername] = useState("")

    const newUsernameHandler = (event) => {
        setNewUsername(event.target.value)
    }

    const changeUsername = () => {
        const data = {
            newUsername: newUsername,
            
        }
        axios.put("http://localhost:3001/users/changeusername", data, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((response) => {
            if(response.data.error){
                alert(response.data.error)
            }
            else {
                const token = localStorage.getItem('accessToken')
                const decoded = jwt_decode(token);
                navigate(`/profile/${decoded.id}`, {replace: true});

            }
        })
    }



  return (
    <div className= "username">
        <h1>Change Your Username</h1>
        <label>New Username</label>
        <input type="text" placeholder='New Username' onChange={newUsernameHandler}></input>
        <button onClick = {changeUsername}>Save Changes</button>
       
    </div>
  )
}

export default ChangeUsername