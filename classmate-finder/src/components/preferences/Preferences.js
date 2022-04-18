import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import './Preferences.css'
import { useParams } from 'react-router-dom'
import jwt_decode from 'jwt-decode'; 

const Preferences = () => {

  let navigate = useNavigate();
  //let {id} = useParams(); 
 

  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [major, setMajor] = useState("");
  const [studyHabit, setStudyHabit] = useState("");
  const [personality, setPersonality] = useState("");
  const [timeStudy, setStudyTime] = useState("");
 

  /*
  useEffect(() => {
    axios.get(`http://localhost:3001/users/basicinfo/${id}`).then((response)=>{
      setUsername(response.data.username);
    })
  }, [])*/

  const nameHandler = (event) => {
    setName(event.target.value)
  }

  const yearHandler = (event) => {
    setYear(event.target.value)
  }
  
  const majorHandler = (event) => {
    setMajor(event.target.value)
  }

  const studyHabitHandler = (event) => {
    setStudyHabit(event.target.value)
  }
  
  const personalityHandler = (event) => {
    setPersonality(event.target.value)
  }

  const studyTimeHandler = (event) => {
    setStudyTime(event.target.value)
  }

  const onSubmit = () => {
    const token = localStorage.getItem('accessToken'); 
    const decoded = jwt_decode(token);

    const data = {
      name: name,
      year: year,
      major: major,
      personality: personality,
      studyHabit: studyHabit,
      timeStudy: timeStudy,
      UserId: decoded.id
    }
    console.log(data);
    axios.post("http://localhost:3001/preferences", data).then(() => {
      console.log(data);
      navigate(`/profile/${decoded.id}`, {replace: true});
    })
    
  }

  return(
    <div className="preferenceForm">

    <form> 
        <h1 userName="preference">Preference Form</h1>
        <label for="name">Name</label>
        <input type="text" onChange={nameHandler} placeholder="(first and last name)"></input>
        <br></br>
        <br></br>
        <label for="year">Class year: </label>
        <select 
          name="year" 
          id="year" 
          onChange={yearHandler}
        > 
          <option label=" "></option>
          <option value="1freshman"> Freshman (1st year)</option>
          <option value="2sophomore"> Sophomore (2nd year)</option>
          <option value="3junior"> Junior (3rd year)</option>
          <option value="4senior"> Senior (4th year)</option>
          <option value="5super-senior"> Super-senior (4th year+)</option>
        </select>
        <br></br>
        <br></br>
        <label for="major">Major: </label>
        <select name="major" id="major" onChange={majorHandler}> 
          <option label=" "></option>
          <option value="accounting"> Accounting</option>
          <option value="advertising"> Advertising</option>
          <option value="aerospace engineering"> Aerospace Engineering</option>
          <option value="african languages"> African Languages</option>
          <option value="african-american studies"> African-American Studies</option>
          <option value="agricultural education and communication"> Agricultural Education and Communication</option>
          <option value="agricultural operations management"> Agricultural Operations Management</option>
          <option value="animal sciences"> Animal Sciences</option>
          <option value="anthropology"> Anthropology</option>
          <option value="applied physiology and kinesiology"> Applied Physiology and Kinesiology</option>
          <option value="arabic"> Arabic</option>
          <option value="architecture"> Architecture</option>
          <option value="art history"> Art History</option>
          <option value="art "> Art </option>
          <option value="astronomy and astrophysics"> Astronomy and Astrophysics</option>
          <option value="biological engineering"> Biological Engineering</option>
          <option value="biology "> Biology </option>
          <option value="botany"> Botany</option>
          <option value="chemical engineering"> Chemical Engineering</option>
          <option value="chemistry | biochemistry"> Chemistry | Biochemistry</option>
          <option value="chinese"> Chinese</option>
          <option value="civil engineering"> Civil Engineering</option>
          <option value="classical studies"> Classical Studies</option>
          <option value="communication sciences and disorders"> Communication Sciences and Disorders</option>
          <option value="computer engineering"> Computer Engineering</option>
          <option value="computer science "> Computer Science </option>
          <option value="construction management"> Construction Management</option>
          <option value="criminology"> Criminology</option>
          <option value="dance "> Dance </option>
          <option value="data science"> Data Science</option>
          <option value="dietetics"> Dietetics</option>
          <option value="digital arts and sciences "> Digital Arts and Sciences </option>
          <option value="disabilities in society specialization"> Disabilities in Society Specialization</option>
          <option value="dual languages"> Dual Languages</option>
          <option value="economics"> Economics</option>
          <option value="education sciences"> Education Sciences</option>
          <option value="education | unified early childhood education proteach | pre-k-grade 3"> Education | Unified Early Childhood Education ProTeach | Pre-K-Grade 3</option>
          <option value="educational psychology and research"> Educational Psychology and Research</option>
          <option value="educational technology"> Educational Technology</option>
          <option value="electrical engineering"> Electrical Engineering</option>
          <option value="elementary education | grades k-6"> Elementary Education | Grades K-6</option>
          <option value="emergency management"> Emergency Management</option>
          <option value="emergency medical services management"> Emergency Medical Services Management</option>
          <option value="engineering | exploring engineering studies"> Engineering | Exploring Engineering Studies</option>
          <option value="english"> English</option>
          <option value="entomology and nematology"> Entomology and Nematology</option>
          <option value="environmental engineering"> Environmental Engineering</option>
          <option value="environmental management in agriculture and natural resources | interdisciplinary studies"> Environmental Management in Agriculture and Natural Resources | Interdisciplinary Studies</option>
          <option value="environmental science"> Environmental Science</option>
          <option value="family, youth and community sciences"> Family, Youth and Community Sciences</option>
          <option value="finance"> Finance</option>
          <option value="fire management"> Fire Management</option>
          <option value="food and resource economics"> Food and Resource Economics</option>
          <option value="food science"> Food Science</option>
          <option value="foreign languages and literatures"> Foreign Languages and Literatures</option>
          <option value="forest resources and conservation"> Forest Resources and Conservation</option>
          <option value="french and francophone studies"> French and Francophone Studies</option>
          <option value="general studies"> General Studies</option>
          <option value="geographical science and sustainability "> Geographical Science and Sustainability </option>
          <option value="geography"> Geography</option>
          <option value="geology"> Geology</option>
          <option value="geomatics"> Geomatics</option>
          <option value="german"> German</option>
          <option value="graphic design"> Graphic Design</option>
          <option value="health education and behavior"> Health Education and Behavior</option>
          <option value="health science"> Health Science</option>
          <option value="hebrew"> Hebrew</option>
          <option value="hispanic and latin american languages, literatures and linguistics"> Hispanic and Latin American Languages, Literatures and Linguistics</option>
          <option value="history"> History</option>
          <option value="horticultural science"> Horticultural Science</option>
          <option value="industrial and systems engineering"> Industrial and Systems Engineering</option>
          <option value="information systems"> Information Systems</option>
          <option value="interdisciplinary studies | clas"> Interdisciplinary Studies | CLAS</option>
          <option value="interior design"> Interior Design</option>
          <option value="international studies"> International Studies</option>
          <option value="italian"> Italian</option>
          <option value="japanese"> Japanese</option>
          <option value="jewish studies"> Jewish Studies</option>
          <option value="journalism"> Journalism</option>
          <option value="landscape architecture | 5-year professional program"> Landscape Architecture | 5-Year Professional Program</option>
          <option value="linguistics"> Linguistics</option>
          <option value="management"> Management</option>
          <option value="marine sciences"> Marine Sciences</option>
          <option value="marketing"> Marketing</option>
          <option value="materials science and engineering"> Materials Science and Engineering</option>
          <option value="mathematics"> Mathematics</option>
          <option value="mechanical engineering"> Mechanical Engineering</option>
          <option value="media production, management, and technology"> Media Production, Management, and Technology</option>
          <option value="microbiology and cell science"> Microbiology and Cell Science</option>
          <option value="music education"> Music Education</option>
          <option value="music"> Music</option>
          <option value="natural resource conservation"> Natural Resource Conservation</option>
          <option value="nuclear and radiological sciences"> Nuclear and Radiological Sciences</option>
          <option value="nuclear engineering"> Nuclear Engineering</option>
          <option value="nursing"> Nursing</option>
          <option value="nutritional sciences"> Nutritional Sciences</option>
          <option value="pharmacy | preprofessional"> Pharmacy | Preprofessional</option>
          <option value="philosophy"> Philosophy</option>
          <option value="physics"> Physics</option>
          <option value="plant science"> Plant Science</option>
          <option value="political science"> Political Science</option>
          <option value="portuguese"> Portuguese</option>
          <option value="psychology"> Psychology</option>
          <option value="public health"> Public Health</option>
          <option value="public relations"> Public Relations</option>
          <option value="religion"> Religion</option>
          <option value="russian"> Russian</option>
          <option value="schools, society and policy"> Schools, Society and Policy</option>
          <option value="sociology"> Sociology</option>
          <option value="soil and water sciences"> Soil and Water Sciences</option>
          <option value="spanish"> Spanish</option>
          <option value="spanish and portuguese"> Spanish and Portuguese</option>
          <option value="sport management"> Sport Management</option>
          <option value="statistics"> Statistics</option>
          <option value="sustainability and the built environment"> Sustainability and the Built Environment</option>
          <option value="sustainability studies"> Sustainability Studies</option>
          <option value="theatre"> Theatre</option>
          <option value="theatre performance"> Theatre Performance</option>
          <option value="theatre production"> Theatre Production</option>
          <option value="tourism, hospitality and event management"> Tourism, Hospitality and Event Management</option>
          <option value="wildlife ecology and conservation"> Wildlife Ecology and Conservation</option>
          <option value="women's studies"> Women's Studies</option>
          <option value="zoology"> Zoology</option>
        </select>
        <br></br>
        <br></br>
        <label for="study-habits">Study Habits: How much before a test do you start studying for it? </label>
        <select name="study-habits" id="study-habits" onChange={studyHabitHandler} >
          <option label=" "></option>
          <option value="1worst">I don't study </option>
          <option value="2bad">The day before or the day of the test.</option>
          <option value="3mid"> The week of the test. </option>
          <option value="4good"> The week before a test.</option>
          <option value="5best"> Weeks in advance.</option>     
        </select>

        <br></br>
        <br></br>

        <label for="personality">Personality: </label>
        <select 
          name="personality" 
          id="personality" 
          onChange={personalityHandler}
        > 
          <option label=" "> </option>
          <option value="0no-preferenece"> No preference</option>
          <option value="1extremely-introverted"> Extremely introverted</option>
          <option value="2very-introvreted"> Very introverted</option>
          <option value="3introverted"> Introverted</option>
          <option value="4slightly-introverted"> Slightly introverted</option>
          <option value="5neutral"> Neutral</option>
          <option value="6slightly-extroverted"> Slightly extroverted</option>
          <option value="7extroverted"> Extroverted</option>
          <option value="8very-extroverted"> Very extroverted</option>
          <option value="9extremely-extroverted"> Extremely extroverted</option> 
        </select>
        <br></br>
        <br></br>

        <label for="study-time"> Study Time: </label>
        <select 
          name="study-time" 
          id="study-time" 
          onChange={studyTimeHandler}
        > 
          <option label=" "> </option>
          <option value="0no-preferenece"> No preference</option>
          <option value="1early morning"> early morning (~5am-8am)</option>
          <option value="2morning"> morning (~8am-11am) </option>
          <option value="3noon"> noon (~11am-2pm)</option>
          <option value="4afternoon"> afternoon (~2pm-5pm) </option>
          <option value="5evening"> early evening (~5pm-8pm) </option>
          <option value="6late-evening"> late-evening (~8pm-11pm)</option>
          <option value="7midnight"> midnight (~11pm-2am) </option>
          <option value="8past-midnight"> past midngiht (~2am-5am) </option>
        </select>

      </form>
        <br></br>
        <br></br> 

        <button onClick={onSubmit}>Save Preference</button>
    </div>
  )

}

export default Preferences