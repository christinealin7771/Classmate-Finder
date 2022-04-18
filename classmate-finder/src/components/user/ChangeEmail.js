import React, {useState} from 'react'
import axios from 'axios'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'

import './ChangeEmail.css'

const ChangeEmail = () => {
    let navigate = useNavigate()
    const [newEmail, setNewEmail] =useState("")
    const newEmailHandler = (event) => {
        setNewEmail(event.target.value)
    }

    const saveEmail = () => {
        const data = {
            newEmail: newEmail
        }
        axios.put("http://localhost:3001/users/changeEmail", data, {
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
    <div className="email">
        <h1>Change your Email</h1>
        <label>New Email</label>
        <input type="text" placeholder= "New Email" onChange ={newEmailHandler}></input>
        <button onClick={saveEmail}>Save Changes</button>
    </div>
  )
}

export default ChangeEmail