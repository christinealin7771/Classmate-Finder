import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import './DisplayPreferences.css'
import { yearOptions, majorOptions, personalityOptions, studyHabitOptions, studyTimeOptions } from './PreferenceOptions';
import jwt_decode from "jwt-decode";


const DisplayPreferences = () => {
  let navigate = useNavigate()
  let {id} = useParams();

  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [major, setMajor] = useState("");
  const [studyHabit, setStudyHabit] = useState("");
  const [personality, setPersonality] = useState("");
  const [studyTime, setStudyTime] = useState("");

  useEffect (() => {
      axios.get(`http://localhost:3001/preferences/${id}`).then((response)=>{
        setName(response.data[0].name);
        setYear(response.data[0].year);
        setMajor(response.data[0].major);
        setStudyHabit(response.data[0].studyHabit)
        setPersonality(response.data[0].personality);
        setStudyTime(response.data[0].studyTime);
        console.log(personality)
      })
    }, [])

  const editPreferencesClick = () => {
    const token = localStorage.getItem('accessToken')
    const decoded = jwt_decode(token);
    navigate(`/editPreferences/${decoded.id}`, {replace:true})
  }

  return (
    <div className = "preferenceDisplay">
        <h1>Hello: {name}</h1>
        <h3>Year: {yearOptions[year]}</h3>
        <h3>Major: {majorOptions[major]}</h3>
        <h3>Personality: {personalityOptions[personality]}</h3>
        <h3>Study Habit: {studyHabitOptions[studyHabit]}</h3>
        <h3>Study Time: {studyTimeOptions[studyTime]}</h3>
        <button onClick={editPreferencesClick}>Update Preference Form</button>
    </div>
  )
}

export default DisplayPreferences