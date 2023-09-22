import React, { useContext, useEffect, useState } from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom"
import Delete from "../img/delete.png"
import Edit from "../img/edit2.png"
import Menu from './Menu'
import axios from 'axios'
import moment from "moment";
import { AuthContext } from '../contextApi/authContext.js'

const Single = () => {
  const[post,setPost]=useState({});

  const location=useLocation();
  const navigate=useNavigate();
  // console.log(location.pathname);
  const postId=location.pathname.split("/")[2];
  console.log(postId);

  const{currUser}=useContext(AuthContext);

  useEffect(()=>{
    const fetch=async()=>{
      try{
        const res=await axios.get(`http://localhost:8000/api/posts/${postId}`);
        setPost(res.data);
      }
      catch(err){
        console.log(err);
      }
    };
    fetch();
  },[postId])


  const handleDelete=async()=>{
    try{
    await axios.delete(`http://localhost:8000/api/posts/${postId}`);
      // setPost(res.data);
      navigate("/");
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <div className="single">
      <div className="content">
        <img src={post?.img}/>
        <div className="user">
         {post.userImg&& <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currUser.username===post.username &&
          (
          <div className="edit">
            <Link className="link" to="/write?edit=2" state={post}> <img src={Edit} alt="" /></Link>
            <Link className="link"><img onClick={handleDelete} src={Delete} alt="" /></Link>      
          </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p>{post.desc}</p>
        
      </div>
      <Menu cat={post.cat}/>
    </div>
  )
}

export default Single
