import React, {useState} from 'react'
import './ChangePassword.css'
import axios from 'axios'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'


const ChangePassword = () => {
    let navigate = useNavigate();

    const[currentPassword, setCurrentPassword] = useState("")
    const[newPassword, setNewPassword] = useState("")

    const currentPasswordHandler = (event) => {
        setCurrentPassword(event.target.value)
    }

    const newPasswordHandler = (event) => {
        setNewPassword(event.target.value)
    }

    const changePassword = () => {
        const data = {
            currentPassword: currentPassword,
            newPassword: newPassword,
        }
        axios.put("http://localhost:3001/users/changepassword", data, {
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
    <div className="password">
        <h1>Change Your Password</h1>
        <label>Current Password</label>
        <input type="text" placeholder= "Current Password..."  onChange={currentPasswordHandler}/>
        <label>New Password</label>
        <input type="text" placeholder= "New Password..."  onChange={newPasswordHandler}/>
        <button onClick={changePassword}>Save Changes</button>
    </div>
  )
}

export default ChangePassword