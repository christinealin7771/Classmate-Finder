import './App.css';
import React from 'react'
import axios from "axios"; 
import Header from './components/Header';
import Profile from './components/user/Profile';
import Chat from './components/communication/Chat';
import AddPreferences from './components/preferences/Preferences';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header/>
       <Routes>
         <Route path="/chat" element={<Chat/>}></Route>
         <Route path="/profile" element={<Profile/>}></Route>
         <Route path="/preferences" element={<AddPreferences/>}></Route>
       </Routes>
     </Router>
   
    </div>
  );
}

export default App;