import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import Match from './Match'
import './MatchList.css'
import jwt_decode from 'jwt-decode'; 


const MatchList = () => {
  let { id } = useParams(); 
  const [allPreferences, setAllPreferences] = useState([]); 
  var filteredPreferences = []; 

  const [major, setMajor] = useState(""); 
  const [year, setYear] = useState(0); 
  const [personality, setPersonality] = useState(0); 
  const [studyHabit, setStudyHabit] = useState(0);
  const [studyTime, setStudyTime] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3001/preferences/all").then((response) => {
      setAllPreferences(response.data); 
    })
    axios.get(`http://localhost:3001/preferences/${id}`).then((response) => {
      setMajor(response.data[0].major); 
      setYear(parseInt(response.data[0].year.charAt(0),10));  
      setPersonality(parseInt(response.data[0].personality.charAt(0),10)); 
      setStudyHabit(parseInt(response.data[0].studyHabit.charAt(0),10)); 
      setStudyTime(parseInt(response.data[0].studyTime.charAt(0,10))); 
    })
  }, [])

  function createMatches() {
    var length = allPreferences.length; 
    const token = localStorage.getItem('accessToken'); 
    const decoded = jwt_decode(token);

    for (var i = 0; i <length; i++) {
      var sum = 0; 
      if (allPreferences[i].major !== major | allPreferences[i].UserId === decoded.id) { 
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

        var diff = Math.abs((studyTime - parseInt(allPreferences[i].studyTime.charAt(0))));
        if (diff > 4) diff = 8 - diff; 
        sum += diff;
      }
      filteredPreferences.push(allPreferences[i]); 
      filteredPreferences[filteredPreferences.length - 1].matchScore = sum; 
    }
    
    filteredPreferences.sort(function(a, b) {
      return a.matchScore - b.matchScore;
    })
  }
  
  return (
    <div className = "matchlist">
    
    {createMatches()}
    <h1>Most Compatible Matches</h1>
    <label> (Note: A lower match score means higher compatability.)</label>
    <br></br>
      {
        filteredPreferences.map(match => {
          return <Match key={match.id} match={match} />
        })
      }
    </div>
    
  )
}

export default MatchList