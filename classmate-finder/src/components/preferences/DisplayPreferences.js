import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import './DisplayPreferences.css'

const DisplayPreferences = () => {
    let navigate = useNavigate()
    let {id} = useParams();

    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [major, setMajor] = useState("");
    const [studyHabit, setStudyHabit] = useState("");
    const [personality, setPersonality] = useState("");
    const [timeStudy, setStudyTime] = useState("");

    useEffect (() => {
        axios.get(`http://localhost:3001/preferences/${id}`).then((response)=>{
            console.log(response.data[0])
          setName(response.data[0].name);
          setYear(response.data[0].year);
          setMajor(response.data[0].major);
          setStudyHabit(response.data[0].studyHabit)
          setPersonality(response.data[0].personality);
          setStudyTime(response.data[0].timeStudy);
          
          
        })
      }, [])

  return (
    <div className = "preferenceForm">
        <h1>Hello: {name}</h1>
        <h3>Year: {year}</h3>
        <h3>Major: {major}</h3>
        <h3>Study Habit: {studyHabit}</h3>
        <h3>Personality: {personality}</h3>
        <h3>Study Time: {timeStudy}</h3>
        <button onClick={() => {navigate("/editPreferences", {replace:true})}}>Update Preference Form</button>
       

        

    </div>
  )
}

export default DisplayPreferences