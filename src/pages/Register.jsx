import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
const Register = () => {
  const [input ,setInput]=useState({
    username:"",
    email:"",
    password:""
  })
  const [error,setError]=useState(null);
  const navigate=useNavigate();

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
      await axios.post("http://localhost:8000/api/auth/register",input);
      // console.log(res);
      navigate("/login")
    }
    catch(err){
      console.log(err);
      setError(err.response.data);
    }

  }
  return (
    <div className="authenti">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="Username" name="username" onChange={handleChange} value={input.username}/>
        <input required type="email" placeholder="Email" name="email" onChange={handleChange} value={input.email}/>
        <input required type="password" placeholder="Password" name="password" onChange={handleChange} value={input.password}/>
        <button onClick={handleSubmit}>Register</button>
        {/* <p>ye to error hai!</p> */}
        {/* {error && <p>{error}</p>} */}
        {error && <p>⚠️⚠️Pahle se hi koi hai ⚠️⚠️</p>}
        <span>Do you have an account? <Link to="/login">login</Link>
        </span>
      </form>
    </div>
  )   
}

export default Register
