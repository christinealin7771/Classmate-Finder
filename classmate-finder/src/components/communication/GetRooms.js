import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import {useParams} from "react-router-dom"
import {useNavigate} from 'react-router-dom'
import './Communication.css'

function GetRooms() {
    // get username from url
    const [roomList,setRoomList] = useState([]);
    let {userName} = useParams();
    let navigate = useNavigate();

    // call express API server and get rooms and store in list
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/getChatsFromName/${userName}`).then((data) => {
            setRoomList(data.data)
        });
    },[userName]);

    // call express API server on port 3001 (post) to create comment
    const APICreate = () => {
        Axios.post('http://localhost:3001/api/createRoom', {usersList: userName})
        window.location.reload(true)
    }

    // display all the rooms that user is a part of
    // should be able to click on the room and be sent to a new page with the messages
    return (
        <div className="nd">
            <div className="RoomContainer">
                <h2>Open Rooms</h2>
                <ul>
                    <p onClick={APICreate}>Create Room</p>
                    { roomList.map((val, key) => {
                        return (
                            <p onClick= {() => {(navigate(`/room/${val.chatid}`, {replace: true}))}}>{val.users}</p>
                        )})
                    }
                </ul>
            </div>
        </div>
    );
}

export default GetRooms
