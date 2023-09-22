import { db } from "../db.js";
import  jwt  from "jsonwebtoken";
import cookie from "cookie-parser";
export const getAllPosts=(req,res)=>{
    // res.json("hmm controller")
    const q=req.query.cat? "SELECT * FROM posts WHERE cat=?":"SELECT * FROM posts";

    db.query(q,[req.query.cat],(err,data)=>{
        if(err)return res.status(500).json(err);

        return res.status(200).json(data);
    })

}
export const getSinglePost=(req,res)=>{
    // res.json("hmm controller")
    const q="SELECT p.id, `username`,`title`,`desc`,p.img,u.img AS userImg,`cat`,`date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id=?";

    db.query(q,[req.params.id],(err,data)=>{
        if(err)return res.status(500).json(err)
        return res.status(200).json(data[0]);
    })
}
export const addPost=(req,res)=>{

    const keyValue = localStorage.getItem("user");

    const userData = JSON.parse(keyValue);

    // const idValue = userData.id;
    const q =
      "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      userData.id
    ];
    db.query(q,[values],(err,data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json("post has been created")
    })
}

export const deletePost=(req,res)=>{
   
    const token=req.cookies.accessToken;
    if(!token)return res.status(403).json("user not authenticated");
    jwt.verify(token,"mySecrectKey",(err,userInfo)=>{
        if(err) return res.status(402).json("token is not valid");
        const postId=req.params.id;
        const q="DELETE FROM posts WHERE `id`=? AND `uid`=?";
        db.query(q,[postId,userInfo.id],(err,data)=>{
            if(err) return res.status(403).json("you can your own post only!!");

            return res.json("post has been deleted")
        })
    })
}
// and the delete post controller code is given below
export const updatePost=(req,res)=>{
    // res.json("hmm controller")
    const keyValue = localStorage.getItem("user");

    const userData = JSON.parse(keyValue);

    // const idValue = userData.id;
    const postId = req.params.id;
    const q =
      "UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";


    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
    ];
    db.query(q,[...values,postId,userData.id],(err,data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json("post has been updated")
    })
}