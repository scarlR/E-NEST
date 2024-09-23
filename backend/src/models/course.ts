import mongoose, { Document } from "mongoose";
import { courseType } from "../types/course.model";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: Number,
      default: 4.3,
    },
    description: {
      type: String,
      required: true,
    },
    categories: [
      {
        name: {
          type: String,
          required: true,
        },
        subcategories: [
          {
            type: String,
            required: true,
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

export const Course = mongoose.model<courseType>("Course", courseSchema);
