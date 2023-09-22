import axios from 'axios';
import React, { useEffect, useState } from 'react'
// const posts=[
//     {
//         id: 1,
//         title: "Lorem Ipsum",
//         img: "https://www.wpbeginner.com/wp-content/uploads/2016/11/blogimagetools.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborelrure dolor in reprehenderit in voExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//     },
//     {
//         id: 2,
//         title: "Aenean Vulputate",
//         img: "https://macln.files.wordpress.com/2011/01/blog_logo.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint at non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//     },
//     {
//         id: 3,
//         title: "Pellentesque Habitant",
//         img: "https://www.blogger.com/about/img/social/facebook-1200x630.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ex ea commodo consequat.r in reprehenderiiatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//     },
//     {
//       id: 4,
//       title: "Lorem Ipsum",
//       img: "https://www.wpbeginner.com/wp-content/uploads/2016/11/blogimagetools.jpg",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborelrure dolor in reprehenderit in voExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//   },
//   {
//       id: 5,
//       title: "Aenean Vulputate",
//       img: "https://macln.files.wordpress.com/2011/01/blog_logo.jpg",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint at non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//   },
//   {
//       id: 6,
//       title: "Pellentesque Habitant",
//       img: "https://www.blogger.com/about/img/social/facebook-1200x630.jpg",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ex ea commodo consequat.r in reprehenderiiatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//   }
//   ]
const Menu = ({cat}) => {
    const[posts,setPosts]=useState([]);
//   console.log(cat);
  useEffect(()=>{
    const fetch=async()=>{
      try{
        const res=await axios.get(`http://localhost:8000/api/posts/?cat=${cat}`);
        setPosts(res.data);
      }
      catch(err){
        console.log(err);
      }
    };
    fetch();
  },[cat])
  return (
    <div className="menu">
        <h1>Posts you may like.</h1>
        {posts.map((post)=>(
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu
