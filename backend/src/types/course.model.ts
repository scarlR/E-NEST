import mongoose, { Document } from "mongoose";
import { userType } from "./user.model";

interface category {
  name: string;
  subcategories: string[]; 
}
export interface courseType extends Document {
  title: string;
  image: string; 
  price: number;
  instructor: userType;
  rating: number;
  description: string;
  categories: category[]; 
}