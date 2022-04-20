import React,{useEffect,useState} from 'react'
import {useParams, useNavigate} from "react-router-dom"
import Axios from 'axios'
import './Communication.css'
import jwt_decode from "jwt-decode";

function Room() {
    const [messageList,setMessageList] = useState([])
    const [msg, setMessage] = useState("");
    const [user, setUser] = useState("");
    const [added, setAdded] = useState("");
    let {roomId} = useParams();
    let username = jwt_decode(localStorage.getItem('accessToken')).username;
    let navigate = useNavigate();

    // get username from parameters (url)

    // call express API server and get messages from ID
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/getMessagesFromID/${roomId}`).then((data) => {
            setMessageList(data.data);
        });
    },[roomId]);

    // call express API server on port 3001 (post) to create message
    const APIPost = () => {
        
        Axios.post('http://localhost:3001/api/createMessage', {userName: username, message: msg, chatID: roomId})
        window.location.reload(true)
    }

    // call express API server to add user
    const APIAdd = () => {
        if (/^[A-Za-z0-9]*$/.test(added)) {
            Axios.get(`http://localhost:3001/api/getTitle/${roomId}`).then((data) => {
                let usertmp = data.data.users + ", " + added;
                Axios.post('http://localhost:3001/api/updateRoom', {userName: usertmp, chatID: roomId})
                window.location.reload(true)
            })
        }
    }

    return (
        // print messages and send messages
        <div className="nd">
            <div className="MessageContainer">
                <h1 className="room-name">Room {roomId}</h1>
                <input id="smtextbox" placeholder="Username" onChange = { (e) => {setAdded(e.target.value)}}></input>
                <button className="buttonsm" onClick = { APIAdd }>Add to Group</button>
                <br></br><br></br>
                <hr></hr>
                { messageList.map((val, key) => {
                    return (
                        <div className="Message">
                            <p className="textmsg"><b>{val.username} : </b>{val.message} | {val.timestamp}</p>
                        </div>
                    )})
                }
                <br></br>
                <textarea id="textbox" onChange = { (e) => {setMessage(e.target.value)}}/>
                <button className="buttonlg" onClick = {APIPost}>Send Message</button>
                <hr></hr>
                <button className="button" onClick= {() => {(navigate(`/rooms/${username}`, {replace:true}))}}>Go Back</button>
            </div>
        </div>
    );
}

export default Room
