import React,{useEffect,useState} from 'react'
import {useParams, useNavigate} from "react-router-dom"
import Axios from 'axios'
import './Communication.css'

function Post() {
    const [detailsList,setDetailsList] = useState([])
    const [commentsList,setCommentsList] = useState([])
    const [msg, setMessage] = useState("");
    let {postId} = useParams();
    let username = "tomato";
    let author = "";

    let navigate = useNavigate();

    // call express API server and get post contents from ID
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/getPost/${postId}`).then((data) => {
            setDetailsList(data.data);
        });
        Axios.get(`http://localhost:3001/api/getCommentsFromID/${postId}`).then((data) => {
            setCommentsList(data.data);
        });
    },[postId]);

    // call express API server on port 3001 (post) to create comment
    const APIPost = () => {
        Axios.post('http://localhost:3001/api/createComment', {userName: username, message: msg, postID: postId})
        window.location.reload(true)
    }

    // call express API server on port 3001 (post) to delete post
    const APIDelete = () => {
        Axios.post('http://localhost:3001/api/deletePost', {id: postId})
        navigate(`/posts`, {replace: true});
    }

    return (
        <div className="nd">
            <div className="PostContainer">
                <div clasName="PostContent">
                    { detailsList.map((val, key) => {
                        return (
                            <div className="post">
                                <h1 className="posttitle">{val.title} hosted by {author = val.author}</h1>
                                <h2 className="locationtime">{val.location} @ {val.scheduledtime.split('T')[0]}</h2>
                                <p className="body">{val.body}</p>
                                <br></br>
                            </div>
                        )})
                    }
                    { username === author ? <button className="buttongr" onClick= {() => {(navigate(`/updatepost/${postId}`, {replace: true}))}}>Edit Post</button> : <br></br> }
                    { username === author ? <button className="buttonrd" onClick= { APIDelete }>Delete Post</button> : <p></p> }
                    <button className="button" onClick= {() => {(navigate(`/posts`, {replace: true}))}}>Go Back</button>
                </div>
                <div className="CommentContainer">
                    <h2>Comments</h2>
                    <textarea id="textbox" placeholder="Leave a comment!" onChange = { (e) => {setMessage(e.target.value)}}/>
                    <button className="buttonlg" onClick = { APIPost }>Post Comment</button>
                    { commentsList.map((val, key) => {
                        return (
                            <div className="Comment">
                                <p className="commentmsg">{val.message}<br></br><b>{val.username}</b></p>
                                <p className="invis">@ {val.timestamp}</p>
                            </div>
                        )})
                    }
                </div>
            </div>
        </div>
    );
}

export default Post
