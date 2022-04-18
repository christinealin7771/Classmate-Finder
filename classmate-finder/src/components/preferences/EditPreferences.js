import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import './Preferences.css'
import jwt_decode from 'jwt-decode'; 
import { yearOptions, majorOptions, personalityOptions, studyHabitOptions, studyTimeOptions } from './PreferenceOptions';


const EditPreferences = () => {
  let navigate = useNavigate();
  let {id} = useParams();
 
  const [year, setYear] = useState("");
  const [major, setMajor] = useState("");
  const [personality, setPersonality] = useState("");
  const [studyHabit, setStudyHabit] = useState("");
  const [studyTime, setStudyTime] = useState("");

  useEffect (() => {
    axios.get(`http://localhost:3001/preferences/${id}`).then((response)=>{
      setYear(response.data[0].year);
      setMajor(response.data[0].major);
      setStudyHabit(response.data[0].studyHabit)
      setPersonality(response.data[0].personality);
      setStudyTime(response.data[0].studyTime)
    })
  }, []);

  const yearHandler = (event) => {
    setYear(event.target.value)
  }
  
  const majorHandler = (event) => {
    setMajor(event.target.value)
  }

  const personalityHandler = (event) => {
    setPersonality(event.target.value)
  }

  const studyHabitHandler = (event) => {
    setStudyHabit(event.target.value)
  }

  const studyTimeHandler = (event) => {
    setStudyTime(event.target.value)
  }

  const onSubmit = () => {
    const token = localStorage.getItem('accessToken'); 
    const decoded = jwt_decode(token);

    const data = {
      year: year,
      major: major,
      personality: personality,
      studyHabit: studyHabit,
      studyTime: studyTime,
      UserId: decoded.id
    }
    console.log(data);
    axios.put("http://localhost:3001/preferences/updatePreference", data, {
        headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
    }).then((response) => {
        if(response.data.error){
            alert(response.data.error)
        }
        else {
            navigate(`/preferences/${decoded.id}`, {replace: true});
        }
    })
  }
  
  useEffect(() => {
    var yearSelect = document.getElementById('year-select');  
    generateSelect(yearSelect, yearOptions); 

    var majorSelect = document.getElementById('major-select'); 
    generateSelect(majorSelect, majorOptions); 

    var personalitySelect = document.getElementById('personality-select'); 
    generateSelect(personalitySelect, personalityOptions); 

    var studyHabitSelect = document.getElementById('studyHabit-select'); 
    generateSelect(studyHabitSelect, studyHabitOptions); 
    
    var studyTimeSelect = document.getElementById('studyTime-select'); 
    generateSelect(studyTimeSelect, studyTimeOptions); 
  }, [])

  const generateSelect = (selectEl, options) => {
    for (var optVal in options) {
      var opt = document.createElement('option'); 
      opt.value = optVal; 
      opt.textContent = options[optVal]; 
      selectEl.appendChild(opt);
    }
  }

  return(
    <div className="preferenceForm">
    
    <form> 
        <h1 userName="preference">Edit Preference Form</h1>
        <label for="year">Class year: </label>
        <select 
          name="year-select" 
          id="year-select" 
          onChange={yearHandler}
          value={year}
        > 
          <options>---</options>
        </select>

        <br></br>
        <br></br>

        <label for="major">Major: </label>
        <select 
          name="major-select" 
          id="major-select" 
          onChange={majorHandler}
          value={major}
        > 
          <options>---</options>
        </select>

        <br></br>
        <br></br>

        <label for="personality">Personality: </label>
        <select 
          name="personality-select" 
          id="personality-select" 
          onChange={personalityHandler}
          value={personality}
        > 
         <options>---</options>
        </select>

        <br></br>
        <br></br>

        <label for="studyHabit">Study Habits: How much before a test do you start studying for it? </label>
        <select 
          name="studyHabit-select" 
          id="studyHabit-select" 
          onChange={studyHabitHandler} >
          value={studyHabit}
          <options>---</options>
        </select>
       
        <br></br>
        <br></br>

        <label for="studyTime"> Study Time: </label>
        <select 
          name="studyTime-select" 
          id="studyTime-select" 
          onChange={studyTimeHandler}
          value={studyTime}
        > 
          <options>---</options>
        </select>

      </form>
        <br></br>
        <br></br> 

        <button onClick={onSubmit}>Update Preference</button>
    </div>
  )

}

export default EditPreferences
