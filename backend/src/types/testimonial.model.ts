import mongoose, { Document } from "mongoose";
import { userType } from "./user.model";

export interface testimonialType extends Document {
  user: userType; 
  text: string; 
  rating: number; 
  createdAt: Date; 
  updatedAt: Date; 
}
