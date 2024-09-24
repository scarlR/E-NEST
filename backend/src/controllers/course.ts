import {Request, Response} from "express"
import { Course } from "../models/course"

export const getAllCourses = async (req: Request, res: Response) => {
    try {
        const courses = await Course.find().populate('instructor', 'name');;
        return res.status(200).json({
            courses
        })
    } catch (error) {
        return res.status(500).json({
            message: "Spmething went wrong while getting all courses",error})
    }
}

export const getCourse = async (req: Request, res: Response) => {
  try {
    console.log(req.params.id);

    
    const course = await Course.findOne({
      "categories.name": req.params.id, 
    }).populate("instructor", "name");

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
      console.log(course)

    return res.status(200).json({
      course,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while getting the course",
      error, 
    });
  }
};