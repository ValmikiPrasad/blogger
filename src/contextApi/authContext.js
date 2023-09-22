// import createContext, { useEffect, useState } from "react";

// export const AuthContext=createContext();

// export const authContextProvider=({children})=>{
//     const[currUser,setCurrUser]=useState(JSON.parse(localStorage.getItem("user")) || null);

//     const login=async(input)=>{
//         const res=await axios.post("http://localhost:8000/api/auth/login",input);
//         setCurrUser(res.data);
//     }
//     const logout=async(input)=>{
//         await axios.post("http://localhost:8000/api/auth/logout");
//         setCurrUser(null);
//     }
//     useEffect(()=>{
//         localStorage.setItem("user",JSON.stringify(currUser));
//     },[currUser]);
//     return<AuthContext.provider value={{currUser,login,logout}}>{children}</AuthContext.provider>
// }

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
    // const navigate=useNavigate();
  const login = async (input) => {
    const res = await axios.post("http://localhost:8000/api/auth/login", input);
    setCurrUser(res.data);
  };

  const logout = async (input) => {
    await axios.post("http://localhost:8000/api/auth/logout");
    setCurrUser(null);
    // navigate("/");
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currUser));
  }, [currUser]);

  return (
    <AuthContext.Provider value={{ currUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
