import React from 'react'
import './Match.css' 
import { yearOptions, majorOptions, personalityOptions, studyHabitOptions, studyTimeOptions } from './PreferenceOptions';


const startChat = () => {

}

export default function Match({match}) {

  return (
    <div className = "match">
      <h1>Most Compatible matches</h1>
      <h3>{match.name}</h3> 
      <h3> {match.year} </h3>
      <h3> {match.major} </h3>
      
      <button onClick = { startChat }> Chat with Match </button>
      <br></br>
    </div>
  )
}
