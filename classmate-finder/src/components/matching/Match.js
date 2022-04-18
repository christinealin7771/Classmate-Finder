import React from 'react'
import './Match.css' 
import { yearOptions, majorOptions} from './PreferenceOptions';

const startChat = () => {

}

export default function Match({match}) {

  return (
    <div className = "match">
      <div className='matchText'> 
        <label>{match.name} </label>
        <br></br>
        <label>{yearOptions[match.year]} </label>
        <br></br>
        <label> {majorOptions[match.major]} Major</label>
        <br></br>
        <label> Match Score: {match.matchScore}</label>
      </div> 
      
      <button onClick = { startChat }> Chat with {match.name} </button>
      
    </div>
  )
}
