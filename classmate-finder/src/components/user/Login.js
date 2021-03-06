import React, {useState, useContext, useEffect} from 'react'
// import { useEffect } from 'react'
import './Login.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../AuthContext'
import jwt_decode from "jwt-decode";

const Login = () => {

 
  let navigate = useNavigate();
  const {setAuthState} = useContext(AuthContext)
  const[username, setUsername] = useState("")
  const[password, setPassword] = useState("")
  const[id, setId] = useState(0)

  const [allUsers, setallUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/users/all").then((response) => {
      setallUsers(response.data);
      //console.log(allUsers); 
    });
  }, []);


  const usernameHandler = (event) => {
    setUsername(event.target.value)
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value)
  }


  const login = () => {
    const data = {
      username: username,
      password: password,
    }
    axios.post("http://localhost:3001/users/login", data).then((response) => {
      if(response.data.error){
        alert(response.data.error);
      } 
      else {
        localStorage.setItem("accessToken", response.data)
        setAuthState(true)
        const token = localStorage.getItem('accessToken')
        const decoded = jwt_decode(token);
        
        navigate(`/profile/${decoded.id}`, {replace: true});
        
      }
    })

  }

  return (
    <div className="loginContainer">
        <h1>Login</h1>
          <label>Username</label>
          <input type="text" onChange={usernameHandler}/>
          <label>Password</label>
          <input type="password" onChange={passwordHandler}/>
        
          <button onClick={login}>Log In</button> 
          {/* <button onClick={() => {
            login();
            findId()
          }}>Log In</button>  */}
        
    </div>
  )
}

export default Login