import React, {useContext} from 'react'
import './SignUp.css'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { AuthContext } from '../../AuthContext'
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom'


const SignUp = () => {
  let navigate = useNavigate()
  const {setAuthState} = useContext(AuthContext)
  const initValue = {
    username: "",
    password: "",
    name: "",
    email: "",
  }
  

  const validSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  })

  const createPreferenceForm = (data) => {
    const loginValue = {
      username: data.username,
      password: data.password,
    }
    axios.post("http://localhost:3001/users/login", loginValue).then((response) => {
      localStorage.setItem("accessToken", response.data)
      setAuthState(true)
      console.log(response.data)
      const token = localStorage.getItem('accessToken')
      const decoded = jwt_decode(token);
      const emptyPreference = {
        name: data.name,
        year: "0no-preferenece",
        major: "0no-preferenece",
        personality: "0no-preferenece",
        studyHabit: "0no-preferenece",
        studyTime: "0no-preferenece",
        UserId: decoded.id,
      }
      console.log(emptyPreference); 
      axios.post("http://localhost:3001/preferences", emptyPreference).then(() => { 
       localStorage.removeItem("accessToken");
       setAuthState(false)
      })
        //navigate(`/profile/${decoded.id}`, {replace: true});
        // navigate("/login", {replace: true});
    })

  }

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/users", data).then(() => {
      

      createPreferenceForm(data); 
      navigate("/login", {replace: true});
      //login(loginValue)

      //navigate("/login", {replace: true});
      // localStorage.setItem("accessToken", loginValue)
      // setAuthState(true)
      // navigate("/preferences", {replace: true});

      
    })
  }

  return (
    <div >
      
      <Formik
        initialValues={initValue}
        onSubmit={onSubmit}
        validationSchema={validSchema}
      >
        
        <Form className="formContainer">
        <h1>Sign Up</h1>
          <label>Name: </label>
          {/* <ErrorMessage name="username" component="span" /> */}
          <Field
            autocomplete = "off"
            id="inputCreatePost"
            name ="name"
            placeholder = "First and Last Name"
          />

          <label>UFL Email: </label>
          {/* <ErrorMessage name="username" component="span" /> */}
          <Field
            autocomplete = "off"
            id="inputCreatePost"
            name ="email"
            placeholder = "john@ufl.edu"
          />

          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autocomplete = "off"
            id="inputCreatePost"
            name ="username"
            placeholder = "(Ex. Chris123...)"
          />

          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autocomplete = "off"
            type = "password"
            id="inputCreatePost"
            name ="password"
            placeholder = "Password..."
          />

          <button type="submit"> Register </button>

        </Form>

      </Formik>
    </div>
  )
}

export default SignUp
