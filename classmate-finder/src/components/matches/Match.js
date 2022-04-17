import React from 'react'
import { useHistory } from 'react-router-dom'

const startChat = () => {
  history.pushState(`/room/${val.chatid} - ${userName}`)
}

export default function Match({match}) {
  let history = useHistory(); 

  return (
    <div>
      <label>{match.name}</label> 
      <label> {match.year} </label>
      <label> {match.major} </label>
      
      <button onClick = { startChat }> Chat with Match </button>
      <br></br>
    </div>
  )
}
