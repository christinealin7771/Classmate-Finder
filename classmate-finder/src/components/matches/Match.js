import React from 'react'

const startChat = () => {

}

export default function Match({match}) {

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
