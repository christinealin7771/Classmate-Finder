import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import {useParams} from "react-router-dom"
import {useNavigate} from 'react-router-dom'
import './Communication.css'

function UpdatePost() {
    let {postId} = useParams();
    const [tit,setTitle] = useState("");
    const [loc,setLocation] = useState("");
    const [bod,setBody] = useState("");
    const [sched,setTime] = useState("");

    let navigate = useNavigate();

    // call express API server on port 5051 (post)
    const APIPost = () => {
        Axios.post('http://localhost:5051/api/updatePost', {id: postId, title: tit, location: loc, body : bod, time : sched})
    }

    return (
        // get input for the API post
        <div className="nd">
            <div className="PostUpdator">
                <h1>Update Post</h1>
                <h2>Title</h2>
                <textarea id="textbox" placeholder="Enter text." onChange = { (e) => {setTitle(e.target.value)}}/>
                <h2>Location</h2>
                <textarea id="textbox" placeholder="Enter text." onChange = { (e) => {setLocation(e.target.value)}}/>
                <h2>Body</h2>
                <textarea id="textbox" placeholder="Enter text." onChange = { (e) => {setBody(e.target.value)}}/>
                <h2>Time</h2>
                <textarea id="textbox" placeholder="YYYY-MM-DD HH:MM:SS" onChange = { (e) => {setTime(e.target.value)}}/>
                <br></br>
                <button className="buttongr" onClick = { APIPost }>Update Post</button>
                <button className="button" onClick= {() => {(navigate(`/posts`, {replace: true}))}}>Go Back</button>
            </div>
        </div>
    )
}

export default UpdatePost