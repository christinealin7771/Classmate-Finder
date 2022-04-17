import {React, useState} from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css'
import CreateRoom from './pages/CreateRoom';
import GetRooms from './pages/GetRooms';
import Room from './pages/Room';
import GetPosts from './pages/GetPosts';
import Post from './pages/Post';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';

const App = () => {
  let [usr, setUsr] = useState("")
  return (
    <div>
      <Router>
        <Route path="/rooms/:userName" exact render={(props) => <GetRooms />} />
        <Route path="/createroom" render={(props)=> <CreateRoom />} />
        <Route path="/room/:roomId" render={(props)=> <Room />}/>
        <Route path="/posts/" exact render={(props)=> <GetPosts />} />
        <Route path="/post/:postId" exact render={(props)=> <Post />} />
        <Route path="/createpost/" exact render={(props)=> <CreatePost />} />
        <Route path="/updatepost/:postId" exact render={(props)=> <UpdatePost />} />
      </Router>
    </div>
  );
}

export default App;

