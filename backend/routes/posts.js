import  express  from "express";
import { addPost, deletePost, getAllPosts, getSinglePost, updatePost } from "../controller/post.js";

const router=express.Router();

// router.get("/test",addPost)

router.get("/",getAllPosts);
router.get("/:id",getSinglePost);
router.post("/",addPost);
router.delete("/:id",deletePost);
router.put("/:id",updatePost);
export default router;
