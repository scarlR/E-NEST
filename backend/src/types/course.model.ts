import mongoose, { Document } from "mongoose";
import { userType } from "./user.model";
export interface courseType extends Document {
  title: string;
  image: string;
  price: number;
  instructor: userType;
  rating: number;
  description: string;
}
