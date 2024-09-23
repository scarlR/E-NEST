import { Request, Response } from "express";
import { User } from "../models/user";
import { Course } from "../models/course";
import { cloudinary } from "../utils/cloudinary";
import { courseType } from "../types/course.model";

export const beCreator = async (req: Request, res: Response) => {
  const { designation } = req.body;

  try {
    const user = req.body.user;

    user.role = "creator";
    user.designation = designation;
    user.totalCoursesCreated = 0;
    await user.save();

    return res
      .status(200)
      .json({ message: "User successfully registered as creator", user });
  } catch (error) {
    return res.status(500).json({
      message: "Spmething went wrong while becoiming a creator",
      error,
    });
  }
};

export const getAllCreators = async (req: Request, res: Response) => {
  try {
    const creators = await User.find({ role: "creator" });
    return res.status(200).json({ creators });
  } catch (error) {
    return res.status(500).json({
      message: "Spmething went wrong while getting all creators",
      error,
    });
  }
};

export const createCourse = async (req: Request, res: Response) => {
  const { title, description, categories, rating , price } = req.body;
  let image = req.file?.path;
  const imageUpload = await cloudinary.uploader.upload(image as string);
  const imageUrl = imageUpload.url;

  try {
    const instructor = req.body.user;
    if (instructor.role !== "creator") {
      return res.status(403).json({ message: "u need to be instructor" });
    }
console.log("first")
    const course: courseType = await Course.create({
      title,
      image: imageUrl,
      price,
      instructor,
        description,
      rating,
      categories: JSON.parse(categories),
    });
      await course.save();
      instructor.totalCoursesCreated += 1;
      await instructor.save();
    console.log(course);
    return res
      .status(201)
      .json({ message: "Course created successfully", course });
  } catch (error) {
    return res.status(500).json({
      message: "Spmething went wrong while creating course",
      error,
    });
  }
};
