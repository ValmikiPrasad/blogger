import React, { useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../contextApi/authContext'
const Login = () => {

  const [input ,setInput]=useState({
    username:"",
    password:""
  })
  const [error,setError]=useState(null);
  const navigate=useNavigate();

  const{login}=useContext(AuthContext);
  // const {curruser}=useContext(AuthContext)
  // console.log(curruser);

  const handleChange=(e)=>{
    const val=e.target.value;
    const name=e.target.name;
    setInput((preval)=>{
      return{
        ...preval,
        [name]:val
      }
    })
  }
  // console.log(input);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      // await axios.post("http://localhost:8000/api/auth/login",input);
      // console.log(res);
      await login(input);
      navigate("/")
    }
    catch(err){
      console.log(err);
      setError(err.response.data);
    }

  }
  return (
    <div className="authenti">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="Username" name="username" onChange={handleChange}/>
        <input required type="password" placeholder="Password" name ="password" onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        {error && <p>NO user found!</p>}
        <span>Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login
