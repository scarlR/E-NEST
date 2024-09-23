import { Request, Response } from "express";
import { Testimonial } from "../models/testimonial";
import { testimonialType } from "../types/testimonial.model";

export const post = async (req: Request, res: Response) => {
  const { text, rating } = req.body;
  const userId = req.body.user._id;

  try {
    const testimonial: testimonialType = await Testimonial.create({
      user: userId,
      text,
      rating,
    });

    return res
      .status(201)
      .json({ message: "Testimonial posted successfully", testimonial });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while posting the testimonial",
      error,
    });
  }
};


export const getAllTestimonial = async (req: Request, res: Response) => {
  try {
    const testimonials = await Testimonial.find();
    return res.status(200).json({ testimonials });
  } catch (error) {
    return res.status(500).json({
      message: "Spmething went wrong while getting all testimonials",
      error,
    });
  }
}