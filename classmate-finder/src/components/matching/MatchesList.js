import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import Match from './Match'

const MatchesList = () => {
  let { id } = useParams(); 
  const [allPreferences, setAllPreferences] = useState([]); 

  const [major, setMajor] = useState(""); 
  const [year, setYear] = useState(0); 
  const [personality, setPersonality] = useState(0); 
  const [studyHabit, setStudyHabit] = useState(0);
  const [studyTime, setStudyTime] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:3001/preferences/${id}`).then((response) => {
      setMajor(response.data[0].major); 
      setYear(parseInt(response.data[0].year.charAt(0),10));  
      setPersonality(parseInt(response.data[0].personality.charAt(0),10)); 
      setStudyHabit(parseInt(response.data[0].studyHabit.charAt(0),10)); 
      setStudyTime(parseInt(response.data[0].studyTime.charAt(0,10))); 
    })
  }, [])
  useEffect(() => {
    axios.get("http://localhost:3001/preferences/all").then((response) => {
      console.log(response.data);

      setAllPreferences(response.data); 
      var length = allPreferences.length; 
      for (var i = 0; i <length; i++) {
        console.log(allPreferences.at[i])
        var sum = 0; 
        if (allPreferences[i].major !== major) {
          allPreferences.splice(i,1); 
          length--; 
          continue; 
        }
        if (parseInt(allPreferences[i].year.charAt(0)) !== 0) {
          sum += Math.abs((year - parseInt(allPreferences[i].year.charAt(0))));
        }
        if (parseInt(allPreferences[i].personality.charAt(0)) !== 0) {
          sum += Math.abs((personality - parseInt(allPreferences[i].personality.charAt(0))));
        }
        if (parseInt(allPreferences[i].studyHabit.charAt(0)) !== 0) {
          sum += Math.abs((studyHabit - parseInt(allPreferences[i].studyHabit.charAt(0))));
        }
        if (parseInt(allPreferences[i].studyTime.charAt(0)) !== 0) {
          sum += Math.abs((studyTime - parseInt(allPreferences[i].studyTime.charAt(0))));
        }
        allPreferences[i].matchScore = sum;  
      }
      allPreferences.sort(function(a, b) {
        return a.matchScore - b.matchScore; 
      })
    });
  }, []);
  
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

export default MatchesList