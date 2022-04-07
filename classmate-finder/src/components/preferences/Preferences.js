import React, {useState} from 'react'
import {Navigate} from 'react-router-dom'
//import { data } from '../data/data'
import './AddPreferences.css'

const AddPreferences = () => {
  //let navigate = useNavigate();

  const [grade, setGrade] = useState('')
  const [major, setMajor] = useState('')
  
  
  const gradeHandler = (event) => {
    setGrade(event.target.value);
  }

  const majorHandler = (event) => {
    setMajor(event.target.value);
  }

  /*const addPreferencesHandler = (event) => {
    data.push({
      major: major

    })
    navigate("../", ({replace:true}));
  }*/

  return(
    <div className="Preference Form">
        <h1 userName="academic Specific">Academic Specifics</h1>
        <label>Class year </label>
        <input onChange={gradeHandler}></input>
        <div></div>
        <label>Major </label>
        <input onChange={majorHandler}></input>
        <div></div>
        
    </div>
  )

}

export default AddPreferences