import axios from 'axios';
import React, { useEffect, useState } from 'react'

import {Link, useLocation} from "react-router-dom";
// const posts=[
//   {
//       id: 1,
//       title: "Lorem Ipsum",
//       img: "https://www.wpbeginner.com/wp-content/uploads/2016/11/blogimagetools.jpg",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborelrure dolor in reprehenderit in voExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//   },
//   {
//       id: 2,
//       title: "Aenean Vulputate",
//       img: "https://macln.files.wordpress.com/2011/01/blog_logo.jpg",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint at non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//   },
//   {
//       id: 3,
//       title: "Pellentesque Habitant",
//       img: "https://www.blogger.com/about/img/social/facebook-1200x630.jpg",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ex ea commodo consequat.r in reprehenderiiatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//   },
//   {
//     id: 4,
//     title: "Lorem Ipsum",
//     img: "https://www.wpbeginner.com/wp-content/uploads/2016/11/blogimagetools.jpg",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborelrure dolor in reprehenderit in voExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// },
// {
//     id: 5,
//     title: "Aenean Vulputate",
//     img: "https://macln.files.wordpress.com/2011/01/blog_logo.jpg",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint at non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// },
// {
//     id: 6,
//     title: "Pellentesque Habitant",
//     img: "https://www.blogger.com/about/img/social/facebook-1200x630.jpg",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ex ea commodo consequat.r in reprehenderiiatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// }
// ]

const Home = () => {
  const[posts,setPosts]=useState([]);
  const cat=useLocation().search;
  console.log(cat);
  useEffect(()=>{
    const fetch=async()=>{
      try{
        const res=await axios.get(`http://localhost:8000/api/posts${cat}`);
        setPosts(res.data);
      }
      catch(err){
        console.log(err);
      }
    };
    fetch();
  },[cat])
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post)=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
              <div className="bg"></div>
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <Link className='link' to={`/post/${post.id}`}>
              <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
// and while clicking on the post i get directed to single page as code given below
export default Home
