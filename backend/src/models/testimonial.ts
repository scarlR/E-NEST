import mongoose, { Document } from "mongoose";
import { testimonialType } from "../types/testimonial.model";

const schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Testimonial = mongoose.model<testimonialType>(
  "Testimonial",
  schema
);
