import express from "express";
import { getAllCourses, getCourse } from "../controllers/course";

const courseRouter = express.Router();

// routes

courseRouter.get("/all", getAllCourses);




export default courseRouter;
