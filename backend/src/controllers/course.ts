import {Request, Response} from "express"
import { Course } from "../models/course"

export const getAllCourses = async (req: Request, res: Response) => {
    try {
        const courses = await Course.find();
        return res.status(200).json({
            courses
        })
    } catch (error) {
        return res.status(500).json({
            message: "Spmething went wrong while getting all courses",error})
    }
}