import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import {useParams} from "react-router-dom"
import {useSearchParams} from "react-router-dom"
import {useNavigate} from 'react-router-dom'
import './Communication.css'

function GetPosts() {
    const [postList,setPostsList] = useState([]);
    let navigate = useNavigate();

    // call express API server and get posts and store in list
    useState(() => {
        Axios.get(`http://localhost:3001/api/getPosts`).then((data) => {
            setPostsList(data.data)
        });
    },);

    // display all the posts ordered by time of creation
    // should be able to click on the post and be sent to detailed post
    return (
        <div className="nd">
            <div className="PostsContainer">
                <button className="buttongr" onClick = {() => { navigate("/createpost", {replace: true}) }}>Create Post</button>
                <h1>Social Posts</h1>
                <ul>
                    { postList.map((val, key) => {
                        let time = val.scheduledtime.split('T')[0];
                        return (
                            <div className="Posts">
                                <h2>{val.title}</h2> 
                                <p>@{val.location} on {time}</p>
                                <p className="link" onClick= {() => {navigate(`/post/${val.postid}`, {replace: true})}}>Read More</p>
                            </div>
                        )})
                    }
                </ul>
            </div>
        </div>
    );
}

export default GetPosts
