import mongoose, { Document } from "mongoose";

export interface userType extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  image: string;
  
}
