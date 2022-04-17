import React, {useState, useEffect} from 'react'
import axios from "axios"

export default function MatcheList() {
  let { id } = useParams(); 
  const [allPreferences, setAllPreferences] = useState([]); 

  const [major, setMajor] = useState(""); 
  const [year, setYear] = useState(""); 
  const [personality, setPersonality] = useState(""); 
  const [studyHabit, setStudyHabit] = useState("");
  const [studyTime, setStudyTime] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/prefereneces/all").then((response) => {
      setAllPreferences(response.data)
    });
  }, []); 

  useEffect(() => {
    axios.get("http://localhost:3001/preferenecs/byId/${id}").then((response) => {
      setMajor(response.data.major); 
      setYear(response.data.year); 
      setPersonality(response.data.personality); 
      setStudyHabit(response.data.studyHabit); 
      setStudyTime(response.data.studyTime); 
    })
  }, []); 

  

  return (
    <div>
      {
        allPrefrences
      }
    </div>
    
  )
}
