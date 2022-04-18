import React from 'react'
import './Match.css' 
import { useNavigate } from 'react-router-dom';
import { yearOptions, majorOptions} from './PreferenceOptions';
import jwt_decode from "jwt-decode";

export default function Match({match}) {

  let navigate = useNavigate();

  async function startChat() {
    const token = localStorage.getItem('accessToken')
    const decoded = jwt_decode(token);
    console.log("hello")
    navigate(`/rooms/${decoded.username}`, {replace:true})
  }
  
  return (
    <div className = "match">
      <div className='matchText'> 
        <label>{match.name} </label>
        <br></br>
        <label>{yearOptions[match.year]} </label>
        <br></br>
        <label> {majorOptions[match.major]} Major</label>
        <br></br>
        <label> Match Score: {match.matchScore} </label>
      </div> 
      
      <button onClick = { startChat }> Chat with {match.name} </button>
      
    </div>
  )
}
