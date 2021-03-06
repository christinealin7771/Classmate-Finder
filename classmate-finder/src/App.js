import './App.css';
import React from 'react'
import axios from "axios"; 
import Header from './components/Header';
import Profile from './components/user/Profile';
import Login from './components/user/Login';
import SignUp from './components/user/SignUp';
import ChangePassword from './components/user/ChangePassword';
import ChangeUsername from './components/user/ChangeUsername';
import ChangeEmail from './components/user/ChangeEmail';
import DisplayPreferences from './components/matching/DisplayPreferences';
import EditPreferences from './components/matching/EditPreferences';
import MatchList from './components/matching/MatchList'
import CreatePost from './components/communication/CreatePost';
import CreateRoom from './components/communication/CreateRoom';
import GetRooms from './components/communication/GetRooms';
import Post from './components/communication/Post';
import Room from './components/communication/Room';
import UpdatePost from './components/communication/UpdatePost';
import GetPosts from './components/communication/GetPosts';
import Welcome from './components/Welcome';

import { AuthContext } from './AuthContext';
import { useState, useEffect } from 'react';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [authState, setAuthState] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('accessToken')){
      setAuthState(true)
    }
  }, [])

  return (
    <div className="App">
      <AuthContext.Provider value={{authState, setAuthState}}>
      <Router>
      <Header/>
       <Routes>
          <Route path="/" element={<Welcome/>}></Route>
         <Route path="/profile/:id" element={<Profile/>}></Route>
         <Route path="/changepassword" element={<ChangePassword/>}></Route>
         <Route path="/changeusername" element={<ChangeUsername/>}></Route>
         <Route path="/changeemail" element={<ChangeEmail/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/signup" element={<SignUp/>}></Route>
         <Route path="/preferences/:id" element={<DisplayPreferences/>}></Route>
         <Route path="/editPreferences/:id" element={<EditPreferences/>}></Route>
         <Route path="/Matches/:id" element={<MatchList/>}></Route>
         <Route path="/rooms/:userName" element={<GetRooms />} />
         <Route path="/createroom" element={<CreateRoom />}/>
         <Route path="/room/:roomId" element={<Room />}/>
         <Route path="/posts/" element={<GetPosts />} />
         <Route path="/post/:postId" element={<Post />} />
         <Route path="/createpost/" element={<CreatePost />} />
         <Route path="/updatepost/:postId" element={<UpdatePost />} />
       </Routes>
     </Router>
     </AuthContext.Provider>
    </div>
  );
}

export default App;