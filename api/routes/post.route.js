import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { create, deletepost, getposts, updatepost } from "../controllers/post.controller.js";
import { get } from "http";

const router = express.Router();

// router.post("/create", verifyToken, create)
router.post("/create", create)
router.get('/getposts', getposts)
router.delete('/deletepost/:postId/:userId', verifyToken, deletepost)
router.put('/updatepost/:postId/:userId', verifyToken, updatepost)
// router.put('/updatepost/:postId/:userId', updatepost)

export default router;