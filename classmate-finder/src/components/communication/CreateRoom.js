import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { Button } from 'react-bootstrap'
import {useParams} from "react-router-dom"
import './Communication.css'

function CreateRoom() {
    const [users,setUsers] = useState("");

    // call express API server on port 3001 (post)
    const APIPost = () => {
        Axios.post('http://localhost:3001/api/createRoom', {usersList: users})
    }

    return (
        // get input for the API post 
        <div className="nd">  
            <div className="GroupCreator">
                <label>Users (..., ..., ...): </label>
                <input type="text" onChange = { (e) => {
                    setUsers(e.target.value)
                }}/>
                <button onClick = { APIPost }>Create Chatroom</button>
            </div>
        </div>
    )
}

export default CreateRoom