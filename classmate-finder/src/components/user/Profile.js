import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Profile.css'
import { AuthContext } from '../../AuthContext'


import axios from 'axios'

const Profile = () => {
  let navigate = useNavigate()
  let {id} = useParams();
  const {setAuthState} = useContext(AuthContext)
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  // const {authState} = useContext(AuthContext)

  useEffect (() => {
    axios.get(`http://localhost:3001/users/basicinfo/${id}`).then((response)=>{
      setUsername(response.data.username);
      setName(response.data.name)
      setEmail(response.data.email)
    })
  }, [])

  const deleteAccount = () => {
    axios.delete(`http://localhost:3001/users/deleteUser/${id}`, {
      headers: { accessToken: localStorage.getItem("accessToken") },
    }).then((response)=> {
      if(response.data.error)
      {
        alert(response.data.error)
      }
      localStorage.removeItem("accessToken");
      setAuthState(false)
      navigate("/login", {replace: true});
    
    })
  }

  return (
    <div className="profile">
      <h1>Hello {name}</h1>
      <button onClick={() => {navigate("/changepassword", {replace: true})}} >Change Password</button>
      
      <div className="basicInfo">
        <h3>Username: {username}</h3>
        <button onClick={() => {navigate("/changeusername", {replace:true})}}>Change Username</button>
        <h3>Email: {email}</h3>
        <button onClick={() => {navigate("/changeemail", {replace:true})}}>Change Email</button>
        <button onClick ={deleteAccount}>Delete Account</button>
      </div>

      
      
    </div>
  )
}

export default Profile