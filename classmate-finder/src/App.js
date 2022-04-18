import './App.css';
import Header from './components/Header';
import Profile from './components/user/Profile';
import Chat from './components/communication/Chat';
import Login from './components/user/Login';
import SignUp from './components/user/SignUp';
import ChangePassword from './components/user/ChangePassword';
import ChangeUsername from './components/user/ChangeUsername';
import ChangeEmail from './components/user/ChangeEmail';
import Preferences from './components/preferences/Preferences';
import DisplayPreferences from './components/preferences/DisplayPreferences';
import EditPreferences from './components/preferences/EditPreferences';

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
         <Route path="/chat" element={<Chat/>}></Route>
         <Route path="/profile/:id" element={<Profile/>}></Route>
         <Route path="/changepassword" element={<ChangePassword/>}></Route>
         <Route path="/changeusername" element={<ChangeUsername/>}></Route>
         <Route path="/changeemail" element={<ChangeEmail/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/signup" element={<SignUp/>}></Route>
         <Route path="/preferences" element={<Preferences/>}></Route>
         <Route path="/preferences/:id" element={<DisplayPreferences/>}></Route>
         <Route path="/editPreferences" element={<EditPreferences/>}></Route>
       </Routes>
     </Router>
     </AuthContext.Provider>
    </div>
  );
}

export default App;
