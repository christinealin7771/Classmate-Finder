import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import Match from './Match'

export default function MatcheList() {
  let { id } = useParams(); 
  const [allPreferences, setAllPreferences] = useState([]); 

  const [major, setMajor] = useState(""); 
  const [year, setYear] = useState(""); 
  const [personality, setPersonality] = useState(""); 
  const [studyHabit, setStudyHabit] = useState("");
  const [studyTime, setStudyTime] = useState("");

  useEffect(() => {
    axios.get('http://localhost:3001/preferenecs/byId/${id}').then((response) => {
      setMajor(response.data.major); 
      setYear(parseInt(response.data.year.charAt(0))); 
      setPersonality(response.data.personality); 
      setStudyHabit(response.data.studyHabit); 
      setStudyTime(response.data.studyTime); 
    })
  }, [])

  useEffect(() => {
    console.log("hitttt"); 
    axios.get("http://localhost:3001/prefereneces").then((response) => {
      
    console.log("hittsssssttt"); 
      setAllPreferences(response.data); 
      var length = allPreferences.length; 
      for (var i = 0; i <length; i++) {
        var sum = 0; 
        if (allPreferences[i].major !== major) {
          allPreferences.splice(i,1); 
          length--; 
          continue; 
        }
        if (parseInt(allPreferences[i].year.charAt(0)) != 0) {
          sum += Math.abs((year - parseInt(allPreferences[i].year.charAt(0))));
        }
        if (parseInt(allPreferences[i].personality.charAt(0)) != 0) {
          sum += Math.abs((personality - parseInt(allPreferences[i].personality.charAt(0))));
        }
        if (parseInt(allPreferences[i].studyHabit.charAt(0)) != 0) {
          sum += Math.abs((studyHabit - parseInt(allPreferences[i].studyHabit.charAt(0))));
        }
        if (parseInt(allPreferences[i].studyTime.charAt(0)) != 0) {
          sum += Math.abs((studyTime - parseInt(allPreferences[i].studyTime.charAt(0))));
        }
        allPreferences[i].matchScore = sum; 
        console.log(sum); 
      }
      allPreferences.sort(function(a, b) {
        return a.matchScore - b.matchScore; 
      })


    });
  }, []); 
; 

  

  
  return (
    <div>
      {
        allPreferences.map(match => {
          return <Match key={match.id} match={match} />
        })
      }
    </div>
    
  )
}
